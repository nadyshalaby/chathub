import {
  AUTH_SIGNUP_REQUEST,
  AUTH_LOGIN_REQUEST,
  AUTH_SIGNUP_RESPONSE,
  AUTH_LOGIN_RESPONSE,
  AUTH_LOADING_TOGGLE,
  CHATHUB_AUTH_DETAILS,
  AUTH_RESET_ERRORS
} from "./../constants";
import { delay } from "redux-saga";
import { put, all, call, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import { AUTH_UPDATE_ERRORS } from "./../constants/index";

/**
 * Login worker
 * @param {object} action
 */
function* workerAuthLogin(action) {
  const { global } = yield select();
  const { email, password, alert } = action.payload;

  try {
    //show loading
    yield put({ type: AUTH_LOADING_TOGGLE, payload: true });

    // issue call to the server
    const response = yield call(global.request.post, "auth/signin", {
      email,
      password
    });

    // dismiss loading
    yield put({ type: AUTH_LOADING_TOGGLE, payload: false });

    // validate loading and show status message to the user
    if (response.status === 200 && response.data.success) {
      yield put({
        type: AUTH_LOGIN_RESPONSE,
        payload: { ...response.data.payload, email }
      });

      // alert the user with successful login
      alert.success("Successful Login");

      // update the localStorage with new auth details
      localStorage.setItem(
        CHATHUB_AUTH_DETAILS,
        JSON.stringify(response.data.payload)
      );

      // set some delay for better user experiance
      yield call(delay, 3000);

      // redirect the user for the home page
      yield put(push("/"));
    } else {
      // if something goes wrong
      alert.error(response.data.payload);
    }
  } catch (error) {
    // for un expected errors just report them
    yield put({ type: AUTH_LOADING_TOGGLE, payload: false });
    alert.error(error.message);
  }
}

/**
 * Signup worker
 * @param {object} action
 */
function* workerAuthSignup(action) {
  const { global } = yield select();
  const {
    firstName,
    lastName,
    securityQuestion,
    answer,
    email,
    password,
    alert
  } = action.payload;

  try {
    //show loading & reset last errors flags
    yield all([
      put({ type: AUTH_RESET_ERRORS }),
      put({ type: AUTH_LOADING_TOGGLE, payload: true })
    ]);

    // issue call to the server
    const response = yield call(global.request.post, "auth/signup", {
      firstName,
      lastName,
      securityQuestion,
      answer,
      email,
      password
    });

    // dismiss loading
    yield put({ type: AUTH_LOADING_TOGGLE, payload: false });

    // validate loading and show status message to the user
    if (response.status === 200 && response.data.success) {
      yield put({
        type: AUTH_SIGNUP_RESPONSE,
        payload: { ...response.data.payload }
      });

      // alert the user with successful login
      alert.success(
        "Your account created successfully; We send you a confirmation email to verify your account."
      );
    } else {
      // if something goes wrong
      const errors = {};
      let msg = "";

      for (let index in response.data.payload) {
        errors[response.data.payload[index]["param"]] = true;
        msg += response.data.payload[index]["msg"];
      }

      // display input form errors
      yield put({ type: AUTH_UPDATE_ERRORS, payload: errors });

      // show meaningful message for the user
      alert.error(msg);
    }
  } catch (error) {
    // for un expected errors just report them
    yield put({ type: AUTH_LOADING_TOGGLE, payload: false });
    alert.error(error.message);
  }
}

export default function* watcherAuth() {
  yield all([
    takeLatest(AUTH_LOGIN_REQUEST, workerAuthLogin),
    takeLatest(AUTH_SIGNUP_REQUEST, workerAuthSignup)
  ]);
}
