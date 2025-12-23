type ButtonBaseProps = {
    variant?: Variant;
    size?: Size;
    shape?: Shape;
    className?: string;
}

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