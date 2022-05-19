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
    minDamage: '',
    minHealing: '',
    minSurvivability: '',
    affixes: [],
    exclusions: {
      enabled: false,
      data: {},
    },
    exotics: {
      enabled: false,
      data: {},
    },
    customAffix: {},
    customAffixTextBox: '',
    customAffixError: '',
  },
  reducers: {
    changePriority: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    changeExclusion: (state, action) => {
      const { affix, index, value } = action.payload;
      if (!state.exclusions.data[affix]) state.exclusions.data[affix] = Array(14).fill(false);
      state.exclusions.data[affix][index] = Boolean(value);
    },
    changeExotic: (state, action) => {
      const { affix, index, value } = action.payload;
      if (!state.exotics.data[affix]) state.exotics.data[affix] = Array(14).fill(false);
      state.exotics.data[affix][index] = Boolean(value);
    },
    changeExclusionsEnabled: (state, action) => {
      state.exclusions.enabled = action.payload;
      if (!action.payload) {
        state.exclusions.data = {};
      }
    },
    changeExoticsEnabled: (state, action) => {
      state.exotics.enabled = action.payload;
      if (!action.payload) {
        state.exotics.data = {};
      }
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

      return { ...state, ...prioritiesPreset, ...(weaponType ? { weaponType } : {}) };
    },
  },
});

export const getPriority = (key) => (state) => state.optimizer.form.priorities[key];
export const getExclusionsEnabled = (state) => state.optimizer.form.priorities.exclusions.enabled;
export const getExoticsEnabled = (state) => state.optimizer.form.priorities.exotics.enabled;
export const getExclusionData = (state) => state.optimizer.form.priorities.exclusions.data;
export const getExoticsData = (state) => state.optimizer.form.priorities.exotics.data;

export const getCustomAffixData = createSelector(
  (state) => state.optimizer.form.priorities.customAffix,
  (customAffix) => {
    const type = customAffix?.type || 'triple';
    const major = customAffix?.bonuses?.major || [];
    const minor = customAffix?.bonuses?.minor || [];

    return { type, bonuses: { major, minor } };
  },
);

export const {
  changePriority,
  changeExclusion,
  changeExclusionsEnabled,
  changeExotic,
  changeExoticsEnabled,
} = prioritiesSlice.actions;
