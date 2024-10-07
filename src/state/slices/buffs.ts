import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { buffModifiersById } from '../../assets/modifierdata';
import type { AppliedModifier } from '../optimizer/optimizerSetup';
import type { RootState } from '../store';
import { changeAll, setBuildTemplate } from './controlsSlice';

// todo: specify buff keys
type Buffs = Record<string, boolean>;
type BuffAmounts = Record<string, string>;

const initialState: { buffs: Buffs; amounts: BuffAmounts } = {
  buffs: {
    might: false,
    fury: false,
    protection: false,
    vulnerability: false,
    bannerOfStrength: false,
    bannerOfDiscipline: false,
    bannerOfTactics: false,
    bannerOfDefense: false,
    empowerAllies: false,
    spotter: false,
    frostSpirit: false,
    pinpointDistribution: false,
    strengthInNumbers: false,
    'jade-bot-base': false,
    'jade-bot-per-tier': false,
    'reinforced-armor': false,
    baneSignet: false,
    signetOfJudgment: false,
    signetOfMercy: false,
    signetOfWrath: false,
    assassinsPresence: false,
    riteDwarf: false,
    exposed: false,
    lightArmor: false,
  },
  amounts: {},
};

export const buffsSlice = createSlice({
  name: 'buffs',
  initialState,
  reducers: {
    changeBuff: (state, action: PayloadAction<{ key: string; value: boolean }>) => {
      state.buffs[action.payload.key] = action.payload.value;
    },
    changeBuffAmount: (state, action: PayloadAction<{ key: string; value: string }>) => {
      state.amounts[action.payload.key] = action.payload.value;
    },
    replaceBuffs: (state, action: PayloadAction<Partial<Buffs>>) => {
      return {
        ...state,
        buffs: {
          ...Object.fromEntries(
            Object.keys(state.buffs).map((key) => [key, Boolean(action.payload[key])]),
          ),
        },
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(changeAll, (state, action) => {
      const removeOldBuffs = (data?: Buffs | BuffAmounts) => {
        if (!data) return {};
        const validEntries = Object.entries(data).filter(([key]) => buffModifiersById[key]);
        return Object.fromEntries(validEntries);
      };

      const { buffs, amounts } = action.payload?.form?.buffs ?? {};
      const validData = { buffs: removeOldBuffs(buffs), amounts: removeOldBuffs(amounts) };

      return { ...state, ...validData };
    });

    builder.addCase(setBuildTemplate, (state, action) => {
      const { buffPreset } = action.payload;

      const buffs: Buffs = {};
      [...Object.keys(state.buffs)].forEach((key) => {
        buffs[key] = false;
        if (key in buffPreset) buffs[key] = buffPreset[key];
      });

      return { buffs, amounts: state.amounts };
    });
  },
});

export const getBuffs = (state: RootState) => state.optimizer.form.buffs.buffs;
export const getBuffAmounts = (state: RootState) => state.optimizer.form.buffs.amounts;

export const getBuffsModifiers = (state: RootState): AppliedModifier[] => {
  const { buffs } = state.optimizer.form;
  const enabledModifiers = Object.keys(buffs.buffs).filter((key) => buffs.buffs[key]);

  return enabledModifiers
    .filter((id) => buffModifiersById[id])
    .map((id) => {
      const itemData = buffModifiersById[id];
      return { id, ...itemData, amount: buffs.amounts?.[id] };
    });
};

export const { changeBuff, replaceBuffs, changeBuffAmount } = buffsSlice.actions;
