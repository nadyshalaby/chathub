import authReducer from "./auth";
import globalReducer from "./global";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    auth: authReducer
  });
