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
    changeInfusions: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const getInfusions = (state) => state.infusions;

export const { changeInfusions } = infusionsSlice.actions;
