/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, Spinner } from 'gw2-ui-bulk';
import { PersistGate } from 'redux-persist/integration/react';
import baseTheme from './src/styles/baseTheme';

import 'typeface-fira-mono';
import 'typeface-menomonia';
import 'typeface-muli';
import 'typeface-raleway';
import createStore from './src/state/createStore';

const { store, persistor } = createStore();

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    {/* TODO fix redux-persist breaking template swapping <PersistGate loading={<Spinner />} persistor={persistor}> */}
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <ThemeProvider theme={baseTheme}>{element}</ThemeProvider>
    </PersistGate>
    {/* </PersistGate> */}
  </Provider>
);
