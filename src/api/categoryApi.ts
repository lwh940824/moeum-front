import api from "./api";

type CategoryGroup = {
  id: number;
  name: string;
  categoryType: string;
  imageUrl: string;
};

export const categoryApi = {
  get: (id: number) => api.get(`/category/${id}`),
  list: () => api.get<CategoryGroup[]>(`/category`),
  post: (params: any) => api.post(`/category`, params),
  put: (id: number, params: any) => api.put(`/category/${id}`, params),
  delete: (id: number) => api.delete(`/category/${id}`),
};
