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

export const allDamageKeys = [
  'Strike Damage',
  'Condition Damage',
  'All Damage',
  'Damage Reduction',
  'Condition Damage Reduction',
];
export const allDamageModes = ['add', 'mult', 'target', 'unknown'];

export const allAttributePointKeys = stats;
export const allAttributePointModes = ['buff', 'converted', 'unknown'];

export const allAttributePercentKeys = [
  'Critical Chance',
  'Critical Damage',
  'Boon Duration',
  ...boons.map((boon) => `${boon} Duration`),
  'Condition Duration',
  ...conditions.map((condition) => `${condition} Duration`),
  ...conditions.map((condition) => `${condition} Damage`),
  'Maximum Health',
  'Outgoing Healing',
];

export const allConversionKeys = [...stats, 'Outgoing Healing'];
