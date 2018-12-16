import {
  AUTH_UPDATE_ERRORS,
  AUTH_SIGNUP_RESPONSE,
  AUTH_LOGIN_RESPONSE,
  AUTH_RESET_ERRORS,
  AUTH_LOADING_TOGGLE
} from "../constants";
import securityQuestions from "./../mockups/security-questions";

const errors = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  repassword: false,
  securityQuestion: false,
  answer: false,
  hasTerms: false
};

const initialState = {
  email: "",
  errors,
  loading: false,
  securityQuestions
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_RESPONSE:
      return {
        ...state,
        email: action.payload.email
      };
    case AUTH_SIGNUP_RESPONSE:
      return {
        ...state,
        ...action.payload
      };
    case AUTH_RESET_ERRORS:
      return { ...state, errors };
    case AUTH_UPDATE_ERRORS:
      return { ...state, errors: action.payload };
    case AUTH_LOADING_TOGGLE:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default authReducer;
