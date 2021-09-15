import { createSlice } from '@reduxjs/toolkit';
import { setModifiers } from '../gearOptimizerSlice';

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
      state.extraModifiers[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: {
    [setModifiers]: (state, action) => {
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

export const getExtraModifiers = (key) => (state) => state.extraModifiers[key];

export const { changeExtraModifiers } = extraModifiersSlice.actions;
