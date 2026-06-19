"use client";

import { useTranslations } from "next-intl";
import { Chip } from "@shared/ui/chip";

export type ProductTypeValue = "all" | "lines" | "factories" | "equipment";

export const PRODUCT_TYPE_SLUGS: Record<Exclude<ProductTypeValue, "all">, string[]> = {
  lines: [
    "tualet-qogoz-liniyalari",
    "suv-liniyalari",
    "upakovka-liniyalari",
    "strech-klyonka",
    "oziq-ovqat-uskunalari",
    "salafan-polietilen",
    "plastik-idishlar",
    "qogoz-qayta-ishlash",
    "kraska-idish-liniyalari",
    "tuxum-fleyka-liniyalari",
    "yogoch-liniyalari",
    "metalga-ishlov-berish",
    "sim-kabel-liniyalari",
  ],
  factories: [
    "beton-zavodlari",
    "gisht-zavodlari",
    "asfalt-zavod",
    "drabilni-zavod",
    "kraska-zavod",
    "shifr-zavod",
    "carmixlar",
    "dsp-zavod",
    "gipsokardon-zavod",
  ],
  equipment: [
    "kran-uskunalari",
    "maxsus-texnikalar",
    "generatorlar",
    "laser-stanoki",
    "med-texnikalar",
    "quyosh-panel",
    "sanwich-pannellar",
  ],
};

const FILTER_OPTIONS: { value: ProductTypeValue; labelKey: string }[] = [
  { value: "all", labelKey: "filterAll" },
  { value: "lines", labelKey: "filterLines" },
  { value: "factories", labelKey: "filterFactories" },
  { value: "equipment", labelKey: "filterEquipment" },
];

interface ProductTypeFilterProps {
  active: ProductTypeValue;
  onChange: (value: ProductTypeValue) => void;
}

export function ProductTypeFilter({ active, onChange }: ProductTypeFilterProps) {
  const t = useTranslations("products");

  return (
    <div className="hide-scrollbar flex gap-3 overflow-x-auto py-3 lg:gap-4">
      {FILTER_OPTIONS.map((option) => (
        <Chip
          key={option.value}
          active={active === option.value}
          onClick={() => onChange(option.value)}
        >
          {t(option.labelKey)}
        </Chip>
      ))}
    </div>
  );
}
