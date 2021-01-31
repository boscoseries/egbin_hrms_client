import { LOGIN } from "../../types/employee";

const initialState = {
  authenticated: false,
  user: []
};

const employee = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: true,
        user: action.payload
      };
    default:
      return state;
  }
};

export default employee;
