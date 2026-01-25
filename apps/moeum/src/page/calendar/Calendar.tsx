import { Button, Input } from "@moeum/ui";
import { useState } from "react";
import { useGetCalendarSummary } from "../../service/api/calendar/calendar.queries";

const normalizeDateTime = (value: string) =>
  value.length === 16 ? `${value}:00` : value;

export default function CalendarPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [submitted, setSubmitted] = useState({ startDate: "", endDate: "" });

  const summary = useGetCalendarSummary(submitted.startDate, submitted.endDate);

  return (
    <div className="w-full max-w-4xl flex flex-col gap-6">
      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">Calendar Summary</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            type="datetime-local"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
          <Input
            type="datetime-local"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </div>
        <Button
          onClick={() =>
            setSubmitted({
              startDate: normalizeDateTime(startDate),
              endDate: normalizeDateTime(endDate),
            })
          }
        >
          Load
        </Button>
      </section>

      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">Items</div>
        {summary.isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-2">
            {(summary.data ?? []).map((item) => (
              <div key={item.itemId} className="border rounded p-3">
                <div className="font-medium">
                  {item.categoryName} {item.amount}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.date} {item.memo ?? ""}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
