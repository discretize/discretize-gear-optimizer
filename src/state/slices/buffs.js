import { createSlice } from '@reduxjs/toolkit';
import { setBuildTemplate, setModifiers } from '../gearOptimizerSlice';

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
      facetOfNature: false,
      riteDwarf: false,
      strengthInNumbers: false,
      baneSignet: false,
      signetOfJudgment: false,
      signetOfMercy: false,
      signetOfWrath: false,
      exposed: false,
      lightArmor: false,
    },
    modifiers: [],
  },
  reducers: {
    changeBuff: (state, action) => {
      state.buffs[action.payload.key] = action.payload.value;
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
    [setBuildTemplate]: (state, action) => {
      const { buffPreset } = action.payload;

      const buffs = {};
      [...Object.keys(state.buffs)].forEach((key) => {
        buffs[key] = false;
        if (key in buffPreset) buffs[key] = buffPreset[key];
      });

      return { ...state, buffs };
    },
    [setModifiers]: (state, action) => {
      const { data } = action.payload;

      // all selected modifiers will be collected in this array
      const modifiers = [];

      // Apply "buffs" modifiers
      data.buffs.list
        .flatMap((d) => d.items)
        .filter((elem) => state.buffs[elem.id])
        .forEach((elem) =>
          modifiers.push({ id: elem.id, modifiers: elem.modifiers, gw2_id: elem.gw2_id }),
        );

      state.modifiers = modifiers;
    },
  },
});

export const getBuffs = (state) => state.buffs.buffs;

export const { changeBuff, replaceBuffs } = buffsSlice.actions;
