import { Button, Input } from "@moeum/ui";
import { useMemo, useState } from "react";
import { useGetInvestSummaryYears } from "../../service/api/investSummary/investSummary.queries";

const formatAmount = (value: number) => value.toLocaleString();

export default function InvestSummaryPage() {
  const [investSettingId, setInvestSettingId] = useState("");
  const [submittedId, setSubmittedId] = useState(0);

  const summaries = useGetInvestSummaryYears(submittedId);

  const groupedSummaries = useMemo(() => {
    return (summaries.data ?? [])
      .map((yearSummary) => {
        const sortedMonths = [...yearSummary.months].sort((a, b) => a.month - b.month);
        const monthMap = new Map(sortedMonths.map((item) => [item.month, item.principal]));
        const months = sortedMonths.map((item) => item.month);
        const total = yearSummary.totalPrincipal ?? 0;

        return {
          year: yearSummary.year,
          months,
          monthMap,
          total,
        };
      })
      .sort((a, b) => a.year - b.year);
  }, [summaries.data]);

  return (
    <div className="w-full max-w-5xl flex flex-col gap-6">
      <section className="border rounded p-4 flex flex-col gap-3">
        <div className="text-lg font-semibold">Invest Summary</div>
        <div className="flex flex-col md:flex-row gap-3">
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

      <section className="border rounded p-4 flex flex-col gap-4">
        <div className="text-lg font-semibold">Summaries</div>
        {summaries.isLoading ? (
          <div>Loading...</div>
        ) : groupedSummaries.length === 0 ? (
          <div className="text-sm text-muted-foreground">No data</div>
        ) : (
          <div className="flex flex-col gap-4">
            {groupedSummaries.map((group) => (
              <div key={group.year} className="rounded border bg-muted/10 p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-row md:flex-col items-center gap-3 md:gap-2 min-w-[140px]">
                    <div className="h-12 w-12 rounded-full border-2 border-muted-foreground/40 bg-white text-sm font-semibold flex items-center justify-center">
                      {group.year}
                    </div>
                    <div className="hidden md:block w-full border rounded-full px-3 py-1 text-center text-sm">
                      카테고리명
                    </div>
                    <div className="hidden md:block w-full border rounded-full px-3 py-1 text-center text-sm">
                      총합계
                    </div>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <table className="w-full border-collapse text-center text-sm">
                      <thead>
                        <tr>
                          <th className="border bg-muted/20 px-3 py-2 min-w-[80px]">구분</th>
                          {group.months.map((month) => (
                            <th key={month} className="border bg-muted/20 px-3 py-2 min-w-[90px]">
                              {month}월
                            </th>
                          ))}
                          <th className="border bg-muted/20 px-3 py-2 min-w-[90px]">합계</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border bg-white px-3 py-2 font-medium">합계</td>
                          {group.months.map((month) => {
                            const value = group.monthMap.get(month);
                            return (
                              <td key={month} className="border bg-white px-3 py-2">
                                {value == null ? "-" : formatAmount(value)}
                              </td>
                            );
                          })}
                          <td className="border bg-white px-3 py-2 font-semibold">
                            {formatAmount(group.total)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

