import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import prophecies from "./prophecies_reducer";

const RootReducer = combineReducers({
  session,
  errors, 
  prophecies
});

export default RootReducer;