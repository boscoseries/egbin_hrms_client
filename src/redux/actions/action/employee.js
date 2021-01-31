import { url, token } from "../../config";
import { LOGIN, FETCH_USERS, FETCH_USER } from "../../types/employee";
import jwt_decode from "jwt-decode";
const axios = require("axios");

export const login = data => dispatch => {
  return axios({
    method: "post",
    url: `${url}/api/v1/employees/login/`,
    data: data,
    headers: {
      "content-type": "application/json"
    }
  })
    .then(response => {
      dispatch({
        type: LOGIN,
        payload: response.data.result
      });
      localStorage.setItem("key", response.data.result.access);
      return response.data;
    })
    .catch(err => {
      return err;
    });
};

export const decodeToken = token_key => dispatch => {
  const decoded = jwt_decode(token_key);
  dispatch({
    type: LOGIN,
    payload: decoded
  });
  return decoded;
};

export const fetchUsers = () => dispatch => {
  return axios({
    method: "get",
    url: `${url}/api/v1/employees/`,
    headers: {
      "content-type": "application/json",
      authorization: token
    }
  })
    .then(response => {
      dispatch({
        type: FETCH_USERS,
        payload: response.data
      });
      return response.data;
    })
    .catch(err => {
      return err;
    });
};

export const fetchUser = (id) => dispatch => {
  return axios({
    method: "get",
    url: `${url}/api/v1/employees/${id}`,
    headers: {
      "content-type": "application/json",
      authorization: token
    }
  })
    .then(response => {
      dispatch({
        type: FETCH_USER,
        payload: response.data
      });
      return response.data;
    })
    .catch(err => {
      return err;
    });
};
