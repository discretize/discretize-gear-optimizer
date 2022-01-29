/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import { gw2uiBaseTheme } from '@discretize/react-discretize-components';
import { ThemeProvider as GW2UIThemeProvider } from 'gw2-ui-bulk';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingScreen from './src/components/baseComponents/LoadingScreen';
import createStore from './src/state/createStore';

const { store, persistor } = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <GW2UIThemeProvider theme={gw2uiBaseTheme}>{element}</GW2UIThemeProvider>
      </PersistGate>
    </Provider>
  );
};
