import { combineReducers } from "redux";
import authSlice from "./auth.slice";
import registerSlice from "./register.slice";

export default combineReducers({
  auth: authSlice,
  register: registerSlice,
});