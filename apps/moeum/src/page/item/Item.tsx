import { Button, Input } from "@moeum/ui";
import { useMemo, useState } from "react";
import {
  useCreateItem,
  useDeleteItem,
  useGetItems,
  useUpdateItem,
} from "../../service/api/item/item.queries";

const emptyForm = {
  amount: "",
  occurredAt: "",
  memo: "",
  categoryId: "",
  paymentId: "",
};

const normalizeDateTime = (value: string) =>
  value.length === 16 ? `${value}:00` : value;

export default function ItemPage() {
  const { data, isLoading } = useGetItems();
  const createItem = useCreateItem();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);

  const updateItem = useUpdateItem(editingId ?? 0);
  const deleteItem = useDeleteItem();

  const canSubmit =
    form.amount.trim() !== "" &&
    form.categoryId.trim() !== "" &&
    form.paymentId.trim() !== "";

  const onSubmit = () => {
    if (!canSubmit) return;

    const amount = Number(form.amount);
    const categoryId = Number(form.categoryId);
    const paymentId = Number(form.paymentId);

    const payload = {
      amount: Number.isNaN(amount) ? undefined : amount,
      occurredAt: form.occurredAt ? normalizeDateTime(form.occurredAt) : undefined,
      memo: form.memo.trim() || undefined,
      categoryId: Number.isNaN(categoryId) ? undefined : categoryId,
      paymentId: Number.isNaN(paymentId) ? undefined : paymentId,
    };

    if (editingId) {
      updateItem.mutate(payload, {
        onSuccess: () => {
          setEditingId(null);
          setForm(emptyForm);
        },
      });
      return;
    }

    if (payload.amount == null || payload.categoryId == null || payload.paymentId == null) {
      return;
    }

    createItem.mutate(
      {
        amount: payload.amount,
        occurredAt: payload.occurredAt ?? new Date().toISOString(),
        memo: payload.memo,
        categoryId: payload.categoryId,
        paymentId: payload.paymentId,
      },
      {
        onSuccess: () => setForm(emptyForm),
      }
    );
  };

  const rows = useMemo(() => data ?? [], [data]);

  return (
    <div className="w-full max-w-4xl flex flex-col gap-6">
      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">
          {editingId ? `Edit Item #${editingId}` : "Create Item"}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            placeholder="Amount"
            value={form.amount}
            onChange={(event) => setForm({ ...form, amount: event.target.value })}
          />
          <Input
            placeholder="Category Id"
            value={form.categoryId}
            onChange={(event) =>
              setForm({ ...form, categoryId: event.target.value })
            }
          />
          <Input
            placeholder="Payment Id"
            value={form.paymentId}
            onChange={(event) =>
              setForm({ ...form, paymentId: event.target.value })
            }
          />
          <Input
            type="datetime-local"
            value={form.occurredAt}
            onChange={(event) =>
              setForm({ ...form, occurredAt: event.target.value })
            }
          />
          <Input
            placeholder="Memo"
            value={form.memo}
            onChange={(event) => setForm({ ...form, memo: event.target.value })}
          />
        </div>
        <div className="flex gap-2">
          <Button onClick={onSubmit} disabled={!canSubmit}>
            {editingId ? "Update" : "Create"}
          </Button>
          {editingId ? (
            <Button
              variant="ghost"
              className="border"
              onClick={() => {
                setEditingId(null);
                setForm(emptyForm);
              }}
            >
              Cancel
            </Button>
          ) : null}
        </div>
      </section>

      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">Items</div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-2">
            {rows.map((item) => (
              <div
                key={item.itemId}
                className="border rounded p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                <div>
                  <div className="font-medium">
                    {item.childCategory?.name} {item.amount}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    #{item.itemId} {item.payment?.name} {item.occurredAt}
                  </div>
                  {item.memo ? (
                    <div className="text-sm text-muted-foreground">{item.memo}</div>
                  ) : null}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    className="border"
                    onClick={() => {
                      setEditingId(item.itemId);
                      setForm({
                        amount: item.amount.toString(),
                        occurredAt: item.occurredAt?.slice(0, 16) ?? "",
                        memo: item.memo ?? "",
                        categoryId: item.childCategory?.categoryId?.toString() ?? "",
                        paymentId: item.payment?.paymentId?.toString() ?? "",
                      });
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    className="border"
                    onClick={() => deleteItem.mutate(item.itemId)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
