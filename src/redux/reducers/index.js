import { combineReducers } from "redux";
import userReducer from "./reducers/employee";
import leaveReducer from "./reducers/leave";

const reducers = combineReducers({
  users: userReducer,
  leaves: leaveReducer
});

export default reducers;
