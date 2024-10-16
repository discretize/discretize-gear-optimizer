import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  allClassModifiersById,
  classModifiers,
  traitSectionsById,
} from '../../assets/modifierdata';
import { SPECIALIZATIONS } from '../../utils/gw2-data';
import { enumArrayIncludes } from '../../utils/usefulFunctions';
import type { AppliedModifier } from '../optimizer/optimizerSetup';
import type { RootState } from '../store';
import { changeAll, changeProfession, getProfession, setBuildTemplate } from './controlsSlice';

interface TraitValue {
  amount?: string;
}

// todo: specify trait keys
type TraitsValues = Record<string, TraitValue>;

// todo: type item data
const getInitialItems = (traitline: string): TraitsValues => {
  const allItemData = traitSectionsById[traitline].items || [];
  return Object.fromEntries(
    allItemData
      .filter((itemData: any) => itemData.defaultEnabled)
      .map((itemData: any) => {
        const value = itemData.amountData ? { amount: itemData.amountData.defaultInput ?? '' } : {};
        return [itemData.id, value];
      }),
  );
};

export interface TraitsSlice {
  showAll: boolean;
  selectedLines: string[];
  selectedTraits: number[][];
  items: TraitsValues[];
}

const initialState: TraitsSlice = {
  showAll: false,
  selectedLines: ['', '', ''],
  selectedTraits: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  items: [{}, {}, {}],
};

export const traitsSlice = createSlice({
  name: 'traits',

  initialState,

  reducers: {
    toggleShowAll: (state, action: PayloadAction<boolean>) => {
      state.showAll = action.payload;
    },
    changeTraitLine: (state, action: PayloadAction<{ index: number; newTraitLine: string }>) => {
      const { index, newTraitLine } = action.payload;

      state.selectedLines[index] = newTraitLine.toString();
      state.selectedTraits[index] = [0, 0, 0];

      state.items[index] = getInitialItems(newTraitLine);
    },
    changeTrait: (
      state,
      action: PayloadAction<{ index: number; tier: number; newTrait: number }>,
    ) => {
      const { index, tier, newTrait } = action.payload;

      state.selectedTraits[index][tier] = newTrait;
    },
    toggleTraitModifier: (
      state,
      action: PayloadAction<{ index: number; id: number; enabled: boolean }>,
    ) => {
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
    setTraitModiferAmount: (
      state,
      action: PayloadAction<{ index: number; id: number; amount: string }>,
    ) => {
      const { index, id, amount } = action.payload;

      state.items[index][id] = { ...state.items[index][id], amount };
    },
    changeTraits: (state, action) => {
      return { ...state, ...action.payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(changeAll, (state, action) => {
      if (action.payload?.form?.traits) {
        return { ...state, ...action.payload.form.traits };
      }
    });

    builder.addCase(changeProfession, (state, _action) => ({
      ...state,
      selectedLines: ['', '', ''],
      selectedTraits: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      items: [{}, {}, {}],
    }));

    builder.addCase(setBuildTemplate, (state, action) => {
      const { traitsPreset = {} } = action.payload;
      return { ...state, ...traitsPreset };
    });
  },
});

export const getShowAllTraits = (state: RootState) => state.optimizer.form.traits.showAll;
export const getTraitLines = (state: RootState) => state.optimizer.form.traits.selectedLines;
export const getTraits = (state: RootState) => state.optimizer.form.traits.selectedTraits;
export const getTraitItems = (state: RootState) => state.optimizer.form.traits.items;

export const getTraitsModifiers = (state: RootState): AppliedModifier[] => {
  const { traits } = state.optimizer.form;

  const allSelectedTraits = traits.selectedTraits.flat(2);

  const result: AppliedModifier[] = [];
  traits.items.forEach((object) => {
    Object.entries(object).forEach(([id, value]) => {
      if (!value) return; // used to set value to false instead of deleting
      const itemData = allClassModifiersById[id];
      if (!itemData) return;

      const visible =
        itemData.minor ||
        (typeof itemData.gw2id === 'number' && allSelectedTraits.includes(itemData.gw2id));
      if (visible) {
        result.push({ id, ...itemData, amount: value?.amount });
      }
    });
  });
  return result;
};

export const getCurrentSpecialization = (state: RootState): string => {
  const profession = getProfession(state);
  if (!profession) throw new Error('no selected profession!');
  const selectedLines = getTraitLines(state);

  const eliteSpecializations = SPECIALIZATIONS[profession];
  // contains the names of the selected trait lines
  const selectedTraitLinesNames = selectedLines
    .map((id) => classModifiers[profession].find((section: any) => section?.id === Number(id)))
    .filter(Boolean)
    .map((section) => section.section);

  // currently selected specialization. In case multiple elite specializations are selected, only the first one is counted.
  // In case no specialization is selected, the variable defaults to the core profession
  const currentSpecialization =
    selectedTraitLinesNames.find((spec: string) => enumArrayIncludes(eliteSpecializations, spec)) ||
    profession;
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
