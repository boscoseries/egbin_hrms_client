import { combineReducers } from "redux";
import userReducer from "./reducers/employee";
// import utilReducer from "./reducers/utils";
// import alertReducer from "./reducers/alerts";
// import postReducer from "./reducers/posts";
// import interactionReducer from "./reducers/interactions";

const reducers = combineReducers({
  users: userReducer
});

export default reducers;
