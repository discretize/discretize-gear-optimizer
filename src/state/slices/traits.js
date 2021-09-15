import { createSlice } from '@reduxjs/toolkit';
import { changeProfession, setBuildTemplate, setModifiers } from '../gearOptimizerSlice';

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
      state.modifiers = state.modifiers.filter((m) => m.gw2_id !== action.payload);
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
      // passed data from GraphQL
      const { data, profession } = action.payload;

      // all selected modifiers will be collected in this array
      const modifiers = [];

      // map id to modifier. We dont store modifier values in the state!
      const allSkillsAndTraits = data[profession.toLowerCase()].edges[0].node.list.flatMap(
        (el) => el.items,
      );
      const matchedTraitModifiers = state.modifiers.map((traitModifier) =>
        allSkillsAndTraits.filter((t) => t !== null).find((trait) => trait.id === traitModifier.id),
      );

      modifiers.push(...matchedTraitModifiers);

      state.modifiers = modifiers;
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
