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
] as const;
type DamageKey = typeof allDamageKeys[number];

export const allDamageModes = ['add', 'mult', 'target', 'unknown'] as const;
type DamageMode = typeof allDamageModes[number];

export const allAttributePointKeys = stats;
type AttributePointKey = typeof allAttributePointKeys[number];

export const allAttributePointModes = ['buff', 'converted', 'unknown'] as const;
type AttributePointMode = typeof allAttributePointModes[number];

export const allAttributeCoefficientKeys = coefficients;
type AttributeCoefficientKey = typeof allAttributeCoefficientKeys[number];
export const allAttributePercentKeys = percents;
type AttributePercentKey = typeof allAttributePercentKeys[number];

type AttributeKey = AttributePointKey | AttributeCoefficientKey | AttributePercentKey;

export const allConversionSourceKeys = stats;
type ConversionSourceKey = typeof allConversionSourceKeys[number];
export const allConversionDestinationKeys = [...stats, ...percents, ...coefficients] as const;
type ConversionDestinationKey = typeof allConversionDestinationKeys[number];

export const allConversionAfterBuffsSourceKeys = [
  ...stats,
  'Critical Chance',
  'Critical Chance -7',
  'Critical Chance -20',
  'Critical Chance -27',
  'Critical Chance -30',
  'Critical Chance -37',
] as const;
export const allConversionAfterBuffsDestinationKeys = [
  ...stats,
  ...percents,
  ...coefficients,
] as const;

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

type Percent = string;

type DamageValue = [Percent, DamageMode, Percent?, DamageMode?];
type DamageModifiers = Partial<Record<DamageKey, DamageValue>>;

type AttributeModifiers = {
  [Key in AttributeKey]?: Key extends AttributePointKey
    ? [number, AttributePointMode]
    : Key extends AttributeCoefficientKey
    ? number
    : Key extends AttributePercentKey
    ? Percent
    : never;
};

type ConversionValue = Partial<Record<ConversionSourceKey, Percent>>;
type ConversionModifers = Partial<Record<ConversionDestinationKey, ConversionValue>>;

export interface Modifiers {
  damage?: DamageModifiers;
  attributes?: AttributeModifiers;
  conversion?: ConversionModifers;
  conversionAfterBuffs?: ConversionModifers;
}

const test: Modifiers = {
  'damage': {
    'Strike Damage': ['10%', 'mult'],
    'All Damage': ['20%', 'add'],
    'Critical Damage': ['20%', 'unknown'],
    'Burning Damage': ['33%', 'unknown'],
  },
  'attributes': {
    'Ferocity': [100, 'converted'],
    'Healing Power': [30, 'buff'],
    'Condition Damage': [60, 'converted'],
    'Critical Chance': '20%',
    'Quickness Duration': '10%',
    'Torment Duration': '25%',
    'Outgoing Healing': '5%',
  },
  'conversion': {
    'Power': { 'Precision': '3%', 'Ferocity': '6%' },
    'Expertise': { 'Toughness': '3%' },
    'Outgoing Healing': { 'Healing Power': '0.006%' },
  },
};
