/* eslint-disable no-loop-func */
import type { ExtraFilterMode } from '../slices/controlsSlice';
import type { ExtrasType } from '../slices/extras';
import type { RootState } from '../store';
import {
  CalculateGenerator,
  Character,
  characterLT,
  OptimizerCore,
  OptimizerCoreSettings,
  UPDATE_MS,
} from './optimizerCore';
import { ExtrasCombinationEntry, setupCombinations } from './optimizerSetup';

interface Combination extends ExtrasCombinationEntry {
  settings: OptimizerCoreSettings;
  core: OptimizerCore;
  calculation: CalculateGenerator;
  done: boolean;
  list: Character[];
  calculationRuns: number;
}

type Result =
  | {
      percent: number;
      isChanged: true;
      list: Character[];
      filteredLists: Record<ExtraFilterMode, Character[]>;
    }
  | {
      percent: number;
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

export function* calculate(reduxState: RootState) {
  /**
   * set up input
   */

  const combinations: Combination[] = setupCombinations(reduxState).map(
    ({ extrasCombinationEntry, settings }) => {
      const core = new OptimizerCore(settings);
      const calculation = core.calculate();
      return {
        ...extrasCombinationEntry,
        settings,
        core,
        calculation,
        done: false,
        list: [],
        calculationRuns: 0,
      };
    },
  );

  /**
   * iteration
   */

  const { rankby, runsAfterThisSlot } = combinations[0].core.settings;
  const calculationTotal = runsAfterThisSlot[0];
  const globalCalculationTotal = calculationTotal * combinations.length;

  let i = 0;

  let globalWorstScore = 0;

  let iterationTimer = Date.now();

  while (true) {
    const combination = combinations[i];

    const currentIndex = i;
    i = (i + 1) % combinations.length;

    if (combination.done) continue;

    const {
      value: { isChanged, calculationRuns, newList },
      done,
    } = combination.calculation.next();

    combination.calculationRuns = calculationRuns ?? 0;

    const globalCalculationRuns = combinations.reduce((prev, cur) => prev + cur.calculationRuns, 0);
    console.log(
      `option ${currentIndex} progress: ${calculationRuns} / ${calculationTotal}. total progress: ${globalCalculationRuns} / ${globalCalculationTotal}`,
    );

    combination.list = newList;
    combination.done = Boolean(done);
    const everyCombinationDone = combinations.every((comb) => comb.done);

    const createResult = () => {
      if (!isChanged) {
        return {
          percent: Math.floor((globalCalculationRuns * 100) / globalCalculationTotal),
          isChanged,
        } as Result;
      }

      const normalList = combinations
        .flatMap(({ list }) => list)
        .filter((character) => character.attributes[rankby] >= globalWorstScore)
        .sort((a, b) => characterLT(a, b, rankby))
        .slice(0, 50);

      if (normalList.length === 50)
        globalWorstScore = normalList[normalList.length - 1].attributes[rankby];

      const combinationBestResults = combinations
        .map(({ list }) => list[0])
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

let generator: ReturnType<typeof calculate>;

export const setup = (reduxState: RootState) => {
  generator = calculate(reduxState);
};
export const next = () => generator.next();
