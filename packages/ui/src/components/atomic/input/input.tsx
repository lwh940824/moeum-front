import * as React from "react"

import { cn } from "../../../utils/cn"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, placeholder = "내용을 입력해 주세요", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "text-black border-border border-solid transition-all dutation:200",
          "focus-visible:outline-none shadow-sm focus-visible:shadow-lg focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/50",
          "aria-invalid:border-danger aria-invalid:ring-danger/50",
          className
        )}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input };
