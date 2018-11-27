import React from "react";
import Chat from "./Chat";
import { Provider } from "react-redux";
import store from "../store";


const App = () => (
  <Provider store={store}>
    <Chat />
  </Provider>
);

export default App;
