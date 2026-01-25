import { useQuery } from "@tanstack/react-query";
import { InvestSummaryApi } from "./investSummary.api";

export const useGetInvestSummaries = (investSettingId: number) =>
  useQuery({
    queryKey: ["invest-summaries", investSettingId],
    queryFn: () => InvestSummaryApi.getInvestSummaries(investSettingId),
    enabled: !!investSettingId,
  });
