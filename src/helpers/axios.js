import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
let headers = {};

if (localStorage.accessToken) {
  headers.Authorization = `Bearer ${localStorage.accessToken}`;
}

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers,
});

export default axiosInstance;
