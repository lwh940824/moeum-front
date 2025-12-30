import { useState, forwardRef } from "react"
import { Input } from "../input";
import { cn } from "@/utils/cn";
import { Button } from "../button";
import { Eye, EyeClosed } from "lucide-react";

const PasswordInput = forwardRef<HTMLInputElement, React.ComponentProps<"input">> (
    ({ className, type, placeholder = "비밀번호를 입력해주세요", ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <div className="relative w-full">
                <Input 
                    type={showPassword ? "text" : "password"}
                    className={cn("pr-10", className)}
                    ref={ref}
                    placeholder={placeholder}
                    {...props}
                />
                <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black bg-none" 
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <Eye /> : <EyeClosed />}
                </Button>
            </div>
        );
    }
)

export { PasswordInput };