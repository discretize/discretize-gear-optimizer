/* eslint-disable no-console */
import { put, take, race, call, all, select, cancelled } from 'redux-saga/effects';

import * as optimizerCore from './optimizerCore';

import {
  changeControl,
  changeList,
  changeSelectedCharacter,
  changeSelectedCharacterIfNone,
  getList,
} from '../gearOptimizerSlice';
import { INFUSIONS } from '../../utils/gw2-data';
import { SUCCESS, WAITING } from './status';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* runCalc() {
  yield delay(0);
  yield put(changeSelectedCharacter(null));

  const time = Date.now();
  let state;
  let newList;
  let input;
  let settings;

  try {
    state = yield select();

    const {
      profession,
      infusions: {
        primaryInfusion,
        secondaryInfusion,
        primaryMaxInfusions: primaryMaxInfusionsInput,
        secondaryMaxInfusions: secondaryMaxInfusionsInput,
      },
      forcedSlots,
      priorities: {
        optimizeFor,
        weaponType,
        minBoonDuration,
        minHealingPower,
        minToughness,
        maxToughness,
        affixes,
      },
      modifiers,
      distribution: { version, values1, values2 },
    } = state.gearOptimizer;

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
      modifiers: modifiers.map((modifier) => JSON.parse(modifier.modifiers)),
      tags: undefined,
      profession: profession.toLowerCase(),
      weapontype: weaponType,
      affixes: affixes.map((affix) => affix.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())),
      forcedAffixes: forcedSlots,
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
    console.log('input:', input);

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

    // set up table columns here

    const generator = optimizerCore.calculate(settings);

    let done = false;
    let newPercent;
    let isChanged;
    while (true) {
      const result = generator.next();
      ({
        done,
        value: { percent: newPercent, isChanged, newList },
      } = result);
      console.log(`${newPercent}% done`);
      yield put(changeControl({ key: 'progress', value: newPercent }));

      if (isChanged) {
        console.log('list changed');
        yield put(changeList(newList));
      } else {
        console.log('list not changed');
        // yield put({ type: 'DONOTHING' });
      }

      if (done) {
        // cleanup
        yield put(changeSelectedCharacterIfNone(newList[0]));
        yield put(changeControl({ key: 'status', value: SUCCESS }));

        console.log(`calculation done in ${Date.now() - time}ms`);
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
    console.log('list:', { ...newList });
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
