"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared/lib/cn";
import type { ButtonHTMLAttributes } from "react";

export const chipVariants = cva(
  "shrink-0 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container",
  {
    variants: {
      active: {
        true: "bg-primary text-white shadow-md",
        false: "bg-surface-container-high text-on-surface hover:bg-surface-container-highest",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export interface ChipProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof chipVariants> {}

export function Chip({ className, active, ...props }: ChipProps) {
  return <button type="button" className={cn(chipVariants({ active }), className)} {...props} />;
}
