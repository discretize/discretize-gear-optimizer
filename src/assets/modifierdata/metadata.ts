const stats = [
  'Power',
  'Precision',
  'Toughness',
  'Vitality',
  'Ferocity',
  'Condition Damage',
  'Expertise',
  'Concentration',
  'Healing Power',
  'Agony Resistance',
] as const;
export type StatName = typeof stats[number];

// added during the "buff" phase, so these cannot be "converted"
export const alternateStats = [
  'Alternative Power',
  'Alternative Precision',
  'Alternative Ferocity',
] as const;

export const boons = [
  'Aegis',
  'Alacrity',
  'Fury',
  'Might',
  'Protection',
  'Quickness',
  'Regeneration',
  'Resistance',
  'Resolution',
  'Stability',
  'Swiftness',
  'Vigor',
] as const;
export type BoonName = typeof boons[number];

const boonDurations = boons.map((boon) => `${boon} Duration`) as `${BoonName} Duration`[];

// const conditions = [
//   'Bleeding',
//   'Blind',
//   'Burning',
//   'Chilled',
//   'Confusion',
//   'Crippled',
//   'Fear',
//   'Immobile',
//   'Poison',
//   'Slow',
//   'Taunt',
//   'Torment',
//   'Vulnerability',
//   'Weakness',
// ];
export const damagingConditions = [
  'Bleeding',
  'Burning',
  'Confusion',
  'Poison',
  'Torment',
] as const;
export type DamagingConditionName = typeof damagingConditions[number];

const conditionDurations = damagingConditions.map(
  (condition) => `${condition} Duration`,
) as `${DamagingConditionName} Duration`[];

const conditionCoefficients = damagingConditions.map(
  (condition) => `${condition} Coefficient`,
) as `${DamagingConditionName} Coefficient`[];

const conditionDamages = damagingConditions.map(
  (condition) => `${condition} Damage`,
) as `${DamagingConditionName} Damage`[];

export const percents = [
  'Critical Chance',
  'Boon Duration',
  ...boonDurations,
  'Condition Duration',
  ...conditionDurations,
  'Maximum Health',
  'Outgoing Healing',
  'Alternative Critical Chance',
  'Phantasm Critical Chance',
  'Clone Critical Chance',
] as const;

const coefficients = [
  'Power Coefficient',
  ...conditionCoefficients,
  'Flat DPS',
  'Siphon Base Coefficient',
] as const;

export const allDamageKeys = [
  'Strike Damage',
  'Condition Damage',
  'All Damage',
  'Damage Reduction',
  // 'Condition Damage Reduction',
  'Critical Damage',
  ...conditionDamages,
  'Alternative Damage',
  'Alternative Critical Damage',
  'Phantasm Damage',
] as const;
export type DamageKey = typeof allDamageKeys[number];

export const allDamageModes = ['add', 'mult', 'target', 'unknown'] as const;
export type DamageMode = typeof allDamageModes[number];

export const allAttributePointKeys = [...stats, ...alternateStats];
type AttributePointKey = typeof allAttributePointKeys[number];

export const allAttributePointModes = ['buff', 'converted', 'unknown'] as const;
export type AttributePointMode = typeof allAttributePointModes[number];

export const allAttributeCoefficientKeys = coefficients;
export type AttributeCoefficientKey = typeof allAttributeCoefficientKeys[number];
export const allAttributePercentKeys = percents;
export type AttributePercentKey = typeof allAttributePercentKeys[number];

export type AttributeKey = AttributePointKey | AttributeCoefficientKey | AttributePercentKey;

export const allConversionSourceKeys = stats;
export type ConversionSourceKey = typeof allConversionSourceKeys[number];
export const allConversionDestinationKeys = [...stats, ...percents, ...coefficients] as const;
export type ConversionDestinationKey = typeof allConversionDestinationKeys[number];

export const allConversionAfterBuffsSourceKeys = [
  ...stats,
  'Critical Chance',
  'Clone Critical Chance',
  'Phantasm Critical Chance',
] as const;
export type ConversionAfterBuffsSourceKey = typeof allConversionAfterBuffsSourceKeys[number];
export const allConversionAfterBuffsDestinationKeys = [
  ...stats,
  ...percents,
  ...coefficients,
] as const;
export type ConversionAfterBuffsDestinationKey =
  typeof allConversionAfterBuffsDestinationKeys[number];

// these values don't behave well if scaled up and down,
// so disallow them in modifiers with an amount key
export const damageKeysBlacklist = ['Damage Reduction', 'Condition Damage Reduction'] as const;
export const attributePointKeysBlacklist = [
  'Precision',
  'Toughness',
  'Expertise',
  'Concentration',
] as const;
export const attributePercentKeysBlacklist = [
  'Critical Chance',
  'Boon Duration',
  ...boonDurations,
  'Condition Duration',
  ...conditionDurations,
  'Maximum Health',
] as const;

// stats which are not on the blacklist, but may be converted to something on the blacklist
export const mayBeConvertedToBlacklist = [
  'Vitality', // magnanimous, weaver, harbinger, ranger, specter; exuberance rune
  'Condition Damage', // toxic/lucent, scourge;
  'Power', // toxic/lucent, scrapper, baelfire rune,
  'Healing Power', // master, revenant
] as const;

export const exampleItem = `
    - id: example
      text: Example Item
      subText: with hammer
      minor: true
      amountData:
        label: '% uptime'
        default: 50
        quantityEntered: 100
      modifiers:
        damage:
          Strike Damage: [10%, mult]
          All Damage: [20%, add]
          Critical Damage: [20%, unknown]
          Burning Damage: [33%, unknown]
        attributes:
          Ferocity: [100, converted]
          Healing Power: [30, buff]
          Condition Damage: [60, converted]
          Critical Chance: 20%
          Quickness Duration: 10%
          Torment Duration: 25%
          Outgoing Healing: 5%
        conversion:
          Power: {Precision: 3%, Ferocity: 6%}
          Expertise: {Toughness: 3%}
          Outgoing Healing: {Healing Power: 0.006%}
      gw2id: 1234
      type: CommonEffect # gw2-ui component type (only used in buffs)
      defaultEnabled: true`;

export const exampleModifiers = `damage:
  Strike Damage: [10%, mult]
  All Damage: [20%, add]
  Critical Damage: [20%, unknown]
  Burning Damage: [33%, unknown]
attributes:
  Ferocity: [100, converted]
  Healing Power: [30, buff]
  Condition Damage: [60, converted]
  Critical Chance: 20%
  Quickness Duration: 10%
  Torment Duration: 25%
  Outgoing Healing: 5%
conversion:
  Power: {Precision: 3%, Ferocity: 6%}
  Expertise: {Toughness: 3%}
  Outgoing Healing: {Healing Power: 0.006%}`;

export const exampleModifiersJson = `{
  "damage": {
    "Strike Damage": [ "10%", "mult" ],
    "All Damage": [ "20%", "add" ],
    "Critical Damage": [ "20%", "unknown" ],
    "Burning Damage": [ "33%", "unknown" ]
  },
  "attributes": {
    "Ferocity": [ 100, "converted" ],
    "Healing Power": [ 30, "buff" ],
    "Condition Damage": [ 60, "converted" ],
    "Critical Chance": "20%",
    "Quickness Duration": "10%",
    "Torment Duration": "25%",
    "Outgoing Healing": "5%"
  },
  "conversion": {
    "Power": { "Precision": "3%", "Ferocity": "6%" },
    "Expertise": { "Toughness": "3%" },
    "Outgoing Healing": { "Healing Power": "0.006%" }
  }
}`;

export type Percent = string;

export type DamageValue = [Percent, DamageMode, Percent?, DamageMode?];
export type DamageModifiers = Partial<Record<DamageKey, DamageValue>>;

export type AttributeModifiers = {
  [Key in AttributeKey]?: Key extends AttributePointKey
    ? [number, AttributePointMode, number?, AttributePointMode?]
    : Key extends AttributeCoefficientKey
    ? number
    : Key extends AttributePercentKey
    ? Percent
    : never;
};

export type ConversionValue = Partial<Record<ConversionSourceKey, Percent>>;
export type ConversionModifers = Partial<Record<ConversionDestinationKey, ConversionValue>>;

export type ConversionAfterBuffsValue = Partial<Record<ConversionAfterBuffsSourceKey, Percent>>;
export type ConversionAfterBuffsModifers = Partial<
  Record<ConversionAfterBuffsDestinationKey, ConversionAfterBuffsValue>
>;

export interface Modifiers {
  damage?: DamageModifiers;
  attributes?: AttributeModifiers;
  conversion?: ConversionModifers;
  conversionAfterBuffs?: ConversionAfterBuffsModifers;
}

export interface AmountData {
  label: string;
  default: number;
  quantityEntered: number;
  disableBlacklist?: boolean;
}

export interface ModifierItem {
  id: string;
  text?: string;
  subText?: string;
  minor?: boolean;
  amountData?: AmountData;
  hasLifesteal?: boolean;
  modifiers: Modifiers;
  gw2id?: number;
  defaultEnabled?: boolean;
  type?: string;
}

export interface Section {
  section: string;
  id?: number;
  note?: string;
  items: ModifierItem[];
}

export type ModifierData = Section[];
