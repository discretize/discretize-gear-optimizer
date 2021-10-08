import { createSlice } from '@reduxjs/toolkit';
import { changeProfession, setBuildTemplate, setModifiers } from '../controlsSlice';

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
    modifiers: [],
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
      const allSelectedTraits = state.selectedTraits.flat(2);

      const modifiers = [];
      state.items.forEach((object) => {
        Object.entries(object).forEach(([id, value]) => {
          const itemData = classModifiersById[id];
          if (!itemData) return;

          const visible = itemData.minor || allSelectedTraits.includes(itemData.gw2id);
          const enabled = Boolean(value);

          if (enabled && visible) {
            modifiers.push({ id, ...itemData, amount: value?.amount });
          }
        });
      });

      state.modifiers = modifiers;
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
