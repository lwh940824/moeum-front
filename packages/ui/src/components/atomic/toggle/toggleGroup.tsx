"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "../../../utils/cn"
import { toggleVariants } from "./toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & { isSingle: boolean }
>({
  size: "default",
  variant: "default",
  isSingle: false,
})

const getItemValues = (children: React.ReactNode) =>
  React.Children.toArray(children)
    .map((child) =>
      React.isValidElement<{ value?: string }>(child)
        ? child.props.value
        : undefined
    )
    .filter((value): value is string => typeof value === "string");

type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

type ToggleGroupProps = DistributiveOmit<
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>,
  "type" | "value" | "defaultValue" | "onValueChange"
> &
  VariantProps<typeof toggleVariants> & {
    type?: "single" | "multiple";
    value?: string | string[];
    defaultValue?: string | string[];
    onValueChange?: (value: string | string[]) => void;
  };

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, variant, size, children, ...props }, ref) => {
  const { style, value, defaultValue, onValueChange, type, ...rest } = props;
  const itemValues = getItemValues(children);
  const resolvedType = type ?? "single";
  const isSingle = resolvedType === "single";
  const isControlled = value !== undefined;
  const controlledValue = value as string | undefined;

  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    () =>
      isSingle
        ? controlledValue ??
          (defaultValue as string | undefined) ??
          itemValues[0]
        : undefined
  );

  React.useEffect(() => {
    if (!isSingle || isControlled) return;
    if (itemValues.length === 0) return;
    if (!internalValue || !itemValues.includes(internalValue)) {
      setInternalValue(itemValues[0]);
    }
  }, [internalValue, isControlled, isSingle, itemValues]);

  const currentValue = isSingle ? controlledValue ?? internalValue : value;

  const handleSingleChange = (nextValue: string) => {
    if (!nextValue) return;
    if (!isControlled) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };

  const handleMultipleChange = (nextValue: string[]) => {
    onValueChange?.(nextValue);
  };

  const selectedIndex =
    isSingle && typeof currentValue === "string"
      ? itemValues.indexOf(currentValue)
      : -1;

  if (isSingle) {
    return (
      <ToggleGroupPrimitive.Root
        ref={ref}
        className={cn("relative flex items-center justify-center", className)}
        type="single"
        value={currentValue as string | undefined}
        onValueChange={handleSingleChange}
        style={{ gap: "var(--toggle-group-gap, 4px)", ...style }}
        {...rest}
      >
        {selectedIndex >= 0 ? (
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full rounded-md bg-accent border border-input shadow-sm transition-transform duration-200 ease-out pointer-events-none"
            style={{
              width: "var(--toggle-group-item-width, 96px)",
              transform: `translateX(calc((var(--toggle-group-item-width, 96px) + var(--toggle-group-gap, 4px)) * ${selectedIndex}))`,
            }}
          />
        ) : null}
        <ToggleGroupContext.Provider value={{ variant, size, isSingle }}>
          {children}
        </ToggleGroupContext.Provider>
      </ToggleGroupPrimitive.Root>
    );
  }

  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn("relative flex items-center justify-center", className)}
      type="multiple"
      value={currentValue as string[] | undefined}
      onValueChange={handleMultipleChange}
      style={{ gap: "var(--toggle-group-gap, 4px)", ...style }}
      {...rest}
    >
      <ToggleGroupContext.Provider value={{ variant, size, isSingle }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
})

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, style, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        context.isSingle ? "data-[state=on]:bg-transparent" : "",
        "relative z-10",
        className
      )}
      style={{ width: "var(--toggle-group-item-width, 96px)", ...style }}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
