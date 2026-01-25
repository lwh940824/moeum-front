import { api } from "@moeum/api";
import type { CalendarSummaryResponse } from "./calendar.type";

export const CalendarApi = {
  getSummary: (startDate: string, endDate: string) =>
    api.get<CalendarSummaryResponse[]>("/calendar", { startDate, endDate }),
};
