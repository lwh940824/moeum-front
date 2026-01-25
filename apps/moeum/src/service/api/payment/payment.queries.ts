import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PaymentApi } from "./payment.api";
import type { PaymentCreateRequest, PaymentUpdateRequest } from "./payment.type";

export const useGetPayments = () =>
  useQuery({
    queryKey: ["payments"],
    queryFn: () => PaymentApi.getPayments(),
  });

export const useGetPayment = (id: number) =>
  useQuery({
    queryKey: ["payment", id],
    queryFn: () => PaymentApi.getPayment(id),
    enabled: !!id,
  });

export const useCreatePayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: PaymentCreateRequest) =>
      PaymentApi.createPayment(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["payments"] });
    },
  });
};

export const useUpdatePayment = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: PaymentUpdateRequest) =>
      PaymentApi.updatePayment(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      queryClient.invalidateQueries({ queryKey: ["payment", id] });
    },
  });
};

export const useChangePaymentStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: { id: number; useYn: "Y" | "N" }) =>
      PaymentApi.changePaymentStatus(payload.id, { useYn: payload.useYn }),
    onSuccess: (_, payload) => {
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      queryClient.invalidateQueries({ queryKey: ["payment", payload.id] });
    },
  });
};
