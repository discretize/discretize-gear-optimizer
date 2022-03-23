/* eslint-disable no-console */
import { all, call, cancelled, put, race, select, take } from 'redux-saga/effects';
import {
  mapEntries,
  mapValues,
  parseBoss,
  parseInfusionCount,
  parsePriority,
} from '../../utils/usefulFunctions';
import { calculate } from '../optimizer/multiCoreHandler';
import { ERROR, SUCCESS, WAITING } from '../optimizer/status';
import { getBuffsModifiers } from '../slices/buffs';
import {
  changeControl,
  changeError,
  changeFilteredList,
  changeList,
  changeSelectedCharacter,
  getList,
  getSelectedCharacter,
} from '../slices/controlsSlice';
import { getExtraModifiersModifiers } from '../slices/extraModifiers';
import { getExtrasCombinationsAndModifiers, getExtrasIds } from '../slices/extras';
import { getInfusionsModifiers } from '../slices/infusions';
import { getCustomAffixData } from '../slices/priorities';
import { getSkillsModifiers } from '../slices/skills';
import { getCurrentSpecialization, getTraitsModifiers } from '../slices/traits';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function createInput(
  state,
  specialization,
  appliedModifiers,
  cachedFormState,
  customAffixData,
  shouldDisplayExtras,
  extrasCombination,
) {
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

  return input;
}

function* runCalc() {
  let state;
  let currentList;
  let currentFilteredList;
  let combinations;
  let settings;
  let oldPercent;
  let originalSelectedCharacter;
  try {
    yield delay(0);

    const reduxState = yield select();
    state = reduxState.optimizer;

    const specialization = yield select(getCurrentSpecialization);

    const sharedModifiers = [
      ...(yield select(getBuffsModifiers) || []),
      ...(yield select(getExtraModifiersModifiers) || []),
      ...(yield select(getInfusionsModifiers) || []),
      ...(yield select(getSkillsModifiers) || []),
      ...(yield select(getTraitsModifiers) || []),
    ];

    const customAffixData = yield select(getCustomAffixData);

    // display extras in table if they have multiple options
    const shouldDisplayExtras = mapValues(
      yield select(getExtrasIds),
      (ids) => Array.isArray(ids) && ids.length > 1,
    );

    console.time('Calculation');

    console.groupCollapsed('Debug Info:');
    console.log('Redux State:', state);

    combinations = yield select(getExtrasCombinationsAndModifiers);

    for (const combination of combinations) {
      const { extrasCombination, extrasModifiers } = combination;
      const appliedModifiers = [...sharedModifiers, ...extrasModifiers];

      const cachedFormState = {
        traits: state.form.traits,
        skills: state.form.skills,
        extras: state.form.extras,
        buffs: state.form.buffs, // buffs are also needed to share a build and display the assumed buffs for the result
      };

      combination.input = createInput(
        state,
        specialization,
        appliedModifiers,
        cachedFormState,
        customAffixData,
        shouldDisplayExtras,
        extrasCombination,
      );
      console.log('Input option:', combination);
    }

    console.groupEnd();

    originalSelectedCharacter = yield select(getSelectedCharacter);

    // render list updates on a trailing throttle
    // back-to-back(to-back) list updates will only be rendered once
    let listRenderCounter = Infinity;
    const listThrottle = 3;

    for (const { percent: newPercent, isChanged, newList, newFilteredList } of calculate(
      combinations,
    )) {
      listRenderCounter++;
      if (isChanged) {
        currentList = newList;
        currentFilteredList = newFilteredList;
        if (listRenderCounter > listThrottle) {
          listRenderCounter = 0;
        }
      }
      if (listRenderCounter === listThrottle) {
        yield delay(0);
        yield put(changeList(currentList));
        yield put(changeFilteredList(currentFilteredList));
      }

      if (newPercent !== oldPercent) {
        yield put(changeControl({ key: 'progress', value: newPercent }));
        // console.log(`${newPercent}% done`);
        oldPercent = newPercent;
      }

      yield delay(0);
    }
    yield put(changeList(currentList));
    yield put(changeFilteredList(currentFilteredList));

    console.timeEnd('Calculation');
    console.time('Render Result');
    if (currentList.length > 0) {
      yield put(changeControl({ key: 'status', value: SUCCESS }));
    } else {
      yield put(changeControl({ key: 'status', value: ERROR }));
      yield put(
        changeError(
          'No result could be generated for the provided input. Please check your constraints (min boon duration, ...)!',
        ),
      );
    }

    yield delay(0);

    // automatically select the top result unless the user clicked one during the calculation
    const selectedCharacter = yield select(getSelectedCharacter);
    if (currentList && (!selectedCharacter || selectedCharacter === originalSelectedCharacter)) {
      yield put(changeSelectedCharacter(currentList[0]));
    }

    console.timeEnd('Render Result');
  } catch (e) {
    console.groupEnd();
    // eslint-disable-next-line no-alert
    alert(`There was an error in the calculation!\n\n${e}`);
    console.log(e);
    console.log('state:', { ...state });
    console.log('input combinations:', { ...combinations });
    console.log('settings:', { ...settings });
    console.log('list:', { ...currentList });
    yield put(changeControl({ key: 'status', value: WAITING }));
  } finally {
    console.groupEnd();
    if (yield cancelled()) {
      console.log(`Cancelled!`);
      console.timeEnd('Calculation');
      console.time('Render Result');
      const selectedCharacter = yield select(getSelectedCharacter);
      if (!selectedCharacter || selectedCharacter === originalSelectedCharacter) {
        currentList = yield select(getList);
        if (currentList && currentList[0]) {
          yield put(changeSelectedCharacter(currentList[0]));
        }
      }
      console.timeEnd('Render Result');
    }
  }
}

function* watchStart() {
  while (true) {
    yield take('START');
    yield race({
      task: call(runCalc),
      cancel: take('CANCEL'),
    });
  }
}

export default function* rootSaga() {
  yield all([watchStart()]);
}
