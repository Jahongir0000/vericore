import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared/lib/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl font-bold font-body transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-secondary-container text-on-secondary-container shadow-lg shadow-secondary-container/20 hover:brightness-95",
        secondary: "bg-primary text-on-primary shadow-lg shadow-primary/20 hover:brightness-110",
        accent: "bg-primary-container text-on-primary-container hover:brightness-95",
        outline:
          "border-2 border-primary-container text-primary-container hover:bg-primary-container/10",
        outlineLight: "border-2 border-white text-white hover:bg-white/10",
        ghost: "text-on-surface hover:bg-surface-container-high",
        soft: "bg-surface-container text-on-surface hover:bg-surface-container-high",
        link: "text-primary underline-offset-4 hover:underline",
        danger: "bg-error text-on-error hover:brightness-110",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-4 text-sm",
        lg: "h-12 px-5 text-base",
        xl: "h-14 px-6 text-lg",
        icon: "h-11 w-11",
      },
      block: { true: "w-full", false: "" },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      block: false,
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, block, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, block }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
