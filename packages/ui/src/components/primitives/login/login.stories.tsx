import { MemoryRouter } from "react-router-dom"
import { LoginForm } from "./login"

const meta = {
    title: "Components/Login",
    component: LoginForm,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
}

export default meta

export const Default = {
    render: () => (
        <MemoryRouter>
            <LoginForm />
        </MemoryRouter>
    )
}