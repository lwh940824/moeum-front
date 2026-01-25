import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { InvestSettingApi } from "./investSetting.api";
import type { InvestSettingCreateRequest } from "./investSetting.type";

export const useGetInvestSettings = () =>
  useQuery({
    queryKey: ["invest-settings"],
    queryFn: () => InvestSettingApi.getInvestSettings(),
  });

export const useGetInvestSetting = (id: number) =>
  useQuery({
    queryKey: ["invest-setting", id],
    queryFn: () => InvestSettingApi.getInvestSetting(id),
    enabled: !!id,
  });

export const useCreateInvestSetting = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: InvestSettingCreateRequest) =>
      InvestSettingApi.createInvestSetting(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invest-settings"] });
    },
  });
};

export const useDeleteInvestSetting = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (settingId: number) => InvestSettingApi.deleteInvestSetting(settingId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invest-settings"] });
    },
  });
};
