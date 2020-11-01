import axiosInstance from "../../../helpers/axios";

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

  axiosInstance
    .post("auth/register/", {
      username,
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data,
      });
    });
};
