/* eslint-disable no-console */
import { all, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  mapEntries,
  mapValues,
  parseBoss,
  parseInfusionCount,
  parsePriority,
} from '../../utils/usefulFunctions';
import { calculate } from '../optimizer/multiCoreHandler';
import { ERROR, RUNNING, STOPPED, SUCCESS, WAITING } from '../optimizer/status';
import { getBuffsModifiers } from '../slices/buffs';
import {
  changeControl,
  changeError,
  changeFilteredList,
  changeList,
  changeSelectedCharacter,
  getControl,
  getSelectedCharacter,
} from '../slices/controlsSlice';
import { getExtraModifiersModifiers } from '../slices/extraModifiers';
import { getExtrasCombinationsAndModifiers, getExtrasIds } from '../slices/extras';
import { getInfusionsModifiers } from '../slices/infusions';
import { getCustomAffixData } from '../slices/priorities';
import { getSkillsModifiers } from '../slices/skills';
import { getCurrentSpecialization, getTraitsModifiers } from '../slices/traits';
import SagaTypes from './sagaTypes';

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
  let currentPercent;
  let combinations;
  let settings;
  let originalSelectedCharacter;
  try {
    yield put(changeControl({ key: 'status', value: RUNNING }));
    yield put(changeControl({ key: 'progress', value: 0 }));
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

    let elapsed = 0;
    let timer = performance.now();

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
    let listRenderCounter = 3;
    const listThrottle = 3;

    let done = false;
    let value;

    const resultGenerator = calculate(combinations);

    while (true) {
      ({ value, done } = yield resultGenerator.next());
      const { percent, isChanged, list, filteredList } = value;
      currentList = list;
      currentFilteredList = filteredList;
      currentPercent = percent;
      if (done) break;

      if (isChanged) {
        if (listRenderCounter > listThrottle) {
          listRenderCounter = 0;
        }
      }
      if (listRenderCounter === listThrottle) {
        yield delay(0);
        yield put(changeList(currentList));
        yield put(changeFilteredList(currentFilteredList));
      }
      yield put(changeControl({ key: 'progress', value: currentPercent }));
      listRenderCounter++;

      yield delay(0);

      const status = yield select(getControl('status'));
      if (status !== RUNNING) {
        elapsed += performance.now() - timer;
        console.log(`Stopped at ${currentPercent}% in ${elapsed} ms`);

        yield take(SagaTypes.Resume);

        timer = performance.now();
        yield put(changeControl({ key: 'status', value: RUNNING }));
      }
    }

    yield delay(0);
    yield put(changeList(currentList));
    yield put(changeFilteredList(currentFilteredList));
    yield put(changeControl({ key: 'progress', value: currentPercent }));

    elapsed += performance.now() - timer;
    console.log(`Finished calculation in ${elapsed} ms`);
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
  }
}

function* stopCalc() {
  yield put(changeControl({ key: 'status', value: STOPPED }));
}

function* watchStart() {
  yield takeLatest(SagaTypes.Start, runCalc);
  yield takeEvery(SagaTypes.Stop, stopCalc);
}

export default function* rootSaga() {
  yield all([watchStart()]);
}
