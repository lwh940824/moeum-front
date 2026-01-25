import { useQuery } from "@tanstack/react-query";
import { CalendarApi } from "./calendar.api";

export const useGetCalendarSummary = (startDate: string, endDate: string) =>
  useQuery({
    queryKey: ["calendar", startDate, endDate],
    queryFn: () => CalendarApi.getSummary(startDate, endDate),
    enabled: !!startDate && !!endDate,
  });
