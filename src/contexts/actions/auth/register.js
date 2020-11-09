import axiosInstance from "../../../helpers/axiosInstance";

import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../../../constants/actionTypes";

export const register = ({ username, username: email, password }) => (
  dispatch
) => {
  dispatch({
    type: REGISTER_LOADING,
  });

  axiosInstance()
    .post("auth/register/", {
      username,
      email,
      password,
    })
    .then((response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      alert(error.toString() + ", Error code: coacau-re");
      dispatch({
        type: REGISTER_ERROR,
        payload: error.response ? error.response.data : "COULD NOT CONNECT",
      });
    });
};
