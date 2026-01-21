import { Field, FieldContent, FieldLabel } from "./field"
import { Input } from "../../atomic/input"

const meta = {
    title: "Components/Field",
    component: Field,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
}

export default meta

export const Default = {
    render: () => <Field orientation="horizontal">
        <FieldLabel>Label</FieldLabel>
        <FieldContent>
            <Input />
        </FieldContent>
    </Field>
}
