import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { reduxSideEffect } from '../redux-hooks';
import type { RootState } from '../store';
import { getLocalStorageObject } from '../../utils/usefulFunctions';

// this slice is for settings which should not be loaded from URLs;
// it has no changeAll reducer case

const UNSHARED_SETTINGS_STORAGE_KEY = 'localUserSettings';

const defaultState = { defaultStatInfusions: '' };

export const loadedLocalUserSettings = {
  ...defaultState,
  ...getLocalStorageObject(UNSHARED_SETTINGS_STORAGE_KEY), // override default state with potentially saved localStorage variables
};

const getSliceState = (state: RootState) => state.optimizer.localUserSettings;
reduxSideEffect(getSliceState, (slice) =>
  localStorage.setItem(UNSHARED_SETTINGS_STORAGE_KEY, JSON.stringify(slice)),
);

export const localUserSettingsSlice = createSlice({
  name: 'localUserSettings',

  initialState: loadedLocalUserSettings,

  reducers: {
    changeDefaultStatInfusions: (state, action: PayloadAction<string>) => {
      state.defaultStatInfusions = action.payload;
    },
  },
});

export const getDefaultStatInfusions = (state: RootState) =>
  state.optimizer.localUserSettings.defaultStatInfusions;

export const { changeDefaultStatInfusions } = localUserSettingsSlice.actions;

export default localUserSettingsSlice.reducer;
