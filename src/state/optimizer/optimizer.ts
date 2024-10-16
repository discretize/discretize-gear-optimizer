/* eslint-disable no-loop-func */
import type { ExtraFilterMode } from '../slices/controlsSlice';
import type { ExtrasType } from '../slices/extras';
import type { RootState } from '../store';
import { iteratePartitionCount } from './combinatorics';
import type { CalculateGenerator, Character, OptimizerCoreSettings } from './optimizerCore';
import { characterLT, OptimizerCore, UPDATE_MS } from './optimizerCore';
import type { ExtrasCombinationEntry } from './optimizerSetup';
import { setupCombinations } from './optimizerSetup';

interface Combination extends ExtrasCombinationEntry {
  settings: OptimizerCoreSettings;
  calculation: CalculateGenerator;
  done: boolean;
  list: Character[];
  calculationRuns: number;

  heuristicDisabled?: boolean;
  heuristicBestResult?: Character;

  heuristicCore?: OptimizerCore;
  heuristicCalculation?: CalculateGenerator;
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

interface Overrides {
  combinations?: Combination[];
}

export function* calculate(reduxState: RootState, overrides: Overrides = {}) {
  /**
   * set up input
   */

  const combinations =
    overrides.combinations ??
    setupCombinations(reduxState).map(({ extrasCombinationEntry, settings }): Combination => {
      const core = new OptimizerCore(settings);
      const calculation = core.calculate();
      return {
        ...extrasCombinationEntry,
        settings,
        calculation,
        done: false,
        list: [],
        calculationRuns: 0,
      };
    });

  /**
   * iteration
   */

  const { rankby, runsAfterThisSlot } = combinations[0].settings;
  const calculationTotal = runsAfterThisSlot[0];
  const globalCalculationTotal =
    calculationTotal * combinations.filter(({ heuristicDisabled }) => !heuristicDisabled).length;

  let i = 0;

  let globalWorstScore = 0;

  let iterationTimer = Date.now();

  while (true) {
    const combination = combinations[i];

    const currentIndex = i;
    i = (i + 1) % combinations.length;

    if (combination.done || combination.heuristicDisabled) continue;

    const {
      value: { isChanged, calculationRuns, newList },
      done,
    } = combination.calculation.next();

    combination.calculationRuns = calculationRuns ?? 0;

    const globalCalculationRuns = combinations.reduce((prev, cur) => prev + cur.calculationRuns, 0);
    console.log(
      `option ${currentIndex} progress: ${calculationRuns} / ${calculationTotal}. total: ${globalCalculationRuns} / ${globalCalculationTotal}`,
    );

    combination.list = newList;
    combination.done = Boolean(done);
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
  heuristicCore: OptimizerCore;
  heuristicCalculation: CalculateGenerator;
  heuristicDone: boolean;
  heuristicCalculationRuns: number;
}

export function* calculateHeuristic(reduxState: RootState, targetCombinationCount: number) {
  // 28 closely matches a single shoulderpiece
  // 118 closely matches both a single shoulderpiece and a single back item, but is much slower
  const split = 28;

  /**
   * set up input
   */

  const normalCombinations: Combination[] = setupCombinations(reduxState).map(
    ({ extrasCombinationEntry, settings }) => {
      const core = new OptimizerCore(settings);
      const calculation = core.calculate();
      return {
        ...extrasCombinationEntry,
        settings,
        calculation,
        done: false,
        list: [],
        calculationRuns: 0,
      };
    },
  );

  const { rankby, affixes } = normalCombinations[0].settings;

  // don't do any heuristic stuff with few combinations/one affix
  if (normalCombinations.length <= targetCombinationCount || affixes.length < 2)
    return yield* calculate(reduxState, { combinations: normalCombinations });

  console.time('heuristics');

  /**
   * iteration
   */

  const calculationTotal = iteratePartitionCount(split, affixes.length);
  const globalCalculationTotal = calculationTotal * normalCombinations.length;

  const combinations: HeuristicCombination[] = normalCombinations.map((comb) => {
    const heuristicCore = new OptimizerCore({
      ...comb.settings,
      maxResults: 1,
    });

    return {
      ...comb,
      heuristicCore,
      heuristicCalculation: heuristicCore.calculateHeuristic(split),
      heuristicDone: false,
      heuristicCalculationRuns: 0,
    };
  });

  //

  let i = 0;

  let iterationTimer = Date.now();

  while (true) {
    const combination = combinations[i];

    const currentIndex = i;
    i = (i + 1) % combinations.length;

    if (combination.heuristicDone) continue;

    const {
      value: { isChanged, calculationRuns, newList },
      done,
    } = combination.heuristicCalculation.next();

    combination.heuristicCalculationRuns = calculationRuns ?? 0;

    const globalCalculationRuns = combinations.reduce(
      (prev, cur) => prev + cur.heuristicCalculationRuns,
      0,
    );
    console.log(
      `option ${currentIndex} heuristics progress: ${calculationRuns} / ${calculationTotal}. total: ${globalCalculationRuns} / ${globalCalculationTotal}`,
    );

    // eslint-disable-next-line prefer-destructuring
    combination.heuristicBestResult = newList[0];
    combination.heuristicDone = Boolean(done);
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

      return yield* calculate(reduxState, { combinations });
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
) => {
  generator = jsHeuristicsEnabled
    ? calculateHeuristic(reduxState, jsHeuristicsTarget)
    : calculate(reduxState);
};
export const next = () => generator.next();
