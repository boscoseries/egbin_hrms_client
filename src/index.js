import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "core-js";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { transitions, positions, types, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { icons } from "./assets/icons";
import { Provider } from "react-redux";
import store from "./redux/store";

const options = {
  position: positions.BOTTOM_CENTER,
  types: types.info,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE
};

React.icons = icons;

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
