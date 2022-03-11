import { createSelector, createSlice } from '@reduxjs/toolkit';
import { allExtrasModifiersById } from '../../assets/modifierdata';
import { changeAll, setBuildTemplate } from './controlsSlice';

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
    [changeAll]: (state, action) => {
      return { ...state, ...action.payload?.form?.extras };
    },
    [setBuildTemplate]: (state, action) => {
      const { extrasPreset = {} } = action.payload;
      return { ...state, ...extrasPreset };
    },
  },
});

export const getExtra = (key) => (state) => state.optimizer.form.extras[key];
export const getExtras = (state) => state.optimizer.form.extras;

export const getExtrasModifiers = createSelector(
  (state) => state.optimizer.form.extras,
  (extras) => {
    const enabledTypes = extrasTypes.filter((key) => extras[key]);

    return enabledTypes.map((type) => {
      const id = extras[type];
      const { modifiers } = allExtrasModifiersById[id];
      return { id, modifiers, source: type };
    });
  },
);

export const { changeExtra, changeExtras } = extrasSlice.actions;
