import { url, token } from "../../config";
import { LOGIN } from "../../types/employee";
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
