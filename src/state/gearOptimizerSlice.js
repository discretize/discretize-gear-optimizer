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
    bannerOfStrength: true,
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
    }
  }
});

export const getProfession = (state) => state.gearOptimizer.profession;
export const getAR = (state) => state.gearOptimizer.ar;
export const getTraitLines = (state) => state.gearOptimizer.traits.lines;
export const getTraits = (state) => state.gearOptimizer.traits.selected;
export const getGeneric = (key) => (state) => state.gearOptimizer[key];

export const { changeProfession, changeAR, changeTraitLine, changeTraits, changeGeneric } =
  gearOptimizerSlice.actions;

export default gearOptimizerSlice.reducer;
