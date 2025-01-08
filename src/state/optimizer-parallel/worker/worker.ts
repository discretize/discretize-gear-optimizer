/* eslint-disable camelcase */
import { allExtrasModifiersById } from 'data/modifierdata';
import init, {
  calculate,
  calculate_heuristics_only,
  calculate_with_heuristics,
} from '../../../../wasm_module/pkg'; // eslint-disable-line
import type { AffixName } from '../../../utils/gw2-data';
import { objectEntries } from '../../../utils/usefulFunctions';
import type {
  AppliedModifier,
  ExtrasCombinationEntry,
} from '../../optimizer/types/optimizerSetupTypes';
import type { ExtrasCombination } from '../../slices/extras';
import {
  allowedDuplicateSigils,
  getExtrasData,
  getLifestealAmount,
  lifestealData,
} from '../../slices/extras';
import type { RootState } from '../../store';
import type { CalculationSettings, CombinationSettings } from '../optimizerSetup';
import { createCombinationSettings } from '../optimizerSetup';
import { descendSubtreeDFS } from '../tree';
import { combinationsToWorkerString, getAffixId, settingsToWorkerString } from '../utils';
import type {
  ErrorMessage,
  FinishedHeuristicsMessage,
  FinishedMessage,
  MessageType,
} from './workerMessageTypes';
import {
  ERROR,
  FINISHED,
  FINISHED_HEURISTICS,
  isStartHeuristicsMessage,
  isStartMessage,
} from './workerMessageTypes';

let index = 0;

onmessage = (e: MessageEvent<MessageType>) => {
  console.info('worker received message', e.data);

  if (isStartMessage(e.data)) {
    const { chunks, settings, combinations, withHeuristics, index: threadIndex } = e.data;
    index = threadIndex;
    start(chunks, settings, combinations, withHeuristics);
  } else if (isStartHeuristicsMessage(e.data)) {
    const { chunks, extrasIds, reduxState, settings, index: threadIndex } = e.data;
    index = threadIndex;
    start_heuristics(chunks, extrasIds, reduxState, settings);
  }
};

async function start(
  chunks: string[][],
  settings: CalculationSettings,
  combinations: CombinationSettings[],
  withHeurisics: boolean,
) {
  let now = performance.now();
  // await wasm module initialization
  await init({});

  console.info(index, 'Wasm module initialized in', performance.now() - now, 'ms');

  now = performance.now();

  const calcFn = withHeurisics ? calculate_with_heuristics : calculate;
  const transformedChunks = chunks.map((chunk: string[]) =>
    chunk.map((value) => getAffixId(value as AffixName)),
  );

  try {
    // also adjust the settings to be usable by rust (we use c-like enums there)
    const data = calcFn(
      JSON.stringify(transformedChunks),
      settingsToWorkerString(settings),
      combinationsToWorkerString(combinations),
    );

    console.log(index, 'Wasm calculation thread finished in', performance.now() - now, 'ms');

    const message: FinishedMessage = {
      type: FINISHED,
      results: JSON.parse(data || '[]') as unknown[],
    };
    postMessage(message);
  } catch (e) {
    const message: ErrorMessage = {
      type: ERROR,
      data: e,
    };
    postMessage(message);
  }
}

/**
 * Runs heuristics to figure out which extras combinations are likely good.
 * posts a message to the main thread with the result
 *
 * @param {string[][]} chunks array of subtrees to calculate (extras combinations tree)
 * @param {string[][]} extrasIds choices of extras for each extras slot
 * @param {RootState} reduxState
 * @param {CalculationSettings} settings
 */
async function start_heuristics(
  chunks: string[][],
  extrasIds: string[][],
  reduxState: RootState,
  settings: CalculationSettings,
) {
  await init({});

  const data = getExtrasData(reduxState);
  const lifestealAmount = getLifestealAmount(reduxState);

  const getModifiers = (extrasCombination: ExtrasCombination) => {
    const allModifiers: AppliedModifier[] = objectEntries(extrasCombination)
      .filter(([_, id]) => id)
      .map(([type, id]) => {
        if (!allExtrasModifiersById[id]) throw new Error(`missing data for extras id: ${id}`);
        const itemData = allExtrasModifiersById[id];
        return { id, ...itemData, amount: data[type][id]?.amount };
      });
    if (allExtrasModifiersById?.[extrasCombination?.Nourishment]?.hasLifesteal) {
      allModifiers.push({ ...lifestealData, amount: lifestealAmount });
    }
    return allModifiers;
  };

  // store combinations here; we batch process them
  let currentChunkList: [CombinationSettings, ExtrasCombinationEntry][] = [];

  const bestList: [CombinationSettings, ExtrasCombinationEntry][] = [];

  // callback that is called for every leaf of the extras combination tree
  // we calculate the attributes and modifiers of the combination here
  const callback = async (leaf: string[]) => {
    if (leaf[1] === leaf[2] && !allowedDuplicateSigils.includes(leaf[1])) {
      return;
    }

    const extras = {
      Runes: leaf[0],
      Sigil1: leaf[1],
      Sigil2: leaf[2],
      Enhancement: leaf[3],
      Nourishment: leaf[4],
      Relics: leaf[5],
    };

    const extrasCombinationEntry: ExtrasCombinationEntry = {
      extrasCombination: extras,
      extrasModifiers: getModifiers(extras),
    };

    const combination = createCombinationSettings(
      reduxState,
      extrasCombinationEntry.extrasModifiers,
    );
    currentChunkList.push([combination, extrasCombinationEntry]);

    if (currentChunkList.length % 10000 === 0) {
      // add progress message
    }
    if (currentChunkList.length === 100000) {
      // batch process
      console.log(index, 'Calculating batch of ', currentChunkList.length, ' extras combinations');
      bestList.push(...calcWasmHeuristics(settings, currentChunkList));
      // reset chunk list
      currentChunkList = [];
      console.log(index, 'Finished run');
    }
  };

  const now = performance.now();
  // await all descends
  await Promise.all(chunks.map((chunk) => descendSubtreeDFS(extrasIds, chunk, callback)));

  // often, there will be extras combinations left since descendSubtreeDFS batches calls to the wasm heuristics calculator
  if (currentChunkList.length > 0) {
    bestList.push(...calcWasmHeuristics(settings, currentChunkList));
  }

  console.log(index, 'Heuristics Wasm calculation finished in', performance.now() - now, 'ms');
  console.info(index, 'Result:', bestList);

  const message: FinishedHeuristicsMessage = {
    type: FINISHED_HEURISTICS,
    data: bestList,
  };
  postMessage(message);
}

function calcWasmHeuristics(
  settings: CalculationSettings,
  chunks: [CombinationSettings, ExtrasCombinationEntry][],
) {
  const resStr = calculate_heuristics_only(
    settingsToWorkerString(settings),
    combinationsToWorkerString(chunks.map((chunk) => chunk[0])),
  );
  const combinationIds = JSON.parse(resStr || '[]') as number[];
  // find combinations for the ids
  const res = combinationIds.map((id) => chunks[id]);

  return res;
}
