import { createSlice } from '@reduxjs/toolkit';
import { buffModifiersById } from '../../assets/modifierdata';
import { changeAll, setBuildTemplate } from './controlsSlice';

export const buffsSlice = createSlice({
  name: 'buffs',

  initialState: {
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
  },

  reducers: {
    changeBuff: (state, action) => {
      state.buffs[action.payload.key] = action.payload.value;
    },
    changeBuffAmount: (state, action) => {
      state.amounts[action.payload.key] = action.payload.value;
    },
    replaceBuffs: (state, action) => {
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
      const removeOldBuffs = (data) => {
        if (!data) return data;
        const validEntries = Object.entries(data).filter(([key]) => buffModifiersById[key]);
        return Object.fromEntries(validEntries);
      };

      const { buffs, amounts } = action.payload?.form?.buffs ?? {};
      const validData = { buffs: removeOldBuffs(buffs), amounts: removeOldBuffs(amounts) };

      console.log({ buffs, amounts, validData });
      return { ...state, ...validData };
    });

    builder.addCase(setBuildTemplate, (state, action) => {
      const { buffPreset } = action.payload;

      const buffs = {};
      [...Object.keys(state.buffs)].forEach((key) => {
        buffs[key] = false;
        if (key in buffPreset) buffs[key] = buffPreset[key];
      });

      return { buffs, amounts: state.amounts };
    });
  },
});

export const getBuffs = (state) => state.optimizer.form.buffs.buffs;
export const getBuffAmounts = (state) => state.optimizer.form.buffs.amounts;

export const getBuffsModifiers = (state) => {
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
