import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants";
import { CHANGE_WINDOW_HEIGHT } from './../constants/index';

const getWindowHeight = () => ({
  windowHeight: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
})

const initialState = {
  ...getWindowHeight(),
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WINDOW_HEIGHT:
      return { ...state,  ...getWindowHeight()};
    case ADD_ARTICLE:
      return { ...state, ...state.articles.concat(action.payload) };
    case REMOVE_ARTICLE:
      return {
        ...state,
        ...state.articles.filter(
          (article, index, arr) => action.payload.id !== article.id
        )
      };
    default:
      return state;
  }
};

export default rootReducer;