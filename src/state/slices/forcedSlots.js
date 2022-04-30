import { createSlice } from '@reduxjs/toolkit';
import { changeAll } from './controlsSlice';

export const forcedSlotsSlice = createSlice({
  name: 'forcedSlots',
  initialState: {
    slots: Array(14).fill(null),
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
  },
  extraReducers: {
    [changeAll]: (state, action) => {
      return { ...state, ...action.payload?.form?.forcedSlots };
    },
  },
});

export const getForcedSlots = (state) => state.optimizer.form.forcedSlots.slots;

export const { changeForcedSlot, clearForcedSlots, changeAllForcedSlots } =
  forcedSlotsSlice.actions;
