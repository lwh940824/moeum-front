import type { YnType } from "@moeum/api";

export type PaymentType = "CASH" | "ATM" | "CREDIT" | "ETC";

export interface PaymentCreateRequest {
  parentPaymentId?: number;
  name: string;
  paymentType: PaymentType;
}

export interface PaymentUpdateRequest {
  parentPaymentId?: number;
  name: string;
  paymentType: PaymentType;
}

export interface PaymentResponse {
  id: number;
  parentPaymentId?: number;
  name: string;
  paymentType: PaymentType;
}

export interface PaymentUseYnPatchRequest {
  useYn: YnType;
}
