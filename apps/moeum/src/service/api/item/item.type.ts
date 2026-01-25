import type { PaymentType } from "../payment/payment.type";

export interface ItemCreateRequest {
  categoryId: number;
  paymentId: number;
  amount: number;
  occurredAt: string;
  memo?: string;
}

export interface ItemUpdateRequest {
  amount?: number;
  occurredAt?: string;
  memo?: string;
  categoryId?: number;
  paymentId?: number;
}

export interface ItemResponse {
  itemId: number;
  amount: number;
  occurredAt: string;
  memo?: string;
  childCategory: ItemCategory;
  parentCategory: ItemCategory;
  payment: ItemPayment;
}

export interface ItemCategory {
  categoryId: number;
  name: string;
  imageUrl: string;
}

export interface ItemPayment {
  paymentId: number;
  name: string;
  paymentType: PaymentType;
}
