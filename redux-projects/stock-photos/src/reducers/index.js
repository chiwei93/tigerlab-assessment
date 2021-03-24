import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import pageReducer from "./pageReducer";
import loadingReducer from "./loadingReducer";
import userInputReducer from "./userInputReducer";
import formReducer from "./formReducer";

export default combineReducers({
  photos: photosReducer,
  pageNum: pageReducer,
  loading: loadingReducer,
  query: userInputReducer,
  searchTerm: formReducer,
});
