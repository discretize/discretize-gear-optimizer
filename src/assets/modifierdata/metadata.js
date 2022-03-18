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
];
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
];
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
export const damagingConditions = ['Bleeding', 'Burning', 'Confusion', 'Poison', 'Torment'];

const percents = [
  'Critical Chance',
  'Boon Duration',
  ...boons.map((boon) => `${boon} Duration`),
  'Condition Duration',
  ...damagingConditions.map((condition) => `${condition} Duration`),
  'Maximum Health',
  'Outgoing Healing',
];

const coefficients = [
  'Power Coefficient',
  ...damagingConditions.map((condition) => `${condition} Coefficient`),
  'Flat DPS',
];

export const allDamageKeys = [
  'Strike Damage',
  'Condition Damage',
  'All Damage',
  'Damage Reduction',
  // 'Condition Damage Reduction',
  'Critical Damage',
  ...damagingConditions.map((condition) => `${condition} Damage`),
];
export const allDamageModes = ['add', 'mult', 'target', 'unknown'];

export const allAttributePointKeys = stats;
export const allAttributePointModes = ['buff', 'converted', 'unknown'];

export const allAttributeCoefficientKeys = coefficients;
export const allAttributePercentKeys = percents;

export const allConversionSourceKeys = stats;
export const allConversionDestinationKeys = [...stats, ...percents, ...coefficients];

export const allConversionAfterBuffsSourceKeys = [
  ...stats,
  'Critical Chance',
  'Critical Chance -20',
  'Critical Chance -30',
];
export const allConversionAfterBuffsDestinationKeys = [...stats, ...percents, ...coefficients];

// these values don't behave well if scaled up and down,
// so disallow them in modifiers with an amount key
export const damageKeysBlacklist = ['Damage Reduction', 'Condition Damage Reduction'];
export const attributePointKeysBlacklist = ['Precision', 'Toughness', 'Expertise', 'Concentration'];
export const attributePercentKeysBlacklist = [
  'Critical Chance',
  'Boon Duration',
  ...boons.map((boon) => `${boon} Duration`),
  'Condition Duration',
  ...damagingConditions.map((condition) => `${condition} Duration`),
  'Maximum Health',
];

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
