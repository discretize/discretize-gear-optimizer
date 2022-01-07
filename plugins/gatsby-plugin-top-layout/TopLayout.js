import { Global } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Spinner, ThemeProvider as GW2UIThemeProvider } from 'gw2-ui-bulk';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '../../src/state/createStore';
import baseTheme from '../../src/styles/baseTheme';
import globals from '../../src/styles/globals';
import theme from '../../src/styles/theme';

const { store, persistor } = createStore();

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Global styles={globals} />
            <CssBaseline />
            <GW2UIThemeProvider theme={baseTheme}>{props.children}</GW2UIThemeProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
