import React from "react";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { JssProvider } from "react-jss";
import { ThemeProvider } from "theme-ui";

import baseTheme from "../styles/baseTheme";

import getPageContext from "../utils/getPageContext";

export default (Component) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.muiPageContext = getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.getElementById("jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { theme, sheetsManager, generateClassName } = this.muiPageContext;

      return (
        <JssProvider generateClassName={generateClassName}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <ThemeProvider theme={baseTheme}>
              <Component {...this.props} />
            </ThemeProvider>
          </MuiThemeProvider>
        </JssProvider>
      );
    }
  };
