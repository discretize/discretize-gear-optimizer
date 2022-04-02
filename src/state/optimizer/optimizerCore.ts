/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-case-declarations */
/* eslint-disable no-console */
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
  INFUSION_BONUS,
  Slots,
} from '../../utils/gw2-data';
import type {
  AffixName,
  ConditionName,
  ProfessionName,
  WeaponHandednessType,
} from '../../utils/gw2-data';
import { parseAmount } from '../../utils/usefulFunctions';

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

const clamp = (input: number, min: number, max: number): number => {
  if (input < min) return min;
  if (input > max) return max;
  return input;
};

/*
 * ------------------------------------------------------------------------
 * Core Optimizer Logic
 * ------------------------------------------------------------------------
 */

interface OptimizerCoreSettings {
  // these are direct copies or slight modifications of OptimizerInput
  profession: ProfessionName;
  specialization: string;
  weaponType: WeaponHandednessType;
  forcedAffixes: (AffixName | null)[]; // array of specific affix names for each slot, or '' for unspecfied
  rankby: 'Damage' | 'Survivability' | 'Healing';
  minBoonDuration: number | null;
  minHealingPower: number | null;
  minToughness: number | null;
  maxToughness: number | null;
  minHealth: number | null;
  minCritChance: number | null;
  maxResults: number;
  primaryInfusion: string;
  secondaryInfusion: string;
  primaryMaxInfusions: number;
  secondaryMaxInfusions: number;
  maxInfusions: number;
  distribution: Record<string, number>;
  attackRate: number;
  movementUptime: number;

  // these are in addition to the input
  infusionMode: string;
  affixes: AffixName[];
  forcedRing: boolean;
  forcedAcc: boolean;
  forcedWep: boolean;
  forcedArmor: boolean;
  slots: any;
  runsAfterThisSlot: any;
  affixesArray: AffixName[][];
  affixStatsArray: any;
  baseAttributes: Record<string, number>;
  modifiers: any;
  disableCondiResultCache: boolean;
  relevantConditions: ConditionName[];

  shouldDisplayExtras?: boolean;
  appliedModifiers?: any;
  cachedFormState?: any;
  extrasCombination?: any;
}
type OptimizerCoreMinimalSettings = Pick<
  OptimizerCoreSettings,
  | 'cachedFormState'
  | 'profession'
  | 'specialization'
  | 'weaponType'
  | 'appliedModifiers'
  | 'rankby'
  | 'shouldDisplayExtras'
  | 'extrasCombination'
>;
type Gear = AffixName[];
type GearStats = Record<string, number>;
interface Character {
  id?: string;
  settings: OptimizerCoreMinimalSettings;
  attributes: any;
  gear: Gear;
  gearStats: GearStats;
  valid: boolean;
  baseAttributes: OptimizerCoreSettings['baseAttributes'];
  infusions?: Record<string, any>;
  results?: Record<string, any>;
}
type AttributeName = string;

export class OptimizerCore {
  settings;
  minimalSettings;
  applyInfusionsFunction: (this: OptimizerCore, character: Character) => void;
  condiResultCache = new Map();
  worstScore: number = 0;
  list: Character[] = [];
  isChanged = true;
  uniqueIDCounter = 0;
  randomId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  constructor(settings: OptimizerCoreSettings, minimalSettings: OptimizerCoreMinimalSettings) {
    this.settings = settings;
    this.minimalSettings = minimalSettings;

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
    if (settings.affixes.length === 0) {
      return {
        isChanged: true,
        percent: 100,
        newList: [],
      };
    }

    let calculationRuns = 0;

    const calculationQueue: Gear[] = [];
    calculationQueue.push([]);
    const calculationStatsQueue: GearStats[] = [];
    calculationStatsQueue.push({});

    let iterationTimer = Date.now();
    const UPDATE_MS = 90;
    let cycles = 0;
    this.isChanged = true;
    while (calculationQueue.length > 0) {
      cycles++;

      // pause to update UI at around 15 frames per second
      if (cycles % 1000 === 0 && Date.now() - iterationTimer > UPDATE_MS) {
        yield {
          isChanged: this.isChanged,
          calculationRuns,
          newList: this.isChanged ? this.list.slice() : null,
        };
        this.isChanged = false;
        // UPDATE_MS = 55;
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
        this.testCharacter(gear, gearStats);
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
      newList: this.isChanged ? this.list.slice() : null,
    };
  }

  testCharacter(gear: Gear | undefined, gearStats: GearStats) {
    const { settings } = this;

    if (!gear) {
      return;
    }

    const character: Character = {
      gear, // passed by reference
      settings: this.minimalSettings, // passed by reference
      gearStats, // passed by reference
      attributes: null,
      valid: true,
      baseAttributes: { ...settings.baseAttributes },
    };

    // apply gear
    // eslint-disable-next-line guard-for-in
    for (const stat in gearStats) {
      character.baseAttributes[stat] += gearStats[stat];
    }

    // this.applyInfusionsFunction is aliased to the correct applyInfusions[mode] function during setup
    this.applyInfusionsFunction(character);
  }

  // Applies no infusions
  applyInfusionsNone(character: Character) {
    this.updateAttributesFast(character);
    this.insertCharacter(character);
  }

  // Just applies the primary infusion
  applyInfusionsPrimary(character: Character) {
    const { settings } = this;
    character.infusions = { [settings.primaryInfusion]: settings.primaryMaxInfusions };
    this.addBaseStats(
      character,
      settings.primaryInfusion,
      settings.primaryMaxInfusions * INFUSION_BONUS,
    );
    this.updateAttributesFast(character);
    this.insertCharacter(character);
  }

  // Just applies the maximum number of primary/secondary infusions, since the total is ≤18
  applyInfusionsFew(character: Character) {
    const { settings } = this;

    character.infusions = {
      [settings.primaryInfusion]: settings.primaryMaxInfusions,
      [settings.secondaryInfusion]: settings.secondaryMaxInfusions,
    };
    this.addBaseStats(
      character,
      settings.primaryInfusion,
      settings.primaryMaxInfusions * INFUSION_BONUS,
    );
    this.addBaseStats(
      character,
      settings.secondaryInfusion,
      settings.secondaryMaxInfusions * INFUSION_BONUS,
    );
    this.updateAttributesFast(character);
    this.insertCharacter(character);
  }

  // Inserts every valid combination of 18 infusions
  applyInfusionsSecondary(character: Character) {
    const { settings } = this;

    if (!this.worstScore || this.testInfusionUsefulness(character)) {
      let previousResult;

      let primaryCount = settings.primaryMaxInfusions;
      let secondaryCount = settings.maxInfusions - primaryCount;
      while (secondaryCount <= settings.secondaryMaxInfusions) {
        const temp = this.clone(character);
        this.addBaseStats(temp, settings.primaryInfusion, primaryCount * INFUSION_BONUS);
        this.addBaseStats(temp, settings.secondaryInfusion, secondaryCount * INFUSION_BONUS);
        this.updateAttributesFast(temp);
        if (temp.valid && temp.attributes[settings.rankby] !== previousResult) {
          temp.infusions = {
            [settings.primaryInfusion]: primaryCount,
            [settings.secondaryInfusion]: secondaryCount,
          };
          this.insertCharacter(temp);
          previousResult = temp.attributes[settings.rankby];
        }

        primaryCount--;
        secondaryCount++;
      }
    }
  }

  // Tests every valid combination of 18 infusions and inserts the best result
  applyInfusionsSecondaryNoDuplicates(character: Character) {
    const { settings } = this;

    if (!this.worstScore || this.testInfusionUsefulness(character)) {
      let best = null;

      let primaryCount = settings.primaryMaxInfusions;
      let secondaryCount = settings.maxInfusions - primaryCount;
      while (secondaryCount <= settings.secondaryMaxInfusions) {
        const temp = this.clone(character);
        this.addBaseStats(temp, settings.primaryInfusion, primaryCount * INFUSION_BONUS);
        this.addBaseStats(temp, settings.secondaryInfusion, secondaryCount * INFUSION_BONUS);
        this.updateAttributesFast(temp);
        if (temp.valid) {
          temp.infusions = {
            [settings.primaryInfusion]: primaryCount,
            [settings.secondaryInfusion]: secondaryCount,
          };
          if (!best || characterLT(best, temp, settings.rankby) > 0) {
            best = temp;
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

  testInfusionUsefulness(character: Character) {
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

  addBaseStats(character: Character, stat: AttributeName, amount: number) {
    character.baseAttributes[stat] = (character.baseAttributes[stat] || 0) + amount;
  }

  /**
   * Creates an {attributes} object parameter in the given character object and fills it with
   * calculated stats and damage/healing/survivability scores.
   *
   * @param {object} character
   * @param {boolean} [noRounding] - does not round conversions if true
   */
  updateAttributes(character: Character, noRounding = false) {
    const { damageMultiplier } = this.settings.modifiers;
    character.valid = true;

    this.calcStats(character, noRounding);

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
  updateAttributesFast(character: Character, skipValidation = false): boolean {
    const { settings } = this;
    const { damageMultiplier } = settings.modifiers;
    character.valid = true;

    this.calcStats(character);
    const { attributes } = character;

    if (!skipValidation && this.checkInvalid(character)) {
      return false;
    }

    switch (settings.rankby) {
      case 'Damage':
        const powerDamageScore = this.calcPower(character, damageMultiplier);

        // cache condi result based on cdmg and expertise
        let condiDamageScore = 0;
        if (settings.disableCondiResultCache) {
          condiDamageScore = this.calcCondi(
            character,
            damageMultiplier,
            settings.relevantConditions,
          );
        } else if (settings.relevantConditions.length > 0) {
          const CONDI_CACHE_ID = attributes['Expertise'] + attributes['Condition Damage'] * 10000;
          condiDamageScore =
            this.condiResultCache?.get(CONDI_CACHE_ID) ||
            this.calcCondi(character, damageMultiplier, settings.relevantConditions);
          this.condiResultCache?.set(CONDI_CACHE_ID, condiDamageScore);
        }

        attributes['Damage'] =
          powerDamageScore + condiDamageScore + (character.attributes['Flat DPS'] || 0);
        break;
      case 'Survivability':
        this.calcSurvivability(character, damageMultiplier);
        break;
      case 'Healing':
        this.calcHealing(character);
        break;
      // no default
    }

    return true;
  }

  calcStats(character: Character, noRounding = false) {
    const { settings } = this;

    const round = noRounding ? (val: number) => val : roundEven;

    character.attributes = { ...character.baseAttributes };
    const { attributes, baseAttributes } = character;

    for (const [attribute, conversion] of settings.modifiers['convert']) {
      const maybeRound = allAttributePointKeys.includes(attribute) ? round : (val: number) => val;
      for (const [source, percent] of conversion) {
        attributes[attribute] += maybeRound(baseAttributes[source] * percent);
      }
    }

    for (const [attribute, bonus] of settings.modifiers['buff']) {
      attributes[attribute] = (attributes[attribute] || 0) + bonus;
    }

    attributes['Critical Chance'] += (attributes['Precision'] - 1000) / 21 / 100;
    attributes['Critical Damage'] += attributes['Ferocity'] / 15 / 100;

    attributes['Boon Duration'] += attributes['Concentration'] / 15 / 100;

    attributes['Health'] = round(
      (attributes['Health'] + attributes['Vitality'] * 10) *
        (1 + (attributes['Maximum Health'] || 0)),
    );

    for (const [attribute, conversion] of settings.modifiers['convertAfterBuffs']) {
      const maybeRound = allAttributePointKeys.includes(attribute) ? round : (val: number) => val;
      for (const [source, percent] of conversion) {
        if (source === 'Critical Chance') {
          attributes[attribute] += maybeRound(clamp(attributes['Critical Chance'], 0, 1) * percent);
        } else if (source === 'Critical Chance -7') {
          attributes[attribute] += maybeRound(
            clamp(attributes['Critical Chance'] - 0.07, 0, 1) * percent,
          );
        } else if (source === 'Critical Chance -20') {
          attributes[attribute] += maybeRound(
            clamp(attributes['Critical Chance'] - 0.2, 0, 1) * percent,
          );
        } else if (source === 'Critical Chance -27') {
          attributes[attribute] += maybeRound(
            clamp(attributes['Critical Chance'] - 0.27, 0, 1) * percent,
          );
        } else if (source === 'Critical Chance -30') {
          attributes[attribute] += maybeRound(
            clamp(attributes['Critical Chance'] - 0.3, 0, 1) * percent,
          );
        } else if (source === 'Critical Chance -37') {
          attributes[attribute] += maybeRound(
            clamp(attributes['Critical Chance'] - 0.37, 0, 1) * percent,
          );
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
      (settings.minHealingPower !== null &&
        attributes['Healing Power'] < settings.minHealingPower) ||
      (settings.minToughness !== null && attributes['Toughness'] < settings.minToughness) ||
      (settings.maxToughness !== null && attributes['Toughness'] > settings.maxToughness) ||
      (settings.minHealth !== null && attributes['Health'] < settings.minHealth) ||
      (settings.minCritChance !== null &&
        attributes['Critical Chance'] < settings.minCritChance / 100);
    if (invalid) {
      character.valid = false;
    }

    return invalid;
  }

  calcPower(character: Character, damageMultiplier: Record<string, number>) {
    const { attributes } = character;

    const critDmg = attributes['Critical Damage'] * damageMultiplier['Critical Damage'];
    const critChance = clamp(attributes['Critical Chance'], 0, 1);

    attributes['Effective Power'] =
      attributes['Power'] * (1 + critChance * (critDmg - 1)) * damageMultiplier['Strike Damage'];

    // 2597: standard enemy armor value, also used for ingame damage tooltips
    const powerDamage =
      ((attributes['Power Coefficient'] || 0) / 2597) * attributes['Effective Power'];
    attributes['Power DPS'] = powerDamage;

    const siphonDamage =
      (character.attributes['Siphon Base Coefficient'] || 0) * damageMultiplier['Siphon Damage'];
    attributes['Siphon DPS'] = powerDamage;

    return powerDamage + siphonDamage;
  }

  conditionDamageTick = (condition: ConditionName, cdmg: number, mult: number): number =>
    (conditionData[condition].factor * cdmg + conditionData[condition].baseDamage) * mult;

  calcCondi(
    character: Character,
    damageMultiplier: Record<string, number>,
    relevantConditions: ConditionName[],
  ) {
    const { settings } = this;
    const { attributes } = character;

    attributes['Condition Duration'] += attributes['Expertise'] / 15 / 100;
    let condiDamageScore = 0;
    for (const condition of relevantConditions) {
      const cdmg = attributes['Condition Damage'];
      const mult = damageMultiplier['Condition Damage'] * damageMultiplier[`${condition} Damage`];

      switch (condition) {
        case 'Torment':
          attributes[`Torment Damage`] =
            this.conditionDamageTick('Torment', cdmg, mult) * (1 - settings.movementUptime) +
            this.conditionDamageTick('TormentMoving', cdmg, mult) * settings.movementUptime;
          break;
        case 'Confusion':
          attributes[`Confusion Damage`] =
            this.conditionDamageTick('Confusion', cdmg, mult) +
            this.conditionDamageTick('ConfusionActive', cdmg, mult) * settings.attackRate;
          break;
        default:
          attributes[`${condition} Damage`] = this.conditionDamageTick(condition, cdmg, mult);
      }

      const duration =
        1 +
        clamp((attributes[`${condition} Duration`] || 0) + attributes['Condition Duration'], 0, 1);

      const stacks = (attributes[`${condition} Coefficient`] || 0) * duration;
      attributes[`${condition} Stacks`] = stacks;

      const DPS = stacks * (attributes[`${condition} Damage`] || 1);
      attributes[`${condition} DPS`] = DPS;

      condiDamageScore += DPS;
    }

    return condiDamageScore;
  }

  calcSurvivability(character: Character, damageMultiplier: Record<string, number>) {
    const { attributes } = character;

    attributes['Armor'] += attributes['Toughness'];

    attributes['Effective Health'] =
      attributes['Health'] * attributes['Armor'] * (1 / damageMultiplier['Damage Taken']);

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

    character.results = {};
    const { attributes, results } = character;

    results.value = character.attributes[settings.rankby];

    results.indicators = {};
    for (const attribute of Attributes.INDICATORS) {
      results.indicators[attribute] = Number(attributes[attribute].toFixed(4)).toLocaleString(
        'en-US',
      );
    }

    // baseline for comparing adding/subtracting +5 infusions
    const baseline = this.clone(character);
    this.updateAttributes(baseline, true);

    // effective gain from adding +5 infusions
    results.effectivePositiveValues = {};
    for (const attribute of ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise']) {
      const temp = this.clone(character);
      temp.baseAttributes[attribute] += 5;

      this.updateAttributes(temp, true);
      results.effectivePositiveValues[attribute] = Number(
        (temp.attributes['Damage'] - baseline.attributes['Damage']).toFixed(5),
      ).toLocaleString('en-US');
    }

    // effective loss by not having +5 infusions
    results.effectiveNegativeValues = {};
    for (const attribute of ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise']) {
      const temp = this.clone(character);
      temp.baseAttributes[attribute] = Math.max(temp.baseAttributes[attribute] - 5, 0);

      this.updateAttributes(temp, true);
      results.effectiveNegativeValues[attribute] = Number(
        (temp.attributes['Damage'] - baseline.attributes['Damage']).toFixed(5),
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
        results.damageBreakdown['Power'] = attributes['Power DPS']
          .toFixed(2)
          .toLocaleString('en-US');
      } else {
        results.damageBreakdown[`${key} Damage`] = attributes[`${key} DPS`]
          .toFixed(2)
          .toLocaleString('en-US');
      }
    }

    // template helper data
    // (finds the slope and intercept (y = mx + b) of each condition's DPS relative to input
    // coefficient; used to make templates easily)
    results.coefficientHelper = {};

    const attrsWithModifiedCoefficient = (newCoefficient: number) => {
      const newCharacter = this.clone(character);
      newCharacter.baseAttributes = { ...character.baseAttributes };
      Object.keys(settings.distribution).forEach((key) => {
        newCharacter.baseAttributes[`${key} Coefficient`] -= settings.distribution[key];
        newCharacter.baseAttributes[`${key} Coefficient`] += newCoefficient;
      });
      this.updateAttributes(newCharacter);
      return newCharacter.attributes;
    };

    const withOne = attrsWithModifiedCoefficient(1);
    const withZero = attrsWithModifiedCoefficient(0);

    for (const key of Object.keys(settings.distribution)) {
      results.coefficientHelper[key] = {
        slope: withOne[`${key} DPS`] - withZero[`${key} DPS`],
        intercept: withZero[`${key} DPS`],
      };
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
  clone(character: Character): Character {
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
