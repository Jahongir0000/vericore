"use client";

import { useLocale, useTranslations } from "next-intl";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@shared/ui/tabs";
import type { Product } from "@entities/product";
import { resolveI18n } from "@shared/mock-data/products";

interface ProductTabsProps {
  product: Product;
  description: string;
}

export function ProductTabs({ product, description }: ProductTabsProps) {
  const t = useTranslations("product");
  const locale = useLocale();

  return (
    <section className="py-8" aria-labelledby="product-tabs-heading">
      <h2 id="product-tabs-heading" className="sr-only">
        Product details
      </h2>
      <Tabs defaultValue="description" className="space-y-6">
        <TabsList>
          <TabsTrigger value="description">{t("tabs.description")}</TabsTrigger>
          <TabsTrigger value="technical">{t("tabs.technical")}</TabsTrigger>
          <TabsTrigger value="configuration">{t("tabs.configuration")}</TabsTrigger>
          <TabsTrigger value="delivery">{t("tabs.delivery")}</TabsTrigger>
          <TabsTrigger value="warranty">{t("tabs.warranty")}</TabsTrigger>
        </TabsList>

        <TabsContent value="description">
          <p className="text-on-surface-variant leading-relaxed">{description}</p>
        </TabsContent>

        <TabsContent value="technical">
          <dl className="bg-surface-container-lowest space-y-4 rounded-2xl p-6">
            {product.spec.productivity.value > 0 && (
              <Row
                label={t("specs.productivity")}
                value={`${product.spec.productivity.value} ${product.spec.productivity.unit}`}
              />
            )}
            {product.spec.cycleTimeSeconds > 0 && (
              <Row label={t("specs.cycleTime")} value={`${product.spec.cycleTimeSeconds}s`} />
            )}
            {product.spec.powerKw > 0 && (
              <Row label={t("specs.power")} value={`${product.spec.powerKw} kW`} />
            )}
            {product.spec.mixerModel && product.spec.mixerModel !== "—" && (
              <Row label={t("specs.mixer")} value={product.spec.mixerModel} />
            )}
            {product.spec.batcherModel && product.spec.batcherModel !== "—" && (
              <Row label={t("specs.batcher")} value={product.spec.batcherModel} />
            )}
            {product.spec.feedingModel && product.spec.feedingModel !== "—" && (
              <Row label={t("specs.feeder")} value={product.spec.feedingModel} />
            )}
            {product.spec.airCompressorKw > 0 && (
              <Row label={t("specs.compressor")} value={`${product.spec.airCompressorKw} kW`} />
            )}
            {(product.spec.dischargeMeters.min > 0 || product.spec.dischargeMeters.max > 0) && (
              <Row
                label={t("specs.discharge")}
                value={`${product.spec.dischargeMeters.min}–${product.spec.dischargeMeters.max} m`}
              />
            )}
            {product.spec.dimensionsMm.l > 0 && (
              <Row
                label={t("specs.dimensions")}
                value={`${product.spec.dimensionsMm.l}×${product.spec.dimensionsMm.w}×${product.spec.dimensionsMm.h} mm`}
              />
            )}
            {product.spec.weighingAccuracy.water !== "—" && (
              <Row
                label={t("specs.weighingAccuracy")}
                value={`H₂O ${product.spec.weighingAccuracy.water}`}
              />
            )}
          </dl>
        </TabsContent>

        <TabsContent value="configuration">
          <ul className="space-y-4">
            {product.configuration.length === 0 ? (
              <li className="bg-surface-container-low text-on-surface-variant rounded-2xl p-4 text-sm">
                Detailed configuration available on request.
              </li>
            ) : (
              product.configuration.map((sys, sysIdx) => {
                const sysName = resolveI18n(sys.systemName, locale);
                return (
                  <li key={sysIdx} className="bg-surface-container-lowest rounded-2xl p-5">
                    <h3 className="font-headline text-on-surface mb-3 font-bold">{sysName}</h3>
                    <ul className="space-y-1.5 text-sm">
                      {sys.items.map((item, idx) => {
                        const itemName = resolveI18n(item.name, locale);
                        return (
                          <li key={idx} className="flex justify-between gap-3">
                            <span className="text-on-surface-variant">{itemName}</span>
                            <span className="font-label text-on-surface text-right font-bold">
                              {item.spec ? `${item.spec} · ` : ""}
                              {item.quantity}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })
            )}
          </ul>
        </TabsContent>

        <TabsContent value="delivery">
          <dl className="bg-surface-container-lowest space-y-4 rounded-2xl p-6">
            <Row label={t("containerLabel")} value={product.commercial.containerType} />
            <Row
              label={t("deliveryTimeLabel")}
              value={`${product.commercial.deliveryWorkingDays} working days`}
            />
            <Row label={t("validityLabel")} value={`${product.warranty.validityDays} days`} />
          </dl>
        </TabsContent>

        <TabsContent value="warranty">
          <div className="bg-surface-container-lowest space-y-4 rounded-2xl p-6">
            <Row label={t("warrantyLabel")} value={`${product.warranty.months} months`} />
            <p className="text-on-surface-variant text-sm leading-relaxed">{t("installation")}</p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-outline-variant/30 flex items-center justify-between gap-3 border-b pb-3 last:border-0 last:pb-0">
      <dt className="text-on-surface-variant text-sm">{label}</dt>
      <dd className="font-label text-on-surface text-right text-sm font-bold">{value}</dd>
    </div>
  );
}
