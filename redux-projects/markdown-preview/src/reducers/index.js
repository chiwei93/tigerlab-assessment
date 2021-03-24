import { combineReducers } from "redux";

const textChangeReducer = (text = "", action) => {
  switch (action.type) {
    case "TEXT_CHANGED":
      return action.payload;
    default:
      return text;
  }
};

export default combineReducers({
  input: textChangeReducer,
});
