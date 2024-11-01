import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium relative transition-all duration-200 py-3.5 px-10 rounded-xl disabled:pointer-events-none disabled:bg-neutral-300 disabled:text-neutral-500 group",
  {
    variants: {
      variant: {
        default: "bg-text-gradient text-neutral-50 hover:opacity-90",
        secondary: [
          "bg-white",
          "before:absolute before:inset-0 before:rounded-xl before:bg-text-gradient before:opacity-20 before:transition-opacity before:duration-200 group-hover:before:opacity-100",
          "after:absolute after:inset-[2px] after:rounded-[0.625rem] after:bg-white",
          "[&>span]:relative [&>span]:z-10 [&>span]:bg-text-gradient [&>span]:bg-clip-text [&>span]:text-transparent"
        ],
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-neutral-300 border-[1.5px] bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10",
        sm: "h-9 rounded-md px-3",
        lg: "h-11",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === 'secondary' ? <span>{children}</span> : children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
