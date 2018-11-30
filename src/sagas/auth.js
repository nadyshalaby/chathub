import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_RESPONSE,
  AUTH_LOADING_TOGGLE,
  CHATHUB_AUTH_DETAILS
} from "./../constants";
import { delay } from "redux-saga";
import { put, call, takeLatest, select } from "redux-saga/effects";
import { push } from "connected-react-router";

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
        payload: { ...response.data.payload, email, password }
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

export default function* watcherAuthLogin() {
  yield takeLatest(AUTH_LOGIN_REQUEST, workerAuthLogin);
}
