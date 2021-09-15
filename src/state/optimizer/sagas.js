/* eslint-disable no-console */
import { put, take, race, call, all, select, cancelled } from 'redux-saga/effects';

import * as optimizerCore from './optimizerCore';

import {
  changeControl,
  changeList,
  changeSelectedCharacter,
  changeSelectedCharacterIfNone,
  getList,
  getModifiers,
} from '../gearOptimizerSlice';
import { INFUSIONS } from '../../utils/gw2-data';
import { SUCCESS, WAITING } from './status';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function printTemplate(state) {
  const { profession, traits, skills, extras } = state;

  console.group('Data for template creation');
  console.log('Traits:', {
    profession,
    traits,
    skills,
    extras,
  });

  const distribution = state.distribution.values2;

  console.log('Distribution (v2):', { values2: distribution });
  console.table([distribution]);
  console.groupEnd();
  console.log('Redux state:', state);
}

function* runCalc() {
  yield delay(0);
  yield put(changeSelectedCharacter(null));

  const time = Date.now();
  let state;
  let currentList;
  let input;
  let settings;

  try {
    state = yield select();

    console.groupCollapsed('Debug/Template Data:');
    printTemplate(state);

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

    input = {
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
    input.modifiers = modifiers.map((modifier) => {
      try {
        const parsed = JSON.parse(modifier.modifiers);
        return parsed;
      } catch (e) {
        alert(`Error: invalid modifier: ${modifier.id} (${modifier.source}). Skipping.`);
        console.error('Could not parse modifier:', modifier);
        return null;
      }
    });
    console.log('Input object:', input);

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

    settings = optimizerCore.setup(input);
    console.groupEnd();

    // set up table columns here

    const generator = optimizerCore.calculate(settings);

    let done = false;
    let newPercent;
    let oldPercent;
    let isChanged;

    // list updates are on a trailing throttle
    let throttlecount = Infinity;
    const THROTTLE = 3;

    while (true) {
      throttlecount++;

      const result = generator.next();
      ({
        done,
        value: { percent: newPercent, isChanged },
      } = result);

      if (isChanged) {
        currentList = result.value.newList;

        // queue throttled list update if none queued
        if (throttlecount > THROTTLE) {
          throttlecount = 0;
        }
      }

      // perform throttled list update
      if (done || throttlecount === THROTTLE) {
        yield put(changeList(currentList));
      }

      if (newPercent !== oldPercent) {
        yield put(changeControl({ key: 'progress', value: newPercent }));
        // console.log(`${newPercent}% done`);
        oldPercent = newPercent;
      }

      if (done) {
        // cleanup
        yield put(changeSelectedCharacterIfNone(currentList[0]));
        yield put(changeControl({ key: 'status', value: SUCCESS }));

        console.log(`Calculation done in ${Date.now() - time}ms`);
        break;
      }

      yield delay(0);
    }
  } catch (e) {
    // eslint-disable-next-line no-alert
    alert(`There was an error in the calculation!\n\n${e}`);
    console.log(e);
    console.log('state:', { ...state.gearOptimizer });
    console.log('input:', { ...input });
    console.log('settings:', { ...settings });
    console.log('list:', { ...currentList });
    yield put(changeControl({ key: 'status', value: WAITING }));
  } finally {
    if (yield cancelled()) {
      console.log(`calculation cancelled after ${Date.now() - time}ms`);
      const currentList = yield select(getList);
      if (currentList && currentList[0]) {
        yield put(changeSelectedCharacterIfNone(currentList[0]));
      }
    }
  }
}

// function* watchStart() {
//   yield takeLeading('START', runCalc);
// }

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
