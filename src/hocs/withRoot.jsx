import { CssBaseline, ThemeProvider, StyledEngineProvider } from '@mui/material';
import React from 'react';
import { JssProvider } from 'react-jss';
import { ThemeProvider as ThemeUIProvider } from 'theme-ui';
import baseTheme from '../styles/baseTheme';
import getPageContext from '../utils/getPageContext';

export default (Component) =>
  (class extends React.Component {
    constructor(props) {
      super(props);
      this.muiPageContext = getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      // eslint-disable-next-line no-unused-vars
      const { theme, sheetsManager, generateClassName } = this.muiPageContext;

      return (
        <JssProvider generateClassName={generateClassName}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ThemeUIProvider theme={baseTheme}>
                <Component {...this.props} />
              </ThemeUIProvider>
            </ThemeProvider>
          </StyledEngineProvider>
        </JssProvider>
      );
    }
  });
