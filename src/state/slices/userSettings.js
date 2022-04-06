import { createSlice } from '@reduxjs/toolkit';

const SETTINGS_STORAGE_KEY = 'globalSettings';

const defaultState = JSON.stringify({ expertMode: true, gameMode: 'fractals', language: 'en' });
export const loadedSettings = JSON.parse(
  localStorage.getItem(SETTINGS_STORAGE_KEY) || defaultState,
);

export const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState: {
    expertMode: loadedSettings?.expertMode,
    gameMode: loadedSettings?.gameMode,
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
