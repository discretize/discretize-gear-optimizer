import { createSlice } from '@reduxjs/toolkit';
import { changeProfession, setBuildTemplate } from './controlsSlice';

import { classModifiersById, traitSectionsById } from '../../assets/modifierdata';

const getInitialItems = (traitline) => {
  const allItemData = traitSectionsById[traitline].items || [];
  return Object.fromEntries(
    allItemData.map((itemData) => {
      const enabled = itemData.defaultEnabled;
      const value = itemData.amountData ? { amount: '' } : true;
      return [itemData.id, enabled ? value : false];
    }),
  );
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
    items: [{}, {}, {}],
  },
  reducers: {
    toggleShowAll: (state, action) => {
      state.showAll = action.payload;
    },
    changeTraitLine: (state, action) => {
      const { index, newTraitLine } = action.payload;

      state.selectedLines[index] = newTraitLine.toString();
      state.selectedTraits[index] = [0, 0, 0];

      state.items[index] = getInitialItems(newTraitLine);
    },
    changeTrait: (state, action) => {
      const { index, tier, newTrait } = action.payload;

      state.selectedTraits[index][tier] = newTrait;
    },
    toggleTraitModifier: (state, action) => {
      const { index, id, enabled } = action.payload;

      if (enabled) {
        const itemData = classModifiersById[id];
        state.items[index][id] = itemData?.amountData ? { amount: '' } : true;
      } else {
        state.items[index][id] = false;
      }
    },
    setTraitModiferAmount: (state, action) => {
      const { index, id, amount } = action.payload;

      state.items[index][id].amount = amount;
    },
    changeTraits: (state, action) => {
      return { ...state, ...action.payload };
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
          items: [{}, {}, {}],
        };
      }
    },
    [setBuildTemplate]: (state, action) => {
      const { traitsPreset = {} } = action.payload;
      return { ...state, ...traitsPreset };
    },
  },
});

export const getShowAllTraits = (state) => state.optimizer.form.traits.showAll;
export const getTraitLines = (state) => state.optimizer.form.traits.selectedLines;
export const getTraits = (state) => state.optimizer.form.traits.selectedTraits;
export const getTraitItems = (state) => state.optimizer.form.traits.items;

export const getTraitsModifiers = (state) => {
  const { traits } = state.optimizer.form;
  const allSelectedTraits = traits.selectedTraits.flat(2);

  const result = [];
  traits.items.forEach((object) => {
    Object.entries(object).forEach(([id, value]) => {
      const itemData = classModifiersById[id];
      if (!itemData) return;

      const visible = itemData.minor || allSelectedTraits.includes(itemData.gw2id);
      const enabled = Boolean(value);

      if (enabled && visible) {
        result.push({ id, ...itemData, amount: value?.amount });
      }
    });
  });
  return result;
};

export const {
  toggleShowAll,
  changeTraitLine,
  changeTrait,
  toggleTraitModifier,
  setTraitModiferAmount,
  changeTraits,
} = traitsSlice.actions;
