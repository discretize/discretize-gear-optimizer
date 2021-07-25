import { createSlice } from "@reduxjs/toolkit";

export const gearOptimizerSlice = createSlice({
  name: "go",
  initialState: {
    profession: "",
    ar: 162,
    traits: {
      lines: [],
      selected: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    },
    modifiers: [],
    Runes: "",
    Sigil1: "",
    Sigil2: "",
    Enhancement: "",
    Nourishment: "",
    affixes: [],
    distribution: {
      version: 2,
      values1: [100, 0, 0, 0, 0, 0],
      values2: [2, 0, 0, 0, 0, 0],
      textBoxes: ["2", "0", "0", "0", "0", "0"]
    },
    optimizeFor: "Damage",
    weaponType: "dualWielded",
    minBoonDuration: "",
    minHealingPower: "",
    minToughness: "1000",
    maxToughness: "",
    skills: [],
    forcedSlots: ["", "", "", "", "", "", "", "", "", "", "", "", ""],
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
    lightArmor: false
  },
  reducers: {
    changeProfession: (state, action) => {
      state.profession = action.payload;
      state.modifiers = [];
      state.traits = {
        lines: [],
        selected: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ]
      };
      state.skills = [];
    },
    changeAR: (state, action) => {
      state.ar = action.payload;
    },
    changeTraitLine: (state, action) => {
      state.traits.lines = action.payload;
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
      state.distribution.values2[action.payload.index] = action.payload.value;
    },
    changeTextBoxes: (state, action) => {
      state.distribution.textBoxes[action.payload.index] = action.payload.value;
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
      state.skills = state.skills.filter((v) => v !== action.payload.value);
    },
    changeForcedSlot: (state, action) => {
      state.forcedSlots[action.payload.index] = action.payload.value;
    },
    addModifier: (state, action) => {
      state.modifiers = state.modifiers.concat(action.payload);
    },
    removeModifier: (state, action) => {
      state.modifiers = state.modifiers.filter((m) => m.id !== action.payload);
    },
    removeTraitModifierWithGW2id: (state, action) => {
      state.modifiers = state.modifiers.filter((m) => m.gw2_id !== action.payload);
    },
    removeModifierWithSource: (state, action) => {
      state.modifiers = state.modifiers.filter((m) => m.source !== action.payload);
    }
  }
});

export const getProfession = (state) => state.gearOptimizer.profession;
export const getAR = (state) => state.gearOptimizer.ar;
export const getTraitLines = (state) => state.gearOptimizer.traits.lines;
export const getTraits = (state) => state.gearOptimizer.traits.selected;
export const getGeneric = (key) => (state) => state.gearOptimizer[key];
export const getDistributionVersion = (state) => state.gearOptimizer.distribution.version;
export const getDistributionOld = (state) => state.gearOptimizer.distribution.values1;
export const getDistributionNew = (state) => state.gearOptimizer.distribution.values2;
export const getTextBoxes = (state) => state.gearOptimizer.distribution.textBoxes;
export const getSkills = (state) => state.gearOptimizer.skills;
export const getModifiers = (state) => state.gearOptimizer.modifiers;

export const {
  changeProfession,
  changeAR,
  changeTraitLine,
  changeTraits,
  changeGeneric,
  changeDistributionVersion,
  changeDistributionNew,
  changeTextBoxes,
  changeAllDistributionsOld,
  addSkill,
  removeSkill,
  changeForcedSlot,
  addModifier,
  removeModifier,
  removeTraitModifierWithGW2id,
  removeModifierWithSource
} = gearOptimizerSlice.actions;

export default gearOptimizerSlice.reducer;
