import type {
  AmountData,
  AttributeKey,
  ConversionAfterBuffsDestinationKey,
  ConversionAfterBuffsSourceKey,
  ConversionDestinationKey,
  ConversionSourceKey,
  Modifiers as YamlModifiers,
} from '../../../assets/modifierdata/metadata';
import type { ExtrasCombination } from '../../slices/extras';

export interface ExtrasCombinationEntry {
  extrasCombination: ExtrasCombination;
  extrasModifiers: AppliedModifier[];
}

export type MultiplierName =
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
  amount?: string;
  modifiers: YamlModifiers;
  wvwModifiers?: YamlModifiers;
  amountData?: AmountData;
  temporaryBuff?: true | false | 'activeOutOfCombat';
}

// todo: move these; they should be synchronized with src/assets/modifierdata/metadata.ts and
// src/components/sections/distribution/DamageDistribution.jsx
// (unsure how that would best be done)
export type DistributionNameUI =
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

interface MultiplierBreakdown {
  mult: number;
  add: number;
  target: number;
  total: number;
}
export type DamageMultiplier = Record<MultiplierName, number>;
export type DamageMultiplierBreakdown = Record<MultiplierName, MultiplierBreakdown>;
export interface Modifiers {
  damageMultiplier: DamageMultiplier;
  damageMultiplierBreakdown: DamageMultiplierBreakdown;
  buff: [AttributeKey, number][];
  convert: [ConversionDestinationKey, [ConversionSourceKey, number][]][];
  convertAfterBuffs: [
    ConversionAfterBuffsDestinationKey,
    [ConversionAfterBuffsSourceKey, number][],
  ][];
}

// interface OptimizerInput {
//   profession: ProfessionName;
//   specialization: string;
//   weaponType: WeaponHandednessType;
//   affixes: AffixName[]; // all selected gear affixes to iterate over
//   forcedAffixes: (AffixName | null)[]; // array of specific affix names for each slot, or '' for unspecfied
//   rankby: 'Damage' | 'Survivability' | 'Healing';
//   minBoonDuration: number | null;
//   minHealingPower: number | null;
//   minToughness: number | null;
//   maxToughness: number | null;
//   minHealth: number | null;
//   minCritChance: number | null;
//   maxResults: number;
//   primaryInfusion?: string;
//   secondaryInfusion?: string;
//   maxInfusions: number; // number of infusions, 0-18
//   primaryMaxInfusions: number; // number of infusions, 0-18
//   secondaryMaxInfusions: number; // number of infusions, 0-18
//   distributionVersion?: 1 | 2; // version 1: old style (percentDistribution), verison 2: new style (coeff / sec)
//   percentDistribution?: Record<string, number>; // old style distribution (sums to 100)
//   distribution?: Record<string, number>; // new style distribution (coefficient * weaponstrength per second; average condition stacks)
//   attackRate: number; // boss attack rate (for confusion)
//   movementUptime: number; // boss movement uptime (for torment)

//   appliedModifiers: AppliedModifier[]; // array of modifier objects

//   infusionNoDuplicates: any;
//   customAffixData: any;
// }
