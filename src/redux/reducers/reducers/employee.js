import { LOGIN, FETCH_USERS, FETCH_USER } from "../../types/employee";

const initialState = {
  authenticated: false,
  users: [],
  loggedinUser: [],
  user: {}
};

const employee = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: true,
        loggedinUser: action.payload
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default employee;
