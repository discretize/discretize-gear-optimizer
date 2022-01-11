/* eslint-disable no-console */
import JsonUrl from 'json-url';
import { all, call, cancelled, put, race, select, take, takeLeading } from 'redux-saga/effects';
import { parseBoss, parseInfusionCount, parsePriority } from '../../utils/usefulFunctions';
import { getBuffsModifiers } from '../slices/buffs';
import { changeBuildPage } from '../slices/buildPage';
import {
  changeAll,
  changeControl,
  changeError,
  changeList,
  changeSelectedCharacter,
  getList,
  getSelectedCharacter,
} from '../slices/controlsSlice';
import { getExtraModifiersModifiers } from '../slices/extraModifiers';
import { getExtrasModifiers } from '../slices/extras';
import { getInfusionsModifiers } from '../slices/infusions';
import { getSkillsModifiers } from '../slices/skills';
import { getCurrentSpecialization, getTraitsModifiers } from '../slices/traits';
import { createOptimizerCore } from './optimizerCore';
import { ERROR, SUCCESS, WAITING } from './status';

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

    const core = createOptimizerCore(input);
    console.groupEnd();

    originalSelectedCharacter = yield select(getSelectedCharacter);

    // render list updates on a trailing throttle
    // back-to-back(to-back) list updates will only be rendered once
    let listRenderCounter = Infinity;
    const listThrottle = 3;

    for (const { percent: newPercent, isChanged, newList } of core.calculate()) {
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

const modifyState = (optimizerState) => {
  // const list = optimizerState?.control?.list.slice(0, 6) || [];
  // let modifiedList = list;

  // // extract settings object from characters (should be identical)
  // let listSettings = null;
  // if (list[0]?.settings) {
  //   listSettings = list[0].settings;
  //   modifiedList = list.map((character) => {
  //     // eslint-disable-next-line no-unused-vars
  //     const { settings, ...rest } = character;
  //     return { ...rest };
  //   });
  // }

  const exportData = {
    // listSettings,
    optimizerState: {
      ...optimizerState,
      control: {
        ...optimizerState.control,
        list: [],
        saved: [],
        selectedCharacter: null,
      },
    },
  };

  return exportData;
};

const unModifyState = (importData) => {
  // eslint-disable-next-line no-unused-vars
  const { optimizerState, listSettings } = importData;

  // // replace settings objects in characters
  // if (Array.isArray(optimizerState?.control?.list) && listSettings) {
  //   optimizerState.control.list = optimizerState.control.list.map((character) => ({
  //     ...character,
  //     settings: listSettings,
  //   }));
  // }

  return optimizerState;
};

function* exportState({ onSuccess }) {
  const reduxState = yield select();

  const exportData = modifyState(reduxState.optimizer);
  console.log(exportData);

  console.time('Created template in:');
  const compressed = yield lib.compress(exportData);
  console.timeEnd('Created template in:');

  onSuccess(compressed);
}

function* watchExportState() {
  yield takeLeading('EXPORT_STATE', exportState);
}

function* importState({ buildUrl: input, onSuccess, onError }) {
  try {
    if (!input) return;

    console.time('Decompressed template in:');
    const importData = yield lib.decompress(input);
    console.timeEnd('Decompressed template in:');

    console.log(importData);
    const optimizerState = unModifyState(importData);

    console.time('Applied state in:');
    yield put(changeAll(optimizerState));
    console.timeEnd('Applied state in:');

    // execute success callback
    onSuccess();
  } catch (e) {
    console.log('Problem restoring template!');
    console.log(e);
    onError();
  }
}

function* watchImportState() {
  yield takeLeading('IMPORT_STATE', importState);
}

function* exportStateCharacter({ onSuccess }) {
  const reduxState = yield select();

  const { selectedLines: lines, selectedTraits: selected } = reduxState.optimizer.form.traits;
  const { weapons, skills, character } = reduxState.optimizer.buildPage;

  const exportData = {
    character,
    weapons,
    skills,
    traits: {
      lines,
      selected,
    },
  };
  console.log(exportData);

  console.time('Created template in:');
  const compressed = yield lib.compress(exportData);
  console.timeEnd('Created template in:');

  onSuccess(compressed);
}

function* watchExportStateCharacter() {
  yield takeLeading('EXPORT_STATE_CHARACTER', exportStateCharacter);
}

function* importStateCharacter({ buildUrl: input, onSuccess, onError }) {
  try {
    if (!input) return;

    console.time('Decompressed template in:');
    const importData = yield lib.decompress(input);
    console.timeEnd('Decompressed template in:');

    console.log(importData);
    const optimizerState = importData;

    console.time('Applied state in:');
    yield put(changeBuildPage(optimizerState));
    console.timeEnd('Applied state in:');

    // execute success callback
    onSuccess();
  } catch (e) {
    console.log('Problem restoring template!');
    console.log(e);
    onError();
  }
}

function* watchImportStateCharacter() {
  yield takeLeading('IMPORT_STATE_CHARACTER', importStateCharacter);
}

export default function* rootSaga() {
  yield all([
    // other sagas go here
    watchStart(),
    watchExportState(),
    watchImportState(),
    watchExportStateCharacter(),
    watchImportStateCharacter(),
  ]);
}
