import { gw2UIReducer } from 'gw2-ui-bulk';
import { persistReducer, persistStore, createMigrate } from 'redux-persist';

import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { controlSlice } from './slices/controlsSlice';
import { extrasSlice } from './slices/extras';
import gearOptimizerSaga from './optimizer/sagas';
import { distributionSlice } from './slices/distribution';
import { buffsSlice } from './slices/buffs';
import { infusionsSlice } from './slices/infusions';
import { traitsSlice } from './slices/traits';
import { skillsSlice } from './slices/skills';
import { prioritiesSlice } from './slices/priorities';
import { extraModifiersSlice } from './slices/extraModifiers';
import { forcedSlotsSlice } from './slices/forcedSlots';
import { bossSlice } from './slices/boss';

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window === 'undefined' ? createNoopStorage() : createWebStorage('local');

// bump this to cache invalidate the persisted state
const CURRENT_VERSION = 2;

const migrations = {
  [CURRENT_VERSION]: (_state) => ({}),
};
const persistConfig = {
  key: 'root',
  whitelist: 'gw2UiStore',
  storage,
  version: CURRENT_VERSION,
  migrate: createMigrate(migrations),
};

const reducers = combineReducers({
  gw2UiStore: gw2UIReducer,
  optimizer: combineReducers({
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
  }),
});

const persistedReducer = persistReducer(persistConfig, reducers);

const saga = createSagaMiddleware();
const composeEnhancers =
  (typeof window !== 'undefined' &&
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default () => {
  const store = reduxCreateStore(persistedReducer, composeEnhancers(applyMiddleware(saga)));

  saga.run(gearOptimizerSaga);

  const persistor = persistStore(store);

  return { store, persistor };
};
