import {
  mapEntries,
  mapValues,
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
import { characterLT, createOptimizerCore } from './optimizerCore';

// eslint-disable-next-line id-length
const isArrayDifferent = (a, b) => {
  if (a.length !== b.length) return true;
  return a.some((_, i) => a[i] !== b[i]);
};

// todo: convert this file to a web worker handler

// eslint-disable-next-line import/prefer-default-export
export function* calculate(reduxState) {
  /**
   * set up input
   */

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

    console.log('Input option:', combination);
  }

  /**
   * set up multiple cores
   */

  for (const combination of combinations) {
    combination.core = createOptimizerCore(combination.input);
    combination.calculation = combination.core.calculate();
  }

  console.groupEnd();

  /**
   * iteration
   */

  const { rankby, runsAfterThisSlot } = combinations[0].core.settings;
  const globalCalculationTotal = runsAfterThisSlot[0] * combinations.length;

  let i = 0;
  let globalList = [];
  let globalFilteredList = [];
  while (true) {
    const combination = combinations[i];

    const currentIndex = i;
    i = (i + 1) % combinations.length;

    if (combination.done) continue;

    const { value: { isChanged, calculationRuns, newList } = {}, done } =
      combination.calculation.next();

    if (done) {
      combination.done = true;
    }

    if (isChanged) {
      combination.list = newList;

      // avoid pushing different arrays with the same contents, as this breaks react memoization

      const newGlobalList = combinations
        .flatMap(({ list }) => list || [])
        // eslint-disable-next-line id-length
        .sort((a, b) => characterLT(a, b, rankby))
        .slice(0, 50);

      if (isArrayDifferent(globalList, newGlobalList)) {
        globalList = newGlobalList;
      }

      const newGlobalFilteredList = combinations
        .map(({ list }) => list?.[0])
        .filter(Boolean)
        // eslint-disable-next-line id-length
        .sort((a, b) => characterLT(a, b, rankby));

      if (isArrayDifferent(globalFilteredList, newGlobalFilteredList)) {
        globalFilteredList = newGlobalFilteredList;
      }
    }

    console.log(`option ${currentIndex} progress: ${calculationRuns} / ${runsAfterThisSlot[0]}`);

    combination.calculationRuns = calculationRuns;

    const globalCalculationRuns = combinations.reduce(
      (prev, cur) => prev + (cur.calculationRuns ?? 0),
      0,
    );
    console.log(`total progress: ${globalCalculationRuns} / ${globalCalculationTotal}`);

    const result = {
      percent: Math.floor((globalCalculationRuns * 100) / globalCalculationTotal),
      isChanged,
      list: globalList,
      filteredList: globalFilteredList,
    };

    if (combinations.some((comb) => !comb.done)) {
      yield result;
    } else {
      return result;
    }
  }
}
