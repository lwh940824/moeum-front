import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "../table";

import { cn } from "../../../utils/cn";
import { cva } from "class-variance-authority";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    className?: string
    size?: "default" | "xs" | "sm" | "md" | "lg" | "xl"
}

const tableVariant = cva("", {
    variants: {
        size: {
            default: "",
            xs: "h-7",
            sm: "h-8",
            md: "h-9",
            lg: "h-10",
            xl: "h-11",
        },
    },
    defaultVariants: {
        size: "default",
    },
})

export function DataTable<TData, TValue>({
    columns, data, size, className
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });
    console.log(size)

    return (
        <div className={cn("overflow-y-auto", className)}>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead className={cn(tableVariant({ size }))} key={header.id}>
                                    {header.isPlaceholder ? null : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell className={cn(tableVariant({ size }))} key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}