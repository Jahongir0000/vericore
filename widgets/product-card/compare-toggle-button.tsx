"use client";

import { GitCompare, Check } from "lucide-react";
import { useCompareStore } from "@features/compare/model/store";

interface CompareToggleButtonProps {
  productSlug: string;
}

export function CompareToggleButton({ productSlug }: CompareToggleButtonProps) {
  const isInCompare = useCompareStore((s) => s.items.includes(productSlug));
  const toggle = useCompareStore((s) => s.toggle);

  return (
    <button
      type="button"
      onClick={() => toggle(productSlug)}
      className="dark:bg-surface-container-high text-on-surface-variant absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow backdrop-blur-sm transition-transform hover:scale-105"
      aria-label="Add to compare"
      aria-pressed={isInCompare}
    >
      {isInCompare ? (
        <Check size={16} className="text-tertiary-container" aria-hidden />
      ) : (
        <GitCompare size={16} aria-hidden />
      )}
    </button>
  );
}
