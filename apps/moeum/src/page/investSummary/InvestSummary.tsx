import { Button, Input } from "@moeum/ui";
import { useState } from "react";
import { useGetInvestSummaries } from "../../service/api/investSummary/investSummary.queries";

export default function InvestSummaryPage() {
  const [investSettingId, setInvestSettingId] = useState("");
  const [submittedId, setSubmittedId] = useState(0);

  const summaries = useGetInvestSummaries(submittedId);

  return (
    <div className="w-full max-w-4xl flex flex-col gap-6">
      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">Invest Summary</div>
        <div className="flex gap-3">
          <Input
            placeholder="Invest Setting Id"
            value={investSettingId}
            onChange={(event) => setInvestSettingId(event.target.value)}
          />
          <Button
            onClick={() => {
              const id = Number(investSettingId);
              if (!Number.isNaN(id)) setSubmittedId(id);
            }}
          >
            Load
          </Button>
        </div>
      </section>

      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">Summaries</div>
        {summaries.isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-2">
            {(summaries.data ?? []).map((summary) => (
              <div key={summary.id} className="border rounded p-3">
                <div className="font-medium">
                  {summary.year}-{summary.month} {summary.principal}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
