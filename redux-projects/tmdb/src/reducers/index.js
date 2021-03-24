import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import loadingReducer from "./loadingReducer";
import inputReducer from "./inputReducer";
import formQueryReducer from "./formQueryReducer";

export default combineReducers({
  movies: moviesReducer,
  loading: loadingReducer,
  query: inputReducer,
  formQuery: formQueryReducer,
});
