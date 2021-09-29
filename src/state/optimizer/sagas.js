/* eslint-disable no-console */
import { put, take, race, call, all, select, cancelled } from 'redux-saga/effects';

import * as optimizerCore from './optimizerCore';

import {
  changeControl,
  changeList,
  changeSelectedCharacter,
  getSelectedCharacter,
  getList,
  getModifiers,
} from '../gearOptimizerSlice';
import { INFUSIONS } from '../../utils/gw2-data';
import { SUCCESS, WAITING } from './status';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function printTemplateHelper(state, list) {
  // const { profession, traits, skills, extras } = state;

  // this is, obviously, awful
  // todo: refactor templates and template application
  const { profession } = state.control;
  const traits = { ...state.traits };
  // eslint-disable-next-line camelcase
  traits.modifiers = traits.modifiers.map(({ id, gw2id, source }) => ({ id, gw2id, source }));
  const skills = state.skills.skills.slice();
  const extras = { ...state.extras };
  if (extras.modifiers) {
    delete extras.modifiers;
  }

  console.groupCollapsed('Template Creation Data');

  console.log('Traits:', {
    profession,
    traits,
    skills,
    extras,
  });

  const distribution = state.distribution.values2;
  console.log('Input Distribution (v2):');
  console.table([distribution]);

  if (list && list[0]) {
    const bestResult = { ...list[0] };
    optimizerCore.updateAttributes(bestResult);
    console.log('Best Result Damage:');
    console.table([
      Object.fromEntries(
        Object.entries(bestResult.results.damageBreakdown).map(([a, b]) => [a, parseFloat(b)]),
      ),
    ]);
  }
  console.groupEnd();
}

function createInput(state) {
  const {
    control: { profession },
    infusions: {
      primaryInfusion,
      secondaryInfusion,
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

  const modifiers = getModifiers(state);

  const parseTextNumber = (text, defaultValue) => {
    const parsed = Number.parseInt(text, 10);
    if (Number.isNaN(parsed)) {
      return defaultValue;
    }
    return Math.max(parsed, 0);
  };

  const primaryMaxInfusions = parseTextNumber(primaryMaxInfusionsInput, 18);
  const secondaryMaxInfusions = parseTextNumber(secondaryMaxInfusionsInput, 18);

  const input = {
    tags: undefined,
    profession: profession.toLowerCase(),
    weapontype: weaponType,
    affixes: affixes.map((affix) => affix.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())),
    forcedAffixes: slots,
    rankby: optimizeFor,
    minBoonDuration,
    minHealingPower,
    minToughness,
    maxToughness,
    maxResults: 50, // TODO MAX RESULTS
    primaryInfusion: INFUSIONS.find((i) => i.id === primaryInfusion)?.attribute,
    secondaryInfusion: INFUSIONS.find((i) => i.id === secondaryInfusion)?.attribute,
    primaryMaxInfusions,
    secondaryMaxInfusions,
    distributionVersion: version,
    percentDistribution: values1,
    distribution: values2,
  };
  input.modifiers = modifiers;
  // input.modifiers = modifiers.map((modifier) => {
  //   try {
  //     const parsed = JSON.parse(modifier.modifiers);
  //     return parsed;
  //   } catch (e) {
  //     // eslint-disable-next-line no-alert
  //     alert(`Error: invalid modifier: ${modifier.id} (${modifier.source}). Skipping.`);
  //     console.error('Could not parse modifier:', modifier);
  //     return null;
  //   }
  // });

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
  let selectedCharacterIsStale = true;
  try {
    yield delay(0);
    console.time('Calculation');

    state = yield select();

    input = createInput(state);

    console.groupCollapsed('Debug Info:');
    console.log('Redux State:', state);
    console.log('Input:', input);

    settings = optimizerCore.setup(input);
    console.groupEnd();

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
    printTemplateHelper(state, currentList);
    console.groupEnd();

    console.timeEnd('Calculation');
    console.time('Render Result');

    yield put(changeControl({ key: 'status', value: SUCCESS }));
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
    console.log('state:', { ...state.gearOptimizer });
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
