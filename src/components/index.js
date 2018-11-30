import React from "react";
import Routes from "./Routes";
import { store } from "../store";
import { Provider } from "react-redux";

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
