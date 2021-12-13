import { combineReducers } from "redux";
import auth from "./auth";
import phoneno from "./phoneno";

// Combine all reducers

export default combineReducers({
  auth,
  phoneno,
});
