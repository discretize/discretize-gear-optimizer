import { createSlice } from '@reduxjs/toolkit';
import { changeProfession, setBuildTemplate, setModifiers } from '../gearOptimizerSlice';

import { classModifiersById } from '../../assets/modifierdata';

export const traitsSlice = createSlice({
  name: 'traits',
  initialState: {
    showAll: false,
    selectedLines: ['', '', ''],
    selectedTraits: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    items: [[], [], []],
    modifiers: [],
  },
  reducers: {
    toggleShowAll: (state, action) => {
      state.showAll = action.payload;
    },
    changeTraitLine: (state, action) => {
      const { index, newTraitLine, data } = action.payload;

      state.selectedLines[index] = newTraitLine.toString();
      state.selectedTraits[index] = [0, 0, 0];

      const allItemData = data.find((section) => section.id === newTraitLine).items;
      state.items[index] = allItemData.map((itemData) => {
        // minor traits are always visible; no majors are selected so none are visible
        const visible = Boolean(itemData.minor);
        const enabled = Boolean(itemData.defaultEnabled);
        const amount = itemData.amount ? '' : null;
        return { id: itemData.id, visible, enabled, amount, data: itemData };
      });
    },
    changeTrait: (state, action) => {
      const { index, tier, newTrait } = action.payload;

      const oldTrait = state.selectedTraits[index][tier];
      state.selectedTraits[index][tier] = newTrait;

      // update visibility
      state.items[index].forEach((item) => {
        if (item.data.gw2id === oldTrait) {
          item.visible = false;
        }
        if (item.data.gw2id === newTrait) {
          item.visible = true;
        }
      });
    },
    toggleTraitModifier: (state, action) => {
      const { index, id, enabled } = action.payload;

      const match = state.items[index].find((item) => item.id === id);
      if (match) match.enabled = enabled;
    },
    setTraitModiferAmount: (state, action) => {
      const { index, id, amount } = action.payload;

      const match = state.items[index].find((item) => item.id === id);
      if (match) match.amount = amount;
    },
  },
  extraReducers: {
    [changeProfession]: (state, action) => {
      if (state.profession !== action.payload) {
        return {
          ...state,
          selectedLines: ['', '', ''],
          selectedTraits: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          items: [[], [], []],
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

export const getShowAllTraits = (state) => state.traits.showAll;
export const getTraitLines = (state) => state.traits.selectedLines;
export const getTraits = (state) => state.traits.selectedTraits;
export const getTraitItems = (state) => state.traits.items;

export const {
  toggleShowAll,
  changeTraitLine,
  changeTrait,
  toggleTraitModifier,
  setTraitModiferAmount,
} = traitsSlice.actions;
