/* eslint-disable no-console */
import { put, take, race, call, all, select, cancelled } from 'redux-saga/effects';

import * as optimizerCore from './optimizerCore';

import {
  changeControl,
  changeList,
  getDistributionNew,
  getDistributionOld,
} from '../gearOptimizerSlice';
import { INFUSIONS } from '../../utils/gw2-data';
import { SUCCESS } from './status';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* runCalc() {
  const time = Date.now();
  let newList;

  try {
    const state = yield select();

    const {
      profession,
      infusions: { primaryInfusion, secondaryInfusion, primaryMaxInfusions, secondaryMaxInfusions },
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

    const input = {
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
    console.log('input (real):', input);

    // temp: convert "poisoned" to "poison"
    function convertPoison(distribution) {
      return Object.fromEntries(
        Object.entries(distribution).map(([key, value]) => [
          key === 'Poisoned' ? 'Poison' : key,
          value,
        ]),
      );
    }

    if ({}.hasOwnProperty.call(input.distribution, 'Poisoned')) {
      input.distribution = convertPoison(input.distribution);
    }
    if ({}.hasOwnProperty.call(input.percentDistribution, 'Poisoned')) {
      input.percentDistribution = convertPoison(input.percentDistribution);
    }

    const settings = optimizerCore.setup(input);

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
        yield put(changeControl({ key: 'selectedCharacter', value: newList[0] }));
        yield put(changeControl({ key: 'status', value: SUCCESS }));

        console.log(`calculation done in ${Date.now() - time}ms`);
        break;
      }

      yield delay(0);
    }
  } catch (e) {
    // eslint-disable-next-line no-alert
    alert(`There was an error in the calculation!\n\n${e}`);
    console.log('There was an error in the calculation!\n\n', e);
  } finally {
    if (yield cancelled()) {
      console.log(`calculation cancelled after ${Date.now() - time}ms`);
      yield put(changeControl({ key: 'selectedCharacter', value: newList[0] }));
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
