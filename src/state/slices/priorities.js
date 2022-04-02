import { createSelector, createSlice } from '@reduxjs/toolkit';
import { WeaponTypes } from '../../utils/gw2-data';
import { changeAll, setBuildTemplate } from './controlsSlice';

export const prioritiesSlice = createSlice({
  name: 'priorities',
  initialState: {
    optimizeFor: 'Damage',
    weaponType: WeaponTypes.dualWield,
    minBoonDuration: '',
    minHealingPower: '',
    minToughness: '',
    maxToughness: '',
    minHealth: '',
    minCritChance: '',
    affixes: [],
    customAffix: {},
    customAffixTextBox: '',
    customAffixError: '',
  },
  reducers: {
    changePriority: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: {
    [changeAll]: (state, action) => {
      return { ...state, ...action.payload?.form?.priorities };
    },
    [setBuildTemplate]: (state, action) => {
      const {
        prioritiesPreset = {},
        build: { weaponType },
      } = action.payload;

      return { ...state, ...prioritiesPreset, ...(weaponType !== 'unset' ? { weaponType } : {}) };
    },
  },
});

export const getPriority = (key) => (state) => state.optimizer.form.priorities[key];

export const getCustomAffixData = createSelector(
  (state) => state.optimizer.form.priorities.customAffix,
  (customAffix) => {
    const type = customAffix?.type || 'triple';
    const major = customAffix?.bonuses?.major || [];
    const minor = customAffix?.bonuses?.minor || [];

    return { type, bonuses: { major, minor } };
  },
);

export const { changePriority } = prioritiesSlice.actions;
