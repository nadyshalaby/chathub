import {
  UPDATE_AUTH_DETAILS,
  AUTH_LOGIN_RESPONSE,
  AUTH_LOADING_TOGGLE
} from "../constants";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  loading: false,
  securityQuestion: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_RESPONSE:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password
      };
    case AUTH_LOADING_TOGGLE:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default authReducer;
