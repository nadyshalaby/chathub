import { createStore, applyMiddleware, compose } from "redux";
import createRootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import { CHANGE_WINDOW_HEIGHT } from "../constants";
import rootSaga from "./../sagas";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

function updateDimensions() {
  store.dispatch({ type: CHANGE_WINDOW_HEIGHT });
}

window.addEventListener("resize", updateDimensions);

window.store = store;

export { store, history };
