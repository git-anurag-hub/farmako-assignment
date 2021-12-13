import { combineReducers } from "redux";
import auth from "./auth";

// Combine all reducers

export default combineReducers({
  auth: auth,
});
