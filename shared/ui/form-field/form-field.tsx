import type { ReactNode } from "react";
import { cn } from "@shared/lib/cn";

interface FormFieldProps {
  label?: string;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export function FormField({ label, hint, error, children, className }: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label ? (
        <label className="font-label text-outline text-xs tracking-wider uppercase">{label}</label>
      ) : null}
      {children}
      {error ? (
        <p className="text-error text-xs font-medium" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p className="text-on-surface-variant text-xs">{hint}</p>
      ) : null}
    </div>
  );
}
