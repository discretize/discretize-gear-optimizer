/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingScreen from './src/components/baseComponents/LoadingScreen';
import createStore from './src/state/createStore';
import './src/utils/default_style.css';

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
