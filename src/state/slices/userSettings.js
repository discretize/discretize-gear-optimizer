import { createSlice } from '@reduxjs/toolkit';
import { PARAMS, useQueryParam } from '../../utils/queryParam';

const SETTINGS_STORAGE_KEY = 'globalSettings';

const defaultState = JSON.stringify({ expertMode: true, gameMode: 'fractals', language: 'en' });
// eslint-disable-next-line react-hooks/rules-of-hooks
const gameModeParam = useQueryParam({ key: PARAMS.GAMEMODE });
export const loadedSettings = {
  ...(JSON.parse(localStorage.getItem(SETTINGS_STORAGE_KEY)) || defaultState),
  ...(gameModeParam && { gameMode: gameModeParam }), // gamemode from query param takes priority
};

export const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState: {
    expertMode: loadedSettings?.expertMode,
    gameMode: loadedSettings?.gameMode,
  },
  reducers: {
    changeAllUserSettings: (state, action) => {
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

export const { changeAllUserSettings, changeExpertMode, changeGameMode } =
  userSettingsSlice.actions;

export default userSettingsSlice.reducer;
