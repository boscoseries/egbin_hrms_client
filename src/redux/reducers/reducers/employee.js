import { LOGIN } from "../../types/employee";

const initialState = {
  authenticated: false
};

const employee = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: true
      };
    default:
      return state;
  }
};

export default employee;
