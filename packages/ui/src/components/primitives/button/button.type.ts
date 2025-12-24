import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";

type ButtonBaseProps = 
    VariantProps<typeof buttonVariants> &
    { className?: string; }

type ButtonAsButton = 
    ButtonBaseProps & 
    { asChild?: false;} & 
    React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsChild  =
    ButtonBaseProps & 
    { 
        asChild: true; 
        children: React.ReactElement
    };

export type ButtonProps = ButtonAsButton | ButtonAsChild;