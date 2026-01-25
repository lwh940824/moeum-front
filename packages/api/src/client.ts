import axios from "axios";

export const client = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL ?? "http://localhost:3000",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

client.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle 401 error
        }
        return Promise.reject(error);
    },
);