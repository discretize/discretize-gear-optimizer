/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
/* eslint-disable dot-notation */

import type {
  AttributeKey,
  AttributePointMode,
  CalculationTweaks,
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
} from '../../assets/modifierdata/metadata';
import {
  allAttributeCoefficientKeys,
  allAttributePercentKeys,
  allAttributePointKeys,
  allConversionAfterBuffsSourceKeys,
} from '../../assets/modifierdata/metadata';
import type { AffixName, ForcedSlotName, GearAttributeName } from '../../utils/gw2-data';
import {
  allSlotData,
  Classes,
  conditionData,
  damagingConditions,
  forcedSlotNames,
  MAX_INFUSIONS,
  Affix as rawAffix,
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
  AppliedModifier,
  DamageMultiplier,
  DamageMultiplierBreakdown,
  DistributionNameUI,
  Modifiers,
  MultiplierName,
} from './types/optimizerSetupTypes';
import type {
  OptimizerCoreSettings,
  OptimizerCoreSettingsPerCalculation,
  OptimizerCoreSettingsPerCombination,
  Scenario,
  ScenarioTemplate,
} from './types/optimizerTypes';
import { clamp, cloneScenarioTemplate, scaleValue } from './utils/utils';

type CollectedAttributeModifiers = Partial<Record<AttributeKey, number>>;

type CollectedConversionValue = Partial<Record<ConversionSourceKey, number>>;
type CollectedConversionModifers = Partial<
  Record<ConversionDestinationKey, CollectedConversionValue>
>;

type CollectedConversionAfterBuffsValue = Partial<Record<ConversionAfterBuffsSourceKey, number>>;
type CollectedConversionAfterBuffsModifers = Partial<
  Record<ConversionAfterBuffsDestinationKey, CollectedConversionAfterBuffsValue>
>;

interface CollectedModifiers {
  buff: CollectedAttributeModifiers;
  convert: CollectedConversionModifers;
  convertAfterBuffs: CollectedConversionAfterBuffsModifers;
}

export function setupCombinations(reduxState: RootState) {
  console.groupCollapsed('Debug Info:');
  console.log('Redux State:', reduxState.optimizer);

  const settingsPerCalculation = createSettingsPerCalculation(reduxState);
  console.log('settings per calculation', settingsPerCalculation);

  const data = getExtrasCombinationsAndModifiers(reduxState).map((extrasCombinationEntry, i) => {
    const { extrasCombination, extrasModifiers } = extrasCombinationEntry;

    const settingsPerCombination = createSettingsPerCombination(reduxState, extrasModifiers);
    const unbuffedSettings = createSettingsPerCombination(reduxState, extrasModifiers, true);

    const settings = {
      ...settingsPerCalculation,
      ...settingsPerCombination,
      unbuffedBaseAttributes: unbuffedSettings.scenarios[0].baseAttributes,
      unbuffedModifiers: unbuffedSettings.scenarios[0].modifiers,
      extrasCombination,
    };

    console.log(`combination ${i}:`, {
      settingsPerCombination,
      unbuffedBaseAttributes: unbuffedSettings.scenarios[0].baseAttributes,
      unbuffedModifiers: unbuffedSettings.scenarios[0].modifiers,
      extrasCombination,
      extrasModifiers,
    });

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

  const customAffixData = getCustomAffixData(reduxState);

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
  const rawInfusionOptions = getValidInfusionOptions(reduxState);
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

  const rawMaxInfusions = parseInfusionCount(maxInfusionsText).value;

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

  const maxInfusions: OptimizerCoreSettings['maxInfusions'] = clamp(
    rawMaxInfusions,
    0,
    MAX_INFUSIONS,
  );

  const infusionOptions = rawInfusionOptions.map(({ type, count }) => ({
    type,
    count: clamp(parseInfusionCount(count).value, 0, MAX_INFUSIONS),
  }));

  const totalSelectedInfusions = infusionOptions.reduce((prev, cur) => prev + cur.count, 0);

  // currently unimplemented setting
  const infusionNoDuplicates = false;

  let infusionMode: OptimizerCoreSettings['infusionMode'] = 'None';
  switch (rawInfusionOptions.length) {
    case 0:
      infusionMode = 'None';
      break;
    case 1:
      infusionMode = 'Primary';
      break;
    default:
      if (totalSelectedInfusions <= maxInfusions) {
        infusionMode = 'Few';
      } else {
        infusionMode = infusionNoDuplicates ? 'SecondaryNoDuplicates' : 'Secondary';
      }
  }

  /* Equipment */

  const Affix: typeof rawAffix = {
    ...rawAffix,
    Custom: customAffixData,
  };

  const slotData = allSlotData[weaponType];
  const slots = slotData.length;

  // affixesArray: valid affixes for each slot, taking forced slots into account
  // e.g. [[Berserker, Assassin], [Assassin], [Berserker, Assassin]...]
  const orderedAffixesArray = new Array(slots).fill(affixes) as (typeof affixes)[];

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

  const arrayEntriesDeepEqual = (arr: unknown[]) =>
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
    const slotIndexes = slotNames.map((slotName) => forcedSlotNames.indexOf(slotName));

    const slotAffixesArrays = slotIndexes.map((index) => orderedAffixesArray[index]);
    const slotAffixesArraysIdentical = arrayEntriesDeepEqual(slotAffixesArrays);

    const slotRarities = slotIndexes.map((index) => Object.values(exotics).map((e) => e[index]));
    const slotRaritiesIdentical = arrayEntriesDeepEqual(slotRarities);

    return slotAffixesArraysIdentical && slotRaritiesIdentical;
  };

  const identicalArmor = slotSettingsIdentical(['shld', 'glov', 'boot']);
  const identicalRing = slotSettingsIdentical(['rng1', 'rng2']);
  const identicalAcc = slotSettingsIdentical(['acc1', 'acc2']);
  const identicalWep = slotSettingsIdentical(['wep1', 'wep2']);

  // rearrange affixes so you don't always start with e.g. full berserker. Example:
  // [vipe sini grie] helm
  // [grie vipe sini] shld
  // [sini grie vipe] coat
  // [vipe]           glov (forced to viper)
  // [grie vipe sini] legs
  // ...
  const affixesArray = orderedAffixesArray.map((affixOptions, slotindex) => {
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
  const affixStatsArray: OptimizerCoreSettings['affixStatsArray'] = affixesArray.map(
    (possibleAffixes, slotindex) =>
      possibleAffixes.map((affix) => {
        const statTotals: Partial<Record<GearAttributeName, number>> = {};
        const item = exotics?.[affix]?.[slotindex]
          ? slotData[slotindex].exo
          : slotData[slotindex].asc;
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
  let jsHeuristicsData: [GearAttributeName, number][][] | undefined;
  try {
    jsHeuristicsData = affixes.map((forcedAffix) => {
      const statTotals: Partial<Record<GearAttributeName, number>> = {};
      affixesArray.forEach((possibleAffixes, slotindex) => {
        if (!possibleAffixes.includes(forcedAffix) && possibleAffixes.length !== 1) {
          throw new Error();
        }
        const affix = possibleAffixes.includes(forcedAffix) ? forcedAffix : possibleAffixes[0];

        const item = exotics?.[affix]?.[slotindex]
          ? slotData[slotindex].exo
          : slotData[slotindex].asc;
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
  const runsAfterThisSlot: OptimizerCoreSettings['runsAfterThisSlot'] = [];
  for (let index = 0; index < affixesArray.length; index++) {
    let counter = 1;
    for (const affixOptions of affixesArray.slice(index)) {
      counter *= affixOptions.length;
    }

    runsAfterThisSlot.push(counter);
  }

  runsAfterThisSlot.push(1);

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
    maxInfusions,
    infusionOptions,
    infusionMode,
    slots,
    affixesArray,
    identicalArmor,
    identicalRing,
    identicalAcc,
    identicalWep,
    affixStatsArray,
    runsAfterThisSlot,
    gameMode,
    affixes,
    jsHeuristicsData,
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
  const distribution = getDistributionNew(reduxState);

  const gameMode = getGameMode(reduxState);
  const isWvW = gameMode === 'wvw';

  // todo: consolidate error handling
  if (profession === '') {
    throw new Error('missing profession!');
  }

  /* Base Attributes */

  const baseAttributes: Scenario['baseAttributes'] = {
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

    'Power Coefficient': distribution.Power,
    'Power2 Coefficient': distribution.Power2,
    'Burning Coefficient': distribution.Burning,
    'Bleeding Coefficient': distribution.Bleeding,
    'Poison Coefficient': distribution.Poisoned, // renamed
    'Torment Coefficient': distribution.Torment,
    'Confusion Coefficient': distribution.Confusion,

    'Flat DPS': 0,
  };

  if (profession === 'Mesmer') {
    baseAttributes['Clone Critical Chance'] = 0.05;
    baseAttributes['Phantasm Critical Chance'] = 0.05;
    baseAttributes['Phantasm Critical Damage'] = 1.5;
  }

  /* Set Up Scenarios */

  // simulate scenarios with/without each of these, according to their uptime.
  const advancedUptimeModifiers = appliedModifiers.filter(
    (appliedModifier) => appliedModifier.amountData?.advancedUptimeSimulation,
  );
  // apply these to all scenarios.
  const basicModifiers = appliedModifiers.filter(
    (appliedModifier) => !advancedUptimeModifiers.includes(appliedModifier),
  );

  // Modifiers with the same category AND same group are simulated as always overlapping.
  // (They must have the same uptime.)

  // Modifiers with the same category in a different group (i.e. different revenant legends)
  // are simulated as never overlapping.
  // (They must have uptimes that sum to ≤1.)

  // Calculate advanced uptime modifier uptimes and discard their amount data;
  // within scenarios, they are 100% effective.
  // Sort them by correlation category and group.
  const categoryData: {
    category?: string;
    groupData: {
      group?: string;
      modifiers: AppliedModifier[];
      uptime: number;
    }[];
  }[] = [];
  advancedUptimeModifiers.forEach((advancedUptimeModifier) => {
    const { amount: amountText, amountData } = advancedUptimeModifier;
    const { value: amountInput } = parseAmount(amountText);
    const uptime = clamp(scaleValue(1, amountInput, amountData), 0, 1);

    if (uptime === 0) return;

    const { amountData: _, ...modifierWithoutAmountData } = advancedUptimeModifier;

    const { correlation } = advancedUptimeModifier.amountData!.advancedUptimeSimulation!;
    if (!correlation) {
      categoryData.push({
        groupData: [{ modifiers: [modifierWithoutAmountData], uptime }],
      });
    } else {
      let categoryDataEntry = categoryData.find(
        ({ category }) => correlation.category === category,
      );
      if (!categoryDataEntry) {
        categoryDataEntry = {
          category: correlation.category,
          groupData: [],
        };
        categoryData.push(categoryDataEntry);
      }

      const { groupData } = categoryDataEntry;

      let groupDataEntry = groupData.find(({ group }) => correlation.group === group);
      if (!groupDataEntry) {
        groupDataEntry = {
          group: correlation.group,
          modifiers: [],
          uptime,
        };
        groupData.push(groupDataEntry);
      }

      if (groupDataEntry.uptime !== uptime) {
        throw new Error(
          `Mismatched uptime chosen for correlated advanced uptime modifiers ${[advancedUptimeModifier, ...groupDataEntry.modifiers].map(({ id }) => id).join('/')}!`,
        );
      }

      groupDataEntry.modifiers.push(modifierWithoutAmountData);
    }
  });

  // add empty group if needed so that group uptimes sum to 100%
  categoryData.forEach(({ groupData: byGroup }) => {
    const categoryTotalUptime = byGroup.reduce((prev, cur) => prev + cur.uptime, 0);

    if (Math.abs(categoryTotalUptime - 1) <= 4 * Number.EPSILON) {
      return;
    }
    if (categoryTotalUptime - 1 >= 4 * Number.EPSILON) {
      throw new Error(
        `More than 100% total uptime chosen for correlated advanced uptime modifiers ${byGroup
          .map(({ modifiers }) => modifiers)
          .flat()
          .map(({ id }) => id)
          .join('/')}!`,
      );
    }
    byGroup.push({ modifiers: [], uptime: 1 - categoryTotalUptime });
  });

  // Create scenarios for every combination of active/inactive for every advanced uptime modifier
  let scenarioTemplates: ScenarioTemplate[] = [
    { fraction: 1, baseAttributes, appliedModifiers: basicModifiers },
  ];
  categoryData.forEach(({ groupData }) => {
    // Yes, each category multiplies the number of scenarios by at least two.
    // Sure hope anet doesn't add a lot of modifiers that need this feature!
    scenarioTemplates = scenarioTemplates
      .map((scenarioTemplate) =>
        groupData.map(({ modifiers, uptime }) => {
          const template = cloneScenarioTemplate(scenarioTemplate);
          template.fraction *= uptime;
          template.appliedModifiers.push(...modifiers);
          return template;
        }),
      )
      .flat();
  });

  console.log('scenario templates', scenarioTemplates);

  /* Calculate Scenario Modifiers */

  // variables shared between scenarios
  const extraRelevantConditions = Object.fromEntries(
    Object.keys(conditionData).map((condition) => [condition, false]),
  );
  const allCalculationTweaks: CalculationTweaks = {};

  const scenarios: Scenario[] = scenarioTemplates.map((scenarioTemplate) => {
    const modifiers = calculateScenarioModifiers(
      scenarioTemplate,
      simulateUnbuffed,
      isWvW,
      extraRelevantConditions,
      allCalculationTweaks,
    );

    return {
      fraction: scenarioTemplate.fraction,
      baseAttributes: { ...scenarioTemplate.baseAttributes },
      modifiers,
    };
  });

  console.log('scenarios', scenarios);

  /* Relevant Conditions + Condi Caching Toggle */

  const relevantConditions: OptimizerCoreSettings['relevantConditions'] = damagingConditions.filter(
    (condition) =>
      (baseAttributes[`${condition} Coefficient`] ?? 0) > 0 || extraRelevantConditions[condition],
  );

  // the condi result cache assumes the same cdmg + expertise values produce the same condition damage;
  // disable it if any condition coefficients are the result of a conversion or if conditions scale in unusual ways
  const disableCondiResultCache: OptimizerCoreSettings['disableCondiResultCache'] =
    Object.values(extraRelevantConditions).some(Boolean) ||
    !!allCalculationTweaks.infernoBurningDamage;

  const settings: OptimizerCoreSettingsPerCombination = {
    baseAttributes, // not used after scenarios update; left for things like unbuffed calc
    modifiers: scenarios[0].modifiers, // not used after scenarios update; left for things like unbuffed calc
    scenarios,
    relevantConditions,
    disableCondiResultCache,
    appliedModifiers,
    calculationTweaks: allCalculationTweaks,
  };

  return settings;
}

const calculateScenarioModifiers = (
  scenarioTemplate: ScenarioTemplate,
  simulateUnbuffed: boolean,
  isWvW: boolean,
  extraRelevantConditions: Record<string, boolean>,
  allCalculationTweaks: object,
) => {
  const { baseAttributes, appliedModifiers } = scenarioTemplate;

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
  const makeConditionsRelevant = (attribute: string) => {
    const condition = attribute.replace(' Coefficient', '');
    if (extraRelevantConditions[condition] !== undefined) {
      extraRelevantConditions[condition] = true;
    }
  };

  for (const item of appliedModifiers) {
    const {
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
      calculationTweaks = {},
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
            attribute satisfies never;
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
              baseAttributes[attribute] = (baseAttributes[attribute] || 0) + scaledAmount;
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
        baseAttributes[attribute] = (baseAttributes[attribute] || 0) + scaledAmount;
      } else if (enumArrayIncludes(allAttributePercentKeys, attribute)) {
        // percent, i.e.
        //   Torment Duration: 15%

        const value: string = Array.isArray(allPairs) ? allPairs[0] : allPairs;
        const scaledAmount = scaleValue(parsePercent(value), amountInput, amountData);
        // unconfirmed if +max health mods are mult but ¯\_(ツ)_/¯
        // +outgoing healing is assumed additive
        if (attribute === 'Maximum Health') {
          baseAttributes[attribute] =
            ((baseAttributes[attribute] || 0) + 1) * (1 + scaledAmount) - 1;
        } else {
          baseAttributes[attribute] = (baseAttributes[attribute] || 0) + scaledAmount;
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
      baseAttributes[attribute] ??= 0;

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

    Object.assign(allCalculationTweaks, calculationTweaks);
  }

  const damageMultiplier = {} as DamageMultiplier;
  const damageMultiplierBreakdown = {} as DamageMultiplierBreakdown;

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

  return modifiers;
};

/*
  const relevantConditions: OptimizerCoreSettings['relevantConditions'] = damagingConditions.filter(
    (condition) =>
      (baseAttributes[`${condition} Coefficient`] ?? 0) > 0 || extraRelevantConditions[condition],
  );

  // the condi result cache assumes the same cdmg + expertise values produce the same condition damage;
  // disable it if any condition coefficients are the result of a conversion or if conditions scale in unusual ways
  const disableCondiResultCache: OptimizerCoreSettings['disableCondiResultCache'] =
    Object.values(extraRelevantConditions).some(Boolean) ||
    !!allCalculationTweaks.infernoBurningDamage;

  const settings: OptimizerCoreSettingsPerCombination = {
    baseAttributes: { ...baseAttributes }, // object shape performance optimization
    modifiers,
    relevantConditions,
    disableCondiResultCache,
    appliedModifiers,
    calculationTweaks: allCalculationTweaks,
  };

  return settings;
};
*/
