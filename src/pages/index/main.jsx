import '@discretize/gw2-ui-new/dist/default_style.css';
import '@discretize/gw2-ui-new/dist/index.css';
import { globals } from '@discretize/react-discretize-components';
import '@discretize/typeface-menomonia';
import { Global } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'typeface-fira-mono';
import 'typeface-muli';
import 'typeface-raleway';
import createStore from '../../state/createStore';
import '../../utils/i18n';
import muiTheme from '../../utils/placeholder-unused-theme';
import IndexPage from './index';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={globals} />

      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <IndexPage />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
