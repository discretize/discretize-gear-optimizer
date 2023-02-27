import { createSlice } from '@reduxjs/toolkit';
import {
  allClassModifiersById,
  classModifiers,
  traitSectionsById,
} from '../../assets/modifierdata';
import { PROFESSIONS } from '../../utils/gw2-data';
import { changeAll, changeProfession, getProfession, setBuildTemplate } from './controlsSlice';

const getInitialItems = (traitline) => {
  const allItemData = traitSectionsById[traitline].items || [];
  return Object.fromEntries(
    allItemData
      .filter((itemData) => itemData.defaultEnabled)
      .map((itemData) => {
        const value = itemData.amountData ? { amount: itemData.amountData.defaultInput ?? '' } : {};
        return [itemData.id, value];
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
        const itemData = allClassModifiersById[id];
        state.items[index][id] = itemData?.amountData
          ? { amount: itemData?.amountData?.defaultInput ?? '' }
          : {};
      } else {
        delete state.items[index][id];
      }
    },
    setTraitModiferAmount: (state, action) => {
      const { index, id, amount } = action.payload;

      state.items[index][id] = { ...state.items[index][id], amount };
    },
    changeTraits: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: {
    [changeAll]: (state, action) => {
      return { ...state, ...action.payload?.form?.traits };
    },
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
      if (!value) return; // used to set value to false instead of deleting
      const itemData = allClassModifiersById[id];
      if (!itemData) return;

      const visible = itemData.minor || allSelectedTraits.includes(itemData.gw2id);
      if (visible) {
        result.push({ id, ...itemData, amount: value?.amount });
      }
    });
  });
  return result;
};

export const getCurrentSpecialization = (state) => {
  const profession = getProfession(state);
  const selectedLines = getTraitLines(state);

  const { eliteSpecializations } = PROFESSIONS.find((prof) => prof.profession === profession);
  // contains the names of the selected trait lines
  const selectedTraitLinesNames = selectedLines
    .map((id) => classModifiers[profession].find((section) => section?.id === Number(id)))
    .filter((section) => section !== undefined)
    .map((section) => section.section);

  // currently selected specialization. In case multiple elite specializations are selected, only the first one is counted.
  // In case no specialization is selected, the variable defaults to the core profession
  const currentSpecialization =
    selectedTraitLinesNames.find((spec) => eliteSpecializations.includes(spec)) || profession;
  return currentSpecialization;
};

export const {
  toggleShowAll,
  changeTraitLine,
  changeTrait,
  toggleTraitModifier,
  setTraitModiferAmount,
  changeTraits,
} = traitsSlice.actions;
