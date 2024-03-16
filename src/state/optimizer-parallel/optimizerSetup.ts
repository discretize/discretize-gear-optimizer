/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-case-declarations */
/* eslint-disable dot-notation */

import type {
  AmountData,
  AttributeKey,
  AttributePointMode,
  ConversionAfterBuffsDestinationKey,
  ConversionAfterBuffsSourceKey,
  ConversionAfterBuffsValue,
  ConversionDestinationKey,
  ConversionSourceKey,
  ConversionValue,
  DamageKey,
  DamageMode,
  DamageValue,
  Percent,
  Modifiers as YamlModifiers,
} from '../../assets/modifierdata/metadata';
import {
  allAttributeCoefficientKeys,
  allAttributePercentKeys,
  allAttributePointKeys,
  allConversionAfterBuffsSourceKeys,
} from '../../assets/modifierdata/metadata';
import type { AffixData, AffixName, ConditionName, ForcedSlotName } from '../../utils/gw2-data';
import {
  Attributes,
  Classes,
  ForcedSlots,
  Slots,
  conditionData,
  damagingConditions,
  Affix as unmodifiedAffix,
} from '../../utils/gw2-data';
import {
  enumArrayIncludes,
  mapEntries,
  mapValues,
  parseAmount,
  parseBoss,
  parseInfusionCount,
  parsePriority,
} from '../../utils/usefulFunctions';
import { getAttackRate, getMovementUptime } from '../slices/boss';
import { getBuffsModifiers } from '../slices/buffs';
import { getProfession } from '../slices/controlsSlice';
import { getDistributionNew } from '../slices/distribution';
import { getExtraModifiersModifiers } from '../slices/extraModifiers';
import { getExtrasCombinationsAndModifiers, getExtrasIds } from '../slices/extras';
import { getForcedSlots } from '../slices/forcedSlots';
import {
  getInfusionsModifiers,
  getMaxInfusions,
  getPrimaryInfusion,
  getPrimaryMaxInfusions,
  getSecondaryInfusion,
  getSecondaryMaxInfusions,
} from '../slices/infusions';
import {
  getAffixes,
  getConstraint,
  getCustomAffixData,
  getExclusionData,
  getExoticsData,
  getOptimizeFor,
  getWeaponType,
} from '../slices/priorities';
import { getSkillsModifiers } from '../slices/skills';
import { getCurrentSpecialization, getTraitsModifiers } from '../slices/traits';
import { getGameMode } from '../slices/userSettings';
import type { RootState } from '../store';
import type {
  OptimizerCoreSettings,
  OptimizerCoreSettingsPerCalculation,
  OptimizerCoreSettingsPerCombination,
} from '../optimizer/optimizerCore';
import { clamp, scaleValue } from '../optimizer/optimizerCore';
import {
  createSettingsPerCalculation,
  createSettingsPerCombination,
} from '../optimizer/optimizerSetup';

// currently a duplicate of navsettings.jsx
export type GameMode = 'fractals' | 'raids' | 'wvw';

export type Combination = Omit<
  OptimizerCoreSettingsPerCombination,
  'appliedModifiers' | 'extrasCombination'
>;

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

type MultiplierName =
  | 'Outgoing Strike Damage'
  | 'Outgoing Condition Damage'
  | 'Outgoing Siphon Damage'
  | 'Incoming Strike Damage'
  | 'Outgoing Critical Damage'
  | 'Outgoing Bleeding Damage'
  | 'Outgoing Burning Damage'
  | 'Outgoing Confusion Damage'
  | 'Outgoing Poison Damage'
  | 'Outgoing Torment Damage'
  | 'Outgoing Alternative Damage'
  | 'Outgoing Alternative Critical Damage'
  | 'Outgoing Phantasm Damage'
  | 'Outgoing Phantasm Critical Damage';

export interface AppliedModifier {
  id?: string;
  visible?: boolean;
  enabled?: boolean;
  amount?: string;
  modifiers: YamlModifiers;
  wvwModifiers?: YamlModifiers;
  amountData?: AmountData;
  // },
}

// todo: move these; they should be synchronized with ../../assets/modifierdata/metadata.js and
// ../../components/sections/distribution/DamageDistribution.jsx
// (unsure how that would best be done)
type DistributionNameUI =
  | 'Power'
  | 'Power2'
  | 'Burning'
  | 'Bleeding'
  | 'Poisoned'
  | 'Torment'
  | 'Confusion';
export type DistributionNameInternal =
  | 'Power'
  | 'Power2'
  | 'Burning'
  | 'Bleeding'
  | 'Poison'
  | 'Torment'
  | 'Confusion';

type CollectedAttributeModifiers = Partial<Record<AttributeKey, number>>;

type CollectedConversionValue = Partial<Record<ConversionSourceKey, number>>;
export type CollectedConversionModifers = Partial<
  Record<ConversionDestinationKey, CollectedConversionValue>
>;

type CollectedConversionAfterBuffsValue = Partial<Record<ConversionAfterBuffsSourceKey, number>>;
export type CollectedConversionAfterBuffsModifers = Partial<
  Record<ConversionAfterBuffsDestinationKey, CollectedConversionAfterBuffsValue>
>;

interface CollectedModifiers {
  buff: CollectedAttributeModifiers;
  convert: CollectedConversionModifers;
  convertAfterBuffs: CollectedConversionAfterBuffsModifers;
}
export interface MultiplierBreakdown {
  mult: number;
  add: number;
  target: number;
}
export type DamageMultiplierBreakdown = Partial<Record<MultiplierName, MultiplierBreakdown>>;
export interface Modifiers {
  damageMultiplier: Record<string, number>;
  buff: [string, number][];
  convert: [string, [string, number][]][];
  convertAfterBuffs: [string, [string, number][]][];
}

export type InfusionMode = 'None' | 'Primary' | 'Few' | 'Secondary' | 'SecondaryNoDuplicates';

export interface CachedFormState {
  traits: Record<string, any>;
  skills: Record<string, any>;
  extras: Record<string, any>;
  buffs: Record<string, any>;
}

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
  return createSettingsPerCombination(reduxState, undefined, extrasModifiers);
}

export function createSettings(reduxState: RootState): Settings {
  return createSettingsPerCalculation(reduxState, undefined, undefined);
}
