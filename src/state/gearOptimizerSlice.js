import { createSlice } from '@reduxjs/toolkit';
import { WAITING } from './optimizer/status';

export const gearOptimizerSlice = createSlice({
  name: 'go',
  initialState: {
    control: {
      expertMode: true,
      list: [],
      progress: 0,
      selected: 0,
      STATUS: WAITING,
    },
    profession: '',
    traits: {
      lines: ['', '', ''],
      selected: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      modifiers: [],
    },
    skills: [],
    extras: {
      Runes: '',
      Sigil1: '',
      Sigil2: '',
      Enhancement: '',
      Nourishment: '',
    },
    extraModifiers: {
      error: '',
      extraModifiers: [],
      textBox: '',
    },
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
    infusions: {
      primaryInfusion: '',
      secondaryInfusion: '',
      primaryMaxInfusions: '',
      secondaryMaxInfusions: '',
    },
    forcedSlots: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    ar: 162,
    omnipotion: true,
    priorities: {
      optimizeFor: 'Damage',
      weaponType: 'Dual wield',
      minBoonDuration: '',
      minHealingPower: '',
      minToughness: '1000',
      maxToughness: '',
      affixes: [],
    },
    distribution: {
      version: 2,
      values1: {
        Power: 100,
        Burning: 0,
        Bleeding: 0,
        Poisoned: 0,
        Torment: 0,
        Confusion: 0,
      },
      values2: {
        Power: 2,
        Burning: 0,
        Bleeding: 0,
        Poisoned: 0,
        Torment: 0,
        Confusion: 0,
      },
      textBoxes: {
        Power: '2',
        Burning: '0',
        Bleeding: '0',
        Poisoned: '0',
        Torment: '0',
        Confusion: '0',
      },
    },
    modifiers: [],
  },
  reducers: {
    reset: (state, action) => {
      state.modifiers = [];
      state.traits = {
        lines: ['', '', ''],

        selected: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        modifiers: [],
      };
      state.control = {
        ...state.control,
        list: [],
        progress: 0,
        selected: 0,
        status: WAITING,
      };
      state.skills = [];
    },
    changeProfession: (state, action) => {
      state.profession = action.payload;
    },
    changeAR: (state, action) => {
      state.ar = action.payload;
    },
    changeTraitLine: (state, action) => {
      state.traits.lines[action.payload.index] = action.payload.value;
    },
    changeTraits: (state, action) => {
      state.traits.selected[action.payload.index] = action.payload.selected;
    },
    changeGeneric: (state, action) => {
      state[action.payload.toChange] = action.payload.value;
    },
    changeDistributionVersion: (state, action) => {
      state.distribution.version = action.payload;
    },
    changeDistributionNew: (state, action) => {
      state.distribution = {
        ...state.distribution,
        values2: { ...state.distribution.values2, [action.payload.index]: action.payload.value },
      };
    },
    changeTextBoxes: (state, action) => {
      state.distribution = {
        ...state.distribution,
        textBoxes: {
          ...state.distribution.textBoxes,
          [action.payload.index]: action.payload.value,
        },
      };
    },
    changeAllTextBoxes: (state, action) => {
      state.distribution.textBoxes = action.payload;
    },
    changeExtraModifiers: (state, action) => {
      state.extraModifiers[action.payload.key] = action.payload.value;
    },
    changeAllDistributionsOld: (state, action) => {
      state.distribution.values1 = action.payload;
    },
    changeAllDistributionsNew: (state, action) => {
      state.distribution.values2 = action.payload;
    },
    addSkill: (state, action) => {
      state.skills = state.skills.concat(action.payload.value);
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter((v) => v !== action.payload);
    },
    changeForcedSlot: (state, action) => {
      state.forcedSlots[action.payload.index] = action.payload.value;
    },
    addModifier: (state, action) => {
      state.modifiers = state.modifiers.concat(action.payload);
    },
    setModifiers: (state, action) => {
      state.modifiers = action.payload;
    },
    addTraitModifier: (state, action) => {
      state.traits.modifiers = state.traits.modifiers.concat(action.payload);
    },
    removeModifier: (state, action) => {
      state.modifiers = state.modifiers.filter((m) => m.id !== action.payload);
    },
    removeTraitModifier: (state, action) => {
      state.traits.modifiers = state.traits.modifiers.filter((m) => m.id !== action.payload);
    },
    removeTraitModifierWithGW2id: (state, action) => {
      state.traits.modifiers = state.traits.modifiers.filter((m) => m.gw2_id !== action.payload);
    },
    removeModifierWithSource: (state, action) => {
      state.modifiers = state.modifiers.filter((m) => m.source !== action.payload);
    },
    removeTraitModifierWithSource: (state, action) => {
      state.traits.modifiers = state.traits.modifiers.filter((m) => m.source !== action.payload);
    },
    changeExtras: (state, action) => {
      state.extras[action.payload.key] = action.payload.value;
    },
    changeControl: (state, action) => {
      state.control[action.payload.key] = action.payload.value;
    },
    changeBuff: (state, action) => {
      state.buffs[action.payload.key] = action.payload.value;
    },
    changeInfusions: (state, action) => {
      state.infusions[action.payload.key] = action.payload.value;
    },
    changePriority: (state, action) => {
      state.priorities[action.payload.key] = action.payload.value;
    },
    changeList: (state, action) => {
      state.control.list = action.payload;
    },
    changeOmnipotion: (state, action) => {
      state.omnipotion = action.payload;
    },
    changeState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const getProfession = (state) => state.gearOptimizer.profession;
export const getAR = (state) => state.gearOptimizer.ar;
export const getTraitLines = (state) => state.gearOptimizer.traits.lines;
export const getTraits = (state) => state.gearOptimizer.traits.selected;
export const getGeneric = (key) => (state) => state.gearOptimizer[key];
export const getExtraModifiers = (key) => (state) => state.gearOptimizer.extraModifiers[key];
export const getDistributionVersion = (state) => state.gearOptimizer.distribution.version;
export const getDistributionOld = (state) => state.gearOptimizer.distribution.values1;
export const getDistributionNew = (state) => state.gearOptimizer.distribution.values2;
export const getTextBoxes = (state) => state.gearOptimizer.distribution.textBoxes;
export const getSkills = (state) => state.gearOptimizer.skills;
export const getModifiers = (state) => state.gearOptimizer.modifiers;
export const getTraitModifiers = (state) => state.gearOptimizer.traits.modifiers;
export const getExtra = (key) => (state) => state.gearOptimizer.extras[key];
export const getControl = (key) => (state) => state.gearOptimizer.control[key];
export const getBuffs = (state) => state.gearOptimizer.buffs;
export const getInfusions = (state) => state.gearOptimizer.infusions;
export const getPriority = (key) => (state) => state.gearOptimizer.priorities[key];
export const getExtras = (state) => state.gearOptimizer.extras;
export const getList = (state) => state.gearOptimizer.control.list;
export const getOmniPotion = (state) => state.gearOptimizer.omnipotion;
export const getSelectedCharacter = (state) => {
  const { selected } = state.gearOptimizer.control;
  return selected !== '' ? state.gearOptimizer.control.list[selected] : null;
};

export const {
  reset,
  changeProfession,
  changeAR,
  changeTraitLine,
  changeTraits,
  changeGeneric,
  changeDistributionVersion,
  changeDistributionNew,
  changeTextBoxes,
  changeAllTextBoxes,
  changeAllDistributionsOld,
  changeAllDistributionsNew,
  addSkill,
  removeSkill,
  changeForcedSlot,
  addModifier,
  removeModifier,
  removeTraitModifierWithGW2id,
  removeModifierWithSource,
  changeExtras,
  changeExtraModifiers,
  changeControl,
  changeBuff,
  changeInfusions,
  changePriority,
  changeList,
  addTraitModifier,
  removeTraitModifier,
  removeTraitModifierWithSource,
  setModifiers,
  changeOmnipotion,
  changeState,
} = gearOptimizerSlice.actions;

export default gearOptimizerSlice.reducer;
