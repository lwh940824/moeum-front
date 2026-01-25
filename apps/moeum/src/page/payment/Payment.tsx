import { Button, Input } from "@moeum/ui";
import { useMemo, useState } from "react";
import {
  useChangePaymentStatus,
  useCreatePayment,
  useGetPayments,
  useUpdatePayment,
} from "../../service/api/payment/payment.queries";
import type { PaymentType } from "../../service/api/payment/payment.type";

const emptyForm = {
  name: "",
  paymentType: "CASH" as PaymentType,
  parentPaymentId: "",
};

export default function PaymentPage() {
  const { data, isLoading } = useGetPayments();
  const createPayment = useCreatePayment();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);

  const updatePayment = useUpdatePayment(editingId ?? 0);
  const changeStatus = useChangePaymentStatus();

  const canSubmit = form.name.trim().length > 0;

  const onSubmit = () => {
    if (!canSubmit) return;

    const parentId = Number(form.parentPaymentId);
    const payload = {
      name: form.name.trim(),
      paymentType: form.paymentType,
      parentPaymentId:
        form.parentPaymentId.trim() === "" || Number.isNaN(parentId)
          ? undefined
          : parentId,
    };

    if (editingId) {
      updatePayment.mutate(payload, {
        onSuccess: () => {
          setEditingId(null);
          setForm(emptyForm);
        },
      });
      return;
    }

    createPayment.mutate(payload, {
      onSuccess: () => setForm(emptyForm),
    });
  };

  const rows = useMemo(() => data ?? [], [data]);

  return (
    <div className="w-full max-w-4xl flex flex-col gap-6">
      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">
          {editingId ? `Edit Payment #${editingId}` : "Create Payment"}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
          <Input
            placeholder="Parent Payment Id (optional)"
            value={form.parentPaymentId}
            onChange={(event) =>
              setForm({ ...form, parentPaymentId: event.target.value })
            }
          />
          <select
            className="h-9 rounded-md border border-solid border-border px-3"
            value={form.paymentType}
            onChange={(event) =>
              setForm({ ...form, paymentType: event.target.value as PaymentType })
            }
          >
            <option value="CASH">CASH</option>
            <option value="ATM">ATM</option>
            <option value="CREDIT">CREDIT</option>
            <option value="ETC">ETC</option>
          </select>
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
        <div className="text-lg font-semibold">Payments</div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-2">
            {rows.map((payment) => (
              <div
                key={payment.id}
                className="border rounded p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                <div>
                  <div className="font-medium">{payment.name}</div>
                  <div className="text-sm text-muted-foreground">
                    #{payment.id} {payment.paymentType}
                    {payment.parentPaymentId ? ` parent ${payment.parentPaymentId}` : ""}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    className="border"
                    onClick={() => {
                      setEditingId(payment.id);
                      setForm({
                        name: payment.name,
                        paymentType: payment.paymentType,
                        parentPaymentId: payment.parentPaymentId?.toString() ?? "",
                      });
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    className="border"
                    onClick={() =>
                      changeStatus.mutate({ id: payment.id, useYn: "N" })
                    }
                  >
                    Deactivate
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
