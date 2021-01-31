import { url, token } from "../../config";
import { FETCH_LEAVE, CREATE_LEAVE } from "../../types/leave";
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

export const fetchLeave = () => dispatch => {
  return axios({
    method: "get",
    url: `${url}/api/v1/leave/`,
    headers: {
      "content-type": "application/json",
      authorization: ""
    }
  })
    .then(response => {
      dispatch({
        type: FETCH_LEAVE,
        payload: response.data
      });
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      return err;
    });
};
