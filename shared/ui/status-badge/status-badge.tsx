import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { cn } from "@shared/lib/cn";
import type { StockStatus } from "@shared/types";

interface StatusBadgeProps {
  status: StockStatus;
  inStockLabel: string;
  preorderLabel: string;
  className?: string;
}

export function StatusBadge({ status, inStockLabel, preorderLabel, className }: StatusBadgeProps) {
  if (status === "in-stock") {
    return (
      <span
        className={cn(
          "font-label bg-tertiary-container text-on-tertiary-container inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase shadow-lg",
          className,
        )}
      >
        <CheckCircle2 size={14} aria-hidden />
        {inStockLabel}
      </span>
    );
  }
  if (status === "preorder") {
    return (
      <span
        className={cn(
          "font-label bg-secondary-container text-on-secondary-container inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase shadow-lg",
          className,
        )}
      >
        <Clock size={14} aria-hidden />
        {preorderLabel}
      </span>
    );
  }
  return (
    <span
      className={cn(
        "font-label bg-surface-container-highest text-on-surface-variant inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase shadow-lg",
        className,
      )}
    >
      <ShieldCheck size={14} aria-hidden />
      {preorderLabel}
    </span>
  );
}
