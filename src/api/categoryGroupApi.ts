import api from "./api";

export const categoryGroupApi = {
  get: (id: number) => api.get(`/category-group/${id}`),
  list: () => api.get(`/category-group`),
  post: (params: any) => api.post(`/category-group`, params),
  put: (id: number, params: any) => api.put(`/category-group/${id}`, params),
  delete: (id: number) => api.delete(`/category-group/${id}`),
};
