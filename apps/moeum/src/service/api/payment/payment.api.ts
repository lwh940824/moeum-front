import { api } from "@moeum/api";
import type {
  PaymentCreateRequest,
  PaymentResponse,
  PaymentUpdateRequest,
  PaymentUseYnPatchRequest,
} from "./payment.type";

export const PaymentApi = {
  getPayments: () => api.get<PaymentResponse[]>("/payment"),
  getPayment: (id: number) => api.get<PaymentResponse>(`/payment/${id}`),
  createPayment: (payload: PaymentCreateRequest) =>
    api.post<PaymentResponse>("/payment", payload),
  updatePayment: (id: number, payload: PaymentUpdateRequest) =>
    api.put<PaymentResponse>(`/payment/${id}`, payload),
  changePaymentStatus: (id: number, payload: PaymentUseYnPatchRequest) =>
    api.patch<void>(`/payment/${id}/status`, payload),
};
