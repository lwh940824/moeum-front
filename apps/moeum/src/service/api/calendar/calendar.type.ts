export interface CalendarSummaryResponse {
  itemId: number;
  categoryGroupId: number;
  categoryGroupName: string;
  categoryId: number;
  categoryName: string;
  date: string;
  amount: number;
  memo?: string;
}
