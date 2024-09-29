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

export type CombinationSettings = Omit<OptimizerCoreSettingsPerCombination, 'appliedModifiers'>;

export type CalculationSettings = Omit<
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

export function setupNormal(reduxState: RootState) {
  const extrasCombinationEntries = getExtrasCombinationsAndModifiers(reduxState);

  const combinations = extrasCombinationEntries.map(({ extrasModifiers }) =>
    createCombinationSettings(reduxState, extrasModifiers),
  );

  return { extrasCombinationEntries, combinations };
}

export function createCombinationSettings(
  reduxState: RootState,
  extrasModifiers: AppliedModifier[],
): CombinationSettings {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { appliedModifiers, ...rest } = createSettingsPerCombination(reduxState, extrasModifiers);
  return { ...rest };
}

export function createCalculationSettings(reduxState: RootState): CalculationSettings {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { cachedFormState, runsAfterThisSlot, ...rest } = createSettingsPerCalculation(reduxState);
  return { ...rest };
}
