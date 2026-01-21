import { cn } from "../../../utils/cn"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card"
import { Input } from "../../atomic/input"
import { Button } from "../../atomic/button"
import { FieldGroup, Field, FieldLabel, FieldDescription } from "../field"
import { Link, useInRouterContext } from "react-router-dom";
import { Providers } from "./login.type"

export function LoginForm({
    className,
    providers,
    ...props
}: React.ComponentProps<"div"> & { providers: Providers }) {
    const inRouter = useInRouterContext();

    if (!inRouter && process.env.NODE_ENV !== "production") {
        console.warn("LoginForm must be rendered within a Router.");
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <Link 
                                        to="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required />
                            </Field>
                            <Field>
                                <Button type="submit">Login</Button>
                                {providers.map(provider => {
                                    return (
                                        <Button
                                            key={provider.id}
                                            variant="ghost"
                                            type="button"
                                            onClick={provider.onClick}
                                        >
                                            Login with {provider.label}
                                        </Button>
                                    )
                                })}
                                <FieldDescription className="text-center">
                                    Don&apos;t have an account? <Link to="#">Sign up</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
