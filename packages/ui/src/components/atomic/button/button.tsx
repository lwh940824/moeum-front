import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../../utils/cn"
import { ButtonProps } from "./button.type"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        submit: "bg-submit text-submit-foreground",
        danger: "bg-danger text-foreground",
        ghost: "bg-transparent border border-border",
      },
      size: {
        sm: "h-8 px-3 text-sm [&_svg]:size-4",
        default: "h-9 px-4 py-1 has-[>svg]:px-3",
        lg: "h-10 px-8 py-2 has-[>svg]:px-5",
        icon: "h-10 w-10 [&_svg]:size-6",
      },
      shape: {
        default: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default"
    },
  }
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const buttonType = asChild ? undefined : (props as React.ButtonHTMLAttributes<HTMLButtonElement>).type || "button";

    return (
      <Comp
        {...(asChild ? {} : { type: buttonType })}
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
