import type {
  OptimizerCoreSettingsPerCalculation,
  OptimizerCoreSettingsPerCombination,
} from '../optimizer/optimizerCore';
import {
  createSettingsPerCalculation,
  createSettingsPerCombination,
  type AppliedModifier,
} from '../optimizer/optimizerSetup';
import { getExtrasCombinationsAndModifiers } from '../slices/extras';
import type { RootState } from '../store';

export type Combination = Omit<OptimizerCoreSettingsPerCombination, 'appliedModifiers'>;

export type Settings = Omit<
  OptimizerCoreSettingsPerCalculation,
  'runsAfterThisSlot' | 'cachedFormState'
>;

// export type Settings = _Settings & {
//   extras: {
//     ids: number[][];
//     modifiers: {
//       id: any;
//       modifiers: any;
//       amount: number;
//     }[];
//   };
// };

export interface ResultData {
  extrasModifiers: AppliedModifier[];
  extrasCombination: Record<string, string>;
}

export function setupNormal(reduxState: RootState): [Combination[], ResultData[]] {
  // do not mutate selector result; it may be reused if the same calculation is run twice
  const extrasCombinationEntries = getExtrasCombinationsAndModifiers(reduxState).map(
    (combination) => ({ ...combination }),
  );

  const resultData = extrasCombinationEntries.map((entry) => ({
    extrasModifiers: entry.extrasModifiers,
    extrasCombination: entry.extrasCombination,
  }));

  const combinations = extrasCombinationEntries.map(({ extrasModifiers }) =>
    createCombination(extrasModifiers, reduxState),
  );

  return [combinations, resultData];
}

export function createCombination(
  extrasModifiers: AppliedModifier[],
  reduxState: RootState,
): Combination {
  return createSettingsPerCombination(reduxState, extrasModifiers);
}

export function createSettings(reduxState: RootState): Settings {
  return createSettingsPerCalculation(reduxState);
}
