import { globals } from '@discretize/globals';
import '@discretize/gw2-ui-new/dist/default_style.css';
import '@discretize/gw2-ui-new/dist/index.css';
import '@discretize/react-discretize-components/dist/index.css';
import { Global } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import IndexPage from '../src/pages/build/index';
import store from '../src/state/store';
import muiTheme from '../src/utils/placeholder-unused-theme';
import '../src/utils/rdc-styles.css';

import '@discretize/typeface-menomonia';
import 'typeface-fira-mono';
import 'typeface-muli';
import 'typeface-raleway';

import '../src/utils/i18n';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={globals} />

      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <IndexPage />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
