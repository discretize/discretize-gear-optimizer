/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-case-declarations */
/* eslint-disable no-console */
/* eslint-disable dot-notation */

import { allAttributePointKeys } from '../../assets/modifierdata/metadata';
import type {
  AffixName,
  ConditionName,
  DamagingConditionName,
  DerivedAttributeName,
  IndicatorName,
  InfusionName,
  PrimaryAttributeName,
  ProfessionName,
  SecondaryAttributeName,
  WeaponHandednessType,
} from '../../utils/gw2-data';
import { Attributes, INFUSION_BONUS, conditionData, conditionDataWvW } from '../../utils/gw2-data';
import { enumArrayIncludes, objectKeys } from '../../utils/usefulFunctions';
import type { ExtrasCombination, ShouldDisplayExtras } from '../slices/extras';
import type { GameMode } from '../slices/userSettings';
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
  minBoonDuration: number | null;
  minHealingPower: number | null;
  minToughness: number | null;
  maxToughness: number | null;
  minHealth: number | null;
  minCritChance: number | null;
  minDamage: number | null;
  minHealing: number | null;
  minOutgoingHealing: number | null;
  minQuicknessDuration: number | null;
  minSurvivability: number | null;
  maxResults: number;
  primaryInfusion: InfusionName | '';
  secondaryInfusion: InfusionName | '';
  primaryMaxInfusions: number;
  secondaryMaxInfusions: number;
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

  shouldDisplayExtras: ShouldDisplayExtras;
  cachedFormState: CachedFormState;
}

export type Attributes = Record<
  PrimaryAttributeName | SecondaryAttributeName | DerivedAttributeName,
  number
> &
  Record<string, number>;

// settings that **do** vary based on extras combination
export interface OptimizerCoreSettingsPerCombination {
  baseAttributes: Attributes;
  modifiers: Modifiers;
  disableCondiResultCache: boolean;
  relevantConditions: DamagingConditionName[];
  appliedModifiers: AppliedModifier[];
}

export type OptimizerCoreSettings = OptimizerCoreSettingsPerCalculation &
  OptimizerCoreSettingsPerCombination & {
    unbuffedBaseAttributes?: Attributes;
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
export type GearStats = Record<AttributeName, number>;
interface CoefficientHelperValue {
  slope: number;
  intercept: number;
}
interface Results {
  value: number;
  indicators: Record<IndicatorName, number>;
  effectivePositiveValues?: Record<string, number>;
  effectiveNegativeValues?: Record<string, number>;
  effectiveDamageDistribution?: Record<string, string | number>;
  damageBreakdown?: Record<string, number>;
  coefficientHelper?: Record<string, CoefficientHelperValue>;
  unbuffedAttributes?: Attributes;
}
export interface CharacterUnprocessed {
  id?: string;
  settings: OptimizerCoreMinimalSettings;
  attributes?: Attributes;
  gear: Gear;
  gearStats: GearStats;
  valid: boolean;
  baseAttributes: Attributes;
  infusions: Partial<Record<InfusionName, number>>;
  results?: Results;
}
export interface Character extends CharacterUnprocessed {
  attributes: Attributes;
}

export type AttributeName = string; // TODO: replace with AttributeName from gw2-data

export type CalculateGenerator = ReturnType<OptimizerCore['calculate']>;

export const UPDATE_MS = 90;

export class OptimizerCore {
  settings: OptimizerCoreSettings;
  minimalSettings: OptimizerCoreMinimalSettings;
  applyInfusionsFunction: (this: OptimizerCore, gear: Gear, gearStats: GearStats) => void;
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
        yield {
          isChanged: this.isChanged,
          calculationRuns,
          newList: this.list,
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

    return {
      isChanged: this.isChanged,
      calculationRuns,
      newList: this.list,
    };
  }

  createCharacter(
    gear: Gear,
    gearStats: GearStats,
    infusions: Character['infusions'],
    baseAttributes = this.settings.baseAttributes,
  ) {
    const character: CharacterUnprocessed = {
      gear, // passed by reference
      infusions, // passed by reference
      settings: this.minimalSettings, // passed by reference
      gearStats, // passed by reference
      attributes: undefined,
      valid: true,
      baseAttributes: { ...baseAttributes },
    };

    // apply gear and infusions
    for (const [stat, value] of Object.entries(gearStats)) {
      character.baseAttributes[stat] += value;
    }
    for (const [stat, count] of Object.entries(infusions)) {
      character.baseAttributes[stat] += count * INFUSION_BONUS;
    }

    return character;
  }

  // Applies no infusions
  applyInfusionsNone(gear: Gear, gearStats: GearStats) {
    const character = this.createCharacter(gear, gearStats, {});
    this.updateAttributesFast(character);
    this.insertCharacter(character);
  }

  // Just applies the primary infusion
  applyInfusionsPrimary(gear: Gear, gearStats: GearStats) {
    const { settings } = this;

    const character = this.createCharacter(gear, gearStats, {
      [settings.primaryInfusion]: settings.primaryMaxInfusions,
    });

    this.updateAttributesFast(character);
    this.insertCharacter(character);
  }

  // Just applies the maximum number of primary/secondary infusions, since the total is ≤18
  applyInfusionsFew(gear: Gear, gearStats: GearStats) {
    const { settings } = this;

    const character = this.createCharacter(gear, gearStats, {
      [settings.primaryInfusion]: settings.primaryMaxInfusions,
      [settings.secondaryInfusion]: settings.secondaryMaxInfusions,
    });
    this.updateAttributesFast(character);
    this.insertCharacter(character);
  }

  // Inserts every valid combination of 18 infusions
  applyInfusionsSecondary(gear: Gear, gearStats: GearStats) {
    const { settings } = this;

    const test = this.createCharacter(gear, gearStats, {});
    if (!this.worstScore || this.testInfusionUsefulness(test)) {
      let previousResult;

      let primaryCount = settings.primaryMaxInfusions;
      let secondaryCount = settings.maxInfusions - primaryCount;
      while (secondaryCount <= settings.secondaryMaxInfusions) {
        const character = this.createCharacter(gear, gearStats, {
          [settings.primaryInfusion]: primaryCount,
          [settings.secondaryInfusion]: secondaryCount,
        });
        this.updateAttributesFast(character);
        if (character.valid && character.attributes[settings.rankby] !== previousResult) {
          this.insertCharacter(character);
          previousResult = character.attributes[settings.rankby];
        }

        primaryCount--;
        secondaryCount++;
      }
    }
  }

  // Tests every valid combination of 18 infusions and inserts the best result
  applyInfusionsSecondaryNoDuplicates(gear: Gear, gearStats: GearStats) {
    const { settings } = this;

    const test = this.createCharacter(gear, gearStats, {});
    if (!this.worstScore || this.testInfusionUsefulness(test)) {
      let best = null;

      let primaryCount = settings.primaryMaxInfusions;
      let secondaryCount = settings.maxInfusions - primaryCount;
      while (secondaryCount <= settings.secondaryMaxInfusions) {
        const character = this.createCharacter(gear, gearStats, {
          [settings.primaryInfusion]: primaryCount,
          [settings.secondaryInfusion]: secondaryCount,
        });
        this.updateAttributesFast(character);
        if (character.valid) {
          if (!best || characterLT(best, character, settings.rankby) > 0) {
            best = character;
          }
        }

        primaryCount--;
        secondaryCount++;
      }

      if (best) {
        this.insertCharacter(best);
      }
    }
  }

  testInfusionUsefulness(character: CharacterUnprocessed) {
    const { settings } = this;
    const temp = this.clone(character);
    this.addBaseStats(temp, settings.primaryInfusion, settings.maxInfusions * INFUSION_BONUS);
    this.addBaseStats(temp, settings.secondaryInfusion, settings.maxInfusions * INFUSION_BONUS);
    this.updateAttributesFast(temp, true);
    return temp.attributes[settings.rankby] > this.worstScore;
  }

  insertCharacter(character: Character) {
    const { settings } = this;

    if (
      !character.valid ||
      (this.worstScore && this.worstScore > character.attributes[settings.rankby])
    ) {
      return;
    }

    this.updateAttributes(character);
    this.calcResults(character);
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

        if (this.list.length > settings.maxResults) {
          this.list.length = settings.maxResults;
        }
      } else {
        this.list.push(character);
      }

      if (this.list.length === settings.maxResults) {
        this.worstScore = this.list[this.list.length - 1].attributes[settings.rankby];
      }
    }

    this.isChanged = true;
  }

  addBaseStats(character: CharacterUnprocessed, stat: AttributeName, amount: number) {
    character.baseAttributes[stat] = (character.baseAttributes[stat] || 0) + amount;
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
  ): asserts character is Character {
    const { modifiers } = this.settings;
    const { damageMultiplier } = modifiers;

    character.valid = true;

    this.calcStats(character, modifiers, noRounding);

    const powerDamageScore = this.calcPower(character, damageMultiplier);
    const condiDamageScore = this.calcCondi(character, damageMultiplier, Attributes.CONDITION);
    character.attributes['Damage'] =
      powerDamageScore + condiDamageScore + (character.attributes['Flat DPS'] || 0);

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
  ): asserts character is Character {
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
        const CONDI_CACHE_ID = attributes['Expertise'] + attributes['Condition Damage'] * 10000;
        condiDamageScore =
          this.condiResultCache?.get(CONDI_CACHE_ID) ||
          this.calcCondi(character, damageMultiplier, settings.relevantConditions);
        this.condiResultCache?.set(CONDI_CACHE_ID, condiDamageScore);
      }

      attributes['Damage'] =
        powerDamageScore + condiDamageScore + (character.attributes['Flat DPS'] || 0);
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
  ): asserts character is Character {
    const { settings } = this;

    const round = noRounding ? (val: number) => val : roundEven;

    character.attributes = { ...character.baseAttributes };
    const { attributes, baseAttributes } = character;

    for (const [attribute, conversion] of modifiers['convert']) {
      const maybeRound = enumArrayIncludes(allAttributePointKeys, attribute)
        ? round
        : (val: number) => val;
      for (const [source, percent] of conversion) {
        attributes[attribute] += maybeRound(baseAttributes[source] * percent);
      }
    }

    for (const [attribute, bonus] of modifiers['buff']) {
      attributes[attribute] = (attributes[attribute] || 0) + bonus;
    }

    attributes['Critical Chance'] += (attributes['Precision'] - 1000) / 21 / 100;
    attributes['Critical Damage'] += attributes['Ferocity'] / 15 / 100;

    attributes['Boon Duration'] += attributes['Concentration'] / 15 / 100;
    attributes['Condition Duration'] += attributes['Expertise'] / 15 / 100;

    attributes['Health'] = round(
      (attributes['Health'] + attributes['Vitality'] * 10) *
        (1 + (attributes['Maximum Health'] || 0)),
    );

    attributes['Armor'] += attributes['Toughness'];

    // clones/phantasms/shroud

    if (settings.profession === 'Mesmer') {
      // mesmer illusions: special bonuses are INSTEAD OF player attributes
      attributes['Clone Critical Chance'] += (attributes['Precision'] - 1000) / 21 / 100;
      attributes['Phantasm Critical Chance'] += (attributes['Precision'] - 1000) / 21 / 100;
      attributes['Phantasm Critical Damage'] += attributes['Ferocity'] / 15 / 100;
    } else if (attributes['Power2 Coefficient']) {
      // necromancer shroud: special bonuses are IN ADDITION TO player attributes
      attributes['Alternative Power'] =
        (attributes['Alternative Power'] ?? 0) + attributes['Power'];
      attributes['Alternative Critical Chance'] =
        (attributes['Alternative Critical Chance'] ?? 0) +
        attributes['Critical Chance'] +
        (attributes['Alternative Precision'] ?? 0) / 21 / 100;
      attributes['Alternative Critical Damage'] =
        (attributes['Alternative Critical Damage'] ?? 0) +
        attributes['Critical Damage'] +
        (attributes['Alternative Ferocity'] ?? 0) / 15 / 100;
    }

    for (const [attribute, conversion] of modifiers['convertAfterBuffs']) {
      const maybeRound = enumArrayIncludes(allAttributePointKeys, attribute)
        ? round
        : (val: number) => val;
      for (const [source, percent] of conversion) {
        if (source === 'Critical Chance') {
          attributes[attribute] += maybeRound(clamp(attributes['Critical Chance'], 0, 1) * percent);
        } else if (source === 'Clone Critical Chance') {
          attributes[attribute] += maybeRound(
            clamp(attributes['Clone Critical Chance'] ?? 0, 0, 1) * percent,
          );
        } else if (source === 'Phantasm Critical Chance') {
          attributes[attribute] += maybeRound(
            clamp(attributes['Phantasm Critical Chance'] ?? 0, 0, 1) * percent,
          );
        } else {
          attributes[attribute] += maybeRound(attributes[source] * percent);
        }
      }
    }
  }

  checkInvalid(character: Character) {
    const { settings } = this;
    const { attributes } = character;

    const invalid =
      (settings.minBoonDuration !== null &&
        attributes['Boon Duration'] < settings.minBoonDuration / 100) ||
      (settings.minQuicknessDuration !== null &&
        attributes['Boon Duration'] + (attributes['Quickness Duration'] ?? 0) <
          settings.minQuicknessDuration / 100) ||
      (settings.minHealingPower !== null &&
        attributes['Healing Power'] < settings.minHealingPower) ||
      (settings.minToughness !== null && attributes['Toughness'] < settings.minToughness) ||
      (settings.maxToughness !== null && attributes['Toughness'] > settings.maxToughness) ||
      (settings.minHealth !== null && attributes['Health'] < settings.minHealth) ||
      (settings.minCritChance !== null &&
        attributes['Critical Chance'] < settings.minCritChance / 100) ||
      (settings.minOutgoingHealing !== null &&
        (attributes['Outgoing Healing'] ?? 0) < settings.minOutgoingHealing / 100);
    if (invalid) {
      character.valid = false;
    }

    return invalid;
  }

  checkInvalidIndicators(character: Character) {
    const { settings } = this;
    const { attributes } = character;

    const invalid =
      (settings.minDamage !== null && attributes['Damage'] < settings.minDamage) ||
      (settings.minHealing !== null && attributes['Healing'] < settings.minHealing) ||
      (settings.minSurvivability !== null &&
        attributes['Survivability'] < settings.minSurvivability);
    if (invalid) {
      character.valid = false;
    }

    return invalid;
  }

  calcPower(character: Character, damageMultiplier: DamageMultiplier) {
    const { settings } = this;
    const { attributes } = character;

    const critDmg = attributes['Critical Damage'] * damageMultiplier['Outgoing Critical Damage'];
    const critChance = clamp(attributes['Critical Chance'], 0, 1);

    // this should really just overwrite the 'Critical Damage' value, but we use
    // it for "the critical damage stat in the hero panel," which includes
    // ferocity but excludes "critical hits do more damage" modifiers
    if (damageMultiplier['Outgoing Critical Damage'] !== 1) {
      attributes['Player Critical Damage'] = critDmg;
    }

    attributes['Effective Power'] = attributes['Power'] * (1 + critChance * (critDmg - 1));

    // 2597: standard enemy armor value, also used for ingame damage tooltips
    let powerDamage =
      ((attributes['Power Coefficient'] || 0) / 2597) *
        attributes['Effective Power'] *
        damageMultiplier['Outgoing Strike Damage'] +
      ((attributes['NonCrit Power Coefficient'] || 0) / 2597) *
        attributes['Power'] *
        damageMultiplier['Outgoing Strike Damage'];

    attributes['Power DPS'] = powerDamage;

    if (attributes['Power2 Coefficient']) {
      if (settings.profession === 'Mesmer') {
        // mesmer illusions: special bonuses are INSTEAD OF player attributes
        attributes['Phantasm Critical Damage'] *=
          damageMultiplier['Outgoing Phantasm Critical Damage'];
        const phantasmCritChance = clamp(attributes['Phantasm Critical Chance'], 0, 1);

        attributes['Phantasm Effective Power'] =
          attributes['Power'] *
          (1 + phantasmCritChance * (attributes['Phantasm Critical Damage'] - 1));

        const phantasmPowerDamage =
          ((attributes['Power2 Coefficient'] || 0) / 2597) *
          attributes['Phantasm Effective Power'] *
          damageMultiplier['Outgoing Phantasm Damage'];
        attributes['Power2 DPS'] = phantasmPowerDamage;
        powerDamage += phantasmPowerDamage;
      } else {
        // necromancer shroud: special bonuses are IN ADDITION TO player attributes
        attributes['Alternative Critical Damage'] *=
          damageMultiplier['Outgoing Critical Damage'] *
          damageMultiplier['Outgoing Alternative Critical Damage'];
        const alternativeCritChance = clamp(attributes['Alternative Critical Chance'], 0, 1);

        attributes['Alternative Effective Power'] =
          attributes['Alternative Power'] *
          (1 + alternativeCritChance * (attributes['Alternative Critical Damage'] - 1));

        const alternativePowerDamage =
          ((attributes['Power2 Coefficient'] || 0) / 2597) *
          attributes['Alternative Effective Power'] *
          damageMultiplier['Outgoing Strike Damage'] *
          damageMultiplier['Outgoing Alternative Damage'];
        attributes['Power2 DPS'] = alternativePowerDamage;
        powerDamage += alternativePowerDamage;
      }
    } else {
      attributes['Power2 DPS'] = 0;
    }

    const siphonDamage =
      ((attributes['Siphon Base Coefficient'] || 0) +
        (attributes['Siphon Coefficient'] || 0) * attributes['Power']) *
      damageMultiplier['Outgoing Siphon Damage'];
    attributes['Siphon DPS'] = siphonDamage;

    return powerDamage + siphonDamage;
  }

  conditionDamageTick = (condition: ConditionName, cdmg: number, mult: number): number =>
    (this.conditionData[condition].factor * cdmg + this.conditionData[condition].baseDamage) * mult;

  calcCondi(
    character: Character,
    damageMultiplier: DamageMultiplier,
    relevantConditions: readonly DamagingConditionName[],
  ) {
    const { settings } = this;
    const { attributes } = character;

    let condiDamageScore = 0;
    for (const condition of relevantConditions) {
      const cdmg = attributes['Condition Damage'];
      const mult =
        damageMultiplier['Outgoing Condition Damage'] *
        damageMultiplier[`Outgoing ${condition} Damage`];

      switch (condition) {
        case 'Torment':
          attributes[`Torment Damage Tick`] =
            this.conditionDamageTick('Torment', cdmg, mult) * (1 - settings.movementUptime) +
            this.conditionDamageTick('TormentMoving', cdmg, mult) * settings.movementUptime;
          break;
        case 'Confusion':
          attributes[`Confusion Damage Tick`] =
            this.conditionDamageTick('Confusion', cdmg, mult) +
            this.conditionDamageTick('ConfusionActive', cdmg, mult) * settings.attackRate;
          break;
        default:
          attributes[`${condition} Damage Tick`] = this.conditionDamageTick(condition, cdmg, mult);
      }

      const duration =
        1 +
        clamp((attributes[`${condition} Duration`] || 0) + attributes['Condition Duration'], 0, 1) +
        attributes['Condition Duration Uncapped'];

      const stacks = (attributes[`${condition} Coefficient`] || 0) * duration;
      attributes[`${condition} Stacks`] = stacks;

      const DPS = stacks * (attributes[`${condition} Damage Tick`] || 1);
      attributes[`${condition} DPS`] = DPS;

      condiDamageScore += DPS;
    }

    return condiDamageScore;
  }

  calcSurvivability(character: Character, damageMultiplier: DamageMultiplier) {
    const { attributes } = character;

    attributes['Effective Health'] =
      attributes['Health'] * attributes['Armor'] * (1 / damageMultiplier['Incoming Strike Damage']);

    attributes['Survivability'] = attributes['Effective Health'] / 1967;
  }

  calcHealing(character: Character) {
    const { settings } = this;
    const { attributes } = character;

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

  calcResults(character: Character) {
    const { settings } = this;
    const { attributes } = character;

    const value = character.attributes[settings.rankby];

    const indicators = {} as Record<IndicatorName, number>;
    for (const attribute of Attributes.INDICATORS) {
      indicators[attribute] = attributes[attribute];
    }

    // baseline for comparing adding/subtracting +5 infusions
    const baseline = this.clone(character);
    this.updateAttributes(baseline, true);

    // effective gain from adding +5 infusions
    const effectivePositiveValues: Record<string, number> = {};
    for (const attribute of ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise']) {
      const temp = this.clone(character);
      temp.baseAttributes[attribute] += 5;

      this.updateAttributes(temp, true);
      effectivePositiveValues[attribute] =
        temp.attributes['Damage'] - baseline.attributes['Damage'];
    }

    // effective loss by not having +5 infusions
    const effectiveNegativeValues: Record<string, number> = {};
    for (const attribute of ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise']) {
      const temp = this.clone(character);
      temp.baseAttributes[attribute] = Math.max(temp.baseAttributes[attribute] - 5, 0);

      this.updateAttributes(temp, true);
      effectiveNegativeValues[attribute] =
        temp.attributes['Damage'] - baseline.attributes['Damage'];
    }

    // effective damage distribution
    const effectiveDamageDistribution: Record<string, string> = {};
    for (const key of [...Object.keys(settings.distribution), 'Siphon']) {
      if (attributes[`${key} DPS`] === undefined) continue;

      const damage = attributes[`${key} DPS`] / attributes['Damage'];
      effectiveDamageDistribution[`${key}`] = `${(damage * 100).toFixed(1)}%`;
    }

    // damage indicator breakdown
    const damageBreakdown: Record<string, number> = {};
    for (const key of [...Object.keys(settings.distribution), 'Siphon']) {
      if (attributes[`${key} DPS`] === undefined) continue;

      damageBreakdown[`${key}`] = attributes[`${key} DPS`];
    }

    // template helper data
    // (finds the slope and intercept (y = mx + b) of each condition's DPS relative to input
    // coefficient; used to make templates easily)
    const coefficientHelper: Record<string, CoefficientHelperValue> = {};

    const attrsWithModifiedCoefficient = (newCoefficient: number) => {
      const newCharacter = this.clone(character);
      newCharacter.baseAttributes = { ...character.baseAttributes };
      objectKeys(settings.distribution).forEach((key) => {
        newCharacter.baseAttributes[`${key} Coefficient`] -= settings.distribution[key];
        newCharacter.baseAttributes[`${key} Coefficient`] += newCoefficient;
      });
      this.updateAttributes(newCharacter);
      return newCharacter.attributes;
    };

    const withOne = attrsWithModifiedCoefficient(1);
    const withZero = attrsWithModifiedCoefficient(0);

    for (const key of Object.keys(settings.distribution)) {
      coefficientHelper[key] = {
        slope: withOne[`${key} DPS`] - withZero[`${key} DPS`],
        intercept: withZero[`${key} DPS`],
      };
    }

    const results: Results = {
      value,
      indicators,
      effectivePositiveValues,
      effectiveNegativeValues,
      effectiveDamageDistribution,
      coefficientHelper,
      damageBreakdown,
    };

    // out of combat hero panel simulation (overrides both baseAttributes and modifiers)
    if (settings.unbuffedBaseAttributes && settings.unbuffedModifiers) {
      const temp = this.createCharacter(
        character.gear,
        character.gearStats,
        character.infusions,
        settings.unbuffedBaseAttributes,
      );
      this.calcStats(temp, settings.unbuffedModifiers);
      results.unbuffedAttributes = temp.attributes;
    }

    character.results = results;
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

      baseAttributes: { ...character.baseAttributes },
      infusions: { ...character.infusions },
    };
  }
}

// returns a positive value if B is better than A
export function characterLT(a: Character, b: Character, rankby: string): number {
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
