import { createSlice } from '@reduxjs/toolkit';

export const forcedSlotsSlice = createSlice({
  name: 'forcedSlots',
  initialState: {
    slots: [null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  reducers: {
    changeForcedSlot: (state, action) => {
      state.slots[action.payload.index] = action.payload.value;
    },
  },
});

export const getForcedSlots = (state) => state.forcedSlots.slots;

export const { changeForcedSlot } = forcedSlotsSlice.actions;
