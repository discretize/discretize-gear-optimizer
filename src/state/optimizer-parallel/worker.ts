/* eslint-disable camelcase */
import init, { calculate, calculate_heuristics_only, calculate_with_heuristics } from 'wasm_module';
import { allExtrasModifiersById } from '../../assets/modifierdata';
import { AffixName } from '../../utils/gw2-data';
import type { Combination as CombinationOld } from '../optimizer/optimizerSetup';
import {
  allowedDuplicateSigils,
  getExtrasData,
  getLifestealAmount,
  lifestealData,
} from '../slices/extras';
import { ResultProperties } from './entry';
import { Combination, Settings, createCombination } from './optimizerSetup';
import { descendSubtreeDFS } from './tree';
import {
  combinationsToWorkerString,
  enhanceResults,
  getAffixId,
  settingsToWorkerString,
} from './utils';
import {
  ERROR,
  FINISHED,
  FINISHED_HEURISTICS,
  MessageType,
  isStartHeuristicsMessage,
  isStartMessage,
} from './workerMessageTypes';

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

    postMessage({
      type: FINISHED,
      data: enhanceResults(JSON.parse(data || '[]'), settings, combinations, resultProperties),
    });
  } catch (e) {
    postMessage({
      type: ERROR,
      data: e,
    });
  }
}
const bestList: [Combination, CombinationOld][] = [];

async function start_heuristics(
  chunks: string[][],
  extrasIds: string[][],
  reduxState: any,
  settings: Settings,
) {
  await init();

  const data = getExtrasData(reduxState);
  const lifestealAmount = getLifestealAmount(reduxState);

  const getModifiers = (extrasCombination: Record<string, string>) => {
    const allModifiers = Object.entries(extrasCombination)
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

  let combinationId = 0;
  let currentChunkList: [Combination, CombinationOld][] = [];

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

    const combinationOld: CombinationOld = {
      extrasCombination: extras,
      extrasModifiers: getModifiers(extras),
    };

    const combination = createCombination(combinationOld, reduxState);
    currentChunkList.push([combination, combinationOld]);

    if (currentChunkList.length === 100000) {
      wrapper_calc_wasm_heuristics(settings, currentChunkList);
      // reset chunk list
      currentChunkList = [];
      console.log('finished run', combinationId);
    }

    // this implements the calculation via JS core
    // const optimizerCore: OptimizerCore = new OptimizerCore({
    //   ...settings,
    //   ...combination,
    //   maxResults: BENCHMARK_RUNS,
    // });
    // optimizerCore.list = bestList;
    // // generate random gear
    // for (let i = 0; i < BENCHMARK_RUNS; i++) {
    //   const gear: Gear = [];
    //   const gearStats: GearStats = {};

    //   for (let i = 0; i < settings.slots; i++) {
    //     const selections = settings.affixesArray[i];
    //     const index = Math.floor(Math.random() * selections.length);
    //     gear.push(selections[index]);

    //     for (const [stat, bonus] of settings.affixStatsArray[i][index]) {
    //       gearStats[stat] = (gearStats[stat] || 0) + bonus;
    //     }
    //   }

    //   optimizerCore.testCharacter(gear, gearStats);
    // }

    // bestList = optimizerCore.list;
    combinationId++;
  };

  const now = performance.now();
  // await all descends
  await Promise.all(chunks.map((chunk) => descendSubtreeDFS(extrasIds, chunk, callback)));

  if (currentChunkList.length > 0) {
    wrapper_calc_wasm_heuristics(settings, currentChunkList);
  }

  console.log('Heuristics Wasm calculation finished in', performance.now() - now, 'ms');

  console.log(bestList);
  postMessage({
    type: FINISHED_HEURISTICS,
    data: bestList,
  });
}

function wrapper_calc_wasm_heuristics(settings: Settings, chunks: [Combination, CombinationOld][]) {
  console.log('chunks', chunks);
  const resStr = calculate_heuristics_only(
    settingsToWorkerString(settings),
    combinationsToWorkerString(chunks.map((c) => c[0])),
  );
  const combinationIds: number[] = JSON.parse(resStr || '[]');
  // find combinations for the ids
  const res = combinationIds.map((id) => chunks[id]);

  bestList.push(...res);
}
