import { client } from "./client";

export const api = {
    get: async <T>(url: string, params?: object, config?: object): Promise<T> => {
        const response = await client.get(url, { params, ...config });
        return response.data;
    },
    post: async <T>(url: string, data?: object, config?: object): Promise<T> => {
        const response = await client.post(url, data, config);
        return response.data;
    },
    put: async <T>(url: string, data?: object, config?: object): Promise<T> => {
        const response = await client.put(url, data, config);
        return response.data;
    },
    patch: async <T>(url: string, data?: object, config?: object): Promise<T> => {
        const response = await client.patch(url, data, config);
        return response.data;
    },
    delete: async <T>(url: string, config?: object): Promise<T> => {
        const response = await client.delete(url, config);
        return response.data;
    }
}
