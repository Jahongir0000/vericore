import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared/lib/cn";
import type { HTMLAttributes } from "react";

export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold leading-none",
  {
    variants: {
      tone: {
        primary: "bg-primary-container text-on-primary-container",
        secondary: "bg-secondary-container text-on-secondary-container",
        tertiary: "bg-tertiary-container text-on-tertiary-container",
        surface: "bg-surface-container-highest text-on-surface-variant",
        outline: "border border-outline-variant text-on-surface-variant",
        glass:
          "bg-primary-container/20 text-primary-container border border-primary-container/30 backdrop-blur-sm",
      },
    },
    defaultVariants: {
      tone: "primary",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
