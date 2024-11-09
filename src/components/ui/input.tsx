"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={cn(
                    "w-full py-2 px-5 bg-neutral-50 font-medium border-[1.5px] border-neutral-300",
                    "rounded-[10px] text-neutral-900 focus:outline-none focus:border-primary",
                    "transition-all duration-200 text-lg placeholder-neutral-500",
                    error && "border-red-500 focus:border-red-500",
                    className
                )}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
