import type { CategoryResponse } from "../category/category.type";
import type { PaymentResponse } from "../payment/payment.type";

export type RecurringType = "DAY" | "WEEK" | "MONTH";

export interface ItemPlanCreateRequest {
  itemId: number;
  recurringType: RecurringType;
  recurringStartDate: string;
  recurringEndDate?: string;
}

export interface ItemPlanResponse {
  id: number;
  recurringType: RecurringType;
  recurringStartDate: string;
  recurringEndDate?: string;
  categoryResponseDto: CategoryResponse;
  paymentResponseDto: PaymentResponse;
}
