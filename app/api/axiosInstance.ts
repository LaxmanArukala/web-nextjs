import axios from "axios";


// Create a reusable Axios instance


const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BACKEND_URL || "http://localhost:8081/api",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});



// You can add interceptors later for tokens or logging
// Example (keep commented for now):
/*
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
*/

export default axiosInstance;
