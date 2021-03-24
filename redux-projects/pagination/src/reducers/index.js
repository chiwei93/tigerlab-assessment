import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import pageReducer from "./pageReducer";
import paginationReducer from "./paginationReducer";

export default combineReducers({
  users: usersReducer,
  pageNum: pageReducer,
  pages: paginationReducer,
});
