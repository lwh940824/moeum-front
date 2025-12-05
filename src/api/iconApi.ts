import api from "./api";

export const iconApi = {
  get: (id: number) => api.get(`/icon/${id}`),
  list: () => api.get(`/icon`),
  post: (params: FormData) => api.post(`/icon`, params),
  put: (id: number, params: any) => api.put(`/icon/${id}`, params),
  delete: (id: number) => api.delete(`/icon/${id}`),
};
