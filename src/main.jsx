import React from "react";
import ReactDOM from "react-dom";
import IndexPage from "./pages";
import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import { Provider } from "react-redux";
import muiTheme from "./utils/placeholder-unused-theme";
import createStore from "./state/createStore";
import { CssBaseline, ThemeProvider } from "@mui/material";

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <IndexPage />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
