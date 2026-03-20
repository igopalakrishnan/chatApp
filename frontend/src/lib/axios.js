import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatapp-backend-3btz.onrender.com/api",
  withCredentials: true,
});
