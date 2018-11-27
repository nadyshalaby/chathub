import { createStore } from "redux";
import rootReducer from "../reducers";
import changeWindowHeight from './../sagas/window-height'
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function updateDimensions() {
    store.dispatch(changeWindowHeight())
}

window.addEventListener("resize", updateDimensions);

export default store;
