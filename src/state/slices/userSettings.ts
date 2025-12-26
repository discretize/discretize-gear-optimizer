import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { PARAMS, setQueryParm, useQueryParam } from '../../utils/queryParam';
import { getLocalStorageObject } from '../../utils/usefulFunctions';
import type { RootState } from '../store';
import { changeAll } from './controlsSlice';

export type GameMode = 'fractals' | 'raids' | 'wvw';

const SETTINGS_STORAGE_KEY = 'globalSettings';

const defaultState = { expertMode: true, gameMode: 'fractals', language: 'en' };
// eslint-disable-next-line react-hooks/rules-of-hooks
const gameModeParam = useQueryParam({ key: PARAMS.GAMEMODE });

// language is included here for historical reasons; src/utils/i18n.js imports this
export const loadedSettings = {
  ...defaultState,
  ...getLocalStorageObject(SETTINGS_STORAGE_KEY), // override default state with potentially saved localStorage variables
  ...(gameModeParam && { gameMode: gameModeParam }), // gameMode from query param takes priority
} as {
  expertMode: boolean;
  gameMode: GameMode;
  language: string;
};

// append the gamemode to the query param if no query param is present
if (!gameModeParam) setQueryParm({ key: PARAMS.GAMEMODE, value: loadedSettings.gameMode });

// save user settings to localStorage (as a react hook, to access react-i18next language)
const getSliceState = (state: RootState) => state.optimizer.userSettings;
export const useSaveUserSettingsOnChange = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const sliceState = useSelector(getSliceState);

  React.useEffect(() => {
    const settings = JSON.stringify({ ...sliceState, language });
    console.log(`saving... ${settings}`);

    localStorage.setItem(SETTINGS_STORAGE_KEY, settings);
  }, [sliceState, language]);
};

export const userSettingsSlice = createSlice({
  name: 'userSettings',

  initialState: {
    expertMode: loadedSettings.expertMode,
    gameMode: loadedSettings.gameMode,
    // language is excluded from this redux slice; react-i18next has its own mutable state
  },

  reducers: {
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
      if (action.payload?.userSettings) {
        if (action.payload.userSettings.gameMode) {
          setQueryParm({ key: PARAMS.GAMEMODE, value: action.payload.userSettings.gameMode });
        }

        return { ...state, ...action.payload.userSettings };
      }
    });
  },
});

export const getExpertMode = (state: RootState) => state.optimizer.userSettings.expertMode;
export const getGameMode = (state: RootState) => state.optimizer.userSettings.gameMode;

export const { changeExpertMode, changeGameMode } = userSettingsSlice.actions;

export default userSettingsSlice.reducer;
