import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { listenerMiddleware } from './redux-hooks';
import { bossSlice } from './slices/boss';
import { buffsSlice } from './slices/buffs';
import { buildPageSlice } from './slices/buildPage';
import { controlSlice } from './slices/controlsSlice';
import { distributionSlice } from './slices/distribution';
import { extraModifiersSlice } from './slices/extraModifiers';
import { extrasSlice } from './slices/extras';
import { forcedSlotsSlice } from './slices/forcedSlots';
import { infusionsSlice } from './slices/infusions';
import { localUserSettingsSlice } from './slices/localUserSettings';
import { prioritiesSlice } from './slices/priorities';
import { skillsSlice } from './slices/skills';
import { traitsSlice } from './slices/traits';
import { userSettingsSlice } from './slices/userSettings';

const store = configureStore({
  reducer: {
    optimizer: combineReducers({
      userSettings: userSettingsSlice.reducer,
      localUserSettings: localUserSettingsSlice.reducer,
      control: controlSlice.reducer,
      form: combineReducers({
        extras: extrasSlice.reducer,
        distribution: distributionSlice.reducer,
        buffs: buffsSlice.reducer,
        infusions: infusionsSlice.reducer,
        traits: traitsSlice.reducer,
        skills: skillsSlice.reducer,
        priorities: prioritiesSlice.reducer,
        extraModifiers: extraModifiersSlice.reducer,
        forcedSlots: forcedSlotsSlice.reducer,
        boss: bossSlice.reducer,
      }),
      buildPage: buildPageSlice.reducer,
    }),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  devTools: { actionsDenylist: ['control/updateResults'] },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
