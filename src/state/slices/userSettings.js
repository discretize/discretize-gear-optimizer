import { createSlice } from '@reduxjs/toolkit';
import { PARAMS, setQueryParm, useQueryParam } from '../../utils/queryParam';

function trycatch(func, fail) {
  try {
    return func();
  } catch (e) {
    return fail;
  }
}

const SETTINGS_STORAGE_KEY = 'globalSettings';

const defaultState = { expertMode: true, gameMode: 'fractals', language: 'en' };
// eslint-disable-next-line react-hooks/rules-of-hooks
const gameModeParam = useQueryParam({ key: PARAMS.GAMEMODE });

export const loadedSettings = {
  ...defaultState,
  ...trycatch(() => JSON.parse(localStorage.getItem(SETTINGS_STORAGE_KEY)), {}), // override default state with potentially saved localStorage variables
  ...(gameModeParam && { gameMode: gameModeParam }), // gameMode from query param takes priority
};

// append the gamemode to the query param if no query param is present
if (!gameModeParam) setQueryParm({ key: PARAMS.GAMEMODE, value: loadedSettings.gameMode });

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
