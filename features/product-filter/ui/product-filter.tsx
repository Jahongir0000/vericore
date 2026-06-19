"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Chip } from "@shared/ui/chip";
import type { ProductSortValue } from "../lib/product-list-utils";

const SORT_OPTIONS = [
  { value: "popular", labelKey: "sortPopular" },
  { value: "price-asc", labelKey: "sortPriceAsc" },
  { value: "price-desc", labelKey: "sortPriceDesc" },
  { value: "newest", labelKey: "sortNewest" },
] as const satisfies ReadonlyArray<{ value: ProductSortValue; labelKey: string }>;

interface ProductFilterProps {
  active?: ProductSortValue;
  onSortChange?: (value: ProductSortValue) => void;
}

export function ProductFilter({ active: controlledActive, onSortChange }: ProductFilterProps) {
  const t = useTranslations("catalog");
  const [internalActive, setInternalActive] = useState<ProductSortValue>("popular");
  const active = controlledActive ?? internalActive;

  return (
    <div className="hide-scrollbar flex gap-3 overflow-x-auto py-3 lg:gap-4">
      {SORT_OPTIONS.map((option) => (
        <Chip
          key={option.value}
          active={active === option.value}
          onClick={() => {
            setInternalActive(option.value);
            onSortChange?.(option.value);
          }}
        >
          {t(option.labelKey)}
        </Chip>
      ))}
    </div>
  );
}
