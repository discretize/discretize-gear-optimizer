import {
  Affix,
  AffixName,
  AttributeName,
  Attributes,
  ConditionName,
  WeaponTypes,
  damagingConditions,
} from '../../utils/gw2-data';
import { Character, OptimizerCoreMinimalSettings } from '../optimizer/optimizerCore';
import { ResultProperties } from './entry';
import { Combination, Settings } from './optimizerSetup';

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
  'Phantasm Effective Power',
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

const getAffixId = (affix: AffixName | null) => (affix ? Object.keys(Affix).indexOf(affix) : null);
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

function settingsToWorkerString(settings: Settings): string {
  // deep copy combinations
  const toReturn = JSON.parse(JSON.stringify(settings));

  toReturn.rankby = getAttributeId(settings.rankby as AttributeName);
  toReturn.weaponType = getWeaponTypeId(settings.weaponType);
  toReturn.forcedAffixes = settings.forcedAffixes.map(getAffixId);
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
function combinationsToWorkerString(combinations: Combination[]): any {
  // deep copy combinations
  const toReturn = JSON.parse(JSON.stringify(combinations));

  for (let i = 0; i < combinations.length; i++) {
    const combination = combinations[i];

    toReturn[i].modifiers.buff = combination.modifiers.buff.map((mod) => [
      getAttributeId(mod[0] as AttributeName),
      mod[1],
    ]);
    toReturn[i].modifiers.convert = combination.modifiers.convert.map((mod) => [
      getAttributeId(mod[0] as AttributeName),
      mod[1].map((convert) => [getAttributeId(convert[0] as AttributeName), convert[1]]),
    ]);
    toReturn[i].modifiers.convertAfterBuffs = combination.modifiers.convertAfterBuffs.map((mod) => [
      getAttributeId(mod[0] as AttributeName),
      mod[1].map((convert) => [getAttributeId(convert[0] as AttributeName), convert[1]]),
    ]);

    // replace space in key of object with underscore
    toReturn[i].modifiers.damageMultiplier = Object.entries(
      combination.modifiers.damageMultiplier,
    ).map(([key, value]) => [key.replaceAll(' ', ''), value]);

    toReturn[i].baseAttributes = Object.entries(combination.baseAttributes).map(([key, value]) => [
      getAttributeId(key as AttributeName),
      value,
    ]);

    toReturn[i].relevantConditions = combination.relevantConditions.map(getConditionId);
  }

  return JSON.stringify(toReturn);
}

const arrayToObject = <T>(array: [string | number, T][]): Record<string | number, T> => {
  const map: Record<string | number, T> = {};
  array.forEach(([key, value]) => {
    map[key] = value;
  });
  return map;
};

function enhanceResults(
  results: any,
  settings: Settings,
  combinations: Combination[],
  resultProperties: ResultProperties,
): Character[] {
  const resultList: Character[] = [];

  results.forEach((character: any, index: number) => {
    character.attributes = character.attributes.map((attribute: any, index: number) => {
      return [getAttributeName(index), attribute];
    });
    // remove all entries with 0 value
    // character.attributes = character.attributes.filter((attribute: any) => attribute[1] !== 0);

    character.base_attributes = character.base_attributes.map((attribute: any, index: number) => {
      return [getAttributeName(index), attribute];
    });
    // remove all entries with 0 value
    character.base_attributes = character.base_attributes.filter(
      (attribute: any) => attribute[1] !== 0,
    );

    if (!combinations[character.combination_id]) {
      throw new Error(`Combination ${character.combination_id} not found`);
    }

    const convAttr = (values: string[], arr: number[]) =>
      Object.fromEntries(values.map((attr, i) => [attr, arr[i] || 0]));

    const { profession, specialization, weaponType, rankby, shouldDisplayExtras, gameMode, slots } =
      settings;

    const { cachedFormState, sharedModifiers, allExtrasData } = resultProperties;
    const { modifiers } = combinations[character.combination_id];

    const appliedModifiers = [
      ...sharedModifiers,
      ...allExtrasData[character.combination_id].extrasModifiers,
    ];

    const characterSettings: OptimizerCoreMinimalSettings = {
      cachedFormState,
      profession,
      specialization,
      weaponType,
      appliedModifiers,
      rankby,
      shouldDisplayExtras,
      extrasCombination: allExtrasData[character.combination_id].extrasCombination,
      modifiers: {
        ...modifiers,
        damageMultiplierBreakdown: {},
      },
      gameMode,
    };

    const indicators = {
      Damage: character.attributes[54][1],
      Survivability: character.attributes[55][1],
      Healing: character.attributes[56][1],
    };

    const charResults = {
      ...character.results,
      effectivePositiveValues: convAttr(
        ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise'],
        character.results.effectivePositiveValues,
      ),
      effectiveNegativeValues: convAttr(
        ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise'],
        character.results.effectiveNegativeValues,
      ),
      damageBreakdown: convAttr(
        ['Power', 'Power2', 'Bleeding', 'Burning', 'Confusion', 'Poison', 'Torment'],
        character.results.damageBreakdown,
      ),
      effectiveDamageDistribution: convAttr(
        ['Power', 'Power2', 'Bleeding', 'Burning', 'Confusion', 'Poison', 'Torment'],
        character.results.effectiveDamageDistribution,
      ),
      indicators,
    };

    resultList.push({
      baseAttributes: arrayToObject(character.base_attributes),
      attributes: arrayToObject(character.attributes),
      gear: character.gear.map(getAffixName).slice(0, slots),
      gearStats: arrayToObject(
        character.gear_stats
          .map((stat: number, index: number) => {
            return [getAttributeName(index), stat];
          })
          .filter(([_, stat]: [any, number]) => stat > 0),
      ),
      id: `${index}_${character.combination_id}_${Math.random()}`,
      settings: characterSettings,
      results: charResults,
      valid: true,
    });
  });

  return resultList;
}

function getTotalCombinations(settings: Settings, combinationCount: number) {
  const { affixesArray } = settings;

  if (!affixesArray) {
    return -1;
  }

  let total = combinationCount;
  affixesArray.forEach((slot) => {
    total *= slot.length;
  });

  return total;
}

export {
  combinationsToWorkerString,
  enhanceResults,
  getAffixId,
  getAttributeId,
  getAttributeName,
  getTotalCombinations,
  getWeaponTypeId,
  settingsToWorkerString,
};
