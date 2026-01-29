import { Button, Input } from "@moeum/ui";
import { useMemo, useState } from "react";
import {
  useCreateItemPlan,
  useDeleteItemPlan,
  useGetItemPlans,
} from "../../service/api/itemPlan/itemPlan.queries";
import type { RecurringType } from "../../service/api/itemPlan/itemPlan.type";

const toLocalDateInputValue = (date: Date) => {
  const offsetMs = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offsetMs).toISOString().slice(0, 10);
};

const parseLocalDateInputValue = (value: string) => {
  if (value.trim() === "") return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
};

const createEmptyForm = () => ({
  itemId: "",
  recurringType: "MONTH" as RecurringType,
  recurringStartDate: new Date(),
  recurringEndDate: null as Date | null,
});

export default function ItemPlanPage() {
  const { data, isLoading } = useGetItemPlans();
  const createItemPlan = useCreateItemPlan();
  const deleteItemPlan = useDeleteItemPlan();
  const [form, setForm] = useState(createEmptyForm);

  const onSubmit = () => {
    const itemId = Number(form.itemId);
    if (
      Number.isNaN(itemId) ||
      Number.isNaN(form.recurringStartDate.getTime())
    ) {
      return;
    }

    createItemPlan.mutate(
      {
        itemId,
        recurringType: form.recurringType,
        recurringStartDate: toLocalDateInputValue(form.recurringStartDate),
        recurringEndDate: form.recurringEndDate
          ? toLocalDateInputValue(form.recurringEndDate)
          : undefined,
      },
      { onSuccess: () => setForm(createEmptyForm()) }
    );
  };

  const rows = useMemo(() => data ?? [], [data]);

  return (
    <div className="w-full max-w-4xl flex flex-col gap-6">
      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">Create Item Plan</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            placeholder="Item Id"
            value={form.itemId}
            onChange={(event) => setForm({ ...form, itemId: event.target.value })}
          />
          <select
            className="h-9 rounded-md border border-solid border-border px-3"
            value={form.recurringType}
            onChange={(event) =>
              setForm({ ...form, recurringType: event.target.value as RecurringType })
            }
          >
            <option value="DAY">DAY</option>
            <option value="WEEK">WEEK</option>
            <option value="MONTH">MONTH</option>
          </select>
          <Input
            type="date"
            value={toLocalDateInputValue(form.recurringStartDate)}
            onChange={(event) => {
              const nextDate = parseLocalDateInputValue(event.target.value);
              if (!nextDate) return;
              setForm({ ...form, recurringStartDate: nextDate });
            }}
          />
          <Input
            type="date"
            value={
              form.recurringEndDate
                ? toLocalDateInputValue(form.recurringEndDate)
                : ""
            }
            onChange={(event) =>
              setForm({
                ...form,
                recurringEndDate: parseLocalDateInputValue(event.target.value),
              })
            }
          />
        </div>
        <Button onClick={onSubmit}>Create</Button>
      </section>

      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">Item Plans</div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-2">
            {rows.map((plan) => (
              <div
                key={plan.id}
                className="border rounded p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                <div>
                  <div className="font-medium">
                    #{plan.id} {plan.recurringType}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.recurringStartDate} - {plan.recurringEndDate ?? ""}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="border"
                  onClick={() => deleteItemPlan.mutate(plan.id)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
