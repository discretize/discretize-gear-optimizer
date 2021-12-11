/* eslint-disable no-console */
import { put, take, race, call, all, select, cancelled, takeLeading } from 'redux-saga/effects';
import JsonUrl from 'json-url';
import * as optimizerCore from './optimizerCore';

import {
  changeControl,
  changeList,
  changeSelectedCharacter,
  getSelectedCharacter,
  getList,
  changeError,
  changeAll,
} from '../slices/controlsSlice';
import { getExtrasModifiers } from '../slices/extras';
import { getBuffsModifiers } from '../slices/buffs';
import { getExtraModifiersModifiers } from '../slices/extraModifiers';
import { getInfusionsModifiers } from '../slices/infusions';
import { getSkillsModifiers } from '../slices/skills';
import { getTraitsModifiers, getCurrentSpecialization } from '../slices/traits';

import { ERROR, SUCCESS, WAITING } from './status';

import { parseInfusionCount, parsePriority, parseBoss } from '../../utils/usefulFunctions';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function createInput(state, specialization, appliedModifiers, cachedFormState) {
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

  const attackRate = parseBoss(attackRateText).value ?? 0;
  const movementUptime = (parseBoss(movementUptimeText).value ?? 0) / 100;

  const input = {
    tags: undefined,
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

  // temp: convert "poisoned" to "poison"
  const convertPoison = (distribution) =>
    Object.fromEntries(
      Object.entries(distribution).map(([key, value]) => [
        key === 'Poisoned' ? 'Poison' : key,
        value,
      ]),
    );

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
  let input;
  let settings;
  let oldPercent;
  let originalSelectedCharacter;
  try {
    yield delay(0);

    const reduxState = yield select();
    state = reduxState.optimizer;

    const specialization = yield select(getCurrentSpecialization);

    const cachedFormState = {
      traits: state.form.traits,
      skills: state.form.skills,
      extras: state.form.extras,
    };

    const appliedModifiers = [
      ...(yield select(getExtrasModifiers) || []),
      ...(yield select(getBuffsModifiers) || []),
      ...(yield select(getExtraModifiersModifiers) || []),
      ...(yield select(getInfusionsModifiers) || []),
      ...(yield select(getSkillsModifiers) || []),
      ...(yield select(getTraitsModifiers) || []),
    ];

    console.time('Calculation');

    input = createInput(state, specialization, appliedModifiers, cachedFormState);

    console.groupCollapsed('Debug Info:');
    console.log('Redux State:', state);
    console.log('Input:', input);

    settings = optimizerCore.setup(input);
    console.groupEnd();

    const generatedResults = optimizerCore.calculate(settings);

    originalSelectedCharacter = yield select(getSelectedCharacter);

    // render list updates on a trailing throttle
    // back-to-back(to-back) list updates will only be rendered once
    let listRenderCounter = Infinity;
    const listThrottle = 3;

    for (const { percent: newPercent, isChanged, newList } of generatedResults) {
      listRenderCounter++;
      if (isChanged) {
        currentList = newList;
        if (listRenderCounter > listThrottle) {
          listRenderCounter = 0;
        }
      }
      if (listRenderCounter === listThrottle) {
        yield put(changeList(currentList));
      }

      if (newPercent !== oldPercent) {
        yield put(changeControl({ key: 'progress', value: newPercent }));
        // console.log(`${newPercent}% done`);
        oldPercent = newPercent;
      }

      yield delay(0);
    }
    yield put(changeList(currentList));

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
    console.log('input:', { ...input });
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

const lib = JsonUrl('lzma');

function* exportState({ onSuccess }) {
  console.log('creating template...');
  console.time('created template');
  const reduxState = yield select();
  const state = reduxState.optimizer;

  const modifiedList = [];
  const modifiedState = {
    ...state,
    control: {
      ...state.control,
      list: modifiedList,
      selectedCharacter: null,
    },
  };

  // remove saved builds (at least for now)
  delete modifiedState.control.saved;

  const compressed = yield lib.compress(modifiedState);
  console.timeEnd('created template');
  console.log('length:', compressed.length);
  console.log(compressed);

  onSuccess(compressed);
}

function* watchExportState() {
  yield takeLeading('EXPORT_STATE', exportState);
}

function* importState({ buildUrl: input, onSuccess, onError }) {
  try {
    console.log('restoring template...');

    // eslint-disable-next-line no-alert
    // const input = window.prompt('text plz', '');
    if (!input) return;

    console.time('decompressed template');
    const modifiedState = yield lib.decompress(input);
    const state = { ...modifiedState }; // do stuff here
    console.timeEnd('decompressed template');

    console.log(JSON.stringify(state));

    console.time('applied state');
    yield put(changeAll(state));
    console.timeEnd('applied state');

    // execute success callback
    onSuccess();
  } catch (e) {
    console.log('problem restoring template');
    console.log(e);
    onError();
  }
}

function* watchImportState() {
  yield takeLeading('IMPORT_STATE', importState);
}

export default function* rootSaga() {
  yield all([
    // other sagas go here
    watchStart(),
    watchExportState(),
    watchImportState(),
  ]);
}
