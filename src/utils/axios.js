import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://vanguard-server.onrender.com",
});
export default axiosInstance;
