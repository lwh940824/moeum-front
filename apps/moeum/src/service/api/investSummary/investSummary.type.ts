export interface InvestSummaryYearResponse {
  year: number;
  months: InvestSummaryMonthResponse[];
  totalPrincipal: number;
}

export interface InvestSummaryMonthResponse {
  month: number;
  principal: number | null;
}
