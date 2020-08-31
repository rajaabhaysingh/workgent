import axios from "axios";

// refreshes access token on each call, given that refreshToken hasn't expired
// returns response if successful or error
export const RefreshAccessToken = async (refreshToken) => {
  try {
    let response = await axios.post(
      `http://localhost:8000/verif/token/refresh/`,
      {
        refresh: refreshToken,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

// logs-in user on each call
// returns response if successful or error
export const LoginUser = async (uname, pwd) => {
  try {
    let response = await axios.post(`http://localhost:8000/verif/token/`, {
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
export const GetData = async (endPoint, params, header, requestType) => {
  switch (requestType) {
    case "GET":
      try {
        let response = axios.get(endPoint, params, header);
        return response;
      } catch (error) {
        return error;
      }

    default:
      break;
  }
};

export const TimestampToTime = (ts, format) => {
  switch (format) {
    case "DMY":
      break;

    default:
      break;
  }
};
