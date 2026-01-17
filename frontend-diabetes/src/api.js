import axios from "axios";


const api = axios.create({
  baseURL: "https://api-preddia.pribumics.my.id/api",
  
  withCredentials: false, 
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const flaskApi = axios.create({
  baseURL: "https://inandraaf.pythonanywhere.com",
  
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;