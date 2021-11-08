import { createSlice } from '@reduxjs/toolkit';
import { setBuildTemplate } from '../controlsSlice';
import { Condition } from '../../utils/gw2-data';

const fixedCondition = { ...Condition, Poisoned: Condition.Poison };

// reverse legacy percent distribution conversion
// see: https://github.com/discretize/discretize-gear-optimizer/discussions/136
export const coefficientsToPercents = (values2, round = false) => {
  const { Power, ...rest } = values2;
  const values1 = {};

  // reverse magic numbers
  values1.Power = (Power / 2597) * 1025;
  for (const [key, value] of Object.entries(rest)) {
    values1[key] = value * fixedCondition[key].baseDamage;
  }

  // scale up/down so sum is 100
  const sum = Object.values(values1).reduce((prev, cur) => prev + cur, 0);
  if (sum) {
    for (const key of Object.keys(values1)) {
      values1[key] *= 100 / sum;
    }
  }

  if (round) {
    Object.keys(values1).forEach((key) => {
      values1[key] = Math.round(values1[key]);
    });
  }

  return values1;
};

export const distributionSlice = createSlice({
  name: 'distribution',
  initialState: {
    version: 2,
    values1: {
      Power: 100,
      Burning: 0,
      Bleeding: 0,
      Poisoned: 0,
      Torment: 0,
      Confusion: 0,
    },
    values2: {
      Power: 3000,
      Burning: 0,
      Bleeding: 0,
      Poisoned: 0,
      Torment: 0,
      Confusion: 0,
    },
    textBoxes: {
      Power: '3000',
      Burning: '0',
      Bleeding: '0',
      Poisoned: '0',
      Torment: '0',
      Confusion: '0',
    },
  },
  reducers: {
    resetDistributions: (state) => {
      state.values1 = {
        Power: 0,
        Burning: 0,
        Bleeding: 0,
        Poisoned: 0,
        Torment: 0,
        Confusion: 0,
      };
      state.values2 = {
        Power: 0,
        Burning: 0,
        Bleeding: 0,
        Poisoned: 0,
        Torment: 0,
        Confusion: 0,
      };
      state.textBoxes = {
        Power: '0',
        Burning: '0',
        Bleeding: '0',
        Poisoned: '0',
        Torment: '0',
        Confusion: '0',
      };
      return state;
    },
    changeDistributionVersion: (state, action) => {
      state.version = action.payload;
    },
    changeDistributionNew: (state, action) => {
      return {
        ...state,
        values2: { ...state.values2, [action.payload.index]: action.payload.value },
      };
    },
    changeTextBoxes: (state, action) => {
      return {
        ...state,
        textBoxes: {
          ...state.textBoxes,
          [action.payload.index]: action.payload.value,
        },
      };
    },
    changeAllTextBoxes: (state, action) => {
      state.textBoxes = action.payload;
    },
    changeAllDistributionsOld: (state, action) => {
      state.values1 = action.payload;
    },
    changeAllDistributionsNew: (state, action) => {
      state.values2 = action.payload;
    },
  },
  extraReducers: {
    [setBuildTemplate]: (state, action) => {
      const { distributionPreset } = action.payload;

      if (distributionPreset) {
        return {
          version: 2,
          values1: coefficientsToPercents(distributionPreset.values2, true),
          values2: distributionPreset.values2,
          textBoxes: distributionPreset.values2,
        };
      }
      return state;
    },
  },
});

export const getDistributionVersion = (state) => state.optimizer.distribution.version;
export const getDistributionOld = (state) => state.optimizer.distribution.values1;
export const getDistributionNew = (state) => state.optimizer.distribution.values2;
export const getTextBoxes = (state) => state.optimizer.distribution.textBoxes;

export const {
  changeDistributionVersion,
  changeDistributionNew,
  changeTextBoxes,
  changeAllTextBoxes,
  changeAllDistributionsOld,
  changeAllDistributionsNew,
  resetDistributions,
} = distributionSlice.actions;
