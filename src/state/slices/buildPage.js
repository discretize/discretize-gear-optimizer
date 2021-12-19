import { createSlice } from '@reduxjs/toolkit';

export const buildPageSlice = createSlice({
  name: 'buildPage',
  initialState: {
    character: null,
    weapons: {
      mainhand1: '',
      offhand1: '',
      mainhand2: '',
      offhand2: '',
    },
  },
  reducers: {
    changeCharacter: (state, action) => {
      state.character = action.payload;
    },
    changeWeapon: (state, action) => {
      state.weapons[action.payload.key] = action.payload.value;
    },
    changeBuildPage: (state, action) => {
      return action.payload;
    },
  },
});

export const getCharacter = (state) => state.optimizer.buildPage.character;
export const getWeapons = (state) => state.optimizer.buildPage.weapons;

export const { changeCharacter, changeWeapon, changeBuildPage } = buildPageSlice.actions;
