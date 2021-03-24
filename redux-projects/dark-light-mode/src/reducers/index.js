import { combineReducers } from "redux";
import dataReducer from "./dataReducers";
import modeReducer from "./modeReducer";

export default combineReducers({
  data: dataReducer,
  darkMode: modeReducer,
});
