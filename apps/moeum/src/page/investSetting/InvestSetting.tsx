import { Button, Input } from "@moeum/ui";
import { useMemo, useState } from "react";
import {
  useCreateInvestSetting,
  useDeleteInvestSetting,
  useGetInvestSettings,
} from "../../service/api/investSetting/investSetting.queries";

export default function InvestSettingPage() {
  const { data, isLoading } = useGetInvestSettings();
  const createSetting = useCreateInvestSetting();
  const deleteSetting = useDeleteInvestSetting();
  const [categoryId, setCategoryId] = useState("");

  const onSubmit = () => {
    const id = Number(categoryId);
    if (Number.isNaN(id)) return;

    createSetting.mutate(
      { categoryId: id },
      { onSuccess: () => setCategoryId("") }
    );
  };

  const rows = useMemo(() => data ?? [], [data]);

  return (
    <div className="w-full max-w-4xl flex flex-col gap-6">
      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">Create Invest Setting</div>
        <div className="flex gap-3">
          <Input
            placeholder="Category Id"
            value={categoryId}
            onChange={(event) => setCategoryId(event.target.value)}
          />
          <Button onClick={onSubmit}>Create</Button>
        </div>
      </section>

      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">Invest Settings</div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-2">
            {rows.map((setting) => (
              <div
                key={setting.id}
                className="border rounded p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                <div>
                  <div className="font-medium">
                    #{setting.id} {setting.categoryResponseDto?.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    show {setting.showYn} use {setting.useYn}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="border"
                  onClick={() => deleteSetting.mutate(setting.id)}
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
