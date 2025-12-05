// import type { AxiosResponse } from "axios";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// api.interceptors.response.use(
//   //TODO: 타입 제대로 지정해줘야함 지금은 임시
//   (response) => (response as AxiosResponse).data,
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
