import {
  UPDATE_AUTH_DETAILS,
  WINDOW_HEIGHT_CHANGED,
  AUTH_LOGIN_RESPONSE
} from "../constants";
import axios from "axios";

const getWindowHeight = () => ({
  windowHeight:
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
});

const createAxiosInstance = () =>
  axios.create({
    baseURL: "http://localhost:8000/",
    timeout: 3000,
    headers: {}
  });

const initialState = {
  ...getWindowHeight(),
  request: createAxiosInstance(),
  authToken: null,
  userId: null
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case WINDOW_HEIGHT_CHANGED:
      return { ...state, ...getWindowHeight() };
    case AUTH_LOGIN_RESPONSE:
    case UPDATE_AUTH_DETAILS:
      return {
        ...state,
        authToken: action.payload.token,
        userId: action.payload.id
      };

    default:
      return state;
  }
};

export default globalReducer;
