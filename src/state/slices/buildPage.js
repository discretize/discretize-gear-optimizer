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
    skills: {
      healId: '',
      utility1Id: '',
      utility2Id: '',
      utility3Id: '',
      eliteId: '',
    },
    traits: {
      lines: [],
      selected: [],
    },
  },
  reducers: {
    changeCharacter: (state, action) => {
      state.character = action.payload;
    },
    changeWeapon: (state, action) => {
      state.weapons[action.payload.key] = action.payload.value;
    },
    changeSkill: (state, action) => {
      state.skills[action.payload.key] = action.payload.value;
    },
    changeBuildPage: (state, action) => {
      return action.payload;
    },
  },
});

export const getCharacter = (state) => state.optimizer.buildPage.character;
export const getWeapons = (state) => state.optimizer.buildPage.weapons;
export const getSkills = (state) => state.optimizer.buildPage.skills;
export const getTraits = (state) => state.optimizer.buildPage.traits;

export const { changeCharacter, changeWeapon, changeBuildPage, changeSkill } =
  buildPageSlice.actions;
