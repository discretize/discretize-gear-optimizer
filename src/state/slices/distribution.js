import { createSlice } from '@reduxjs/toolkit';
import { setBuildTemplate } from '../controlsSlice';

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
          values1: distributionPreset.values1,
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
} = distributionSlice.actions;
