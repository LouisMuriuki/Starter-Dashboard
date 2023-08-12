import axios from "axios";
const baseURL = "http://localhost:5000/fastinvoice/api/v1/";
export const axiosPrivate = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  timeoutErrorMessage: "Connection timeout!, Check internet connection",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": true,
  },
});
const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  timeoutErrorMessage: "Connection timeout!, Check internet connection",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": true,
  },
});

export default axiosInstance;
