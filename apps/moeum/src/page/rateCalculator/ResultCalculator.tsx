import { DataTable, type ColumnDef } from "@moeum/ui"

interface Data {
    period: string;
    income: string;
    total: string;
}


export default function ResultCalculator() {
    const columns: ColumnDef<Data>[] = [
        { accessorKey: "period", header: "기간" },
        { accessorKey: "income", header: "수익" },
        { accessorKey: "total", header: "총금액" },
    ]

    const data: Data[] = [
        { period: "1", income: "1000", total: "11000" },
        { period: "2", income: "2000", total: "13000" },
        { period: "3", income: "3000", total: "16000" },
        { period: "1", income: "1000", total: "11000" },
        { period: "2", income: "2000", total: "13000" },
        { period: "3", income: "3000", total: "16000" },
        { period: "1", income: "1000", total: "11000" },
        { period: "2", income: "2000", total: "13000" },
        { period: "3", income: "3000", total: "16000" },
        { period: "1", income: "1000", total: "11000" },
        { period: "2", income: "2000", total: "13000" },
        { period: "3", income: "3000", total: "16000" },
        { period: "1", income: "1000", total: "11000" },
        { period: "2", income: "2000", total: "13000" },
        { period: "3", income: "3000", total: "16000" },
        { period: "1", income: "1000", total: "11000" },
        { period: "2", income: "2000", total: "13000" },
        { period: "3", income: "3000", total: "16000" },
        { period: "1", income: "1000", total: "11000" },
        { period: "2", income: "2000", total: "13000" },
        { period: "3", income: "3000", total: "16000" },
    ]

    return (
        <DataTable
            size="md"
            columns={columns}
            data={data}
        />
    )
}