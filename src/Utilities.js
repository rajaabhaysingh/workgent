import axios from "axios";

import { BASE_URL } from "./App";

// refreshes access token on each call, given that refreshToken hasn't expired
// returns response if successful or error
export const RefreshAccessToken = async (refreshToken) => {
  try {
    let response = await axios.post(`${BASE_URL}verif/token/refresh/`, {
      refresh: refreshToken,
    });
    return response;
  } catch (error) {
    return error;
  }
};

// logs-in user on each call
// returns response if successful or error
export const LoginUser = async (uname, pwd) => {
  try {
    let response = await axios.post(`${BASE_URL}verif/token/`, {
      username: uname,
      password: pwd,
    });
    return response;
  } catch (error) {
    return error;
  }
};

// getUrlParams
// returns an object of all url params
export const getUrlParams = (queryString) => {
  const urlParams = new URLSearchParams(queryString);
  const params = {};

  const entries = urlParams.entries();

  for (const entry of entries) {
    params[entry[0]] = entry[1];
  }

  return params;
};

//
export const GetData = async (url, params, header) => {};

export const PostData = async (url, params, header) => {};

export const TimestampToTime = (ts, format) => {
  switch (format) {
    case "DMY":
      break;

    default:
      break;
  }
};
