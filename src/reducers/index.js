import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import errorsReducer from "./error-reducer";
import employeesReducer from "./employee-reducer";

export default combineReducers({
  auth,
  message,
  errors: errorsReducer,
  employee: employeesReducer
});