"use client";

import { Gauge, Zap, Layers, Wind } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { KpiTile } from "@shared/ui/kpi-tile";
import type { ProductSpec } from "@entities/product";

interface QuickSpecsGridProps {
  spec: ProductSpec;
}

export function QuickSpecsGrid({ spec }: QuickSpecsGridProps) {
  const t = useTranslations("product.specs");

  // Only show tiles with meaningful values
  const tiles = [
    spec.productivity.value > 0 && {
      icon: Gauge,
      label: t("productivity"),
      value: `${spec.productivity.value} ${spec.productivity.unit}`,
    },
    spec.powerKw > 0 && {
      icon: Zap,
      label: t("power"),
      value: `${spec.powerKw} kW`,
    },
    spec.mixerModel && spec.mixerModel !== "—" && {
      icon: Layers,
      label: t("mixer"),
      value: spec.mixerModel,
    },
    spec.airCompressorKw > 0 && {
      icon: Wind,
      label: t("compressor"),
      value: `${spec.airCompressorKw} kW`,
    },
  ].filter(Boolean) as { icon: LucideIcon; label: string; value: string }[];

  if (tiles.length === 0) return null;

  return (
    <section className="py-8" aria-labelledby="quick-specs-heading">
      <h2 id="quick-specs-heading" className="sr-only">
        Quick specs
      </h2>
      <div className="bg-surface-container-lowest shadow-soft divide-outline-variant/30 grid divide-x divide-y overflow-hidden rounded-3xl"
        style={{ gridTemplateColumns: `repeat(${Math.min(tiles.length, 4)}, minmax(0, 1fr))` }}
      >
        {tiles.map((tile) => (
          <KpiTile
            key={tile.label}
            variant="compact"
            icon={tile.icon}
            label={tile.label}
            value={tile.value}
          />
        ))}
      </div>
    </section>
  );
}
