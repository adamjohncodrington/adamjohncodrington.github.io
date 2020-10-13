import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { App } from "app";
import { THEME, GlobalStyle } from "styles";

import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
