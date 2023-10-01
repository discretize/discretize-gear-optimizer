import type { RootState } from '../store';
import {
  CalculateGenerator,
  Character,
  characterLT,
  OptimizerCore,
  OptimizerCoreSettings,
} from './optimizerCore';
import { ExtrasCombinationEntry, setupCombinations } from './optimizerSetup';

const isArrayDifferent = (a: any[], b: any[]) => {
  if (a.length !== b.length) return true;
  return a.some((_, i) => a[i] !== b[i]);
};

// todo: convert this file to a web worker handler

interface Combination extends ExtrasCombinationEntry {
  settings: OptimizerCoreSettings;
  core: OptimizerCore;
  calculation: CalculateGenerator;
  done: boolean;
  list: Character[];
  calculationRuns: number;
}

// eslint-disable-next-line import/prefer-default-export
export function* calculate(reduxState: RootState) {
  /**
   * set up input
   */

  const combinations: Combination[] = setupCombinations(reduxState).map(
    ([combination, settings]) => {
      const core = new OptimizerCore(settings);
      const calculation = core.calculate();
      return {
        ...combination,
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
  const globalCalculationTotal = runsAfterThisSlot[0] * combinations.length;

  let i = 0;
  let globalList: Character[] = [];
  let globalFilteredList: Character[] = [];

  let globalWorstScore = 0;

  while (true) {
    const combination = combinations[i];

    const currentIndex = i;
    i = (i + 1) % combinations.length;

    if (combination.done) continue;

    const { value: { isChanged, calculationRuns, newList } = {}, done } =
      combination.calculation.next();

    if (done) {
      combination.done = true;
    }

    if (isChanged && newList) {
      combination.list = newList;

      const newGlobalList = combinations
        .flatMap(({ list }) => list)
        // eslint-disable-next-line no-loop-func
        .filter((character) => character.attributes[rankby] >= globalWorstScore)
        .sort((a, b) => characterLT(a, b, rankby))
        .slice(0, 50);

      if (newGlobalList.length === 50)
        globalWorstScore = newGlobalList[newGlobalList.length - 1].attributes[rankby];

      if (isArrayDifferent(globalList, newGlobalList)) {
        globalList = newGlobalList;
      }

      const newGlobalFilteredList = combinations
        .map(({ list }) => list[0])
        .filter(Boolean)
        .sort((a, b) => characterLT(a, b, rankby));

      if (isArrayDifferent(globalFilteredList, newGlobalFilteredList)) {
        globalFilteredList = newGlobalFilteredList;
      }
    }

    console.log(`option ${currentIndex} progress: ${calculationRuns} / ${runsAfterThisSlot[0]}`);

    combination.calculationRuns = calculationRuns ?? 0;

    const globalCalculationRuns = combinations.reduce((prev, cur) => prev + cur.calculationRuns, 0);
    console.log(`total progress: ${globalCalculationRuns} / ${globalCalculationTotal}`);

    const result = {
      percent: Math.floor((globalCalculationRuns * 100) / globalCalculationTotal),
      isChanged,
      list: globalList,
      filteredList: globalFilteredList,
    };

    if (combinations.some((comb) => !comb.done)) {
      yield result;
    } else {
      return result;
    }
  }
}
