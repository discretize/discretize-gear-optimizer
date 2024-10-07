import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { changeAll, setBuildTemplate } from './controlsSlice';

const clone =
  typeof structuredClone === 'function'
    ? (value: any) => structuredClone(value)
    : (value: any) => JSON.parse(JSON.stringify(value));

interface Distribution {
  Power: number;
  Power2: number;
  Burning: number;
  Bleeding: number;
  Poisoned: number;
  Torment: number;
  Confusion: number;
}

interface DistributionText {
  Power: string | number;
  Power2: string | number;
  Burning: string | number;
  Bleeding: string | number;
  Poisoned: string | number;
  Torment: string | number;
  Confusion: string | number;
}

const initialState: {
  selectedDistribution: string;
  version: number;
  values1: Record<string, never>; // no longer used
  values2: Distribution;
  textBoxes: DistributionText;
} = {
  selectedDistribution: '',
  version: 2,
  values1: {},
  values2: {
    Power: 3000,
    Power2: 0,
    Burning: 0,
    Bleeding: 0,
    Poisoned: 0,
    Torment: 0,
    Confusion: 0,
  },
  textBoxes: {
    Power: '3000',
    Power2: '0',
    Burning: '0',
    Bleeding: '0',
    Poisoned: '0',
    Torment: '0',
    Confusion: '0',
  },
};

export const distributionSlice = createSlice({
  name: 'distribution',
  initialState,
  reducers: {
    changeDistributionNew: (state, action: PayloadAction<{ index: string; value: number }>) => {
      return {
        ...state,
        values2: { ...state.values2, [action.payload.index]: action.payload.value },
      };
    },
    changeTextBoxes: (state, action: PayloadAction<{ index: string; value: string }>) => {
      return {
        ...state,
        textBoxes: {
          ...state.textBoxes,
          [action.payload.index]: action.payload.value,
        },
      };
    },
    changeAllDistributionNew: (state, action: PayloadAction<Distribution>) => {
      console.log(action);
      return {
        ...state,
        values2: action.payload,
        textBoxes: action.payload,
      };
    },
    changeAllDistributions: (state, action: PayloadAction<{ name: string; value: string }>) => {
      const { name, value } = action.payload;
      try {
        const distributionPreset = JSON.parse(value) as typeof initialState;

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

  extraReducers: (builder) => {
    builder.addCase(changeAll, (state, action) => {
      if (action.payload?.form?.distribution) {
        const newState = clone(action.payload.form.distribution);
        newState.values2.Power2 ??= 0;
        newState.textBoxes.Power2 ??= '0';

        return { ...state, ...newState };
      }
    });

    builder.addCase(setBuildTemplate, (state, action) => {
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
    });
  },
});

export const getDistributionNew = (state: RootState) => state.optimizer.form.distribution.values2;
export const getTextBoxes = (state: RootState) => state.optimizer.form.distribution.textBoxes;
export const getSelectedDistribution = (state: RootState) =>
  state.optimizer.form.distribution.selectedDistribution;

export const {
  changeDistributionNew,
  changeTextBoxes,
  changeAllDistributionNew,
  changeAllDistributions,
} = distributionSlice.actions;
