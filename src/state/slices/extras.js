import { createSlice } from '@reduxjs/toolkit';
import { setBuildTemplate } from './controlsSlice';

import { extrasModifiersById } from '../../assets/modifierdata';

const extrasTypes = ['Runes', 'Sigil1', 'Sigil2', 'Nourishment', 'Enhancement'];

export const extrasSlice = createSlice({
  name: 'extras',
  initialState: {
    Runes: '',
    Sigil1: '',
    Sigil2: '',
    Enhancement: '',
    Nourishment: '',
  },
  reducers: {
    changeExtra: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    changeExtras: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: {
    [setBuildTemplate]: (state, action) => {
      const { extrasPreset = {} } = action.payload;
      return { ...state, ...extrasPreset };
    },
  },
});

export const getExtra = (key) => (state) => state.optimizer.extras[key];
export const getExtras = (state) => state.optimizer.extras;

export const getExtrasModifiers = ({ optimizer: { extras } }) => {
  const enabledTypes = extrasTypes.filter((key) => extras[key]);

  return enabledTypes.map((type) => {
    const id = extras[type];
    const { modifiers } = extrasModifiersById[id];
    return { id, modifiers, source: type };
  });
};

export const { changeExtra, changeExtras } = extrasSlice.actions;
