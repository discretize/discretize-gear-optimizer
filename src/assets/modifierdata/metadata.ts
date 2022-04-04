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
type Boon = typeof boons[number];

const boonDurations = boons.map((boon) => `${boon} Duration`) as `${Boon} Duration`[];

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
type DamagingCondition = typeof damagingConditions[number];

const conditionDurations = damagingConditions.map(
  (condition) => `${condition} Duration`,
) as `${DamagingCondition} Duration`[];

const conditionCoefficients = damagingConditions.map(
  (condition) => `${condition} Coefficient`,
) as `${DamagingCondition} Coefficient`[];

const conditionDamages = damagingConditions.map(
  (condition) => `${condition} Damage`,
) as `${DamagingCondition} Damage`[];

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
export const allDamageModes = ['add', 'mult', 'target', 'unknown'] as const;

export const allAttributePointKeys = stats;
export const allAttributePointModes = ['buff', 'converted', 'unknown'] as const;

export const allAttributeCoefficientKeys = coefficients;
export const allAttributePercentKeys = percents;

export const allConversionSourceKeys = stats;
export const allConversionDestinationKeys = [...stats, ...percents, ...coefficients] as const;

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
