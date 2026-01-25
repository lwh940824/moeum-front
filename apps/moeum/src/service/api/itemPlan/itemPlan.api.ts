import { api } from "@moeum/api";
import type { ItemPlanCreateRequest, ItemPlanResponse } from "./itemPlan.type";

export const ItemPlanApi = {
  getItemPlans: () => api.get<ItemPlanResponse[]>("/item-plan"),
  getItemPlan: (id: number) => api.get<ItemPlanResponse>(`/item-plan/${id}`),
  createItemPlan: (payload: ItemPlanCreateRequest) =>
    api.post<ItemPlanResponse>("/item-plan", payload),
  deleteItemPlan: (id: number) => api.delete<void>(`/item-plan/${id}`),
};
