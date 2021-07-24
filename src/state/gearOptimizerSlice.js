import { createSlice } from "@reduxjs/toolkit";

export const gearOptimizerSlice = createSlice({
  name: "go",
  initialState: {
    ar: 162
  },
  reducers: {
    changeAR: (state, action) => {
      state.ar = action.payload;
    }
  }
});

export const getAR = (state) => state.gearOptimizer.ar;

export const { changeAR } = gearOptimizerSlice.actions;

export default gearOptimizerSlice.reducer;
