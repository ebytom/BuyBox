import axios from "axios";


axios.defaults.headers.post["Content-Type"] = "application/json"
// axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.headers.get["Content-Type"] = "application/json"
// axios.defaults.headers.get["Content-Type"] = "multipart/form-data";

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
  // baseURL: "http://localhost:8000"
  // baseURL: "http://192.168.1.7:8000"
});
