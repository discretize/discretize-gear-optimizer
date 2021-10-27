import { createSlice } from '@reduxjs/toolkit';
import { setBuildTemplate, setModifiers } from '../controlsSlice';

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
    modifiers: [],
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
      const templateState = JSON.parse(action.payload.build.traits);
      return { ...templateState.extras };
    },
    [setModifiers]: (state) => {
      const enabledTypes = extrasTypes.filter((key) => state[key]);

      state.modifiers = enabledTypes.map((type) => {
        const id = state[type];
        const { modifiers } = extrasModifiersById[id];
        return { id, modifiers, source: type };
      });
    },
  },
});

export const getExtra = (key) => (state) => state.optimizer.extras[key];
export const getExtras = (state) => state.optimizer.extras;
export const getExtrasModifiers = (state) => state.optimizer.extras.modifiers;

export const { changeExtra, changeExtras } = extrasSlice.actions;
