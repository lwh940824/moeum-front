import { Meta, StoryObj } from "@storybook/react-vite";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";

const meta = {
  title: "Primitives/Table",
  component: Table,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  { key: "id", header: "번호" },
  { key: "name", header: "이름" },
  { key: "amount", header: "금액" },
]

const data = [
  { id: 1, name: "이원희", amount: 100000 },
  { id: 2, name: "심지원", amount: 300000 },
  { id: 3, name: "이석호", amount: 1000000 },
  { id: 4, name: "박미경", amount: 10000000 },
]

export const Basic: Story = {
  render: () => (
    <Table className="w-[350px]">
      <TableHeader>
        <TableRow>
          {columns.map(column =>
            <TableHead key={column.key}>{column.header}</TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(d =>
          <TableRow key={d.id}>
            <TableCell>{d.id}</TableCell>
            <TableCell>{d.name}</TableCell>
            <TableCell>{d.amount}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  ),
};
