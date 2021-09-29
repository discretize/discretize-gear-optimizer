import { createSlice } from '@reduxjs/toolkit';
import { changeProfession, setBuildTemplate, setModifiers } from '../gearOptimizerSlice';

import { classModifiers } from '../../assets/modifierdata';

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
      state.modifiers = state.modifiers.filter((m) => m.id !== action.payload);
    },
    removeTraitModifierWithGW2id: (state, action) => {
      state.modifiers = state.modifiers.filter((m) => m.gw2id !== action.payload);
    },
    removeTraitModifierWithSource: (state, action) => {
      state.modifiers = state.modifiers.filter((m) => m.source !== action.payload);
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

      const allTraitModifiersItems = classModifiers[profession.toLowerCase()].reduce(
        (prev, section) => Object.assign(prev, section.items),
        {},
      );

      // const enabledModifiers = ;
      // state.modifiers = enabledModifiers.map((id) => {
      //   const { modifiers, gw2id } = allTraitModifiersItems[id];
      //   return { id, modifiers, gw2id };
      // });

      state.modifiers = state.modifiers.map((oldModifier) => {
        const newModifier = allTraitModifiersItems[oldModifier.id];
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
