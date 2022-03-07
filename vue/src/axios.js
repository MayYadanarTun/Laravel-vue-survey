import axios from "axios";
import store from "./store";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.state.user.token}`;
  return config;
});

export default axiosClient;
