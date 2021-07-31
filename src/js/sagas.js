import { put, takeEvery, all, select } from "redux-saga/effects";

import * as optimizerCore from "./optimizerCore";

import {
  changeList,
  getDistributionNew,
  getDistributionOld,
  getGeneric,
  getModifiers,
  getProfession
} from "../state/gearOptimizerSlice";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* runCalc() {
  const state = yield select();

  const percentDistributionTemp = getDistributionOld(state);
  const percentDistribution = {
    Power: percentDistributionTemp[0],
    Burning: percentDistributionTemp[1],
    Bleeding: percentDistributionTemp[2],
    Poison: percentDistributionTemp[3],
    Torment: percentDistributionTemp[4],
    Confusion: percentDistributionTemp[5]
  };

  const input = {
    modifiers: getModifiers(state).map((modifier) => JSON.parse(modifier.modifiers)),
    tags: undefined,
    profession: getProfession(state).toLowerCase(),
    weapontype: getGeneric("weaponType")(state),
    affixes: getGeneric("affixes")(state).map((affix) =>
      affix.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
    ),
    forcedAffixes: getGeneric("forcedSlots")(state),
    rankby: getGeneric("optimizeFor")(state),
    minBoonDuration: getGeneric("minBoonDuration")(state),
    minHealingPower: getGeneric("minHealingPower")(state),
    minToughness: getGeneric("minToughness")(state),
    maxToughness: getGeneric("maxToughness")(state),
    maxResults: 50, // TODO MAX RESULTS
    primaryInfusion: /* getGeneric("primaryInfusion")(state), */ null,
    secondaryInfusion: /* getGeneric("secondaryInfusion")(state), */ null,
    primaryMaxInfusions: /* getGeneric("primaryMaxInfusions")(state), */ null,
    secondaryMaxInfusions: /* getGeneric("secondaryMaxInfusions")(state), */ null,
    percentDistribution
    /* distribution: getDistributionNew(state) */
  };
  console.log("input real", input);

  // hardcode for now
  const fakeInput = {
    "modifiers": [
      { "buff": { "Condition Damage": 180 } },
      { "buff": { "Precision": 80 } },
      { "buff": { "Power": 40 } },
      { "flat": { "Burning Duration": 20 } },
      { "flat": { "Critical Chance": 10 }, "buff": { "Ferocity": 150 } },
      { "multiplier": { "Burning Damage": 0.15 } },
      { "multiplier": { "Effective Power": 0.09 } },
      { "flat": { "Retaliation Duration": 25 } },
      { "convert": { "Condition Damage": { "Vitality": 0.13 } } },
      { "flat": { "Condition Damage": 250, "Healing Power": 250, "Vitality": 250 } },
      { "buff": { "Power": 750, "Condition Damage": 750 } },
      { "flat": { "Critical Chance": 20 } },
      {
        "multiplier": {
          "target: Effective Power": 0.25,
          "target: Effective Condition Damage": 0.25
        }
      },
      { "buff": { "Power": 100, "Condition Damage": 100 } },
      { "buff": { "Precision": 100, "Ferocity": 100 } },
      { "buff": { "Power": 100 } },
      { "buff": { "Precision": 100 } },
      { "multiplier": { "add: Effective Power": 0.05 } },
      {
        "flat": { "Condition Damage": 175, "Burning Duration": 50 },
        "multiplier": { "Effective Health": 0.1 }
      },
      { "multiplier": { "add: Effective Condition Damage": 0.05 } },
      { "flat": { "Condition Damage": 100, "Expertise": 70 } },
      { "convert": { "Condition Damage": { "Power": 0.03, "Precision": 0.03 } } },
      { "flat": { "Agony Resistance": 150 } }
    ],
    "profession": "guardian",
    "weapontype": "Dual wield",
    "affixes": ["Viper", "Sinister", "Grieving"],
    "forcedAffixes": ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "rankby": "Damage",
    "minBoonDuration": 0,
    "minHealingPower": null,
    "minToughness": null,
    "maxToughness": null,
    "maxResults": 30,
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
  console.log("input hardcoded", fakeInput);

  const settings = optimizerCore.setup(input);

  // set up table columns here

  const generator = optimizerCore.calculate(settings);

  let done = false;
  let newPercent;
  let isChanged;
  let newList;
  while (true) {
    const result = generator.next();
    ({
      done,
      value: { percent: newPercent, isChanged, newList }
    } = result);
    console.log("generator result:", result);

    if (isChanged) {
      console.log("changed; saga list length:", newList.length);
      yield put(changeList(newList));
    } else {
      console.log("not changed!");
      // yield put({ type: 'DONOTHING' });
    }

    if (done) {
      // cleanup
      console.log("done");
      break;
    }

    yield delay(1);
  }
}

function* watchStart() {
  yield takeEvery("START", runCalc);
}

export default function* rootSaga() {
  yield all([
    // other sagas go here
    watchStart()
  ]);
}
