import axiosInstance from "../../../helpers/axiosInstance";

import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../../../constants/actionTypes";

export const login = ({ username, password }) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });

  axiosInstance()
    .post("auth/login/", {
      username,
      password,
    })
    .then((response) => {
      localStorage.tokens = response.data.tokens;
      localStorage.username = response.data.username;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      alert(error.toString() + " Code: coacau-lo");
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response ? error.response.data : "COULD NOT CONNECT",
      });
    });
};
