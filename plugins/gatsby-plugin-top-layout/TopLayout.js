import { Global } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { muiTheme, globals } from '@discretize/react-discretize-components';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <Global styles={globals} />

      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
