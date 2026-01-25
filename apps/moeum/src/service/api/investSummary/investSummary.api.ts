import { api } from "@moeum/api";
import type { InvestSummaryResponse } from "./investSummary.type";

export const InvestSummaryApi = {
  getInvestSummaries: (investSettingId: number) =>
    api.get<InvestSummaryResponse[]>(`/invest-summary/${investSettingId}`),
};
