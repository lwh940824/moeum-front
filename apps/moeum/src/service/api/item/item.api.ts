import { api } from "@moeum/api";
import type { ItemCreateRequest, ItemResponse, ItemUpdateRequest } from "./item.type";

export const ItemApi = {
  getItems: () => api.get<ItemResponse[]>("/item"),
  getItem: (id: number) => api.get<ItemResponse>(`/item/${id}`),
  createItem: (payload: ItemCreateRequest) =>
    api.post<ItemResponse>("/item", payload),
  updateItem: (id: number, payload: ItemUpdateRequest) =>
    api.patch<ItemResponse>(`/item/${id}`, payload),
  deleteItem: (id: number) => api.delete<void>(`/item/${id}`),
};
