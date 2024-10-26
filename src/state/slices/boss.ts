import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { changeAll } from './controlsSlice';

export interface BossSlice {
  attackRate: string;
  movementUptime: string;
}

const initialState: BossSlice = {
  attackRate: '0.4',
  movementUptime: '0',
};

export const bossSlice = createSlice({
  name: 'boss',
  initialState,
  reducers: {
    changeAttackRate: (state, action: PayloadAction<string>) => {
      state.attackRate = action.payload;
    },
    changeMovementUptime: (state, action: PayloadAction<string>) => {
      state.movementUptime = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(changeAll, (state, action) => {
      if (action.payload?.form?.boss) {
        return { ...state, ...action.payload?.form?.boss };
      }
    });
  },
});

export const getAttackRate = (state: RootState) => state.optimizer.form.boss.attackRate;
export const getMovementUptime = (state: RootState) => state.optimizer.form.boss.movementUptime;

export const { changeAttackRate, changeMovementUptime } = bossSlice.actions;
