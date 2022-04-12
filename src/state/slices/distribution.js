import { createSlice } from '@reduxjs/toolkit';
import { changeAll, setBuildTemplate } from './controlsSlice';

export const distributionSlice = createSlice({
  name: 'distribution',
  initialState: {
    selectedDistribution: '',
    version: 2,
    values1: {},
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
    changeAllDistributions: (state, action) => {
      const { name, value } = action.payload;
      try {
        const distributionPreset = JSON.parse(value);

        return {
          ...state,
          selectedDistribution: name,
          values2: distributionPreset.values2,
          textBoxes: distributionPreset.values2,
        };
      } catch (e) {
        console.error(e);
      }
      return state;
    },
  },
  extraReducers: {
    [changeAll]: (state, action) => {
      return { ...state, ...action.payload?.form?.distribution };
    },
    [setBuildTemplate]: (state, action) => {
      const { distributionPreset, selectedDistribution } = action.payload;

      if (distributionPreset) {
        return {
          selectedDistribution,
          version: 2,
          values1: {},
          values2: distributionPreset.values2,
          textBoxes: distributionPreset.values2,
        };
      }
      return state;
    },
  },
});

export const getDistributionNew = (state) => state.optimizer.form.distribution.values2;
export const getTextBoxes = (state) => state.optimizer.form.distribution.textBoxes;
export const getSelectedDistribution = (state) =>
  state.optimizer.form.distribution.selectedDistribution;

export const { changeDistributionNew, changeTextBoxes, changeAllDistributions } =
  distributionSlice.actions;
