import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../../utils/cn"
import { ButtonProps } from "./button.type"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        submit: "bg-submit text-submit-foreground",
        danger: "bg-danger text-foreground",
      },
      size: {
        default: "h-10 px-4 py-2 text-lg",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-8 text-xl",
        icon: "h-10 w-10",
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
        {...(asChild ? {} : {type: buttonType})}
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
