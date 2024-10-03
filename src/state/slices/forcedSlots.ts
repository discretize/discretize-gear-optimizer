import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AffixName, maxSlotsLength } from '../../utils/gw2-data';
import type { RootState } from '../store';
import { changeAll } from './controlsSlice';

const initialState = {
  slots: Array(maxSlotsLength).fill(null) as (AffixName | null)[],
};

export const forcedSlotsSlice = createSlice({
  name: 'forcedSlots',
  initialState,
  reducers: {
    changeForcedSlot: (
      state,
      action: PayloadAction<{ index: number; value: AffixName | null }>,
    ) => {
      state.slots[action.payload.index] = action.payload.value;
    },
    clearForcedSlots: (state) => {
      state.slots = state.slots.map(() => null);
    },
    changeAllForcedSlots: (state, action: PayloadAction<(AffixName | null)[]>) => {
      state.slots = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(changeAll, (state, action) => {
      return { ...state, ...action.payload?.form?.forcedSlots };
    });
  },
});

export const getForcedSlots = (state: RootState) => state.optimizer.form.forcedSlots.slots;

export const { changeForcedSlot, clearForcedSlots, changeAllForcedSlots } =
  forcedSlotsSlice.actions;
