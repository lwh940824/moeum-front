import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ItemApi } from "./item.api";
import type { ItemCreateRequest, ItemUpdateRequest } from "./item.type";

export const useGetItems = () =>
  useQuery({
    queryKey: ["items"],
    queryFn: () => ItemApi.getItems(),
  });

export const useGetItem = (id: number) =>
  useQuery({
    queryKey: ["item", id],
    queryFn: () => ItemApi.getItem(id),
    enabled: !!id,
  });

export const useCreateItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: ItemCreateRequest) => ItemApi.createItem(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });
};

export const useUpdateItem = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: ItemUpdateRequest) => ItemApi.updateItem(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
      queryClient.invalidateQueries({ queryKey: ["item", id] });
    },
  });
};

export const useDeleteItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (itemId: number) => ItemApi.deleteItem(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });
};
