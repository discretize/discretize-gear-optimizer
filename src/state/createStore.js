import { handleRequests, gw2UIReducer } from 'gw2-ui-bulk';
import { persistReducer, persistStore } from 'redux-persist';

import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import gearOptimizerReducer from './gearOptimizerSlice';
import gearOptimizerSaga from './optimizer/sagas';

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

const { requestsReducer, requestsMiddleware } = handleRequests();

const persistConfig = {
  key: 'root',
  whitelist: 'gw2UiStore',
  storage: storage,
};

const reducers = combineReducers({
  requests: requestsReducer,
  gw2UiStore: gw2UIReducer,
  gearOptimizer: gearOptimizerReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const saga = createSagaMiddleware();
const composeEnhancers =
  (typeof window !== 'undefined' &&
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default () => {
  const store = reduxCreateStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(saga, ...requestsMiddleware)),
  );

  saga.run(gearOptimizerSaga);

  const persistor = persistStore(store);

  return { store, persistor };
};
