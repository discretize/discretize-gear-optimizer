/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-case-declarations */
/* eslint-disable no-console */
/* eslint-disable dot-notation */

import { allAttributePointKeys } from '../../assets/modifierdata/metadata';
import type {
  AffixName,
  AttributeName,
  ConditionName,
  DamagingConditionName,
  IndicatorName,
  InfusionName,
  ProfessionName,
  WeaponHandednessType,
} from '../../utils/gw2-data';
import {
  INFUSION_BONUS,
  conditionData,
  conditionDataWvW,
  damagingConditions,
  indicatorAttributes,
} from '../../utils/gw2-data';
import { enumArrayIncludes, objectEntries, objectKeys } from '../../utils/usefulFunctions';
import type { ExtrasCombination, ShouldDisplayExtras } from '../slices/extras';
import type { GameMode } from '../slices/userSettings';
import { iteratePartitions } from './combinatorics';
import type {
  AppliedModifier,
  CachedFormState,
  DamageMultiplier,
  DistributionNameInternal,
  InfusionMode,
  Modifiers,
} from './optimizerSetup';

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
export function scaleValue(
  value: number,
  amountInput?: number | null,
  amountData?: { default: number; quantityEntered: number },
): number {
  return amountData
    ? (value * (amountInput ?? amountData.default)) / amountData.quantityEntered
    : value;
}

/**
 * Rounds, tie-breaking exact halves to the nearest even integer. Apparently used by GW2
 * conversions according to ingame testing by Cat.
 * https://discord.com/channels/301270513093967872/842629146857177098/864564894128275468
 *
 * @param {number} number
 * @returns {number} result - the input number rounded to the nearest integer
 */
const roundEven = (number: number): number => {
  if (number % 1 === 0.5) {
    const floor = Math.floor(number);
    if (floor % 2 === 0) {
      return floor;
    }

    return floor + 1;
  }

  return Math.round(number);
};

export const clamp = (input: number, min: number, max: number): number => {
  if (input < min) return min;
  if (input > max) return max;
  return input;
};

const roundOne = (num: number) => Math.round(num * 10) / 10;

/*
 * ------------------------------------------------------------------------
 * Core Optimizer Logic
 * ------------------------------------------------------------------------
 */

// settings that do not vary based on extras combination
export interface OptimizerCoreSettingsPerCalculation {
  // these are direct copies or slight modifications of OptimizerInput
  profession: ProfessionName;
  specialization: string;
  weaponType: WeaponHandednessType;
  forcedAffixes: (AffixName | null)[]; // array of specific affix names for each slot, or '' for unspecfied
  rankby: IndicatorName;
  minBoonDuration: number | undefined;
  minHealingPower: number | undefined;
  minToughness: number | undefined;
  maxToughness: number | undefined;
  minHealth: number | undefined;
  minCritChance: number | undefined;
  minDamage: number | undefined;
  minHealing: number | undefined;
  minOutgoingHealing: number | undefined;
  minQuicknessDuration: number | undefined;
  minSurvivability: number | undefined;
  maxResults: number;
  infusionOptions: { type: InfusionName; count: number }[];
  maxInfusions: number;
  distribution: Record<DistributionNameInternal, number>;
  attackRate: number;
  movementUptime: number;
  gameMode: GameMode;

  // these are in addition to the input
  infusionMode: InfusionMode;
  identicalRing: boolean;
  identicalAcc: boolean;
  identicalWep: boolean;
  identicalArmor: boolean;
  slots: number; // The length of the former slots array
  runsAfterThisSlot: number[];
  affixesArray: AffixName[][];
  affixStatsArray: [AttributeName, number][][][];

  affixes: AffixName[];
  jsHeuristicsData?: [AttributeName, number][][];

  shouldDisplayExtras: ShouldDisplayExtras;
  cachedFormState: CachedFormState;
}

export type AttributesInternal = Float64Array;
export type Attributes = Record<AttributeName, number>;

export const ATTR_COUNT = 107;

const REVERSE_KEY = [
  'Power',
  'Precision',
  'Toughness',
  'Vitality',

  'Ferocity',
  'Condition Damage',
  'Expertise',
  'Concentration',
  'Healing Power',
  'Agony Resistance',

  'Critical Chance',
  'Critical Damage',
  'Condition Duration',
  'Condition Duration Uncapped',
  'Boon Duration',
  'Health',
  'Armor',

  'Aegis Duration',
  'Fury Duration',
  'Might Duration',
  'Protection Duration',
  'Quickness Duration',
  'Alacrity Duration',
  'Regeneration Duration',
  'Resistance Duration',
  'Resolution Duration',
  'Stability Duration',
  'Swiftness Duration',
  'Vigor Duration',

  'Bleeding Duration',
  'Blind Duration',
  'Burning Duration',
  'Chilled Duration',
  'Confusion Duration',
  'Crippled Duration',
  'Fear Duration',
  'Immobile Duration',
  'Poison Duration',
  'Slow Duration',
  'Taunt Duration',
  'Torment Duration',
  'Vulnerability Duration',
  'Weakness Duration',

  'Bleeding Coefficient',
  'Burning Coefficient',
  'Confusion Coefficient',
  'Poison Coefficient',
  'Torment Coefficient',

  'Bleeding Damage Tick',
  'Burning Damage Tick',
  'Confusion Damage Tick',
  'Poison Damage Tick',
  'Torment Damage Tick',

  'Effective Power',
  'Effective Health',
  'Effective Healing',

  'Damage',
  'Survivability',
  'Healing',

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

  'Clone Critical Chance',
  'Phantasm Critical Chance',
  'Phantasm Critical Damage',
  'Phantasm Effective Power',

  'Siphon Coefficient',
  'Siphon Base Coefficient',
  'Siphon DPS',

  'Maximum Health',
  'Outgoing Healing',
  'Damage Reduction',
  'Power Coefficient',
  'NonCrit Power Coefficient',
  'Power2 DPS',
  'Power2 Coefficient',
  'Flat DPS',
  'Power DPS',
  'Player Critical Damage',

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

export const KEY = Object.fromEntries(REVERSE_KEY.map((value, i) => [value, i]));

// settings that **do** vary based on extras combination
export interface OptimizerCoreSettingsPerCombination {
  baseAttributes: AttributesInternal;
  modifiers: Modifiers;
  disableCondiResultCache: boolean;
  relevantConditions: DamagingConditionName[];
  appliedModifiers: AppliedModifier[];
}

export type OptimizerCoreSettings = OptimizerCoreSettingsPerCalculation &
  OptimizerCoreSettingsPerCombination & {
    unbuffedBaseAttributes?: AttributesInternal;
    unbuffedModifiers?: Modifiers;
    extrasCombination: ExtrasCombination;
  };

export type OptimizerCoreMinimalSettings = Pick<
  OptimizerCoreSettings,
  | 'cachedFormState'
  | 'profession'
  | 'specialization'
  | 'weaponType'
  | 'appliedModifiers'
  | 'rankby'
  | 'shouldDisplayExtras'
  | 'extrasCombination'
  | 'modifiers'
  | 'gameMode'
>;
export type Gear = AffixName[];
export type GearStats = Partial<Record<AttributeName, number>>;
interface CoefficientHelperValue {
  slope: number;
  intercept: number;
}
type EffectiveDistributionKey = DistributionNameInternal | 'Siphon';
type GainLossKey = 'Power' | 'Precision' | 'Ferocity' | 'Condition Damage' | 'Expertise';
interface Results {
  value: number;
  indicators: Record<IndicatorName, number>;
  effectivePositiveValues?: Partial<Record<GainLossKey, number>>;
  effectiveNegativeValues?: Partial<Record<GainLossKey, number>>;
  effectiveDamageDistribution?: Partial<Record<EffectiveDistributionKey, string | number>>;
  damageBreakdown?: Partial<Record<EffectiveDistributionKey, number>>;
  coefficientHelper?: Partial<Record<DistributionNameInternal, CoefficientHelperValue>>;
  unbuffedAttributes?: Attributes;
}
export interface CharacterUnprocessed {
  id?: string;
  settings: OptimizerCoreMinimalSettings;
  attributes?: AttributesInternal;
  gear: Gear;
  gearStats: GearStats;
  gearDescription?: string;
  valid: boolean;
  baseAttributes: AttributesInternal;
  infusions: Partial<Record<InfusionName, number>>;
  results?: Results;
}
export interface CharacterProcessed {
  id?: string;
  settings: OptimizerCoreMinimalSettings;
  attributes: AttributesInternal;
  gear: Gear;
  gearStats: GearStats;
  gearDescription?: string;
  valid: boolean;
  baseAttributes: AttributesInternal;
  infusions: Partial<Record<InfusionName, number>>;
  results?: Results;
}
export interface Character {
  id?: string;
  settings: OptimizerCoreMinimalSettings;
  gear: Gear;
  gearStats: GearStats;
  gearDescription?: string;
  valid: boolean;
  baseAttributes: AttributesInternal;
  infusions: Partial<Record<InfusionName, number>>;
  results?: Results;

  attributes: Attributes;
}

export type CalculateGenerator = ReturnType<OptimizerCore['calculate']>;

export const UPDATE_MS = 90;

export class OptimizerCore {
  settings: OptimizerCoreSettings;
  minimalSettings: OptimizerCoreMinimalSettings;
  applyInfusionsFunction: (
    this: OptimizerCore,
    gear: Gear,
    gearStats: GearStats,
    overrides?: Partial<CharacterUnprocessed>,
  ) => void;

  condiResultCache = new Map<number, number>();
  worstScore: number = 0;
  list: Character[] = [];
  isChanged = true;
  uniqueIDCounter = 0;
  randomId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  conditionData: typeof conditionData;

  constructor(settings: OptimizerCoreSettings) {
    this.settings = settings;
    // only supply character with settings it uses to render
    this.minimalSettings = {
      cachedFormState: settings.cachedFormState,
      profession: settings.profession,
      specialization: settings.specialization,
      weaponType: settings.weaponType,
      appliedModifiers: settings.appliedModifiers,
      rankby: settings.rankby,
      shouldDisplayExtras: settings.shouldDisplayExtras,
      extrasCombination: settings.extrasCombination,
      modifiers: settings.modifiers,
      gameMode: settings.gameMode,
    };
    this.conditionData = settings.gameMode === 'wvw' ? conditionDataWvW : conditionData;

    let applyInfusionsFunction: OptimizerCore['applyInfusionsFunction'];
    switch (settings.infusionMode) {
      case 'None':
        applyInfusionsFunction = this.applyInfusionsNone;
        break;
      case 'Primary':
        applyInfusionsFunction = this.applyInfusionsPrimary;
        break;
      case 'Few':
        applyInfusionsFunction = this.applyInfusionsFew;
        break;
      case 'Secondary':
        applyInfusionsFunction = this.applyInfusionsSecondary;
        break;
      case 'SecondaryNoDuplicates':
        applyInfusionsFunction = this.applyInfusionsSecondaryNoDuplicates;
        break;
      default:
        throw new Error(
          `Error: optimizer selected invalid infusion calculation mode: ${settings.infusionMode}`,
        );
    }
    this.applyInfusionsFunction = applyInfusionsFunction;
  }

  /**
   * A generator function that iterates synchronously through all possible builds, updating the list
   * object with the best results. Yields periodically to allow UI to be updated or cancelled.
   *
   * Remember, a generator's next() function returns a plain object { value, done }.
   *
   * @yields {{done: boolean, value: {isChanged: boolean, percent: number}}} result
   * yields {boolean} result.done - true if the calculation is finished
   * yields {number} result.value.isChanged - true if this.list has been mutated
   * yields {number} result.value.calculationRuns - the calculation progress
   */
  *calculate() {
    const { settings } = this;

    let calculationRuns = 0;

    const calculationQueue: Gear[] = [];
    calculationQueue.push([]);
    const calculationStatsQueue: GearStats[] = [];
    calculationStatsQueue.push({});

    let iterationTimer = Date.now();
    let cycles = 0;
    this.isChanged = true;
    while (calculationQueue.length > 0) {
      cycles++;

      // pause to update UI
      if (cycles % 1000 === 0 && Date.now() - iterationTimer > UPDATE_MS) {
        // this.list.forEach(this.calcResults, this);
        yield {
          isChanged: this.isChanged,
          calculationRuns,
          newList: this.isChanged ? this.list : undefined,
        };
        this.isChanged = false;
        iterationTimer = Date.now();
      }

      const gear = calculationQueue.pop();
      const gearStats = calculationStatsQueue.pop();
      if (!gear || !gearStats) {
        // This check is to convince typescript that neither of these variables are undefined
        throw new Error('Invalid internal state');
      }
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
        (settings.identicalRing && nextSlot === 9 && gear[nextSlot - 2] > gear[nextSlot - 1]) ||
        (settings.identicalAcc && nextSlot === 11 && gear[nextSlot - 2] > gear[nextSlot - 1]) ||
        (settings.identicalWep && nextSlot === 14 && gear[nextSlot - 2] > gear[nextSlot - 1]) ||
        (settings.identicalArmor && nextSlot === 6 && (gear[1] > gear[3] || gear[3] > gear[5]))
      ) {
        // bump calculationRuns by the number of runs we just skipped
        calculationRuns += settings.runsAfterThisSlot[nextSlot];
        continue;
      }

      if (nextSlot >= settings.slots) {
        calculationRuns++;

        // this.applyInfusionsFunction is aliased to the correct applyInfusions[mode] function during setup
        this.applyInfusionsFunction(gear, gearStats);
        continue;
      }

      // Recycle for Affix 0, clone for 1+
      for (let index = 1; index < settings.affixesArray[nextSlot].length; index++) {
        const newGear = gear.slice();
        const newGearStats = { ...gearStats };

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

    // this.list.forEach(this.calcResults, this);
    yield {
      isChanged: this.isChanged,
      calculationRuns,
      newList: this.isChanged ? this.list : undefined,
    };
  }

  /**
   * A generator function that iterates synchronously through simulated builds, updating the list
   * object with the best results. Yields periodically to allow UI to be updated or cancelled.
   *
   * Remember, a generator's next() function returns a plain object { value, done }.
   *
   * @param {number} split
   *
   * @yields {{done: boolean, value: {isChanged: boolean, percent: number}}} result
   * yields {boolean} result.done - true if the calculation is finished
   * yields {number} result.value.isChanged - true if this.list has been mutated
   * yields {number} result.value.calculationRuns - the calculation progress
   */
  *calculateHeuristic(split: number) {
    const { settings } = this;
    const { affixes, jsHeuristicsData } = settings;

    if (!jsHeuristicsData) {
      yield {
        isChanged: true,
        calculationRuns: 0,
        newList: [],
      };
      return;
    }

    let calculationRuns = 0;

    let iterationTimer = Date.now();
    let cycles = 0;
    this.isChanged = true;

    for (const partition of iteratePartitions(split, jsHeuristicsData.length, true)) {
      cycles++;

      // pause to update UI
      if (cycles % 1000 === 0 && Date.now() - iterationTimer > UPDATE_MS) {
        // this.list.forEach(this.calcResults, this);
        yield {
          isChanged: this.isChanged,
          calculationRuns,
          newList: this.isChanged ? this.list : undefined,
        };
        this.isChanged = false;
        iterationTimer = Date.now();
      }

      const gearStats: GearStats = {};

      // perform division once, after all addition, to avoid slightly inconsistent results due to floating point addition
      // this prevents arbitrary random giver/harrier split being used instead of tiebreaking in favor of harrier
      partition.forEach((num, i) =>
        jsHeuristicsData[i].forEach(([stat, value]) => {
          gearStats[stat] = (gearStats[stat] ?? 0) + value * num;
        }),
      );
      objectKeys(gearStats).forEach((key) => {
        gearStats[key]! /= split;
      });

      const percentages = `Estimate: ${partition
        .map((num, i) => `${roundOne((num / split) * 100)}% ${affixes[i]}`)
        .join(', ')}`;

      calculationRuns++;

      // this.applyInfusionsFunction is aliased to the correct applyInfusions[mode] function during setup
      this.applyInfusionsFunction([], gearStats, { gearDescription: percentages });
    }

    // this.list.forEach(this.calcResults, this);
    yield {
      isChanged: this.isChanged,
      calculationRuns,
      newList: this.isChanged ? this.list : undefined,
    };
  }

  createCharacter(
    gear: Gear,
    gearStats: GearStats,
    infusions: CharacterUnprocessed['infusions'],
    overrides: Partial<CharacterUnprocessed> = {},
  ) {
    const character: CharacterUnprocessed = {
      gear, // passed by reference
      infusions, // passed by reference
      settings: this.minimalSettings, // passed by reference
      gearStats, // passed by reference
      attributes: undefined,
      valid: true,
      baseAttributes:
        overrides.baseAttributes ?? this.settings.baseAttributes.copyWithin(0, ATTR_COUNT),
      ...overrides,
    };

    // apply gear and infusions
    for (const [stat, value] of objectEntries(gearStats)) {
      character.baseAttributes[KEY[stat]] += value;
    }
    for (const [stat, count] of objectEntries(infusions)) {
      character.baseAttributes[KEY[stat]] += count * INFUSION_BONUS;
    }

    return character;
  }

  // Applies no infusions
  applyInfusionsNone(gear: Gear, gearStats: GearStats, overrides?: Partial<CharacterUnprocessed>) {
    const character = this.createCharacter(gear, gearStats, {}, overrides);
    this.updateAttributesFast(character);
    this.insertCharacter(character);
  }

  // Just applies the primary infusion
  applyInfusionsPrimary(
    gear: Gear,
    gearStats: GearStats,
    overrides?: Partial<CharacterUnprocessed>,
  ) {
    const { settings } = this;

    const infusionOption = settings.infusionOptions[0];
    const character = this.createCharacter(
      gear,
      gearStats,
      { [infusionOption.type]: Math.min(infusionOption.count, settings.maxInfusions) },
      overrides,
    );
    this.updateAttributesFast(character);
    this.insertCharacter(character);
  }

  // Just applies the maximum number of primary/secondary infusions, since the total is less than or equal to the max
  applyInfusionsFew(gear: Gear, gearStats: GearStats, overrides?: Partial<CharacterUnprocessed>) {
    const { settings } = this;

    const character = this.createCharacter(
      gear,
      gearStats,
      Object.fromEntries(settings.infusionOptions.map(({ type, count }) => [type, count])),
      overrides,
    );
    this.updateAttributesFast(character);
    this.insertCharacter(character);
  }

  // Inserts every valid combination of 18 infusions
  applyInfusionsSecondary(
    gear: Gear,
    gearStats: GearStats,
    overrides?: Partial<CharacterUnprocessed>,
  ) {
    const { settings } = this;
    const { maxInfusions, infusionOptions, rankby } = settings;

    const test = this.createCharacter(gear, gearStats, {}, overrides);
    if (!this.worstScore || this.testInfusionUsefulness(test)) {
      let previousResult;

      for (const counts of iteratePartitions(maxInfusions, infusionOptions.length, true)) {
        if (infusionOptions.every(({ count }, i) => counts[i] <= count)) {
          const character = this.createCharacter(
            gear,
            gearStats,
            Object.fromEntries(infusionOptions.map(({ type }, i) => [type, counts[i]])),
            overrides,
          );
          this.updateAttributesFast(character);
          if (character.valid && character.attributes[KEY[rankby]] !== previousResult) {
            this.insertCharacter(character);
            previousResult = character.attributes[KEY[rankby]];
          }
        }
      }
    }
  }

  // Tests every valid combination of 18 infusions and inserts the best result
  applyInfusionsSecondaryNoDuplicates(
    gear: Gear,
    gearStats: GearStats,
    overrides?: Partial<CharacterUnprocessed>,
  ) {
    const { settings } = this;
    const { maxInfusions, infusionOptions, rankby } = settings;

    const test = this.createCharacter(gear, gearStats, {}, overrides);
    if (!this.worstScore || this.testInfusionUsefulness(test)) {
      let best = null;
      for (const counts of iteratePartitions(maxInfusions, infusionOptions.length, true)) {
        if (infusionOptions.every(({ count }, i) => counts[i] <= count)) {
          const character = this.createCharacter(
            gear,
            gearStats,
            Object.fromEntries(infusionOptions.map(({ type }, i) => [type, counts[i]])),
            overrides,
          );
          this.updateAttributesFast(character);
          if (character.valid) {
            if (!best || characterLTInternal(best, character, rankby) > 0) {
              best = character;
            }
          }
        }
      }

      if (best) {
        this.insertCharacter(best);
      }
    }
  }

  testInfusionUsefulness(character: CharacterUnprocessed) {
    const { settings } = this;
    const temp = this.clone(character);

    settings.infusionOptions.forEach(({ type, count }) =>
      this.addBaseStats(temp, type, count * INFUSION_BONUS),
    );
    this.updateAttributesFast(temp, true);
    return temp.attributes[KEY[settings.rankby]] > this.worstScore;
  }

  insertCharacter(characterInternal: CharacterProcessed) {
    const { settings } = this;

    if (
      !characterInternal.valid ||
      (this.worstScore && this.worstScore > characterInternal.attributes[KEY[settings.rankby]])
    ) {
      return;
    }

    this.updateAttributes(characterInternal);
    this.calcResults(characterInternal);

    const character: Character = {
      ...characterInternal,
      attributes: Object.fromEntries(
        [...characterInternal.attributes].map((value, i) => [REVERSE_KEY[i], value]),
      ) as Attributes,
    };
    character.id = `${this.uniqueIDCounter++} (${this.randomId})`;

    if (this.list.length === 0) {
      this.list.push(character);
    } else {
      let position = this.list.length;
      while (position > 0 && characterLT(this.list[position - 1], character, settings.rankby) > 0) {
        position--;
      }

      if (position > settings.maxResults - 1) {
        return;
      }

      if (position <= this.list.length - 1) {
        this.list.splice(position, 0, character);
      } else {
        this.list.push(character);
      }
    }
    if (this.list.length > settings.maxResults) {
      this.list.length = settings.maxResults;
    }
    if (this.list.length === settings.maxResults) {
      this.worstScore = this.list[this.list.length - 1].attributes[settings.rankby];
    }

    this.isChanged = true;
  }

  addBaseStats(character: CharacterUnprocessed, stat: AttributeName, amount: number) {
    character.baseAttributes[KEY[stat]] += amount;
  }

  /**
   * Creates an {attributes} object parameter in the given character object and fills it with
   * calculated stats and damage/healing/survivability scores.
   *
   * @param {object} character
   * @param {boolean} [noRounding] - does not round conversions if true
   */
  updateAttributes(
    character: CharacterUnprocessed,
    noRounding = false,
  ): asserts character is CharacterProcessed {
    const { modifiers } = this.settings;
    const { damageMultiplier } = modifiers;

    character.valid = true;

    this.calcStats(character, modifiers, noRounding);

    const powerDamageScore = this.calcPower(character, damageMultiplier);
    const condiDamageScore = this.calcCondi(character, damageMultiplier, damagingConditions);
    character.attributes[KEY['Damage']] =
      powerDamageScore + condiDamageScore + character.attributes[KEY['Flat DPS']];

    this.calcSurvivability(character, damageMultiplier);
    this.calcHealing(character);
  }

  /**
   * Creates an {attributes} object parameter in the given character object and does the minimum
   * calculation to find the optimal build, including cancelling itself early if the character's
   * boon duration/toughness/healing power are not valid according to the optimizer settings.
   *
   * @param {object} character
   * @param {boolean} [skipValidation] - skips the validation check if true
   */
  updateAttributesFast(
    character: CharacterUnprocessed,
    skipValidation = false,
  ): asserts character is CharacterProcessed {
    const { settings } = this;
    const { modifiers } = this.settings;
    const { damageMultiplier } = modifiers;
    character.valid = true;

    this.calcStats(character, modifiers);

    const { attributes } = character;

    if (!skipValidation && this.checkInvalid(character)) {
      return;
    }

    if (settings.rankby === 'Damage' || settings.minDamage) {
      const powerDamageScore = this.calcPower(character, damageMultiplier);

      // cache condi result based on cdmg and expertise
      let condiDamageScore = 0;
      if (settings.disableCondiResultCache) {
        condiDamageScore = this.calcCondi(character, damageMultiplier, settings.relevantConditions);
      } else if (settings.relevantConditions.length > 0) {
        const CONDI_CACHE_ID =
          attributes[KEY['Expertise']] + attributes[KEY['Condition Damage']] * 10000;
        condiDamageScore =
          this.condiResultCache?.get(CONDI_CACHE_ID) ||
          this.calcCondi(character, damageMultiplier, settings.relevantConditions);
        this.condiResultCache?.set(CONDI_CACHE_ID, condiDamageScore);
      }

      attributes[KEY['Damage']] =
        powerDamageScore + condiDamageScore + character.attributes[KEY['Flat DPS']];
    }
    if (settings.rankby === 'Healing' || settings.minHealing) {
      this.calcHealing(character);
    }
    if (settings.rankby === 'Survivability' || settings.minSurvivability) {
      this.calcSurvivability(character, damageMultiplier);
    }

    if (!skipValidation) {
      this.checkInvalidIndicators(character);
    }
  }

  calcStats(
    character: CharacterUnprocessed,
    modifiers: Modifiers,
    noRounding = false,
  ): asserts character is CharacterProcessed {
    const { settings } = this;

    const round = noRounding ? (val: number) => val : roundEven;

    character.attributes = character.baseAttributes.slice(0, ATTR_COUNT);
    const { attributes, baseAttributes } = character;

    for (const [attribute, conversion] of modifiers['convert']) {
      const maybeRound = enumArrayIncludes(allAttributePointKeys, attribute)
        ? round
        : (val: number) => val;
      for (const [source, percent] of conversion) {
        attributes[KEY[attribute]] += maybeRound(baseAttributes[KEY[source]] * percent);
      }
    }

    for (const [attribute, bonus] of modifiers['buff']) {
      attributes[KEY[attribute]] += bonus;
    }

    attributes[KEY['Critical Chance']] += (attributes[KEY['Precision']] - 1000) / 21 / 100;
    attributes[KEY['Critical Damage']] += attributes[KEY['Ferocity']] / 15 / 100;

    attributes[KEY['Boon Duration']] += attributes[KEY['Concentration']] / 15 / 100;
    attributes[KEY['Condition Duration']] += attributes[KEY['Expertise']] / 15 / 100;

    attributes[KEY['Health']] = round(
      (attributes[KEY['Health']] + attributes[KEY['Vitality']] * 10) *
        (1 + attributes[KEY['Maximum Health']]),
    );

    attributes[KEY['Armor']] += attributes[KEY['Toughness']];

    // clones/phantasms/shroud

    if (settings.profession === 'Mesmer') {
      // mesmer illusions: special bonuses are INSTEAD OF player attributes
      attributes[KEY['Clone Critical Chance']]! += (attributes[KEY['Precision']] - 1000) / 21 / 100;
      attributes[KEY['Phantasm Critical Chance']]! +=
        (attributes[KEY['Precision']] - 1000) / 21 / 100;
      attributes[KEY['Phantasm Critical Damage']]! += attributes[KEY['Ferocity']] / 15 / 100;
    } else if (attributes[KEY['Power2 Coefficient']]) {
      // necromancer shroud: special bonuses are IN ADDITION TO player attributes
      attributes[KEY['Alternative Power']] += attributes[KEY['Power']];
      attributes[KEY['Alternative Critical Chance']] +=
        attributes[KEY['Critical Chance']] + attributes[KEY['Alternative Precision']] / 21 / 100;
      attributes[KEY['Alternative Critical Damage']] +=
        attributes[KEY['Critical Damage']] + attributes[KEY['Alternative Ferocity']] / 15 / 100;
    }

    for (const [attribute, conversion] of modifiers['convertAfterBuffs']) {
      const maybeRound = enumArrayIncludes(allAttributePointKeys, attribute)
        ? round
        : (val: number) => val;
      for (const [source, percent] of conversion) {
        if (source === 'Critical Chance') {
          attributes[KEY[attribute]] += maybeRound(
            clamp(attributes[KEY['Critical Chance']], 0, 1) * percent,
          );
        } else if (source === 'Clone Critical Chance') {
          attributes[KEY[attribute]] += maybeRound(
            clamp(attributes[KEY['Clone Critical Chance']], 0, 1) * percent,
          );
        } else if (source === 'Phantasm Critical Chance') {
          attributes[KEY[attribute]] += maybeRound(
            clamp(attributes[KEY['Phantasm Critical Chance']], 0, 1) * percent,
          );
        } else {
          attributes[KEY[attribute]] += maybeRound(attributes[KEY[source]] * percent);
        }
      }
    }
  }

  checkInvalid(character: CharacterProcessed) {
    const { settings } = this;
    const { attributes } = character;

    const invalid =
      (settings.minBoonDuration !== undefined &&
        attributes[KEY['Boon Duration']] < settings.minBoonDuration / 100) ||
      (settings.minQuicknessDuration !== undefined &&
        attributes[KEY['Boon Duration']] + attributes[KEY['Quickness Duration']] <
          settings.minQuicknessDuration / 100) ||
      (settings.minHealingPower !== undefined &&
        attributes[KEY['Healing Power']] < settings.minHealingPower) ||
      (settings.minToughness !== undefined &&
        attributes[KEY['Toughness']] < settings.minToughness) ||
      (settings.maxToughness !== undefined &&
        attributes[KEY['Toughness']] > settings.maxToughness) ||
      (settings.minHealth !== undefined && attributes[KEY['Health']] < settings.minHealth) ||
      (settings.minCritChance !== undefined &&
        attributes[KEY['Critical Chance']] < settings.minCritChance / 100) ||
      (settings.minOutgoingHealing !== undefined &&
        attributes[KEY['Outgoing Healing']] < settings.minOutgoingHealing / 100);
    if (invalid) {
      character.valid = false;
    }

    return invalid;
  }

  checkInvalidIndicators(character: CharacterProcessed) {
    const { settings } = this;
    const { attributes } = character;

    const invalid =
      (settings.minDamage !== undefined && attributes[KEY['Damage']] < settings.minDamage) ||
      (settings.minHealing !== undefined && attributes[KEY['Healing']] < settings.minHealing) ||
      (settings.minSurvivability !== undefined &&
        attributes[KEY['Survivability']] < settings.minSurvivability);
    if (invalid) {
      character.valid = false;
    }

    return invalid;
  }

  calcPower(character: CharacterProcessed, damageMultiplier: DamageMultiplier) {
    const { settings } = this;
    const { attributes } = character;

    const critDmg =
      attributes[KEY['Critical Damage']] * damageMultiplier['Outgoing Critical Damage'];
    const critChance = clamp(attributes[KEY['Critical Chance']], 0, 1);

    // this should really just overwrite the 'Critical Damage' value, but we use
    // it for "the critical damage stat in the hero panel," which includes
    // ferocity but excludes "critical hits do more damage" modifiers
    if (damageMultiplier['Outgoing Critical Damage'] !== 1) {
      attributes[KEY['Player Critical Damage']] = critDmg;
    }

    attributes[KEY['Effective Power']] =
      attributes[KEY['Power']] * (1 + critChance * (critDmg - 1));

    // 2597: standard enemy armor value, also used for ingame damage tooltips
    let powerDamage =
      (attributes[KEY['Power Coefficient']] / 2597) *
        attributes[KEY['Effective Power']] *
        damageMultiplier['Outgoing Strike Damage'] +
      (attributes[KEY['NonCrit Power Coefficient']] / 2597) *
        attributes[KEY['Power']] *
        damageMultiplier['Outgoing Strike Damage'];

    attributes[KEY['Power DPS']] = powerDamage;

    if (attributes[KEY['Power2 Coefficient']]) {
      if (settings.profession === 'Mesmer') {
        // mesmer illusions: special bonuses are INSTEAD OF player attributes
        attributes[KEY['Phantasm Critical Damage']]! *=
          damageMultiplier['Outgoing Phantasm Critical Damage'];
        const phantasmCritChance = clamp(attributes[KEY['Phantasm Critical Chance']]!, 0, 1);

        attributes[KEY['Phantasm Effective Power']] =
          attributes[KEY['Power']] *
          (1 + phantasmCritChance * (attributes[KEY['Phantasm Critical Damage']]! - 1));

        const phantasmPowerDamage =
          (attributes[KEY['Power2 Coefficient']] / 2597) *
          attributes[KEY['Phantasm Effective Power']] *
          damageMultiplier['Outgoing Phantasm Damage'];
        attributes[KEY['Power2 DPS']] = phantasmPowerDamage;
        powerDamage += phantasmPowerDamage;
      } else {
        // necromancer shroud: special bonuses are IN ADDITION TO player attributes
        attributes[KEY['Alternative Critical Damage']] *=
          damageMultiplier['Outgoing Critical Damage'] *
          damageMultiplier['Outgoing Alternative Critical Damage'];
        const alternativeCritChance = clamp(attributes[KEY['Alternative Critical Chance']], 0, 1);

        attributes[KEY['Alternative Effective Power']] =
          attributes[KEY['Alternative Power']] *
          (1 + alternativeCritChance * (attributes[KEY['Alternative Critical Damage']] - 1));

        const alternativePowerDamage =
          (attributes[KEY['Power2 Coefficient']] / 2597) *
          attributes[KEY['Alternative Effective Power']] *
          damageMultiplier['Outgoing Strike Damage'] *
          damageMultiplier['Outgoing Alternative Damage'];
        attributes[KEY['Power2 DPS']] = alternativePowerDamage;
        powerDamage += alternativePowerDamage;
      }
    } else {
      attributes[KEY['Power2 DPS']] = 0;
    }

    const siphonDamage =
      (attributes[KEY['Siphon Base Coefficient']] +
        attributes[KEY['Siphon Coefficient']] * attributes[KEY['Power']]) *
      damageMultiplier['Outgoing Siphon Damage'];
    attributes[KEY['Siphon DPS']] = siphonDamage;

    return powerDamage + siphonDamage;
  }

  conditionDamageTick = (condition: ConditionName, cdmg: number, mult: number): number =>
    (this.conditionData[condition].factor * cdmg + this.conditionData[condition].baseDamage) * mult;

  calcCondi(
    character: CharacterProcessed,
    damageMultiplier: DamageMultiplier,
    relevantConditions: readonly DamagingConditionName[],
  ) {
    const { settings } = this;
    const { attributes } = character;

    let condiDamageScore = 0;
    for (const condition of relevantConditions) {
      const cdmg = attributes[KEY['Condition Damage']];
      const mult =
        damageMultiplier['Outgoing Condition Damage'] *
        damageMultiplier[`Outgoing ${condition} Damage`];

      switch (condition) {
        case 'Torment':
          attributes[KEY[`Torment Damage Tick`]] =
            this.conditionDamageTick('Torment', cdmg, mult) * (1 - settings.movementUptime) +
            this.conditionDamageTick('TormentMoving', cdmg, mult) * settings.movementUptime;
          break;
        case 'Confusion':
          attributes[KEY[`Confusion Damage Tick`]] =
            this.conditionDamageTick('Confusion', cdmg, mult) +
            this.conditionDamageTick('ConfusionActive', cdmg, mult) * settings.attackRate;
          break;
        default:
          attributes[KEY[`${condition} Damage Tick`]] = this.conditionDamageTick(
            condition,
            cdmg,
            mult,
          );
      }

      const duration =
        1 +
        clamp(
          attributes[KEY[`${condition} Duration`]] + attributes[KEY['Condition Duration']],
          0,
          1,
        ) +
        attributes[KEY['Condition Duration Uncapped']];

      const stacks = attributes[KEY[`${condition} Coefficient`]] * duration;
      attributes[KEY[`${condition} Stacks`]] = stacks;

      const DPS = stacks * (attributes[KEY[`${condition} Damage Tick`]] || 1);
      attributes[KEY[`${condition} DPS`]] = DPS;

      condiDamageScore += DPS;
    }

    return condiDamageScore;
  }

  calcSurvivability(character: CharacterProcessed, damageMultiplier: DamageMultiplier) {
    const { attributes } = character;

    attributes[KEY['Effective Health']] =
      attributes[KEY['Health']] *
      attributes[KEY['Armor']] *
      (1 / damageMultiplier['Incoming Strike Damage']);

    attributes[KEY['Survivability']] = attributes[KEY['Effective Health']] / 1967;
  }

  calcHealing(character: CharacterProcessed) {
    const { settings } = this;
    const { attributes } = character;

    // reasonably representative skill: druid celestial avatar 4 pulse
    // 390 base, 0.3 coefficient
    attributes[KEY['Effective Healing']] =
      (attributes[KEY['Healing Power']] * 0.3 + 390) * (1 + attributes[KEY['Outgoing Healing']]);
    if (Object.prototype.hasOwnProperty.call(settings.modifiers, 'bountiful-maintenance-oil')) {
      const bonus =
        (attributes[KEY['Healing Power']] * 0.6) / 10000 +
        (attributes[KEY['Concentration']] * 0.8) / 10000;
      if (bonus) {
        attributes[KEY['Effective Healing']] *= 1 + bonus;
      }
    }

    attributes[KEY['Healing']] = attributes[KEY['Effective Healing']];
  }

  calcResults(character: CharacterProcessed) {
    if (character.results) return;

    const { settings } = this;
    const { attributes } = character;

    const value = character.attributes[KEY[settings.rankby]];

    const indicators = {} as Record<IndicatorName, number>;
    for (const attribute of indicatorAttributes) {
      indicators[attribute] = attributes[KEY[attribute]];
    }

    const results: Results = {
      value,
      indicators,
    };

    character.results = results;

    // baseline for comparing adding/subtracting +5 infusions
    const baseline = this.clone(character);
    this.updateAttributes(baseline, true);

    const gainLossKeys = [
      'Power',
      'Precision',
      'Ferocity',
      'Condition Damage',
      'Expertise',
    ] as const;

    // effective gain from adding +5 infusions
    results.effectivePositiveValues = {};
    for (const attribute of gainLossKeys) {
      const temp = this.clone(character);
      temp.baseAttributes[KEY[attribute]] += 5;

      this.updateAttributes(temp, true);
      results.effectivePositiveValues[attribute] =
        temp.attributes[KEY['Damage']] - baseline.attributes[KEY['Damage']];
    }

    // effective loss by not having +5 infusions
    results.effectiveNegativeValues = {};
    for (const attribute of gainLossKeys) {
      const temp = this.clone(character);
      temp.baseAttributes[KEY[attribute]] = Math.max(temp.baseAttributes[KEY[attribute]] - 5, 0);

      this.updateAttributes(temp, true);
      results.effectiveNegativeValues[attribute] =
        temp.attributes[KEY['Damage']] - baseline.attributes[KEY['Damage']];
    }

    const effectiveDistributionKeys = [
      ...Object.keys(settings.distribution),
      'Siphon',
    ] as EffectiveDistributionKey[];

    // effective damage distribution
    results.effectiveDamageDistribution = {};
    for (const key of effectiveDistributionKeys) {
      if (attributes[KEY[`${key} DPS`]] === undefined) continue;

      const damage = attributes[KEY[`${key} DPS`]] / attributes[KEY['Damage']];
      results.effectiveDamageDistribution[`${key}`] = `${(damage * 100).toFixed(1)}%`;
    }

    // damage indicator breakdown
    results.damageBreakdown = {};
    for (const key of effectiveDistributionKeys) {
      if (attributes[KEY[`${key} DPS`]] === undefined) continue;

      results.damageBreakdown[`${key}`] = attributes[KEY[`${key} DPS`]];
    }

    // template helper data
    // (finds the slope and intercept (y = mx + b) of each condition's DPS relative to input
    // coefficient; used to make templates easily)
    results.coefficientHelper = {};

    const attrsWithModifiedCoefficient = (newCoefficient: number) => {
      const newCharacter = this.clone(character);
      newCharacter.baseAttributes = character.baseAttributes.slice();
      objectKeys(settings.distribution).forEach((key) => {
        newCharacter.baseAttributes[KEY[`${key} Coefficient`]] -= settings.distribution[key];
        newCharacter.baseAttributes[KEY[`${key} Coefficient`]] += newCoefficient;
      });
      this.updateAttributes(newCharacter);
      return newCharacter.attributes;
    };

    const withOne = attrsWithModifiedCoefficient(1);
    const withZero = attrsWithModifiedCoefficient(0);

    for (const key of objectKeys(settings.distribution)) {
      results.coefficientHelper[key] = {
        slope: withOne[KEY[`${key} DPS`]] - withZero[KEY[`${key} DPS`]],
        intercept: withZero[KEY[`${key} DPS`]],
      };
    }

    // out of combat hero panel simulation (overrides both baseAttributes and modifiers)
    if (settings.unbuffedBaseAttributes && settings.unbuffedModifiers) {
      const temp = this.createCharacter(character.gear, character.gearStats, character.infusions, {
        baseAttributes: settings.unbuffedBaseAttributes.slice(),
      });
      this.calcStats(temp, settings.unbuffedModifiers);
      // results.unbuffedAttributes = temp.attributes;
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
  clone(character: CharacterUnprocessed): CharacterUnprocessed {
    return {
      settings: character.settings, // passed by reference
      attributes: character.attributes, // passed by reference
      gear: character.gear, // passed by reference
      gearStats: character.gearStats, // passed by reference
      valid: character.valid,

      baseAttributes: character.baseAttributes.slice(),
      infusions: { ...character.infusions },
    };
  }
}

// returns a positive value if B is better than A
export function characterLTInternal(
  a: CharacterProcessed | undefined,
  b: CharacterProcessed | undefined,
  rankby: IndicatorName,
): number {
  if (!a && !b) return 0;
  if (!a) return 1;
  if (!b) return -1;
  // const { rankby } = this.settings;

  // if (!a.valid && b.valid) {
  //     // A is invalid, B is valid -> replace A
  //     return true;
  // } else if (!b.valid) {
  //     // B is invalid -> do not replace A
  //     return false;
  // }

  // tiebreakers
  if (a.attributes[KEY[rankby]] === b.attributes[KEY[rankby]]) {
    switch (rankby) {
      case 'Damage':
        return b.attributes[KEY['Survivability']] - a.attributes[KEY['Survivability']];
      case 'Survivability':
      case 'Healing':
        return b.attributes[KEY['Damage']] - a.attributes[KEY['Damage']];
      // no default
    }
  }

  return b.attributes[KEY[rankby]] - a.attributes[KEY[rankby]];
}

// returns a positive value if B is better than A
export function characterLT(
  a: Character | undefined,
  b: Character | undefined,
  rankby: IndicatorName,
): number {
  if (!a && !b) return 0;
  if (!a) return 1;
  if (!b) return -1;
  // const { rankby } = this.settings;

  // if (!a.valid && b.valid) {
  //     // A is invalid, B is valid -> replace A
  //     return true;
  // } else if (!b.valid) {
  //     // B is invalid -> do not replace A
  //     return false;
  // }

  // tiebreakers
  if (a.attributes[rankby] === b.attributes[rankby]) {
    switch (rankby) {
      case 'Damage':
        return b.attributes['Survivability'] - a.attributes['Survivability'];
      case 'Survivability':
      case 'Healing':
        return b.attributes['Damage'] - a.attributes['Damage'];
      // no default
    }
  }

  return b.attributes[rankby] - a.attributes[rankby];
}
