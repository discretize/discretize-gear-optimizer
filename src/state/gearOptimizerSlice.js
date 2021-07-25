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
    Runes: "",
    Sigil1: "",
    Sigil2: "",
    Enhancement: "",
    Nourishment: "",
    affixes: [],
    distribution: {
      version: 2,
      values: [2, 0, 0, 0, 0, 0],
      textBoxes: ["2", "0", "0", "0", "0", "0"]
    },
    optimizeFor: "damage",
    weaponType: "dualWielded",
    minBoonDuration: "",
    minHealingPower: "",
    minToughness: "1000",
    maxToughness: ""
  },
  reducers: {
    changeProfession: (state, action) => {
      state.profession = action.payload;
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
    changeDistribution: (state, action) => {
      state.distribution.values[action.payload.index] = action.payload.value;
    },
    changeTextBoxes: (state, action) => {
      state.distribution.textBoxes[action.payload.index] = action.payload.value;
    },
    changeAllDistributions: (state, action) => {
      state.distribution.values = action.payload;
    }
  }
});

export const getProfession = (state) => state.gearOptimizer.profession;
export const getAR = (state) => state.gearOptimizer.ar;
export const getTraitLines = (state) => state.gearOptimizer.traits.lines;
export const getTraits = (state) => state.gearOptimizer.traits.selected;
export const getGeneric = (key) => (state) => state.gearOptimizer[key];
export const getDistributionVersion = (state) => state.gearOptimizer.distribution.version;
export const getDistribution = (state) => state.gearOptimizer.distribution.values;
export const getTextBoxes = (state) => state.gearOptimizer.distribution.textBoxes;

export const {
  changeProfession,
  changeAR,
  changeTraitLine,
  changeTraits,
  changeGeneric,
  changeDistributionVersion,
  changeDistribution,
  changeTextBoxes,
  changeAllDistributions
} = gearOptimizerSlice.actions;

export default gearOptimizerSlice.reducer;
