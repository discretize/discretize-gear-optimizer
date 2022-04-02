/* eslint-disable import/prefer-default-export */
/* eslint-disable no-case-declarations */
/* eslint-disable dot-notation */

import {
  allAttributeCoefficientKeys,
  allAttributePercentKeys,
  allAttributePointKeys,
  allConversionAfterBuffsSourceKeys,
} from '../../assets/modifierdata/metadata';
import type {
  AffixName,
  ConditionName,
  ProfessionName,
  WeaponHandednessType,
} from '../../utils/gw2-data';
import {
  Affix as unmodifiedAffix,
  Attributes,
  Classes,
  conditionData,
  ForcedSlots,
  Slots,
} from '../../utils/gw2-data';
import {
  mapEntries,
  mapValues,
  parseAmount,
  parseBoss,
  parseInfusionCount,
  parsePriority,
} from '../../utils/usefulFunctions';
import { getBuffsModifiers } from '../slices/buffs';
import { getExtraModifiersModifiers } from '../slices/extraModifiers';
import { getExtrasCombinationsAndModifiers, getExtrasIds } from '../slices/extras';
import { getInfusionsModifiers } from '../slices/infusions';
import { getCustomAffixData } from '../slices/priorities';
import { getSkillsModifiers } from '../slices/skills';
import { getCurrentSpecialization, getTraitsModifiers } from '../slices/traits';
import type { OptimizerCoreMinimalSettings, OptimizerCoreSettings } from './optimizerCore';
import { clamp, scaleValue } from './optimizerCore';

type MultiplierName =
  | 'Strike Damage'
  | 'Condition Damage'
  | 'Siphon Damage'
  | 'Damage Taken'
  | 'Critical Damage'
  | 'Bleeding Damage'
  | 'Burning Damage'
  | 'Confusion Damage'
  | 'Poison Damage'
  | 'Torment Damage';

interface AppliedModifier {
  id: string;
  visible: boolean;
  enabled: boolean;
  amount: string;
  modifiers: {
    damage: Record<string, any>;
    attributes: Record<string, any>;
    conversion: Record<string, any>;
    conversionAfterBuffs: Record<string, any>;
    // note,
    // ...otherModifiers
  };
  amountData: any;
  // },
}

interface OptimizerInput {
  profession: ProfessionName;
  specialization: string;
  weaponType: WeaponHandednessType;
  affixes: AffixName[]; // all selected gear affixes to iterate over
  forcedAffixes: (AffixName | null)[]; // array of specific affix names for each slot, or '' for unspecfied
  rankby: 'Damage' | 'Survivability' | 'Healing';
  minBoonDuration: number | null;
  minHealingPower: number | null;
  minToughness: number | null;
  maxToughness: number | null;
  minHealth: number | null;
  minCritChance: number | null;
  maxResults: number;
  primaryInfusion?: string;
  secondaryInfusion?: string;
  maxInfusions: number; // number of infusions, 0-18
  primaryMaxInfusions: number; // number of infusions, 0-18
  secondaryMaxInfusions: number; // number of infusions, 0-18
  distributionVersion?: 1 | 2; // version 1: old style (percentDistribution), verison 2: new style (coeff / sec)
  percentDistribution?: Record<string, number>; // old style distribution (sums to 100)
  distribution?: Record<string, number>; // new style distribution (coefficient * weaponstrength per second; average condition stacks)
  attackRate: number; // boss attack rate (for confusion)
  movementUptime: number; // boss movement uptime (for torment)

  appliedModifiers: AppliedModifier[]; // array of modifier objects

  infusionNoDuplicates: any;
  customAffixData: any;
}
/**
 * Sets up optimizer with input data
 *
 * @param {object} input See typescript
 */
export function inputToSettings(
  input: OptimizerInput,
): [OptimizerCoreSettings, OptimizerCoreMinimalSettings] {
  /* eslint-disable camelcase */
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

  /* Distribution */

  // legacy percent distribution conversion
  // see: https://github.com/discretize/discretize-old/discussions/136
  let settings_distribution: OptimizerCoreSettings['distribution'];
  if (input.percentDistribution && input.distributionVersion !== 2) {
    const { Power, ...rest } = input.percentDistribution;
    settings_distribution = {};
    settings_distribution['Power'] = (Power * 2597) / 1025;
    for (const [condition, value] of Object.entries(rest)) {
      settings_distribution[condition] =
        value / conditionData[condition as ConditionName].baseDamage;
    }
  } else if (others.distribution) {
    settings_distribution = others.distribution;
  } else {
    throw new Error('Invalid internal state');
  }

  /* Base Attributes */

  const settings_baseAttributes: OptimizerCoreSettings['baseAttributes'] = {};
  settings_baseAttributes.Health = Classes[others.profession].health;
  settings_baseAttributes.Armor = Classes[others.profession].defense;

  for (const attribute of Attributes.PRIMARY) {
    settings_baseAttributes[attribute] = 1000;
  }

  for (const attribute of Attributes.SECONDARY) {
    settings_baseAttributes[attribute] = 0;
  }

  settings_baseAttributes['Condition Duration'] = 0;
  settings_baseAttributes['Boon Duration'] = 0;
  settings_baseAttributes['Critical Chance'] = 0.05;
  settings_baseAttributes['Critical Damage'] = 1.5;

  for (const [key, value] of Object.entries(settings_distribution)) {
    settings_baseAttributes[`${key} Coefficient`] = value;
  }

  settings_baseAttributes[`Flat DPS`] = 0;

  /* Modifiers */

  const settings_modifiers: OptimizerCoreSettings['modifiers'] = {
    damageMultiplier: {},
    buff: [],
    convert: [],
    convertAfterBuffs: [],
  };
  const initialMultipliers: Record<MultiplierName, number> = {
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
  const dmgBuff = (
    attribute: keyof typeof initialMultipliers,
    amount: number,
    addOrMult: 'add' | 'target' | 'mult',
  ) => {
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

  const parsePercent = (percentValue: string) => Number(percentValue.replace('%', '')) / 100;

  // Special handler for conversions that convert to condi coefficients; ensures that
  // relevantConditions includes them even if their coefficient sliders are 0
  //
  const extraRelevantConditions = Object.fromEntries(
    Object.keys(conditionData).map((condition) => [condition, false]),
  );
  const makeConditionsRelevant = (attribute: string) => {
    const condition = attribute.replace(' Coefficient', '');
    if (extraRelevantConditions[condition] !== undefined) {
      extraRelevantConditions[condition] = true;
    }
  };

  for (const item of others.appliedModifiers) {
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

      const allPairsMut = [...(allPairs as any[])];
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

        const allPairsMut = [...(allPairs as any[])];
        while (allPairsMut.length) {
          const [amount, convertedOrBuff] = allPairsMut.splice(0, 2);
          const scaledAmount = scaleValue(amount, amountInput, amountData);

          switch (convertedOrBuff) {
            case 'converted':
              settings_baseAttributes[attribute] =
                (settings_baseAttributes[attribute] || 0) + scaledAmount;
              break;
            case 'buff':
            case 'unknown':
            default:
              settings_modifiers['buff'][attribute] =
                (settings_modifiers['buff'][attribute] || 0) + scaledAmount;
              break;
          }
        }
      } else if (allAttributeCoefficientKeys.includes(attribute)) {
        // coefficient, i.e.
        //   Power Coefficient: 69.05

        const value = Array.isArray(allPairs) ? allPairs[0] : allPairs;
        const scaledAmount = scaleValue(value, amountInput, amountData);
        settings_baseAttributes[attribute] =
          (settings_baseAttributes[attribute] || 0) + scaledAmount;
      } else if (allAttributePercentKeys.includes(attribute)) {
        // percent, i.e.
        //   Torment Duration: 15%

        const value = Array.isArray(allPairs) ? allPairs[0] : allPairs;
        const scaledAmount = scaleValue(parsePercent(value), amountInput, amountData);
        // unconfirmed if +max health mods are mult but ¯\_(ツ)_/¯
        // +outgoing healing is assumed additive
        if (attribute === 'Maximum Health') {
          settings_baseAttributes[attribute] =
            ((settings_baseAttributes[attribute] || 0) + 1) * (1 + scaledAmount) - 1;
        } else {
          settings_baseAttributes[attribute] =
            (settings_baseAttributes[attribute] || 0) + scaledAmount;
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

      if (!settings_modifiers['convert'][attribute]) {
        settings_modifiers['convert'][attribute] = {};
      }
      for (const [source, percentAmount] of Object.entries(val)) {
        const scaledAmount = scaleValue(
          parsePercent(percentAmount as string),
          amountInput,
          amountData,
        );

        settings_modifiers['convert'][attribute][source] =
          (settings_modifiers['convert'][attribute][source] || 0) + scaledAmount;
      }
    }

    for (const [attribute, val] of Object.entries(conversionAfterBuffs)) {
      // conversion after buffs, i.e.
      //   Power: {Condition Damage: 6%, Expertise: 8%}

      makeConditionsRelevant(attribute);

      if (!settings_modifiers['convertAfterBuffs'][attribute]) {
        settings_modifiers['convertAfterBuffs'][attribute] = {};
      }
      for (const [source, percentAmount] of Object.entries(val)) {
        const valid = allConversionAfterBuffsSourceKeys.includes(source);
        // eslint-disable-next-line no-alert
        if (!valid) alert(`Unsupported after-buff conversion source: ${source}`);

        const scaledAmount = scaleValue(
          parsePercent(percentAmount as string),
          amountInput,
          amountData,
        );

        settings_modifiers['convertAfterBuffs'][attribute][source] =
          (settings_modifiers['convertAfterBuffs'][attribute][source] || 0) + scaledAmount;
      }
    }
  }

  Object.keys(initialMultipliers).forEach((attribute) => {
    settings_modifiers.damageMultiplier[attribute] =
      allDmgMult.mult[attribute as MultiplierName] *
      allDmgMult.add[attribute as MultiplierName] *
      allDmgMult.target[attribute as MultiplierName];
  });

  // convert modifiers to arrays for simpler iteration
  settings_modifiers['buff'] = Object.entries(settings_modifiers['buff'] || {});
  settings_modifiers['convert'] = Object.entries(settings_modifiers['convert'] || {}).map(
    ([attribute, conversion]) => [attribute, Object.entries(conversion as any)],
  );
  settings_modifiers['convertAfterBuffs'] = Object.entries(
    settings_modifiers['convertAfterBuffs'] || {},
  ).map(([attribute, conversion]) => [attribute, Object.entries(conversion as any)]);

  /* Relevant Conditions + Condi Caching Toggle */

  const settings_relevantConditions: OptimizerCoreSettings['relevantConditions'] = (
    Object.keys(conditionData) as ConditionName[]
  ).filter(
    (condition) =>
      (settings_baseAttributes[`${condition} Coefficient`] ?? 0) > 0 ||
      extraRelevantConditions[condition],
  );

  // if any condition coefficnents are the result of a conversion, the same cdmg + expertise does
  // not mean the same condition dps; disable caching if so
  const settings_disableCondiResultCache: OptimizerCoreSettings['disableCondiResultCache'] =
    Object.values(extraRelevantConditions).some(Boolean);

  /* Infusions */

  const settings_maxInfusions: OptimizerCoreSettings['maxInfusions'] = clamp(
    others.maxInfusions,
    0,
    18,
  );
  primaryMaxInfusionsInput = clamp(primaryMaxInfusionsInput, 0, settings_maxInfusions);
  secondaryMaxInfusionsInput = clamp(secondaryMaxInfusionsInput, 0, settings_maxInfusions);

  const validInfusionStats = new Set([
    ...Attributes.PRIMARY,
    ...Attributes.SECONDARY,
    ...Attributes.DERIVED,
  ]);

  let settings_primaryInfusion: OptimizerCoreSettings['primaryInfusion'] = '';
  let settings_primaryMaxInfusions: OptimizerCoreSettings['primaryMaxInfusions'] = 0;
  let settings_secondaryInfusion: OptimizerCoreSettings['secondaryInfusion'] = '';
  let settings_secondaryMaxInfusions: OptimizerCoreSettings['secondaryMaxInfusions'] = 0;

  let activeInfusions = 0;
  if (primaryInfusionInput && primaryInfusionInput !== 'None') {
    if (validInfusionStats.has(primaryInfusionInput)) {
      activeInfusions++;
      settings_primaryInfusion = primaryInfusionInput;
      settings_primaryMaxInfusions = primaryMaxInfusionsInput;
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
        settings_secondaryInfusion = secondaryInfusionInput;
        settings_secondaryMaxInfusions = secondaryMaxInfusionsInput;
      } else {
        // only secondary is selected; pretend secondary is primary
        settings_primaryInfusion = secondaryInfusionInput;
        settings_primaryMaxInfusions = secondaryMaxInfusionsInput;
      }
    } else {
      throw new Error(
        `Secondary infusion can only increase primary, secondary or derived attributes, not ${secondaryInfusionInput}`,
      );
    }
  }

  let settings_infusionMode: OptimizerCoreSettings['infusionMode'] = 'None';
  switch (activeInfusions) {
    case 0:
      settings_infusionMode = 'None';
      break;
    case 1:
      settings_infusionMode = 'Primary';
      break;
    case 2:
      if (settings_primaryMaxInfusions + settings_secondaryMaxInfusions <= settings_maxInfusions) {
        settings_infusionMode = 'Few';
      } else {
        settings_infusionMode = infusionNoDuplicates ? 'SecondaryNoDuplicates' : 'Secondary';
      }
    // no default
  }

  /* Equipment */

  const Affix = { ...unmodifiedAffix, Custom: { ...unmodifiedAffix.Custom, ...customAffixData } };

  const settings_slots: OptimizerCoreSettings['slots'] = Slots[others.weaponType];

  // affixesArray: valid affixes for each slot, taking forced slots into account
  // e.g. [[Berserker, Assassin], [Assassin], [Berserker, Assassin]...]
  let settings_affixesArray: OptimizerCoreSettings['affixesArray'] = new Array(
    settings_slots.length,
  ).fill(others.affixes);

  let settings_forcedArmor: OptimizerCoreSettings['forcedArmor'] = false;
  let settings_forcedRing: OptimizerCoreSettings['forcedRing'] = false;
  let settings_forcedAcc: OptimizerCoreSettings['forcedAcc'] = false;
  let settings_forcedWep: OptimizerCoreSettings['forcedWep'] = false;

  others.forcedAffixes.forEach((affix, index) => {
    if (!affix) {
      return;
    }
    settings_affixesArray[index] = [affix];
    if (['shld', 'glov', 'boot'].includes(ForcedSlots[index])) {
      settings_forcedArmor = true;
    } else if (['rng1', 'rng2'].includes(ForcedSlots[index])) {
      settings_forcedRing = true;
    } else if (['acc1', 'acc2'].includes(ForcedSlots[index])) {
      settings_forcedAcc = true;
    } else if (['wep1', 'wep2'].includes(ForcedSlots[index])) {
      settings_forcedWep = true;
    }
  });

  // rearrange affixes so you don't always start with e.g. full berserker. Example:
  // [vipe sini grie] helm
  // [grie vipe sini] shld
  // [sini grie vipe] coat
  // [vipe]           glov (forced to viper)
  // [grie vipe sini] legs
  // ...
  settings_affixesArray = settings_affixesArray.map((affixes, slotindex) => {
    if (affixes.length === 1) {
      return affixes;
    }
    const result: AffixName[] = [];
    for (const [index, affix] of affixes.entries()) {
      result[(index + slotindex) % affixes.length] = affix;
    }
    return result;
  });
  // console.log(settings.affixesArray.map(item => item.toString()));

  // like affixesArray, but each entry is an array of arrays of stats given by that piece with
  // that affix
  // e.g. berserker helm -> [[Power, 63],[Precision, 45],[Ferocity, 45]]
  const settings_affixStatsArray: OptimizerCoreSettings['affixStatsArray'] =
    settings_affixesArray.map((possibleAffixes, slotindex) =>
      possibleAffixes.map((affix) => {
        const statTotals: Record<string, number> = {};
        const bonuses = Object.entries(
          settings_slots[slotindex].item[Affix[affix as keyof typeof Affix].type],
        );
        for (const [type, bonus] of bonuses) {
          for (const stat of Affix[affix as keyof typeof Affix].bonuses[type]) {
            statTotals[stat] = (statTotals[stat] || 0) + (bonus as number);
          }
        }

        return Object.entries(statTotals);
      }),
    );

  // used to keep the progress counter in sync when skipping identical gear combinations.
  const settings_runsAfterThisSlot: OptimizerCoreSettings['runsAfterThisSlot'] = [];
  for (let index = 0; index < settings_affixesArray.length; index++) {
    let counter = 1;
    for (const affixes of settings_affixesArray.slice(index)) {
      counter *= affixes.length;
    }

    settings_runsAfterThisSlot.push(counter);
  }

  settings_runsAfterThisSlot.push(1);

  // const freeSlots = settings.weaponType === WeaponTypes.dualWield ? 5 : 6;
  // const pairs = settings.weaponType === WeaponTypes.dualWield ? 3 : 2;
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

  const settings: OptimizerCoreSettings = {
    ...others,
    distribution: settings_distribution,
    baseAttributes: settings_baseAttributes,
    modifiers: settings_modifiers,
    relevantConditions: settings_relevantConditions,
    disableCondiResultCache: settings_disableCondiResultCache,
    maxInfusions: settings_maxInfusions,
    primaryInfusion: settings_primaryInfusion,
    primaryMaxInfusions: settings_primaryMaxInfusions,
    secondaryInfusion: settings_secondaryInfusion,
    secondaryMaxInfusions: settings_secondaryMaxInfusions,
    infusionMode: settings_infusionMode,
    slots: settings_slots,
    affixesArray: settings_affixesArray,
    forcedArmor: settings_forcedArmor,
    forcedRing: settings_forcedRing,
    forcedAcc: settings_forcedAcc,
    forcedWep: settings_forcedWep,
    affixStatsArray: settings_affixStatsArray,
    runsAfterThisSlot: settings_runsAfterThisSlot,
  };

  // only supply character with settings it uses to render
  const minimalSettings: OptimizerCoreMinimalSettings = {
    cachedFormState: settings.cachedFormState,
    profession: settings.profession,
    specialization: settings.specialization,
    weaponType: settings.weaponType,
    appliedModifiers: settings.appliedModifiers,
    rankby: settings.rankby,
    shouldDisplayExtras: settings.shouldDisplayExtras,
    extrasCombination: settings.extrasCombination,
  };

  return [settings, minimalSettings];
}

export function stateToCombinations(reduxState) {
  const state = reduxState.optimizer;

  const specialization = getCurrentSpecialization(reduxState);

  const sharedModifiers = [
    ...(getBuffsModifiers(reduxState) || []),
    ...(getExtraModifiersModifiers(reduxState) || []),
    ...(getInfusionsModifiers(reduxState) || []),
    ...(getSkillsModifiers(reduxState) || []),
    ...(getTraitsModifiers(reduxState) || []),
  ];

  const customAffixData = getCustomAffixData(reduxState);

  // display extras in table if they have multiple options
  const shouldDisplayExtras = mapValues(
    getExtrasIds(reduxState),
    (ids) => Array.isArray(ids) && ids.length > 1,
  );

  console.groupCollapsed('Debug Info:');
  console.log('Redux State:', state);

  // do not mutate selector result; it may be reused if the same calculation is run twice
  const combinations = getExtrasCombinationsAndModifiers(reduxState).map((combination) => ({
    ...combination,
  }));

  for (const combination of combinations) {
    const { extrasCombination, extrasModifiers } = combination;
    const appliedModifiers = [...sharedModifiers, ...extrasModifiers];

    const cachedFormState = {
      traits: state.form.traits,
      skills: state.form.skills,
      extras: state.form.extras,
      buffs: state.form.buffs, // buffs are also needed to share a build and display the assumed buffs for the result
    };

    const {
      control: { profession },
      form: {
        infusions: {
          primaryInfusion,
          secondaryInfusion,
          maxInfusions: maxInfusionsText,
          primaryMaxInfusions: primaryMaxInfusionsText,
          secondaryMaxInfusions: secondaryMaxInfusionsText,
        },
        forcedSlots: { slots },
        priorities: {
          optimizeFor,
          weaponType,
          minBoonDuration: minBoonDurationText,
          minHealingPower: minHealingPowerText,
          minToughness: minToughnessText,
          maxToughness: maxToughnessText,
          minHealth: minHealthText,
          minCritChance: minCritChanceText,
          affixes,
        },
        distribution: { version, values1, values2 },
        boss: { attackRate: attackRateText, movementUptime: movementUptimeText },
      },
    } = state;

    const maxInfusions = parseInfusionCount(maxInfusionsText).value;
    const primaryMaxInfusions = parseInfusionCount(primaryMaxInfusionsText).value;
    const secondaryMaxInfusions = parseInfusionCount(secondaryMaxInfusionsText).value;

    const minBoonDuration = parsePriority(minBoonDurationText).value;
    const minHealingPower = parsePriority(minHealingPowerText).value;
    const minToughness = parsePriority(minToughnessText).value;
    const maxToughness = parsePriority(maxToughnessText).value;
    const minHealth = parsePriority(minHealthText).value;
    const minCritChance = parsePriority(minCritChanceText).value;

    const attackRate = parseBoss(attackRateText).value ?? 0;
    const movementUptime = (parseBoss(movementUptimeText).value ?? 0) / 100;

    const input = {
      profession,
      weaponType,
      affixes: affixes.map((affix) =>
        affix.toLowerCase().replace(/^\w/, (char) => char.toUpperCase()),
      ),
      forcedAffixes: slots,
      rankby: optimizeFor,
      minBoonDuration,
      minHealingPower,
      minToughness,
      maxToughness,
      minHealth,
      minCritChance,
      maxResults: 50, // TODO MAX RESULTS
      maxInfusions,
      primaryInfusion,
      secondaryInfusion,
      primaryMaxInfusions,
      secondaryMaxInfusions,
      distributionVersion: version,
      percentDistribution: values1,
      distribution: values2,
      attackRate,
      movementUptime,
    };
    input.specialization = specialization;
    input.appliedModifiers = appliedModifiers;
    input.cachedFormState = cachedFormState;
    input.customAffixData = customAffixData;
    input.shouldDisplayExtras = shouldDisplayExtras;
    input.extrasCombination = extrasCombination;

    // temp: convert "poisoned" to "poison"
    const convertPoison = (distribution) =>
      mapEntries(distribution, ([key, value]) => [key === 'Poisoned' ? 'Poison' : key, value]);

    if ({}.hasOwnProperty.call(input.distribution, 'Poisoned')) {
      input.distribution = convertPoison(input.distribution);
    }
    if ({}.hasOwnProperty.call(input.percentDistribution, 'Poisoned')) {
      input.percentDistribution = convertPoison(input.percentDistribution);
    }

    combination.input = input;

    const [settings, minimalSettings] = inputToSettings(input);

    console.log('Input option:', combination);

    combination.settings = settings;
    combination.minimalSettings = minimalSettings;
  }

  console.groupEnd();

  return combinations;
}
