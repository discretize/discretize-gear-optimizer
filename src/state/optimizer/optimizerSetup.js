/* eslint-disable import/prefer-default-export */
/* eslint-disable no-case-declarations */
/* eslint-disable dot-notation */

import {
  allAttributeCoefficientKeys,
  allAttributePercentKeys,
  allAttributePointKeys,
  allConversionAfterBuffsSourceKeys,
} from '../../assets/modifierdata/metadata';
import {
  Affix as unmodifiedAffix,
  Attributes,
  Classes,
  conditionData,
  ForcedSlots,
  Slots,
} from '../../utils/gw2-data';
import { parseAmount } from '../../utils/usefulFunctions';
import { clamp } from './optimizerCore';

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
 * Sets up optimizer with input data
 *
 * @param {object} input
 * @param {object[]} input.appliedModifiers - array of modifier objects
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
 * @param {number} input.minHealth
 * @param {number} input.minCritChance
 * @param {number} input.maxResults
 * @param {?string} input.primaryInfusion
 * @param {?string} input.secondaryInfusion
 * @param {?number} input.primaryMaxInfusions - number of infusions, 0-18
 * @param {?number} input.secondaryMaxInfusions - number of infusions, 0-18
 * @param {?number} input.distributionVersion - version 1: old style (percentDistribution)
 *                                              verison 2: new style (coeff / sec)
 * @param {?object.<string, number>} input.percentDistribution - old style distribution
 *                                   (sums to 100)
 * @param {?object.<string, number>} input.distribution - new style distribution
 *                                   (coefficient * weaponstrength per second; average condition stacks)
 * @param {?number} input.attackRate - boss attack rate (for confusion)
 * @param {?number} input.movementUptime - boss movement uptime (for torment)
 */
export function inputToSettings(input) {
  /* eslint-disable prefer-const */
  let {
    primaryInfusion: primaryInfusionInput,
    secondaryInfusion: secondaryInfusionInput,
    primaryMaxInfusions: primaryMaxInfusionsInput,
    secondaryMaxInfusions: secondaryMaxInfusionsInput,
    infusionNoDuplicates,
    customAffixData,
    ...others
  } = input;
  /* eslint-enable prefer-const */

  const settings = { ...others };
  console.debug('settings:', settings);

  /* Distribution */

  // legacy percent distribution conversion
  // see: https://github.com/discretize/discretize-old/discussions/136
  if (input.percentDistribution && input.distributionVersion !== 2) {
    const { Power, ...rest } = input.percentDistribution;
    settings.distribution = {};
    settings.distribution['Power'] = (Power * 2597) / 1025;
    for (const [condition, value] of Object.entries(rest)) {
      settings.distribution[condition] = value / conditionData[condition].baseDamage;
    }
  }

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

  for (const [key, value] of Object.entries(settings.distribution)) {
    settings.baseAttributes[`${key} Coefficient`] = value;
  }

  settings.baseAttributes[`Flat DPS`] = 0;

  /* Modifiers */

  settings.modifiers = {
    damageMultiplier: {},
    buff: [],
    convert: [],
    convertAfterBuffs: [],
  };
  const initialMultipliers = {
    'Strike Damage': 1,
    'Condition Damage': 1,
    'Siphon Damage': 1,
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

  // Special handler for conversions that convert to condi coefficients; ensures that
  // relevantConditions includes them even if their coefficient sliders are 0
  //
  const extraRelevantConditions = Object.fromEntries(
    Object.keys(conditionData).map((condition) => [condition, false]),
  );
  const makeConditionsRelevant = (attribute) => {
    const condition = attribute.replace(' Coefficient', '');
    if (extraRelevantConditions[condition] !== undefined) {
      extraRelevantConditions[condition] = true;
    }
  };

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
        conversionAfterBuffs = {},
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
            dmgBuff('Siphon Damage', scaledAmount, addOrMult);
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
      } else if (allAttributeCoefficientKeys.includes(attribute)) {
        // coefficient, i.e.
        //   Power Coefficient: 69.05

        const value = Array.isArray(allPairs) ? allPairs[0] : allPairs;
        const scaledAmount = scaleValue(value, amountInput, amountData);
        settings.baseAttributes[attribute] =
          (settings.baseAttributes[attribute] || 0) + scaledAmount;
      } else if (allAttributePercentKeys.includes(attribute)) {
        // percent, i.e.
        //   Torment Duration: 15%

        const value = Array.isArray(allPairs) ? allPairs[0] : allPairs;
        const scaledAmount = scaleValue(parsePercent(value), amountInput, amountData);
        // unconfirmed if +max health mods are mult but ¯\_(ツ)_/¯
        // +outgoing healing is assumed additive
        if (attribute === 'Maximum Health') {
          settings.baseAttributes[attribute] =
            ((settings.baseAttributes[attribute] || 0) + 1) * (1 + scaledAmount) - 1;
        } else {
          settings.baseAttributes[attribute] =
            (settings.baseAttributes[attribute] || 0) + scaledAmount;
        }
      } else {
        // eslint-disable-next-line no-alert
        alert(`invalid attribute ${attribute}`);
      }
    }

    for (const [attribute, val] of Object.entries(conversion)) {
      // conversion, i.e.
      //   Power: {Condition Damage: 6%, Expertise: 8%}

      makeConditionsRelevant(attribute);

      if (!settings.modifiers['convert'][attribute]) {
        settings.modifiers['convert'][attribute] = {};
      }
      for (const [source, percentAmount] of Object.entries(val)) {
        const scaledAmount = scaleValue(parsePercent(percentAmount), amountInput, amountData);

        settings.modifiers['convert'][attribute][source] =
          (settings.modifiers['convert'][attribute][source] || 0) + scaledAmount;
      }
    }

    for (const [attribute, val] of Object.entries(conversionAfterBuffs)) {
      // conversion after buffs, i.e.
      //   Power: {Condition Damage: 6%, Expertise: 8%}

      makeConditionsRelevant(attribute);

      if (!settings.modifiers['convertAfterBuffs'][attribute]) {
        settings.modifiers['convertAfterBuffs'][attribute] = {};
      }
      for (const [source, percentAmount] of Object.entries(val)) {
        const valid = allConversionAfterBuffsSourceKeys.includes(source);
        // eslint-disable-next-line no-alert
        if (!valid) alert(`Unsupported after-buff conversion source: ${source}`);

        const scaledAmount = scaleValue(parsePercent(percentAmount), amountInput, amountData);

        settings.modifiers['convertAfterBuffs'][attribute][source] =
          (settings.modifiers['convertAfterBuffs'][attribute][source] || 0) + scaledAmount;
      }
    }
  }

  Object.keys(initialMultipliers).forEach((attribute) => {
    settings.modifiers.damageMultiplier[attribute] =
      allDmgMult.mult[attribute] * allDmgMult.add[attribute] * allDmgMult.target[attribute];
  });

  // convert modifiers to arrays for simpler iteration
  settings.modifiers['buff'] = Object.entries(settings.modifiers['buff'] || {});
  settings.modifiers['convert'] = Object.entries(settings.modifiers['convert'] || {}).map(
    ([attribute, conversion]) => [attribute, Object.entries(conversion)],
  );
  settings.modifiers['convertAfterBuffs'] = Object.entries(
    settings.modifiers['convertAfterBuffs'] || {},
  ).map(([attribute, conversion]) => [attribute, Object.entries(conversion)]);

  /* Relevant Conditions + Condi Caching Toggle */

  settings.relevantConditions = Object.keys(conditionData).filter(
    (condition) =>
      settings.baseAttributes[`${condition} Coefficient`] > 0 || extraRelevantConditions[condition],
  );

  // if any condition coefficnents are the result of a conversion, the same cdmg + expertise does
  // not mean the same condition dps; disable caching if so
  settings.disableCondiResultCache = Object.values(extraRelevantConditions).some(Boolean);

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
        `Primary infusion can only increase primary, secondary or derived attributes, not ${primaryInfusionInput}`,
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
        `Secondary infusion can only increase primary, secondary or derived attributes, not ${secondaryInfusionInput}`,
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

  settings.infusionMode = infusionMode;

  /* Equipment */

  const Affix = { ...unmodifiedAffix, Custom: { ...unmodifiedAffix.Custom, ...customAffixData } };

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

  const {
    cachedFormState,
    profession,
    specialization,
    weaponType,
    appliedModifiers,
    rankby,
    shouldDisplayExtras,
    extrasCombination,
    // ...rest
  } = settings;
  // console.log(Object.keys(rest));

  // only supply character with settings it uses to render
  const minimalSettings = {
    cachedFormState,
    profession,
    specialization,
    weaponType,
    appliedModifiers,
    rankby,
    shouldDisplayExtras,
    extrasCombination,
  };

  return [settings, minimalSettings];
}
