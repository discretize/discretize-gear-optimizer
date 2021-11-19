import { createSlice } from '@reduxjs/toolkit';
import { changeAll } from './controlsSlice';

export const extraModifiersSlice = createSlice({
  name: 'extraModifiers',
  initialState: {
    error: '',
    extraModifiers: [],
    textBox: '',
  },
  reducers: {
    changeExtraModifiers: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    changeExtraModifiersError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [changeAll]: (state, action) => {
      return /* { ...initialState, ... */ action.payload?.form?.extraModifiers /* } */;
    },
  },
});

export const getExtraModifiers = (key) => (state) => state.optimizer.form.extraModifiers[key];

export const getExtraModifiersModifiers = (state) => {
  const { extraModifiers } = state.optimizer.form;
  return extraModifiers.extraModifiers.map((data, index) => ({
    id: `extraModifier ${index + 1}`,
    modifiers: data,
  }));
};

export const { changeExtraModifiers, changeExtraModifiersError } = extraModifiersSlice.actions;
