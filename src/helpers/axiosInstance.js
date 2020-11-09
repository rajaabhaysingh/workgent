import axios from "axios";

export default (history = null) => {
  const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
  let headers = {};

  // isJSONParsable
  const isJSONParsable = (str) => {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  };

  if (localStorage.tokens) {
    let tokens = localStorage.tokens;
    tokens = tokens.replace(/'/g, '"');

    if (isJSONParsable(tokens)) {
      tokens = JSON.parse(tokens);
      headers.Authorization = `Bearer ${tokens.access}`;
    }
  }

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      // if error is not from server
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
      // if token has issues, server returns 403
      if (error.response.status === 403) {
        localStorage.removeItem("tokens");

        // redirect to login page
        if (history) {
          history.push("/login");
        } else {
          window.location("/login");
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};
