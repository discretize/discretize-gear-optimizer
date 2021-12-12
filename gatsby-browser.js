/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */

import { Spinner, ThemeProvider } from 'gw2-ui-bulk';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'typeface-fira-mono';
import 'typeface-menomonia';
import 'typeface-muli';
import 'typeface-raleway';
import createStore from './src/state/createStore';
import baseTheme from './src/styles/baseTheme';

const { store, persistor } = createStore();

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    {/* TODO fix redux-persist breaking template swapping <PersistGate loading={<Spinner />} persistor={persistor}> */}
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <ThemeProvider theme={baseTheme}>{element}</ThemeProvider>
    </PersistGate>
    {/* </PersistGate> */}
  </Provider>
);
