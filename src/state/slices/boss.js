import { createSlice } from '@reduxjs/toolkit';
import { changeAll } from './controlsSlice';

export const bossSlice = createSlice({
  name: 'boss',
  initialState: {
    // exposedUptime: '0',
    attackRate: '0.4',
    movementUptime: '0',
  },
  reducers: {
    // changeExposedUptime: (state, action) => {
    //   state.exposedUptime = action.payload;
    // },
    changeAttackRate: (state, action) => {
      state.attackRate = action.payload;
    },
    changeMovementUptime: (state, action) => {
      state.movementUptime = action.payload;
    },
  },
  extraReducers: {
    [changeAll]: (state, action) => {
      return /* { ...initialState, ... */ action.payload?.form?.boss /* } */;
    },
  },
});

// export const getExposedUptime = (state) => state.optimizer.form.boss.exposedUptime;
export const getAttackRate = (state) => state.optimizer.form.boss.attackRate;
export const getMovementUptime = (state) => state.optimizer.form.boss.movementUptime;

export const { /* changeExposedUptime, */ changeAttackRate, changeMovementUptime } =
  bossSlice.actions;
