import { api } from "@moeum/api";
import type { InvestSettingCreateRequest, InvestSettingResponse } from "./investSetting.type";

export const InvestSettingApi = {
  getInvestSettings: () => api.get<InvestSettingResponse[]>("/invest-setting"),
  getInvestSetting: (id: number) =>
    api.get<InvestSettingResponse>(`/invest-setting/${id}`),
  createInvestSetting: (payload: InvestSettingCreateRequest) =>
    api.post<InvestSettingResponse>("/invest-setting", payload),
  deleteInvestSetting: (id: number) => api.delete<void>(`/invest-setting/${id}`),
};
