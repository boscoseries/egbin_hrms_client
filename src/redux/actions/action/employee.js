import { url, token } from "../../config";
import { LOGIN } from "../../types/employee";
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

export const decodeToken = (token_key) => dispatch => {
  const decoded = jwt_decode(token_key);
  dispatch({
    type: LOGIN,
    payload: decoded
  });
  return decoded;
};
