import { createSlice } from '@reduxjs/toolkit';
import { setBuildTemplate, setModifiers } from '../gearOptimizerSlice';

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
    changeExtras: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: {
    [setBuildTemplate]: (state, action) => {
      const templateState = JSON.parse(action.payload.build.traits);
      return { ...state, ...templateState.extras };
    },
    [setModifiers]: (state, action) => {
      const data = action.payload;

      // all selected modifiers will be collected in this array
      const modifiers = [];

      // Applies runes, sigils, food modifiers
      const extrasData = [
        { id: 'Runes', list: data.runes.list },
        { id: 'Sigil1', list: data.sigils.list },
        { id: 'Sigil2', list: data.sigils.list },
        { id: 'Enhancement', list: data.enhancement.list },
        { id: 'Nourishment', list: data.nourishment.list },
      ];

      extrasData
        .filter((extra) => state[extra.id] !== '')
        .filter((extra) => state[extra.id] !== undefined)
        .forEach((extra) => {
          modifiers.push({
            id: state[extra.id],
            modifiers: extra.list.flatMap((d) => d.items).find((a) => a.id === state[extra.id])
              .modifiers,
            source: extra.id,
          });
        });

      state.modifiers = modifiers;
    },
  },
});

export const getExtra = (key) => (state) => state.extras[key];
export const getExtras = (state) => state.extras;
export const getExtrasModifiers = (state) => state.extras.modifiers;

export const { changeExtras } = extrasSlice.actions;
