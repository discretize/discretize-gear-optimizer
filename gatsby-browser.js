import { Spinner, ThemeProvider as GW2UIThemeProvider } from 'gw2-ui-bulk';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import baseTheme from './src/styles/baseTheme';
import createStore from './src/state/createStore';

const { store, persistor } = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <GW2UIThemeProvider theme={baseTheme}>{element}</GW2UIThemeProvider>
      </PersistGate>
    </Provider>
  );
};
