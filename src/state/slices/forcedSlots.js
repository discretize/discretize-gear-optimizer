import { createSlice } from '@reduxjs/toolkit';
import { changeAll } from './controlsSlice';

export const forcedSlotsSlice = createSlice({
  name: 'forcedSlots',
  initialState: {
    slots: Array(14).fill(null),
    exclusions: {
      enabled: false,
      data: {},
    },
  },
  reducers: {
    changeForcedSlot: (state, action) => {
      state.slots[action.payload.index] = action.payload.value;
    },
    clearForcedSlots: (state) => {
      state.slots = state.slots.map(() => null);
    },
    changeAllForcedSlots: (state, action) => {
      state.slots = action.payload;
    },
    changeExclusion: (state, action) => {
      const { affix, index, value } = action.payload;
      if (!state.exclusions.data[affix]) state.exclusions.data[affix] = Array(14).fill(false);
      state.exclusions.data[affix][index] = Boolean(value);
    },
    changeExclusionsEnabled: (state, action) => {
      state.exclusions.enabled = action.payload;
      if (!action.payload) {
        state.exclusions.data = {};
      }
    },
  },
  extraReducers: {
    [changeAll]: (state, action) => {
      return { ...state, ...action.payload?.form?.forcedSlots };
    },
  },
});

export const getForcedSlots = (state) => state.optimizer.form.forcedSlots.slots;
export const getExclusionsEnabled = (state) => state.optimizer.form.forcedSlots.exclusions.enabled;
export const getExclusionData = (state) => state.optimizer.form.forcedSlots.exclusions.data;

export const {
  changeForcedSlot,
  clearForcedSlots,
  changeAllForcedSlots,
  changeExclusion,
  changeExclusionsEnabled,
} = forcedSlotsSlice.actions;
