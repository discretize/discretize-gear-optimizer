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
  'Armor',
];
const boons = [
  'Aegis',
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
const conditions = [
  'Bleeding',
  'Blind',
  'Burning',
  'Chilled',
  'Confusion',
  'Crippled',
  'Fear',
  'Immobile',
  'Poison',
  'Slow',
  'Taunt',
  'Torment',
  'Vulnerability',
  'Weakness',
];
const damagingConditions = [
  'Bleeding',
  'Burning',
  'Confusion',
  'Poison',
  'Torment',
]

export const allDamageKeys = [
  'Strike Damage',
  'Condition Damage',
  'All Damage',
  'Damage Reduction',
  'Condition Damage Reduction',
  'Critical Damage',
  ...damagingConditions.map((condition) => `${condition} Damage`),
];
export const allDamageModes = ['add', 'mult', 'target', 'unknown'];

export const allAttributePointKeys = stats;
export const allAttributePointModes = ['buff', 'converted', 'unknown'];

export const allAttributePercentKeys = [
  'Critical Chance',
  'Boon Duration',
  ...boons.map((boon) => `${boon} Duration`),
  'Condition Duration',
  ...conditions.map((condition) => `${condition} Duration`),
  'Maximum Health',
  'Outgoing Healing',
];

export const allConversionKeys = [...stats, 'Outgoing Healing'];
