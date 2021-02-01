import { url, token } from "../../config";
import { FETCH_LEAVE, CREATE_LEAVE, UPDATE_LEAVE_STATUS } from "../../types/leave";
const axios = require("axios");

export const createLeaveRequest = data => dispatch => {
  return axios({
    method: "post",
    url: `${url}/api/v1/leave/`,
    data: data,
    headers: {
      "content-type": "application/json",
      authorization: token
    }
  })
    .then(response => {
      dispatch({
        type: CREATE_LEAVE,
        payload: response.data
      });
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      return err;
    });
};

export const fetchLeaves = () => dispatch => {
  return axios({
    method: "get",
    url: `${url}/api/v1/leave/`,
    headers: {
      "content-type": "application/json",
      authorization: token
    }
  })
    .then(response => {
      dispatch({
        type: FETCH_LEAVE,
        payload: response.data.results
      });
      return response.data.results;
    })
    .catch(err => {
      return err;
    });
};

export const updateStatus = (id, status) => dispatch => {
  return axios({
    method: "patch",
    url: `${url}/api/v1/leave/${id}/update_status/`,
    data: { status },
    headers: {
      "content-type": "application/json",
      authorization: token
    }
  })
    .then(response => {
      dispatch({
        type: UPDATE_LEAVE_STATUS,
        payload: response.data.results
      });
      console.log(response);
      return response.data.results;
    })
    .catch(err => {
      return err;
    });
};
