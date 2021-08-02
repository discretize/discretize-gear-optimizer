/* eslint-disable no-console */
/* eslint-disable prefer-object-spread */
/* eslint-disable prefer-template */
/* eslint-disable dot-notation */

import {
  Affix,
  Slots,
  ForcedSlots,
  Classes,
  Condition,
  Attributes,
  MAX_INFUSIONS,
  INFUSION_BONUS,
} from '../../utils/gw2-data';

/**
 * ------------------------------------------------------------------------
 * Core Optimizer Logic
 * ------------------------------------------------------------------------
 */

let applyInfusionsFunction;
let condiResultCache;

let worstScore;
let list;
let isChanged = true;

/**
 * Sets up optimizer with input data
 *
 * @param {Object} list - the list to store results in (this will be *mutated* by calculate())
 *
 * @param {Object} input
 * @param {Object[]} input.modifiers - array of modifier objects
 * @param {?String[]} input.tags - modifier data for the UI
 *                      (passed unedited into character.settings)
 * @param {String} input.profession
 * @param {String} input.weapontype
 * @param {String[]} input.affixes - all selected gear affixes to iterate over
 * @param {String[]} input.forcedAffixes - array of specific affix names for each slot,
 *                     or '' for unspecfied
 * @param {String} input.rankby - "Damage"/"Survivability"/"Healing"
 * @param {number} input.minBoonDuration
 * @param {number} input.minHealingPower
 * @param {number} input.minToughness
 * @param {number} input.maxToughness
 * @param {number} input.maxResults
 * @param {?String} input.primaryInfusion
 * @param {?String} input.secondaryInfusion
 * @param {?Number} input.primaryMaxInfusions - number of infusions, 0-18
 * @param {?Number} input.secondaryMaxInfusions - number of infusions, 0-18
 *
 * @param {?Object.<String, Number>} input.percentDistribution - old style distribution
 *                                   (sums to 100)
 * @param {?Object.<String, Number>} input.distribution - new style distribution
 *                                   (coefficient per second; average condition stacks)
 *
 * @returns {Object} settings - parsed settings object
 */
export function setup(input) {
  worstScore = undefined;
  list = [];

  /* eslint-disable prefer-const */
  let {
    modifiers: modifiersInput,
    primaryInfusion: primaryInfusionInput,
    secondaryInfusion: secondaryInfusionInput,
    primaryMaxInfusions: primaryMaxInfusionsInput,
    secondaryMaxInfusions: secondaryMaxInfusionsInput,
    infusionNoDuplicates,
    ...others
  } = input;
  /* eslint-enable prefer-const */

  const settings = { ...others };
  console.debug('settings:', settings);

  /* Base Attributes */

  settings.baseAttributes = {};
  settings.baseAttributes.Health = Classes[settings.profession].health;
  settings.baseAttributes.Armor = Classes[settings.profession].defense;

  for (const attribute of Attributes.PRIMARY) {
    settings.baseAttributes[attribute] = 1000;
  }

  for (const attribute of Attributes.SECONDARY) {
    settings.baseAttributes[attribute] = 0;
  }

  settings.baseAttributes['Condition Duration'] = 0;
  settings.baseAttributes['Boon Duration'] = 0;
  settings.baseAttributes['Critical Chance'] = 5;
  settings.baseAttributes['Critical Damage'] = 150;

  /* Modifiers */

  settings.modifiers = {
    multiplier: {
      'Effective Power': 1,
      'Effective Condition Damage': 1,
      'Effective Health': 1,
      'Effective Healing': 1,
      'Critical Damage': 1,
    },
    buff: [],
    convert: [],
  };
  let addEffectiveConditionDamage = 0;
  let addEffectivePower = 0;
  let targetEffectiveConditionDamage = 0;
  let targetEffectivePower = 0;

  const validMultiplierStats = new Set([
    ...Attributes.EFFECTIVE,
    'Effective Condition Damage',

    // Additive mods e.g. force sigil + frost spirit are additive with each other
    'add: Effective Condition Damage',
    'add: Effective Power',

    // Vulnerability and exposed are additive with each other
    'target: Effective Condition Damage',
    'target: Effective Power',
    'Critical Damage',
    ...Attributes.CONDITION_DAMAGE,
  ]);
  const validFlatStats = new Set([
    ...Attributes.PRIMARY,
    ...Attributes.SECONDARY,
    ...Attributes.DERIVED,
    ...Attributes.BOON_DURATION,
    ...Attributes.CONDITION_DURATION,
  ]);
  const validBuffStats = new Set([
    ...Attributes.PRIMARY,
    ...Attributes.SECONDARY,
    ...Attributes.DERIVED,
    ...Attributes.BOON_DURATION,
    ...Attributes.CONDITION_DURATION,
  ]);
  const validConvertStats = new Set([...Attributes.PRIMARY, ...Attributes.SECONDARY]);

  modifiersInput = modifiersInput || [];
  for (const modifiers of modifiersInput) {
    if (!modifiers) {
      continue;
    }

    for (const [type, modifier] of Object.entries(modifiers)) {
      if (type && modifier !== undefined) {
        if (type === 'bountiful-maintenance-oil') {
          settings.modifiers[type] = modifier;
        } else {
          for (const [attribute, value] of Object.entries(modifier)) {
            if (attribute && value) {
              switch (type) {
                case 'multiplier':
                  if (validMultiplierStats.has(attribute)) {
                    switch (attribute) {
                      case 'add: Effective Condition Damage': {
                        addEffectiveConditionDamage += value;
                        break;
                      }
                      case 'add: Effective Power': {
                        addEffectivePower += value;
                        break;
                      }
                      case 'target: Effective Condition Damage': {
                        targetEffectiveConditionDamage += value;
                        break;
                      }
                      case 'target: Effective Power': {
                        targetEffectivePower += value;
                        break;
                      }
                      default:
                        if (settings.modifiers['multiplier'][attribute] === undefined) {
                          settings.modifiers['multiplier'][attribute] = 1 + value;
                        } else {
                          settings.modifiers['multiplier'][attribute] *= 1 + value;
                        }
                    }
                  } else {
                    throw new Error(
                      'Multipliers can only modify primary, secondary or ' +
                        'effective attributes, not ' +
                        attribute,
                    );
                  }

                  break;
                case 'flat':
                  if (validFlatStats.has(attribute)) {
                    settings.baseAttributes[attribute] =
                      (settings.baseAttributes[attribute] || 0) + value;
                  } else {
                    throw new Error(
                      'Flat modifiers can only increase primary, secondary or ' +
                        'derived attributes, not ' +
                        attribute,
                    );
                  }

                  break;
                case 'buff':
                  if (validBuffStats.has(attribute)) {
                    settings.modifiers['buff'][attribute] =
                      (settings.modifiers['buff'][attribute] || 0) + value;
                  } else {
                    throw new Error(
                      'Buff modifiers can only increase primary, secondary or ' +
                        'derived attributes, not ' +
                        attribute,
                    );
                  }

                  break;
                case 'convert':
                  if (validConvertStats.has(attribute)) {
                    if (!settings.modifiers['convert'][attribute]) {
                      settings.modifiers['convert'][attribute] = {};
                    }

                    for (const [source, conversion] of Object.entries(value)) {
                      settings.modifiers['convert'][attribute][source] =
                        (settings.modifiers['convert'][attribute][source] || 0) + conversion;
                    }
                  } else {
                    throw new Error(
                      'Conversions can only modify primary or secondary attributes, not ' +
                        attribute,
                    );
                  }

                  break;
                // no default
              }
            }
          }
        }
      }
    }
  }

  settings.modifiers['multiplier']['Effective Condition Damage'] *= 1 + addEffectiveConditionDamage;
  settings.modifiers['multiplier']['Effective Power'] *= 1 + addEffectivePower;
  settings.modifiers['multiplier']['Effective Condition Damage'] *=
    1 + targetEffectiveConditionDamage;
  settings.modifiers['multiplier']['Effective Power'] *= 1 + targetEffectivePower;

  // convert to arrays for simpler iteration
  settings.modifiers['buff'] = Object.entries(settings.modifiers['buff'] || {});
  settings.modifiers['convert'] = Object.entries(settings.modifiers['convert'] || {}).map(
    ([attribute, conversion]) => [attribute, Object.entries(conversion)],
  );

  /* Distribution */

  // legacy percent distribution conversion
  // see: https://github.com/discretize/discretize-old/discussions/136
  if (input.percentDistribution) {
    const { Power, ...rest } = input.percentDistribution;
    settings.distribution = {};
    settings.distribution['Power'] = Power / 1025;
    for (const [condition, value] of Object.entries(rest)) {
      settings.distribution[condition] = value / Condition[condition].baseDamage;
    }
  }

  settings.relevantConditions = [];
  for (const [condition, value] of Object.entries(settings.distribution)) {
    if (condition !== 'Power' && value) {
      settings.relevantConditions.push(condition);
    }
  }

  /* Infusions */

  const validInfusionStats = new Set([
    ...Attributes.PRIMARY,
    ...Attributes.SECONDARY,
    ...Attributes.DERIVED,
  ]);

  let activeInfusions = 0;
  if (primaryInfusionInput && primaryInfusionInput !== 'None') {
    if (validInfusionStats.has(primaryInfusionInput)) {
      activeInfusions++;
      settings.primaryInfusion = primaryInfusionInput;
      settings.primaryMaxInfusions = primaryMaxInfusionsInput;
    } else {
      throw new Error(
        'Primary infusion can only increase primary, secondary or derived attributes, not ' +
          primaryInfusionInput,
      );
    }
  }

  if (
    secondaryInfusionInput &&
    secondaryInfusionInput !== 'None' &&
    secondaryInfusionInput !== primaryInfusionInput
  ) {
    if (validInfusionStats.has(secondaryInfusionInput)) {
      activeInfusions++;
      if (activeInfusions === 2) {
        settings.secondaryInfusion = secondaryInfusionInput;
        settings.secondaryMaxInfusions = secondaryMaxInfusionsInput;
      } else {
        // only secondary is selected; pretend secondary is primary
        settings.primaryInfusion = secondaryInfusionInput;
        settings.primaryMaxInfusions = secondaryMaxInfusionsInput;
      }
    } else {
      throw new Error(
        'Secondary infusion can only increase ' +
          'primary, secondary or derived attributes, not ' +
          secondaryInfusionInput,
      );
    }
  }

  let infusionMode;
  switch (activeInfusions) {
    case 0:
      infusionMode = 'None';
      break;
    case 1:
      infusionMode = 'Primary';
      break;
    case 2:
      if (settings.primaryMaxInfusions + settings.secondaryMaxInfusions <= MAX_INFUSIONS) {
        infusionMode = 'Few';
      } else {
        infusionMode = infusionNoDuplicates ? 'SecondaryNoDuplicates' : 'Secondary';
      }
    // no default
  }

  if (applyInfusions[infusionMode] === undefined) {
    throw new Error('Error: optimizer selected invalid infusion calculation mode: ' + infusionMode);
  }

  settings.infusionMode = infusionMode;

  /* Equipment */

  settings.slots = Slots[settings.weapontype];

  // affixesArray: valid affixes for each slot, taking forced slots into account
  // e.g. [[Berserker, Assassin], [Assassin], [Berserker, Assassin]...]
  settings.affixesArray = new Array(settings.slots.length).fill(settings.affixes);

  settings.forcedArmor = false;
  settings.forcedRing = false;
  settings.forcedAcc = false;
  settings.forcedWep = false;
  for (let index = 0; index < settings.forcedAffixes.length; index++) {
    const inputValue = settings.forcedAffixes[index];
    if (!inputValue) {
      continue;
    }

    for (const affix of settings.affixes) {
      if (affix.toLowerCase().startsWith(inputValue.toLowerCase())) {
        settings.affixesArray[index] = [affix];
        if (['shld', 'glov', 'boot'].includes(ForcedSlots[index])) {
          settings.forcedArmor = true;
        } else if (['rng1', 'rng2'].includes(ForcedSlots[index])) {
          settings.forcedRing = true;
        } else if (['acc1', 'acc2'].includes(ForcedSlots[index])) {
          settings.forcedAcc = true;
        } else if (['wep1', 'wep2'].includes(ForcedSlots[index])) {
          settings.forcedWep = true;
        }

        break;
      }
    }
  }

  // rearrange affixes so you don't always start with e.g. full berserker. Example:
  // [vipe sini grie] helm
  // [grie vipe sini] shld
  // [sini grie vipe] coat
  // [vipe]           glov (forced to viper)
  // [grie vipe sini] legs
  // ...
  settings.affixesArray = settings.affixesArray.map((affixes, slotindex) => {
    if (affixes.length === 1) {
      return affixes;
    }
    const result = [];
    for (const [index, affix] of affixes.entries()) {
      result[(index + slotindex) % affixes.length] = affix;
    }
    return result;
  });
  // console.log(settings.affixesArray.map(item => item.toString()));

  // like affixesArray, but each entry is an array of arrays of stats given by that piece with
  // that affix
  // e.g. berserker helm -> [[Power, 63],[Precision, 45],[Ferocity, 45]]
  settings.affixStatsArray = settings.affixesArray.map((possibleAffixes, slotindex) =>
    possibleAffixes.map((affix) => {
      const statTotals = {};
      const bonuses = Object.entries(settings.slots[slotindex].item[Affix[affix].type]);
      for (const [type, bonus] of bonuses) {
        for (const stat of Affix[affix].bonuses[type]) {
          statTotals[stat] = (statTotals[stat] || 0) + bonus;
        }
      }

      return Object.entries(statTotals);
    }),
  );

  // used to keep the progress counter in sync when skipping identical gear combinations.
  settings.runsAfterThisSlot = [];
  for (let index = 0; index < settings.affixesArray.length; index++) {
    let counter = 1;
    for (const affixes of settings.affixesArray.slice(index)) {
      counter *= affixes.length;
    }

    settings.runsAfterThisSlot.push(counter);
  }

  settings.runsAfterThisSlot.push(1);

  // const freeSlots = settings.weapontype === 'Dual wield' ? 5 : 6;
  // const pairs = settings.weapontype === 'Dual wield' ? 3 : 2;
  // const triplets = 1;
  // calculationTotal
  //   = Math.pow(settings.affixes.length, freeSlots)
  //   * Math.pow(settings.affixes.length + _choose(settings.affixes.length, 2), pairs)
  //   * (settings.affixes.length
  //     + settings.affixes.length * (settings.affixes.length - triplets)
  //     + _choose(settings.affixes.length, 3));

  // function _choose (n, k) {
  //   let num = 1;
  //   let denom = 1;

  //   for (let i = 0; i < k; i++) {
  //     num *= (n - i);
  //     denom *= (i + 1);
  //   }

  //   return num / denom;
  // }

  return settings;
}

/**
 * A generator function that iterates synchronously through all possible builds, updating the list
 * object with the best results. Yields periodically to allow UI to be updated or cancelled.
 *
 * Remember, a generator's next() function returns a plain object { value, done }.
 *
 * @param {*} settings
 * @yields {Object} result
 * @yields {boolean} result.done - true if the calculation is finished
 * @yields {number} result.value.isChanged - true if list has been mutated
 * @yields {number} result.value.percent - the progress percentage
 */
export function* calculate(settings) {
  if (settings.affixes.length === 0) {
    return {
      isChanged: true,
      percent: 100,
      newList: [],
    };
  }

  applyInfusionsFunction = applyInfusions[settings.infusionMode];

  let calculationTotal = 1;
  for (const affixes of settings.affixesArray) {
    calculationTotal *= affixes.length;
  }

  let calculationRuns = 0;

  condiResultCache = new Map();
  const calculationQueue = [];
  calculationQueue.push([]);
  const calculationStatsQueue = [];
  calculationStatsQueue.push({});

  let iterationTimer = Date.now();
  let UPDATE_MS = 90;
  let cycles = 0;
  isChanged = true;
  while (calculationQueue.length > 0) {
    cycles++;

    // pause to update UI at around 15 frames per second
    if (cycles % 1000 === 0 && Date.now() - iterationTimer > UPDATE_MS) {
      yield {
        isChanged,
        percent: Math.floor((calculationRuns * 100) / calculationTotal),
        newList: isChanged ? list.slice() : null,
      };
      isChanged = false;
      UPDATE_MS = 55;
      iterationTimer = Date.now();
    }

    const gear = calculationQueue.pop();
    const gearStats = calculationStatsQueue.pop();
    const nextSlot = gear.length;

    /**
     * Deduplicate identical combinations.
     *
     * This prevents calculating both e.g.
     *    berserker ring + assassin ring
     *    assassin ring + berserker ring
     * by skipping combinations in which identical-stat items are out of order.
     *
     * Each check is disabled if forcing one or more of those slots to a specific gear type.
     */
    if (
      (!settings.forcedRing && nextSlot === 9 && gear[nextSlot - 2] > gear[nextSlot - 1]) ||
      (!settings.forcedAcc && nextSlot === 11 && gear[nextSlot - 2] > gear[nextSlot - 1]) ||
      (!settings.forcedWep && nextSlot === 14 && gear[nextSlot - 2] > gear[nextSlot - 1]) ||
      (!settings.forcedArmor && nextSlot === 6 && (gear[1] > gear[3] || gear[3] > gear[5]))
    ) {
      // bump calculationRuns by the number of runs we just skipped
      calculationRuns += settings.runsAfterThisSlot[nextSlot];
      continue;
    }

    if (nextSlot >= settings.slots.length) {
      calculationRuns++;
      testCharacter(gear, gearStats, settings);
      continue;
    }

    // Recycle for Affix 0, clone for 1+
    for (let index = 1; index < settings.affixesArray[nextSlot].length; index++) {
      const newGear = gear.slice();
      const newGearStats = Object.assign({}, gearStats);

      const currentAffix = settings.affixesArray[nextSlot][index];
      newGear[nextSlot] = currentAffix;

      // add gear stats
      for (const [stat, bonus] of settings.affixStatsArray[nextSlot][index]) {
        newGearStats[stat] = (newGearStats[stat] || 0) + bonus;
      }

      calculationQueue.push(newGear);
      calculationStatsQueue.push(newGearStats);
    }

    const currentAffix = settings.affixesArray[nextSlot][0];
    gear[nextSlot] = currentAffix;

    // add gear stats
    for (const [stat, bonus] of settings.affixStatsArray[nextSlot][0]) {
      gearStats[stat] = (gearStats[stat] || 0) + bonus;
    }

    calculationQueue.push(gear);
    calculationStatsQueue.push(gearStats);
  }

  return {
    isChanged,
    percent: Math.floor((calculationRuns * 100) / calculationTotal),
    newList: list.slice(),
  };
}

function testCharacter(gear, gearStats, settings) {
  if (!gear) {
    return;
  }

  const character = {
    gear, // passed by reference
    settings, // passed by reference
    gearStats, // passed by reference
    attributes: null,
    valid: true,
    baseAttributes: Object.assign({}, settings.baseAttributes),
  };

  // apply gear
  // eslint-disable-next-line guard-for-in
  for (const stat in gearStats) {
    character.baseAttributes[stat] += gearStats[stat];
  }

  // applyInfusionsFunction is aliased to the correct applyInfusions[mode] function during setup
  applyInfusionsFunction(character);
}

function addBaseStats(character, stat, amount) {
  character.baseAttributes[stat] = (character.baseAttributes[stat] || 0) + amount;
}

const applyInfusions = {};

// Applies no infusions
applyInfusions['None'] = function (character) {
  updateAttributesFast(character);
  insertCharacter(character);
};

// Just applies the primary infusion
applyInfusions['Primary'] = function (character) {
  const { settings } = character;
  character.infusions = { [settings.primaryInfusion]: settings.primaryMaxInfusions };
  addBaseStats(character, settings.primaryInfusion, settings.primaryMaxInfusions * INFUSION_BONUS);
  updateAttributesFast(character);
  insertCharacter(character);
};

// Just applies the maximum number of primary/secondary infusions, since the total is ≤18
applyInfusions['Few'] = function (character) {
  const { settings } = character;

  character.infusions = {
    [settings.primaryInfusion]: settings.primaryMaxInfusions,
    [settings.secondaryInfusion]: settings.secondaryMaxInfusions,
  };
  addBaseStats(character, settings.primaryInfusion, settings.primaryMaxInfusions * INFUSION_BONUS);
  addBaseStats(
    character,
    settings.secondaryInfusion,
    settings.secondaryMaxInfusions * INFUSION_BONUS,
  );
  updateAttributesFast(character);
  insertCharacter(character);
};

// Inserts every valid combination of 18 infusions
applyInfusions['Secondary'] = function (character) {
  const { settings } = character;

  const testInfusionUsefulness = function () {
    const temp = clone(character);
    addBaseStats(temp, settings.primaryInfusion, MAX_INFUSIONS * INFUSION_BONUS);
    addBaseStats(temp, settings.secondaryInfusion, MAX_INFUSIONS * INFUSION_BONUS);
    updateAttributesFast(temp, true);
    return temp.attributes[settings.rankby] > worstScore;
  };

  if (!worstScore || testInfusionUsefulness()) {
    let previousResult;

    let primaryCount = settings.primaryMaxInfusions;
    let secondaryCount = MAX_INFUSIONS - primaryCount;
    while (secondaryCount <= settings.secondaryMaxInfusions) {
      const temp = clone(character);
      addBaseStats(temp, settings.primaryInfusion, primaryCount * INFUSION_BONUS);
      addBaseStats(temp, settings.secondaryInfusion, secondaryCount * INFUSION_BONUS);
      updateAttributesFast(temp);
      if (temp.valid && temp.attributes[settings.rankby] !== previousResult) {
        temp.infusions = {
          [settings.primaryInfusion]: primaryCount,
          [settings.secondaryInfusion]: secondaryCount,
        };
        insertCharacter(temp);
        previousResult = temp.attributes[settings.rankby];
      }

      primaryCount--;
      secondaryCount++;
    }
  }
};

// Tests every valid combination of 18 infusions and inserts the best result
applyInfusions['SecondaryNoDuplicates'] = function (character) {
  const { settings } = character;

  const testInfusionUsefulness = function () {
    const temp = clone(character);
    addBaseStats(temp, settings.primaryInfusion, MAX_INFUSIONS * INFUSION_BONUS);
    addBaseStats(temp, settings.secondaryInfusion, MAX_INFUSIONS * INFUSION_BONUS);
    updateAttributesFast(temp, true);
    return temp.attributes[settings.rankby] > worstScore;
  };

  if (!worstScore || testInfusionUsefulness()) {
    let best = null;

    let primaryCount = settings.primaryMaxInfusions;
    let secondaryCount = MAX_INFUSIONS - primaryCount;
    while (secondaryCount <= settings.secondaryMaxInfusions) {
      const temp = clone(character);
      addBaseStats(temp, settings.primaryInfusion, primaryCount * INFUSION_BONUS);
      addBaseStats(temp, settings.secondaryInfusion, secondaryCount * INFUSION_BONUS);
      updateAttributesFast(temp);
      if (temp.valid) {
        temp.infusions = {
          [settings.primaryInfusion]: primaryCount,
          [settings.secondaryInfusion]: secondaryCount,
        };
        if (!best || characterLT(best, temp)) {
          best = temp;
        }
      }

      primaryCount--;
      secondaryCount++;
    }

    if (best) {
      insertCharacter(best);
    }
  }
};

let uniqueIDCounter = 0;
function insertCharacter(character) {
  const { settings, attributes, valid } = character;

  if (!valid || (worstScore && worstScore > attributes[settings.rankby])) {
    return;
  }

  character.id = uniqueIDCounter++;

  if (list.length === 0) {
    list.push(character);
  } else {
    let position = list.length;
    while (position > 0 && characterLT(list[position - 1], character)) {
      position--;
    }

    if (position > settings.maxResults - 1) {
      return;
    }

    if (position <= list.length - 1) {
      list.splice(position, 0, character);

      if (list.length > settings.maxResults) {
        list.length = settings.maxResults;
      }
    } else {
      list.push(character);
    }

    if (list.length === settings.maxResults) {
      worstScore = list[list.length - 1].attributes[settings.rankby];
    }
  }

  isChanged = true;
}

// returns true if B is better than A
export function characterLT(a, b) {
  const { settings } = a;

  // if (!a.valid && b.valid) {
  //     // A is invalid, B is valid -> replace A
  //     return true;
  // } else if (!b.valid) {
  //     // B is invalid -> do not replace A
  //     return false;
  // }

  if (a.attributes[settings.rankby] === b.attributes[settings.rankby]) {
    let sumA = 0;
    let sumB = 0;
    for (const attribute of Attributes.PRIMARY.concat(Attributes.SECONDARY)) {
      sumA += a.attributes[attribute] || 0;
      sumB += b.attributes[attribute] || 0;
    }

    return sumA < sumB;
  }

  return a.attributes[settings.rankby] < b.attributes[settings.rankby];
}

/**
 * Rounds, tie-breaking exact halves to the nearest even integer. Apparently used by GW2
 * conversions according to ingame testing by Cat.
 * https://discord.com/channels/301270513093967872/842629146857177098/864564894128275468
 *
 * @param {number} any number
 * @returns {number} the input number rounded to the nearest integer
 */
const roundEven = (number) => {
  if (number % 1 === 0.5) {
    const floor = Math.floor(number);
    if (floor % 2 === 0) {
      return floor;
    }

    return floor + 1;
  }

  return Math.round(number);
};

/**
 * Creates an {attributes} object parameter in the given character object and fills it with
 * calculated stats and damage/healing/survivability scores.
 *
 * @param {Object} _character
 */
export function updateAttributes(_character) {
  const multipliers = _character.settings.modifiers['multiplier'];
  _character.valid = true;

  calcStats(_character);

  const powerDamageScore = calcPower(_character, multipliers);
  const condiDamageScore = calcCondi(_character, multipliers, Attributes.CONDITION);
  _character.attributes['Damage'] = powerDamageScore + condiDamageScore;

  calcSurvivability(_character, multipliers);
  calcHealing(_character, multipliers);
}

/**
 * Creates an {attributes} object parameter in the given character object and does the minimum
 * calculation to find the optimal build, including cancelling itself early if the character's
 * boon duration/toughness/healing power are not valid according to the optimizer settings.
 *
 * @param {Object} _character
 * @param {boolean} [skipValidation] - skips the validation check if true
 */
function updateAttributesFast(_character, skipValidation = false) {
  const { settings } = _character;
  const multipliers = settings.modifiers['multiplier'];
  _character.valid = true;

  calcStats(_character);
  const { attributes } = _character;

  if (!skipValidation && checkInvalid(_character)) {
    return false;
  }

  /* eslint-disable no-case-declarations */
  switch (settings.rankby) {
    case 'Damage':
      const powerDamageScore = calcPower(_character, multipliers);

      // cache condi result based on cdmg and expertise
      let condiDamageScore = 0;
      if (settings.relevantConditions.length > 0) {
        const CONDI_CACHE_ID = attributes['Expertise'] + attributes['Condition Damage'] * 10000;
        condiDamageScore =
          condiResultCache.get(CONDI_CACHE_ID) ||
          calcCondi(_character, multipliers, settings.relevantConditions);
        condiResultCache.set(CONDI_CACHE_ID, condiDamageScore);
      }

      attributes['Damage'] = powerDamageScore + condiDamageScore;
      break;
    case 'Survivability':
      calcSurvivability(_character, multipliers);
      break;
    case 'Healing':
      calcHealing(_character, multipliers);
      break;
    // no default
  }
  /* eslint-enable no-case-declarations */

  return true;
}

function calcStats(_character) {
  _character.attributes = Object.assign({}, _character.baseAttributes);
  const { attributes, settings, baseAttributes } = _character;

  for (const [attribute, conversion] of settings.modifiers['convert']) {
    for (const [source, percent] of conversion) {
      attributes[attribute] += roundEven(baseAttributes[source] * percent);
    }
  }

  for (const [attribute, bonus] of settings.modifiers['buff']) {
    attributes[attribute] = (attributes[attribute] || 0) + bonus;
  }

  attributes['Boon Duration'] += attributes['Concentration'] / 15;
}

function checkInvalid(_character) {
  const { settings, attributes } = _character;

  const invalid =
    (settings.minBoonDuration && attributes['Boon Duration'] < settings.minBoonDuration) ||
    (settings.minHealingPower && attributes['Healing Power'] < settings.minHealingPower) ||
    (settings.minToughness && attributes['Toughness'] < settings.minToughness) ||
    (settings.maxToughness && attributes['Toughness'] > settings.maxToughness);
  if (invalid) {
    _character.valid = false;
  }

  return invalid;
}

function calcPower(_character, multipliers) {
  const { attributes, settings } = _character;

  attributes['Critical Chance'] += (attributes['Precision'] - 1000) / 21;
  attributes['Critical Damage'] += attributes['Ferocity'] / 15;

  const critDmg = (attributes['Critical Damage'] / 100) * multipliers['Critical Damage'];
  const critChance = Math.min(attributes['Critical Chance'] / 100, 1);

  attributes['Effective Power'] =
    attributes['Power'] * (1 + critChance * (critDmg - 1)) * multipliers['Effective Power'];

  const damage = settings.distribution['Power'] * attributes['Effective Power'];
  attributes['Power DPS'] = damage;

  return damage;
}

function calcCondi(_character, multipliers, relevantConditions) {
  const { attributes, settings } = _character;

  attributes['Condition Duration'] += attributes['Expertise'] / 15;
  let condiDamageScore = 0;
  for (const condition of relevantConditions) {
    attributes[`${condition} Damage`] =
      (Condition[condition].factor * attributes['Condition Damage'] +
        Condition[condition].baseDamage) *
      multipliers['Effective Condition Damage'] *
      (multipliers[`${condition} Damage`] || 1);

    const duration =
      1 +
      Math.min(
        ((attributes[`${condition} Duration`] || 0) + attributes['Condition Duration']) / 100,
        1,
      );

    const stacks = settings.distribution[condition] * duration;
    attributes[`${condition} Stacks`] = stacks;

    const damage = stacks * (attributes[`${condition} Damage`] || 1);
    attributes[`${condition} DPS`] = damage;

    condiDamageScore += damage;
  }

  return condiDamageScore;
}

function calcSurvivability(_character, multipliers) {
  const { attributes } = _character;

  attributes['Armor'] += attributes['Toughness'];
  attributes['Health'] += attributes['Vitality'] * 10;

  attributes['Effective Health'] =
    attributes['Health'] * attributes['Armor'] * multipliers['Effective Health'];
  attributes['Survivability'] = attributes['Effective Health'] / 1967;
}

function calcHealing(_character, multipliers) {
  const { attributes, settings } = _character;

  // reasonably representative skill: druid celestial avatar 4 pulse
  // 390 base, 0.3 coefficient
  attributes['Effective Healing'] =
    (attributes['Healing Power'] * 0.3 + 390) * multipliers['Effective Healing'];
  if (Object.prototype.hasOwnProperty.call(settings.modifiers, 'bountiful-maintenance-oil')) {
    const bonus =
      ((attributes['Healing Power'] || 0) * 0.6) / 10000 +
      ((attributes['Concentration'] || 0) * 0.8) / 10000;
    if (bonus) {
      attributes['Effective Healing'] *= 1 + bonus;
    }
  }

  attributes['Healing'] = attributes['Effective Healing'];
}

/**
 * Clones a character. baseAttributes is cloned by value, so it can be mutated. Please
 * don't directly mutate character.attributes; it's passed by reference so the clone shares
 * the old one until updateAttributes is called on it.
 *
 * @param {Object} character
 * @returns {Object} character
 */
export function clone(character) {
  return {
    settings: character.settings, // passed by reference
    attributes: character.attributes, // passed by reference
    gear: character.gear, // passed by reference
    gearStats: character.gearStats, // passed by reference
    valid: character.valid,

    baseAttributes: Object.assign({}, character.baseAttributes),
    infusions: Object.assign({}, character.infusions),
  };
}
