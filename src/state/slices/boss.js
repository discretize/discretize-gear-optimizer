import { createSlice } from '@reduxjs/toolkit';
import { changeAll } from './controlsSlice';

export const bossSlice = createSlice({
  name: 'boss',
  initialState: {
    attackRate: '0.4',
    movementUptime: '0',
  },
  reducers: {
    changeAttackRate: (state, action) => {
      state.attackRate = action.payload;
    },
    changeMovementUptime: (state, action) => {
      state.movementUptime = action.payload;
    },
  },
  extraReducers: {
    [changeAll]: (state, action) => {
      return { ...state, ...action.payload?.form?.boss };
    },
  },
});

export const getAttackRate = (state) => state.optimizer.form.boss.attackRate;
export const getMovementUptime = (state) => state.optimizer.form.boss.movementUptime;

export const { changeAttackRate, changeMovementUptime } = bossSlice.actions;
