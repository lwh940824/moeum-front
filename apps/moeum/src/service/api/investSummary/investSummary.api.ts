import { api } from "@moeum/api";
import type { InvestSummaryYearResponse } from "./investSummary.type";

export const InvestSummaryApi = {
  getInvestSummaryYears: (investSettingId: number) =>
    api.get<InvestSummaryYearResponse[]>(`/invest-summary/${investSettingId}/years`),
};
