import { createSelector, createSlice } from '@reduxjs/toolkit';
import { WeaponTypes } from '../../utils/gw2-data';
import { changeAll, setBuildTemplate } from './controlsSlice';

const fillAffix = (data, affix, value = false) => {
  data[affix] = Array(14).fill(value);
};
const pick = (object, keysToPick) =>
  Object.fromEntries(keysToPick.filter((key) => key in object).map((key) => [key, object[key]]));
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
      if (!state.exclusions.data[affix]) fillAffix(state.exclusions.data, affix);
      state.exclusions.data[affix][index] = Boolean(value);
    },
    changeExotic: (state, action) => {
      const { affix, index, value } = action.payload;
      if (!state.exotics.data[affix]) fillAffix(state.exotics.data, affix);
      state.exotics.data[affix][index] = Boolean(value);
    },
    changeAllExotic: (state, action) => {
      const { value } = action.payload;
      state.affixes.forEach((affix) => {
        fillAffix(state.exotics.data, affix, value);
      });
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
export const getUsedExoticsData = (state) =>
  pick(state.optimizer.form.priorities.exotics.data, state.optimizer.form.priorities.affixes);

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
  changeAllExotic,
  changeExoticsEnabled,
} = prioritiesSlice.actions;
