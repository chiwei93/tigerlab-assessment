import { combineReducers } from "redux";
import userReducer from "./userReducer";
import displayReducer from "./displayReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  user: userReducer,
  display: displayReducer,
  loading: loadingReducer,
});
