import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@shared/lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "bg-surface-container-highest text-on-surface font-body placeholder:text-outline focus:border-primary-container focus:ring-primary-container/40 h-12 w-full rounded-xl border border-transparent px-4 transition-colors focus:ring-2 focus:outline-none",
          hasError && "border-error focus:border-error focus:ring-error/40",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
