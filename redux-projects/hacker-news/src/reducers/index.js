import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import loadingReducer from "./loadingReducer";
import pagesReducer from "./pagesReducer";
import queryReducer from "./queryReducer";

export default combineReducers({
  news: newsReducer,
  loading: loadingReducer,
  pages: pagesReducer,
  query: queryReducer,
});
