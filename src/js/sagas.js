import { put, takeEvery, all, select } from 'redux-saga/effects';

import * as optimizerCore from "./optimizerCore";

import {
  changeList,
} from "../state/gearOptimizerSlice";
import { TrendingUpRounded } from '@material-ui/icons';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function* helloSaga() {
  console.log('Hello Sagas!');
}

function* runCalc() {
  const optimizerState = yield select((state) => state.gearOptimizer);

  // console.log(JSON.stringify(test, null, 2));

  // hardcode for now
  const input = {
    "modifiers": [ { "buff": { "Condition Damage": 180 } }, { "buff": { "Precision": 80 } }, { "buff": { "Power": 40 } }, { "flat": { "Burning Duration": 20 } }, { "flat": { "Critical Chance": 10 }, "buff": { "Ferocity": 150 } }, { "multiplier": { "Burning Damage": 0.15 } }, { "multiplier": { "Effective Power": 0.09 } }, { "flat": { "Retaliation Duration": 25 } }, { "convert": { "Condition Damage": { "Vitality": 0.13 } } }, { "flat": { "Condition Damage": 250, "Healing Power": 250, "Vitality": 250 } }, { "buff": { "Power": 750, "Condition Damage": 750 } }, { "flat": { "Critical Chance": 20 } }, { "multiplier": { "target: Effective Power": 0.25, "target: Effective Condition Damage": 0.25 } }, { "buff": { "Power": 100, "Condition Damage": 100 } }, { "buff": { "Precision": 100, "Ferocity": 100 } }, { "buff": { "Power": 100 } }, { "buff": { "Precision": 100 } }, { "multiplier": { "add: Effective Power": 0.05 } }, { "flat": { "Condition Damage": 175, "Burning Duration": 50 }, "multiplier": { "Effective Health": 0.1 } }, { "multiplier": { "add: Effective Condition Damage": 0.05 } }, { "flat": { "Condition Damage": 100, "Expertise": 70 } }, { "convert": { "Condition Damage": { "Power": 0.03, "Precision": 0.03 } } }, { "flat": { "Agony Resistance": 150 } } ],
    "profession": "guardian",
    "weapontype": "Dual wield",
    "affixes": [
      "Viper",
      "Sinister",
      "Grieving"
    ],
    "forcedAffixes": [ "", "", "", "", "", "", "", "", "", "", "", "", "", "" ],
    "rankby": "Damage",
    "minBoonDuration": 0,
    "minHealingPower": null,
    "minToughness": null,
    "maxToughness": null,
    "maxResults": 10,
    "primaryInfusion": "Condition Damage",
    "secondaryInfusion": "None",
    "primaryMaxInfusions": 18,
    "secondaryMaxInfusions": 18,
    "infusionNoDuplicates": false,
    "percentDistribution": {
      "Power": 31,
      "Burning": 65,
      "Bleeding": 3,
      "Poison": 0,
      "Torment": 1,
      "Confusion": 0
    }
  };


  let list = [];
  // const core = optimizerCoreCalculate();

  const settings = optimizerCore.setup(input);
  const generator = optimizerCore.calculate(settings);

  let done = false;
  let newPercent;
  let isChanged;
  let newList;
  while (true) {
    const result = generator.next();
    ({ done, value: { percent: newPercent, isChanged, newList } } = result);
    console.log(result);
    console.log(list);

    if (isChanged) {
      // const newList = list.slice();
      console.log('changed; saga list length:', newList.length);
      yield put(changeList(newList));
    } else {
      console.log('not changed!');
      yield put({ type: 'DONOTHING' });
    }

    if (done) {
      // cleanup
      console.log('done');
      break;
    }

    yield delay(1);

  }
}

function* watchStart() {
  yield takeEvery('START', runCalc);
}

function* optimizerCoreCalculate() {
  const list = [];
  let modified = false;
  for (let i = 0; i < 10; i++) {
    modified = false;
    if (Math.random() > 0.2) {
      list.push({
        id: i,
        value: ['hi', i, 2*i, 3*i, 4*i]
      },);
      modified = true;

    }
    yield { list, modified, i };
  }

}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchStart()
  ]);
}
