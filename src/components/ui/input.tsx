'use client';

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, required, className, id, ...props }, ref) => {
        return (
            <div className="relative w-full">
                <label
                    htmlFor={id}
                    className="absolute -top-3 left-5 bg-neutral-50 rounded-md px-2 text-sm font-medium text-neutral-500"
                >
                    {label}
                    {required && <span className="text-primary">*</span>}
                </label>
                <input
                    ref={ref}
                    id={id}
                    {...props}
                    className={cn(
                        "w-full py-2 px-5 bg-neutral-50 font-medium border-[1.5px] border-neutral-300",
                        "rounded-[10px] text-neutral-900 focus:outline-none focus:border-primary",
                        "transition-all duration-200 text-lg placeholder-neutral-500",
                        className
                    )}
                />
            </div>
        );
    }
);

// Add display name for better debugging
Input.displayName = "Input";

export default Input;