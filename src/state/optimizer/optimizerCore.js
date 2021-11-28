/* eslint-disable no-case-declarations */
/* eslint-disable no-use-before-define */
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
  INFUSION_BONUS,
} from '../../utils/gw2-data';

import { allAttributePointKeys } from '../../assets/modifierdata/metadata';

import { parseAmount } from '../../utils/usefulFunctions';

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
 * @param {object} input
 * @param {object[]} input.appliedModifiers - array of modifier objects
 * @param {?string[]} input.tags - modifier data for the UI
 *                      (passed unedited into character.settings)
 * @param {string} input.profession
 * @param {string} input.weaponType
 * @param {string[]} input.affixes - all selected gear affixes to iterate over
 * @param {string[]} input.forcedAffixes - array of specific affix names for each slot,
 *                     or '' for unspecfied
 * @param {string} input.rankby - "Damage"/"Survivability"/"Healing"
 * @param {number} input.minBoonDuration
 * @param {number} input.minHealingPower
 * @param {number} input.minToughness
 * @param {number} input.maxToughness
 * @param {number} input.maxResults
 * @param {?string} input.primaryInfusion
 * @param {?string} input.secondaryInfusion
 * @param {?number} input.primaryMaxInfusions - number of infusions, 0-18
 * @param {?number} input.secondaryMaxInfusions - number of infusions, 0-18
 * @param {?number} input.distributionVersion - version 1: old style (percentDistribution) - verison 2: new style (coeff / sec)
 * @param {?object.<string, number>} input.percentDistribution - old style distribution
 *                                   (sums to 100)
 * @param {?object.<string, number>} input.distribution - new style distribution
 *                                   (coefficient * weaponstrength per second; average condition stacks)
 * @returns {object} settings - parsed settings object
 */
export function setup(input) {
  worstScore = undefined;
  list = [];

  /* eslint-disable prefer-const */
  let {
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
  settings.baseAttributes['Critical Chance'] = 0.05;
  settings.baseAttributes['Critical Damage'] = 1.5;

  /* Modifiers */

  settings.modifiers = {
    damageMultiplier: {},
    buff: [],
    convert: [],
  };
  const initialMultipliers = {
    'Strike Damage': 1,
    'Condition Damage': 1,
    'Damage Taken': 1,
    'Critical Damage': 1,
    'Bleeding Damage': 1,
    'Burning Damage': 1,
    'Confusion Damage': 1,
    'Poison Damage': 1,
    'Torment Damage': 1,
  };
  const allDmgMult = {
    mult: { ...initialMultipliers },
    add: { ...initialMultipliers },
    target: { ...initialMultipliers },
  };
  const dmgBuff = (attribute, amount, addOrMult) => {
    switch (addOrMult) {
      case 'add':
        allDmgMult.add[attribute] += amount;
        break;
      case 'target':
        allDmgMult.target[attribute] += amount;
        break;
      case 'mult':
      default:
        allDmgMult.mult[attribute] *= 1 + amount;
        break;
    }
  };

  const parsePercent = (percentValue) => Number(percentValue.replace('%', '')) / 100;

  for (const item of settings.appliedModifiers) {
    const {
      id = '[no id]',
      visible = true,
      enabled = true,
      amount: amountText,
      // data: {
      modifiers: {
        damage = {},
        attributes = {},
        conversion = {},
        // effect = {},
        // note,
        // ...otherModifiers
      },
      amountData,
      // },
    } = item;

    if (!visible || !enabled) {
      continue;
    }

    const { value: amountInput } = parseAmount(amountText);

    for (const [attribute, allPairs] of Object.entries(damage)) {
      // damage, i.e.
      //   Strike Damage: [3%, add, 7%, mult]

      const allPairsMut = [...allPairs];
      while (allPairsMut.length) {
        const [percentAmount, addOrMult] = allPairsMut.splice(0, 2);

        const scaledAmount = scaleValue(parsePercent(percentAmount), amountInput, amountData);

        switch (attribute) {
          case 'Strike Damage':
          case 'Condition Damage':
          case 'Bleeding Damage':
          case 'Burning Damage':
          case 'Confusion Damage':
          case 'Poison Damage':
          case 'Torment Damage':
            dmgBuff(attribute, scaledAmount, addOrMult);
            break;
          case 'All Damage':
            dmgBuff('Strike Damage', scaledAmount, addOrMult);
            dmgBuff('Condition Damage', scaledAmount, addOrMult);
            break;
          case 'Damage Reduction':
            const negativeAmount = -scaledAmount;
            dmgBuff('Damage Taken', negativeAmount, addOrMult);
            break;
          case 'Critical Damage':
            // assuming multiplicative until someone tests  twin fangs + ferocious strikes
            dmgBuff('Critical Damage', scaledAmount, 'mult');
            break;
          case 'Condition Damage Reduction':
            console.log('Condition Damage Reduction is currently unsupported');
            break;
          default:
            throw new Error(`invalid damage modifier: ${attribute} in ${id}`);
        }
      }
    }

    for (const [attribute, allPairs] of Object.entries(attributes)) {
      if (allAttributePointKeys.includes(attribute)) {
        // stat, i.e.
        //   Concentration: [70, converted, 100, buff]

        const allPairsMut = [...allPairs];
        while (allPairsMut.length) {
          const [amount, convertedOrBuff] = allPairsMut.splice(0, 2);
          const scaledAmount = scaleValue(amount, amountInput, amountData);

          switch (convertedOrBuff) {
            case 'converted':
              settings.baseAttributes[attribute] =
                (settings.baseAttributes[attribute] || 0) + scaledAmount;
              break;
            case 'buff':
            case 'unknown':
            default:
              settings.modifiers['buff'][attribute] =
                (settings.modifiers['buff'][attribute] || 0) + scaledAmount;
              break;
          }
        }
      } else {
        // percent, i.e.
        //   Torment Duration: 15%

        const scaledAmount = scaleValue(parsePercent(allPairs), amountInput, amountData);
        // unconfirmed if +max health mods are mult but ¯\_(ツ)_/¯
        // +outgoing healing is assumed additive
        if (attribute === 'Maximum Health') {
          settings.baseAttributes[attribute] =
            ((settings.baseAttributes[attribute] || 0) + 1) * (1 + scaledAmount) - 1;
        } else {
          settings.baseAttributes[attribute] =
            (settings.baseAttributes[attribute] || 0) + scaledAmount;
        }
      }
    }

    for (const [attribute, val] of Object.entries(conversion)) {
      // conversion, i.e.
      //   Power: {Condition Damage: 6%, Expertise: 8%}

      if (!settings.modifiers['convert'][attribute]) {
        settings.modifiers['convert'][attribute] = {};
      }
      for (const [source, percentAmount] of Object.entries(val)) {
        const scaledAmount = scaleValue(parsePercent(percentAmount), amountInput, amountData);

        settings.modifiers['convert'][attribute][source] =
          (settings.modifiers['convert'][attribute][source] || 0) + scaledAmount;
      }
    }
  }

  Object.keys(initialMultipliers).forEach((attribute) => {
    settings.modifiers.damageMultiplier[attribute] =
      allDmgMult.mult[attribute] * allDmgMult.add[attribute] * allDmgMult.target[attribute];
  });

  // convert to arrays for simpler iteration
  settings.modifiers['buff'] = Object.entries(settings.modifiers['buff'] || {});
  settings.modifiers['convert'] = Object.entries(settings.modifiers['convert'] || {}).map(
    ([attribute, conversion]) => [attribute, Object.entries(conversion)],
  );

  /* Distribution */

  // legacy percent distribution conversion
  // see: https://github.com/discretize/discretize-old/discussions/136
  if (input.percentDistribution && input.distributionVersion !== 2) {
    const { Power, ...rest } = input.percentDistribution;
    settings.distribution = {};
    settings.distribution['Power'] = (Power * 2597) / 1025;
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

  settings.maxInfusions = clamp(settings.maxInfusions, 0, 18);
  primaryMaxInfusionsInput = clamp(primaryMaxInfusionsInput, 0, settings.maxInfusions);
  secondaryMaxInfusionsInput = clamp(secondaryMaxInfusionsInput, 0, settings.maxInfusions);

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
      if (settings.primaryMaxInfusions + settings.secondaryMaxInfusions <= settings.maxInfusions) {
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

  settings.slots = Slots[settings.weaponType];

  // affixesArray: valid affixes for each slot, taking forced slots into account
  // e.g. [[Berserker, Assassin], [Assassin], [Berserker, Assassin]...]
  settings.affixesArray = new Array(settings.slots.length).fill(settings.affixes);

  settings.forcedArmor = false;
  settings.forcedRing = false;
  settings.forcedAcc = false;
  settings.forcedWep = false;

  settings.forcedAffixes.forEach((affix, index) => {
    if (!affix) {
      return;
    }
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
  });

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

  // const freeSlots = settings.weaponType === 'Dual wield' ? 5 : 6;
  // const pairs = settings.weaponType === 'Dual wield' ? 3 : 2;
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
 * Scales a modifier value linearly up or down by a user-specified amount, in accordance with the
 * amountData from the modifier data YAML.
 *
 * If amountInput is null (the user did not type into the amount box), the amountData.default value
 * is used (this should be the placeholder in the text box).
 *
 * If there is no amountData, the value is retutned unmodified.
 *
 * @example
 * // returns 10
 * scaleValue(10, 100, { quantityEntered: 100, ... })        // amountInput equals quantityEntered
 *
 * @example
 * // returns 8
 * scaleValue(10, 80, { quantityEntered: 100, ... })         // amountInput < quantityEntered
 *
 * @example
 * // returns 20
 * scaleValue(10, 2, { quantityEntered: 1, ... })            // amountInput > quantityEntered
 *
 * @example
 * // returns 50
 * scaleValue(10, null, { quantityEntered: 1, default: 5 })  // no amountInput
 *
 * @example
 * // returns 10
 * scaleValue(10, null, undefined)                           // does nothing
 *
 * @param {number} value - modifier value to scale
 * @param {?number} amountInput - user-input amount (e.g. number of stacks selected)
 * @param {?object} amountData
 * @param {number} amountData.quantityEntered -
 * @param {number} amountData.default
 * @returns {number} result
 */
export function scaleValue(value, amountInput, amountData) {
  return amountData
    ? (value * (amountInput ?? amountData.default)) / amountData.quantityEntered
    : value;
}

/**
 * A generator function that iterates synchronously through all possible builds, updating the list
 * object with the best results. Yields periodically to allow UI to be updated or cancelled.
 *
 * Remember, a generator's next() function returns a plain object { value, done }.
 *
 * @param {*} settings
 * @yields {{done: boolean, value: {isChanged: boolean, percent: number}}} result
 * yields {boolean} result.done - true if the calculation is finished
 * yields {number} result.value.isChanged - true if list has been mutated
 * yields {number} result.value.percent - the progress percentage
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

  yield {
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
    addBaseStats(temp, settings.primaryInfusion, settings.maxInfusions * INFUSION_BONUS);
    addBaseStats(temp, settings.secondaryInfusion, settings.maxInfusions * INFUSION_BONUS);
    updateAttributesFast(temp, true);
    return temp.attributes[settings.rankby] > worstScore;
  };

  if (!worstScore || testInfusionUsefulness()) {
    let previousResult;

    let primaryCount = settings.primaryMaxInfusions;
    let secondaryCount = settings.maxInfusions - primaryCount;
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
    addBaseStats(temp, settings.primaryInfusion, settings.maxInfusions * INFUSION_BONUS);
    addBaseStats(temp, settings.secondaryInfusion, settings.maxInfusions * INFUSION_BONUS);
    updateAttributesFast(temp, true);
    return temp.attributes[settings.rankby] > worstScore;
  };

  if (!worstScore || testInfusionUsefulness()) {
    let best = null;

    let primaryCount = settings.primaryMaxInfusions;
    let secondaryCount = settings.maxInfusions - primaryCount;
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

  character.results = { value: character.attributes[settings.rankby] };

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
// eslint-disable-next-line id-length
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
 * @param {number} number
 * @returns {number} result - the input number rounded to the nearest integer
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

const clamp = (input, min, max) => {
  if (input < min) return min;
  if (input > max) return max;
  return input;
};

/**
 * Creates an {attributes} object parameter in the given character object and fills it with
 * calculated stats and damage/healing/survivability scores.
 *
 * @param {object} character
 * @param {*} results - calculates results data only if true (must be false inside calcResults,
 *  otherwise this is an infinite loop)
 */
export function updateAttributes(character, results = true) {
  const { damageMultiplier } = character.settings.modifiers;
  character.valid = true;

  calcStats(character);

  const powerDamageScore = calcPower(character, damageMultiplier);
  const condiDamageScore = calcCondi(character, damageMultiplier, Attributes.CONDITION);
  character.attributes['Damage'] = powerDamageScore + condiDamageScore;

  calcSurvivability(character, damageMultiplier);
  calcHealing(character);

  if (results) calcResults(character);
}

/**
 * Creates an {attributes} object parameter in the given character object and does the minimum
 * calculation to find the optimal build, including cancelling itself early if the character's
 * boon duration/toughness/healing power are not valid according to the optimizer settings.
 *
 * @param {object} character
 * @param {boolean} [skipValidation] - skips the validation check if true
 */
function updateAttributesFast(character, skipValidation = false) {
  const { settings } = character;
  const { damageMultiplier } = settings.modifiers;
  character.valid = true;

  calcStats(character);
  const { attributes } = character;

  if (!skipValidation && checkInvalid(character)) {
    return false;
  }

  switch (settings.rankby) {
    case 'Damage':
      const powerDamageScore = calcPower(character, damageMultiplier);

      // cache condi result based on cdmg and expertise
      let condiDamageScore = 0;
      if (settings.relevantConditions.length > 0) {
        const CONDI_CACHE_ID = attributes['Expertise'] + attributes['Condition Damage'] * 10000;
        condiDamageScore =
          condiResultCache?.get(CONDI_CACHE_ID) ||
          calcCondi(character, damageMultiplier, settings.relevantConditions);
        condiResultCache?.set(CONDI_CACHE_ID, condiDamageScore);
      }

      attributes['Damage'] = powerDamageScore + condiDamageScore;
      break;
    case 'Survivability':
      calcSurvivability(character, damageMultiplier);
      break;
    case 'Healing':
      calcHealing(character);
      break;
    // no default
  }

  return true;
}

function calcStats(character) {
  character.attributes = Object.assign({}, character.baseAttributes);
  const { attributes, settings, baseAttributes } = character;

  for (const [attribute, conversion] of settings.modifiers['convert']) {
    if (attribute === 'Outgoing Healing') {
      for (const [source, percent] of conversion) {
        attributes[attribute] += baseAttributes[source] * percent;
      }
    } else {
      for (const [source, percent] of conversion) {
        attributes[attribute] += roundEven(baseAttributes[source] * percent);
      }
    }
  }

  for (const [attribute, bonus] of settings.modifiers['buff']) {
    attributes[attribute] = (attributes[attribute] || 0) + bonus;
  }

  attributes['Boon Duration'] += attributes['Concentration'] / 15 / 100;
}

function checkInvalid(character) {
  const { settings, attributes } = character;

  const invalid =
    (settings.minBoonDuration !== null &&
      attributes['Boon Duration'] < settings.minBoonDuration / 100) ||
    (settings.minHealingPower !== null && attributes['Healing Power'] < settings.minHealingPower) ||
    (settings.minToughness !== null && attributes['Toughness'] < settings.minToughness) ||
    (settings.maxToughness !== null && attributes['Toughness'] > settings.maxToughness);
  if (invalid) {
    character.valid = false;
  }

  return invalid;
}

function calcPower(character, damageMultiplier) {
  const { attributes, settings } = character;

  attributes['Critical Chance'] += (attributes['Precision'] - 1000) / 21 / 100;
  attributes['Critical Damage'] += attributes['Ferocity'] / 15 / 100;

  const critDmg = attributes['Critical Damage'] * damageMultiplier['Critical Damage'];
  const critChance = clamp(attributes['Critical Chance'], 0, 1);

  attributes['Effective Power'] =
    attributes['Power'] * (1 + critChance * (critDmg - 1)) * damageMultiplier['Strike Damage'];

  // 2597: standard enemy armor value, also used for ingame damage tooltips
  const damage = (settings.distribution['Power'] / 2597) * attributes['Effective Power'];
  attributes['Power DPS'] = damage;

  return damage;
}

function calcCondi(character, damageMultiplier, relevantConditions) {
  const { attributes, settings } = character;

  attributes['Condition Duration'] += attributes['Expertise'] / 15 / 100;
  let condiDamageScore = 0;
  for (const condition of relevantConditions) {
    attributes[`${condition} Damage`] =
      (Condition[condition].factor * attributes['Condition Damage'] +
        Condition[condition].baseDamage) *
      damageMultiplier['Condition Damage'] *
      damageMultiplier[`${condition} Damage`];

    const duration =
      1 +
      clamp((attributes[`${condition} Duration`] || 0) + attributes['Condition Duration'], 0, 1);

    const stacks = settings.distribution[condition] * duration;
    attributes[`${condition} Stacks`] = stacks;

    const DPS = stacks * (attributes[`${condition} Damage`] || 1);
    attributes[`${condition} DPS`] = DPS;

    condiDamageScore += DPS;
  }

  return condiDamageScore;
}

function calcSurvivability(character, damageMultiplier) {
  const { attributes } = character;

  attributes['Armor'] += attributes['Toughness'];

  attributes['Health'] = roundEven(
    (attributes['Health'] + attributes['Vitality'] * 10) *
      (1 + (attributes['Maximum Health'] || 0)),
  );

  attributes['Effective Health'] =
    attributes['Health'] * attributes['Armor'] * (1 / damageMultiplier['Damage Taken']);

  attributes['Survivability'] = attributes['Effective Health'] / 1967;
}

function calcHealing(character) {
  const { attributes, settings } = character;

  // reasonably representative skill: druid celestial avatar 4 pulse
  // 390 base, 0.3 coefficient
  attributes['Effective Healing'] =
    (attributes['Healing Power'] * 0.3 + 390) * (1 + (attributes['Outgoing Healing'] || 0));
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

function calcResults(character) {
  character.results = {};

  const { attributes, settings, results } = character;

  results.value = character.attributes[settings.rankby];

  results.indicators = {};
  for (const attribute of Attributes.INDICATORS) {
    results.indicators[attribute] = Number(attributes[attribute].toFixed(4)).toLocaleString(
      'en-US',
    );
  }

  // effective gain from adding +5 infusions
  results.effectivePositiveValues = {};
  for (const attribute of ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise']) {
    const temp = clone(character);
    temp.baseAttributes[attribute] += 5;
    updateAttributesFast(temp, true);
    results.effectivePositiveValues[attribute] = Number(
      (temp.attributes['Damage'] - attributes['Damage']).toFixed(5),
    ).toLocaleString('en-US');
  }

  // effective loss by not having +5 infusions
  results.effectiveNegativeValues = {};
  for (const attribute of ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise']) {
    const temp = clone(character);
    temp.baseAttributes[attribute] = Math.max(temp.baseAttributes[attribute] - 5, 0);
    updateAttributesFast(temp, true);
    results.effectiveNegativeValues[attribute] = Number(
      (temp.attributes['Damage'] - attributes['Damage']).toFixed(5),
    ).toLocaleString('en-US');
  }

  // effective damage distribution
  results.effectiveDamageDistribution = {};
  for (const key of Object.keys(settings.distribution)) {
    if (key === 'Power') {
      const damage = attributes['Power DPS'] / attributes['Damage'];
      results.effectiveDamageDistribution['Power'] = `${(damage * 100).toFixed(1)}%`;
    } else {
      const damage = attributes[`${key} DPS`] / attributes['Damage'];
      results.effectiveDamageDistribution[`${key} Damage`] = `${(damage * 100).toFixed(1)}%`;
    }
  }

  // damage indicator breakdown
  results.damageBreakdown = {};
  for (const key of Object.keys(settings.distribution)) {
    if (key === 'Power') {
      results.damageBreakdown['Power'] = attributes['Power DPS'].toFixed(2).toLocaleString('en-US');
    } else {
      results.damageBreakdown[`${key} Damage`] = attributes[`${key} DPS`]
        .toFixed(2)
        .toLocaleString('en-US');
    }
  }

  // template helper data (damage with distribution of one)
  results.coefficientHelper = {};
  const temp = clone(character);
  temp.settings = {
    ...temp.settings,
    distributionVersion: 2,
    distribution: {
      Power: 1,
      Burning: 1,
      Bleeding: 1,
      Poison: 1,
      Torment: 1,
      Confusion: 1,
    },
  };
  updateAttributes(temp, false);
  for (const key of Object.keys(settings.distribution)) {
    if (key === 'Power') {
      results.coefficientHelper['Power'] = temp.attributes['Power DPS'];
    } else {
      results.coefficientHelper[key] = temp.attributes[`${key} DPS`];
    }
  }
}

/**
 * Clones a character. baseAttributes is cloned by value, so it can be mutated. Please
 * don't directly mutate character.attributes; it's passed by reference so the clone shares
 * the old one until updateAttributes is called on it.
 *
 * @param {object} character
 * @returns {object} character
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
