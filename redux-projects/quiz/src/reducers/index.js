import { combineReducers } from "redux";
import setupReducer from "./setupReducer";
import uiReducer from "./uiReducer";
import questionsReducer from "./questionsReducer";

export default combineReducers({
  setup: setupReducer,
  ui: uiReducer,
  questions: questionsReducer,
});
