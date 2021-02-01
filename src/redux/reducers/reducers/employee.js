import { LOGIN, FETCH_USERS, FETCH_USER, CREATE_USER } from "../../types/employee";

const initialState = {
  authenticated: false,
  users: [],
  loggedinUser: [],
  user: {},
  newUsser: {}
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
    case CREATE_USER:
      return {
        ...state,
        newUsser: action.payload
      };
    default:
      return state;
  }
};

export default employee;
