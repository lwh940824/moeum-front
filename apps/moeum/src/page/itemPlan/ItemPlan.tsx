import { Button, Input } from "@moeum/ui";
import { useMemo, useState } from "react";
import {
  useCreateItemPlan,
  useDeleteItemPlan,
  useGetItemPlans,
} from "../../service/api/itemPlan/itemPlan.queries";
import type { RecurringType } from "../../service/api/itemPlan/itemPlan.type";

const emptyForm = {
  itemId: "",
  recurringType: "MONTH" as RecurringType,
  recurringStartDate: "",
  recurringEndDate: "",
};

const normalizeDateTime = (value: string) =>
  value.length === 16 ? `${value}:00` : value;

export default function ItemPlanPage() {
  const { data, isLoading } = useGetItemPlans();
  const createItemPlan = useCreateItemPlan();
  const deleteItemPlan = useDeleteItemPlan();
  const [form, setForm] = useState(emptyForm);

  const onSubmit = () => {
    const itemId = Number(form.itemId);
    if (Number.isNaN(itemId) || form.recurringStartDate.trim() === "") return;

    createItemPlan.mutate(
      {
        itemId,
        recurringType: form.recurringType,
        recurringStartDate: normalizeDateTime(form.recurringStartDate),
        recurringEndDate: form.recurringEndDate
          ? normalizeDateTime(form.recurringEndDate)
          : undefined,
      },
      { onSuccess: () => setForm(emptyForm) }
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
            type="datetime-local"
            value={form.recurringStartDate}
            onChange={(event) =>
              setForm({ ...form, recurringStartDate: event.target.value })
            }
          />
          <Input
            type="datetime-local"
            value={form.recurringEndDate}
            onChange={(event) =>
              setForm({ ...form, recurringEndDate: event.target.value })
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
