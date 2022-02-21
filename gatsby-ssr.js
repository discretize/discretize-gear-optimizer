/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingScreen from './src/components/baseComponents/LoadingScreen';
import createStore from './src/state/createStore';
import 'gw2-ui-new/dist/default_style.css';
import 'gw2-ui-new/dist/index.css';

const { store, persistor } = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  );
};
