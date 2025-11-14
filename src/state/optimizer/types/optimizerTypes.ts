import type { CalculationTweaks } from '../../../assets/modifierdata/metadata';
import type {
  AffixName,
  AttributeName,
  ConditionCoefficientAttributeName,
  DamagingConditionName,
  DerivedAttributeName,
  GearAttributeName,
  IndicatorName,
  InfusionName,
  PrimaryAttributeName,
  ProfessionName,
  ProfessionOrSpecializationName,
  SecondaryAttributeName,
  WeaponHandednessType,
} from '../../../utils/gw2-data';
import type { BossSlice } from '../../slices/boss';
import type { BuffsSlice } from '../../slices/buffs';
import type { ExtrasCombination, ExtrasSlice, ShouldDisplayExtras } from '../../slices/extras';
import type { PrioritiesSlice } from '../../slices/priorities';
import type { SkillsSlice } from '../../slices/skills';
import type { TraitsSlice } from '../../slices/traits';
import type { GameMode } from '../../slices/userSettings';
import type { AppliedModifier, DistributionNameInternal, Modifiers } from './optimizerSetupTypes';

type InfusionMode = 'None' | 'Primary' | 'Few' | 'Secondary' | 'SecondaryNoDuplicates';

interface CachedFormState {
  traits: TraitsSlice;
  skills: SkillsSlice;
  extras: ExtrasSlice;
  buffs: BuffsSlice;
  priorities: PrioritiesSlice;
  boss: BossSlice;
}

// settings that do not vary based on extras combination
export interface OptimizerCoreSettingsPerCalculation {
  // these are direct copies or slight modifications of OptimizerInput
  profession: ProfessionName;
  specialization: ProfessionOrSpecializationName;
  weaponType: WeaponHandednessType;
  forcedAffixes: (AffixName | null)[]; // array of specific affix names for each slot, or '' for unspecfied
  rankby: IndicatorName;
  minBoonDuration: number | undefined;
  minHealingPower: number | undefined;
  minToughness: number | undefined;
  maxToughness: number | undefined;
  minHealth: number | undefined;
  minCritChance: number | undefined;
  minDamage: number | undefined;
  minHealing: number | undefined;
  minOutgoingHealing: number | undefined;
  minQuicknessDuration: number | undefined;
  minSurvivability: number | undefined;
  maxResults: number;
  infusionOptions: { type: InfusionName; count: number }[];
  maxInfusions: number;
  distribution: Record<DistributionNameInternal, number>;
  attackRate: number;
  movementUptime: number;
  gameMode: GameMode;

  // these are in addition to the input
  infusionMode: InfusionMode;
  identicalRing: boolean;
  identicalAcc: boolean;
  identicalWep: boolean;
  identicalArmor: boolean;
  slots: number; // The length of the former slots array
  runsAfterThisSlot: number[];
  affixesArray: AffixName[][];
  affixStatsArray: [GearAttributeName, number][][][];

  affixes: AffixName[];
  jsHeuristicsData?: [GearAttributeName, number][][];

  shouldDisplayExtras: ShouldDisplayExtras;
  cachedFormState: CachedFormState;
}

type GuaranteedBaseAttributes = Record<
  | PrimaryAttributeName
  | SecondaryAttributeName
  | DerivedAttributeName
  | 'Power Coefficient'
  | 'Power2 Coefficient'
  | ConditionCoefficientAttributeName
  | 'Flat DPS',
  number
>;

export type Attributes = GuaranteedBaseAttributes & Partial<Record<AttributeName, number>>;

// settings that **do** vary based on extras combination
export interface OptimizerCoreSettingsPerCombination {
  baseAttributes: Attributes; // not used after scenarios update; left for things like unbuffed calc
  modifiers: Modifiers; // not used after scenarios update; left for things like unbuffed calc
  scenarios: Scenario[];
  disableCondiResultCache: boolean;
  relevantConditions: DamagingConditionName[];
  appliedModifiers: AppliedModifier[];
  calculationTweaks: CalculationTweaks;
}

export interface ScenarioTemplate {
  fraction: number;
  baseAttributes: Attributes;
  appliedModifiers: AppliedModifier[];
}

export interface Scenario {
  fraction: number;
  baseAttributes: Attributes;
  modifiers: Modifiers;
}

export type OptimizerCoreSettings = OptimizerCoreSettingsPerCalculation &
  OptimizerCoreSettingsPerCombination & {
    unbuffedBaseAttributes?: Attributes;
    unbuffedModifiers?: Modifiers;
    extrasCombination: ExtrasCombination;
  };

// only supply character with settings it uses to render
export type OptimizerCoreMinimalSettings = Pick<
  OptimizerCoreSettings,
  | 'cachedFormState'
  | 'profession'
  | 'specialization'
  | 'weaponType'
  | 'appliedModifiers'
  | 'rankby'
  | 'shouldDisplayExtras'
  | 'extrasCombination'
  | 'modifiers'
  | 'gameMode'
>;
export type Gear = AffixName[];
export type GearStats = Partial<Record<GearAttributeName, number>>;
interface CoefficientHelperValue {
  slope: number;
  intercept: number;
}
export type EffectiveDistributionKey = DistributionNameInternal | 'Flat' | 'Siphon';
type GainLossKey = 'Power' | 'Precision' | 'Ferocity' | 'Condition Damage' | 'Expertise';
export interface Results {
  value: number;
  indicators: Record<IndicatorName, number>;
  effectivePositiveValues?: Partial<Record<GainLossKey, number>>;
  effectiveNegativeValues?: Partial<Record<GainLossKey, number>>;
  effectiveDamageDistribution?: Partial<Record<EffectiveDistributionKey, string | number>>;
  damageBreakdown?: Partial<Record<EffectiveDistributionKey, number>>;
  coefficientHelper?: Partial<Record<DistributionNameInternal, CoefficientHelperValue>>;
  unbuffedAttributes?: Attributes;
}
export interface CharacterUnprocessed {
  id?: string;
  attributes?: Attributes;
  gear: Gear;
  gearStats: GearStats;
  gearDescription?: string;
  valid: boolean;
  baseAttributes: Attributes;
  infusions: Partial<Record<InfusionName, number>>;
  results?: Results;
}
export interface CharacterProcessed extends CharacterUnprocessed {
  // note: this is not actually accurate
  // (we convince typescript every attribute is defined via a type predicate in calcStats)
  // TODO: improve this
  attributes: Required<Attributes>;
}
export interface CharacterWithResults extends CharacterProcessed {
  results: Results;
}
export interface Character extends CharacterWithResults {
  settings: OptimizerCoreMinimalSettings;
}
