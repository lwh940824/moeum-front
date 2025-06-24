import api from "./api";

export const paymentApi = {
  get: (id: number) => api.get(`/payment/${id}`),
  list: () => api.get(`/payment`),
  post: (params: any) => api.post(`/payment`, params),
  put: (id: number, params: any) => api.put(`/payment/${id}`, params),
  delete: (id: number) => api.delete(`/payment/${id}`),
};
