import { createSlice } from '@reduxjs/toolkit';
import { changeProfession, setBuildTemplate, setModifiers } from '../controlsSlice';

import { classModifiersById } from '../../assets/modifierdata';

const getInitialItems = (data, traitline) => {
  const allItemData = data.find((section) => section.id === traitline).items;
  return allItemData.map((itemData) => {
    // minor traits are always visible; no majors are selected so none are visible
    const visible = Boolean(itemData.minor);
    const enabled = Boolean(itemData.defaultEnabled);
    const amountMaybe = itemData.amountData ? { amount: '' } : {};
    return { id: itemData.id, visible, enabled, ...amountMaybe };
  });
};

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

      state.items[index] = getInitialItems(data, newTraitLine);
    },
    changeTrait: (state, action) => {
      const { index, tier, newTrait } = action.payload;

      const oldTrait = state.selectedTraits[index][tier];
      state.selectedTraits[index][tier] = newTrait;

      // update visibility
      state.items[index].forEach((item) => {
        const { gw2id } = classModifiersById[item.id];
        if (gw2id === oldTrait) {
          item.visible = false;
        }
        if (gw2id === newTrait) {
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
      return {
        showAll: state.showAll,
        ...traitState.traits,
      };
    },
    [setModifiers]: (state, action) => {
      state.modifiers = state.items
        .flat()
        .filter((item) => item.visible && item.enabled)
        .map((item) => {
          const data = classModifiersById[item.id];
          return { ...item, ...data };
        });
    },
  },
});

export const getShowAllTraits = (state) => state.optimizer.traits.showAll;
export const getTraitLines = (state) => state.optimizer.traits.selectedLines;
export const getTraits = (state) => state.optimizer.traits.selectedTraits;
export const getTraitItems = (state) => state.optimizer.traits.items;

export const {
  toggleShowAll,
  changeTraitLine,
  changeTrait,
  toggleTraitModifier,
  setTraitModiferAmount,
} = traitsSlice.actions;
