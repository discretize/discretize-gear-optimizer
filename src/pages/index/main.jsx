import '@discretize/gw2-ui-new/dist/default_style.css';
import '@discretize/gw2-ui-new/dist/index.css';
import '@discretize/react-discretize-components/dist/index.css';
import '@discretize/typeface-menomonia';
import { Global } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { globals } from '../../utils/globals';
import 'typeface-fira-mono';
import 'typeface-muli';
import 'typeface-raleway';
import store from '../../state/store';
import '../../utils/i18n';
import muiTheme from '../../utils/placeholder-unused-theme';
import '../../utils/rdc-styles.css';
import IndexPage from './index';

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
