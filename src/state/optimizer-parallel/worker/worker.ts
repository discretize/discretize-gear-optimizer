/* eslint-disable camelcase */
// eslint-disable-next-line import/no-unresolved
import init, { calculate, calculate_heuristics_only, calculate_with_heuristics } from 'wasm_module';
import { allExtrasModifiersById } from '../../../assets/modifierdata';
import { AffixName } from '../../../utils/gw2-data';
import type { ExtrasCombinationEntry } from '../../optimizer/optimizerSetup';
import {
  ExtrasCombination,
  allowedDuplicateSigils,
  getExtrasData,
  getLifestealAmount,
  lifestealData,
} from '../../slices/extras';
import { Combination, Settings, createCombination } from '../optimizerSetup';
import { descendSubtreeDFS } from '../tree';
import { combinationsToWorkerString, getAffixId, settingsToWorkerString } from '../utils';
import {
  ERROR,
  FINISHED,
  FINISHED_HEURISTICS,
  MessageType,
  isStartHeuristicsMessage,
  isStartMessage,
  FinishedMessage,
  ErrorMessage,
  FinishedHeuristicsMessage,
} from './workerMessageTypes';
import { ResultProperties, enhanceResults } from '../results';
import { objectEntries } from '../../../utils/usefulFunctions';
import { RootState } from '../../store';

onmessage = (e: MessageEvent<MessageType>) => {
  console.log('worker received message', e.data);

  if (isStartMessage(e.data)) {
    const { chunks, settings, combinations, resultProperties, withHeuristics } = e.data;
    start(chunks, settings, combinations, resultProperties, withHeuristics);
  } else if (isStartHeuristicsMessage(e.data)) {
    const { chunks, extrasIds, reduxState, settings } = e.data;
    start_heuristics(chunks, extrasIds, reduxState, settings);
  }
};

async function start(
  chunks: string[][],
  settings: Settings,
  combinations: Combination[],
  resultProperties: ResultProperties,
  withHeurisics: boolean,
) {
  let now = performance.now();
  // await wasm module initialization
  await init();

  console.log('Wasm module initialized in', performance.now() - now, 'ms');

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

    console.log('Wasm calculation finished in', performance.now() - now, 'ms');

    const message: FinishedMessage = {
      type: FINISHED,
      data: enhanceResults(JSON.parse(data || '[]'), settings, combinations, resultProperties),
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
const bestList: [Combination, ExtrasCombinationEntry][] = [];

/**
 * Runs heuristics to figure out which extras combinations are likely good.
 * posts a message to the main thread with the result
 *
 * @param {string[][]} chunks array of subtrees to calculate (extras combinations tree)
 * @param {string[][]} extrasIds choices of extras for each extras slot
 * @param {RootState} reduxState
 * @param {Settings} settings
 */
async function start_heuristics(
  chunks: string[][],
  extrasIds: string[][],
  reduxState: RootState,
  settings: Settings,
) {
  await init();

  const data = getExtrasData(reduxState);
  const lifestealAmount = getLifestealAmount(reduxState);

  const getModifiers = (extrasCombination: ExtrasCombination) => {
    const allModifiers = objectEntries(extrasCombination)
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
  let currentChunkList: [Combination, ExtrasCombinationEntry][] = [];

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
    };

    const extrasCombinationEntry: ExtrasCombinationEntry = {
      extrasCombination: extras,
      extrasModifiers: getModifiers(extras),
    };

    const combination = createCombination(extrasCombinationEntry.extrasModifiers, reduxState);
    currentChunkList.push([combination, extrasCombinationEntry]);

    if (currentChunkList.length % 10000 === 0) {
      // add progress message
    }
    if (currentChunkList.length === 100000) {
      // batch process
      console.log('Calculating batch of ', currentChunkList.length, ' extras combinations');
      calcWasmHeuristics(settings, currentChunkList);
      // reset chunk list
      currentChunkList = [];
      console.log('Finished run');
    }
  };

  const now = performance.now();
  // await all descends
  await Promise.all(chunks.map((chunk) => descendSubtreeDFS(extrasIds, chunk, callback)));

  // often, there will be extras combinations left since descendSubtreeDFS batches calls to the wasm heuristics calculator
  if (currentChunkList.length > 0) {
    calcWasmHeuristics(settings, currentChunkList);
  }

  console.log('Heuristics Wasm calculation finished in', performance.now() - now, 'ms');

  const message: FinishedHeuristicsMessage = {
    type: FINISHED_HEURISTICS,
    data: bestList,
  };
  postMessage(message);
}

function calcWasmHeuristics(settings: Settings, chunks: [Combination, ExtrasCombinationEntry][]) {
  const resStr = calculate_heuristics_only(
    settingsToWorkerString(settings),
    combinationsToWorkerString(chunks.map((chunk) => chunk[0])),
  );
  const combinationIds: number[] = JSON.parse(resStr || '[]');
  // find combinations for the ids
  const res = combinationIds.map((id) => chunks[id]);

  bestList.push(...res);

  console.log('current best list', bestList);
}
