import { handleRequests } from "gw2-ui";

import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from "redux";
import createSagaMiddleware from "redux-saga";

import gearOptimizerReducer from "./gearOptimizerSlice";
import gearOptimizerSaga from "./optimizer/sagas";

const { requestsReducer, requestsMiddleware } = handleRequests();

const saga = createSagaMiddleware();

const reducers = combineReducers({
  requests: requestsReducer,
  gearOptimizer: gearOptimizerReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default () => {
  const store = reduxCreateStore(
    reducers,
    composeEnhancers(applyMiddleware(saga, ...requestsMiddleware))
  );

  saga.run(gearOptimizerSaga);

  return store;
};
