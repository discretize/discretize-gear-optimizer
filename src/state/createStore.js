import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import gearOptimizerSaga from './sagas/sagas';
import formStateSaga from './sagas/formStateSaga';
import buildPageSaga from './sagas/buildPageSaga';
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

const saga = createSagaMiddleware();
const composeEnhancers =
  (typeof window !== 'undefined' &&
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default () => {
  const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));
  saga.run(gearOptimizerSaga);
  saga.run(formStateSaga);
  saga.run(buildPageSaga);
  return store;
};
