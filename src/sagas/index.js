import { all, fork } from "redux-saga/effects";
import windowHeightSaga from "./window-height";
import authSaga from "./auth";

/**
 * all(): If we want to group many sagas into one rootSaga
 */
export default function* rootSaga() {
  yield all([fork(windowHeightSaga), fork(authSaga)]);
}
