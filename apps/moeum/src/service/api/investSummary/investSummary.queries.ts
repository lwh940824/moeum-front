import { useQuery } from "@tanstack/react-query";
import { InvestSummaryApi } from "./investSummary.api";

export const useGetInvestSummaryYears = (investSettingId: number) =>
  useQuery({
    queryKey: ["invest-summaries", investSettingId, "years"],
    queryFn: () => InvestSummaryApi.getInvestSummaryYears(investSettingId),
    enabled: !!investSettingId,
  });
