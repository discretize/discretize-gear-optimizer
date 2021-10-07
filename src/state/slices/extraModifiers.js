import { createSlice } from '@reduxjs/toolkit';
import { setModifiers } from '../controlsSlice';

export const extraModifiersSlice = createSlice({
  name: 'extraModifiers',
  initialState: {
    error: '',
    extraModifiers: [],
    textBox: '',
    modifiers: [],
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
    [setModifiers]: (state) => {
      // all selected modifiers will be collected in this array
      const modifiers = [];
      const { extraModifiers } = state;

      // Apply extra (manual) modifiers
      if (extraModifiers.length > 0) {
        modifiers.push(
          ...JSON.parse(extraModifiers).map((modi, index) => {
            return { id: `extraModifier${index}`, modifiers: JSON.stringify(modi) };
          }),
        );
      }
      state.modifiers = modifiers;
    },
  },
});

export const getExtraModifiers = (key) => (state) => state.optimizer.extraModifiers[key];

export const { changeExtraModifiers, changeExtraModifiersError } = extraModifiersSlice.actions;
