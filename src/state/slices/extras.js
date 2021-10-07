import { createSlice } from '@reduxjs/toolkit';
import { setBuildTemplate, setModifiers } from '../controlsSlice';

import { extrasModifiersById } from '../../assets/modifierdata';

const modifierData = {
  Runes: extrasModifiersById.runes,
  Sigil1: extrasModifiersById.sigils,
  Sigil2: extrasModifiersById.sigils,
  Nourishment: extrasModifiersById.food,
  Enhancement: extrasModifiersById.utility,
};

export const extrasSlice = createSlice({
  name: 'extras',
  initialState: {
    extras: {
      Runes: '',
      Sigil1: '',
      Sigil2: '',
      Enhancement: '',
      Nourishment: '',
    },
    modifiers: [],
  },
  reducers: {
    changeExtras: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: {
    [setBuildTemplate]: (state, action) => {
      const templateState = JSON.parse(action.payload.build.traits);
      return { ...state, ...templateState.extras };
    },
    [setModifiers]: (state) => {
      const enabledTypes = Object.keys(modifierData).filter((key) => state[key]);

      state.modifiers = enabledTypes.map((type) => {
        const id = state[type];
        const { modifiers } = modifierData[type][id];
        return { id, modifiers, source: type };
      });
    },
  },
});

export const getExtra = (key) => (state) => state.optimizer.extras[key];
export const getExtras = (state) => state.optimizer.extras;
export const getExtrasModifiers = (state) => state.optimizer.extras.modifiers;

export const { changeExtras } = extrasSlice.actions;
