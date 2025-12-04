/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-case-declarations */
/* eslint-disable no-console */
/* eslint-disable dot-notation */

import { allAttributePointKeys } from '../../assets/modifierdata/metadata';
import type { DamagingConditionName, IndicatorName } from '../../utils/gw2-data';
import {
  INFUSION_BONUS,
  conditionData,
  conditionDataWvW,
  damagingConditions,
  indicatorAttributes,
} from '../../utils/gw2-data';
import type { ValueOf } from '../../utils/usefulFunctions';
import { enumArrayIncludes, objectEntries, objectKeys } from '../../utils/usefulFunctions';
import type {
  Character,
  CharacterProcessed,
  CharacterUnprocessed,
  CharacterWithResults,
  EffectiveDistributionKey,
  Gear,
  GearStats,
  OptimizerCoreSettings,
  Results,
  Scenario,
  ScenarioProcessed,
} from './types/optimizerTypes';
import { iteratePartitions } from './utils/combinatorics';
import { clamp, cloneScenario, roundEven } from './utils/utils';

const roundOne = (num: number) => Math.round(num * 10) / 10;

/*
 * ------------------------------------------------------------------------
 * Core Optimizer Logic
 * ------------------------------------------------------------------------
 */

export type CalculateGenerator = ReturnType<OptimizerCore['calculate']>;

export const UPDATE_MS = 90;

export class OptimizerCore {
  settings: OptimizerCoreSettings;
  applyInfusionsFunction: (
    this: OptimizerCore,
    gear: Gear,
    gearStats: GearStats,
    overrides?: Partial<Character>,
  ) => void;

  condiResultCache = new Map<number, number>();
  worstScore: number = 0;
  list: CharacterProcessed[] = [];
  isChanged = true;
  uniqueIDCounter = 0;
  randomId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  conditionData: typeof conditionData;

  constructor(settings: OptimizerCoreSettings) {
    this.settings = settings;
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
          newList: this.isChanged ? this.getListWithResults() : undefined,
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

    yield {
      isChanged: this.isChanged,
      calculationRuns,
      newList: this.isChanged ? this.getListWithResults() : undefined,
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
        yield {
          isChanged: this.isChanged,
          calculationRuns,
          newList: this.isChanged ? this.getListWithResults() : undefined,
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

    yield {
      isChanged: this.isChanged,
      calculationRuns,
      newList: this.isChanged ? this.getListWithResults() : undefined,
    };
  }

  createCharacter(
    gear: Gear,
    gearStats: GearStats,
    infusions: Character['infusions'],
    overrides: Partial<CharacterUnprocessed> = {},
  ) {
    const character: CharacterUnprocessed = {
      gear, // passed by reference
      infusions, // passed by reference
      gearStats, // passed by reference
      valid: true,
      scenarios: this.settings.scenarios.map(cloneScenario),
      ...overrides,
    };

    for (const scenario of character.scenarios) {
      // apply gear and infusions
      for (const [stat, value] of objectEntries(gearStats)) {
        scenario.baseAttributes[stat] += value;
      }
      for (const [stat, count] of objectEntries(infusions)) {
        scenario.baseAttributes[stat] += count * INFUSION_BONUS;
      }
    }

    return character;
  }

  // Applies no infusions
  applyInfusionsNone(gear: Gear, gearStats: GearStats, overrides?: Partial<Character>) {
    const character = this.createCharacter(gear, gearStats, {}, overrides);
    this.updateAttributesFast(character);
    this.insertCharacter(character);
  }

  // Just applies the primary infusion
  applyInfusionsPrimary(gear: Gear, gearStats: GearStats, overrides?: Partial<Character>) {
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
  applyInfusionsFew(gear: Gear, gearStats: GearStats, overrides?: Partial<Character>) {
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
  applyInfusionsSecondary(gear: Gear, gearStats: GearStats, overrides?: Partial<Character>) {
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
          if (character.valid && character.attributes[rankby] !== previousResult) {
            this.insertCharacter(character);
            previousResult = character.attributes[rankby];
          }
        }
      }
    }
  }

  // Tests every valid combination of 18 infusions and inserts the best result
  applyInfusionsSecondaryNoDuplicates(
    gear: Gear,
    gearStats: GearStats,
    overrides?: Partial<Character>,
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
            if (!best || characterLT(best, character, rankby) > 0) {
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

    settings.infusionOptions.forEach(({ type, count }) => {
      for (const scenario of temp.scenarios) {
        scenario.baseAttributes[type] += count * INFUSION_BONUS;
      }
    });
    this.updateAttributesFast(temp, true);
    return temp.attributes[settings.rankby] > this.worstScore;
  }

  insertCharacter(character: CharacterProcessed) {
    const { settings } = this;

    if (
      !character.valid ||
      (this.worstScore && this.worstScore > character.attributes[settings.rankby])
    ) {
      return;
    }

    this.updateAttributes(character);
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
    character.valid = true;

    this.calcStats(character, noRounding);

    character.scenarios.forEach((scenario) => {
      this.calcPowerScenario(scenario, character);
      this.calcCondiScenario(scenario, character, damagingConditions);
      this.calcHealingScenario(scenario, character);
      this.calcSurvivabilityScenario(scenario, character);
    });
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
    character.valid = true;

    this.calcStats(character);

    if (!skipValidation && this.checkInvalid(character)) {
      return;
    }

    if (settings.rankby === 'Damage' || settings.minDamage) {
      character.scenarios.forEach((scenario) => this.calcPowerScenario(scenario, character));

      // cache condi result based on cdmg and expertise
      if (settings.disableCondiResultCache) {
        character.scenarios.forEach((scenario) =>
          this.calcCondiScenario(scenario, character, settings.relevantConditions),
        );
      } else if (settings.relevantConditions.length > 0) {
        const CONDI_CACHE_ID =
          character.scenarios[0].attributes['Expertise'] +
          character.scenarios[0].attributes['Condition Damage'] * 10000;

        const cachedCondiDamageScore = this.condiResultCache?.get(CONDI_CACHE_ID);
        if (cachedCondiDamageScore !== undefined) {
          character.attributes['Damage'] += cachedCondiDamageScore;
        } else {
          const condiDamageScore = character.scenarios
            .map((scenario) =>
              this.calcCondiScenario(scenario, character, settings.relevantConditions),
            )
            .reduce((a, b) => a + b);
          this.condiResultCache?.set(CONDI_CACHE_ID, condiDamageScore);
        }
      }
    }
    if (settings.rankby === 'Healing' || settings.minHealing) {
      character.scenarios.map((scenario) => this.calcHealingScenario(scenario, character));
    }
    if (settings.rankby === 'Survivability' || settings.minSurvivability) {
      character.scenarios.map((scenario) => this.calcSurvivabilityScenario(scenario, character));
    }

    if (!skipValidation) {
      this.checkInvalidIndicators(character);
    }
  }

  calcStats(
    character: CharacterUnprocessed,
    noRounding = false,
  ): asserts character is CharacterProcessed {
    character.scenarios.forEach((scenario) => this.calcStatsScenario(scenario, noRounding));

    character.attributes = {
      'Damage': 0,
      'Survivability': 0,
      'Healing': 0,

      'Power DPS': 0,
      'Power2 DPS': 0,
      'Siphon DPS': 0,
      'Other DPS': 0,

      'Bleeding DPS': 0,
      'Burning DPS': 0,
      'Confusion DPS': 0,
      'Poison DPS': 0,
      'Torment DPS': 0,
    };
  }

  calcStatsScenario(scenario: Scenario, noRounding = false): asserts scenario is ScenarioProcessed {
    const { settings } = this;
    const { modifiers } = scenario;

    const round = noRounding ? (val: number) => val : roundEven;

    scenario.attributes = { ...scenario.baseAttributes };
    const { attributes, baseAttributes } = scenario;

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
      attributes['Clone Critical Chance']! += (attributes['Precision'] - 1000) / 21 / 100;
      attributes['Phantasm Critical Chance']! += (attributes['Precision'] - 1000) / 21 / 100;
      attributes['Phantasm Critical Damage']! += attributes['Ferocity'] / 15 / 100;
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

  checkInvalid(character: CharacterProcessed) {
    const { settings } = this;
    const { attributes } = character.scenarios[0];

    const invalid =
      (settings.minBoonDuration !== undefined &&
        attributes['Boon Duration'] < settings.minBoonDuration / 100) ||
      (settings.minQuicknessDuration !== undefined &&
        attributes['Boon Duration'] + (attributes['Quickness Duration'] ?? 0) <
          settings.minQuicknessDuration / 100) ||
      (settings.minHealingPower !== undefined &&
        attributes['Healing Power'] < settings.minHealingPower) ||
      (settings.minToughness !== undefined && attributes['Toughness'] < settings.minToughness) ||
      (settings.maxToughness !== undefined && attributes['Toughness'] > settings.maxToughness) ||
      (settings.minHealth !== undefined && attributes['Health'] < settings.minHealth) ||
      (settings.minCritChance !== undefined &&
        attributes['Critical Chance'] < settings.minCritChance / 100) ||
      (settings.minOutgoingHealing !== undefined &&
        (attributes['Outgoing Healing'] ?? 0) < settings.minOutgoingHealing / 100);
    if (invalid) {
      character.valid = false;
    }

    return invalid;
  }

  checkInvalidIndicators(character: CharacterProcessed) {
    const { settings } = this;
    const { attributes } = character;

    const invalid =
      (settings.minDamage !== undefined && attributes['Damage'] < settings.minDamage) ||
      (settings.minHealing !== undefined && attributes['Healing'] < settings.minHealing) ||
      (settings.minSurvivability !== undefined &&
        attributes['Survivability'] < settings.minSurvivability);
    if (invalid) {
      character.valid = false;
    }

    return invalid;
  }

  calcPowerScenario(scenario: ScenarioProcessed, character: CharacterProcessed) {
    const { settings } = this;
    const {
      attributes,
      modifiers: { damageMultiplier },
      fraction,
    } = scenario;

    const critDmg = attributes['Critical Damage'] * damageMultiplier['Outgoing Critical Damage'];
    const critChance = clamp(attributes['Critical Chance'], 0, 1);

    // this should really just overwrite the 'Critical Damage' value, but we use
    // it for "the critical damage stat in the hero panel," which includes
    // ferocity but excludes "critical hits do more damage" modifiers
    if (damageMultiplier['Outgoing Critical Damage'] !== 1) {
      attributes['Player Critical Damage'] = critDmg;
    }

    attributes['Effective Power'] = attributes['Power'] * (1 + critChance * (critDmg - 1));

    let result = 0;

    // 2597: standard enemy armor value, also used for ingame damage tooltips
    const powerDamage =
      (attributes['Power Coefficient'] / 2597) *
        attributes['Effective Power'] *
        damageMultiplier['Outgoing Strike Damage'] +
      ((attributes['NonCrit Power Coefficient'] || 0) / 2597) *
        attributes['Power'] *
        damageMultiplier['Outgoing Strike Damage'];

    character.attributes['Power DPS'] += powerDamage * fraction;
    result += powerDamage;

    if (attributes['Power2 Coefficient']) {
      if (settings.profession === 'Mesmer') {
        // mesmer illusions: special bonuses are INSTEAD OF player attributes
        attributes['Phantasm Critical Damage']! *=
          damageMultiplier['Outgoing Phantasm Critical Damage'];
        const phantasmCritChance = clamp(attributes['Phantasm Critical Chance']!, 0, 1);

        attributes['Phantasm Effective Power'] =
          attributes['Power'] *
          (1 + phantasmCritChance * (attributes['Phantasm Critical Damage']! - 1));

        const phantasmPowerDamage =
          (attributes['Power2 Coefficient'] / 2597) *
          attributes['Phantasm Effective Power'] *
          damageMultiplier['Outgoing Phantasm Damage'];
        character.attributes['Power2 DPS'] += phantasmPowerDamage * fraction;
        result += phantasmPowerDamage;
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
          (attributes['Power2 Coefficient'] / 2597) *
          attributes['Alternative Effective Power'] *
          damageMultiplier['Outgoing Strike Damage'] *
          damageMultiplier['Outgoing Alternative Damage'];
        character.attributes['Power2 DPS'] += alternativePowerDamage * fraction;
        result += alternativePowerDamage;
      }
    }

    const siphonDamage =
      ((attributes['Siphon Base Coefficient'] || 0) +
        (attributes['Siphon Coefficient'] || 0) * attributes['Power']) *
      damageMultiplier['Outgoing Siphon Damage'];
    character.attributes['Siphon DPS'] += siphonDamage * fraction;
    result += siphonDamage;

    const flatDamage = attributes['Flat DPS'];
    character.attributes['Other DPS'] += flatDamage * fraction;
    result += flatDamage;

    character.attributes['Damage'] += result * fraction;
  }

  conditionDamageTick = (data: ValueOf<typeof conditionData>, cdmg: number, mult: number): number =>
    (data.factor * cdmg + data.baseDamage) * mult;

  calcCondiScenario(
    scenario: ScenarioProcessed,
    character: CharacterProcessed,
    relevantConditions: readonly DamagingConditionName[],
  ) {
    const { settings, conditionData: data, conditionDamageTick } = this;
    const {
      attributes,
      modifiers: { damageMultiplier },
      fraction,
    } = scenario;

    let result = 0;
    for (const condition of relevantConditions) {
      const cdmg = attributes['Condition Damage'];
      const mult =
        damageMultiplier['Outgoing Condition Damage'] *
        damageMultiplier[`Outgoing ${condition} Damage`];

      switch (condition) {
        case 'Burning':
          attributes['Burning Damage Tick'] = this.settings.calculationTweaks.infernoBurningDamage
            ? conditionDamageTick(data.BurningInferno, attributes['Power'], mult)
            : conditionDamageTick(data.Burning, cdmg, mult);
          break;
        case 'Bleeding':
          attributes['Bleeding Damage Tick'] = conditionDamageTick(data.Bleeding, cdmg, mult);
          break;
        case 'Poison':
          attributes['Poison Damage Tick'] = conditionDamageTick(data.Poison, cdmg, mult);
          break;
        case 'Torment':
          attributes[`Torment Damage Tick`] =
            conditionDamageTick(data.Torment, cdmg, mult) * (1 - settings.movementUptime) +
            conditionDamageTick(data.TormentMoving, cdmg, mult) * settings.movementUptime;
          break;
        case 'Confusion':
          attributes[`Confusion Damage Tick`] =
            conditionDamageTick(data.Confusion, cdmg, mult) +
            conditionDamageTick(data.ConfusionActive, cdmg, mult) * settings.attackRate;
          break;

        default:
          condition satisfies never;
      }

      const duration =
        1 +
        clamp((attributes[`${condition} Duration`] || 0) + attributes['Condition Duration'], 0, 1) +
        attributes['Condition Duration Uncapped'];

      const stacks = (attributes[`${condition} Coefficient`] || 0) * duration;
      attributes[`${condition} Stacks`] = stacks;

      const DPS = stacks * (attributes[`${condition} Damage Tick`] || 1);
      character.attributes[`${condition} DPS`] += DPS * fraction;

      result += DPS;
    }

    character.attributes['Damage'] += result * fraction;

    // used for caching
    return result * fraction;
  }

  calcSurvivabilityScenario(scenario: ScenarioProcessed, character: CharacterProcessed) {
    const {
      attributes,
      modifiers: { damageMultiplier },
      fraction,
    } = scenario;

    attributes['Effective Health'] =
      attributes['Health'] * attributes['Armor'] * (1 / damageMultiplier['Incoming Strike Damage']);

    character.attributes['Survivability'] += (attributes['Effective Health'] / 1967) * fraction;
  }

  calcHealingScenario(scenario: ScenarioProcessed, character: CharacterProcessed) {
    const { attributes, fraction } = scenario;

    // reasonably representative skill: druid celestial avatar 4 pulse
    // 390 base, 0.3 coefficient
    attributes['Effective Healing'] =
      (attributes['Healing Power'] * 0.3 + 390) * (1 + (attributes['Outgoing Healing'] || 0));

    character.attributes['Healing'] += attributes['Effective Healing'] * fraction;
  }

  calcResults(character: CharacterProcessed): CharacterWithResults {
    if (character.results) return character as CharacterWithResults;

    const { settings } = this;
    const { attributes, scenarios } = character;

    // copy attributes/baseAttributes from first scenario
    Object.assign(attributes, scenarios[0].attributes);
    character.baseAttributes = scenarios[0].baseAttributes;

    const value = character.attributes[settings.rankby];

    const indicators = {} as Record<IndicatorName, number>;
    for (const attribute of indicatorAttributes) {
      indicators[attribute] = attributes[attribute];
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
      temp.scenarios.forEach((scenario) => {
        scenario.baseAttributes[attribute] += 5;
      });

      this.updateAttributes(temp, true);
      results.effectivePositiveValues[attribute] =
        temp.attributes['Damage'] - baseline.attributes['Damage'];
    }

    // effective loss by not having +5 infusions
    results.effectiveNegativeValues = {};
    for (const attribute of gainLossKeys) {
      const temp = this.clone(character);
      temp.scenarios.forEach((scenario) => {
        scenario.baseAttributes[attribute] = Math.max(scenario.baseAttributes[attribute] - 5, 0);
      });

      this.updateAttributes(temp, true);
      results.effectiveNegativeValues[attribute] =
        temp.attributes['Damage'] - baseline.attributes['Damage'];
    }

    const effectiveDistributionKeys = [
      ...Object.keys(settings.distribution),
      'Siphon',
      'Other',
    ] as EffectiveDistributionKey[];

    // effective damage distribution
    results.effectiveDamageDistribution = {};
    for (const key of effectiveDistributionKeys) {
      if (attributes[`${key} DPS`] === undefined) continue;

      const damage = attributes[`${key} DPS`] / attributes['Damage'];
      results.effectiveDamageDistribution[`${key}`] = `${(damage * 100).toFixed(1)}%`;
    }

    // damage indicator breakdown
    results.damageBreakdown = {};
    for (const key of effectiveDistributionKeys) {
      if (attributes[`${key} DPS`] === undefined) continue;

      results.damageBreakdown[`${key}`] = attributes[`${key} DPS`];
    }

    // template helper data
    // (finds the slope and intercept (y = mx + b) of each condition's DPS relative to input
    // coefficient; used to make templates easily)
    results.coefficientHelper = {};

    const attrsWithModifiedCoefficient = (newCoefficient: number) => {
      const newCharacter = this.clone(character);

      newCharacter.scenarios.forEach((scenario, i) => {
        scenario.baseAttributes = { ...character.scenarios[i].baseAttributes };

        objectKeys(settings.distribution).forEach((key) => {
          scenario.baseAttributes[`${key} Coefficient`] -= settings.distribution[key];
          scenario.baseAttributes[`${key} Coefficient`] += newCoefficient;
        });
      });

      this.updateAttributes(newCharacter);
      return newCharacter.attributes;
    };

    const withOne = attrsWithModifiedCoefficient(1);
    const withZero = attrsWithModifiedCoefficient(0);

    for (const key of objectKeys(settings.distribution)) {
      results.coefficientHelper[key] = {
        slope: withOne[`${key} DPS`] - withZero[`${key} DPS`],
        intercept: withZero[`${key} DPS`],
      };
    }

    // out of combat hero panel simulation (overrides both baseAttributes and modifiers)
    if (settings.unbuffedBaseAttributes && settings.unbuffedModifiers) {
      const unbuffedScenario: Scenario = {
        fraction: 1,
        baseAttributes: { ...settings.unbuffedBaseAttributes },
        modifiers: settings.unbuffedModifiers, // passed by reference; we (hopefully) don't modify these
      };
      const temp = this.createCharacter(character.gear, character.gearStats, character.infusions, {
        scenarios: [unbuffedScenario],
      });
      this.calcStatsScenario(temp.scenarios[0]);
      results.unbuffedAttributes = temp.scenarios[0].attributes;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete character.scenarios;

    return character as CharacterWithResults;
  }

  getListWithResults = () => this.list.map((character) => this.calcResults(character));

  /**
   * Clones a character. Scenarios' baseAttributes are cloned by value, so they can be mutated.
   *
   * @param {object} character
   * @returns {object} character
   */
  clone(character: CharacterUnprocessed): CharacterUnprocessed {
    return {
      gear: character.gear, // passed by reference
      gearStats: character.gearStats, // passed by reference
      valid: character.valid,
      scenarios: character.scenarios.map(cloneScenario),
      infusions: { ...character.infusions },
    };
  }
}

// returns a positive value if B is better than A
export function characterLT(
  a: CharacterProcessed | Character | undefined,
  b: CharacterProcessed | Character | undefined,
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
