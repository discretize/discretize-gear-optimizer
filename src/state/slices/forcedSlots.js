import { createSlice } from '@reduxjs/toolkit';
import { changeAll } from './controlsSlice';

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
  extraReducers: {
    [changeAll]: (state, action) => {
      return /* { ...initialState, ... */ action.payload?.form?.forcedSlots /* } */;
    },
  },
});

export const getForcedSlots = (state) => state.optimizer.form.forcedSlots.slots;

export const { changeForcedSlot } = forcedSlotsSlice.actions;
