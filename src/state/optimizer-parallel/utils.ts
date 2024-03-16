import {
  Affix,
  AffixName,
  AttributeName,
  BoonDurationAttributes,
  ConditionCoefficientAttributes,
  ConditionDurationAttributes,
  ConditionTickAttributes,
  DamagingConditionName,
  DerivedAttributes,
  EffectiveAttributes,
  Indicators,
  PrimaryAttributes,
  SecondaryAttributes,
  WeaponTypes,
  WeaponHandednessType,
  damagingConditions,
} from '../../utils/gw2-data';
import { getExtrasIds } from '../slices/extras';
import type { RootState } from '../store';
import { Combination, Settings } from './optimizerSetup';

const attributes = [
  ...PrimaryAttributes,
  ...SecondaryAttributes,
  ...DerivedAttributes,
  ...BoonDurationAttributes,
  ...ConditionDurationAttributes,
  ...ConditionCoefficientAttributes,
  ...ConditionTickAttributes,
  ...EffectiveAttributes,
  ...Indicators,

  'Bleeding Stacks',
  'Burning Stacks',
  'Confusion Stacks',
  'Poison Stacks',
  'Torment Stacks',

  'Bleeding DPS',
  'Burning DPS',
  'Confusion DPS',
  'Poison DPS',
  'Torment DPS',

  'Alternative Power',
  'Alternative Precision',
  'Alternative Ferocity',
  'Alternative Critical Chance',
  'Alternative Effective Power',
  'Alternative Critical Damage',

  // profession specific
  'Clone Critical Chance',
  'Phantasm Critical Chance',
  'Phantasm Critical Damage',
  'Phantasm Effective Power',
  'Siphon Base Coefficient',
  'Siphon DPS',

  // misc
  'Maximum Health',
  'Outgoing Healing',
  'Damage Reduction',
  'Power Coefficient',
  'NonCrit Power Coefficient',
  'NonCrit Effective Power',
  'Power2 DPS',
  'Power2 Coefficient',
  'Flat DPS',
  'Power DPS',

  // damage
  'Outgoing Strike Damage',
  'Outgoing Condition Damage',
  'Outgoing Siphon Damage',
  'Incoming Strike Damage',
  'Outgoing Critical Damage',
  'Outgoing Bleeding Damage',
  'Outgoing Burning Damage',
  'Outgoing Confusion Damage',
  'Outgoing Poison Damage',
  'Outgoing Torment Damage',
  'Outgoing Alternative Damage',
  'Outgoing Alternative Critical Damage',
  'Outgoing Phantasm Damage',
  'Outgoing Phantasm Critical Damage',

  'Outgoing All Damage',
];

export const getAffixId = (affix: AffixName) => {
  const index = Object.keys(Affix).indexOf(affix as string);
  if (index === -1) {
    throw new Error(`Affix ${affix} not found`);
  }

  return index;
};
export const getAttributeId = (attribute: AttributeName) => {
  // corresponds to gw2data.rs -> Attribute enum. musth ave same order

  const index = attributes.indexOf(attribute);
  if (index === -1) {
    throw new Error(`Attribute ${attribute} not found`);
  }

  return index;
};
export const getWeaponTypeId = (weaponType: WeaponHandednessType) =>
  Object.values(WeaponTypes).indexOf(weaponType);
export const getConditionId = (condition: string) =>
  Object.values(damagingConditions).indexOf(condition as DamagingConditionName);

export const getAttributeName = (attributeId: number) => {
  // corresponds to gw2data.rs -> Attribute enum. must have same order
  return attributes[attributeId];
};

export const getAffixName = (affixId: number) => {
  return Object.keys(Affix)[affixId];
};

export function settingsToWorkerString(settings: Settings): string {
  // deep copy combinations
  const toReturn = JSON.parse(JSON.stringify(settings)) as any;

  toReturn.rankby = getAttributeId(settings.rankby as AttributeName);
  toReturn.weaponType = getWeaponTypeId(settings.weaponType);
  toReturn.forcedAffixes = settings.forcedAffixes.map((fa) => (fa ? getAffixId(fa) : null));
  toReturn.affixesArray = settings.affixesArray.map((slot) =>
    slot.map((affix) => getAffixId(affix)),
  );
  toReturn.affixStatsArray = settings.affixStatsArray.map((slot) =>
    slot.map((affixes) =>
      affixes.map((affix) => [getAttributeId(affix[0] as AttributeName), affix[1]]),
    ),
  );

  // in rust we assume that the arrays are always 14 long
  if (toReturn.affixesArray.length === 13) {
    // add one more empty slot
    toReturn.affixesArray.push([]);
  }
  if (toReturn.affixStatsArray.length === 13) {
    // add one more empty slot
    toReturn.affixStatsArray.push([]);
  }

  delete toReturn.shouldDisplayExtras;

  return JSON.stringify(toReturn);
}

// replace string values with their corresponding IDs.
// in rust we use enums, which are i32 indexed, so we need to convert the strings to numbers
export function combinationsToWorkerString(combinations: Combination[]): any {
  // deep copy combinations
  const toReturn = combinations.map(combinationtoWasmFormat); // JSON.parse(JSON.stringify(combinations));

  return JSON.stringify(toReturn);
}

/**
 * Converts a combination to the format expected by the wasm code.
 * Result is not typed. Reason being, working with strings is not efficient, hence we have to convert
 * the strings to numbers.
 *
 * @param {Combination} combination the combination to convert
 * @returns {any} the combination in the format expected by the wasm code
 */
export function combinationtoWasmFormat(combination: Combination): any {
  const toReturn = {
    modifiers: {
      buff: [],
      convert: [],
      convertAfterBuffs: [],
      damageMultiplier: [],
    },
    baseAttributes: {},
    relevantConditions: [],
    disableCondiResultCache: combination.disableCondiResultCache,
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  toReturn.modifiers.buff = combination.modifiers.buff.map((mod) => [
    getAttributeId(mod[0] as AttributeName),
    mod[1],
  ]);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  toReturn.modifiers.convert = combination.modifiers.convert.map((mod) => [
    getAttributeId(mod[0] as AttributeName),
    mod[1].map((convert) => [getAttributeId(convert[0] as AttributeName), convert[1]]),
  ]);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  toReturn.modifiers.convertAfterBuffs = combination.modifiers.convertAfterBuffs.map((mod) => [
    getAttributeId(mod[0] as AttributeName),
    mod[1].map((convert) => [getAttributeId(convert[0] as AttributeName), convert[1]]),
  ]);

  // replace space in key of object with underscore
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  toReturn.modifiers.damageMultiplier = Object.entries(combination.modifiers.damageMultiplier).map(
    ([key, value]) => [key.replaceAll(' ', ''), value],
  );

  toReturn.baseAttributes = Object.entries(combination.baseAttributes).map(([key, value]) => [
    getAttributeId(key as AttributeName),
    value,
  ]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  toReturn.relevantConditions = combination.relevantConditions.map(getConditionId);

  return toReturn;
}

/**
 * Calculates the total number of ways to combine elements in the array. For each slot in the array,
 * the number of combinations is multiplied with the number of elements in the slot (choices).
 * The total number of combinations is then multiplied with the number of variations of the other combinations, e.g. extras.
 *
 * @template T
 * @param {T[][]} array array to calculate the total number of combinations for
 * @param {number} combinationCount number of combinations to multiply the total with
 * @returns {number} total number of combinations
 */
export function getTotalCombinations<T>(array: T[][], combinationCount: number): number {
  if (!array) {
    return -1;
  }

  let total = combinationCount;
  array.forEach((slot) => {
    total *= slot.length;
  });

  return total;
}

/**
 * Transform the redux state into an array containing arrays of extras ids.
 * Reason being so that the order in the array is always the same.
 *
 * @param {any} reduxState redux state
 * @returns {string[][]} array of arrays of extras ids
 */
export function getExtrasIdsCombinations(reduxState: RootState): string[][] {
  const extrasNames = getExtrasIds(reduxState);
  const extrasIds = [
    extrasNames.Runes,
    extrasNames.Sigil1,
    extrasNames.Sigil2,
    extrasNames.Enhancement,
    extrasNames.Nourishment,
    extrasNames.Relics,
  ];

  return extrasIds;
}

/**
 * Splits the work into NUM_THREADS chunks, each chunk getting an array of subtrees to calculate
 * combinations are split in a round-robin fashion
 *
 * @template T
 * @param {T[][]} combinations all possible affix combinations
 * @param {number} NUM_THREADS number of threads to use
 */
export function splitCombinations<T>(combinations: T[][], NUM_THREADS: number = 4): T[][][] {
  const chunks: T[][][] = [...Array(NUM_THREADS)].map(() => [] as T[][]);

  let chunkIndex = 0;
  combinations.forEach((combination) => {
    chunks[chunkIndex].push(combination);
    chunkIndex = (chunkIndex + 1) % NUM_THREADS;
  });

  return chunks;
}
