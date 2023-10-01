/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
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
import type { AffixData, AffixName, ConditionName, ForcedSlotName } from '../../utils/gw2-data';
import {
  Attributes,
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
  parseAmount,
  parseBoss,
  parseInfusionCount,
  parsePriority,
} from '../../utils/usefulFunctions';
import type { OptimizerCoreSettings } from '../optimizer/optimizerCore';
import { clamp, scaleValue } from '../optimizer/optimizerCore';
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
  getPrimaryInfusion,
  getPrimaryMaxInfusions,
  getSecondaryInfusion,
  getSecondaryMaxInfusions,
} from '../slices/infusions';
import {
  getAffixes,
  getCustomAffixData,
  getExclusionData,
  getExoticsData,
  getOptimizeFor,
  getConstraint,
  getWeaponType,
} from '../slices/priorities';
import { getSkillsModifiers } from '../slices/skills';
import { getCurrentSpecialization, getTraitsModifiers } from '../slices/traits';
import { getGameMode } from '../slices/userSettings';
import type { RootState } from '../store';

// currently a duplicate of navsettings.jsx
export type GameMode = 'fractals' | 'raids' | 'wvw';

export interface Combination {
  baseAttributes: OptimizerCoreSettings['baseAttributes'];
  modifiers: Modifiers;
  relevantConditions: ConditionName[];
  disableCondiResultCache: boolean;
}

export type Settings = Omit<
  OptimizerCoreSettings,
  | 'baseAttributes'
  | 'modifiers'
  | 'runsAfterThisSlot'
  | 'appliedModifiers'
  | 'cachedFormState'
  | 'extrasCombination'
  | 'relevantConditions'
  | 'disableCondiResultCache'
>;

// export type Settings = _Settings & {
//   extras: {
//     ids: number[][];
//     modifiers: {
//       id: any;
//       modifiers: any;
//       amount: number;
//     }[];
//   };
// };

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
  visible?: boolean;
  enabled?: boolean;
  amount?: string;
  modifiers: YamlModifiers;
  wvwModifiers?: YamlModifiers;
  amountData?: AmountData;
  // },
}

// todo: move these; they should be synchronized with ../../assets/modifierdata/metadata.js and
// ../../components/sections/distribution/DamageDistribution.jsx
// (unsure how that would best be done)
type DistributionNameUI =
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
}
export type DamageMultiplierBreakdown = Partial<Record<MultiplierName, MultiplierBreakdown>>;
export interface Modifiers {
  damageMultiplier: Record<string, number>;
  buff: [string, number][];
  convert: [string, [string, number][]][];
  convertAfterBuffs: [string, [string, number][]][];
}

export type InfusionMode = 'None' | 'Primary' | 'Few' | 'Secondary' | 'SecondaryNoDuplicates';

export interface CachedFormState {
  traits: Record<string, any>;
  skills: Record<string, any>;
  extras: Record<string, any>;
  buffs: Record<string, any>;
}

export interface ResultData {
  extrasModifiers: AppliedModifier[];
  extrasCombination: Record<string, string>;
}

export function setupNormal(reduxState: RootState): [Combination[], ResultData[]] {
  // do not mutate selector result; it may be reused if the same calculation is run twice
  const extrasCombinationEntries = getExtrasCombinationsAndModifiers(reduxState).map(
    (combination) => ({ ...combination }),
  );

  const resultData = extrasCombinationEntries.map((entry) => ({
    extrasModifiers: entry.extrasModifiers,
    extrasCombination: entry.extrasCombination,
  }));

  const combinations = extrasCombinationEntries.map(({ extrasModifiers }) =>
    createCombination(extrasModifiers, reduxState),
  );

  return [combinations, resultData];
}

export function createCombination(
  extrasModifiers: AppliedModifier[],
  reduxState: RootState,
): Combination {
  const profession = getProfession(reduxState);
  if (profession === '') {
    throw new Error('missing profession!');
  }
  const unmodifiedDistribution = getDistributionNew(reduxState);
  // temp: convert "poisoned" to "poison"
  const convertPoison = (dist: Record<DistributionNameUI, number>) =>
    mapEntries(dist, ([key, value]) => [key === 'Poisoned' ? 'Poison' : key, value]);
  const distribution = convertPoison(unmodifiedDistribution);

  const gameMode = getGameMode(reduxState) as GameMode;
  const isWvW = gameMode === 'wvw';

  const sharedModifiers = [
    ...(getBuffsModifiers(reduxState) || []),
    ...(getExtraModifiersModifiers(reduxState) || []),
    ...(getInfusionsModifiers(reduxState) || []),
    ...(getSkillsModifiers(reduxState) || []),
    ...(getTraitsModifiers(reduxState) || []),
  ];

  const appliedModifiers = [...sharedModifiers, ...extrasModifiers];

  /* Base Attributes */

  const settings_baseAttributes: OptimizerCoreSettings['baseAttributes'] = {};
  settings_baseAttributes.Health = Classes[profession].health;
  settings_baseAttributes.Armor = Classes[profession].defense;

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

  if (profession === 'Mesmer') {
    settings_baseAttributes['Clone Critical Chance'] = 0.05;
    settings_baseAttributes['Phantasm Critical Chance'] = 0.05;
    settings_baseAttributes['Phantasm Critical Damage'] = 1.5;
  }

  for (const [key, value] of Object.entries(distribution)) {
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
  const makeConditionsRelevant = (attribute: string) => {
    const condition = attribute.replace(' Coefficient', '');
    if (extraRelevantConditions[condition] !== undefined) {
      extraRelevantConditions[condition] = true;
    }
  };

  for (const item of appliedModifiers) {
    const {
      id = '[no id]',
      visible = true,
      enabled = true,
      amount: amountText,
      // data: {
      modifiers,
      wvwModifiers,
      amountData,
      // },
    } = item;

    const {
      damage = {},
      attributes = {},
      conversion = {},
      conversionAfterBuffs = {},
      // note,
      // ...otherModifiers
    } = isWvW ? wvwModifiers ?? modifiers : modifiers;

    if (!visible || !enabled) {
      continue;
    }

    const { value: amountInput } = parseAmount(amountText);

    for (const [attribute, allPairs] of Object.entries(damage) as [DamageKey, DamageValue][]) {
      // damage, i.e.
      //   Outgoing Strike Damage: [3%, add, 7%, mult]

      const allPairsMut = [...allPairs];
      while (allPairsMut.length) {
        const pairs = allPairsMut.splice(0, 2);
        const [percentAmount, addOrMult] = pairs as any as [string, DamageMode];

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

        const allPairsMut = [...(allPairs as any[])];
        while (allPairsMut.length) {
          const pairs = allPairsMut.splice(0, 2);
          const [amount, convertedOrBuff] = pairs as any as [number, AttributePointMode];

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
                (collectedModifiers['buff'][attribute] || 0) + scaledAmount;
              break;
          }
        }
      } else if (enumArrayIncludes(allAttributeCoefficientKeys, attribute)) {
        // coefficient, i.e.
        //   Power Coefficient: 69.05

        const value = Array.isArray(allPairs) ? allPairs[0] : allPairs;
        const scaledAmount = scaleValue(value as number, amountInput, amountData);
        settings_baseAttributes[attribute] =
          (settings_baseAttributes[attribute] || 0) + scaledAmount;
      } else if (enumArrayIncludes(allAttributePercentKeys, attribute)) {
        // percent, i.e.
        //   Torment Duration: 15%

        const value = Array.isArray(allPairs) ? allPairs[0] : allPairs;
        const scaledAmount = scaleValue(parsePercent(value as string), amountInput, amountData);
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
          (collectedModifiers['convert'][attribute]![source] || 0) + scaledAmount;
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
          (collectedModifiers['convertAfterBuffs'][attribute]![source] || 0) + scaledAmount;
      }
    }
  }

  const damageMultiplier: Record<string, number> = {};
  const damageMultiplierBreakdown: DamageMultiplierBreakdown = {};

  Object.keys(initialMultipliers).forEach((attr) => {
    const attribute = attr as keyof typeof initialMultipliers;

    damageMultiplier[attribute] =
      allDmgMult.mult[attribute] * allDmgMult.add[attribute] * allDmgMult.target[attribute];

    damageMultiplierBreakdown[attribute] = {
      mult: allDmgMult.mult[attribute],
      add: allDmgMult.add[attribute],
      target: allDmgMult.target[attribute],
    };
  });

  // convert modifiers to arrays for simpler iteration
  const buff = Object.entries(collectedModifiers['buff']);
  const convert = Object.entries(collectedModifiers['convert']).map(
    ([attribute, conversion]) =>
      [attribute, Object.entries(conversion)] as [string, [string, number][]],
  );
  const convertAfterBuffs = Object.entries(collectedModifiers['convertAfterBuffs']).map(
    ([attribute, conversion]) =>
      [attribute, Object.entries(conversion)] as [string, [string, number][]],
  );

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

  const modifiers: Modifiers = {
    damageMultiplier,
    buff,
    convert,
    convertAfterBuffs,
  };

  return {
    modifiers,
    baseAttributes: settings_baseAttributes,
    relevantConditions: settings_relevantConditions,
    disableCondiResultCache: settings_disableCondiResultCache,
  };
}

export function createSettings(reduxState: RootState): Settings {
  const specialization: string = getCurrentSpecialization(reduxState);

  const customAffixData: Omit<typeof unmodifiedAffix.Custom, 'category'> =
    getCustomAffixData(reduxState);

  // display extras in table if they have multiple options
  const shouldDisplayExtras = mapValues(
    getExtrasIds(reduxState),
    (ids) => Array.isArray(ids) && ids.length > 1,
  );

  const profession = getProfession(reduxState);
  const primaryInfusion = getPrimaryInfusion(reduxState);
  const secondaryInfusion = getSecondaryInfusion(reduxState);
  const maxInfusionsText = getMaxInfusions(reduxState);
  const primaryMaxInfusionsText = getPrimaryMaxInfusions(reduxState);
  const secondaryMaxInfusionsText = getSecondaryMaxInfusions(reduxState);
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
  const primaryMaxInfusions = parseInfusionCount(primaryMaxInfusionsText).value;
  const secondaryMaxInfusions = parseInfusionCount(secondaryMaxInfusionsText).value;

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

  const primaryMaxInfusionsInput = clamp(primaryMaxInfusions, 0, settings_maxInfusions);
  const secondaryMaxInfusionsInput = clamp(secondaryMaxInfusions, 0, settings_maxInfusions);

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
  if (primaryInfusion) {
    if (validInfusionStats.has(primaryInfusion)) {
      activeInfusions++;
      settings_primaryInfusion = primaryInfusion;
      settings_primaryMaxInfusions = primaryMaxInfusionsInput;
    } else {
      throw new Error(
        `Primary infusion can only increase primary, secondary or derived attributes, not ${primaryInfusion}`,
      );
    }
  }

  if (secondaryInfusion && secondaryInfusion !== primaryInfusion) {
    if (validInfusionStats.has(secondaryInfusion)) {
      activeInfusions++;
      if (activeInfusions === 2) {
        settings_secondaryInfusion = secondaryInfusion;
        settings_secondaryMaxInfusions = secondaryMaxInfusionsInput;
      } else {
        // only secondary is selected; pretend secondary is primary
        settings_primaryInfusion = secondaryInfusion;
        settings_primaryMaxInfusions = secondaryMaxInfusionsInput;
      }
    } else {
      throw new Error(
        `Secondary infusion can only increase primary, secondary or derived attributes, not ${secondaryInfusion}`,
      );
    }
  }

  // currently unimplemented setting
  const infusionNoDuplicates = false;

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

  const Affix: typeof unmodifiedAffix = {
    ...unmodifiedAffix,
    Custom: { ...unmodifiedAffix.Custom, ...customAffixData },
  };

  const settings_slots = Slots[weaponType];

  // affixesArray: valid affixes for each slot, taking forced slots into account
  // e.g. [[Berserker, Assassin], [Assassin], [Berserker, Assassin]...]
  let settings_affixesArray: OptimizerCoreSettings['affixesArray'] = new Array(
    settings_slots.length,
  ).fill(affixes);

  forcedSlots.forEach((forcedAffix, index) => {
    if (forcedAffix || Object.values(exclusions).some((arr) => arr[index])) {
      if (forcedAffix) {
        settings_affixesArray[index] = [forcedAffix];
      } else {
        const filtered = settings_affixesArray[index].filter(
          (affix) => !exclusions?.[affix]?.[index],
        );
        if (filtered.length) {
          settings_affixesArray[index] = filtered;
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

    const slotAffixesArrays = slotIndexes.map((index) => settings_affixesArray[index]);
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
  settings_affixesArray = settings_affixesArray.map((affixOptions, slotindex) => {
    if (affixOptions.length === 1) {
      return affixOptions;
    }
    const result: AffixName[] = [];
    affixOptions.forEach((affix, index) => {
      result[(index + slotindex) % affixOptions.length] = affix;
    });
    return result;
  });

  // like affixesArray, but each entry is an array of arrays of stats given by that piece with
  // that affix
  // e.g. berserker helm -> [[Power, 63],[Precision, 45],[Ferocity, 45]]
  const settings_affixStatsArray: OptimizerCoreSettings['affixStatsArray'] =
    settings_affixesArray.map((possibleAffixes, slotindex) =>
      possibleAffixes.map((affix) => {
        const statTotals: Record<string, number> = {};
        const item = exotics?.[affix]?.[slotindex]
          ? settings_slots[slotindex].exo
          : settings_slots[slotindex].asc;
        const bonuses = Object.entries(item[Affix[affix].type]) as [
          keyof AffixData['bonuses'],
          number,
        ][];
        for (const [type, bonus] of bonuses) {
          for (const stat of Affix[affix].bonuses[type] ?? []) {
            statTotals[stat] = (statTotals[stat] || 0) + bonus;
          }
        }

        return Object.entries(statTotals);
      }),
    );

  const settings: Settings = {
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
    shouldDisplayExtras,
    distribution,
    maxInfusions: settings_maxInfusions,
    primaryInfusion: settings_primaryInfusion,
    primaryMaxInfusions: settings_primaryMaxInfusions,
    secondaryInfusion: settings_secondaryInfusion,
    secondaryMaxInfusions: settings_secondaryMaxInfusions,
    infusionMode: settings_infusionMode,
    slots: settings_slots.length,
    affixesArray: settings_affixesArray,
    identicalArmor: settings_identicalArmor,
    identicalRing: settings_identicalRing,
    identicalAcc: settings_identicalAcc,
    identicalWep: settings_identicalWep,
    affixStatsArray: settings_affixStatsArray,
    gameMode,
  };

  return settings;
}
