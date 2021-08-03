/* eslint-disable no-console */
import { put, takeLeading, all, select } from 'redux-saga/effects';

import * as optimizerCore from './optimizerCore';

import {
  changeControl,
  changeList,
  getDistributionNew,
  getDistributionOld,
} from '../gearOptimizerSlice';
import { INFUSIONS } from '../../utils/gw2-data';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* runCalc() {
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
  } = state.gearOptimizer;

  console.log('INFUSIONS', INFUSIONS);

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
    percentDistribution: getDistributionOld(state),
    distribution: getDistributionNew(state),
  };
  console.log('input (real):', input);

  // hardcode for now
  const fakeInput = {
    'modifiers': [
      { 'buff': { 'Condition Damage': 180 } },
      { 'buff': { 'Precision': 80 } },
      { 'buff': { 'Power': 40 } },
      { 'flat': { 'Burning Duration': 20 } },
      { 'flat': { 'Critical Chance': 10 }, 'buff': { 'Ferocity': 150 } },
      { 'multiplier': { 'Burning Damage': 0.15 } },
      { 'multiplier': { 'Effective Power': 0.09 } },
      { 'flat': { 'Retaliation Duration': 25 } },
      { 'convert': { 'Condition Damage': { 'Vitality': 0.13 } } },
      { 'flat': { 'Condition Damage': 250, 'Healing Power': 250, 'Vitality': 250 } },
      { 'buff': { 'Power': 750, 'Condition Damage': 750 } },
      { 'flat': { 'Critical Chance': 20 } },
      {
        'multiplier': {
          'target: Effective Power': 0.25,
          'target: Effective Condition Damage': 0.25,
        },
      },
      { 'buff': { 'Power': 100, 'Condition Damage': 100 } },
      { 'buff': { 'Precision': 100, 'Ferocity': 100 } },
      { 'buff': { 'Power': 100 } },
      { 'buff': { 'Precision': 100 } },
      { 'multiplier': { 'add: Effective Power': 0.05 } },
      {
        'flat': { 'Condition Damage': 175, 'Burning Duration': 50 },
        'multiplier': { 'Effective Health': 0.1 },
      },
      { 'multiplier': { 'add: Effective Condition Damage': 0.05 } },
      { 'flat': { 'Condition Damage': 100, 'Expertise': 70 } },
      { 'convert': { 'Condition Damage': { 'Power': 0.03, 'Precision': 0.03 } } },
      { 'flat': { 'Agony Resistance': 150 } },
    ],
    'profession': 'guardian',
    'weapontype': 'Dual wield',
    'affixes': ['Viper', 'Sinister', 'Grieving'],
    'forcedAffixes': ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'rankby': 'Damage',
    'minBoonDuration': 0,
    'minHealingPower': null,
    'minToughness': null,
    'maxToughness': null,
    'maxResults': 30,
    'primaryInfusion': 'Condition Damage',
    'secondaryInfusion': 'None',
    'primaryMaxInfusions': 18,
    'secondaryMaxInfusions': 18,
    'infusionNoDuplicates': false,
    'percentDistribution': {
      'Power': 31,
      'Burning': 65,
      'Bleeding': 3,
      'Poison': 0,
      'Torment': 1,
      'Confusion': 0,
    },
  };
  console.log('hardcoded input for comparison:', fakeInput);

  // temp: convert "poisoned" to "poison"
  function convertPoison(distribution) {
    const { Poisoned: poisonedValue, ...withoutPoisoned } = distribution;
    return { Poison: poisonedValue, ...withoutPoisoned };
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
  let newList;
  const time = Date.now();
  while (true) {
    const result = generator.next();
    ({
      done,
      value: { percent: newPercent, isChanged, newList },
    } = result);
    console.log(`${newPercent}% done:`, result);
    yield put(changeControl({ key: 'percentageDone', value: newPercent }));

    if (isChanged) {
      console.log('list changed');
      yield put(changeList(newList));
    } else {
      console.log('list not changed');
      // yield put({ type: 'DONOTHING' });
    }

    if (done) {
      // cleanup
      console.log(`calculation done in ${Date.now() - time}ms`);
      break;
    }

    yield delay(0);
  }
}

function* watchStart() {
  yield takeLeading('START', runCalc);
}

export default function* rootSaga() {
  yield all([
    // other sagas go here
    watchStart(),
  ]);
}
