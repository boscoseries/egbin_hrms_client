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
        user: action.payload
      };
    case FETCH_USERS:
      return {
        ...state,
        authenticated: true,
        users: action.payload
      };
    case FETCH_USER:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export default employee;
