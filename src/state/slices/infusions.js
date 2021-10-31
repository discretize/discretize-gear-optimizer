import { createSlice } from '@reduxjs/toolkit';

export const infusionsSlice = createSlice({
  name: 'infusions',
  initialState: {
    primaryInfusion: '',
    secondaryInfusion: '',
    primaryMaxInfusions: '',
    secondaryMaxInfusions: '',
  },
  reducers: {
    changeInfusion: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    changeInfusions: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const getInfusions = (state) => state.optimizer.infusions;

export const { changeInfusion, changeInfusions } = infusionsSlice.actions;
