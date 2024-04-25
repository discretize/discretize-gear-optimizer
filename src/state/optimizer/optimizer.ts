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

  let globalWorstScore = 0;

  let iterationTimer = Date.now();

  while (true) {
    const combination = combinations[i];

    const currentIndex = i;
    i = (i + 1) % combinations.length;

    if (combination.done) continue;

    const { value: { isChanged, calculationRuns, newList } = {}, done } =
      combination.calculation.next();

    console.log(`option ${currentIndex} progress: ${calculationRuns} / ${runsAfterThisSlot[0]}`);
    combination.calculationRuns = calculationRuns ?? 0;

    const globalCalculationRuns = combinations.reduce((prev, cur) => prev + cur.calculationRuns, 0);
    console.log(`total progress: ${globalCalculationRuns} / ${globalCalculationTotal}`);

    if (done) {
      combination.done = true;
    }
    const everyCombinationDone = combinations.every((comb) => comb.done);

    if (isChanged && newList) {
      combination.list = newList;
    }

    if (
      everyCombinationDone ||
      (isChanged && newList && Date.now() - iterationTimer > UPDATE_MS / 2)
    ) {
      const normalList = combinations
        .flatMap(({ list }) => list)
        // eslint-disable-next-line no-loop-func
        .filter((character) => character.attributes[rankby] >= globalWorstScore)
        .sort((a, b) => characterLT(a, b, rankby))
        .slice(0, 50);

      if (normalList.length === 50)
        globalWorstScore = normalList[normalList.length - 1].attributes[rankby];

      const combinationBestResults = combinations
        .map(({ list }) => list[0])
        .filter(Boolean)
        .sort((a, b) => characterLT(a, b, rankby));

      const filteredList = combinationBestResults.slice(0, 100);

      const findExtraBestResults = (...extrasTypes: ExtrasType[]) => {
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

      const extraFilteredLists: Record<ExtraFilterMode, Character[]> = {
        Sigils: findExtraBestResults('Sigil1', 'Sigil2'),
        Runes: findExtraBestResults('Runes'),
        Relics: findExtraBestResults('Relics'),
        Nourishment: findExtraBestResults('Nourishment'),
        Enhancement: findExtraBestResults('Enhancement'),
      };

      const result = {
        percent: Math.floor((globalCalculationRuns * 100) / globalCalculationTotal),
        isChanged,
        list: normalList,
        filteredList,
        extraFilteredLists,
      };

      if (everyCombinationDone) {
        return result;
      }
      yield result;
      iterationTimer = Date.now();
    }
  }
}
