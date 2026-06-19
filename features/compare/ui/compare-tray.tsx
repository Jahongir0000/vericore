"use client";

import { GitCompare, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCompareStore, COMPARE_MAX } from "../model/store";
import { Button } from "@shared/ui/button";
import { useMounted } from "@shared/lib/hooks";

export function CompareTray() {
  const items = useCompareStore((s) => s.items);
  const remove = useCompareStore((s) => s.remove);
  const clear = useCompareStore((s) => s.clear);
  const t = useTranslations("catalog");
  const mounted = useMounted();

  if (!mounted || items.length === 0) return null;

  return (
    <div
      role="region"
      aria-label="Comparison tray"
      className="bg-surface-container-lowest border-outline-variant/20 shadow-soft fixed right-4 bottom-20 left-4 z-40 mx-auto flex max-w-3xl items-center gap-3 rounded-2xl border p-3 md:bottom-4"
    >
      <span className="bg-primary text-on-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
        <GitCompare size={20} aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-label text-outline text-xs font-bold tracking-widest uppercase">
          {t("compareCount", { count: items.length })}
        </p>
        <p className="text-on-surface truncate text-sm font-bold">
          {items.join(", ")} · {COMPARE_MAX - items.length} more
        </p>
      </div>
      <Button variant="ghost" size="sm" onClick={clear} aria-label="Clear all">
        <X size={16} aria-hidden />
      </Button>
    </div>
  );
}
