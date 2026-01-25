import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ItemPlanApi } from "./itemPlan.api";
import type { ItemPlanCreateRequest } from "./itemPlan.type";

export const useGetItemPlans = () =>
  useQuery({
    queryKey: ["item-plans"],
    queryFn: () => ItemPlanApi.getItemPlans(),
  });

export const useGetItemPlan = (id: number) =>
  useQuery({
    queryKey: ["item-plan", id],
    queryFn: () => ItemPlanApi.getItemPlan(id),
    enabled: !!id,
  });

export const useCreateItemPlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: ItemPlanCreateRequest) =>
      ItemPlanApi.createItemPlan(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["item-plans"] });
    },
  });
};

export const useDeleteItemPlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (itemPlanId: number) => ItemPlanApi.deleteItemPlan(itemPlanId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["item-plans"] });
    },
  });
};
