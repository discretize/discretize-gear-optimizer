import { createSlice } from '@reduxjs/toolkit';
import { changeProfession, setBuildTemplate, setModifiers } from '../gearOptimizerSlice';

import { classModifiersById } from '../../assets/modifierdata';

export const traitsSlice = createSlice({
  name: 'traits',
  initialState: {
    lines: ['', '', ''],
    selected: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    modifiers: [],
  },
  reducers: {
    changeTraitLine: (state, action) => {
      state.lines[action.payload.index] = action.payload.value;
    },
    changeTraits: (state, action) => {
      state.selected[action.payload.index] = action.payload.selected;
    },
    addTraitModifier: (state, action) => {
      state.modifiers = state.modifiers.concat(action.payload);
    },
    removeTraitModifier: (state, action) => {
      state.modifiers = state.modifiers.filter((modifier) => modifier.id !== action.payload);
    },
    removeTraitModifierWithGW2id: (state, action) => {
      state.modifiers = state.modifiers.filter((modifier) => modifier.gw2id !== action.payload);
    },
    removeTraitModifierWithSource: (state, action) => {
      state.modifiers = state.modifiers.filter((modifier) => modifier.source !== action.payload);
    },
  },
  extraReducers: {
    [changeProfession]: (state, action) => {
      if (state.profession !== action.payload) {
        return {
          ...state,
          lines: ['', '', ''],
          selected: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          modifiers: [],
        };
      }
    },
    [setBuildTemplate]: (state, action) => {
      const { build } = action.payload;

      const traitState = JSON.parse(build.traits);
      return { ...state, ...traitState.traits };
    },
    [setModifiers]: (state, action) => {
      const { profession } = action.payload;

      const allTraitModifiers = classModifiersById[profession.toLowerCase()];

      // const enabledModifiers = ;
      // state.modifiers = enabledModifiers.map((id) => {
      //   const { modifiers, gw2id } = allTraitModifiersItems[id];
      //   return { id, modifiers, gw2id };
      // });

      state.modifiers = state.modifiers.map((oldModifier) => {
        const newModifier = allTraitModifiers[oldModifier.id];
        return Object.assign(oldModifier, newModifier);
      });
    },
  },
});

export const getTraitLines = (state) => state.traits.lines;
export const getTraits = (state) => state.traits.selected;
export const getTraitModifiers = (state) => state.traits.modifiers;

export const {
  changeTraitLine,
  changeTraits,
  addTraitModifier,
  removeTraitModifier,
  removeTraitModifierWithGW2id,
  removeTraitModifierWithSource,
} = traitsSlice.actions;
