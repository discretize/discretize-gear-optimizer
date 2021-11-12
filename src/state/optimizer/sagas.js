/* eslint-disable no-console */
import { put, take, race, call, all, select, cancelled } from 'redux-saga/effects';

import * as optimizerCore from './optimizerCore';

import { changeControl, changeError } from '../slices/controlsSlice';
import {
  changeList,
  changeSelectedCharacter,
  getSelectedCharacter,
  getList,
  changeResults,
} from '../slices/resultsSlice';
import { getExtrasModifiers } from '../slices/extras';
import { getBuffsModifiers } from '../slices/buffs';
import { getExtraModifiersModifiers } from '../slices/extraModifiers';
import { getInfusionsModifiers } from '../slices/infusions';
import { getSkillsModifiers } from '../slices/skills';
import { getTraitsModifiers } from '../slices/traits';

import { INFUSIONS } from '../../utils/gw2-data';
import { ERROR, SUCCESS, WAITING } from './status';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function createTraitsTemplate(state, list) {
  // const { profession, traits, skills, extras } = state;

  const withoutModifiers = (object) => {
    // eslint-disable-next-line no-unused-vars
    const { modifiers, ...rest } = object;
    return { ...rest };
  };

  console.groupCollapsed('Template Creation Data');

  const traitsTemplate = {
    profession: state.control.profession,
    traits: withoutModifiers(state.traits),
    skills: withoutModifiers(state.skills),
    extras: withoutModifiers(state.extras),
  };

  console.log('Traits:', traitsTemplate);

  const distribution = state.distribution.values2;
  console.log('Input Distribution (v2):');
  console.table([distribution]);

  if (list && list[0]) {
    const bestResult = { ...list[0] };
    optimizerCore.updateAttributes(bestResult, state.results.optimizerSettings);
    console.log('Best Result Damage:');
    console.table([
      Object.fromEntries(
        // eslint-disable-next-line id-length
        Object.entries(bestResult.results.damageBreakdown).map(([a, b]) => [a, parseFloat(b)]),
      ),
    ]);
  }
  console.groupEnd();

  return traitsTemplate;
}

function createInput(state, modifiers) {
  const {
    control: { profession },
    infusions: {
      primaryInfusion,
      secondaryInfusion,
      maxInfusions: maxInfusionsInput,
      primaryMaxInfusions: primaryMaxInfusionsInput,
      secondaryMaxInfusions: secondaryMaxInfusionsInput,
    },
    forcedSlots: { slots },
    priorities: {
      optimizeFor,
      weaponType,
      minBoonDuration,
      minHealingPower,
      minToughness,
      maxToughness,
      affixes,
    },
    distribution: { version, values1, values2 },
  } = state;

  const parseTextNumber = (text, defaultValue) => {
    const parsed = Number.parseInt(text, 10);
    if (Number.isNaN(parsed)) {
      return defaultValue;
    }
    return Math.max(parsed, 0);
  };

  const maxInfusions = parseTextNumber(maxInfusionsInput, 18);
  const primaryMaxInfusions = parseTextNumber(primaryMaxInfusionsInput, 18);
  const secondaryMaxInfusions = parseTextNumber(secondaryMaxInfusionsInput, 18);

  const input = {
    tags: undefined,
    profession: profession.toLowerCase(),
    weapontype: weaponType,
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
    primaryInfusion: INFUSIONS.find((entry) => entry.id === primaryInfusion)?.attribute,
    secondaryInfusion: INFUSIONS.find((entry) => entry.id === secondaryInfusion)?.attribute,
    primaryMaxInfusions,
    secondaryMaxInfusions,
    distributionVersion: version,
    percentDistribution: values1,
    distribution: values2,
  };
  input.modifiers = modifiers;

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
  let optimizerState;
  let currentList;
  let input;
  let settings;
  let oldPercent;
  let selectedCharacterIsStale = true;
  try {
    yield delay(0);
    console.time('Calculation');

    const state = yield select();
    optimizerState = state.optimizer;

    const modifiers = [
      ...(yield select(getExtrasModifiers) || []),
      ...(yield select(getBuffsModifiers) || []),
      ...(yield select(getExtraModifiersModifiers) || []),
      ...(yield select(getInfusionsModifiers) || []),
      ...(yield select(getSkillsModifiers) || []),
      ...(yield select(getTraitsModifiers) || []),
    ];

    input = createInput(optimizerState, modifiers);

    console.groupCollapsed('Debug Info:');
    console.log('Redux State:', optimizerState);
    console.log('Input:', input);

    settings = optimizerCore.setup(input);
    console.groupEnd();

    yield put(
      changeResults({
        profession: optimizerState.control.profession,
        optimzerSettings: settings,
        allSelectedModifiers: modifiers,
      }),
    );

    const generatedResults = optimizerCore.calculate(settings);

    // clear the selected character on click "instantly," but actually with a small delay
    // (short calculations will update in-place without a flicker)
    let clearResultsCounter = 0;
    const clearResultsAfter = 5;

    // render list updates on a trailing throttle
    // back-to-back(to-back) list updates will only be rendered once
    let listRenderCounter = Infinity;
    const listThrottle = 3;

    for (const { percent: newPercent, isChanged, newList } of generatedResults) {
      clearResultsCounter++;
      if (clearResultsCounter === clearResultsAfter) {
        yield put(changeSelectedCharacter(null));
        selectedCharacterIsStale = false;
      }

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
    const traitsTemplate = createTraitsTemplate(optimizerState, currentList);
    yield put(
      changeResults({
        traitsTemplate,
      }),
    );
    console.groupEnd();

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
    if (currentList && (!selectedCharacter || selectedCharacterIsStale)) {
      yield put(changeSelectedCharacter(currentList[0]));
    }

    console.timeEnd('Render Result');
  } catch (e) {
    console.groupEnd();
    // eslint-disable-next-line no-alert
    alert(`There was an error in the calculation!\n\n${e}`);
    console.log(e);
    console.log('state:', { ...optimizerState });
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
      if (!selectedCharacter || selectedCharacterIsStale) {
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
  yield all([
    // other sagas go here
    watchStart(),
  ]);
}
