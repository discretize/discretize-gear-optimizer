import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from 'redux';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import createSagaMiddleware from 'redux-saga';
import gearOptimizerSaga from './optimizer/sagas';
import { bossSlice } from './slices/boss';
import { buffsSlice } from './slices/buffs';
import { buildPageSlice } from './slices/buildPage';
import { controlSlice } from './slices/controlsSlice';
import { distributionSlice } from './slices/distribution';
import { extraModifiersSlice } from './slices/extraModifiers';
import { extrasSlice } from './slices/extras';
import { forcedSlotsSlice } from './slices/forcedSlots';
import { infusionsSlice } from './slices/infusions';
import { prioritiesSlice } from './slices/priorities';
import { skillsSlice } from './slices/skills';
import { traitsSlice } from './slices/traits';

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
const CURRENT_VERSION = 3;

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
    buildPage: buildPageSlice.reducer,
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
