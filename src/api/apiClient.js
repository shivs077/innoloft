import axios from "axios";

let baseUrl = import.meta.env.VITE_API_BASE_URL || "https://api-test.innoloft.com";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
