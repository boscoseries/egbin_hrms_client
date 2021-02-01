import { CREATE_LEAVE, FETCH_LEAVE, UPDATE_LEAVE_STATUS } from "../../types/leave";

const initialState = {
  leave_created: false,
  leaves: [],
  leave_updated: ""
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
    case UPDATE_LEAVE_STATUS:
      return {
        ...state,
        leave_updated: true
      };
    default:
      return state;
  }
};

export default employee;
