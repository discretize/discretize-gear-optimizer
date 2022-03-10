import { createSelector, createSlice } from '@reduxjs/toolkit';
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
      spotter: false,
      frostSpirit: false,
      empowerAllies: false,
      pinpointDistribution: false,
      assassinsPresence: false,
      riteDwarf: false,
      strengthInNumbers: false,
      baneSignet: false,
      signetOfJudgment: false,
      signetOfMercy: false,
      signetOfWrath: false,
      exposed: false,
      lightArmor: false,
    },
    amounts: {
      might: '25',
      vulnerability: '25',
    },
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
  extraReducers: {
    [changeAll]: (state, action) => {
      return { ...state, ...action.payload?.form?.buffs };
    },
    [setBuildTemplate]: (state, action) => {
      const { buffPreset } = action.payload;

      const buffs = {};
      [...Object.keys(state.buffs)].forEach((key) => {
        buffs[key] = false;
        if (key in buffPreset) buffs[key] = buffPreset[key];
      });

      return { buffs, amounts: state.amounts };
    },
  },
});

export const getBuffs = (state) => state.optimizer.form.buffs.buffs;
export const getBuffAmounts = (state) => state.optimizer.form.buffs.amounts;

export const getBuffsModifiers = createSelector(
  (state) => state.optimizer.form.buffs,
  (buffs) => {
    const enabledModifiers = Object.keys(buffs.buffs).filter((key) => buffs.buffs[key]);

    return enabledModifiers.map((id) => {
      const itemData = buffModifiersById[id];
      return { id, ...itemData, amount: buffs.amounts?.[id] };
    });
  },
);

export const { changeBuff, replaceBuffs, changeBuffAmount } = buffsSlice.actions;
