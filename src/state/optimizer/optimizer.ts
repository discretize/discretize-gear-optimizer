/* eslint-disable no-await-in-loop */
/* eslint-disable no-loop-func */
import type { ExtraFilterMode } from '../slices/controlsSlice';
import type { ExtrasType } from '../slices/extras';
import type { RootState } from '../store';
import { iteratePartitionCount } from './combinatorics';
import type { Character, OptimizerCoreSettings } from './optimizerCore';
import { characterLT, UPDATE_MS } from './optimizerCore';
import type { ExtrasCombinationEntry } from './optimizerSetup';
import { setupCombinations } from './optimizerSetup';

export interface Combination extends ExtrasCombinationEntry {
  index: number;

  settings: OptimizerCoreSettings;
  done: boolean;
  list: Character[];
  calculationRuns: number;

  heuristicDisabled?: boolean;
  heuristicBestResult?: Character;

  heuristicDone?: boolean;
  heuristicCalculationRuns?: number;
}

type Result =
  | {
      percent: number;
      heuristicsPercent?: number;
      isChanged: true;
      list: Character[];
      filteredLists: Record<ExtraFilterMode, Character[]>;
    }
  | {
      percent: number;
      heuristicsPercent?: number;
      isChanged: false;
      list: undefined;
      filteredLists: undefined;
    };

const findExtraBestResults = (
  combinationBestResults: Character[],
  ...extrasTypes: ExtrasType[]
) => {
  const result: Character[] = [];
  combinationBestResults.forEach((character) => {
    const isWorse = result.some((prevChar) => {
      const sameExtra = extrasTypes.every(
        (extra) =>
          prevChar.settings.extrasCombination[extra] ===
          character.settings.extrasCombination[extra],
      );

      return sameExtra && prevChar.results!.value > character.results!.value;
    });
    if (!isWorse) result.push(character);
  });
  return result;
};

const createWorker = () =>
  new ComlinkWorker<typeof import('./worker')>(new URL('./worker.ts', import.meta.url), {
    type: 'module',
  });

const createdWorkers: ReturnType<typeof createWorker>[] = [];

const createWorkers = (count: number) => {
  while (createdWorkers.length < count) {
    createdWorkers.push(createWorker());
  }
  return createdWorkers.slice(0, count);
};

interface Overrides {
  combinations?: Combination[];
}

export async function* calculate(
  reduxState: RootState,
  threads: number,
  overrides: Overrides = {},
) {
  /**
   * set up input
   */

  const combinations =
    overrides.combinations ??
    setupCombinations(reduxState).map(
      ({ extrasCombinationEntry, settings }, index): Combination => ({
        ...extrasCombinationEntry,
        settings,
        done: false,
        list: [],
        calculationRuns: 0,
        index,
      }),
    );

  /**
   * iteration
   */

  const activeCombinations = combinations.filter(({ heuristicDisabled }) => !heuristicDisabled);
  const activeThreads = Math.min(threads, activeCombinations.length);

  const workers = createWorkers(activeThreads);
  console.log(`calculating using ${activeThreads} workers`);

  workers.forEach((worker, workerIndex) =>
    worker.setup(
      activeCombinations.filter(
        (_, combinationIndex) => combinationIndex % activeThreads === workerIndex,
      ),
    ),
  );

  const { rankby, runsAfterThisSlot } = combinations[0].settings;
  const calculationTotal = runsAfterThisSlot[0];
  const globalCalculationTotal = calculationTotal * activeCombinations.length;

  let globalWorstScore = 0;

  let iterationTimer = Date.now();

  const requestWorkerResults = () =>
    Promise.all(
      workers.map((worker) =>
        worker.next().then(({ combinationIndex, result }) => {
          const combination = combinations.find(({ index }) => index === combinationIndex)!;

          if (result.done) {
            combination.done = true;
          } else {
            const {
              value: { isChanged, calculationRuns, newList },
            } = result;
            if (newList) {
              combination.list = newList;
            }

            combination.calculationRuns = calculationRuns ?? 0;
            // console.log(`option ${index} progress: ${calculationRuns} / ${calculationTotal}`);

            return isChanged;
          }
        }),
      ),
    );

  // concurrency optimization: request new batch of results before waiting for the previous batch
  // prevents waiting for one slow thread (until a thread is delayed by an entire batch duration)
  const queue: ReturnType<typeof requestWorkerResults>[] = [];
  queue.push(requestWorkerResults());

  while (true) {
    queue.push(requestWorkerResults());
    const isChanged = (await queue.shift()!).some(Boolean);

    const globalCalculationRuns = combinations.reduce((prev, cur) => prev + cur.calculationRuns, 0);
    console.log(`total progress: ${globalCalculationRuns} / ${globalCalculationTotal}`);

    const everyCombinationDone = combinations.every((comb) => comb.done || comb.heuristicDisabled);

    const createResult = () => {
      if (!isChanged) {
        return {
          percent: Math.floor((globalCalculationRuns * 100) / globalCalculationTotal),
          isChanged,
        } as Result;
      }

      const normalList = combinations
        .flatMap(({ list, heuristicBestResult }) =>
          list.length === 0 && heuristicBestResult ? [heuristicBestResult] : list,
        )
        .filter((character) => character.attributes[rankby] >= globalWorstScore)
        .sort((a, b) => characterLT(a, b, rankby))
        .slice(0, 50);

      if (normalList.length === 50)
        globalWorstScore = normalList[normalList.length - 1].attributes[rankby];

      const combinationBestResults = combinations
        .map(({ list, heuristicBestResult }) => list[0] ?? heuristicBestResult)
        .filter(Boolean)
        .sort((a, b) => characterLT(a, b, rankby));

      const filteredLists: Record<ExtraFilterMode, Character[]> = {
        Combinations: combinationBestResults.slice(0, 100),
        Sigils: findExtraBestResults(combinationBestResults, 'Sigil1', 'Sigil2'),
        Runes: findExtraBestResults(combinationBestResults, 'Runes'),
        Relics: findExtraBestResults(combinationBestResults, 'Relics'),
        Nourishment: findExtraBestResults(combinationBestResults, 'Nourishment'),
        Enhancement: findExtraBestResults(combinationBestResults, 'Enhancement'),
      };

      return {
        percent: Math.floor((globalCalculationRuns * 100) / globalCalculationTotal),
        isChanged,
        list: normalList,
        filteredLists,
      } as Result;
    };

    if (everyCombinationDone) {
      return createResult();
    }

    if (Date.now() - iterationTimer > UPDATE_MS) {
      yield createResult();
      iterationTimer = Date.now();
    }
  }
}

interface HeuristicCombination extends Combination {
  heuristicDone: boolean;
  heuristicCalculationRuns: number;
}

export async function* calculateHeuristic(
  reduxState: RootState,
  threads: number,
  targetCombinationCount: number,
) {
  // 28 closely matches a single shoulderpiece
  // 118 closely matches both a single shoulderpiece and a single back item, but is much slower
  const split = 28;

  /**
   * set up input
   */

  const normalCombinations: Combination[] = setupCombinations(reduxState).map(
    ({ extrasCombinationEntry, settings }, index) => ({
      ...extrasCombinationEntry,
      settings,
      done: false,
      list: [],
      calculationRuns: 0,
      index,
    }),
  );

  const { rankby, affixes } = normalCombinations[0].settings;

  // don't do any heuristic stuff with few combinations/one affix
  if (normalCombinations.length <= targetCombinationCount || affixes.length < 2)
    return yield* calculate(reduxState, threads, { combinations: normalCombinations });

  console.time('heuristics');

  /**
   * iteration
   */

  const activeThreads = Math.min(threads, normalCombinations.length);

  const workers = createWorkers(activeThreads);
  console.log(`calculating heuristics using ${activeThreads} workers`);

  workers.forEach((worker, workerIndex) =>
    worker.setupHeuristic(
      normalCombinations.filter(
        (_, combinationIndex) => combinationIndex % activeThreads === workerIndex,
      ),
      split,
    ),
  );

  const calculationTotal = iteratePartitionCount(split, affixes.length);
  const globalCalculationTotal = calculationTotal * normalCombinations.length;

  const combinations: HeuristicCombination[] = normalCombinations.map((comb) => ({
    ...comb,
    heuristicDone: false,
    heuristicCalculationRuns: 0,
  }));

  //

  let iterationTimer = Date.now();

  const requestWorkerResults = () =>
    Promise.all(
      workers.map((worker) =>
        worker.next().then(({ combinationIndex, result }) => {
          const combination = combinations.find(({ index }) => index === combinationIndex)!;

          if (result.done) {
            combination.heuristicDone = true;
          } else {
            const {
              value: { isChanged, calculationRuns, newList },
            } = result;
            if (newList) {
              // eslint-disable-next-line prefer-destructuring
              combination.heuristicBestResult = newList[0];
            }

            combination.heuristicCalculationRuns = calculationRuns ?? 0;
            // console.log(`option ${index} heuristics progress: ${calculationRuns} / ${calculationTotal}`);

            return isChanged;
          }
        }),
      ),
    );

  // concurrency optimization: request new batch of results before waiting for the previous batch
  // prevents waiting for one slow thread (until a thread is delayed by an entire batch duration)
  const queue: ReturnType<typeof requestWorkerResults>[] = [];
  queue.push(requestWorkerResults());

  while (true) {
    queue.push(requestWorkerResults());
    const isChanged = (await queue.shift()!).some(Boolean);

    const globalCalculationRuns = combinations.reduce(
      (prev, cur) => prev + cur.heuristicCalculationRuns,
      0,
    );
    console.log(`total heuristics progress: ${globalCalculationRuns} / ${globalCalculationTotal}`);

    const everyCombinationDone = combinations.every((comb) => comb.heuristicDone);

    const createResult = () => {
      if (!isChanged) {
        return {
          percent: 0,
          heuristicsPercent: Math.floor((globalCalculationRuns * 100) / globalCalculationTotal),
          isChanged,
        } as Result;
      }

      const combinationBestResults = combinations
        .map(({ heuristicBestResult }) => heuristicBestResult)
        .filter(Boolean)
        .sort((a, b) => characterLT(a, b, rankby));

      const normalList = combinationBestResults.slice(0, 50);

      const filteredLists: Record<ExtraFilterMode, Character[]> = {
        Combinations: normalList,
        Sigils: findExtraBestResults(combinationBestResults, 'Sigil1', 'Sigil2'),
        Runes: findExtraBestResults(combinationBestResults, 'Runes'),
        Relics: findExtraBestResults(combinationBestResults, 'Relics'),
        Nourishment: findExtraBestResults(combinationBestResults, 'Nourishment'),
        Enhancement: findExtraBestResults(combinationBestResults, 'Enhancement'),
      };

      return {
        percent: 0,
        heuristicsPercent: Math.floor((globalCalculationRuns * 100) / globalCalculationTotal),
        isChanged,
        list: normalList,
        filteredLists,
      } as Result;
    };

    if (everyCombinationDone) {
      if (targetCombinationCount === 0) {
        return createResult();
      }

      combinations.sort((a, b) =>
        characterLT(a.heuristicBestResult, b.heuristicBestResult, rankby),
      );

      const bestResult = combinations[0].heuristicBestResult;

      if (bestResult) {
        combinations.slice(targetCombinationCount).forEach((comb) => {
          if (
            comb.heuristicBestResult === undefined ||
            comb.heuristicBestResult.attributes[rankby] / bestResult.attributes[rankby] < 0.998
          ) {
            comb.heuristicDisabled = true;
          }
        });
      }

      console.timeEnd('heuristics');

      return yield* calculate(reduxState, threads, { combinations });
    }

    if (Date.now() - iterationTimer > UPDATE_MS) {
      yield createResult();
      iterationTimer = Date.now();
    }
  }
}

let generator: ReturnType<typeof calculate>;

export const setup = (
  reduxState: RootState,
  jsHeuristicsEnabled: boolean,
  jsHeuristicsTarget: number,
  threads: number,
) => {
  generator = jsHeuristicsEnabled
    ? calculateHeuristic(reduxState, threads, jsHeuristicsTarget)
    : calculate(reduxState, threads);
};
export const next = () => generator.next();
