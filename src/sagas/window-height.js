import { CHANGE_WINDOW_HEIGHT, WINDOW_HEIGHT_CHANGED } from "./../constants";
import { put, takeLatest } from "redux-saga/effects";

/**
 * The "worker" is used to handle only
 * the actual code logic e.g. Issue ajax request, process some (a)sync code
 */
function* workerChangeWindowHeight() {
  yield put({ type: WINDOW_HEIGHT_CHANGED });
}

/**
 * The "watcher" only monitors the action dispatched and determine
 * how the worker will be executed based on the type of <Effect> used
 * takeLatest(): just cancels the previous running sagas and fire a new one it's the opposite
 * of takeEvery()
 * We only export the watcher because it will take
 * care of the worker execution
 */

export default function* watcherChangeWindowHeight() {
  yield takeLatest(CHANGE_WINDOW_HEIGHT, workerChangeWindowHeight);
}
