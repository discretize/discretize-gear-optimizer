/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
/* eslint-disable dot-notation */

import type {
  AmountData,
  AttributeKey,
  AttributePointMode,
  ConversionAfterBuffsDestinationKey,
  ConversionAfterBuffsSourceKey,
  ConversionAfterBuffsValue,
  ConversionDestinationKey,
  ConversionSourceKey,
  ConversionValue,
  DamageKey,
  DamageMode,
  DamageValue,
  Percent,
  Modifiers as YamlModifiers,
} from '../../assets/modifierdata/metadata';
import {
  allAttributeCoefficientKeys,
  allAttributePercentKeys,
  allAttributePointKeys,
  allConversionAfterBuffsSourceKeys,
} from '../../assets/modifierdata/metadata';
import type { AffixName, AttributeName, ForcedSlotName } from '../../utils/gw2-data';
import {
  Classes,
  ForcedSlots,
  Slots,
  conditionData,
  damagingConditions,
  Affix as unmodifiedAffix,
} from '../../utils/gw2-data';
import {
  enumArrayIncludes,
  mapEntries,
  mapValues,
  objectEntries,
  objectKeys,
  parseAmount,
  parseBoss,
  parseInfusionCount,
  parsePriority,
} from '../../utils/usefulFunctions';
import { getAttackRate, getMovementUptime } from '../slices/boss';
import { getBuffsModifiers } from '../slices/buffs';
import { getProfession } from '../slices/controlsSlice';
import { getDistributionNew } from '../slices/distribution';
import { getExtraModifiersModifiers } from '../slices/extraModifiers';
import type { ExtrasCombination } from '../slices/extras';
import { getExtrasCombinationsAndModifiers, getExtrasIds } from '../slices/extras';
import { getForcedSlots } from '../slices/forcedSlots';
import {
  getInfusionsModifiers,
  getMaxInfusions,
  getValidInfusionOptions,
} from '../slices/infusions';
import {
  getAffixes,
  getConstraint,
  getCustomAffixData,
  getExclusionData,
  getExoticsData,
  getOptimizeFor,
  getWeaponType,
} from '../slices/priorities';
import { getSkillsModifiers } from '../slices/skills';
import { getCurrentSpecialization, getTraitsModifiers } from '../slices/traits';
import { getGameMode } from '../slices/userSettings';
import type { RootState } from '../store';
import type {
  OptimizerCoreSettings,
  OptimizerCoreSettingsPerCalculation,
  OptimizerCoreSettingsPerCombination,
} from './optimizerCore';
import { clamp, scaleValue } from './optimizerCore';

export interface ExtrasCombinationEntry {
  extrasCombination: ExtrasCombination;
  extrasModifiers: AppliedModifier[];
}

type MultiplierName =
  | 'Outgoing Strike Damage'
  | 'Outgoing Condition Damage'
  | 'Outgoing Siphon Damage'
  | 'Incoming Strike Damage'
  | 'Outgoing Critical Damage'
  | 'Outgoing Bleeding Damage'
  | 'Outgoing Burning Damage'
  | 'Outgoing Confusion Damage'
  | 'Outgoing Poison Damage'
  | 'Outgoing Torment Damage'
  | 'Outgoing Alternative Damage'
  | 'Outgoing Alternative Critical Damage'
  | 'Outgoing Phantasm Damage'
  | 'Outgoing Phantasm Critical Damage';

export interface AppliedModifier {
  id?: string;
  amount?: string;
  modifiers: YamlModifiers;
  wvwModifiers?: YamlModifiers;
  amountData?: AmountData;
  temporaryBuff?: true | false | 'activeOutOfCombat';
}

// todo: move these; they should be synchronized with ../../assets/modifierdata/metadata.js and
// ../../components/sections/distribution/DamageDistribution.jsx
// (unsure how that would best be done)
export type DistributionNameUI =
  | 'Power'
  | 'Power2'
  | 'Burning'
  | 'Bleeding'
  | 'Poisoned'
  | 'Torment'
  | 'Confusion';
export type DistributionNameInternal =
  | 'Power'
  | 'Power2'
  | 'Burning'
  | 'Bleeding'
  | 'Poison'
  | 'Torment'
  | 'Confusion';

type CollectedAttributeModifiers = Partial<Record<AttributeKey, number>>;

type CollectedConversionValue = Partial<Record<ConversionSourceKey, number>>;
export type CollectedConversionModifers = Partial<
  Record<ConversionDestinationKey, CollectedConversionValue>
>;

type CollectedConversionAfterBuffsValue = Partial<Record<ConversionAfterBuffsSourceKey, number>>;
export type CollectedConversionAfterBuffsModifers = Partial<
  Record<ConversionAfterBuffsDestinationKey, CollectedConversionAfterBuffsValue>
>;

interface CollectedModifiers {
  buff: CollectedAttributeModifiers;
  convert: CollectedConversionModifers;
  convertAfterBuffs: CollectedConversionAfterBuffsModifers;
}
export interface MultiplierBreakdown {
  mult: number;
  add: number;
  target: number;
  total: number;
}
export type DamageMultiplier = Record<MultiplierName, number>;
export type DamageMultiplierBreakdown = Record<MultiplierName, MultiplierBreakdown>;
export interface Modifiers {
  damageMultiplier: DamageMultiplier;
  damageMultiplierBreakdown: DamageMultiplierBreakdown;
  buff: [AttributeKey, number][];
  convert: [ConversionDestinationKey, [ConversionSourceKey, number][]][];
  convertAfterBuffs: [
    ConversionAfterBuffsDestinationKey,
    [ConversionAfterBuffsSourceKey, number][],
  ][];
}

export type InfusionMode = 'None' | 'Primary' | 'Few' | 'Secondary' | 'SecondaryNoDuplicates';

export interface CachedFormState {
  traits: Record<string, any>;
  skills: Record<string, any>;
  extras: Record<string, any>;
  buffs: Record<string, any>;
  priorities: Record<string, any>;
  boss: Record<string, any>;
}

// interface OptimizerInput {
//   profession: ProfessionName;
//   specialization: string;
//   weaponType: WeaponHandednessType;
//   affixes: AffixName[]; // all selected gear affixes to iterate over
//   forcedAffixes: (AffixName | null)[]; // array of specific affix names for each slot, or '' for unspecfied
//   rankby: 'Damage' | 'Survivability' | 'Healing';
//   minBoonDuration: number | null;
//   minHealingPower: number | null;
//   minToughness: number | null;
//   maxToughness: number | null;
//   minHealth: number | null;
//   minCritChance: number | null;
//   maxResults: number;
//   primaryInfusion?: string;
//   secondaryInfusion?: string;
//   maxInfusions: number; // number of infusions, 0-18
//   primaryMaxInfusions: number; // number of infusions, 0-18
//   secondaryMaxInfusions: number; // number of infusions, 0-18
//   distributionVersion?: 1 | 2; // version 1: old style (percentDistribution), verison 2: new style (coeff / sec)
//   percentDistribution?: Record<string, number>; // old style distribution (sums to 100)
//   distribution?: Record<string, number>; // new style distribution (coefficient * weaponstrength per second; average condition stacks)
//   attackRate: number; // boss attack rate (for confusion)
//   movementUptime: number; // boss movement uptime (for torment)

//   appliedModifiers: AppliedModifier[]; // array of modifier objects

//   infusionNoDuplicates: any;
//   customAffixData: any;
// }

export function setupCombinations(reduxState: RootState) {
  console.groupCollapsed('Debug Info:');
  console.log('Redux State:', reduxState.optimizer);

  const settingsPerCalculation = createSettingsPerCalculation(reduxState);
  console.log('settings per calculation', settingsPerCalculation);

  const data = getExtrasCombinationsAndModifiers(reduxState).map((extrasCombinationEntry, i) => {
    console.log(`combination ${i}:`, extrasCombinationEntry);

    const { extrasCombination, extrasModifiers } = extrasCombinationEntry;

    const settingsPerCombination = createSettingsPerCombination(reduxState, extrasModifiers);
    const unbuffedSettings = createSettingsPerCombination(reduxState, extrasModifiers, true);

    const settings = {
      ...settingsPerCalculation,
      ...settingsPerCombination,
      unbuffedBaseAttributes: unbuffedSettings.baseAttributes,
      unbuffedModifiers: unbuffedSettings.modifiers,
      extrasCombination,
    };

    return { extrasCombinationEntry, settings };
  });

  console.groupEnd();

  return data;
}

export function createSettingsPerCalculation(
  reduxState: RootState,
): OptimizerCoreSettingsPerCalculation {
  const state = reduxState.optimizer;

  const specialization = getCurrentSpecialization(reduxState);

  const customAffixData: Omit<typeof unmodifiedAffix.Custom, 'category'> =
    getCustomAffixData(reduxState);

  // display extras in table if they have multiple options
  const shouldDisplayExtras = mapValues(
    getExtrasIds(reduxState),
    (ids) => Array.isArray(ids) && ids.length > 1,
  );

  const cachedFormState = {
    traits: state.form.traits,
    skills: state.form.skills,
    extras: state.form.extras,
    buffs: state.form.buffs, // buffs are also needed to share a build and display the assumed buffs for the result
    priorities: state.form.priorities,
    boss: state.form.boss,
  };

  const profession = getProfession(reduxState);
  const infusionOptions = getValidInfusionOptions(reduxState);
  const maxInfusionsText = getMaxInfusions(reduxState);
  const forcedSlots = getForcedSlots(reduxState);
  const exclusions = getExclusionData(reduxState);
  const exotics = getExoticsData(reduxState);
  const optimizeFor = getOptimizeFor(reduxState);
  const weaponType = getWeaponType(reduxState);
  const minBoonDurationText = getConstraint('minBoonDuration')(reduxState);
  const minHealingPowerText = getConstraint('minHealingPower')(reduxState);
  const minToughnessText = getConstraint('minToughness')(reduxState);
  const maxToughnessText = getConstraint('maxToughness')(reduxState);
  const minHealthText = getConstraint('minHealth')(reduxState);
  const minCritChanceText = getConstraint('minCritChance')(reduxState);
  const minDamageText = getConstraint('minDamage')(reduxState);
  const minHealingText = getConstraint('minHealing')(reduxState);
  const minOutgoingHealingText = getConstraint('minOutgoingHealing')(reduxState);
  const minQuicknessDurationText = getConstraint('minQuicknessDuration')(reduxState);
  const minSurvivabilityText = getConstraint('minSurvivability')(reduxState);
  const affixes = getAffixes(reduxState);
  const unmodifiedDistribution = getDistributionNew(reduxState);
  const attackRateText = getAttackRate(reduxState);
  const movementUptimeText = getMovementUptime(reduxState);

  const gameMode = getGameMode(reduxState);
  const isWvW = gameMode === 'wvw';

  // todo: consolidate error handling
  if (profession === '') {
    throw new Error('missing profession!');
  }
  if (affixes.length < 1) {
    throw new Error('No affixes selected');
  }

  // const affixes = unmodifiedAffixes.map((affix) =>
  //   affix.toLowerCase().replace(/^\w/, (char) => char.toUpperCase()),
  // );

  const maxInfusions = parseInfusionCount(maxInfusionsText).value;

  const minBoonDuration = parsePriority(minBoonDurationText).value;
  const minHealingPower = parsePriority(minHealingPowerText).value;
  const minToughness = parsePriority(minToughnessText).value;
  const maxToughness = parsePriority(maxToughnessText).value;
  const minHealth = parsePriority(minHealthText).value;
  const minCritChance = parsePriority(minCritChanceText).value;
  const minSurvivability = parsePriority(minSurvivabilityText).value;
  const minDamage = parsePriority(minDamageText).value;
  const minHealing = parsePriority(minHealingText).value;
  const minOutgoingHealing = parsePriority(minOutgoingHealingText).value;
  const minQuicknessDuration = parsePriority(minQuicknessDurationText).value;

  const attackRate = parseBoss(attackRateText).value ?? 0;
  const movementUptime = (parseBoss(movementUptimeText).value ?? 0) / 100;

  // temp: convert "poisoned" to "poison"
  const convertPoison = (dist: Record<DistributionNameUI, number>) =>
    mapEntries(dist, ([key, value]) => [key === 'Poisoned' ? 'Poison' : key, value]);

  const distribution = convertPoison(unmodifiedDistribution);

  /* Infusions */

  const settings_maxInfusions: OptimizerCoreSettings['maxInfusions'] = clamp(maxInfusions, 0, 18);

  const settings_infusionOptions = infusionOptions.map(({ type, count }) => ({
    type,
    count: clamp(parseInfusionCount(count).value, 0, 18),
  }));

  const totalSelectedInfusions = settings_infusionOptions.reduce(
    (prev, cur) => prev + cur.count,
    0,
  );

  // currently unimplemented setting
  const infusionNoDuplicates = false;

  let settings_infusionMode: OptimizerCoreSettings['infusionMode'] = 'None';
  switch (infusionOptions.length) {
    case 0:
      settings_infusionMode = 'None';
      break;
    case 1:
      settings_infusionMode = 'Primary';
      break;
    default:
      if (totalSelectedInfusions <= settings_maxInfusions) {
        settings_infusionMode = 'Few';
      } else {
        settings_infusionMode = infusionNoDuplicates ? 'SecondaryNoDuplicates' : 'Secondary';
      }
  }

  /* Equipment */

  const Affix: typeof unmodifiedAffix = {
    ...unmodifiedAffix,
    Custom: { ...unmodifiedAffix.Custom, ...customAffixData },
  };

  const settings_slots = Slots[weaponType];

  // affixesArray: valid affixes for each slot, taking forced slots into account
  // e.g. [[Berserker, Assassin], [Assassin], [Berserker, Assassin]...]
  const orderedAffixesArray: OptimizerCoreSettings['affixesArray'] = new Array(
    settings_slots.length,
  ).fill(affixes);

  orderedAffixesArray.forEach((_, index) => {
    const forcedAffix = forcedSlots[index];

    if (forcedAffix || Object.values(exclusions).some((arr) => arr[index])) {
      if (forcedAffix) {
        orderedAffixesArray[index] = [forcedAffix];
      } else {
        const filtered = orderedAffixesArray[index].filter(
          (affix) => !exclusions?.[affix]?.[index],
        );
        if (filtered.length) {
          orderedAffixesArray[index] = filtered;
        } else {
          // user excluded every possible affix; fallback to excluding nothing
        }
      }
    }
  });

  const arrayEntriesDeepEqual = (arr: any[]) =>
    arr.every((entry) => JSON.stringify(entry) === JSON.stringify(arr[0]));

  /**
   * Returns true if the given slots have identical settings.
   *
   * If true, a performance optimization will skip one of e.g.
   *    berserker ring + assassin ring
   *    assassin ring + berserker ring
   *
   * This optimization must be disabled if these are actually different results,
   * like if the second ring slot is actually exotic.
   *
   * @param {string[]} slotNames
   * @returns {boolean} identical
   */
  const slotSettingsIdentical = (slotNames: ForcedSlotName[]) => {
    const slotIndexes = slotNames.map((slotName) => ForcedSlots.indexOf(slotName));

    const slotAffixesArrays = slotIndexes.map((index) => orderedAffixesArray[index]);
    const slotAffixesArraysIdentical = arrayEntriesDeepEqual(slotAffixesArrays);

    const slotRarities = slotIndexes.map((index) => Object.values(exotics).map((e) => e[index]));
    const slotRaritiesIdentical = arrayEntriesDeepEqual(slotRarities);

    return slotAffixesArraysIdentical && slotRaritiesIdentical;
  };

  const settings_identicalArmor = slotSettingsIdentical(['shld', 'glov', 'boot']);
  const settings_identicalRing = slotSettingsIdentical(['rng1', 'rng2']);
  const settings_identicalAcc = slotSettingsIdentical(['acc1', 'acc2']);
  const settings_identicalWep = slotSettingsIdentical(['wep1', 'wep2']);

  // rearrange affixes so you don't always start with e.g. full berserker. Example:
  // [vipe sini grie] helm
  // [grie vipe sini] shld
  // [sini grie vipe] coat
  // [vipe]           glov (forced to viper)
  // [grie vipe sini] legs
  // ...
  const settings_affixesArray = orderedAffixesArray.map((affixOptions, slotindex) => {
    if (affixOptions.length === 1) {
      return affixOptions;
    }
    const result: AffixName[] = [];
    affixOptions.forEach((affix, index) => {
      result[(index + slotindex) % affixOptions.length] = affix;
    });
    return result;
  });
  // console.log(settings.affixesArray.map(item => item.toString()));

  // like affixesArray, but each entry is an array of arrays of stats given by that piece with
  // that affix
  // e.g. berserker helm -> [[Power, 63],[Precision, 45],[Ferocity, 45]]
  const settings_affixStatsArray: OptimizerCoreSettings['affixStatsArray'] =
    settings_affixesArray.map((possibleAffixes, slotindex) =>
      possibleAffixes.map((affix) => {
        const statTotals: Partial<Record<AttributeName, number>> = {};
        const item = exotics?.[affix]?.[slotindex]
          ? settings_slots[slotindex].exo
          : settings_slots[slotindex].asc;
        const bonuses = objectEntries(item[Affix[affix].type]);
        for (const [type, bonus] of bonuses) {
          const affixData = Affix[affix];
          const affixBonuses = isWvW
            ? (affixData.wvwBonuses ?? affixData.bonuses)
            : affixData.bonuses;
          for (const stat of affixBonuses[type] ?? []) {
            statTotals[stat] = (statTotals[stat] ?? 0) + bonus;
          }
        }

        return objectEntries(statTotals);
      }),
    );

  // for heuristics
  // like affixes, but each entry is an array of stats given by using that affix in every available slot
  // e.g. berserker with no forced affixes -> [[Power, 1381],[Precision, 961],[Ferocity, 961]]
  let settings_jsHeuristicsData: [AttributeName, number][][] | undefined;
  try {
    settings_jsHeuristicsData = affixes.map((forcedAffix) => {
      const statTotals: Partial<Record<AttributeName, number>> = {};
      settings_affixesArray.forEach((possibleAffixes, slotindex) => {
        if (!possibleAffixes.includes(forcedAffix) && possibleAffixes.length !== 1) {
          throw new Error();
        }
        const affix = possibleAffixes.includes(forcedAffix) ? forcedAffix : possibleAffixes[0];

        const item = exotics?.[affix]?.[slotindex]
          ? settings_slots[slotindex].exo
          : settings_slots[slotindex].asc;
        const bonuses = objectEntries(item[Affix[affix].type]);
        for (const [type, bonus] of bonuses) {
          const affixData = Affix[affix];
          const affixBonuses = isWvW
            ? (affixData.wvwBonuses ?? affixData.bonuses)
            : affixData.bonuses;
          for (const stat of affixBonuses[type] ?? []) {
            statTotals[stat] = (statTotals[stat] ?? 0) + bonus;
          }
        }
      });

      return objectEntries(statTotals);
    });
  } catch {
    // silently disable heuristics where they will not be accurate
  }

  // used to keep the progress counter in sync when skipping identical gear combinations.
  const settings_runsAfterThisSlot: OptimizerCoreSettings['runsAfterThisSlot'] = [];
  for (let index = 0; index < settings_affixesArray.length; index++) {
    let counter = 1;
    for (const affixOptions of settings_affixesArray.slice(index)) {
      counter *= affixOptions.length;
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

  const settings: OptimizerCoreSettingsPerCalculation = {
    profession,
    weaponType,
    forcedAffixes: forcedSlots,
    rankby: optimizeFor,
    minBoonDuration,
    minHealingPower,
    minToughness,
    maxToughness,
    minHealth,
    minCritChance,
    minDamage,
    minHealing,
    minSurvivability,
    minOutgoingHealing,
    minQuicknessDuration,
    maxResults: 50, // TODO MAX RESULTS
    attackRate,
    movementUptime,
    specialization,
    cachedFormState,
    shouldDisplayExtras,
    distribution,
    maxInfusions: settings_maxInfusions,
    infusionOptions: settings_infusionOptions,
    infusionMode: settings_infusionMode,
    slots: settings_slots.length,
    affixesArray: settings_affixesArray,
    identicalArmor: settings_identicalArmor,
    identicalRing: settings_identicalRing,
    identicalAcc: settings_identicalAcc,
    identicalWep: settings_identicalWep,
    affixStatsArray: settings_affixStatsArray,
    runsAfterThisSlot: settings_runsAfterThisSlot,
    gameMode,
    affixes,
    jsHeuristicsData: settings_jsHeuristicsData,
  };

  return settings;
}

export function createSettingsPerCombination(
  reduxState: RootState,
  extrasModifiers: AppliedModifier[],
  simulateUnbuffed = false,
): OptimizerCoreSettingsPerCombination {
  const sharedModifiers = [
    ...(getBuffsModifiers(reduxState) || []),
    ...(getExtraModifiersModifiers(reduxState) || []),
    ...(getInfusionsModifiers(reduxState) || []),
    ...(getSkillsModifiers(reduxState) || []),
    ...(getTraitsModifiers(reduxState) || []),
  ];

  const appliedModifiers = [...sharedModifiers, ...extrasModifiers];

  const profession = getProfession(reduxState);
  const unmodifiedDistribution = getDistributionNew(reduxState);

  const gameMode = getGameMode(reduxState);
  const isWvW = gameMode === 'wvw';

  // todo: consolidate error handling
  if (profession === '') {
    throw new Error('missing profession!');
  }

  // temp: convert "poisoned" to "poison"
  const convertPoison = (
    dist: Record<DistributionNameUI, number>,
  ): Record<DistributionNameInternal, number> =>
    mapEntries(dist, ([key, value]) => [key === 'Poisoned' ? 'Poison' : key, value]);

  const distribution = convertPoison(unmodifiedDistribution);

  /* Base Attributes */

  const settings_baseAttributes = {
    'Power': 1000,
    'Precision': 1000,
    'Toughness': 1000,
    'Vitality': 1000,

    'Ferocity': 0,
    'Condition Damage': 0,
    'Expertise': 0,
    'Concentration': 0,
    'Healing Power': 0,
    'Agony Resistance': 0,

    'Critical Chance': 0.05,
    'Critical Damage': 1.5,
    'Condition Duration': 0,
    'Condition Duration Uncapped': 0,
    'Boon Duration': 0,
    'Health': Classes[profession].health,
    'Armor': Classes[profession].defense,
  } as OptimizerCoreSettings['baseAttributes'];

  if (profession === 'Mesmer') {
    settings_baseAttributes['Clone Critical Chance'] = 0.05;
    settings_baseAttributes['Phantasm Critical Chance'] = 0.05;
    settings_baseAttributes['Phantasm Critical Damage'] = 1.5;
  }

  for (const [key, value] of objectEntries(distribution)) {
    settings_baseAttributes[`${key} Coefficient`] = value;
  }

  settings_baseAttributes[`Flat DPS`] = 0;

  /* Modifiers */

  const collectedModifiers: CollectedModifiers = {
    buff: {},
    convert: {},
    convertAfterBuffs: {},
  };
  const initialMultipliers: Record<MultiplierName, number> = {
    'Outgoing Strike Damage': 1,
    'Outgoing Condition Damage': 1,
    'Outgoing Siphon Damage': 1,
    'Incoming Strike Damage': 1,
    'Outgoing Critical Damage': 1,
    'Outgoing Bleeding Damage': 1,
    'Outgoing Burning Damage': 1,
    'Outgoing Confusion Damage': 1,
    'Outgoing Poison Damage': 1,
    'Outgoing Torment Damage': 1,
    'Outgoing Alternative Damage': 1,
    'Outgoing Alternative Critical Damage': 1,
    'Outgoing Phantasm Damage': 1,
    'Outgoing Phantasm Critical Damage': 1,
  };
  const allDmgMult = {
    mult: { ...initialMultipliers },
    add: { ...initialMultipliers },
    target: { ...initialMultipliers },
  };
  const dmgBuff = (
    attribute: keyof typeof initialMultipliers,
    amount: number,
    addOrMult: 'add' | 'target' | 'mult' | 'unknown',
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
  const makeConditionsRelevant = (attribute: AttributeName) => {
    const condition = attribute.replace(' Coefficient', '');
    if (extraRelevantConditions[condition] !== undefined) {
      extraRelevantConditions[condition] = true;
    }
  };

  for (const item of appliedModifiers) {
    const {
      id = '[no id]',
      amount: amountText,
      // data: {
      modifiers,
      wvwModifiers,
      amountData: realAmountData,
      temporaryBuff,
      // },
    } = item;

    // unbuffed mode: remove temporary buffs that will not affect the hero panel out of combat
    if (simulateUnbuffed && temporaryBuff === true) {
      continue;
    }
    // unbuffed mode: ignore amounts when *not* removing active-out-of-combat buffs, e.g. signet passive effects
    const amountData =
      simulateUnbuffed && temporaryBuff === 'activeOutOfCombat' ? undefined : realAmountData;

    const {
      damage = {},
      attributes = {},
      conversion = {},
      conversionAfterBuffs = {},
      // note,
      // ...otherModifiers
    } = isWvW ? (wvwModifiers ?? modifiers) : modifiers;

    const { value: amountInput } = parseAmount(amountText);

    for (const [attribute, allPairs] of Object.entries(damage) as [DamageKey, DamageValue][]) {
      // damage, i.e.
      //   Outgoing Strike Damage: [3%, add, 7%, mult]

      const allPairsMut = [...allPairs];
      while (allPairsMut.length) {
        const pairs = allPairsMut.splice(0, 2);
        const [percentAmount, addOrMult] = pairs as [string, DamageMode];

        const scaledAmount = scaleValue(parsePercent(percentAmount), amountInput, amountData);

        switch (attribute) {
          case 'Outgoing Strike Damage':
          case 'Outgoing Condition Damage':
          case 'Outgoing Bleeding Damage':
          case 'Outgoing Burning Damage':
          case 'Outgoing Confusion Damage':
          case 'Outgoing Poison Damage':
          case 'Outgoing Torment Damage':
          case 'Outgoing Alternative Damage':
          case 'Outgoing Phantasm Damage':
          case 'Outgoing Siphon Damage':
            dmgBuff(attribute, scaledAmount, addOrMult);
            break;
          case 'Outgoing All Damage':
            dmgBuff('Outgoing Strike Damage', scaledAmount, addOrMult);
            dmgBuff('Outgoing Condition Damage', scaledAmount, addOrMult);
            dmgBuff('Outgoing Siphon Damage', scaledAmount, addOrMult);
            break;
          case 'Damage Reduction':
            const negativeAmount = -scaledAmount;
            dmgBuff('Incoming Strike Damage', negativeAmount, addOrMult);
            break;
          case 'Outgoing Critical Damage':
            // assuming multiplicative until someone tests  twin fangs + ferocious strikes
            dmgBuff('Outgoing Critical Damage', scaledAmount, 'mult');
            break;
          case 'Outgoing Alternative Critical Damage':
            // as of this comment, this is only death perception
            dmgBuff('Outgoing Alternative Critical Damage', scaledAmount, 'mult');
            break;
          case 'Outgoing Phantasm Critical Damage':
            // currently unused as far as I know
            dmgBuff('Outgoing Phantasm Critical Damage', scaledAmount, 'mult');
            break;

          default:
            const _: never = attribute;
            throw new Error(`invalid damage modifier: ${attribute} in ${id}`);
        }
      }
    }

    for (const [attribute, allPairs] of Object.entries(attributes) as [AttributeKey, any][]) {
      if (enumArrayIncludes(allAttributePointKeys, attribute)) {
        // stat, i.e.
        //   Concentration: [70, converted, 100, buff]

        const allPairsMut = [...allPairs];
        while (allPairsMut.length) {
          const pairs = allPairsMut.splice(0, 2);
          const [amount, convertedOrBuff] = pairs as [number, AttributePointMode];

          const scaledAmount = scaleValue(amount, amountInput, amountData);

          switch (convertedOrBuff) {
            case 'converted':
              settings_baseAttributes[attribute] =
                (settings_baseAttributes[attribute] || 0) + scaledAmount;
              break;
            case 'buff':
            case 'unknown':
            default:
              collectedModifiers['buff'][attribute] =
                (collectedModifiers['buff'][attribute] ?? 0) + scaledAmount;
              break;
          }
        }
      } else if (enumArrayIncludes(allAttributeCoefficientKeys, attribute)) {
        // coefficient, i.e.
        //   Power Coefficient: 69.05

        const value: number = Array.isArray(allPairs) ? allPairs[0] : allPairs;
        const scaledAmount = scaleValue(value, amountInput, amountData);
        settings_baseAttributes[attribute] =
          (settings_baseAttributes[attribute] || 0) + scaledAmount;
      } else if (enumArrayIncludes(allAttributePercentKeys, attribute)) {
        // percent, i.e.
        //   Torment Duration: 15%

        const value: string = Array.isArray(allPairs) ? allPairs[0] : allPairs;
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

    for (const [attribute, val] of Object.entries(conversion) as [
      ConversionDestinationKey,
      ConversionValue,
    ][]) {
      // conversion, i.e.
      //   Power: {Condition Damage: 6%, Expertise: 8%}

      makeConditionsRelevant(attribute);

      if (!collectedModifiers['convert'][attribute]) {
        collectedModifiers['convert'][attribute] = {};
      }
      settings_baseAttributes[attribute] ??= 0;

      for (const [source, percentAmount] of Object.entries(val) as [
        ConversionSourceKey,
        Percent,
      ][]) {
        const scaledAmount = scaleValue(parsePercent(percentAmount), amountInput, amountData);

        collectedModifiers['convert'][attribute]![source] =
          (collectedModifiers['convert'][attribute]![source] ?? 0) + scaledAmount;
      }
    }

    for (const [attribute, val] of Object.entries(conversionAfterBuffs) as [
      ConversionAfterBuffsDestinationKey,
      ConversionAfterBuffsValue,
    ][]) {
      // conversion after buffs, i.e.
      //   Power: {Condition Damage: 6%, Expertise: 8%}

      makeConditionsRelevant(attribute);

      if (!collectedModifiers['convertAfterBuffs'][attribute]) {
        collectedModifiers['convertAfterBuffs'][attribute] = {};
      }
      for (const [source, percentAmount] of Object.entries(val) as [
        ConversionAfterBuffsSourceKey,
        Percent,
      ][]) {
        const valid = enumArrayIncludes(allConversionAfterBuffsSourceKeys, source);
        // eslint-disable-next-line no-alert
        if (!valid) alert(`Unsupported after-buff conversion source: ${source}`);

        const scaledAmount = scaleValue(parsePercent(percentAmount), amountInput, amountData);

        collectedModifiers['convertAfterBuffs'][attribute]![source] =
          (collectedModifiers['convertAfterBuffs'][attribute]![source] ?? 0) + scaledAmount;
      }
    }
  }

  const damageMultiplier: any = {};
  const damageMultiplierBreakdown: any = {};

  objectKeys(initialMultipliers).forEach((attribute) => {
    damageMultiplier[attribute] =
      allDmgMult.mult[attribute] * allDmgMult.add[attribute] * allDmgMult.target[attribute];

    damageMultiplierBreakdown[attribute] = {
      mult: allDmgMult.mult[attribute],
      add: allDmgMult.add[attribute],
      target: allDmgMult.target[attribute],
      total: damageMultiplier[attribute],
    };
  });

  // convert modifiers to arrays for simpler iteration
  const buff = Object.entries(collectedModifiers['buff']);
  const convert = Object.entries(collectedModifiers['convert']).map(([attribute, conversion]) => [
    attribute,
    Object.entries(conversion),
  ]);
  const convertAfterBuffs = Object.entries(collectedModifiers['convertAfterBuffs']).map(
    ([attribute, conversion]) => [attribute, Object.entries(conversion)],
  );

  const modifiers = {
    damageMultiplier,
    damageMultiplierBreakdown,
    buff,
    convert,
    convertAfterBuffs,
  } as Modifiers;

  /* Relevant Conditions + Condi Caching Toggle */

  const settings_relevantConditions: OptimizerCoreSettings['relevantConditions'] =
    damagingConditions.filter(
      (condition) =>
        (settings_baseAttributes[`${condition} Coefficient`] ?? 0) > 0 ||
        extraRelevantConditions[condition],
    );

  // if any condition coefficnents are the result of a conversion, the same cdmg + expertise does
  // not mean the same condition dps; disable caching if so
  const settings_disableCondiResultCache: OptimizerCoreSettings['disableCondiResultCache'] =
    Object.values(extraRelevantConditions).some(Boolean);

  const settings: OptimizerCoreSettingsPerCombination = {
    baseAttributes: { ...settings_baseAttributes }, // object shape performance optimization
    modifiers,
    relevantConditions: settings_relevantConditions,
    disableCondiResultCache: settings_disableCondiResultCache,
    appliedModifiers,
  };

  return settings;
}
