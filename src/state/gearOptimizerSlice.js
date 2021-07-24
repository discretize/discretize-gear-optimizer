import { createSlice } from "@reduxjs/toolkit";

export const gearOptimizerSlice = createSlice({
  name: "go",
  initialState: {
    profession: "",
    ar: 162
  },
  reducers: {
    changeProfession: (state, action) => {
      state.profession = action.payload;
    },
    changeAR: (state, action) => {
      state.ar = action.payload;
    }
  }
});

export const getProfession = (state) => state.gearOptimizer.profession;
export const getAR = (state) => state.gearOptimizer.ar;

export const { changeProfession, changeAR } = gearOptimizerSlice.actions;

export default gearOptimizerSlice.reducer;
