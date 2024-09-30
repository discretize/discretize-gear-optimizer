import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PARAMS, setQueryParm, useQueryParam } from '../../utils/queryParam';
import type { RootState } from '../store';
import { changeAll } from './controlsSlice';

export type GameMode = 'fractals' | 'raids' | 'wvw';

function getLocalStorageState(): object {
  try {
    const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as object;
    }
  } catch {
    return {};
  }
  return {};
}

const SETTINGS_STORAGE_KEY = 'globalSettings';

const defaultState = { expertMode: true, gameMode: 'fractals', language: 'en' };
// eslint-disable-next-line react-hooks/rules-of-hooks
const gameModeParam = useQueryParam({ key: PARAMS.GAMEMODE });

export const loadedSettings = {
  ...defaultState,
  ...getLocalStorageState(), // override default state with potentially saved localStorage variables
  ...(gameModeParam && { gameMode: gameModeParam }), // gameMode from query param takes priority
} as {
  expertMode: boolean;
  gameMode: GameMode;
  language: string;
};

// append the gamemode to the query param if no query param is present
if (!gameModeParam) setQueryParm({ key: PARAMS.GAMEMODE, value: loadedSettings.gameMode });

export const userSettingsSlice = createSlice({
  name: 'userSettings',

  initialState: {
    expertMode: loadedSettings.expertMode,
    gameMode: loadedSettings.gameMode,
  },

  reducers: {
    changeAllUserSettings: (state, action) => {
      return { ...state, ...action.payload?.userSettings };
    },
    changeExpertMode: (state, action: PayloadAction<boolean>) => {
      state.expertMode = action.payload;
    },
    changeGameMode: (state, action: PayloadAction<GameMode>) => {
      state.gameMode = action.payload;
      setQueryParm({ key: PARAMS.GAMEMODE, value: action.payload });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(changeAll, (state, action) => {
      if (action.payload?.userSettings?.gameMode) {
        setQueryParm({ key: PARAMS.GAMEMODE, value: action.payload.userSettings.gameMode });
      }

      return { ...state, ...action.payload?.userSettings };
    });
  },
});

export const getExpertMode = (state: RootState) => state.optimizer.userSettings.expertMode;
export const getGameMode = (state: RootState) => state.optimizer.userSettings.gameMode;

export const { changeAllUserSettings, changeExpertMode, changeGameMode } =
  userSettingsSlice.actions;

export default userSettingsSlice.reducer;
