import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import buildPageSaga from './sagas/buildPageSaga';
import calculationSaga from './sagas/calculationSaga';
import formStateSaga from './sagas/formStateSaga';
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
import { userSettingsSlice } from './slices/userSettings';

const reducers = combineReducers({
  optimizer: combineReducers({
    userSettings: userSettingsSlice.reducer,
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

const saga = createSagaMiddleware();
const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsDenylist: ['control/updateResults'] })
    : compose;

export default () => {
  const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));
  saga.run(calculationSaga);
  saga.run(formStateSaga);
  saga.run(buildPageSaga);
  return store;
};
