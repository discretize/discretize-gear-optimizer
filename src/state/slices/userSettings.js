import { createSlice } from '@reduxjs/toolkit';

export const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState: {
    expertMode: true,
    gameMode: 'fractals',
  },
  reducers: {
    changeAll: (state, action) => {
      return { ...state, ...action.payload?.userSettings };
    },
    changeExpertMode: (state, action) => {
      state.expertMode = action.payload;
    },
    changeGameMode: (state, action) => {
      state.gameMode = action.payload;
    },
  },
});

export const getExpertMode = (state) => state.optimizer.userSettings.expertMode;
export const getGameMode = (state) => state.optimizer.userSettings.gameMode;

export const { changeAll, changeExpertMode, changeGameMode } = userSettingsSlice.actions;

export default userSettingsSlice.reducer;
