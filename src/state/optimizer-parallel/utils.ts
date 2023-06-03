import { get } from 'http';
import {
  Affix,
  AttributeName,
  Attributes,
  ConditionName,
  WeaponTypes,
  damagingConditions,
} from '../../utils/gw2-data';
import { Character } from '../optimizer/optimizerCore';
import { Combination } from '../optimizer/optimizerSetup';

const attributes = [
  ...Object.values(Attributes).flat(1),
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
  'Alternative Damage',

  // profession specific
  'Clone Critical Chance',
  'Phantasm Critical Chance',
  'Phantasm Damage',
  'Phantasm Critical Damage',
  'Siphon Base Coefficient',
  'Siphon DPS',
  'Siphon Damage',

  // misc
  'Strike Damage',
  'Maximum Health',
  'Outgoing Healing',
  'All Damage',
  'Damage Taken',
  'Damage Reduction',
  'Power Coefficient',
  'NonCrit Power Coefficient',
  'NonCrit Effective Power',
  'Power2 DPS',
  'Power2 Coefficient',
  'Flat DPS',
  'Power DPS',
];
attributes[41] = 'Bleeding Coefficient';
attributes[42] = 'Burning Coefficient';
attributes[43] = 'Confusion Coefficient';
attributes[44] = 'Poison Coefficient';
attributes[45] = 'Torment Coefficient';

const getAffixId = (affix: string) => (affix ? Object.keys(Affix).indexOf(affix) : null);
const getAttributeId = (attribute: AttributeName) => {
  // corresponds to gw2data.rs -> Attribute enum. musth ave same order

  const index = attributes.indexOf(attribute);
  if (index === -1) {
    throw new Error(`Attribute ${attribute} not found`);
  }

  return index;
};
const getWeaponTypeId = (weaponType: string) => Object.values(WeaponTypes).indexOf(weaponType);
const getConditionId = (condition: string) =>
  Object.values(damagingConditions).indexOf(condition as ConditionName);

const getAttributeName = (attributeId: number) => {
  // corresponds to gw2data.rs -> Attribute enum. must have same order
  return attributes[attributeId];
};

const getAffixName = (affixId: number) => {
  return Object.keys(Affix)[affixId];
};

// replace string values with their corresponding IDs.
// in rust we use enums, which are i32 indexed, so we need to convert the strings to numbers
function modifyCombinations(combinations: Combination[]): any {
  const toReturn = [...combinations].map((combination) => combination.settings || {}) as any[];

  for (let i = 0; i < combinations.length; i++) {
    const combination = combinations[i];

    if (combination.settings) {
      toReturn[i].rankby = getAttributeId(combination.settings?.rankby as AttributeName);
      toReturn[i].weaponType = getWeaponTypeId(combination.settings?.weaponType);
      toReturn[i].forcedAffixes = combination.settings.forcedAffixes.map(getAffixId);
      toReturn[i].affixesArray = combination.settings?.affixesArray.map((slot) =>
        slot.map((affix) => getAffixId(affix)),
      );
      toReturn[i].affixStatsArray = combination.settings?.affixStatsArray.map((slot) =>
        slot.map((affixes) =>
          affixes.map((affix) => [getAttributeId(affix[0] as AttributeName), affix[1]]),
        ),
      );

      // in rust we assume that the arrays are always 14 long
      if (toReturn[i].affixesArray.length === 13) {
        // add one more empty slot
        toReturn[i].affixesArray.push([]);
      }
      if (toReturn[i].affixStatsArray.length === 13) {
        // add one more empty slot
        toReturn[i].affixStatsArray.push([]);
      }

      toReturn[i].modifiers.buff = combination.settings?.modifiers.buff.map((mod) => [
        getAttributeId(mod[0] as AttributeName),
        mod[1],
      ]);
      toReturn[i].modifiers.convert = combination.settings?.modifiers.convert.map((mod) => [
        getAttributeId(mod[0] as AttributeName),
        mod[1].map((convert) => [getAttributeId(convert[0] as AttributeName), convert[1]]),
      ]);
      toReturn[i].modifiers.convertAfterBuffs =
        combination.settings?.modifiers.convertAfterBuffs.map((mod) => [
          getAttributeId(mod[0] as AttributeName),
          mod[1].map((convert) => [getAttributeId(convert[0] as AttributeName), convert[1]]),
        ]);

      // replace space in key of object with underscore
      toReturn[i].modifiers.damageMultiplier = Object.entries(
        combination.settings?.modifiers.damageMultiplier,
      ).map(([key, value]) => [key.replaceAll(' ', ''), value]);

      toReturn[i].baseAttributes = Object.entries(combination.settings?.baseAttributes).map(
        ([key, value]) => [getAttributeId(key as AttributeName), value],
      );

      toReturn[i].relevantConditions = combination.settings?.relevantConditions.map(getConditionId);

      // we are not interested in these objects in rust - for now
      delete toReturn[i].shouldDisplayExtras;
      delete toReturn[i].appliedModifiers;
      delete toReturn[i].cachedFormState;
      delete toReturn[i].extrasCombination;
    }
  }

  return toReturn;
}

const arrayToObject = (array: any[]) => {
  const map = {};
  array.forEach(([key, value]) => {
    map[key] = value;
  });
  return map;
};

function transformResults(results: any, combinations: Combination[]): Character[] {
  const resultList: Character[] = [];

  results.forEach((character: any) => {
    character.attributes = character.attributes.map((attribute: any, index: number) => {
      return [getAttributeName(index), attribute];
    });
    // remove all entries with 0 value
    character.attributes = character.attributes.filter((attribute: any) => attribute[1] !== 0);

    character.base_attributes = character.base_attributes.map((attribute: any, index: number) => {
      return [getAttributeName(index), attribute];
    });
    // remove all entries with 0 value
    character.base_attributes = character.base_attributes.filter(
      (attribute: any) => attribute[1] !== 0,
    );

    resultList.push({
      baseAttributes: character.base_attributes,
      attributes: arrayToObject(character.attributes),
      gear: character.gear.map(getAffixName),
      gearStats: arrayToObject(
        character.gear_stats.map((stat, index) => {
          return [getAttributeName(index), stat];
        }),
      ),
      id: undefined,
      results: undefined,
      settings: {
        ...combinations[character.combination_id]?.settings,
        extrasCombination: combinations[character.combination_id]?.extrasCombination,
        rankby: getAttributeName(combinations[character.combination_id]?.settings?.rankby),
      },
      valid: true,
    });
  });

  return resultList;
}

export {
  getAffixId,
  getAttributeId,
  getWeaponTypeId,
  getAttributeName,
  modifyCombinations,
  transformResults,
};
