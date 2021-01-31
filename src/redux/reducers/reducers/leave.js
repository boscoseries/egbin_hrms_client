import { CREATE_LEAVE, FETCH_LEAVE } from "../../types/leave";

const initialState = {
  leave_created: false,
  leaves: []
};

const employee = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LEAVE:
      return {
        ...state,
        leave_created: true
      };
    case FETCH_LEAVE:
      return {
        ...state,
        leaves: action.payload
      };
    default:
      return state;
  }
};

export default employee;
