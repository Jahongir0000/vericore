import { photoAt } from "@shared/config/site-photos";
import type { StockStatus } from "@shared/types";

export interface ProductSpec {
  productivity: { value: number; unit: "m³/h" | "t/h" };
  cycleTimeSeconds: number;
  powerKw: number;
  mixerModel: string;
  batcherModel: string;
  feedingModel: string;
  dischargeMeters: { min: number; max: number };
  airCompressorKw: number;
  weighingAccuracy: { water: string; aggregate: string; cement: string };
  dimensionsMm: { l: number; w: number; h: number };
}

export type I18nString = string | { uz: string; ru: string; en: string };

export function resolveI18n(val: I18nString, locale: string): string {
  if (typeof val === "string") return val;
  return val[locale as "uz" | "ru" | "en"] ?? val.en ?? "";
}

export interface ProductConfigItem {
  systemName: I18nString;
  items: { name: I18nString; spec?: string; quantity: string }[];
}

export interface ProductCommercial {
  containerType: string;
  priceUsdExw: number;
  deliveryWorkingDays: number;
  paymentTerms: string;
  colorPolicy: string;
}

export interface ProductWarranty {
  months: number;
  validityDays: number;
  installation: {
    engineersOnSite: number;
    dailyRateUsd: number;
    buyerCovers: string[];
  };
}

export interface Product {
  slug: string;
  modelCode: string;
  categorySlug: string;
  status: StockStatus;
  isFeatured: boolean;
  isPopular: boolean;
  images: string[];
  spec: ProductSpec;
  commercial: ProductCommercial;
  configuration: ProductConfigItem[];
  warranty: ProductWarranty;
  i18n: {
    uz: { name: string; shortName: string; description: string; tagline: string };
    ru: { name: string; shortName: string; description: string; tagline: string };
    en: { name: string; shortName: string; description: string; tagline: string };
  };
}

const paperManufacturingImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/paper-manifacturing/photo_2026-05-22%2010.45.14.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/paper-manifacturing/photo_2026-05-22%2010.45.15.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/paper-manifacturing/photo_2026-05-22%2010.45.16.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/paper-manifacturing/photo_2026-05-22%2010.45.17.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/paper-manifacturing/photo_2026-05-22%2010.45.18.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/paper-manifacturing/photo_2026-05-22%2010.45.19.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/paper-manifacturing/photo_2026-05-22%2010.45.33.jpeg",
];

const toyBearImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.41.56.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.41.58.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.41.59.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.42.00%20%281%29.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.42.00.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.42.01.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.42.02.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.42.03.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.42.06.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.42.07.jpeg",
];

const blowMoldingImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy-building-factory/photo_2026-05-22%2010.25.12.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy-building-factory/photo_2026-05-22%2010.25.14.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy-building-factory/photo_2026-05-22%2010.25.15.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy-building-factory/photo_2026-05-22%2010.25.16.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy-building-factory/photo_2026-05-22%2010.25.17.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy-building-factory/photo_2026-05-22%2010.25.18.jpeg",
];

const wingtideToyImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.24.06.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.24.07.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.24.08.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.24.09.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.24.10.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.24.11%20%281%29.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.24.11.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.24.12.jpeg",
];

const huayueToyImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.20.30.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.20.31.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.20.32.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.20.33.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.20.34.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.20.35.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.20.36.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.20.37.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.20.38.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.20.39.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy/photo_2026-05-22%2010.20.40.jpeg",
];

const cranImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/cran/photo_2026-05-21%2016.35.46.jpeg",
];

const toyFactoryImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy-building-factory/photo_2026-05-22%2010.02.30.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy-building-factory/photo_2026-05-22%2010.02.31.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy-building-factory/photo_2026-05-22%2010.02.32.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy-building-factory/photo_2026-05-22%2010.02.33.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy-building-factory/photo_2026-05-22%2010.02.35.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toy-building-factory/photo_2026-05-22%2010.02.37.jpeg",
];

const toysStarDreamImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.55.46.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.55.47.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.55.48.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.55.49.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.55.50.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.55.51.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.55.52.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.55.53.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.55.54.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.55.55.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.55.56.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.55.57.jpeg",
];

const toysDeiyiImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.54.28.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.54.33.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-22%2009.54.34.jpeg",
];

const toysImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.45.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.46.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.47.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.48.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.50.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.51.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/toys/photo_2026-05-21%2017.36.52.jpeg",
];

const cilAs699Images = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/CIL-AS-699%20Full-automatic%20handkerchief%20folding%20machine%20production%20line/photo_2026-05-21%2016.34.08.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/CIL-AS-699%20Full-automatic%20handkerchief%20folding%20machine%20production%20line/photo_2026-05-21%2016.34.11.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/CIL-AS-699%20Full-automatic%20handkerchief%20folding%20machine%20production%20line/photo_2026-05-21%2016.34.12.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/CIL-AS-699%20Full-automatic%20handkerchief%20folding%20machine%20production%20line/photo_2026-05-21%2016.34.14.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/CIL-AS-699%20Full-automatic%20handkerchief%20folding%20machine%20production%20line/photo_2026-05-21%2016.34.17.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/CIL-AS-699%20Full-automatic%20handkerchief%20folding%20machine%20production%20line/photo_2026-05-21%2016.34.19.jpeg",
];

const ht500Images = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/HT-500%20stretch%20film%20rewinding%20and%20slitting%20machine/photo_2026-05-21%2016.25.17.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/HT-500%20stretch%20film%20rewinding%20and%20slitting%20machine/photo_2026-05-21%2016.25.19.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/HT-500%20stretch%20film%20rewinding%20and%20slitting%20machine/photo_2026-05-21%2016.25.20.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/HT-500%20stretch%20film%20rewinding%20and%20slitting%20machine/photo_2026-05-21%2016.25.21.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/HT-500%20stretch%20film%20rewinding%20and%20slitting%20machine/photo_2026-05-21%2016.25.22.jpeg",
];

const vegetableSlicerImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vegitable-slicer/photo_2026-05-21%2016.23.07.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vegitable-slicer/photo_2026-05-21%2016.23.09.jpeg",
];

const duxovkaFlamemaxImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.45.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.51.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.53.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.50.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.18.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.21.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.23.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.27.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.33.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.36.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.39.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.40.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.41.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.42.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.48.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.49.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka-new/photo_2026-05-26%2011.51.52.jpeg",
];

const kabelSimImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/kabel-sim/photo_2026-05-26%2012.28.41.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/kabel-sim/photo_2026-05-26%2012.28.41%20%281%29.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/kabel-sim/photo_2026-05-26%2012.28.39.jpeg",
];

const kabelSm2Images = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/kabel-sm-2/photo_2026-05-26%2012.29.51.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/kabel-sm-2/photo_2026-05-26%2012.29.52.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/kabel-sm-2/photo_2026-05-26%2012.29.53.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/kabel-sm-2/photo_2026-05-26%2012.30.46.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/kabel-sm-2/photo_2026-05-26%2012.30.47.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/kabel-sm-2/photo_2026-05-26%2012.30.47%20%281%29.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/kabel-sm-2/photo_2026-05-26%2012.29.49.jpeg",
];

const laserStanokImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/lazer-stakon/photo_2026-05-26%2011.53.33.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/lazer-stakon/photo_2026-05-26%2011.53.32.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/lazer-stakon/photo_2026-05-26%2011.53.34.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/lazer-stakon/photo_2026-05-26%2011.53.42.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/lazer-stakon/photo_2026-05-26%2011.53.31.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/lazer-stakon/photo_2026-05-26%2011.53.35.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/lazer-stakon/photo_2026-05-26%2011.53.36.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/lazer-stakon/photo_2026-05-26%2011.53.38.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/lazer-stakon/photo_2026-05-26%2011.53.46.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/lazer-stakon/photo_2026-05-26%2011.53.43.jpeg",
];

const duxovkaImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka/photo_2026-05-26%2011.50.00.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka/photo_2026-05-26%2011.50.01.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka/photo_2026-05-26%2011.50.02.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka/photo_2026-05-26%2011.50.03.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka/photo_2026-05-26%2011.50.04.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka/photo_2026-05-26%2011.50.05.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka/photo_2026-05-26%2011.50.06.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/duxovka/photo_2026-05-26%2011.50.07.jpeg",
];

const mixerImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.05.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.06.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.09.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.10.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.12.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.17.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/mixer/photo_2026-05-21%2016.06.20.jpeg",
];

const toiletPaperImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/toilet/photo_2026-05-21%2015.22.06.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/toilet/photo_2026-05-21%2015.22.07.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/toilet/photo_2026-05-21%2015.22.08.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/toilet/photo_2026-05-21%2015.22.09.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/toilet/photo_2026-05-21%2015.22.10.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/toilet/photo_2026-05-21%2015.22.12.jpeg",
];
const brickMachineImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/brick/photo_2026-05-22%2012.27.15.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/brick/photo_2026-05-22%2012.27.14.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/brick/photo_2026-05-22%2012.27.16.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/brick/photo_2026-05-22%2012.27.17.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/brick/photo_2026-05-22%2012.27.18.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/brick/photo_2026-05-22%2012.27.19.jpeg",
];

const betonQolibImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolipi-kitsen/photo_2026-05-26%2012.06.09.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolipi-kitsen/photo_2026-05-26%2012.06.10.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.47.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.33.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.34.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.35.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.36.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.37.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.38.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.39.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.40.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.46.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.48.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.35%20%281%29.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/beton-qolib/photo_2026-05-22%2011.56.39%20%281%29.jpeg",
];

const rockGluingMachineImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/rock/photo_2026-05-22%2011.52.36.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/rock/photo_2026-05-22%2011.52.37.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/rock/photo_2026-05-22%2011.52.38.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/rock/photo_2026-05-22%2011.52.39.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/rock/photo_2026-05-22%2011.52.40.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/rock/photo_2026-05-22%2011.52.41.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/rock/photo_2026-05-22%2011.52.45.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/rock/photo_2026-05-22%2011.52.47.jpeg",
];

const iceCreamMachineImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/icecream-machine/photo_2026-05-22%2011.49.39.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/icecream-machine/photo_2026-05-22%2011.49.40.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/icecream-machine/photo_2026-05-22%2011.49.41.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/icecream-machine/photo_2026-05-22%2011.49.42.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/icecream-machine/photo_2026-05-22%2011.49.43.jpeg",
];

const vendingSmallerImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending-smaller/photo_2026-05-22%2011.47.54.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending-smaller/photo_2026-05-22%2011.47.55.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending-smaller/photo_2026-05-22%2011.47.56.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending-smaller/photo_2026-05-22%2011.47.57.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending-smaller/photo_2026-05-22%2011.47.58.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending-smaller/photo_2026-05-22%2011.47.58%20%281%29.jpeg",
];

const vendingImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending/photo_2026-05-22%2011.44.38.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending/photo_2026-05-22%2011.44.39.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending/photo_2026-05-22%2011.44.40.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending/photo_2026-05-22%2011.44.41.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending/photo_2026-05-22%2011.44.42.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending/photo_2026-05-22%2011.44.43.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/products/vending/photo_2026-05-22%2011.44.38%20%281%29.jpeg",
];

const waterPlasticImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/water-plastic/photo_2026-05-21%2015.10.42.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/water-plastic/photo_2026-05-21%2015.10.44.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/water-plastic/photo_2026-05-21%2015.10.46.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/water-plastic/photo_2026-05-21%2015.10.47.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/water-plastic/photo_2026-05-21%2015.10.49.jpeg",
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/water-plastic/photo_2026-05-21%2015.10.50.jpeg",
];


const drabilniZavodImages = [
  "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/drabilni-zavod/cover.jpeg",
];

export const PRODUCTS: Product[] = [
  {
    slug: "4-26-semi-auto-brick-making-machine-wanlong",
    modelCode: "4-26",
    categorySlug: "gisht-zavodlari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: brickMachineImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 11.4,
      mixerModel: "Agitator Ø1.1m / 350L / 5.5kW",
      batcherModel: "—",
      feedingModel: "Semi-automatic",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 2000, w: 1700, h: 2400 },
    },
    commercial: {
      containerType: "Wooden case",
      priceUsdExw: 5200,
      deliveryWorkingDays: 7,
      paymentTerms: "T/T",
      colorPolicy: "Standard",
    },
    configuration: [
      {
        systemName: "Komplektatsiya",
        items: [
          { name: "4-26 G'isht mashinasi", spec: "2000×1700×2400 mm, 11.4 kW", quantity: "1" },
          {
            name: "Agitator (Aralashtiruvchi)",
            spec: "Ø1.1 m, 350 L, 1200×1400×1100 mm, 5.5 kW",
            quantity: "1",
          },
          { name: "Konveyer", spec: "6 m uzunlik, 800×320×6200 mm", quantity: "1" },
          { name: "Qolip (Mould)", spec: "Tekin", quantity: "1" },
          { name: "Aravachа (Trolley)", spec: "Tekin", quantity: "1" },
        ],
      },
      {
        systemName: "Kompaniya",
        items: [
          {
            name: "Ishlab chiqaruvchi",
            spec: "Gongyi Wanlong Machinery Manufacturing Co. Ltd",
            quantity: "—",
          },
          { name: "Tashkil etilgan", spec: "2013", quantity: "—" },
          { name: "Maydon", spec: "6000 m²", quantity: "—" },
          { name: "Yetkazib berish", spec: "Balans to'lovidan 7 ish kuni ichida", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 365,
      installation: {
        engineersOnSite: 0,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "4-26 Yarim avtomatik g'isht ishlab chiqarish mashinasi",
        shortName: "4-26 G'isht mashinasi (Semi-auto)",
        description:
          "Gongyi Wanlong Machinery Manufacturing Co. Ltd tomonidan ishlab chiqarilgan 4-26 model yarim avtomatik g'isht mashinasi. Quvvat: 11.4 kW. Komplektda aralashtiruvchi (350 L, 5.5 kW), konveyer (6 m), qolip va aravachа bepul. Narxi: $5,200 (EXW). Yetkazib berish: 7 ish kuni.",
        tagline: "Ishonchli g'isht ishlab chiqarish — yarim avtomatik rejimda",
      },
      ru: {
        name: "Полуавтоматический кирпичный станок 4-26",
        shortName: "Кирпичный станок 4-26 (полуавт.)",
        description:
          "Полуавтоматический кирпичный станок модели 4-26 от Gongyi Wanlong Machinery Manufacturing Co. Ltd. Мощность: 11.4 кВт. В комплекте: мешалка (350 л, 5.5 кВт), конвейер (6 м), форма и тележка — бесплатно. Цена: $5 200 (EXW). Поставка: 7 рабочих дней.",
        tagline: "Надёжное производство кирпича в полуавтоматическом режиме",
      },
      en: {
        name: "4-26 Semi-Automatic Brick Making Machine",
        shortName: "4-26 Brick Making Machine (Semi-auto)",
        description:
          "Model 4-26 semi-automatic brick making machine by Gongyi Wanlong Machinery Manufacturing Co. Ltd. Power: 11.4 kW. Includes: agitator (350 L, 5.5 kW), 6 m conveyor, mould and trolley — free. Price: $5,200 EXW. Delivery: 7 working days.",
        tagline: "Reliable brick production in semi-automatic mode",
      },
    },
  },
  {
    slug: "steel-formwork-zhengzhou-songmao",
    modelCode: "SM-OPL",
    categorySlug: "maxsus-texnikalar",
    status: "in-stock",
    isFeatured: false,
    isPopular: false,
    images: betonQolibImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "—",
      priceUsdExw: 43,
      deliveryWorkingDays: 30,
      paymentTerms: "T/T",
      colorPolicy: "Standard",
    },
    configuration: [
      {
        systemName: "Aluminium formwork (Kitsen)",
        items: [
          { name: "Panel size", spec: "1100 × 600 mm", quantity: "—" },
          { name: "Material", spec: "Aluminium", quantity: "—" },
          { name: "EXW price", spec: "USD 120 / pc (RMB 820 / pc)", quantity: "—" },
          {
            name: "Company",
            spec: "Kitsen Technology Co., Ltd",
            quantity: "—",
          },
          { name: "Established", spec: "2009", quantity: "—" },
          { name: "Factory space", spec: "180 000 m²", quantity: "—" },
        ],
      },
      {
        systemName: "Steel formwork (Songmao)",
        items: [
          { name: "2700×400 mm", spec: "1.08 m² — $42.55/dona", quantity: "—" },
          { name: "2600×400 mm", spec: "1.04 m² — $40.98/dona", quantity: "—" },
          { name: "Narx (m²)", spec: "$39.4/m²", quantity: "—" },
          { name: "Material", spec: "Yuqori mustahkamlikdagi po'lat", quantity: "—" },
          { name: "Qalinlik", spec: "65 mm", quantity: "—" },
          {
            name: "Kompaniya",
            spec: "Zhengzhou Songmao Building Materials Co. Ltd",
            quantity: "—",
          },
          { name: "Tashkil etilgan", spec: "2014", quantity: "—" },
          { name: "Maydon", spec: "4500 m²", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 365,
      installation: {
        engineersOnSite: 0,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "Beton qolipi (Opалубка) — alyuminiy va po'lat",
        shortName: "Beton qolipi",
        description:
          "Alyuminiy qolip (Kitsen): 1100×600 mm, alyuminiy, EXW USD 120/dona (RMB 820). Ishlab chiqaruvchi: Kitsen Technology Co., Ltd — 2009-yildan, 180 000 m² zavod. Po'lat qolip (Songmao): 65 mm qalinlik, 2700×400 va 2600×400 mm, $39.4/m². Zhengzhou Songmao Building Materials Co. Ltd, 2014-yildan.",
        tagline: "Alyuminiy va po'lat qoliplar — ishonchli qurilish",
      },
      ru: {
        name: "Опалубка — алюминий и сталь",
        shortName: "Бетонная опалубка",
        description:
          "Алюминиевая опалубка Kitsen: 1100×600 мм, EXW USD 120/шт (RMB 820). Производитель: Kitsen Technology Co., Ltd — с 2009 г., 180 000 м². Стальная опалубка Songmao: 65 мм, 2700×400 и 2600×400 мм, $39.4/м². Zhengzhou Songmao Building Materials Co. Ltd, с 2014 г.",
        tagline: "Алюминиевая и стальная опалубка для строительства",
      },
      en: {
        name: "Concrete formwork — aluminium & steel",
        shortName: "Formwork",
        description:
          "Kitsen aluminium formwork: 1100×600 mm panels, EXW USD 120/pc (RMB 820). Manufacturer: Kitsen Technology Co., Ltd — since 2009, 180,000 m² facility. Songmao steel formwork: 65 mm thick, 2700×400 and 2600×400 mm sizes, $39.4/m². Zhengzhou Songmao Building Materials Co. Ltd, est. 2014.",
        tagline: "Aluminium and steel formwork for reliable construction",
      },
    },
  },
  {
    slug: "fabric-rhinestone-hotfix-machine-jhenghzou-honest",
    modelCode: "RHM-JH",
    categorySlug: "maxsus-texnikalar",
    status: "in-stock",
    isFeatured: false,
    isPopular: false,
    images: rockGluingMachineImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "—",
      priceUsdExw: 0,
      deliveryWorkingDays: 30,
      paymentTerms: "T/T",
      colorPolicy: "Custom",
    },
    configuration: [
      {
        systemName: "Kompaniya",
        items: [
          { name: "Ishlab chiqaruvchi", spec: "Zhengzhou Honest Machinery Co. Ltd", quantity: "—" },
          { name: "Foydalanish", spec: "Mato va gazlamaga tosh yopishtiriladi", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 365,
      installation: {
        engineersOnSite: 0,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "Matoga tosh yopishtiradigan uskuna",
        shortName: "Matoga tosh yopishtiradigan uskuna",
        description:
          "Zhengzhou Honest Machinery Co. Ltd ishlab chiqargan matoga tosh (rhinestone) yopishtiradigan professional uskuna. Kiyim-kechak va tekstil sanoati uchun mo'ljallangan.",
        tagline: "Matoni bezating — tosh bilan",
      },
      ru: {
        name: "Машина для приклеивания страз на ткань",
        shortName: "Машина для приклеивания страз",
        description:
          "Профессиональная машина для горячей фиксации страз на ткань от Zhengzhou Honest Machinery Co. Ltd. Предназначена для швейной и текстильной промышленности.",
        tagline: "Украшайте ткань — со стразами",
      },
      en: {
        name: "Fabric Rhinestone Hotfix Machine",
        shortName: "Rhinestone Hotfix Machine",
        description:
          "Professional fabric rhinestone hotfix machine by Zhengzhou Honest Machinery Co. Ltd. Designed for garment and textile manufacturing.",
        tagline: "Decorate fabric with precision rhinestones",
      },
    },
  },
  {
    slug: "soft-serve-ice-cream-machine",
    modelCode: "ICM-SS",
    categorySlug: "oziq-ovqat-uskunalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: iceCreamMachineImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "—",
      priceUsdExw: 0,
      deliveryWorkingDays: 30,
      paymentTerms: "T/T",
      colorPolicy: "Custom",
    },
    configuration: [
      {
        systemName: "Xususiyatlari",
        items: [
          { name: "Turi", spec: "Soft-serve muzqaymoq mashinasi", quantity: "—" },
          { name: "Foydalanish", spec: "Savdo nuqtalari, kafelar, restoranlar", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 365,
      installation: {
        engineersOnSite: 0,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "Soft-serve muzqaymoq tayyorlash mashinasi",
        shortName: "Musqaymoq mashinasi",
        description:
          "Savdo nuqtalari, kafelar va restoranlar uchun soft-serve muzqaymoq tayyorlash mashinasi. Ishlatish oson, yuqori unumdorlik.",
        tagline: "Sifatli muzqaymoq — har doim tayyor",
      },
      ru: {
        name: "Фризер для мягкого мороженого (Soft-serve)",
        shortName: "Аппарат для мороженого",
        description:
          "Аппарат для приготовления мягкого мороженого для торговых точек, кафе и ресторанов. Прост в эксплуатации, высокая производительность.",
        tagline: "Качественное мороженое — всегда готово",
      },
      en: {
        name: "Soft-Serve Ice Cream Machine",
        shortName: "Ice Cream Machine",
        description:
          "Soft-serve ice cream machine for retail outlets, cafes and restaurants. Easy to operate with high output capacity.",
        tagline: "Quality soft-serve ice cream, always ready",
      },
    },
  },
  {
    slug: "hunan-afen-vending-machine-compact",
    modelCode: "AF-VM-S",
    categorySlug: "maxsus-texnikalar",
    status: "in-stock",
    isFeatured: false,
    isPopular: false,
    images: vendingSmallerImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "—",
      priceUsdExw: 0,
      deliveryWorkingDays: 30,
      paymentTerms: "T/T",
      colorPolicy: "Custom",
    },
    configuration: [
      {
        systemName: "Kompaniya",
        items: [
          {
            name: "Ishlab chiqaruvchi",
            spec: "Hunan Afen Vending Machinery Co. Ltd",
            quantity: "—",
          },
          { name: "Tashkil etilgan", spec: "2016", quantity: "—" },
          { name: "Model turi", spec: "Kichik (Compact)", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 365,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "Kichik avtomat savdo mashinasi (Compact Vending)",
        shortName: "Kichik avtomat savdo mashinasi",
        description:
          "Hunan Afen Vending Machinery Co. Ltd tomonidan ishlab chiqarilgan kichik o'lchamli avtomat savdo mashinasi. Cheklangan makon uchun ideal.",
        tagline: "Ixcham va qulay avtomat savdo yechimi",
      },
      ru: {
        name: "Компактный торговый автомат",
        shortName: "Компактный торговый автомат",
        description:
          "Компактный торговый автомат от Hunan Afen Vending Machinery Co. Ltd. Идеален для помещений с ограниченным пространством.",
        tagline: "Компактное решение для автоматической торговли",
      },
      en: {
        name: "Compact Vending Machine",
        shortName: "Compact Vending Machine",
        description:
          "Compact vending machine by Hunan Afen Vending Machinery Co. Ltd. Ideal for limited-space environments.",
        tagline: "Compact automated retail solution",
      },
    },
  },
  {
    slug: "hunan-afen-vending-machine",
    modelCode: "AF-VM",
    categorySlug: "maxsus-texnikalar",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: vendingImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "—",
      priceUsdExw: 0,
      deliveryWorkingDays: 30,
      paymentTerms: "T/T",
      colorPolicy: "Custom",
    },
    configuration: [
      {
        systemName: "Kompaniya",
        items: [
          {
            name: "Ishlab chiqaruvchi",
            spec: "Hunan Afen Vending Machinery Co. Ltd",
            quantity: "—",
          },
          { name: "Tashkil etilgan", spec: "2016", quantity: "—" },
          { name: "Maydon", spec: "60 000 m²", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 365,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "Avtomat savdo mashinasi (Vending machine)",
        shortName: "Avtomat savdo mashinasi",
        description:
          "Hunan Afen Vending Machinery Co. Ltd tomonidan ishlab chiqarilgan zamonaviy avtomat savdo mashinasi. 2016-yilda tashkil etilgan, 60 000 m² ishlab chiqarish maydoni.",
        tagline: "Zamonaviy avtomat savdo yechimi",
      },
      ru: {
        name: "Торговый автомат (Vending machine)",
        shortName: "Торговый автомат",
        description:
          "Современный торговый автомат от Hunan Afen Vending Machinery Co. Ltd. Основана в 2016 году, производственная площадь 60 000 м².",
        tagline: "Современное решение для автоматической торговли",
      },
      en: {
        name: "Vending Machine",
        shortName: "Vending Machine",
        description:
          "Modern vending machine by Hunan Afen Vending Machinery Co. Ltd. Established 2016, production area 60,000 m².",
        tagline: "Smart automated retail solution",
      },
    },
  },
  {
    slug: "semi-auto-pet-bottle-machine-50-2000ml",
    modelCode: "PET-SA-2C",
    categorySlug: "suv-liniyalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: waterPlasticImages,
    spec: {
      productivity: { value: 1200, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 22,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "Semi-automatic",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 0,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Machine specifications",
        items: [
          { name: "Plastic processed", spec: "PET", quantity: "—" },
          { name: "Automation", spec: "Semi-automatic", quantity: "—" },
          { name: "Voltage", spec: "220–380V 50–60Hz", quantity: "—" },
          { name: "PLC Brand", spec: "Schneider", quantity: "—" },
          { name: "Rotary Cylinder Brand", spec: "AirTac", quantity: "—" },
          { name: "High Pressure Valve Brand", spec: "AirTac", quantity: "—" },
        ],
      },
      {
        systemName: "Bottle parameters",
        items: [
          { name: "Output", spec: "800–1200 BPH", quantity: "—" },
          { name: "Bottle volume", spec: "50–2000 ml", quantity: "—" },
          { name: "Max bottle height", spec: "360 mm", quantity: "—" },
          { name: "Max bottle diameter", spec: "120 mm", quantity: "—" },
          { name: "Neck diameter", spec: "130 mm", quantity: "—" },
          { name: "Cavity", spec: "2 Cavity", quantity: "—" },
          { name: "Suitable bottles", spec: "Water / Juice / Drink / Oil", quantity: "—" },
        ],
      },
      {
        systemName: "Included equipment",
        items: [
          { name: "Bottle mold", quantity: "1 Set" },
          { name: "High pressure air compressor", quantity: "Included" },
          { name: "High pressure pipe", quantity: "Included" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          {
            name: "Company",
            spec: "Guangdong First Intelligent Drinking Water Equipment Co., Ltd",
            quantity: "—",
          },
          { name: "Established", spec: "2002", quantity: "—" },
          { name: "Factory space", spec: "12 500 m²", quantity: "—" },
          { name: "Experience", spec: "23 years", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "Yarim avtomatik mini PET shisha tayyorlash mashinasi (50–2000ml)",
        shortName: "PET-SA-2C",
        tagline: "Mineral suv uchun arzon va ishonchli PET shisha ishlab chiqarish",
        description:
          "Yarim avtomatik mini PET shisha tayyorlash mashinasi kichik va o'rta hajmdagi mineral suv, sharbat va ichimliklar ishlab chiqaruvchilar uchun mo'ljallangan. 2 kavitali qolip bilan soatiga 800–1200 dona 50–2000 ml hajmdagi shishalarni ishlab chiqaradi. Schneider PLC va AirTac pnevmatikasi bilan ishonchli ishlashni ta'minlaydi. Ishlab chiqaruvchi: Guangdong First Intelligent Drinking Water Equipment Co., Ltd — 2002-yildan buyon 23 yillik tajribaga ega, 12 500 m² maydondagi zavodda faoliyat yuritadi.",
      },
      ru: {
        name: "Полуавтоматическая мини-машина для выдува ПЭТ-бутылок (50–2000 мл)",
        shortName: "PET-SA-2C",
        tagline: "Доступное производство ПЭТ-тары для минеральной воды",
        description:
          "Полуавтоматическая машина для выдува ПЭТ-бутылок предназначена для малого и среднего производства минеральной воды, сока и напитков. С 2-гнёздной пресс-формой выпускает 800–1200 бутылок/час объёмом 50–2000 мл. ПЛК Schneider и пневматика AirTac обеспечивают надёжную работу. Производитель: Guangdong First Intelligent Drinking Water Equipment Co., Ltd — 23 года опыта с 2002 г., завод площадью 12 500 м².",
      },
      en: {
        name: "Semi-automatic mini mineral water PET bottle making machine (50–2000 ml)",
        shortName: "PET-SA-2C",
        tagline: "Affordable PET bottle production for mineral water lines",
        description:
          "Semi-automatic mini PET bottle blowing machine designed for small and medium mineral water, juice and beverage producers. With a 2-cavity mould it outputs 800–1200 bottles/hour in sizes from 50 to 2000 ml. Schneider PLC and AirTac pneumatics ensure reliable operation. Manufacturer: Guangdong First Intelligent Drinking Water Equipment Co., Ltd — 23 years of experience since 2002, operating from a 12,500 m² facility.",
      },
    },
  },
  {
    slug: "fy-r1575-toilet-tissue-rewinding-machine",
    modelCode: "FY-R1575",
    categorySlug: "tualet-qogoz-liniyalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: toiletPaperImages,
    spec: {
      productivity: { value: 50, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 7.5,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "Jumbo roll rewinding",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 7500, w: 3200, h: 1750 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 0,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Machine specifications",
        items: [
          { name: "Product type", spec: "Toilet tissue", quantity: "—" },
          { name: "Processing type", spec: "Paper slitting and rewinding", quantity: "—" },
          { name: "Voltage", spec: "380V 50Hz", quantity: "—" },
          { name: "Power", spec: "7.5 kW", quantity: "—" },
          { name: "Core components", spec: "PLC, Engine", quantity: "—" },
          { name: "Weight", spec: "2000 kg", quantity: "—" },
          { name: "Dimensions (L×W×H)", spec: "6500–7500 × 2600–3200 × 1750 mm", quantity: "—" },
        ],
      },
      {
        systemName: "Paper parameters",
        items: [
          { name: "Raw material", spec: "Jumbo roll", quantity: "—" },
          { name: "Paper width", spec: "1575 / 1880 / 2400 / 2800 mm", quantity: "—" },
          { name: "Drop tube", spec: "Manual / Automatic", quantity: "—" },
          { name: "Embossing", spec: "Single / Double embossing", quantity: "—" },
          { name: "Embossing roller", spec: "As required", quantity: "—" },
        ],
      },
      {
        systemName: "After-sales service",
        items: [
          { name: "Warranty", spec: "1 Year", quantity: "—" },
          { name: "Engineers available overseas", spec: "Yes", quantity: "—" },
          { name: "Spare parts", spec: "Provided", quantity: "—" },
          { name: "Online support", spec: "Yes", quantity: "—" },
          { name: "Certification", spec: "CE, ISO", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Henan Fuyuan Machinery Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2005", quantity: "—" },
          { name: "Factory space", spec: "31 738 m²", quantity: "—" },
          { name: "Experience", spec: "19 years", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "To'liq avtomatik tualet qog'ozi o'rash mashinasi FY-R1575",
        shortName: "FY-R1575",
        tagline: "Jumbo rulon qog'ozdan tualet qog'ozi ishlab chiqarish uchun avtomatik liniya",
        description:
          "FY-R1575 — to'liq avtomatik tualet qog'ozi o'rash va kesish mashinasi. Jumbo rulon xom ashyodan foydalanib, bir necha o'lchamdagi (1575–2800 mm) qog'oz rulonlarini ishlab chiqaradi. Yagona va juft embosslash rejimi, PLC boshqaruvi, CE va ISO sertifikatlari mavjud. Ishlab chiqaruvchi: Henan Fuyuan Machinery Co., Ltd — 2005-yildan buyon 19 yillik tajribaga ega, 31 738 m² maydondagi zavodda faoliyat yuritadi.",
      },
      ru: {
        name: "Полностью автоматическая машина для намотки туалетной бумаги FY-R1575",
        shortName: "FY-R1575",
        tagline: "Автоматическая линия производства туалетной бумаги из джамбо-рулона",
        description:
          "FY-R1575 — полностью автоматическая перемоточно-резательная машина для производства туалетной бумаги. Работает с джамбо-рулонами шириной 1575–2800 мм, поддерживает одинарное и двойное тиснение, управление ПЛК. Сертификаты CE и ISO. Производитель: Henan Fuyuan Machinery Co., Ltd — 19 лет опыта с 2005 г., завод площадью 31 738 м².",
      },
      en: {
        name: "Fully automatic toilet tissue paper roll making machine FY-R1575",
        shortName: "FY-R1575",
        tagline: "Automatic toilet paper rewinding line from jumbo roll",
        description:
          "FY-R1575 is a fully automatic toilet tissue rewinding and slitting machine. Processes jumbo rolls in widths from 1575 to 2800 mm, supports single and double embossing, PLC control. CE and ISO certified. Manufacturer: Henan Fuyuan Machinery Co., Ltd — 19 years of experience since 2005, operating from a 31,738 m² facility.",
      },
    },
  },
  {
    slug: "gfq-800-bottom-sealing-bag-making-machine",
    modelCode: "GFQ-800",
    categorySlug: "upakovka-liniyalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/bag-making-machine/photo_2026-05-21%2015.29.57.jpeg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/bag-making-machine/photo_2026-05-21%2015.29.58.jpeg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/bag-making-machine/photo_2026-05-21%2015.29.59.jpeg",
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/bag-making-machine/photo_2026-05-21%2015.30.01.jpeg",
    ],
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "Bottom sealing",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 6800,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Ruian Xinye Packing Machine Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2010", quantity: "—" },
          { name: "Factory space", spec: "4 200 m²", quantity: "—" },
          { name: "Experience", spec: "15 years", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "GFQ-800 — Pastki chok paket tayyorlash mashinasi",
        shortName: "GFQ-800",
        tagline: "Polietilen paketlarni avtomatik ishlab chiqarish uchun yuqori unumli mashina",
        description:
          "GFQ-800 — pastki chok bilan paket tayyorlash mashinasi. Polietilen va boshqa materiallardan turli o'lchamdagi paketlarni ishlab chiqaradi. Ishlab chiqaruvchi: Ruian Xinye Packing Machine Co., Ltd — 2010-yildan buyon 15 yillik tajribaga ega, 4 200 m² zavodda faoliyat yuritadi.",
      },
      ru: {
        name: "GFQ-800 — Машина для изготовления пакетов с донным швом",
        shortName: "GFQ-800",
        tagline:
          "Высокопроизводительная машина для автоматического производства полиэтиленовых пакетов",
        description:
          "GFQ-800 — машина для производства пакетов с донным швом из полиэтилена и других материалов. Производитель: Ruian Xinye Packing Machine Co., Ltd — 15 лет опыта с 2010 г., завод площадью 4 200 м².",
      },
      en: {
        name: "GFQ-800 — Bottom sealing bag making machine",
        shortName: "GFQ-800",
        tagline: "High-speed automatic bag production from polyethylene film",
        description:
          "GFQ-800 bottom sealing bag making machine produces bags of various sizes from polyethylene and other film materials. Manufacturer: Ruian Xinye Packing Machine Co., Ltd — 15 years of experience since 2010, operating from a 4,200 m² facility.",
      },
    },
  },
  // ── Paper Manufacturing Line — Guangdong Speech (Qog'oz liniyalari) ─────────
  {
    slug: "paper-manufacturing-line-guangdong-speech",
    modelCode: "PAPER-LINE",
    categorySlug: "tualet-qogoz-liniyalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: paperManufacturingImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "—",
      priceUsdExw: 35000,
      deliveryWorkingDays: 30,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Product details",
        items: [
          { name: "Type", spec: "Paper manufacturing line", quantity: "—" },
          { name: "Price", spec: "USD 35,000", quantity: "1 line" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Guangdong Speech Machinery Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2023", quantity: "—" },
          { name: "Factory space", spec: "2 000 m²", quantity: "—" },
          { name: "Location", spec: "Guangdong, China", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 0,
        buyerCovers: ["round-trip air tickets", "hotel", "food", "local transportation"],
      },
    },
    i18n: {
      uz: {
        name: "Qog'oz ishlab chiqarish liniyasi",
        shortName: "Qog'oz liniyasi",
        tagline: "Qog'oz mahsulotlari ishlab chiqarish liniyasi — $35,000",
        description:
          "Guangdong Speech Machinery Co., Ltd tomonidan ishlab chiqarilgan qog'oz mahsulotlari liniyasi. Narxi: $35,000. Ishlab chiqaruvchi: 2023-yildan, 2 000 m² zavod, Guangdong, Xitoy.",
      },
      ru: {
        name: "Линия производства бумажной продукции",
        shortName: "Бумажная линия",
        tagline: "Линия производства бумажной продукции — $35 000",
        description:
          "Линия производства бумажной продукции от Guangdong Speech Machinery Co., Ltd. Цена: $35 000. Производитель — с 2023 г., завод 2 000 м², Гуандун, Китай.",
      },
      en: {
        name: "Paper manufacturing line",
        shortName: "Paper line",
        tagline: "Paper manufacturing line — $35,000",
        description:
          "Paper manufacturing line from Guangdong Speech Machinery Co., Ltd. Price: $35,000. Manufacturer established 2023, 2,000 m² factory in Guangdong, China.",
      },
    },
  },

  // ── Toy Bear (O'yinchoqlar) ───────────────────────────────────────────────
  {
    slug: "toy-bear",
    modelCode: "TOY-BEAR",
    categorySlug: "oyinchoqlar",
    status: "in-stock",
    isFeatured: false,
    isPopular: true,
    images: toyBearImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 0,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Product details",
        items: [{ name: "Type", spec: "Toy bear", quantity: "—" }],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 0,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "O'yinchoq ayiq",
        shortName: "Toy Bear",
        tagline: "Bolalar uchun yumshoq o'yinchoq ayiq",
        description: "Bolalar uchun yumshoq o'yinchoq ayiq. Ulgurji narxlar mavjud.",
      },
      ru: {
        name: "Игрушечный медведь",
        shortName: "Toy Bear",
        tagline: "Мягкая игрушка медведь для детей",
        description: "Мягкая игрушка медведь для детей. Оптовые цены.",
      },
      en: {
        name: "Toy bear",
        shortName: "Toy Bear",
        tagline: "Soft toy bear for children",
        description: "Soft toy bear for children. Wholesale prices available.",
      },
    },
  },

  // ── PHD-80-2-P Blow Molding Machine — Zhejiang Tonva (O'yinchoqlar) ─────────
  {
    slug: "phd-80-2-p-blow-molding-machine-ocean-ball",
    modelCode: "PHD-80-2-P",
    categorySlug: "oyinchoqlar",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: blowMoldingImages,
    spec: {
      productivity: { value: 80, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 48,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "Extrusion",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 4300, w: 2200, h: 2200 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 29000,
      deliveryWorkingDays: 80,
      paymentTerms: "30% T/T deposit / 70% T/T before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Basic specifications",
        items: [
          { name: "Model", spec: "PHD-80-2-P", quantity: "—" },
          { name: "Product", spec: "3–8.5 cm ocean balls", quantity: "—" },
          { name: "Raw material", spec: "LDPE", quantity: "—" },
          { name: "Stations", spec: "Double stations, 2-cavity die head", quantity: "—" },
          { name: "Cavities per station", spec: "8 cavities (3–8 cm ball)", quantity: "—" },
          { name: "Machine weight", spec: "6 T", quantity: "—" },
          { name: "Dimensions (L×W×H)", spec: "4.3 × 2.2 × 2.2 m", quantity: "—" },
          { name: "Power supply", spec: "380 VAC / 50 Hz", quantity: "—" },
          { name: "Total power", spec: "48–54 kW", quantity: "—" },
          { name: "Certification", spec: "CE, ISO 9001", quantity: "—" },
        ],
      },
      {
        systemName: "Extrusion system",
        items: [
          { name: "Screw diameter", spec: "φ 80 mm", quantity: "—" },
          { name: "Screw motor", spec: "22 kW", quantity: "—" },
          { name: "Heating zones", spec: "5", quantity: "—" },
          { name: "Heating power", spec: "13 kW", quantity: "—" },
          { name: "Plasticizing capacity", spec: "80 kg/h", quantity: "—" },
          { name: "Parison controller", spec: "TONVA (included)", quantity: "—" },
        ],
      },
      {
        systemName: "Clamping system",
        items: [
          { name: "Clamping distance", spec: "180–380 mm", quantity: "—" },
          { name: "Open stroke", spec: "200 mm", quantity: "—" },
          { name: "Sliding distance", spec: "380 mm", quantity: "—" },
          { name: "Clamping force", spec: "100 kN", quantity: "—" },
          { name: "Template size", spec: "330 × 490 mm", quantity: "—" },
          { name: "Die head heating zones", spec: "3", quantity: "—" },
          { name: "Die head heating power", spec: "3 kW", quantity: "—" },
        ],
      },
      {
        systemName: "Component brands",
        items: [
          { name: "PLC Control", spec: "MITSUBISHI — Japan", quantity: "—" },
          { name: "Pneumatic Cylinder", spec: "SMC / AirTac", quantity: "—" },
          { name: "Inverter", spec: "GTAKE — China", quantity: "—" },
          { name: "Electrical Parts", spec: "Schneider — France", quantity: "—" },
          { name: "Inductor & Temperature Module", spec: "AUTONICS — Korea", quantity: "—" },
          { name: "Solenoid Valve", spec: "MINDMAN — Taiwan", quantity: "—" },
          { name: "Hydraulic System", spec: "YUKEN — Japan", quantity: "—" },
          { name: "Linear Guideway", spec: "HIWIN — Taiwan", quantity: "—" },
        ],
      },
      {
        systemName: "Full turnkey price list (FOB Ningbo)",
        items: [
          { name: "PHD-80-2-P blow molding machine", spec: "USD 29,000", quantity: "1 set" },
          {
            name: "Blow mold 8cm ocean ball (8 cavity, P20 steel)",
            spec: "USD 4,000",
            quantity: "2 sets",
          },
          { name: "Water chiller 10HP (air cooling)", spec: "USD 4,000", quantity: "1 set" },
          { name: "Air compressor 7.5 kW screw type", spec: "USD 3,200", quantity: "1 set" },
          { name: "Air tank 0.6 m³ / 1.0 MPa", spec: "USD 500", quantity: "1 set" },
          { name: "Crusher 11 kW blade cutter saddle", spec: "USD 2,500", quantity: "1 set" },
          { name: "Auto loader 700G vacuum type", spec: "USD 600", quantity: "1 set" },
          { name: "Mixer 150 KG stainless steel", spec: "USD 1,400", quantity: "1 set" },
          { name: "Total (full turnkey FOB Ningbo)", spec: "USD 49,200", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Zhejiang Tonva Plastics Machine Co., Ltd", quantity: "—" },
          { name: "Established", spec: "1993", quantity: "—" },
          { name: "Factory space", spec: "80 000 m²", quantity: "—" },
          { name: "Exports", spec: "600+ sets/year to 120+ countries", quantity: "—" },
          {
            name: "Address",
            spec: "No.30 Huihai Road, Bingang Industry Zone, Shamen, Yuhuan, Zhejiang, China",
            quantity: "—",
          },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 0,
        buyerCovers: ["round-trip air tickets", "hotel", "food", "local transportation"],
      },
    },
    i18n: {
      uz: {
        name: "PHD-80-2-P — O'yinchoq sharchalari uchun puflab qoliplash mashinasi",
        shortName: "PHD-80-2-P",
        tagline: "Okean sharcha ishlab chiqarish — to'liq zavod to'plami $49,200",
        description:
          "PHD-80-2-P — 3–8.5 sm o'yinchoq sharchalarini (ocean ball) ishlab chiqarish uchun ekstruzion puflab qoliplash mashinasi. Ikki stansiyali, 2 bo'shliqli die head, har bir stansiyada 8 ta sharcha. LDPE xom ashyosi. Screw: φ80 mm, 22 kW. Jami quvvat: 48–54 kW, o'lchamlari: 4.3×2.2×2.2 m, vazni 6 tonna. CE va ISO 9001. To'liq zavod to'plami (mashina + 2 ta qolip + sovutgich + kompressor + crusher + mixer): $49,200 FOB Ningbo. Yetkazib berish: 80 kun. Ishlab chiqaruvchi: Zhejiang Tonva Plastics Machine Co., Ltd — 1993-yildan, 80 000 m², 120+ mamlakatga eksport.",
      },
      ru: {
        name: "PHD-80-2-P — Экструзионный выдувной автомат для океанических шаров",
        shortName: "PHD-80-2-P",
        tagline: "Производство пластиковых шариков 3–8.5 см — полный завод $49 200",
        description:
          "PHD-80-2-P — экструзионный выдувной автомат для производства цветных шариков (ocean ball) диаметром 3–8.5 см. Двойная станция, 2-гнездная голова, 8 шаров за цикл. Сырьё: LDPE. Шнек φ80 мм, мотор 22 кВт. Общая мощность 48–54 кВт, габариты 4.3×2.2×2.2 м, вес 6 т. CE, ISO 9001. Полный комплект «под ключ» (машина + 2 формы + чиллер + компрессор + дробилка + смеситель): $49 200 FOB Нинбо. Срок поставки 80 дней. Производитель: Zhejiang Tonva Plastics Machine Co., Ltd — с 1993 г., 80 000 м², поставки в 120+ стран.",
      },
      en: {
        name: "PHD-80-2-P — Extrusion blow molding machine for ocean balls",
        shortName: "PHD-80-2-P",
        tagline: "3–8.5 cm ocean ball production — complete turnkey factory at $49,200",
        description:
          "The PHD-80-2-P is a double-station extrusion blow molding machine designed for 3–8.5 cm colored plastic ocean balls. Two cavities die head with 8 cavities per station. Material: LDPE. Screw φ80 mm, 22 kW motor, 80 kg/h plasticizing capacity. Total power 48–54 kW, dimensions 4.3×2.2×2.2 m, weight 6 tons. CE & ISO 9001 certified. Complete turnkey set (machine + 2 moulds + chiller + compressor + crusher + mixer): $49,200 FOB Ningbo. Delivery: 80 working days. Manufacturer: Zhejiang Tonva Plastics Machine Co., Ltd — since 1993, 80,000 m², exporting to 120+ countries.",
      },
    },
  },

  // ── Guangzhou Huayue Inflatable Toy — 1.5m (O'yinchoqlar) ────────────────
  {
    slug: "guangzhou-huayue-inflatable-toy",
    modelCode: "TOY-HY",
    categorySlug: "oyinchoqlar",
    status: "in-stock",
    isFeatured: false,
    isPopular: true,
    images: huayueToyImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 1500, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 66,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Product details",
        items: [
          { name: "Type", spec: "Inflatable toy", quantity: "—" },
          { name: "Size", spec: "1.5 m", quantity: "—" },
          { name: "Unit price", spec: "USD 66 / pc", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Guangzhou Huayue Inflatable Products Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2015", quantity: "—" },
          { name: "Factory space", spec: "6 376 m²", quantity: "—" },
          { name: "Location", spec: "Guangzhou, China", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 0,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "1.5m shishiriladigan o'yinchoq",
        shortName: "Huayue Inflatable",
        tagline: "1.5 metrli shishiriladigan o'yinchoq — $66/dona",
        description:
          "Guangzhou Huayue Inflatable Products tomonidan ishlab chiqarilgan 1.5 metrli shishiriladigan o'yinchoq. Narxi: $66/dona. Ishlab chiqaruvchi: Guangzhou Huayue Inflatable Products Co., Ltd — 2015-yildan, 6 376 m² zavod.",
      },
      ru: {
        name: "надувная игрушка 1.5м",
        shortName: "Huayue Inflatable",
        tagline: "Надувная игрушка 1.5 м — $66/шт",
        description:
          "Надувная игрушка размером 1.5 метра от Guangzhou Huayue Inflatable Products. Цена: $66/шт. Производитель: Guangzhou Huayue Inflatable Products Co., Ltd — с 2015 г., завод 6 376 м².",
      },
      en: {
        name: "1.5m inflatable toy",
        shortName: "Huayue Inflatable",
        tagline: "1.5m inflatable toy — $66/pc",
        description:
          "1.5m inflatable toy from Guangzhou Huayue Inflatable Products Co., Ltd. Unit price: $66/pc. Manufacturer established 2015, 6,376 m² factory in Guangzhou, China.",
      },
    },
  },

  // ── Shantou Wingtide Toy — $1.10/pc (O'yinchoqlar) ──────────────────────
  {
    slug: "shantou-wingtide-toys",
    modelCode: "TOY-WT",
    categorySlug: "oyinchoqlar",
    status: "in-stock",
    isFeatured: false,
    isPopular: true,
    images: wingtideToyImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 0,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Product details",
        items: [{ name: "Unit price", spec: "USD 1.10 / pc", quantity: "—" }],
      },
      {
        systemName: "Manufacturer",
        items: [
          {
            name: "Company",
            spec: "Shantou Wingtide Intelligent Technology Co., Ltd",
            quantity: "—",
          },
          { name: "Established", spec: "2015", quantity: "—" },
          { name: "Factory space", spec: "11 600 m²", quantity: "—" },
          { name: "Location", spec: "Shantou, China", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 0,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "O'yinchoqlar $1.10/dona",
        shortName: "Wingtide Toys",
        tagline: "Aqlli o'yinchoqlar — $1.10/dona",
        description:
          "Shantou Wingtide Intelligent Technology Co., Ltd tomonidan ishlab chiqarilgan o'yinchoqlar. Narxi: $1.10/dona. Ishlab chiqaruvchi: 2015-yildan, 11 600 m² zavod.",
      },
      ru: {
        name: "Игрушки $1.10/шт",
        shortName: "Wingtide Toys",
        tagline: "Интеллектуальные игрушки — $1.10/шт",
        description:
          "Игрушки от Shantou Wingtide Intelligent Technology Co., Ltd. Цена: $1.10/шт. Производитель — с 2015 г., завод 11 600 м².",
      },
      en: {
        name: "Toys at $1.10/pc",
        shortName: "Wingtide Toys",
        tagline: "Intelligent toys — $1.10/pc",
        description:
          "Toys from Shantou Wingtide Intelligent Technology Co., Ltd. Unit price: $1.10/pc. Manufacturer established 2015, 11,600 m² factory in Shantou, China.",
      },
    },
  },

  // ── 25T Double Girder Gantry Crane — Henan Finework (Kran uskunalari) ──────
  {
    slug: "25t-double-girder-gantry-crane",
    modelCode: "MH-25T",
    categorySlug: "kran-uskunalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: cranImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "—",
      priceUsdExw: 0,
      deliveryWorkingDays: 30,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Technical specifications",
        items: [
          { name: "Type", spec: "Double girder gantry crane", quantity: "—" },
          { name: "Lifting capacity", spec: "25 T", quantity: "—" },
          { name: "Drive type", spec: "Electric", quantity: "—" },
          { name: "Standard", spec: "GB/T 14406", quantity: "—" },
          { name: "Certification", spec: "ISO 9001", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Henan Finework Crane Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2016", quantity: "—" },
          { name: "Factory space", spec: "70 000 m²", quantity: "—" },
          { name: "Location", spec: "Henan, China", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 150,
        buyerCovers: ["round-trip air tickets", "hotel", "food", "local transportation"],
      },
    },
    i18n: {
      uz: {
        name: "25 tonna ikki balkali kozlovoy kran",
        shortName: "25T Gantry Crane",
        tagline: "25 tonna yuk ko'tarish — sanoat va qurilish uchun ko'prik krani",
        description:
          "25 tonna ko'tarish quvvatiga ega ikki balkali kozlovoy (gantry) kran. Sanoat korxonalari, omborlar va qurilish maydonlari uchun mo'ljallangan elektr haydovchi ko'targich. GB/T 14406 standarti va ISO 9001 sertifikatiga ega. Ishlab chiqaruvchi: Henan Finework Crane Co., Ltd — 2016-yildan, 70 000 m² zavod.",
      },
      ru: {
        name: "Козловой кран 25 тонн, двухбалочный",
        shortName: "25T Gantry Crane",
        tagline: "25 тонн грузоподъёмности — мостовой кран для промышленности",
        description:
          "Двухбалочный козловой кран грузоподъёмностью 25 тонн. Предназначен для промышленных предприятий, складов и строительных площадок. Электрический привод, стандарт GB/T 14406, сертификат ISO 9001. Производитель: Henan Finework Crane Co., Ltd — с 2016 г., завод 70 000 м².",
      },
      en: {
        name: "25-ton double-girder gantry crane",
        shortName: "25T Gantry Crane",
        tagline: "25-ton lifting capacity — industrial double girder gantry crane",
        description:
          "25-ton double-girder gantry crane for industrial facilities, warehouses, and construction sites. Electric drive, compliant with GB/T 14406 standard and ISO 9001 certified. Manufacturer: Henan Finework Crane Co., Ltd — established 2016, 70,000 m² facility in Henan, China.",
      },
    },
  },

  // ── FHG170 Toy Factory Setup — Ningbo Fuhong (Maxsus texnikalar) ─────────
  {
    slug: "fhg170-injection-molding-toy-factory",
    modelCode: "FHG170",
    categorySlug: "oyinchoqlar",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: toyFactoryImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 8.8,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "Servo motor",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 4750, w: 1300, h: 1650 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 14844,
      deliveryWorkingDays: 50,
      paymentTerms: "40% T/T deposit / 60% T/T before shipment",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Injection unit — FHG170",
        items: [
          { name: "Screw diameter", spec: "45 mm", quantity: "—" },
          { name: "Screw L/D ratio", spec: "20.4", quantity: "—" },
          { name: "Injection volume", spec: "334 cm³", quantity: "—" },
          { name: "Shot weight (PS)", spec: "304 g", quantity: "—" },
          { name: "Injection speed", spec: "135 g/s", quantity: "—" },
          { name: "Injection pressure", spec: "159 MPa", quantity: "—" },
          { name: "Screw speed", spec: "0–180 r/min", quantity: "—" },
        ],
      },
      {
        systemName: "Clamping unit",
        items: [
          { name: "Clamping force", spec: "1 700 KN (170 ton)", quantity: "—" },
          { name: "Opening stroke", spec: "430 mm", quantity: "—" },
          { name: "Mould thickness (min–max)", spec: "200–530 mm", quantity: "—" },
          { name: "Space between tie-bars", spec: "470 × 470 mm", quantity: "—" },
          { name: "Ejector force", spec: "33 KN", quantity: "—" },
          { name: "Ejector stroke", spec: "130 mm", quantity: "—" },
        ],
      },
      {
        systemName: "Other parameters",
        items: [
          { name: "Pump pressure", spec: "16 MPa", quantity: "—" },
          { name: "Motor power", spec: "8.8 kW", quantity: "—" },
          { name: "Heating power", spec: "8.8 kW", quantity: "—" },
          { name: "Machine dimension (L×W×H)", spec: "4.75 × 1.30 × 1.65 m", quantity: "—" },
          { name: "Machine weight", spec: "4.5 ton", quantity: "—" },
          { name: "Power supply", spec: "380V / 50Hz / 3-phase", quantity: "—" },
          { name: "Certification", spec: "CE, ISO 9001:2000", quantity: "—" },
        ],
      },
      {
        systemName: "Component brands",
        items: [
          { name: "Controller", spec: "EST (Eastcom) — China", quantity: "1 yr" },
          { name: "Servo driver & motor", spec: "INOVANCE — China", quantity: "1 yr" },
          { name: "Contactor", spec: "Schneider — France", quantity: "1 yr" },
          { name: "Main valve", spec: "YUKEN / VICKERS — Japan/USA", quantity: "1 yr" },
          { name: "Oil seal", spec: "HALLITE — UK", quantity: "2 yr" },
          { name: "Screw & barrel", spec: "38CrMoAl", quantity: "6 mo" },
        ],
      },
      {
        systemName: "Price list (complete factory setup)",
        items: [
          { name: "FHG170 injection molding machine", spec: "USD 14,844", quantity: "1 set" },
          { name: "Auto loader 750G (optional)", spec: "USD 203", quantity: "1 set" },
          { name: "Hopper dryer 75KG (optional)", spec: "USD 240", quantity: "1 set" },
          { name: "Air chiller ATC-5A (optional)", spec: "USD 1,155", quantity: "1 set" },
          { name: "Crusher 400KG (optional)", spec: "USD 920", quantity: "1 set" },
          { name: "Mixer 50KG (optional)", spec: "USD 365", quantity: "1 set" },
          {
            name: "Performed mold (P20, cold runner, 2 cavity)",
            spec: "USD 4,241",
            quantity: "1 set",
          },
          { name: "Total (full turnkey)", spec: "USD 21,968", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Ningbo Fuhong Machinery Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2006", quantity: "—" },
          { name: "Factory space", spec: "2 664 m²", quantity: "—" },
          {
            name: "Address",
            spec: "No.58, Lane 235 Xiufeng Road, Gaoqiao Town, Haishu District, Ningbo, China",
            quantity: "—",
          },
        ],
      },
    ],
    warranty: {
      months: 24,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 200,
        buyerCovers: ["round-trip air tickets", "hotel", "food", "local transportation"],
      },
    },
    i18n: {
      uz: {
        name: "FHG170 — O'yinchoq zavodi uchun plastik quyish mashinasi",
        shortName: "FHG170",
        tagline: "170 tonna — o'yinchoq ishlab chiqarish uchun to'liq avtomatik zavod",
        description:
          "FHG170 — 170 tonnali servo gidravlik plastik quyish mashinasi. O'yinchoq va plastik mahsulotlar ishlab chiqarish uchun to'liq zavod to'plami: quyish mashinasi ($14,844), mold (P20, 2 kavitali, $4,241), avto loader, hopper dryer, havo sovutgich, crusher va mixer bilan birga jami $21,968. Quvvat: 8.8 kW, o'lchamlari: 4.75×1.30×1.65 m, vazni 4.5 tonna. CE va ISO 9001 sertifikatlari mavjud. 2 yillik kafolat. Yetkazib berish: 50 kun. Ishlab chiqaruvchi: Ningbo Fuhong Machinery Co., Ltd — 2006-yildan beri, 2 664 m² zavod.",
      },
      ru: {
        name: "FHG170 — Термопластавтомат для производства игрушек",
        shortName: "FHG170",
        tagline: "170 тонн — полноценный завод по производству пластиковых игрушек",
        description:
          "FHG170 — 170-тонный сервогидравлический термопластавтомат. Комплект завода «под ключ»: машина ($14,844), пресс-форма P20 на 2 гнезда ($4,241), автозагрузчик, сушилка для гранул, воздушный чиллер, дробилка и смеситель — итого $21,968. Мощность 8.8 кВт, габариты 4.75×1.30×1.65 м, вес 4.5 т. Сертификаты CE, ISO 9001. Гарантия 2 года. Срок поставки 50 дней. Производитель: Ningbo Fuhong Machinery Co., Ltd — с 2006 г., завод 2 664 м².",
      },
      en: {
        name: "FHG170 — Plastic injection molding machine for toy factory",
        shortName: "FHG170",
        tagline: "170-ton servo machine — complete turnkey toy production factory",
        description:
          "The FHG170 is a 170-ton servo-hydraulic plastic injection molding machine offered as a complete turnkey toy factory: machine ($14,844) + P20 cold-runner 2-cavity mold ($4,241) + auto loader, hopper dryer, air chiller, crusher and mixer — total $21,968. Motor power: 8.8 kW, dimensions: 4.75×1.30×1.65 m, weight: 4.5 ton. CE and ISO 9001:2000 certified. 2-year warranty. Delivery within 50 days. Manufacturer: Ningbo Fuhong Machinery Co., Ltd — since 2006, 2,664 m² facility.",
      },
    },
  },

  // ── Toys — Baoding Star Dream Garden (O'yinchoqlar) ──────────────────────
  {
    slug: "baoding-star-dream-toys",
    modelCode: "TOY-SD",
    categorySlug: "oyinchoqlar",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: toysStarDreamImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 0,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Product details",
        items: [{ name: "Unit price", spec: "USD 1.96 / pc", quantity: "—" }],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Baoding Star Dream Garden Trading Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2023", quantity: "—" },
          { name: "Factory space", spec: "27 400 m²", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 0,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "O'yinchoqlar katalogi",
        shortName: "TOY-SD",
        tagline: "Dona narxi $1.96 — sifatli xitoy o'yinchoqlari",
        description:
          "Baoding Star Dream Garden Trading Co., Ltd tomonidan taqdim etilgan o'yinchoqlar katalogi. Dona narxi USD 1.96. Kompaniya 2023-yildan buyon faoliyat yuritadi, 27 400 m² maydondagi zavodda ishlab chiqariladi.",
      },
      ru: {
        name: "Каталог игрушек",
        shortName: "TOY-SD",
        tagline: "От $1.96/шт — качественные китайские игрушки",
        description:
          "Каталог игрушек от Baoding Star Dream Garden Trading Co., Ltd. Цена USD 1.96 за штуку. Компания работает с 2023 года, завод площадью 27 400 м².",
      },
      en: {
        name: "Toys catalogue",
        shortName: "TOY-SD",
        tagline: "From $1.96/pc — quality Chinese toys",
        description:
          "Toys catalogue from Baoding Star Dream Garden Trading Co., Ltd. Unit price USD 1.96/pc. Operating since 2023 from a 27,400 m² facility.",
      },
    },
  },

  // ── Toys — Linyi Deyi (O'yinchoqlar) ─────────────────────────────────────
  {
    slug: "linyi-deyi-toys",
    modelCode: "TOY-DY",
    categorySlug: "oyinchoqlar",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: toysDeiyiImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 0,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Product details",
        items: [{ name: "Unit price", spec: "USD 0.94 / pc", quantity: "—" }],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Linyi Deyi Toys Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2019", quantity: "—" },
          { name: "Factory space", spec: "3 300 m²", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 0,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "O'yinchoqlar katalogi",
        shortName: "TOY-DY",
        tagline: "Dona narxi $0.94 — sifatli xitoy o'yinchoqlari",
        description:
          "Linyi Deyi Toys Co., Ltd tomonidan ishlab chiqarilgan o'yinchoqlar katalogi. Dona narxi USD 0.94. Kompaniya 2019-yildan buyon faoliyat yuritadi, 3 300 m² maydondagi zavodda ishlab chiqariladi.",
      },
      ru: {
        name: "Каталог игрушек",
        shortName: "TOY-DY",
        tagline: "От $0.94/шт — качественные китайские игрушки",
        description:
          "Каталог игрушек от Linyi Deyi Toys Co., Ltd. Цена USD 0.94 за штуку. Компания работает с 2019 года, завод площадью 3 300 м².",
      },
      en: {
        name: "Toys catalogue",
        shortName: "TOY-DY",
        tagline: "From $0.94/pc — quality Chinese toys",
        description:
          "Toys catalogue from Linyi Deyi Toys Co., Ltd. Unit price USD 0.94/pc. The company has been operating since 2019 from a 3,300 m² facility.",
      },
    },
  },

  // ── Toys — Yiwu Jinxin (Maxsus texnikalar) ───────────────────────────────
  {
    slug: "yiwu-jinxin-toys",
    modelCode: "TOY-JX",
    categorySlug: "oyinchoqlar",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: toysImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 0,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Product details",
        items: [{ name: "Unit price", spec: "USD 0.11 / pc", quantity: "—" }],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Yiwu Jinxin Toys Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2001", quantity: "—" },
          { name: "Factory space", spec: "12 050 m²", quantity: "—" },
          { name: "Experience", spec: "24 years", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 0,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "O'yinchoqlar katalogi",
        shortName: "TOY-JX",
        tagline: "Dona narxi $0.11 — sifatli xitoy o'yinchoqlari",
        description:
          "Yiwu Jinxin Toys Co., Ltd tomonidan ishlab chiqarilgan o'yinchoqlar katalogi. Dona narxi USD 0.11 dan boshlanadi. Kompaniya 2001-yildan buyon 24 yillik tajribaga ega, 12 050 m² maydondagi zavodda faoliyat yuritadi.",
      },
      ru: {
        name: "Каталог игрушек",
        shortName: "TOY-JX",
        tagline: "От $0.11/шт — качественные китайские игрушки",
        description:
          "Каталог игрушек от Yiwu Jinxin Toys Co., Ltd. Цена от USD 0.11 за штуку. Компания работает с 2001 года, 24-летний опыт, завод площадью 12 050 м².",
      },
      en: {
        name: "Toys catalogue",
        shortName: "TOY-JX",
        tagline: "From $0.11/pc — quality Chinese toys",
        description:
          "Toys catalogue from Yiwu Jinxin Toys Co., Ltd. Unit price from USD 0.11/pc. The company has been operating since 2001 with 24 years of experience from a 12,050 m² facility.",
      },
    },
  },

  // ── CIL-AS-699 Pocket Tissue Production Line (Tualet qog'oz liniyalari) ──
  {
    slug: "cil-as-699-pocket-tissue-paper-production-line",
    modelCode: "CIL-AS-699",
    categorySlug: "tualet-qogoz-liniyalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: cilAs699Images,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 5.5,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "Vacuum adsorb folding",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 2840, w: 2650, h: 1720 },
    },
    commercial: {
      containerType: "Seaworthy wooden packing",
      priceUsdExw: 45000,
      deliveryWorkingDays: 75,
      paymentTerms: "30% T/T down payment / 70% T/T before shipment",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Folding machine (CIL-MFT-21C)",
        items: [
          { name: "Designed speed", spec: "800–1 200 pcs/min", quantity: "—" },
          { name: "Stable production speed", spec: "800–1 000 pcs/min", quantity: "—" },
          { name: "Main machine power", spec: "5.5 kW", quantity: "—" },
          { name: "Blower power", spec: "5.5 kW", quantity: "—" },
          { name: "Air pressure", spec: "≥ 0.6 MPa", quantity: "—" },
          {
            name: "Final product — Mini",
            spec: "75 × 52 mm (opening 210 × 210 mm)",
            quantity: "—",
          },
          {
            name: "Final product — Standard",
            spec: "105 × 52 mm (opening 210 × 210 mm)",
            quantity: "—",
          },
          { name: "Weight", spec: "≈ 1 300 kg", quantity: "—" },
        ],
      },
      {
        systemName: "Packing machine (individual bags)",
        items: [
          { name: "Packing size — Standard", spec: "106 × 53 × 26 mm / 10 sheets", quantity: "—" },
          { name: "Packing size — Mini", spec: "72 × 53 × 26 mm / 10 sheets", quantity: "—" },
          { name: "Packing film width — Standard", spec: "150 mm", quantity: "—" },
          { name: "Packing film width — Mini", spec: "116 mm", quantity: "—" },
          { name: "Speed", spec: "50–80 bags/min", quantity: "—" },
          { name: "Overall size (L×W×H)", spec: "2 840 × 2 650 × 1 720 mm", quantity: "—" },
          { name: "Main motor power", spec: "1.1 kW", quantity: "—" },
          { name: "Side-sealing motor power", spec: "0.18 kW", quantity: "—" },
          { name: "Heating power", spec: "3.4 kW", quantity: "—" },
          { name: "Power supply", spec: "4.5 kW / 380V 50Hz", quantity: "—" },
          { name: "Air pressure", spec: "0.3–0.4 MPa", quantity: "—" },
          { name: "Weight", spec: "≈ 1 500 kg", quantity: "—" },
        ],
      },
      {
        systemName: "Medium bag packing machine (CIL-AS-330-A)",
        items: [
          { name: "Speed", spec: "22–42 bags/min", quantity: "—" },
          { name: "Max film width", spec: "≤ 330 mm", quantity: "—" },
          { name: "Packing size", spec: "(50–300) × (40–180) × (10–90) mm", quantity: "—" },
          { name: "Outline dimension", spec: "2 350 × 900 × 1 650 mm", quantity: "—" },
          { name: "Power consumption", spec: "6.6 kW / 380V 50Hz", quantity: "—" },
          { name: "Air pressure", spec: "0.5 MPa", quantity: "—" },
          { name: "Shrink film", spec: "CPP, PE, BOPP (double-sided hot sealing)", quantity: "—" },
          { name: "Machine weight", spec: "750 kg", quantity: "—" },
        ],
      },
      {
        systemName: "Key features",
        items: [
          { name: "Embossing", spec: "Clear embossing design on raw paper", quantity: "—" },
          {
            name: "Tension control",
            spec: "Rolling tension control for variable raw paper",
            quantity: "—",
          },
          {
            name: "Edge finish",
            spec: "Mill edge infolding for elegant appearance",
            quantity: "—",
          },
          { name: "Cutting", spec: "Screw turning knife for easy adjustment", quantity: "—" },
          { name: "Folding method", spec: "Vacuum folding format", quantity: "—" },
          {
            name: "Printing option",
            spec: "Single or double colour printing available",
            quantity: "—",
          },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Quanzhou Xinda Machinery Co., Ltd", quantity: "—" },
          { name: "Established", spec: "1997", quantity: "—" },
          { name: "Experience", spec: "28 years", quantity: "—" },
          {
            name: "Address",
            spec: "No.589 Nanhuan Road, Yuxia Community, Jinlong Street, Licheng Zone, Quanzhou City, Fujian, China",
            quantity: "—",
          },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 150,
        buyerCovers: ["round-trip air tickets", "hotel", "food", "local traffic"],
      },
    },
    i18n: {
      uz: {
        name: "CIL-AS-699 — To'liq avtomatik cho'ntak salfetka ishlab chiqarish liniyasi",
        shortName: "CIL-AS-699",
        tagline: "Minutiga 1200 dona — cho'ntak salfetka burish, qadoqlash va o'rash liniyasi",
        description:
          "CIL-AS-699 — cho'ntak to'qima qog'oz mahsulotlari uchun to'liq avtomatik ishlab chiqarish liniyasi. Vakuum yordamida burish tizimi, minutiga 800–1200 dona tezlik, 5.5 kW quvvat. Mini (75×52 mm) va standart (105×52 mm) o'lchamlarda mahsulot ishlab chiqaradi. Liniya tarkibiga individual qadoqlash mashinasi (50–80 sumka/min) va o'rta sumka qadoqlash mashinasi (22–42 sumka/min) kiradi. FOB Xiamen narxi: USD 45 000. Yetkazib berish muddati: to'lov olgandan so'ng 70–80 kun. Ishlab chiqaruvchi: Quanzhou Xinda Machinery Co., Ltd — 1997-yildan beri 28 yillik tajriba.",
      },
      ru: {
        name: "CIL-AS-699 — Полностью автоматическая линия производства карманных салфеток",
        shortName: "CIL-AS-699",
        tagline: "1 200 шт/мин — линия фальцовки, упаковки и обёртки карманных салфеток",
        description:
          "CIL-AS-699 — полностью автоматическая производственная линия для карманных бумажных салфеток. Вакуумная фальцовка, скорость 800–1 200 шт/мин, мощность 5.5 кВт. Форматы: мини 75×52 мм и стандарт 105×52 мм. В состав линии входят машина поштучной упаковки (50–80 пакетов/мин) и машина групповой упаковки (22–42 пакетов/мин). Цена FOB Сямэнь: USD 45 000. Срок изготовления: 70–80 дней после предоплаты. Производитель: Quanzhou Xinda Machinery Co., Ltd — 28 лет опыта с 1997 г.",
      },
      en: {
        name: "CIL-AS-699 — Full-automatic pocket tissue paper production line",
        shortName: "CIL-AS-699",
        tagline: "1,200 pcs/min — folding, individual packing and medium bag packing line",
        description:
          "The CIL-AS-699 is a complete fully-automatic pocket tissue paper production line combining a high-speed vacuum-fold machine (800–1,200 pcs/min, 5.5 kW) with an individual packing machine (50–80 bags/min) and medium bag packing machine (22–42 bags/min). Produces mini (75×52 mm) and standard (105×52 mm) formats with optional single or double-colour printing. FOB Xiamen price: USD 45,000. Delivery: 70–80 days after down payment. Manufacturer: Quanzhou Xinda Machinery Co., Ltd — 28 years of experience since 1997.",
      },
    },
  },

  // ── HT-500 Stretch Film Rewinding & Slitting (Strech klyonka) ────────────
  {
    slug: "ht-500-stretch-film-rewinding-slitting-machine",
    modelCode: "HT-500",
    categorySlug: "strech-klyonka",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: ht500Images,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 1.5,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "By hand",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 1400, w: 1100, h: 1100 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 2300,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "Blue / Orange / Yellow / Green — as requested",
    },
    configuration: [
      {
        systemName: "Technical specifications",
        items: [
          { name: "Finished product width", spec: "500 mm", quantity: "—" },
          { name: "Motor power", spec: "1.5 / 2.2 kW", quantity: "—" },
          { name: "Linear speed", spec: "400–600 m/min", quantity: "—" },
          { name: "Roll laying mode", spec: "By hand", quantity: "—" },
          { name: "Parent roll diameter (max)", spec: "φ400 mm", quantity: "—" },
          { name: "Parent roll width (max)", spec: "500 mm", quantity: "—" },
          { name: "Parent roll core", spec: '3"', quantity: "—" },
          { name: "Sub-roll width", spec: "30–500 mm", quantity: "—" },
          { name: "Sub-roll diameter (max)", spec: "φ300 mm", quantity: "—" },
          { name: "Sub-roll core", spec: '3", 2", 1.5", 1"', quantity: "—" },
          { name: "Overall dimensions (L×W×H)", spec: "1400 × 1100 × 1100 mm", quantity: "—" },
          { name: "Weight", spec: "700 kg", quantity: "—" },
        ],
      },
      {
        systemName: "Pricing",
        items: [
          { name: "Machine price (EXW)", spec: "USD 2 300", quantity: "—" },
          { name: "Wooden case packaging", spec: "USD 100", quantity: "—" },
          { name: "Transport to Ningbo port", spec: "USD 100", quantity: "—" },
          { name: "Warehouse entry fee", spec: "USD 50", quantity: "—" },
          { name: "Export customs cost", spec: "USD 250", quantity: "—" },
          { name: "FOB Ningbo price", spec: "USD 2 800", quantity: "—" },
        ],
      },
      {
        systemName: "Optional accessories",
        items: [
          {
            name: "Air shaft roller 500 mm",
            spec: "USD 80/pc (2 pcs per size)",
            quantity: "Optional",
          },
          {
            name: "Air shaft roller 1000 mm",
            spec: "USD 150/pc (2 pcs per size)",
            quantity: "Optional",
          },
        ],
      },
      {
        systemName: "Certifications",
        items: [
          { name: "CE Certificate", spec: "Machinery Directive 2006/42/EC", quantity: "—" },
          { name: "Standard", spec: "EN ISO 12100:2010; EN 60204-1:2018", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Ruian Hengtuo Machinery Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2016", quantity: "—" },
          { name: "Factory space", spec: "5 000 m²", quantity: "—" },
          { name: "Experience", spec: "5 years", quantity: "—" },
          {
            name: "Address",
            spec: "XiaWan Industrial Zone, PanDai Street, Ruian City, Zhejiang, China",
            quantity: "—",
          },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HT-500 — Strech plyonkani o'rash va kesish mashinasi",
        shortName: "HT-500",
        tagline: "Katta rulondan kichik rulonlarga qayta o'rash va kesish",
        description:
          "HT-500 — strech plyonkani qayta o'rash va kesish uchun ko'p funksiyali mashina. Katta jumbo rulonlarni 30–500 mm kenglikdagi kichik rulonlarga kesadi. Tezligi 400–600 m/min, quvvati 1.5/2.2 kW. O'lchamlari: 1400×1100×1100 mm, vazni 700 kg. Mashinaning rangi buyurtmaga ko'ra tanlanadi (ko'k, to'q sariq, sariq, yashil). CE sertifikatiga ega. EXW narxi: USD 2 300, FOB Ningbo: USD 2 800. Ishlab chiqaruvchi: Ruian Hengtuo Machinery Co., Ltd — 2016-yildan beri 5 yillik tajriba, 5 000 m² zavod.",
      },
      ru: {
        name: "HT-500 — Машина для перемотки и нарезки стрейч-плёнки",
        shortName: "HT-500",
        tagline: "Перемотка джамбо-рулонов в малые рулоны с онлайн-нарезкой",
        description:
          "HT-500 — многофункциональная машина для перемотки и нарезки стрейч-плёнки. Режет крупные рулоны на малые шириной 30–500 мм. Скорость 400–600 м/мин, мощность 1.5/2.2 кВт. Габариты: 1400×1100×1100 мм, вес 700 кг. Цвет по запросу. Сертификат CE. Цена EXW: USD 2 300, FOB Ningbo: USD 2 800. Производитель: Ruian Hengtuo Machinery Co., Ltd — 5 лет опыта с 2016 г., завод 5 000 м².",
      },
      en: {
        name: "HT-500 — Stretch film rewinding and slitting machine",
        shortName: "HT-500",
        tagline: "Rewind jumbo rolls into small rolls with online slitting",
        description:
          "The HT-500 is a multi-functional stretch film rewinding and slitting machine that cuts large jumbo rolls into small rolls 30–500 mm wide. Speed: 400–600 m/min, power: 1.5/2.2 kW. Dimensions: 1400×1100×1100 mm, weight: 700 kg. Machine color available in blue, orange, yellow or green on request. CE certified. EXW price: USD 2,300 — FOB Ningbo: USD 2,800. Manufacturer: Ruian Hengtuo Machinery Co., Ltd — 5 years of experience since 2016, 5,000 m² facility.",
      },
    },
  },

  // ── Vegetable Slicer (Oziq ovqat uskunalari) ─────────────────────────────
  {
    slug: "vegetable-slicer-300kg",
    modelCode: "VS-300",
    categorySlug: "oziq-ovqat-uskunalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: vegetableSlicerImages,
    spec: {
      productivity: { value: 300, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 1.5,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 350, w: 490, h: 600 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 246,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Machine specifications",
        items: [
          { name: "Dimensions (L×W×H)", spec: "350 × 490 × 600 mm", quantity: "—" },
          { name: "Voltage", spec: "220V 50Hz", quantity: "—" },
          { name: "Power", spec: "1.5 kW", quantity: "—" },
          { name: "Output", spec: "300 kg/h", quantity: "—" },
          { name: "Weight", spec: "45 kg", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          { name: "Company", spec: "Zhongji Metal Products Co., Ltd", quantity: "—" },
          { name: "Established", spec: "2021", quantity: "—" },
          { name: "Factory space", spec: "4 000 m²", quantity: "—" },
          { name: "Experience", spec: "5 years", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "Sabzavot kesish mashinasi VS-300",
        shortName: "VS-300",
        tagline: "Soatiga 300 kg — tez va ishonchli sabzavot kesish",
        description:
          "VS-300 sabzavot kesish mashinasi oziq-ovqat korxonalari uchun mo'ljallangan. 220V 50Hz tarmoqda ishlaydi, 1.5 kW quvvat bilan soatiga 300 kg sabzavotni qayta ishlaydi. O'lchamlari: 350×490×600 mm, vazni 45 kg. Ishlab chiqaruvchi: Zhongji Metal Products Co., Ltd — 2021-yildan beri 5 yillik tajriba, 4 000 m² zavod maydoni.",
      },
      ru: {
        name: "Овощерезка VS-300",
        shortName: "VS-300",
        tagline: "300 кг/ч — быстрая и надёжная нарезка овощей",
        description:
          "Овощерезка VS-300 предназначена для предприятий пищевой промышленности. Работает от сети 220V 50Hz, мощность 1.5 кВт, производительность 300 кг/ч. Габариты: 350×490×600 мм, вес 45 кг. Производитель: Zhongji Metal Products Co., Ltd — 5 лет опыта с 2021 г., площадь завода 4 000 м².",
      },
      en: {
        name: "Vegetable slicer VS-300",
        shortName: "VS-300",
        tagline: "300 kg/h — fast and reliable vegetable slicing",
        description:
          "The VS-300 vegetable slicer is designed for food processing enterprises. Operates on 220V 50Hz, 1.5 kW power, output 300 kg/h. Dimensions: 350×490×600 mm, weight 45 kg. Manufacturer: Zhongji Metal Products Co., Ltd — 5 years of experience since 2021, 4,000 m² factory.",
      },
    },
  },

  // ── 3-Deck electric oven (Oziq ovqat uskunalari) ─────────────────────────
  {
    slug: "3-deck-12-tray-electric-oven",
    modelCode: "3D12T-380V",
    categorySlug: "oziq-ovqat-uskunalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: duxovkaImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 25.2,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 1660, w: 820, h: 1530 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 839,
      deliveryWorkingDays: 25,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Machine specifications",
        items: [
          { name: "Product dimensions (L×W×H)", spec: "1660 × 820 × 1530 mm", quantity: "—" },
          { name: "Inner chamber (L×W×H)", spec: "1300 × 640 × 215 mm", quantity: "—" },
          { name: "Decks / trays", spec: "3 decks, 12 trays", quantity: "—" },
          { name: "Voltage", spec: "380V", quantity: "—" },
          { name: "Power", spec: "25.2 kW", quantity: "—" },
          { name: "Temperature range", spec: "Room temperature – 400°C", quantity: "—" },
          { name: "Net weight", spec: "300 kg", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          {
            name: "Company",
            spec: "Luohe Nine Lemon Import / Export Co., Ltd",
            quantity: "—",
          },
          { name: "Established", spec: "2019-08-19", quantity: "—" },
          { name: "Factory space", spec: "101 m²", quantity: "—" },
          { name: "Experience", spec: "6 years", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "3 qavatli 12 tava elektr pech",
        shortName: "3D12T-380V",
        tagline: "Konditeriya va oziq-ovqat ishlab chiqarish uchun professional pech",
        description:
          "3 qavatli, 12 tavalik elektr pech — nonvoyxona, kafe va oziq-ovqat korxonalari uchun. Mahsulot o'lchamlari: 1660×820×1530 mm, ichki kamera: 1300×640×215 mm. 380V tarmoq, 25.2 kW quvvat, harorat: xonadan 400°C gacha, sof vazni 300 kg. EXW narxi: USD 839. Ishlab chiqaruvchi: Luohe Nine Lemon Import / Export Co., Ltd — 2019-08-19 dan beri 6 yillik tajriba, 101 m² maydon.",
      },
      ru: {
        name: "Электрическая печь 3 яруса, 12 противней",
        shortName: "3D12T-380V",
        tagline: "Профессиональная печь для пищевого и кондитерского производства",
        description:
          "Электрическая печь на 3 яруса и 12 противней для пекарен, кафе и пищевых предприятий. Габариты: 1660×820×1530 мм, камера: 1300×640×215 мм. Сеть 380V, мощность 25.2 кВт, температура от комнатной до 400°C, вес нетто 300 кг. Цена EXW: USD 839. Производитель: Luohe Nine Lemon Import / Export Co., Ltd — 6 лет опыта с 19.08.2019, площадь 101 м².",
      },
      en: {
        name: "3-Deck 12-Tray Electric Oven",
        shortName: "3D12T-380V",
        tagline: "Professional oven for bakery and food production",
        description:
          "3-deck, 12-tray electric oven for bakeries, cafes and food enterprises. Product dimensions: 1660×820×1530 mm, inner chamber: 1300×640×215 mm. 380V supply, 25.2 kW power, temperature room to 400°C, net weight 300 kg. EXW price: USD 839. Manufacturer: Luohe Nine Lemon Import / Export Co., Ltd — 6 years of experience since 2019-08-19, 101 m² facility.",
      },
    },
  },

  // ── Flamemax 3-deck oven (Oziq ovqat uskunalari) ─────────────────────────
  {
    slug: "flamemax-heo-30-3-electric-baking-oven",
    modelCode: "HEO-30-3",
    categorySlug: "oziq-ovqat-uskunalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: duxovkaFlamemaxImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 28.8,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 1670, w: 900, h: 1300 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 830,
      deliveryWorkingDays: 25,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Machine specifications",
        items: [
          { name: "Model", spec: "HEO-30-3 — Electric baking oven", quantity: "—" },
          {
            name: "Product dimensions (L×W×H)",
            spec: "1670 × 900 × 1300 (+120) mm",
            quantity: "—",
          },
          { name: "Inner chamber (L×W×H)", spec: "1300 × 690 × 200 mm", quantity: "—" },
          { name: "Packing size (L×W×H)", spec: "1910 × 1010 × 1780 mm", quantity: "—" },
          { name: "Decks / trays", spec: "3 decks, 9 trays", quantity: "—" },
          { name: "Voltage", spec: "380V / 50Hz", quantity: "—" },
          { name: "Power", spec: "28.8 kW", quantity: "—" },
          { name: "Net / gross weight", spec: "273 / 321 kg", quantity: "—" },
          { name: "Volume", spec: "3.434 CBM", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          {
            name: "Company",
            spec: "Foshan Nanhai Flamemax Catering Equipment Co., Ltd",
            quantity: "—",
          },
          { name: "Established", spec: "2014", quantity: "—" },
          { name: "Factory space", spec: "15 000 m²", quantity: "—" },
          { name: "Experience", spec: "11 years", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "Flamemax HEO-30-3 — 3 qavatli 9 tava elektr pech",
        shortName: "HEO-30-3",
        tagline: "Nonvoyxona va katering uchun Flamemax professional pech",
        description:
          "HEO-30-3 modeli — 3 qavatli, 9 tavalik elektr pishirish pechi. O'lchamlari: 1670×900×1300 mm (+120), ichki kamera: 1300×690×200 mm. 380V/50Hz, 28.8 kW quvvat, sof vazni 273 kg. EXW narxi: USD 830. Ishlab chiqaruvchi: Foshan Nanhai Flamemax Catering Equipment Co., Ltd — 2014-yildan beri 11 yillik tajriba, 15 000 m² zavod.",
      },
      ru: {
        name: "Flamemax HEO-30-3 — Электропечь 3 яруса, 9 противней",
        shortName: "HEO-30-3",
        tagline: "Профессиональная печь Flamemax для пекарен и кейтеринга",
        description:
          "Модель HEO-30-3 — электрическая печь на 3 яруса и 9 противней. Габариты: 1670×900×1300 мм (+120), камера: 1300×690×200 мм. Сеть 380V/50Hz, мощность 28.8 кВт, вес нетто 273 кг. Цена EXW: USD 830. Производитель: Foshan Nanhai Flamemax Catering Equipment Co., Ltd — 11 лет опыта с 2014 г., завод 15 000 м².",
      },
      en: {
        name: "Flamemax HEO-30-3 — 3-Deck 9-Tray Electric Baking Oven",
        shortName: "HEO-30-3",
        tagline: "Flamemax professional oven for bakery and catering",
        description:
          "HEO-30-3 electric baking oven with 3 decks and 9 trays. Product dimensions: 1670×900×1300 mm (+120), inner chamber: 1300×690×200 mm. 380V/50Hz supply, 28.8 kW power, net weight 273 kg. EXW price: USD 830. Manufacturer: Foshan Nanhai Flamemax Catering Equipment Co., Ltd — 11 years of experience since 2014, 15,000 m² facility.",
      },
    },
  },

  // ── Shineworld wire insulation line (Sim kabel liniyalari) ────────────────
  {
    slug: "shineworld-swmex7045-wire-insulation-line",
    modelCode: "SWMEX7045",
    categorySlug: "sim-kabel-liniyalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: kabelSimImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 45,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 0,
      deliveryWorkingDays: 60,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Line specifications",
        items: [
          {
            name: "Model",
            spec: "SWMEX7045 (SWEX7045PL) — High speed wire insulation line",
            quantity: "—",
          },
          {
            name: "Application",
            spec: "PVC / PE / XLPE cable insulation extrusion",
            quantity: "—",
          },
          { name: "Input wire diameter", spec: "Φ1–Φ4 mm (1–6 mm²)", quantity: "—" },
          { name: "Finished cable diameter", spec: "Φ2–Φ5 mm", quantity: "—" },
          { name: "Max line speed", spec: "350 m/min (1 mm²)", quantity: "—" },
          { name: "PVC extrusion output", spec: "≤180 kg/h", quantity: "—" },
          {
            name: "Main extruders",
            spec: "EX70-26 (30 kW) + EX45-26 strip/skin (15 kW)",
            quantity: "—",
          },
          { name: "Power supply", spec: "380V 50Hz (per customer standard)", quantity: "—" },
          { name: "Power consumption", spec: "≈65 kWh", quantity: "—" },
        ],
      },
      {
        systemName: "Main components",
        items: [
          {
            name: "Pay-off / take-up",
            spec: "PN630 mm motorized pay-off & dual-bobbin take-up",
            quantity: "—",
          },
          {
            name: "Extrusion",
            spec: "EX70-26 high speed + EX45-26 strip/skin injector",
            quantity: "—",
          },
          { name: "Crosshead", spec: "U14 — single/double layer, striping", quantity: "—" },
          {
            name: "Quality control",
            spec: "DDM-3020 diameter gauge, ST-15A spark tester",
            quantity: "—",
          },
          {
            name: "Cooling & handling",
            spec: "Stainless cooling trough, horizontal accumulator (200 m)",
            quantity: "—",
          },
          { name: "Control", spec: "Siemens PLC + HMI, Inovance drives", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          {
            name: "Company",
            spec: "Shanghai Shineworld Group Co., Ltd",
            quantity: "—",
          },
          { name: "Established", spec: "2008", quantity: "—" },
          { name: "Factory space", spec: "5 248 m²", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 100,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "Shineworld SWMEX7045 — sim-kabel izolyatsiya liniyasi",
        shortName: "SWMEX7045",
        tagline: "350 m/min — yuqori tezlikdagi sim-kabel izolyatsiyasi",
        description:
          "SWMEX7045 yuqori tezlikdagi sim-kabel izolyatsiya liniyasi — PVC, PE va XLPE kabel uchun. Kirish simi Φ1–Φ4 mm, tayyor kabel Φ2–Φ5 mm, maksimal tezlik 350 m/min, PVC ekstruziyasi 180 kg/h gacha. EX70-26 (30 kW) va EX45-26 (15 kW) ekstruderlar, Siemens PLC boshqaruvi. Ishlab chiqaruvchi: Shanghai Shineworld Group Co., Ltd — 2008-yildan, 5 248 m² zavod.",
      },
      ru: {
        name: "Shineworld SWMEX7045 — Линия изоляции провода",
        shortName: "SWMEX7045",
        tagline: "350 м/мин — высокоскоростная изоляция кабеля",
        description:
          "Линия высокоскоростной изоляции SWMEX7045 для экструзии PVC, PE и XLPE. Входной провод Φ1–Φ4 мм, готовый кабель Φ2–Φ5 мм, макс. скорость 350 м/мин, выход PVC до 180 кг/ч. Экструдеры EX70-26 (30 кВт) и EX45-26 (15 кВт), управление Siemens PLC. Производитель: Shanghai Shineworld Group Co., Ltd — с 2008 г., 5 248 м².",
      },
      en: {
        name: "Shineworld SWMEX7045 — High speed wire insulation line",
        shortName: "SWMEX7045",
        tagline: "350 m/min — high-speed cable insulation production",
        description:
          "SWMEX7045 high speed wire insulation line for PVC, PE and XLPE cable extrusion. Input wire Φ1–Φ4 mm, finished cable Φ2–Φ5 mm, max speed 350 m/min, PVC output up to 180 kg/h. EX70-26 (30 kW) and EX45-26 (15 kW) extruders with Siemens PLC control. Manufacturer: Shanghai Shineworld Group Co., Ltd — since 2008, 5,248 m² facility.",
      },
    },
  },

  // ── DaGao wire cutting & stripping (Sim kabel liniyalari) ───────────────────
  {
    slug: "dangao-xcx-905-automatic-wire-cutting-stripping-machine",
    modelCode: "XCX-905",
    categorySlug: "sim-kabel-liniyalari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: kabelSm2Images,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0.68,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 470, w: 465, h: 350 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 1150,
      deliveryWorkingDays: 25,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Machine specifications",
        items: [
          {
            name: "Model",
            spec: "XCX-905 — Automatic wire cutting & stripping machine",
            quantity: "—",
          },
          { name: "Dimensions (L×W×H)", spec: "470 × 465 × 350 mm", quantity: "—" },
          { name: "Machine weight", spec: "35 kg", quantity: "—" },
          { name: "Power supply", spec: "AC 220V (50–60 Hz)", quantity: "—" },
          { name: "Total / rated power", spec: "680 W / 400 W", quantity: "—" },
          { name: "Working speed", spec: "600–1000 pcs/h", quantity: "—" },
          { name: "Core wire cutting", spec: "2–5 core", quantity: "—" },
          { name: "Cutting length", spec: "0.1–999999.99 mm", quantity: "—" },
          { name: "Stripping precision", spec: "0.01 mm", quantity: "—" },
          { name: "Display", spec: "4.3-inch touch screen", quantity: "—" },
          { name: "Program storage", spec: "No. 00–99", quantity: "—" },
          { name: "Working air pressure", spec: "0.5–0.8 MPa", quantity: "—" },
          { name: "Blade material", spec: "Imported high-speed steel", quantity: "—" },
        ],
      },
      {
        systemName: "Stripping length range",
        items: [
          { name: "Outer sheath (end)", spec: "1–60 mm", quantity: "—" },
          { name: "Outer sheath (tail)", spec: "1–30 mm", quantity: "—" },
          { name: "Core wire (end / tail)", spec: "1–20 mm", quantity: "—" },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          {
            name: "Company",
            spec: "Dangao Automation Equipment Co., Ltd",
            quantity: "—",
          },
          { name: "Established", spec: "2024", quantity: "—" },
          { name: "Factory space", spec: "1 200 m²", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 0,
        dailyRateUsd: 0,
        buyerCovers: [],
      },
    },
    i18n: {
      uz: {
        name: "DaGao XCX-905 — sim kesish va stripper mashinasi",
        shortName: "XCX-905",
        tagline: "600–1000 dona/soat — avtomatik sim kesish va izolyatsiya yechish",
        description:
          "XCX-905 avtomatik sim kesish va stripper mashinasi — 2–5 core simlar uchun. Ish tezligi 600–1000 dona/soat, kesish uzunligi 0.1–999999.99 mm, aniqlik 0.01 mm. 220V, 680 W, o'lchami 470×465×350 mm, vazni 35 kg. EXW narxi: USD 1 150. Ishlab chiqaruvchi: Dangao Automation Equipment Co., Ltd — 2024-yildan, 1 200 m² zavod.",
      },
      ru: {
        name: "DaGao XCX-905 — Автомат для резки и зачистки провода",
        shortName: "XCX-905",
        tagline: "600–1000 шт/ч — автоматическая резка и зачистка кабеля",
        description:
          "Автомат XCX-905 для резки и зачистки провода (2–5 жил). Скорость 600–1000 шт/ч, длина реза 0.1–999999.99 мм, точность 0.01 мм. 220V, 680 Вт, габариты 470×465×350 мм, вес 35 кг. Цена EXW: USD 1 150. Производитель: Dangao Automation Equipment Co., Ltd — с 2024 г., 1 200 m².",
      },
      en: {
        name: "DaGao XCX-905 — Automatic wire cutting & stripping machine",
        shortName: "XCX-905",
        tagline: "600–1000 pcs/h — automatic wire cut and strip",
        description:
          "XCX-905 automatic wire cutting and stripping machine for 2–5 core cables. Speed 600–1000 pcs/h, cutting length 0.1–999999.99 mm, precision 0.01 mm. 220V, 680 W, dimensions 470×465×350 mm, weight 35 kg. EXW price: USD 1,150. Manufacturer: Dangao Automation Equipment Co., Ltd — since 2024, 1,200 m² facility.",
      },
    },
  },

  // ── LXSHOW fiber laser (Laser stanoklar) ──────────────────────────────────
  {
    slug: "lxshow-lx6015fc-fiber-laser-cutting-machine",
    modelCode: "LX6015FC-3000W",
    categorySlug: "laser-stanoki",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: laserStanokImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 21,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 6000, w: 1500, h: 1800 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 0,
      deliveryWorkingDays: 30,
      paymentTerms: "T/T, L/C, Alibaba Trade Assurance",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Machine specifications",
        items: [
          { name: "Model", spec: "LX6015FC — enclosed fiber laser cutter", quantity: "—" },
          { name: "Working area", spec: "6000 × 1500 mm", quantity: "—" },
          { name: "Laser power", spec: "3000W MAX fiber (optional 1–12 kW)", quantity: "—" },
          { name: "Laser head", spec: "Boci BLT310 autofocus", quantity: "—" },
          { name: "Control system", spec: "Bochu FSCUT2000E + Cypcut software", quantity: "—" },
          { name: "Max idle speed", spec: "120 m/min", quantity: "—" },
          { name: "Position accuracy", spec: "±0.05 mm/m", quantity: "—" },
          { name: "Repeat accuracy", spec: "±0.02 mm", quantity: "—" },
          {
            name: "Cutting thickness",
            spec: "≤16 mm carbon steel; ≤8 mm stainless",
            quantity: "—",
          },
          { name: "Voltage", spec: "380V / 60Hz", quantity: "—" },
          { name: "Power consumption", spec: "≤21 kW", quantity: "—" },
          { name: "Machine dimensions (L×W×H)", spec: "4200 × 2200 × 1800 mm", quantity: "—" },
          { name: "Net / gross weight", spec: "2250 / 2550 kg", quantity: "—" },
          { name: "Packing volume", spec: "20 CBM (1×20GP)", quantity: "—" },
        ],
      },
      {
        systemName: "Included equipment",
        items: [
          {
            name: "Frame",
            spec: "CE heavy-duty welded frame, cast aluminum gantry",
            quantity: "—",
          },
          {
            name: "Motion",
            spec: "Italy WKTe/PEK linear rails, Inovance/Delta servo",
            quantity: "—",
          },
          { name: "Cooling", spec: "S&A / Hanli industrial water chiller", quantity: "—" },
          { name: "Consumables", spec: "10× cutting nozzle, 5× protective mirrors", quantity: "—" },
          {
            name: "Service",
            spec: "Manual + video, 5 days free training, 24/7 online support",
            quantity: "—",
          },
        ],
      },
      {
        systemName: "Manufacturer",
        items: [
          {
            name: "Company",
            spec: "Jinan LXSHOW Laser Equipment Co., Ltd",
            quantity: "—",
          },
          { name: "Established", spec: "2004", quantity: "—" },
          { name: "Experience", spec: "20+ years in laser equipment", quantity: "—" },
          { name: "Warranty", spec: "3 years (excluding wear parts)", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 36,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 100,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "LXSHOW LX6015FC — tolqinli lazer kesish stanogi",
        shortName: "LX6015FC-3000W",
        tagline: "6000×1500 mm ish maydoni — aniq metall kesish",
        description:
          "LX6015FC tolqinli lazer kesish stanogi — 6000×1500 mm ish zonasi, 3000W MAX lazer, Bochu FSCUT2000E boshqaruv. Maksimal tezlik 120 m/min, aniqlik ±0.05 mm/m. Karbon po'latgacha 16 mm, zanglamaydigan po'latgacha 8 mm kesadi. 380V/60Hz, umumiy quvvat ≤21 kW, sof vazni 2250 kg. Yetkazib berish: 25–35 ish kuni (1×20GP). Ishlab chiqaruvchi: Jinan LXSHOW Laser Equipment Co., Ltd — 2004-yildan beri, 3 yillik kafolat.",
      },
      ru: {
        name: "LXSHOW LX6015FC — Волоконный лазерный станок",
        shortName: "LX6015FC-3000W",
        tagline: "Рабочая зона 6000×1500 мм — точная резка металла",
        description:
          "Волоконный лазерный станок LX6015FC с рабочей зоной 6000×1500 мм, лазером MAX 3000W и контроллером Bochu FSCUT2000E. Макс. холостой ход 120 м/мин, точность ±0.05 мм/м. Резка до 16 мм углеродистой и 8 мм нержавеющей стали. 380V/60Hz, потребление ≤21 кВт, вес нетто 2250 кг. Поставка: 25–35 рабочих дней (1×20GP). Производитель: Jinan LXSHOW Laser Equipment Co., Ltd — с 2004 г., гарантия 3 года.",
      },
      en: {
        name: "LXSHOW LX6015FC — Fiber laser cutting machine",
        shortName: "LX6015FC-3000W",
        tagline: "6000×1500 mm work area — precision metal cutting",
        description:
          "LX6015FC enclosed fiber laser cutter with 6000×1500 mm working area, 3000W MAX laser source and Bochu FSCUT2000E CNC. Max idle speed 120 m/min, accuracy ±0.05 mm/m. Cuts up to 16 mm carbon steel and 8 mm stainless. 380V/60Hz, power consumption ≤21 kW, net weight 2250 kg. Delivery: 25–35 working days (1×20GP). Manufacturer: Jinan LXSHOW Laser Equipment Co., Ltd — since 2004, 3-year warranty.",
      },
    },
  },

  // ── Mixer (Maxsus texnikalar) ─────────────────────────────────────────────
  {
    slug: "concrete-mixer-machine",
    modelCode: "MIXER-350",
    categorySlug: "maxsus-texnikalar",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: mixerImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×20GP",
      priceUsdExw: 0,
      deliveryWorkingDays: 20,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [],
    warranty: {
      months: 12,
      validityDays: 30,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "Mikser — Beton aralashtirgich",
        shortName: "MIXER-350",
        tagline: "Qurilish ishlari uchun ishonchli beton aralashtirgich",
        description:
          "Kichik va o'rta qurilish loyihalari uchun mo'ljallangan beton aralashtirgich. Ishonchli motor va bardoshli korpus bilan uzoq muddatli foydalanishni ta'minlaydi.",
      },
      ru: {
        name: "Миксер — бетоносмеситель",
        shortName: "MIXER-350",
        tagline: "Надёжный бетоносмеситель для строительных работ",
        description:
          "Бетоносмеситель для малых и средних строительных объектов. Надёжный двигатель и прочный корпус обеспечивают долгосрочную эксплуатацию.",
      },
      en: {
        name: "Mixer — Concrete mixer machine",
        shortName: "MIXER-350",
        tagline: "Reliable concrete mixer for construction works",
        description:
          "Concrete mixer designed for small and medium construction projects. Reliable motor and durable body ensure long-term operation.",
      },
    },
  },

  // ── Concrete batching plants ──────────────────────────────────────────────
  {
    slug: "hzs35",
    modelCode: "HZS35",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: [photoAt(0), photoAt(3), photoAt(6)],
    spec: {
      productivity: { value: 35, unit: "m³/h" },
      cycleTimeSeconds: 72,
      powerKw: 80,
      mixerModel: "JS750",
      batcherModel: "PLD1200",
      feedingModel: "Lift Hopper",
      dischargeMeters: { min: 3.8, max: 4.2 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 18360, w: 9800, h: 17600 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 0,
      deliveryWorkingDays: 15,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (5 m³)", spec: "PLD1200", quantity: "2 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Belt conveyor", quantity: "3 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS750", quantity: "1 set" },
          { name: "Lubrication system", spec: "Thick oil pump", quantity: "1 set" },
          { name: "Discharge system", spec: "Pneumatic", quantity: "1 set" },
          { name: "Wearing plate", spec: "Hard-wearing", quantity: "1 set" },
          { name: "Lift hopper", quantity: "1 set" },
          { name: "Rail rack", quantity: "1 set" },
        ],
      },
      {
        systemName: "Water weighing system",
        items: [
          { name: "Water flow-meter", quantity: "1 set" },
          { name: "Water pump", quantity: "1 set" },
          { name: "Pipe valve system", quantity: "1 set" },
        ],
      },
      {
        systemName: "Cement weighing system",
        items: [
          { name: "Cement weighing bin", quantity: "1 set" },
          { name: "Cement weigher", quantity: "1 set" },
          { name: "Butterfly valve", quantity: "1 set" },
        ],
      },
      {
        systemName: "Additive weighing system",
        items: [
          { name: "Additive weighing bin", quantity: "1 set" },
          { name: "Pipeline", quantity: "1 set" },
          { name: "Weighing sensor", quantity: "1 set" },
          { name: "Butterfly valve", quantity: "1 set" },
        ],
      },
      {
        systemName: "Pneumatic system",
        items: [
          { name: "Air compressor", quantity: "1 set" },
          { name: "Electromagnetic valve", quantity: "1 set" },
          { name: "Pipeline system", quantity: "1 set" },
        ],
      },
      {
        systemName: "Electric control system",
        items: [
          { name: "Current cabinet", quantity: "1 set" },
          { name: "Control computer", quantity: "1 set" },
          { name: "Contactor", quantity: "1 set" },
          { name: "Autoswitch", quantity: "1 set" },
          { name: "Weighing transmitter", quantity: "1 set" },
        ],
      },
      {
        systemName: "Accessories",
        items: [
          { name: "Screw conveyor", spec: "¢219", quantity: "1 set" },
          { name: "Cement silo", spec: "100T", quantity: "1 set" },
        ],
      },
    ],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: {
        engineersOnSite: 2,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HZS35 — Beton zavodi",
        shortName: "HZS35",
        tagline: "O'rta hajmdagi qurilish loyihalari uchun soatiga 35 m³ beton",
        description:
          "Vericore Global tomonidan taqdim etiladigan HZS35 — modulli beton ishlab chiqarish zavodi. JS750 mikser va PLD1200 dozator bilan jihozlangan, soatiga 35 m³ beton ishlab chiqaradi. Kichik va o'rta qurilish loyihalari uchun ideal yechim.",
      },
      ru: {
        name: "HZS35 — Бетонный завод",
        shortName: "HZS35",
        tagline: "35 м³/ч бетона для средних строительных объектов",
        description:
          "HZS35 от Vericore Global — модульный бетонный завод с миксером JS750 и дозатором PLD1200. Производительность 35 м³/ч, идеален для малых и средних строительных проектов.",
      },
      en: {
        name: "HZS35 — Concrete Batching Plant",
        shortName: "HZS35",
        tagline: "35 m³/h concrete output for medium-scale construction",
        description:
          "The HZS35 from Vericore Global is a modular concrete batching plant equipped with a JS750 mixer and PLD1200 batcher. Producing 35 m³/h, it is the ideal solution for small and medium construction projects.",
      },
    },
  },
  {
    slug: "hzs50",
    modelCode: "HZS50",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: true,
    isPopular: true,
    images: [photoAt(1), photoAt(4), photoAt(7)],
    spec: {
      productivity: { value: 50, unit: "m³/h" },
      cycleTimeSeconds: 72,
      powerKw: 100,
      mixerModel: "JS1000",
      batcherModel: "PLD1600",
      feedingModel: "Lift Hopper",
      dischargeMeters: { min: 3.8, max: 4.2 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 18360, w: 9800, h: 17600 },
    },
    commercial: {
      containerType: "1×40HQ",
      priceUsdExw: 0,
      deliveryWorkingDays: 15,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (8 m³)", spec: "PLD1600", quantity: "3 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Belt conveyor", quantity: "3 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS1000", quantity: "1 set" },
          { name: "Lubrication system", spec: "Thick oil pump", quantity: "1 set" },
          { name: "Discharge system", spec: "Pneumatic", quantity: "1 set" },
          { name: "Wearing plate", spec: "Hard-wearing", quantity: "1 set" },
          { name: "Lift hopper", quantity: "1 set" },
          { name: "Rail rack", quantity: "1 set" },
        ],
      },
      {
        systemName: "Water weighing system",
        items: [
          { name: "Water flow-meter", quantity: "1 set" },
          { name: "Water pump", quantity: "1 set" },
          { name: "Pipe valve system", quantity: "1 set" },
        ],
      },
      {
        systemName: "Cement weighing system",
        items: [
          { name: "Cement weighing bin", quantity: "1 set" },
          { name: "Cement weigher", quantity: "1 set" },
          { name: "Butterfly valve", quantity: "1 set" },
        ],
      },
      {
        systemName: "Additive weighing system",
        items: [
          { name: "Additive weighing bin", quantity: "1 set" },
          { name: "Pipeline", quantity: "1 set" },
          { name: "Weighing sensor", quantity: "1 set" },
          { name: "Butterfly valve", quantity: "1 set" },
        ],
      },
      {
        systemName: "Pneumatic system",
        items: [
          { name: "Air compressor", spec: "HTA-100", quantity: "1 set" },
          { name: "Electromagnetic valve", quantity: "1 set" },
          { name: "Pipeline system", quantity: "1 set" },
        ],
      },
      {
        systemName: "Electric control system",
        items: [
          { name: "Current cabinet", quantity: "1 set" },
          { name: "Control computer", quantity: "1 set" },
          { name: "Contactor", quantity: "1 set" },
          { name: "Weighing transmitter", quantity: "1 set" },
        ],
      },
      {
        systemName: "Accessories",
        items: [
          { name: "Screw conveyor", spec: "¢219", quantity: "1 set" },
          { name: "Cement silo", spec: "100T", quantity: "1 set" },
        ],
      },
    ],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: {
        engineersOnSite: 2,
        dailyRateUsd: 80,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HZS50 — Beton zavodi",
        shortName: "HZS50",
        tagline: "Soatiga 50 m³ beton — qurilish hajmini oshirish uchun",
        description:
          "Vericore Global tomonidan taqdim etiladigan HZS50 — JS1000 mikser va PLD1600 dozator bilan jihozlangan beton zavodi. Soatiga 50 m³ quvvat bilan o'rta va yirik qurilish loyihalarini ta'minlaydi.",
      },
      ru: {
        name: "HZS50 — Бетонный завод",
        shortName: "HZS50",
        tagline: "50 м³/ч для средних и крупных строительных проектов",
        description:
          "HZS50 от Vericore Global — бетонный завод с миксером JS1000 и дозатором PLD1600. Производительность 50 м³/ч покрывает потребности средних и крупных строительных проектов.",
      },
      en: {
        name: "HZS50 — Concrete Batching Plant",
        shortName: "HZS50",
        tagline: "50 m³/h capacity for growing construction demands",
        description:
          "The HZS50 from Vericore Global is equipped with a JS1000 mixer and PLD1600 batcher, delivering 50 m³/h to serve medium and large construction projects efficiently.",
      },
    },
  },
  {
    slug: "hzs75",
    modelCode: "HZS75",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: false,
    isPopular: true,
    images: [photoAt(2), photoAt(5), photoAt(8)],
    spec: {
      productivity: { value: 75, unit: "m³/h" },
      cycleTimeSeconds: 75,
      powerKw: 165,
      mixerModel: "JS1500",
      batcherModel: "PLD2400",
      feedingModel: "Lift Hopper",
      dischargeMeters: { min: 3.8, max: 4.0 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 21500, w: 9500, h: 17600 },
    },
    commercial: {
      containerType: "1×45HQ+",
      priceUsdExw: 0,
      deliveryWorkingDays: 10,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (10 m³)", spec: "PLD2400", quantity: "3 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Roller motor", quantity: "1 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS1500", quantity: "1 set" },
          { name: "Lubrication system", spec: "Thick oil pump", quantity: "1 set" },
          { name: "Discharge system", spec: "Pneumatic", quantity: "1 set" },
          { name: "Wearing plate", spec: "Hard-wearing", quantity: "1 set" },
          { name: "Rail rack", quantity: "1 set" },
        ],
      },
      {
        systemName: "Water weighing system",
        items: [
          { name: "Water flow-meter", quantity: "1 set" },
          { name: "Water pump", quantity: "1 set" },
          { name: "Pipe valve system", quantity: "1 set" },
        ],
      },
      {
        systemName: "Cement weighing system",
        items: [
          { name: "Cement weighing bin", quantity: "1 set" },
          { name: "Cement weigher", quantity: "1 set" },
          { name: "Butterfly valve", quantity: "1 set" },
        ],
      },
      {
        systemName: "Additive weighing system",
        items: [
          { name: "Additive weighing bin", quantity: "1 set" },
          { name: "Pipeline", quantity: "1 set" },
          { name: "Weighing sensor", quantity: "1 set" },
          { name: "Butterfly valve", quantity: "1 set" },
        ],
      },
      {
        systemName: "Pneumatic system",
        items: [
          { name: "Air compressor", spec: "HTA-100", quantity: "1 set" },
          { name: "Electromagnetic valve", quantity: "1 set" },
          { name: "Gasholder", quantity: "1 set" },
          { name: "Pipeline system", quantity: "1 set" },
        ],
      },
      {
        systemName: "Electric control system",
        items: [
          { name: "Current cabinet", quantity: "1 set" },
          { name: "Control computer", quantity: "1 set" },
          { name: "Strong electric cabinet", quantity: "1 set" },
          { name: "Weighing transmitter", quantity: "1 set" },
        ],
      },
      {
        systemName: "Accessories",
        items: [
          { name: "Screw conveyor", spec: "¢219×9m", quantity: "1 set" },
          { name: "Flaky cement silo", spec: "120T", quantity: "1 set" },
        ],
      },
    ],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: {
        engineersOnSite: 2,
        dailyRateUsd: 100,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HZS75 — Beton zavodi",
        shortName: "HZS75",
        tagline: "Yirik qurilish va infratuzilma loyihalari uchun soatiga 75 m³",
        description:
          "Vericore Global tomonidan taqdim etiladigan HZS75 — JS1500 mikser va PLD2400 dozator bilan jihozlangan yuqori unumli beton zavodi. Soatiga 75 m³ quvvat bilan yirik qurilish va infratuzilma loyihalarini ta'minlaydi.",
      },
      ru: {
        name: "HZS75 — Бетонный завод",
        shortName: "HZS75",
        tagline: "75 м³/ч для крупных строительных и инфраструктурных объектов",
        description:
          "HZS75 от Vericore Global — высокопроизводительный бетонный завод с миксером JS1500 и дозатором PLD2400. 75 м³/ч для крупных строительных и инфраструктурных проектов.",
      },
      en: {
        name: "HZS75 — Concrete Batching Plant",
        shortName: "HZS75",
        tagline: "75 m³/h for large construction and infrastructure projects",
        description:
          "The HZS75 from Vericore Global is a high-capacity plant featuring a JS1500 mixer and PLD2400 batcher, delivering 75 m³/h for large-scale construction and infrastructure projects.",
      },
    },
  },
  {
    slug: "hzs90",
    modelCode: "HZS90",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: false,
    isPopular: false,
    images: [photoAt(9), photoAt(12), photoAt(15)],
    spec: {
      productivity: { value: 90, unit: "m³/h" },
      cycleTimeSeconds: 72,
      powerKw: 180,
      mixerModel: "JS1500",
      batcherModel: "PLD2400",
      feedingModel: "Belt Conveyor",
      dischargeMeters: { min: 3.8, max: 4.2 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "1×45HQ",
      priceUsdExw: 0,
      deliveryWorkingDays: 10,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (12 m³)", spec: "PLD2400", quantity: "3 set" },
          { name: "Weighing hopper", quantity: "3 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Roller motor", quantity: "1 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS1500", quantity: "1 set" },
          { name: "Lubrication system", spec: "Thick oil pump", quantity: "1 set" },
          { name: "Discharge system", spec: "Pneumatic", quantity: "1 set" },
          { name: "Wearing plate", spec: "Hard-wearing", quantity: "1 set" },
          { name: "Rail rack", quantity: "1 set" },
        ],
      },
      {
        systemName: "Belt conveyor",
        items: [
          { name: "Roller motor", quantity: "1 set" },
          { name: "Rubber conveyor belt", quantity: "1 set" },
          { name: "Buffer hopper", quantity: "1 set" },
          { name: "Belt conveyor frame", quantity: "1 set" },
          { name: "Various idlers", quantity: "1 set" },
        ],
      },
      {
        systemName: "Water, cement & additive weighing",
        items: [
          { name: "Water flow-meter", quantity: "1 set" },
          { name: "Water pump", quantity: "1 set" },
          { name: "Cement weighing bin", quantity: "1 set" },
          { name: "Cement weigher", quantity: "1 set" },
          { name: "Additive weighing bin", quantity: "1 set" },
          { name: "Butterfly valves", quantity: "3 set" },
        ],
      },
      {
        systemName: "Pneumatic & electric control",
        items: [
          { name: "Air compressor", quantity: "1 set" },
          { name: "Electromagnetic valve", quantity: "1 set" },
          { name: "Gasholder", quantity: "1 set" },
          { name: "Current cabinet", quantity: "1 set" },
          { name: "Control computer", quantity: "1 set" },
          { name: "Strong electric cabinet", quantity: "1 set" },
          { name: "Weighing transmitter", quantity: "1 set" },
        ],
      },
      {
        systemName: "Accessories",
        items: [
          { name: "Screw conveyor", spec: "¢219×9m", quantity: "1 set" },
          { name: "Cement silo", spec: "150T", quantity: "1 set" },
        ],
      },
    ],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: {
        engineersOnSite: 2,
        dailyRateUsd: 100,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HZS90 — Beton zavodi",
        shortName: "HZS90",
        tagline: "Soatiga 90 m³ — katta hajmli qurilish uchun kuchli yechim",
        description:
          "Vericore Global tomonidan taqdim etiladigan HZS90 — tasmali konveyer va JS1500 mikser bilan jihozlangan kuchli beton zavodi. Soatiga 90 m³ quvvat bilan yirik qurilish ob'ektlarini uzluksiz ta'minlaydi.",
      },
      ru: {
        name: "HZS90 — Бетонный завод",
        shortName: "HZS90",
        tagline: "90 м³/ч — мощное решение для крупных стройплощадок",
        description:
          "HZS90 от Vericore Global — высокопроизводительный завод с ленточным конвейером и миксером JS1500. 90 м³/ч для бесперебойного снабжения крупных строительных объектов.",
      },
      en: {
        name: "HZS90 — Concrete Batching Plant",
        shortName: "HZS90",
        tagline: "90 m³/h — powerful output for large construction sites",
        description:
          "The HZS90 from Vericore Global features a belt conveyor feeding system and JS1500 mixer, producing 90 m³/h to keep large construction sites running without interruption.",
      },
    },
  },
  {
    slug: "hzs120",
    modelCode: "HZS120",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: false,
    isPopular: false,
    images: [photoAt(10), photoAt(13), photoAt(16)],
    spec: {
      productivity: { value: 120, unit: "m³/h" },
      cycleTimeSeconds: 60,
      powerKw: 200,
      mixerModel: "JS2000",
      batcherModel: "PLD3200",
      feedingModel: "Belt Conveyor",
      dischargeMeters: { min: 4.0, max: 4.5 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 36000, w: 18000, h: 17600 },
    },
    commercial: {
      containerType: "45HQ + 40HQ",
      priceUsdExw: 0,
      deliveryWorkingDays: 15,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (15 m³)", spec: "PLD3200", quantity: "4 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Roller motor", quantity: "1 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS2000", quantity: "1 set" },
          { name: "Lubrication system", spec: "Thick oil pump", quantity: "1 set" },
          { name: "Discharge system", spec: "Pneumatic", quantity: "1 set" },
          { name: "Wearing plate", spec: "Hard-wearing", quantity: "1 set" },
          { name: "Rail rack", quantity: "1 set" },
        ],
      },
      {
        systemName: "Belt conveyor",
        items: [
          { name: "Roller motor", quantity: "1 set" },
          { name: "Rubber conveyor belt", quantity: "1 set" },
          { name: "Buffer hopper", quantity: "1 set" },
          { name: "Belt conveyor frame", quantity: "1 set" },
          { name: "Various idlers", quantity: "1 set" },
        ],
      },
      {
        systemName: "Water, cement & additive weighing",
        items: [
          { name: "Water flow-meter", quantity: "1 set" },
          { name: "Water pump", quantity: "1 set" },
          { name: "Cement weighing bin", quantity: "2 set" },
          { name: "Cement weigher", quantity: "2 set" },
          { name: "Additive weighing bin", quantity: "1 set" },
          { name: "Butterfly valves", quantity: "various" },
        ],
      },
      {
        systemName: "Pneumatic & electric control",
        items: [
          { name: "Air compressor", spec: "HTA-100", quantity: "1 set" },
          { name: "Electromagnetic valve", quantity: "1 set" },
          { name: "Gasholder", quantity: "1 set" },
          { name: "Current cabinet", quantity: "1 set" },
          { name: "Control computer", quantity: "1 set" },
          { name: "Strong electric cabinet", quantity: "1 set" },
          { name: "Weighing transmitter", quantity: "1 set" },
        ],
      },
      {
        systemName: "Accessories",
        items: [
          { name: "Screw conveyor", spec: "¢273×9m", quantity: "1 set" },
          { name: "Flaky cement silo", spec: "150T", quantity: "1 set" },
        ],
      },
    ],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: {
        engineersOnSite: 2,
        dailyRateUsd: 100,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HZS120 — Beton zavodi",
        shortName: "HZS120",
        tagline: "Soatiga 120 m³ — sanoat miqyosidagi loyihalar uchun",
        description:
          "Vericore Global tomonidan taqdim etiladigan HZS120 — JS2000 mikser va PLD3200 dozator bilan jihozlangan sanoat miqyosidagi beton zavodi. 4 ta 15 m³ hajmli bunker va tasmali konveyer bilan soatiga 120 m³ beton ishlab chiqaradi.",
      },
      ru: {
        name: "HZS120 — Бетонный завод",
        shortName: "HZS120",
        tagline: "120 м³/ч — промышленный масштаб производства бетона",
        description:
          "HZS120 от Vericore Global — промышленный бетонный завод с миксером JS2000 и дозатором PLD3200. 4 бункера по 15 м³ и ленточный конвейер обеспечивают 120 м³/ч.",
      },
      en: {
        name: "HZS120 — Concrete Batching Plant",
        shortName: "HZS120",
        tagline: "120 m³/h — industrial-scale concrete production",
        description:
          "The HZS120 from Vericore Global is an industrial-scale plant with a JS2000 mixer and PLD3200 batcher. Four 15 m³ hoppers and a belt conveyor system deliver 120 m³/h.",
      },
    },
  },
  {
    slug: "hzs180",
    modelCode: "HZS180",
    categorySlug: "beton-zavodlari",
    status: "in-stock",
    isFeatured: false,
    isPopular: false,
    images: [photoAt(11), photoAt(14), photoAt(16)],
    spec: {
      productivity: { value: 180, unit: "m³/h" },
      cycleTimeSeconds: 60,
      powerKw: 250,
      mixerModel: "JS3000",
      batcherModel: "PLD4800",
      feedingModel: "Belt Conveyor",
      dischargeMeters: { min: 4.0, max: 4.5 },
      airCompressorKw: 11,
      weighingAccuracy: { water: "±1%", aggregate: "±2%", cement: "±1%" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "2×45HQ+",
      priceUsdExw: 0,
      deliveryWorkingDays: 15,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "as requested",
    },
    configuration: [
      {
        systemName: "Batching system",
        items: [
          { name: "Aggregate bin (20 m³)", spec: "PLD4800", quantity: "4 set" },
          { name: "Weighing hopper", quantity: "4 set" },
          { name: "Measuring belt", quantity: "1 set" },
          { name: "Measuring sensor", quantity: "1 set" },
          { name: "Roller motor", quantity: "1 set" },
        ],
      },
      {
        systemName: "Mixing system",
        items: [
          { name: "Mixer", spec: "JS3000", quantity: "1 set" },
          { name: "Lubrication system", spec: "Thick oil pump", quantity: "1 set" },
          { name: "Discharge system", spec: "Pneumatic", quantity: "1 set" },
          { name: "Wearing plate", spec: "Hard-wearing", quantity: "1 set" },
          { name: "Rail rack", quantity: "1 set" },
        ],
      },
      {
        systemName: "Belt conveyor",
        items: [
          { name: "Roller motor", quantity: "1 set" },
          { name: "Rubber conveyor belt", quantity: "1 set" },
          { name: "Buffer hopper", quantity: "1 set" },
          { name: "Belt conveyor frame", quantity: "1 set" },
          { name: "Various idlers", quantity: "1 set" },
        ],
      },
      {
        systemName: "Water, cement & additive weighing",
        items: [
          { name: "Water flow-meter", quantity: "1 set" },
          { name: "Water pump", quantity: "1 set" },
          { name: "Cement weighing bin", quantity: "1 set" },
          { name: "Cement weigher", quantity: "1 set" },
          { name: "Additive weighing bin", quantity: "1 set" },
          { name: "Butterfly valves", quantity: "various" },
        ],
      },
      {
        systemName: "Pneumatic & electric control",
        items: [
          { name: "Air compressor", spec: "HTA-120", quantity: "1 set" },
          { name: "Electromagnetic valve", quantity: "1 set" },
          { name: "Gasholder", quantity: "1 set" },
          { name: "Current cabinet", quantity: "1 set" },
          { name: "Control computer", quantity: "1 set" },
          { name: "Strong electric cabinet", quantity: "1 set" },
          { name: "Weighing transmitter", quantity: "1 set" },
        ],
      },
      {
        systemName: "Accessories",
        items: [
          { name: "Screw conveyor", spec: "¢325×9m", quantity: "1 set" },
          { name: "Flaky cement silo", spec: "150T", quantity: "1 set" },
        ],
      },
    ],
    warranty: {
      months: 15,
      validityDays: 30,
      installation: {
        engineersOnSite: 2,
        dailyRateUsd: 100,
        buyerCovers: ["air tickets", "visa application fee", "board and lodging"],
      },
    },
    i18n: {
      uz: {
        name: "HZS180 — Beton zavodi",
        shortName: "HZS180",
        tagline: "Soatiga 180 m³ — mega loyihalar uchun eng yuqori quvvat",
        description:
          "Vericore Global tomonidan taqdim etiladigan HZS180 — JS3000 mikser va PLD4800 dozator bilan jihozlangan eng yuqori quvvatli beton zavodi. 4 ta 20 m³ bunker bilan soatiga 180 m³ beton ishlab chiqarib, ko'p qavalli binolar va katta infratuzilma loyihalarini ta'minlaydi.",
      },
      ru: {
        name: "HZS180 — Бетонный завод",
        shortName: "HZS180",
        tagline: "180 м³/ч — максимальная мощность для мегапроектов",
        description:
          "HZS180 от Vericore Global — флагманский бетонный завод с миксером JS3000 и дозатором PLD4800. 4 бункера по 20 м³ обеспечивают 180 м³/ч для многоэтажных и инфраструктурных мегапроектов.",
      },
      en: {
        name: "HZS180 — Concrete Batching Plant",
        shortName: "HZS180",
        tagline: "180 m³/h — maximum capacity for mega-projects",
        description:
          "The HZS180 from Vericore Global is the flagship plant with a JS3000 mixer and PLD4800 batcher. Four 20 m³ hoppers produce 180 m³/h for high-rise construction and large infrastructure mega-projects.",
      },
    },
  },
  // ── Drobilka 100 t/h ─────────────────────────────────────────────────
  {
    slug: "drobilnaya-liniya-100tph",
    modelCode: "100 t/h",
    categorySlug: "drabilni-zavod",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: drabilniZavodImages,
    spec: {
      productivity: { value: 100, unit: "t/h" },
      cycleTimeSeconds: 0,
      powerKw: 335,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "ZSW3896 Vibro-feeder",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "FOB",
      priceUsdExw: 154500,
      deliveryWorkingDays: 45,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "Standard",
    },
    configuration: [
      {
        systemName: { uz: "Asosiy uskunalar", ru: "Основное оборудование", en: "Main Equipment" },
        items: [
          { name: { uz: "Vibratsion pitatel", ru: "Вибрационный питатель", en: "Vibrating Feeder" }, spec: "ZSW3896", quantity: "1 ta · 15 kW · 4 t" },
          { name: { uz: "Jag'li drobilka", ru: "Щековая дробилка", en: "Jaw Crusher" }, spec: "PE600×900", quantity: "1 ta · 75 kW · 17 t" },
          { name: { uz: "Konus drobilka", ru: "Конусная дробилка", en: "Cone Crusher" }, spec: "CH430", quantity: "1 ta · 160 kW · 13 t" },
          { name: { uz: "Vibratsion grokot", ru: "Вибрационный грохот", en: "Vibrating Screen" }, spec: "3YK1860", quantity: "1 ta · 22 kW · 9 t · 3 qatlam" },
          { name: { uz: "Magnit separator", ru: "Магнитный сепаратор", en: "Magnetic Separator" }, spec: "RCYD650", quantity: "1 ta · 1 t" },
          { name: { uz: "Qum yuvgich", ru: "Пескомойка", en: "Sand Washer" }, spec: "LX920", quantity: "1 ta · 11 kW · 5 t · 50–60 t/h" },
        ],
      },
      {
        systemName: { uz: "Konveyerlar", ru: "Ленточные конвейеры", en: "Belt Conveyors" },
        items: [
          { name: { uz: "Lenta konveyeri B800", ru: "Ленточный конвейер B800", en: "Belt Conveyor B800" }, spec: "39 m", quantity: "1 ta · 22 kW · 5 t" },
          { name: { uz: "Lenta konveyeri B650", ru: "Ленточный конвейер B650", en: "Belt Conveyor B650" }, spec: "26 m", quantity: "1 ta · 15 kW · 3 t" },
          { name: { uz: "Lenta konveyeri B500", ru: "Ленточный конвейер B500", en: "Belt Conveyor B500" }, spec: "45 m (3 ta)", quantity: "3 ta · 15 kW · 6 t" },
        ],
      },
      {
        systemName: { uz: "Elektr boshqaruv", ru: "Электрическое управление", en: "Electrical Control" },
        items: [
          { name: { uz: "Elektr pult", ru: "Электрический пульт управления", en: "Electrical Control Panel" }, spec: "335 kW", quantity: "1 ta" },
          { name: { uz: "Havo kompressori", ru: "Воздушный компрессор", en: "Air Compressor" }, spec: "7.5 kW", quantity: "1 ta" },
        ],
      },
      {
        systemName: { uz: "Texnik xususiyatlar — Jag'li drobilka PE600×900", ru: "Технические характеристики — Щековая дробилка PE600×900", en: "Technical Specs — Jaw Crusher PE600×900" },
        items: [
          { name: { uz: "Quvvat", ru: "Мощность", en: "Power" }, spec: "75 kW", quantity: "—" },
          { name: { uz: "Unumdorlik", ru: "Производительность", en: "Capacity" }, spec: "90–150 t/h", quantity: "—" },
          { name: { uz: "Kirish o'lchami", ru: "Размер подачи", en: "Feed Size" }, spec: "≤600 mm", quantity: "—" },
          { name: { uz: "Og'iz o'lchami", ru: "Размер зева", en: "Jaw Opening" }, spec: "600×900 mm", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Texnik xususiyatlar — Konus drobilka CH430", ru: "Технические характеристики — Конусная дробилка CH430", en: "Technical Specs — Cone Crusher CH430" },
        items: [
          { name: { uz: "Quvvat", ru: "Мощность", en: "Power" }, spec: "160 kW", quantity: "—" },
          { name: { uz: "Unumdorlik", ru: "Производительность", en: "Capacity" }, spec: "90–150 t/h", quantity: "—" },
          { name: { uz: "Kirish o'lchami", ru: "Размер подачи", en: "Feed Size" }, spec: "≤150 mm", quantity: "—" },
          { name: { uz: "Chiqish rostlanishi", ru: "Регулировка выпуска", en: "Discharge Setting" }, spec: "0–45 mm", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Yetkazib berish va narx", ru: "Стоимость и доставка", en: "Pricing & Delivery" },
        items: [
          { name: { uz: "Narx (EXW)", ru: "Цена (EXW)", en: "Price (EXW)" }, spec: "$154,500", quantity: "—" },
          { name: { uz: "Yuk og'irligi", ru: "Вес груза", en: "Cargo Weight" }, spec: "63 t", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Стоимость доставки", en: "Delivery Cost" }, spec: "≈$18,000", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 365,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 0,
        buyerCovers: ["turar joy", "oziq-ovqat", "ikki tomonlama yo'l xarajatlari"],
      },
    },
    i18n: {
      uz: {
        name: "Drobil zavodi — 100 t/soat",
        shortName: "DL-100 Drobilka liniyasi",
        tagline: "Дробилная линия 100 т/ч — to'liq maydalash kompleksi",
        description:
          "Soatiga 100 tonna quvvatli maydalash liniyasi. Tarkibida jag'li drobilka PE600×900, konus drobilka CH430, vibratsion grokot 3YK1860, qum yuvgich LX920 va lenta konveyerlar to'liq komplekti mavjud. Umumiy quvvat 335 kW. Yetkazib berish ≈$18,000.",
      },
      ru: {
        name: "Дробильная линия — 100 т/ч",
        shortName: "DL-100 Дробильная линия",
        tagline: "Дробильная линия 100 т/ч — полный комплект",
        description:
          "Дробильная линия производительностью 100 т/ч. В комплекте: щековая дробилка PE600×900, конусная дробилка CH430, вибрационный грохот 3YK1860, пескомойка LX920 и ленточные конвейеры. Общая мощность 335 кВт. Стоимость доставки ≈$18,000.",
      },
      en: {
        name: "Crushing & Screening Plant — 100 tph",
        shortName: "DL-100 Crushing Line",
        tagline: "Crushing line 100 t/h — complete set",
        description:
          "100 tph complete crushing line including PE600×900 jaw crusher, CH430 cone crusher, 3YK1860 vibrating screen, LX920 sand washer and full belt conveyor set. Total power 335 kW. Delivery cost ≈$18,000.",
      },
    },
  },

  // ── Drobilka 150 t/h ─────────────────────────────────────────────────
  {
    slug: "drobilnaya-liniya-150tph",
    modelCode: "150 t/h",
    categorySlug: "drabilni-zavod",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: drabilniZavodImages,
    spec: {
      productivity: { value: 150, unit: "t/h" },
      cycleTimeSeconds: 0,
      powerKw: 436,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "ZSW3896 Vibro-feeder",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 3880, w: 1724, h: 1180 },
    },
    commercial: {
      containerType: "FOB",
      priceUsdExw: 195200,
      deliveryWorkingDays: 45,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "Standard",
    },
    configuration: [
      {
        systemName: { uz: "Asosiy uskunalar", ru: "Основное оборудование", en: "Main Equipment" },
        items: [
          { name: { uz: "Vibratsion pitatel", ru: "Вибрационный питатель", en: "Vibrating Feeder" }, spec: "ZSW3896", quantity: "1 ta · 15 kW · 4 t · 100–150 t/h" },
          { name: { uz: "Jag'li drobilka", ru: "Щековая дробилка", en: "Jaw Crusher" }, spec: "PE600×900", quantity: "1 ta · 75 kW · 16.5 t" },
          { name: { uz: "Konus drobilka", ru: "Конусная дробилка", en: "Cone Crusher" }, spec: "CH430", quantity: "1 ta · 160 kW · 13 t" },
          { name: { uz: "Vibratsion grokot (2 qatlam)", ru: "Вибрационный грохот (2 яруса)", en: "Vibrating Screen (2-deck)" }, spec: "2YK2160", quantity: "1 ta · 30 kW · 7 t · 12.6 m²" },
          { name: { uz: "Vibratsion grokot (3 qatlam)", ru: "Вибрационный грохот (3 яруса)", en: "Vibrating Screen (3-deck)" }, spec: "3YK2160", quantity: "1 ta · 30 kW · 8.7 t · 12.6 m²" },
          { name: { uz: "Ikkinchi vibratsion pitatel", ru: "Второй вибрационный питатель", en: "Secondary Vibrating Feeder" }, spec: "GZG125-4", quantity: "1 ta · 3 kW · 2 t" },
          { name: { uz: "Magnit separator", ru: "Магнитный сепаратор", en: "Magnetic Separator" }, spec: "RCYD800", quantity: "1 ta · 1 t" },
          { name: { uz: "Qum yuvgich", ru: "Пескомойка", en: "Sand Washer" }, spec: "LX920", quantity: "1 ta · 15 kW · 4 t" },
        ],
      },
      {
        systemName: { uz: "Konveyerlar", ru: "Ленточные конвейеры", en: "Belt Conveyors" },
        items: [
          { name: { uz: "Lenta konveyeri B800", ru: "Ленточный конвейер B800", en: "Belt Conveyor B800" }, spec: "83 m (4 ta)", quantity: "4 ta · 67 kW · 10 t" },
          { name: { uz: "Lenta konveyeri B650", ru: "Ленточный конвейер B650", en: "Belt Conveyor B650" }, spec: "68 m (5 ta)", quantity: "5 ta · 41 kW · 7 t" },
        ],
      },
      {
        systemName: { uz: "Elektr boshqaruv", ru: "Электрическое управление", en: "Electrical Control" },
        items: [
          { name: { uz: "Elektr pult", ru: "Электрический пульт управления", en: "Electrical Control Panel" }, spec: "436 kW", quantity: "1 ta" },
          { name: { uz: "Havo kompressori", ru: "Воздушный компрессор", en: "Air Compressor" }, spec: "7.5 kW", quantity: "1 ta" },
        ],
      },
      {
        systemName: { uz: "Texnik xususiyatlar — ZSW3896 pitatel", ru: "Технические характеристики — Питатель ZSW3896", en: "Technical Specs — Feeder ZSW3896" },
        items: [
          { name: { uz: "Quvvat", ru: "Мощность", en: "Power" }, spec: "15 kW", quantity: "—" },
          { name: { uz: "Unumdorlik", ru: "Производительность", en: "Capacity" }, spec: "100–150 t/h", quantity: "—" },
          { name: { uz: "Kirish o'lchami", ru: "Размер подачи", en: "Feed Size" }, spec: "≤650 mm", quantity: "—" },
          { name: { uz: "Gabarit o'lchamlari", ru: "Габаритные размеры", en: "Overall Dimensions" }, spec: "3880×1724×1180 mm", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Texnik xususiyatlar — Grokot 2YK2160 / 3YK2160", ru: "Технические характеристики — Грохот 2YK2160 / 3YK2160", en: "Technical Specs — Screen 2YK2160 / 3YK2160" },
        items: [
          { name: { uz: "Quvvat", ru: "Мощность", en: "Power" }, spec: "30 kW", quantity: "—" },
          { name: { uz: "Panjara yuzasi", ru: "Площадь сетки", en: "Screen Area" }, spec: "12.6 m²", quantity: "—" },
          { name: { uz: "Qatlamlar soni", ru: "Количество ярусов", en: "Number of Decks" }, spec: "2 / 3", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Yetkazib berish va narx", ru: "Стоимость и доставка", en: "Pricing & Delivery" },
        items: [
          { name: { uz: "Narx (EXW)", ru: "Цена (EXW)", en: "Price (EXW)" }, spec: "$195,200", quantity: "—" },
          { name: { uz: "Yuk og'irligi", ru: "Вес груза", en: "Cargo Weight" }, spec: "73.2 t", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Стоимость доставки", en: "Delivery Cost" }, spec: "≈$27,000", quantity: "—" },
          { name: { uz: "Jami narx", ru: "Общая стоимость", en: "Total Price" }, spec: "$222,200", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 365,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 0,
        buyerCovers: ["turar joy", "oziq-ovqat", "ikki tomonlama yo'l xarajatlari"],
      },
    },
    i18n: {
      uz: {
        name: "Drobil zavodi — 150 t/soat",
        shortName: "DL-150 Drobilka liniyasi",
        tagline: "Дробилная линия 150 т/ч — to'liq maydalash kompleksi",
        description:
          "Soatiga 150 tonna quvvatli kengaytirilgan maydalash liniyasi. Ikki xil vibratsion grokot (2YK2160 va 3YK2160), jag'li va konus drobilkalar, qum yuvgich, 9 ta lenta konveyeri to'liq komplekti. Umumiy quvvat 436 kW. 1 yil kafolat, o'rnatish muhandisi bepul. Jami narx $222,200.",
      },
      ru: {
        name: "Дробильная линия — 150 т/ч",
        shortName: "DL-150 Дробильная линия",
        tagline: "Дробильная линия 150 т/ч — полный комплект",
        description:
          "Расширенная дробильная линия производительностью 150 т/ч. Два виброгрохота 2YK2160 и 3YK2160, щековая и конусная дробилки, пескомойка, 9 ленточных конвейеров. Общая мощность 436 кВт. Гарантия 1 год, инженер по монтажу в комплекте. Итоговая стоимость $222,200.",
      },
      en: {
        name: "Crushing & Screening Plant — 150 tph",
        shortName: "DL-150 Crushing Line",
        tagline: "Crushing line 150 t/h — complete set",
        description:
          "Extended 150 tph crushing line with dual vibrating screens (2YK2160 & 3YK2160), jaw and cone crushers, sand washer and 9 belt conveyors. Total power 436 kW. 1-year warranty, installation engineer included. Total price $222,200.",
      },
    },
  },

  // ── YHZS60 Mobile Beton Zavod ─────────────────────────────────────────
  {
    slug: "yhzs60-mobile-beton-zavod",
    modelCode: "YHZS60",
    categorySlug: "beton-zavodlari",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/beton-zavodlari/cover.jpeg",
    ],
    spec: {
      productivity: { value: 60, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 66,
      mixerModel: "JS1000",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 3.8, max: 3.8 },
      airCompressorKw: 7.5,
      weighingAccuracy: { water: "≤±1%", aggregate: "±2%", cement: "≤±1%" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "EXW",
      priceUsdExw: 56320,
      deliveryWorkingDays: 40,
      paymentTerms: "30% avans, 70% yetkazib berishdan oldin",
      colorPolicy: "Standard",
    },
    configuration: [
      {
        systemName: { uz: "Asosiy texnik xususiyatlar", ru: "Основные технические характеристики", en: "Main Technical Specifications" },
        items: [
          { name: { uz: "Unumdorlik", ru: "Производительность", en: "Productivity" }, spec: "60 m³/h", quantity: "—" },
          { name: { uz: "O'rnatilgan quvvat", ru: "Установленная мощность", en: "Installed Capacity" }, spec: "~66 kW (vint konveyersiz)", quantity: "—" },
          { name: { uz: "Tushirilish balandligi", ru: "Высота выгрузки", en: "Discharge Height" }, spec: "3.8 m", quantity: "—" },
          { name: { uz: "Jami og'irlik", ru: "Общий вес", en: "Overall Weight" }, spec: "~31 t (silo va vint konveyersiz)", quantity: "—" },
          { name: { uz: "Joylashuv maydoni", ru: "Площадь участка", en: "Site Area" }, spec: "25×8 m yoki 20×12 m", quantity: "—" },
          { name: { uz: "Konteyner", ru: "Контейнер", en: "Container" }, spec: "3×40HQ", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Aralashtirish tizimi", ru: "Смесительная система", en: "Mixing System" },
        items: [
          { name: { uz: "Aralashtiruvchi", ru: "Смеситель", en: "Mixer" }, spec: "JS1000", quantity: "1 ta" },
          { name: { uz: "Elektr motor", ru: "Электродвигатель", en: "Electric Motor" }, spec: "18.5 kW × 2", quantity: "2 ta" },
          { name: { uz: "Yuklash hajmi", ru: "Объём загрузки", en: "Feed Capacity" }, spec: "1600 L", quantity: "—" },
          { name: { uz: "Chiqarish hajmi", ru: "Объём выгрузки", en: "Discharge Capacity" }, spec: "1000 L", quantity: "—" },
          { name: { uz: "Gidravlik blok", ru: "Гидравлический блок", en: "Hydraulic Power Unit" }, spec: "Silindr Ø100 mm, zarbasi 200 mm", quantity: "1 ta" },
          { name: { uz: "Yeyilishga chidamli plastinalar", ru: "Износостойкие плиты и лопасти", en: "Wear Plates & Blades" }, spec: "Maanshan ishlab chiqargan", quantity: "1 ta" },
        ],
      },
      {
        systemName: { uz: "Inert materiallar dozalash tizimi", ru: "Система дозирования заполнителей", en: "Aggregate Batching System" },
        items: [
          { name: { uz: "Inert material idishlari", ru: "Бункера заполнителей", en: "Aggregate Hoppers" }, spec: "6 m³ × 4", quantity: "1 ta" },
          { name: { uz: "Tortish bunker hajmi", ru: "Объём весового бункера", en: "Weighing Hopper" }, spec: "1600 L", quantity: "—" },
          { name: { uz: "Elektr baraban (18.5 kW)", ru: "Электробарабан (18.5 кВт)", en: "Electric Drum (18.5 kW)" }, spec: "Zibo Chaowang", quantity: "1 ta" },
          { name: { uz: "Lenta kengligi", ru: "Ширина ленты", en: "Belt Width" }, spec: "B=650 mm", quantity: "—" },
          { name: { uz: "Og'irlik sensori", ru: "Датчик нагрузки", en: "Load Sensor" }, spec: "STL-3000Kg (Qingdao Tongle)", quantity: "4 ta" },
          { name: { uz: "O'lchash aniqligi", ru: "Точность измерения", en: "Measurement Accuracy" }, spec: "±2%", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Sement, suv va qo'shimcha dozalash", ru: "Дозирование цемента, воды и добавок", en: "Cement, Water & Admixture Weighing" },
        items: [
          { name: { uz: "Sement tortish bunker", ru: "Весовой бункер цемента", en: "Cement Weighing Hopper" }, spec: "700 L · 0–700 kg", quantity: "1 ta" },
          { name: { uz: "Sement sensor", ru: "Датчик цемента", en: "Cement Sensor" }, spec: "LC-E-III-300Kg (Qingdao Tongle)", quantity: "3 ta" },
          { name: { uz: "Sement aniqligi", ru: "Точность цемента", en: "Cement Accuracy" }, spec: "≤±1%", quantity: "—" },
          { name: { uz: "Suv tortish bunker", ru: "Весовой бункер воды", en: "Water Weighing Hopper" }, spec: "300 L", quantity: "1 ta" },
          { name: { uz: "Suv nasosi", ru: "Насос воды", en: "Water Pump" }, spec: "QY40-16-3 · 3 kW", quantity: "1 ta" },
          { name: { uz: "Qo'shimcha modda baki", ru: "Бак присадки", en: "Admixture Tank" }, spec: "2 m³", quantity: "1 ta" },
          { name: { uz: "Qo'shimcha modda nasosi", ru: "Насос присадки", en: "Admixture Pump" }, spec: "0.75 kW", quantity: "1 ta" },
          { name: { uz: "O'lchash aniqligi (suv/qo'shimcha)", ru: "Точность (вода/добавка)", en: "Accuracy (water/admixture)" }, spec: "≤±1%", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Vint konveyeri va sement silo", ru: "Шнековый конвейер и цементный силос", en: "Screw Conveyor & Cement Silo" },
        items: [
          { name: { uz: "Vint konveyeri", ru: "Шнековый конвейер", en: "Screw Conveyor" }, spec: "Φ219 · 45 t/h · 11 kW", quantity: "1 ta" },
          { name: { uz: "Sement silo (ixtiyoriy)", ru: "Цементный силос (опция)", en: "Cement Silo (optional)" }, spec: "50t yoki 100t", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Elektr boshqaruv va nazorat xonasi", ru: "Электроуправление и диспетчерская", en: "Electrical Control & Control Room" },
        items: [
          { name: { uz: "Asosiy avtomat uzgich", ru: "Главный автоматический выключатель", en: "Main Circuit Breaker" }, spec: "Schneider", quantity: "1 ta" },
          { name: { uz: "Tortish asbob", ru: "Весовой прибор", en: "Weighing Instrument" }, spec: "PLY900 (Shandong Boshuo)", quantity: "1 ta" },
          { name: { uz: "Boshqaruv dasturi", ru: "Программное обеспечение", en: "Control Software" }, spec: "BCS7 (Shandong Boshuo)", quantity: "1 ta" },
          { name: { uz: "Ekran", ru: "Монитор", en: "Display" }, spec: "24.9\" keng LCD", quantity: "1 ta" },
          { name: { uz: "Printerlar", ru: "Принтер", en: "Printer" }, spec: "EPSON", quantity: "1 ta" },
          { name: { uz: "UPS", ru: "ИБП", en: "UPS" }, spec: "500W (Shante)", quantity: "1 ta" },
          { name: { uz: "Nazorat xonasi", ru: "Диспетчерская", en: "Control Room" }, spec: "3 m², konditsioner 1P", quantity: "1 ta" },
        ],
      },
      {
        systemName: { uz: "Tortib yurish tizimi (mobil)", ru: "Ходовая часть (мобильная)", en: "Towing System (Mobile)" },
        items: [
          { name: { uz: "Avtomobil ramkasi", ru: "Рама автомобиля", en: "Car Frame" }, spec: "16T", quantity: "1 ta" },
          { name: { uz: "Shinalar", ru: "Шины", en: "Tyres" }, spec: "12.00-20", quantity: "4 ta" },
          { name: { uz: "Disk", ru: "Обод", en: "Wheel Rim" }, spec: "8.0V-20", quantity: "4 ta" },
          { name: { uz: "Osma tizimi", ru: "Подвеска", en: "Suspension" }, spec: "Bitta o'qli", quantity: "1 ta" },
        ],
      },
      {
        systemName: { uz: "Montaj va savdo shartlari", ru: "Монтаж и коммерческие условия", en: "Installation & Commercial Terms" },
        items: [
          { name: { uz: "Narx (EXW)", ru: "Цена (EXW)", en: "Price (EXW)" }, spec: "$56,320", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Срок поставки", en: "Delivery" }, spec: "30–40 ish kuni", quantity: "—" },
          { name: { uz: "Kafolat", ru: "Гарантия", en: "Warranty" }, spec: "12 oy (o'rnatilgandan so'ng)", quantity: "—" },
          { name: { uz: "Muhandis xizmati", ru: "Услуги инженера", en: "Engineer Service" }, spec: "1-2 kishi, $150/kun", quantity: "—" },
          { name: { uz: "Xaridor ta'minlaydi", ru: "Покупатель обеспечивает", en: "Buyer provides" }, spec: "Turar joy, transport, avia chipta", quantity: "—" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 365,
      installation: {
        engineersOnSite: 2,
        dailyRateUsd: 150,
        buyerCovers: ["accommodation", "round-trip air tickets", "local transport", "visa"],
      },
    },
    i18n: {
      uz: {
        name: "YHZS60 Mobil beton zavodi — 60 m³/soat",
        shortName: "YHZS60 Beton zavodi",
        tagline: "Mobil, 60 m³/soat, JS1000 aralashtiruvchi · 3×40HQ",
        description: "YHZS60 mobil beton aralashtiruv zavodi — 60 m³/soat unumdorlik, JS1000 aralashtiruvchi (18.5 kW×2), umumiy o'rnatilgan quvvat ~66 kW. 4 ta inert material bunkeri (6 m³ × 4), sement/suv/qo'shimcha dozalash tizimi, PLY900 tortish asbob, BCS7 dastur. Mobil — 3×40HQ konteynerda joylashgan. Tortib yurish uchun 16T ramma. Narx: $56,320 EXW. 12 oy kafolat.",
      },
      ru: {
        name: "YHZS60 Мобильный бетонный завод — 60 м³/ч",
        shortName: "YHZS60 Бетонный завод",
        tagline: "Мобильный, 60 м³/ч, смеситель JS1000 · 3×40HQ",
        description: "Мобильный бетоносмесительный завод YHZS60 — производительность 60 м³/ч, смеситель JS1000 (18.5 кВт×2), общая мощность ~66 кВт. 4 бункера заполнителей (6 м³×4), система дозирования цемента/воды/добавок, весовой прибор PLY900, ПО BCS7. Мобильное исполнение — 3×40HQ контейнера. Рама 16Т. Цена: $56,320 EXW. Гарантия 12 месяцев.",
      },
      en: {
        name: "YHZS60 Mobile Concrete Batching Plant — 60 m³/h",
        shortName: "YHZS60 Concrete Plant",
        tagline: "Mobile, 60 m³/h, JS1000 mixer · 3×40HQ containers",
        description: "YHZS60 mobile concrete batching plant — 60 m³/h capacity, JS1000 mixer (18.5 kW×2), total installed power ~66 kW. 4 aggregate hoppers (6 m³×4), cement/water/admixture weighing systems, PLY900 weighing instrument, BCS7 control software. Mobile design ships in 3×40HQ containers. 16T towing frame. Price: $56,320 EXW. 12-month warranty.",
      },
    },
  },

  // ── HN-6015L fiber lazer (1.5 / 3 / 6 kW) ────────────────────────────
  {
    slug: "hn-6015l-1-5kw",
    modelCode: "HN-6015L 1.5kW",
    categorySlug: "laser-stanoki",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: laserStanokImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 1.5,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 4000, w: 2300, h: 1800 },
    },
    commercial: {
      containerType: "FOB",
      priceUsdExw: 14500,
      deliveryWorkingDays: 20,
      paymentTerms: "30% avans, 70% yetkazib berishdan oldin",
      colorPolicy: "Standard",
    },
    configuration: [
      {
        systemName: { uz: "Texnik xususiyatlar", ru: "Технические характеристики", en: "Technical Specifications" },
        items: [
          { name: { uz: "Ish maydoni", ru: "Рабочая зона", en: "Working Area" }, spec: "1500×6000 mm", quantity: "—" },
          { name: { uz: "Lazer quvvati", ru: "Мощность лазера", en: "Laser Power" }, spec: "1.5 kW (Raycus)", quantity: "—" },
          { name: { uz: "Lazer turi", ru: "Тип лазера", en: "Laser Type" }, spec: "Fiber laser", quantity: "—" },
          { name: { uz: "Maksimal tezlik", ru: "Максимальная скорость", en: "Max Speed" }, spec: "133 m/min", quantity: "—" },
          { name: { uz: "Tezlanish", ru: "Ускорение", en: "Acceleration" }, spec: "1.5G", quantity: "—" },
          { name: { uz: "Pozitsion aniqlik", ru: "Точность позиционирования", en: "Position Accuracy" }, spec: "±0.02 mm/1000mm", quantity: "—" },
          { name: { uz: "Qayta joylash aniqligi", ru: "Точность повторного позиционирования", en: "Reposition Accuracy" }, spec: "±0.03 mm/1000mm", quantity: "—" },
          { name: { uz: "Mashina o'lchamlari", ru: "Габариты машины", en: "Machine Size" }, spec: "4000×2300×1800 mm", quantity: "—" },
          { name: { uz: "Mashina vazni", ru: "Вес машины", en: "Machine Weight" }, spec: "4500 kg", quantity: "—" },
          { name: { uz: "Kuchlanish", ru: "Напряжение", en: "Voltage" }, spec: "3P 380V 50/60Hz", quantity: "—" },
          { name: { uz: "Haydovchi tizimi", ru: "Привод", en: "Drive" }, spec: "Gantry ikki tomonlama", quantity: "—" },
          { name: { uz: "Grafiklar formati", ru: "Форматы графики", en: "Graphic Formats" }, spec: "CAD, DXF va boshqalar", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Tarkibiy qismlar", ru: "Комплектующие", en: "Components" },
        items: [
          { name: { uz: "Lazer manba", ru: "Источник лазера", en: "Laser Source" }, spec: "Raycus", quantity: "—" },
          { name: { uz: "Suv sovutgichi", ru: "Чиллер", en: "Water Chiller" }, spec: "Hanli", quantity: "—" },
          { name: { uz: "Lazer boshi", ru: "Лазерная головка", en: "Laser Head" }, spec: "Raytools BS06K", quantity: "—" },
          { name: { uz: "Boshqaruv tizimi", ru: "Система управления", en: "Control System" }, spec: "Raytools XC3000S", quantity: "—" },
          { name: { uz: "Servo motor", ru: "Серводвигатель", en: "Servo Motor" }, spec: "Taiwan Delta", quantity: "—" },
          { name: { uz: "Reduktor", ru: "Редуктор", en: "Reducer" }, spec: "Japan Shimpo", quantity: "—" },
          { name: { uz: "Elektr komponentlar", ru: "Электрокомпоненты", en: "Electrical Components" }, spec: "France Schneider", quantity: "—" },
          { name: { uz: "Yo'l yo'riqnomasi", ru: "Направляющие", en: "Guide Rail" }, spec: "Italy PEK", quantity: "—" },
          { name: { uz: "Rack", ru: "Рейка", en: "Rack" }, spec: "Germany Leitesen", quantity: "—" },
          { name: { uz: "Proportsional klapan", ru: "Пропорциональный клапан", en: "Proportional Valve" }, spec: "Japan SMC", quantity: "—" },
          { name: { uz: "Himoya linzalar va nozullar", ru: "Защитные линзы и форсунки", en: "Protective Lens & Nozzles" }, spec: "20 ta to'plam", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Savdo shartlari", ru: "Коммерческие условия", en: "Commercial Terms" },
        items: [
          { name: { uz: "Kafolat", ru: "Гарантия", en: "Warranty" }, spec: "2 yil", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Срок поставки", en: "Delivery" }, spec: "20 ish kuni", quantity: "—" },
          { name: { uz: "To'lov", ru: "Оплата", en: "Payment" }, spec: "30% + 70%", quantity: "—" },
        ],
      },
    ],
    warranty: { months: 24, validityDays: 730, installation: { engineersOnSite: 0, dailyRateUsd: 0, buyerCovers: [] } },
    i18n: {
      uz: {
        name: "HN-6015L Fiber lazer kesish stanogi — 1.5 kW",
        shortName: "HN-6015L 1.5kW",
        tagline: "1500×6000 mm ish maydoni, Raycus fiber lazer",
        description: "HN-6015L fiber lazer kesish stanogi — 1500×6000 mm ish maydoni, 1.5 kW Raycus lazer, Raytools XC3000S boshqaruv. Maksimal tezlik 133 m/min, aniqlik ±0.02 mm/m. Tarkibida: Taiwan Delta servo, Germany Leitesen rack, Japan Shimpo reduktor, France Schneider elektrika. 2 yillik kafolat.",
      },
      ru: {
        name: "HN-6015L Волоконный лазерный станок — 1.5 кВт",
        shortName: "HN-6015L 1.5кВт",
        tagline: "Рабочая зона 1500×6000 мм, лазер Raycus",
        description: "Волоконный лазерный станок HN-6015L с рабочей зоной 1500×6000 мм, лазером Raycus 1.5 кВт и системой управления Raytools XC3000S. Макс. скорость 133 м/мин, точность ±0.02 мм/м. Комплектация: сервоприводы Taiwan Delta, рейки Germany Leitesen, редукторы Japan Shimpo, электрика France Schneider. Гарантия 2 года.",
      },
      en: {
        name: "HN-6015L Fiber Laser Cutting Machine — 1.5 kW",
        shortName: "HN-6015L 1.5kW",
        tagline: "1500×6000 mm work area, Raycus fiber laser",
        description: "HN-6015L fiber laser cutting machine with 1500×6000 mm work area, 1.5 kW Raycus laser source and Raytools XC3000S control. Max speed 133 m/min, accuracy ±0.02 mm/m. Components: Taiwan Delta servo, Germany Leitesen rack, Japan Shimpo reducer, France Schneider electrics. 2-year warranty.",
      },
    },
  },
  {
    slug: "hn-6015l-3kw",
    modelCode: "HN-6015L 3kW",
    categorySlug: "laser-stanoki",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: laserStanokImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 3,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 4000, w: 2300, h: 1800 },
    },
    commercial: {
      containerType: "FOB",
      priceUsdExw: 16200,
      deliveryWorkingDays: 20,
      paymentTerms: "30% avans, 70% yetkazib berishdan oldin",
      colorPolicy: "Standard",
    },
    configuration: [
      {
        systemName: { uz: "Texnik xususiyatlar", ru: "Технические характеристики", en: "Technical Specifications" },
        items: [
          { name: { uz: "Ish maydoni", ru: "Рабочая зона", en: "Working Area" }, spec: "1500×6000 mm", quantity: "—" },
          { name: { uz: "Lazer quvvati", ru: "Мощность лазера", en: "Laser Power" }, spec: "3 kW (Raycus)", quantity: "—" },
          { name: { uz: "Lazer turi", ru: "Тип лазера", en: "Laser Type" }, spec: "Fiber laser", quantity: "—" },
          { name: { uz: "Maksimal tezlik", ru: "Максимальная скорость", en: "Max Speed" }, spec: "133 m/min", quantity: "—" },
          { name: { uz: "Tezlanish", ru: "Ускорение", en: "Acceleration" }, spec: "1.5G", quantity: "—" },
          { name: { uz: "Pozitsion aniqlik", ru: "Точность позиционирования", en: "Position Accuracy" }, spec: "±0.02 mm/1000mm", quantity: "—" },
          { name: { uz: "Qayta joylash aniqligi", ru: "Точность повторного позиционирования", en: "Reposition Accuracy" }, spec: "±0.03 mm/1000mm", quantity: "—" },
          { name: { uz: "Mashina o'lchamlari", ru: "Габариты машины", en: "Machine Size" }, spec: "4000×2300×1800 mm", quantity: "—" },
          { name: { uz: "Mashina vazni", ru: "Вес машины", en: "Machine Weight" }, spec: "4500 kg", quantity: "—" },
          { name: { uz: "Kuchlanish", ru: "Напряжение", en: "Voltage" }, spec: "3P 380V 50/60Hz", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Tarkibiy qismlar", ru: "Комплектующие", en: "Components" },
        items: [
          { name: { uz: "Lazer manba", ru: "Источник лазера", en: "Laser Source" }, spec: "Raycus", quantity: "—" },
          { name: { uz: "Suv sovutgichi", ru: "Чиллер", en: "Water Chiller" }, spec: "Hanli", quantity: "—" },
          { name: { uz: "Lazer boshi", ru: "Лазерная головка", en: "Laser Head" }, spec: "Raytools BS06K", quantity: "—" },
          { name: { uz: "Boshqaruv tizimi", ru: "Система управления", en: "Control System" }, spec: "Raytools XC3000S", quantity: "—" },
          { name: { uz: "Servo motor", ru: "Серводвигатель", en: "Servo Motor" }, spec: "Taiwan Delta", quantity: "—" },
          { name: { uz: "Reduktor", ru: "Редуктор", en: "Reducer" }, spec: "Japan Shimpo", quantity: "—" },
          { name: { uz: "Elektr komponentlar", ru: "Электрокомпоненты", en: "Electrical Components" }, spec: "France Schneider", quantity: "—" },
          { name: { uz: "Yo'l yo'riqnomasi", ru: "Направляющие", en: "Guide Rail" }, spec: "Italy PEK", quantity: "—" },
          { name: { uz: "Rack", ru: "Рейка", en: "Rack" }, spec: "Germany Leitesen", quantity: "—" },
          { name: { uz: "Proportsional klapan", ru: "Пропорциональный клапан", en: "Proportional Valve" }, spec: "Japan SMC", quantity: "—" },
          { name: { uz: "Himoya linzalar va nozullar", ru: "Защитные линзы и форсунки", en: "Protective Lens & Nozzles" }, spec: "20 ta to'plam", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Savdo shartlari", ru: "Коммерческие условия", en: "Commercial Terms" },
        items: [
          { name: { uz: "Kafolat", ru: "Гарантия", en: "Warranty" }, spec: "2 yil", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Срок поставки", en: "Delivery" }, spec: "20 ish kuni", quantity: "—" },
          { name: { uz: "To'lov", ru: "Оплата", en: "Payment" }, spec: "30% + 70%", quantity: "—" },
        ],
      },
    ],
    warranty: { months: 24, validityDays: 730, installation: { engineersOnSite: 0, dailyRateUsd: 0, buyerCovers: [] } },
    i18n: {
      uz: {
        name: "HN-6015L Fiber lazer kesish stanogi — 3 kW",
        shortName: "HN-6015L 3kW",
        tagline: "1500×6000 mm ish maydoni, 3 kW Raycus fiber lazer",
        description: "HN-6015L fiber lazer kesish stanogi — 1500×6000 mm ish maydoni, 3 kW Raycus lazer, Raytools XC3000S boshqaruv. Maksimal tezlik 133 m/min, aniqlik ±0.02 mm/m. O'rta qalinlikdagi metall kesish uchun optimal variant. 2 yillik kafolat.",
      },
      ru: {
        name: "HN-6015L Волоконный лазерный станок — 3 кВт",
        shortName: "HN-6015L 3кВт",
        tagline: "Рабочая зона 1500×6000 мм, лазер Raycus 3 кВт",
        description: "Волоконный лазерный станок HN-6015L с рабочей зоной 1500×6000 мм, лазером Raycus 3 кВт и системой управления Raytools XC3000S. Макс. скорость 133 м/мин, точность ±0.02 мм/м. Оптимальный вариант для резки металла средней толщины. Гарантия 2 года.",
      },
      en: {
        name: "HN-6015L Fiber Laser Cutting Machine — 3 kW",
        shortName: "HN-6015L 3kW",
        tagline: "1500×6000 mm work area, 3 kW Raycus fiber laser",
        description: "HN-6015L fiber laser cutting machine with 1500×6000 mm work area, 3 kW Raycus laser and Raytools XC3000S control. Max speed 133 m/min, accuracy ±0.02 mm/m. Optimal for medium-thickness metal cutting. 2-year warranty.",
      },
    },
  },
  {
    slug: "hn-6015l-6kw",
    modelCode: "HN-6015L 6kW",
    categorySlug: "laser-stanoki",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: laserStanokImages,
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 6,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 4000, w: 2300, h: 1800 },
    },
    commercial: {
      containerType: "FOB",
      priceUsdExw: 20900,
      deliveryWorkingDays: 20,
      paymentTerms: "30% avans, 70% yetkazib berishdan oldin",
      colorPolicy: "Standard",
    },
    configuration: [
      {
        systemName: { uz: "Texnik xususiyatlar", ru: "Технические характеристики", en: "Technical Specifications" },
        items: [
          { name: { uz: "Ish maydoni", ru: "Рабочая зона", en: "Working Area" }, spec: "1500×6000 mm", quantity: "—" },
          { name: { uz: "Lazer quvvati", ru: "Мощность лазера", en: "Laser Power" }, spec: "6 kW (Raycus)", quantity: "—" },
          { name: { uz: "Lazer turi", ru: "Тип лазера", en: "Laser Type" }, spec: "Fiber laser", quantity: "—" },
          { name: { uz: "Maksimal tezlik", ru: "Максимальная скорость", en: "Max Speed" }, spec: "133 m/min", quantity: "—" },
          { name: { uz: "Tezlanish", ru: "Ускорение", en: "Acceleration" }, spec: "1.5G", quantity: "—" },
          { name: { uz: "Pozitsion aniqlik", ru: "Точность позиционирования", en: "Position Accuracy" }, spec: "±0.02 mm/1000mm", quantity: "—" },
          { name: { uz: "Qayta joylash aniqligi", ru: "Точность повторного позиционирования", en: "Reposition Accuracy" }, spec: "±0.03 mm/1000mm", quantity: "—" },
          { name: { uz: "Mashina o'lchamlari", ru: "Габариты машины", en: "Machine Size" }, spec: "4000×2300×1800 mm", quantity: "—" },
          { name: { uz: "Mashina vazni", ru: "Вес машины", en: "Machine Weight" }, spec: "4500 kg", quantity: "—" },
          { name: { uz: "Kuchlanish", ru: "Напряжение", en: "Voltage" }, spec: "3P 380V 50/60Hz", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Tarkibiy qismlar", ru: "Комплектующие", en: "Components" },
        items: [
          { name: { uz: "Lazer manba", ru: "Источник лазера", en: "Laser Source" }, spec: "Raycus", quantity: "—" },
          { name: { uz: "Suv sovutgichi", ru: "Чиллер", en: "Water Chiller" }, spec: "Hanli", quantity: "—" },
          { name: { uz: "Lazer boshi", ru: "Лазерная головка", en: "Laser Head" }, spec: "Raytools BS06K", quantity: "—" },
          { name: { uz: "Boshqaruv tizimi", ru: "Система управления", en: "Control System" }, spec: "Raytools XC3000S", quantity: "—" },
          { name: { uz: "Servo motor", ru: "Серводвигатель", en: "Servo Motor" }, spec: "Taiwan Delta", quantity: "—" },
          { name: { uz: "Reduktor", ru: "Редуктор", en: "Reducer" }, spec: "Japan Shimpo", quantity: "—" },
          { name: { uz: "Elektr komponentlar", ru: "Электрокомпоненты", en: "Electrical Components" }, spec: "France Schneider", quantity: "—" },
          { name: { uz: "Yo'l yo'riqnomasi", ru: "Направляющие", en: "Guide Rail" }, spec: "Italy PEK", quantity: "—" },
          { name: { uz: "Rack", ru: "Рейка", en: "Rack" }, spec: "Germany Leitesen", quantity: "—" },
          { name: { uz: "Proportsional klapan", ru: "Пропорциональный клапан", en: "Proportional Valve" }, spec: "Japan SMC", quantity: "—" },
          { name: { uz: "Himoya linzalar va nozullar", ru: "Защитные линзы и форсунки", en: "Protective Lens & Nozzles" }, spec: "20 ta to'plam", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Savdo shartlari", ru: "Коммерческие условия", en: "Commercial Terms" },
        items: [
          { name: { uz: "Kafolat", ru: "Гарантия", en: "Warranty" }, spec: "2 yil", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Срок поставки", en: "Delivery" }, spec: "20 ish kuni", quantity: "—" },
          { name: { uz: "To'lov", ru: "Оплата", en: "Payment" }, spec: "30% + 70%", quantity: "—" },
        ],
      },
    ],
    warranty: { months: 24, validityDays: 730, installation: { engineersOnSite: 0, dailyRateUsd: 0, buyerCovers: [] } },
    i18n: {
      uz: {
        name: "HN-6015L Fiber lazer kesish stanogi — 6 kW",
        shortName: "HN-6015L 6kW",
        tagline: "1500×6000 mm ish maydoni, 6 kW yuqori quvvatli Raycus lazer",
        description: "HN-6015L fiber lazer kesish stanogi — 1500×6000 mm ish maydoni, 6 kW Raycus lazer, Raytools XC3000S boshqaruv. Maksimal tezlik 133 m/min, aniqlik ±0.02 mm/m. Qalin metall listlar kesish uchun eng kuchli variant. 2 yillik kafolat.",
      },
      ru: {
        name: "HN-6015L Волоконный лазерный станок — 6 кВт",
        shortName: "HN-6015L 6кВт",
        tagline: "Рабочая зона 1500×6000 мм, лазер Raycus 6 кВт",
        description: "Волоконный лазерный станок HN-6015L с рабочей зоной 1500×6000 мм, мощным лазером Raycus 6 кВт и системой управления Raytools XC3000S. Макс. скорость 133 м/мин, точность ±0.02 мм/м. Наиболее мощный вариант для резки толстых металлических листов. Гарантия 2 года.",
      },
      en: {
        name: "HN-6015L Fiber Laser Cutting Machine — 6 kW",
        shortName: "HN-6015L 6kW",
        tagline: "1500×6000 mm work area, 6 kW high-power Raycus fiber laser",
        description: "HN-6015L fiber laser cutting machine with 1500×6000 mm work area, 6 kW Raycus laser and Raytools XC3000S control. Max speed 133 m/min, accuracy ±0.02 mm/m. Most powerful option for cutting thick metal sheets. 2-year warranty.",
      },
    },
  },

  // ── CNC gidravlik press tormozi (110T va 220T) ───────────────────────
  {
    slug: "cnc-press-110t-3200",
    modelCode: "MB8 110T/3200",
    categorySlug: "metalga-ishlov-berish",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/metalga-ishlov-berish/cover.jpeg",
    ],
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "EXW",
      priceUsdExw: 16650,
      deliveryWorkingDays: 35,
      paymentTerms: "30% avans, 70% yetkazib berishdan oldin",
      colorPolicy: "Buyurtmachi talabiga ko'ra",
    },
    configuration: [
      {
        systemName: { uz: "Texnik xususiyatlar", ru: "Технические характеристики", en: "Technical Specifications" },
        items: [
          { name: { uz: "Quvvat / bukish uzunligi", ru: "Усилие / длина гибки", en: "Tonnage / Bending Length" }, spec: "110T / 3200 mm", quantity: "—" },
          { name: { uz: "CNC tizimi", ru: "ЧПУ система", en: "CNC System" }, spec: "E-Touch 18 (4+1 o'q)", quantity: "—" },
          { name: { uz: "Bukish aniqligi", ru: "Точность гибки", en: "Bending Accuracy" }, spec: "±0.01 mm", quantity: "—" },
          { name: { uz: "O'qlar", ru: "Оси", en: "Axes" }, spec: "Y1, Y2, X, R + V", quantity: "—" },
          { name: { uz: "Konstruktsiya", ru: "Конструкция", en: "Construction" }, spec: "ST44-1 po'lat, monoblok", quantity: "—" },
          { name: { uz: "Seriya", ru: "Серия", en: "Series" }, spec: "MB8 (EU dizayn)", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "CNC boshqaruv — E-Touch 18", ru: "ЧПУ управление — E-Touch 18", en: "CNC Control — E-Touch 18" },
        items: [
          { name: { uz: "Ekran", ru: "Экран", en: "Display" }, spec: "21.5\" TFT sensor ekran", quantity: "—" },
          { name: { uz: "Dasturlash", ru: "Программирование", en: "Programming" }, spec: "2D chizma + jadval + 3D displei", quantity: "—" },
          { name: { uz: "Sinxronizatsiya", ru: "Синхронизация", en: "Synchronization" }, spec: "Y1+Y2 gidravlik ±0.01 mm", quantity: "—" },
          { name: { uz: "Energiya tejash", ru: "Энергосбережение", en: "Energy Saving" }, spec: "Servo nasos, ~40%", quantity: "—" },
          { name: { uz: "Tillar", ru: "Языки", en: "Languages" }, spec: "UZ, RU, EN, CN va boshqalar", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Savdo shartlari", ru: "Коммерческие условия", en: "Commercial Terms" },
        items: [
          { name: { uz: "Kafolat", ru: "Гарантия", en: "Warranty" }, spec: "15 oy", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Срок поставки", en: "Delivery" }, spec: "30–35 ish kuni", quantity: "—" },
          { name: { uz: "To'lov sharti", ru: "Условие оплаты", en: "Payment" }, spec: "30% + 70%", quantity: "—" },
        ],
      },
    ],
    warranty: { months: 15, validityDays: 450, installation: { engineersOnSite: 0, dailyRateUsd: 0, buyerCovers: [] } },
    i18n: {
      uz: {
        name: "CNC gidravlik press tormozi — 110T 3200mm",
        shortName: "Press 110T/3200",
        tagline: "MB8 seriya elektro-gidravlik CNC press tormozi",
        description: "110 tonna kuchli, 3200 mm uzunlikdagi CNC gidravlik press tormozi (MB8 seriya). E-Touch 18 CNC tizimi bilan 4+1 o'q boshqaruvi, ±0.01 mm bukish aniqligi. Monoblok ST44-1 po'lat konstruktsiya, servo nasos (40% energiya tejash). Metall list egilishi uchun.",
      },
      ru: {
        name: "CNC гидравлический листогиб — 110Т 3200мм",
        shortName: "Листогиб 110Т/3200",
        tagline: "Серия MB8 — электрогидравлический синхронный листогиб",
        description: "CNC гидравлический листогиб усилием 110 тонн, длина гиба 3200 мм (серия MB8). Система ЧПУ E-Touch 18: управление 4+1 осями, точность ±0,01 мм. Монолитная конструкция из стали ST44-1, сервонасос (экономия энергии 40%). Для гибки листового металла.",
      },
      en: {
        name: "CNC Hydraulic Press Brake — 110T 3200mm",
        shortName: "Press Brake 110T/3200",
        tagline: "MB8 series electro-hydraulic synchronous press brake",
        description: "110-ton CNC hydraulic press brake with 3200 mm bending length (MB8 series). E-Touch 18 CNC system: 4+1 axis control, ±0.01 mm accuracy. Monolithic ST44-1 steel frame, servo pump (40% energy saving). For sheet metal bending.",
      },
    },
  },
  {
    slug: "cnc-press-220t-4100",
    modelCode: "WC67v 220T/4100",
    categorySlug: "metalga-ishlov-berish",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/metalga-ishlov-berish/cover.jpeg",
    ],
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 15,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 4300, w: 1900, h: 2450 },
    },
    commercial: {
      containerType: "EXW",
      priceUsdExw: 23750,
      deliveryWorkingDays: 35,
      paymentTerms: "30% avans, 70% yetkazib berishdan oldin",
      colorPolicy: "Buyurtmachi talabiga ko'ra",
    },
    configuration: [
      {
        systemName: { uz: "Texnik xususiyatlar", ru: "Технические характеристики", en: "Technical Specifications" },
        items: [
          { name: { uz: "Nominal bosim", ru: "Номинальное усилие", en: "Nominal Pressure" }, spec: "2200 kN (220T)", quantity: "—" },
          { name: { uz: "Maksimal bukish kengligi", ru: "Максимальная длина гибки", en: "Max Bending Length" }, spec: "4100 mm", quantity: "—" },
          { name: { uz: "Ustunlar orasidagi masofa", ru: "Расстояние между стойками", en: "Column Spacing" }, spec: "3100 mm", quantity: "—" },
          { name: { uz: "Asosiy motor quvvati", ru: "Мощность главного двигателя", en: "Main Motor Power" }, spec: "15 kW", quantity: "—" },
          { name: { uz: "Tezlik", ru: "Скорость", en: "Speed" }, spec: "200 mm/s", quantity: "—" },
          { name: { uz: "Mashina o'lchamlari", ru: "Габаритные размеры", en: "Machine Dimensions" }, spec: "4300×1900×2450 mm", quantity: "—" },
          { name: { uz: "Qolip materiali", ru: "Материал пуансона", en: "Die Material" }, spec: "42CrMo", quantity: "—" },
          { name: { uz: "O'qlar", ru: "Оси", en: "Axes" }, spec: "Y1, Y2, X, R, V", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "CNC boshqaruv — E-Touch 18", ru: "ЧПУ управление — E-Touch 18", en: "CNC Control — E-Touch 18" },
        items: [
          { name: { uz: "Ekran", ru: "Экран", en: "Display" }, spec: "21.5\" TFT sensor ekran", quantity: "—" },
          { name: { uz: "Bukish aniqligi", ru: "Точность гибки", en: "Bending Accuracy" }, spec: "±0.01 mm", quantity: "—" },
          { name: { uz: "Dasturlash", ru: "Программирование", en: "Programming" }, spec: "2D chizma + jadval + 3D displei", quantity: "—" },
          { name: { uz: "Sinxronizatsiya", ru: "Синхронизация", en: "Synchronization" }, spec: "Y1+Y2 gidravlik ±0.01 mm", quantity: "—" },
          { name: { uz: "Energiya tejash", ru: "Энергосбережение", en: "Energy Saving" }, spec: "Servo nasos, ~40%", quantity: "—" },
          { name: { uz: "Konteyner", ru: "Контейнер", en: "Container" }, spec: "40HQ", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Savdo shartlari", ru: "Коммерческие условия", en: "Commercial Terms" },
        items: [
          { name: { uz: "Kafolat", ru: "Гарантия", en: "Warranty" }, spec: "15 oy", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Срок поставки", en: "Delivery" }, spec: "30–35 ish kuni", quantity: "—" },
          { name: { uz: "To'lov sharti", ru: "Условие оплаты", en: "Payment" }, spec: "30% + 70%", quantity: "—" },
        ],
      },
    ],
    warranty: { months: 15, validityDays: 450, installation: { engineersOnSite: 0, dailyRateUsd: 0, buyerCovers: [] } },
    i18n: {
      uz: {
        name: "CNC gidravlik press tormozi — 220T 4100mm",
        shortName: "Press 220T/4100",
        tagline: "WC67v seriya elektro-gidravlik CNC press tormozi",
        description: "220 tonna kuchli (2200 kN), 4100 mm uzunlikdagi CNC gidravlik press tormozi (WC67v seriya). Asosiy motor 15 kW, tezlik 200 mm/s. E-Touch 18 CNC tizimi bilan 5 o'q (Y1, Y2, X, R, V), bukish aniqligi ±0.01 mm. 42CrMo qolip materiali, 40HQ konteynerda yetkaziladi.",
      },
      ru: {
        name: "CNC гидравлический листогиб — 220Т 4100мм",
        shortName: "Листогиб 220Т/4100",
        tagline: "Серия WC67v — электрогидравлический синхронный листогиб",
        description: "CNC гидравлический листогиб усилием 220 тонн (2200 кН), длина гиба 4100 мм (серия WC67v). Двигатель 15 кВт, скорость 200 мм/с. ЧПУ E-Touch 18: 5 осей (Y1, Y2, X, R, V), точность ±0.01 мм. Материал пуансона 42CrMo, поставка в 40HQ контейнере.",
      },
      en: {
        name: "CNC Hydraulic Press Brake — 220T 4100mm",
        shortName: "Press Brake 220T/4100",
        tagline: "WC67v series electro-hydraulic synchronous press brake",
        description: "220-ton (2200 kN) CNC hydraulic press brake with 4100 mm bending length (WC67v series). Main motor 15 kW, speed 200 mm/s. E-Touch 18 CNC: 5 axes (Y1, Y2, X, R, V), ±0.01 mm accuracy. Die material 42CrMo, delivered in 40HQ container.",
      },
    },
  },

  // ── Plastik IMM mashinalari (130T – 530T) ─────────────────────────────
  {
    slug: "plastik-imm-130t",
    modelCode: "HTF*W-138T",
    categorySlug: "plastik-idishlar",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/plastik-idishlar/cover.jpeg",
    ],
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "B-42 mm vint",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "EXW",
      priceUsdExw: 13500,
      deliveryWorkingDays: 90,
      paymentTerms: "30% avans, 70% yetkazib berishdan oldin",
      colorPolicy: "Buyurtmachi talabiga ko'ra",
    },
    configuration: [
      {
        systemName: { uz: "Texnik xususiyatlar", ru: "Технические характеристики", en: "Technical Specifications" },
        items: [
          { name: { uz: "Model", ru: "Модель", en: "Model" }, spec: "HTF*W-138T/JD", quantity: "—" },
          { name: { uz: "Qisish kuchi", ru: "Усилие смыкания", en: "Clamping Force" }, spec: "130 T", quantity: "—" },
          { name: { uz: "Bog'lovchi novdalar orasidagi bo'shliq", ru: "Расстояние между колоннами", en: "Tie Bar Spacing" }, spec: "420×420 mm", quantity: "—" },
          { name: { uz: "Vint diametri", ru: "Диаметр шнека", en: "Screw Diameter" }, spec: "B-42 mm", quantity: "—" },
          { name: { uz: "Konfiguratsiya", ru: "Конфигурация", en: "Configuration" }, spec: "Kengaytirilgan servo", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Savdo shartlari", ru: "Коммерческие условия", en: "Commercial Terms" },
        items: [
          { name: { uz: "Kafolat", ru: "Гарантия", en: "Warranty" }, spec: "15 oy", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Срок поставки", en: "Delivery" }, spec: "90 ish kuni", quantity: "—" },
          { name: { uz: "To'lov sharti", ru: "Условие оплаты", en: "Payment" }, spec: "30% + 70%", quantity: "—" },
        ],
      },
    ],
    warranty: { months: 15, validityDays: 450, installation: { engineersOnSite: 0, dailyRateUsd: 0, buyerCovers: [] } },
    i18n: {
      uz: {
        name: "Plastik ishlab chiqarish mashinasi — 130T",
        shortName: "IMM 130T",
        tagline: "HTF*W-138T/JD servo injeksion qoliplash mashinasi",
        description: "130 tonna qisish kuchiga ega servo injeksion qoliplash mashinasi (HTF*W-138T/JD). Bog'lovchi novdalar bo'shliq: 420×420 mm, B-42 mm vint. Kengaytirilgan konfiguratsiya. Plastik idish, qozon, avtomobil qismlari va boshqa mahsulotlar uchun.",
      },
      ru: {
        name: "Термопластавтомат — 130Т",
        shortName: "ТПА 130Т",
        tagline: "Сервопривод HTF*W-138T/JD — расширенная конфигурация",
        description: "Термопластавтомат с усилием смыкания 130 тонн (HTF*W-138T/JD). Расстояние между колоннами: 420×420 мм, диаметр шнека B-42 мм. Расширенная конфигурация с серводвигателем. Для производства пластиковой тары, корпусов, автозапчастей.",
      },
      en: {
        name: "Injection Molding Machine — 130T",
        shortName: "IMM 130T",
        tagline: "HTF*W-138T/JD servo injection molding machine",
        description: "130-ton clamping force servo injection molding machine (HTF*W-138T/JD). Tie bar spacing: 420×420 mm, screw diameter B-42 mm. Extended configuration. Suitable for plastic containers, housings, auto parts and other products.",
      },
    },
  },
  {
    slug: "plastik-imm-220t",
    modelCode: "HTF*W-228T",
    categorySlug: "plastik-idishlar",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/plastik-idishlar/cover.jpeg",
    ],
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "B-50 mm vint",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "EXW",
      priceUsdExw: 23550,
      deliveryWorkingDays: 90,
      paymentTerms: "30% avans, 70% yetkazib berishdan oldin",
      colorPolicy: "Buyurtmachi talabiga ko'ra",
    },
    configuration: [
      {
        systemName: { uz: "Texnik xususiyatlar", ru: "Технические характеристики", en: "Technical Specifications" },
        items: [
          { name: { uz: "Model", ru: "Модель", en: "Model" }, spec: "HTF*W-228T/JD", quantity: "—" },
          { name: { uz: "Qisish kuchi", ru: "Усилие смыкания", en: "Clamping Force" }, spec: "220 T", quantity: "—" },
          { name: { uz: "Bog'lovchi novdalar orasidagi bo'shliq", ru: "Расстояние между колоннами", en: "Tie Bar Spacing" }, spec: "530×530 mm", quantity: "—" },
          { name: { uz: "Vint diametri", ru: "Диаметр шнека", en: "Screw Diameter" }, spec: "B-50 mm", quantity: "—" },
          { name: { uz: "Konfiguratsiya", ru: "Конфигурация", en: "Configuration" }, spec: "Kengaytirilgan servo", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Savdo shartlari", ru: "Коммерческие условия", en: "Commercial Terms" },
        items: [
          { name: { uz: "Kafolat", ru: "Гарантия", en: "Warranty" }, spec: "15 oy", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Срок поставки", en: "Delivery" }, spec: "90 ish kuni", quantity: "—" },
          { name: { uz: "To'lov sharti", ru: "Условие оплаты", en: "Payment" }, spec: "30% + 70%", quantity: "—" },
        ],
      },
    ],
    warranty: { months: 15, validityDays: 450, installation: { engineersOnSite: 0, dailyRateUsd: 0, buyerCovers: [] } },
    i18n: {
      uz: {
        name: "Plastik ishlab chiqarish mashinasi — 220T",
        shortName: "IMM 220T",
        tagline: "HTF*W-228T/JD servo injeksion qoliplash mashinasi",
        description: "220 tonna qisish kuchiga ega servo injeksion qoliplash mashinasi (HTF*W-228T/JD). Bog'lovchi novdalar bo'shliq: 530×530 mm, B-50 mm vint. Kengaytirilgan konfiguratsiya. Katta hajmli plastik idish va mahsulotlar uchun.",
      },
      ru: {
        name: "Термопластавтомат — 220Т",
        shortName: "ТПА 220Т",
        tagline: "Сервопривод HTF*W-228T/JD — расширенная конфигурация",
        description: "Термопластавтомат с усилием смыкания 220 тонн (HTF*W-228T/JD). Расстояние между колоннами: 530×530 мм, диаметр шнека B-50 мм. Расширенная сервоконфигурация для крупногабаритной пластиковой тары.",
      },
      en: {
        name: "Injection Molding Machine — 220T",
        shortName: "IMM 220T",
        tagline: "HTF*W-228T/JD servo injection molding machine",
        description: "220-ton clamping force servo injection molding machine (HTF*W-228T/JD). Tie bar spacing: 530×530 mm, screw diameter B-50 mm. Extended configuration for larger plastic containers and parts.",
      },
    },
  },
  {
    slug: "plastik-imm-360t",
    modelCode: "HTF*W-368T",
    categorySlug: "plastik-idishlar",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/plastik-idishlar/cover.jpeg",
    ],
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "B-65 mm vint",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "EXW",
      priceUsdExw: 36200,
      deliveryWorkingDays: 90,
      paymentTerms: "30% avans, 70% yetkazib berishdan oldin",
      colorPolicy: "Buyurtmachi talabiga ko'ra",
    },
    configuration: [
      {
        systemName: { uz: "Texnik xususiyatlar", ru: "Технические характеристики", en: "Technical Specifications" },
        items: [
          { name: { uz: "Model", ru: "Модель", en: "Model" }, spec: "HTF*W-368T/JD", quantity: "—" },
          { name: { uz: "Qisish kuchi", ru: "Усилие смыкания", en: "Clamping Force" }, spec: "360 T", quantity: "—" },
          { name: { uz: "Bog'lovchi novdalar orasidagi bo'shliq", ru: "Расстояние между колоннами", en: "Tie Bar Spacing" }, spec: "680×680 mm", quantity: "—" },
          { name: { uz: "Vint diametri", ru: "Диаметр шнека", en: "Screw Diameter" }, spec: "B-65 mm", quantity: "—" },
          { name: { uz: "Konfiguratsiya", ru: "Конфигурация", en: "Configuration" }, spec: "Kengaytirilgan servo", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Savdo shartlari", ru: "Коммерческие условия", en: "Commercial Terms" },
        items: [
          { name: { uz: "Kafolat", ru: "Гарантия", en: "Warranty" }, spec: "15 oy", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Срок поставки", en: "Delivery" }, spec: "90 ish kuni", quantity: "—" },
          { name: { uz: "To'lov sharti", ru: "Условие оплаты", en: "Payment" }, spec: "30% + 70%", quantity: "—" },
        ],
      },
    ],
    warranty: { months: 15, validityDays: 450, installation: { engineersOnSite: 0, dailyRateUsd: 0, buyerCovers: [] } },
    i18n: {
      uz: {
        name: "Plastik ishlab chiqarish mashinasi — 360T",
        shortName: "IMM 360T",
        tagline: "HTF*W-368T/JD servo injeksion qoliplash mashinasi",
        description: "360 tonna qisish kuchiga ega servo injeksion qoliplash mashinasi (HTF*W-368T/JD). Bog'lovchi novdalar bo'shliq: 680×680 mm, B-65 mm vint. O'rta va katta hajmli plastik mahsulotlar uchun.",
      },
      ru: {
        name: "Термопластавтомат — 360Т",
        shortName: "ТПА 360Т",
        tagline: "Сервопривод HTF*W-368T/JD — расширенная конфигурация",
        description: "Термопластавтомат с усилием смыкания 360 тонн (HTF*W-368T/JD). Расстояние между колоннами: 680×680 мм, диаметр шнека B-65 мм. Для средних и крупных пластиковых изделий.",
      },
      en: {
        name: "Injection Molding Machine — 360T",
        shortName: "IMM 360T",
        tagline: "HTF*W-368T/JD servo injection molding machine",
        description: "360-ton clamping force servo injection molding machine (HTF*W-368T/JD). Tie bar spacing: 680×680 mm, screw diameter B-65 mm. For medium and large plastic products.",
      },
    },
  },
  {
    slug: "plastik-imm-450t",
    modelCode: "HTF*W-450T",
    categorySlug: "plastik-idishlar",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/plastik-idishlar/cover.jpeg",
    ],
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "B-80 mm vint",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "EXW",
      priceUsdExw: 45350,
      deliveryWorkingDays: 90,
      paymentTerms: "30% avans, 70% yetkazib berishdan oldin",
      colorPolicy: "Buyurtmachi talabiga ko'ra",
    },
    configuration: [
      {
        systemName: { uz: "Texnik xususiyatlar", ru: "Технические характеристики", en: "Technical Specifications" },
        items: [
          { name: { uz: "Model", ru: "Модель", en: "Model" }, spec: "HTF*W-450T/JD", quantity: "—" },
          { name: { uz: "Qisish kuchi", ru: "Усилие смыкания", en: "Clamping Force" }, spec: "450 T", quantity: "—" },
          { name: { uz: "Bog'lovchi novlar orasidagi bo'shliq", ru: "Расстояние между колоннами", en: "Tie Bar Spacing" }, spec: "760×760 mm", quantity: "—" },
          { name: { uz: "Vint diametri", ru: "Диаметр шнека", en: "Screw Diameter" }, spec: "B-80 mm", quantity: "—" },
          { name: { uz: "Konfiguratsiya", ru: "Конфигурация", en: "Configuration" }, spec: "Kengaytirilgan servo", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Savdo shartlari", ru: "Коммерческие условия", en: "Commercial Terms" },
        items: [
          { name: { uz: "Kafolat", ru: "Гарантия", en: "Warranty" }, spec: "15 oy", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Срок поставки", en: "Delivery" }, spec: "90 ish kuni", quantity: "—" },
          { name: { uz: "To'lov sharti", ru: "Условие оплаты", en: "Payment" }, spec: "30% + 70%", quantity: "—" },
        ],
      },
    ],
    warranty: { months: 15, validityDays: 450, installation: { engineersOnSite: 0, dailyRateUsd: 0, buyerCovers: [] } },
    i18n: {
      uz: {
        name: "Plastik ishlab chiqarish mashinasi — 450T",
        shortName: "IMM 450T",
        tagline: "HTF*W-450T/JD servo injeksion qoliplash mashinasi",
        description: "450 tonna qisish kuchiga ega servo injeksion qoliplash mashinasi (HTF*W-450T/JD). Bog'lovchi novlar bo'shliq: 760×760 mm, B-80 mm vint. Og'ir sanoat plastik mahsulotlari uchun.",
      },
      ru: {
        name: "Термопластавтомат — 450Т",
        shortName: "ТПА 450Т",
        tagline: "Сервопривод HTF*W-450T/JD — расширенная конфигурация",
        description: "Термопластавтомат с усилием смыкания 450 тонн (HTF*W-450T/JD). Расстояние между колоннами: 760×760 мм, диаметр шнека B-80 мм. Для тяжёлых промышленных пластиковых изделий.",
      },
      en: {
        name: "Injection Molding Machine — 450T",
        shortName: "IMM 450T",
        tagline: "HTF*W-450T/JD servo injection molding machine",
        description: "450-ton clamping force servo injection molding machine (HTF*W-450T/JD). Tie bar spacing: 760×760 mm, screw diameter B-80 mm. For heavy industrial plastic products.",
      },
    },
  },
  {
    slug: "plastik-imm-530t",
    modelCode: "HTF*W-530T",
    categorySlug: "plastik-idishlar",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/plastik-idishlar/cover.jpeg",
    ],
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 0,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "B-85 mm vint",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 0,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "EXW",
      priceUsdExw: 53460,
      deliveryWorkingDays: 90,
      paymentTerms: "30% avans, 70% yetkazib berishdan oldin",
      colorPolicy: "Buyurtmachi talabiga ko'ra",
    },
    configuration: [
      {
        systemName: { uz: "Texnik xususiyatlar", ru: "Технические характеристики", en: "Technical Specifications" },
        items: [
          { name: { uz: "Model", ru: "Модель", en: "Model" }, spec: "HTF*W-530T/JD", quantity: "—" },
          { name: { uz: "Qisish kuchi", ru: "Усилие смыкания", en: "Clamping Force" }, spec: "530 T", quantity: "—" },
          { name: { uz: "Bog'lovchi novdalar orasidagi bo'shliq", ru: "Расстояние между колоннами", en: "Tie Bar Spacing" }, spec: "830×830 mm", quantity: "—" },
          { name: { uz: "Vint diametri", ru: "Диаметр шнека", en: "Screw Diameter" }, spec: "B-85 mm", quantity: "—" },
          { name: { uz: "Konfiguratsiya", ru: "Конфигурация", en: "Configuration" }, spec: "Kengaytirilgan servo", quantity: "—" },
        ],
      },
      {
        systemName: { uz: "Savdo shartlari", ru: "Коммерческие условия", en: "Commercial Terms" },
        items: [
          { name: { uz: "Kafolat", ru: "Гарантия", en: "Warranty" }, spec: "15 oy", quantity: "—" },
          { name: { uz: "Yetkazib berish", ru: "Срок поставки", en: "Delivery" }, spec: "90 ish kuni", quantity: "—" },
          { name: { uz: "To'lov sharti", ru: "Условие оплаты", en: "Payment" }, spec: "30% + 70%", quantity: "—" },
        ],
      },
    ],
    warranty: { months: 15, validityDays: 450, installation: { engineersOnSite: 0, dailyRateUsd: 0, buyerCovers: [] } },
    i18n: {
      uz: {
        name: "Plastik ishlab chiqarish mashinasi — 530T",
        shortName: "IMM 530T",
        tagline: "HTF*W-530T/JD servo injeksion qoliplash mashinasi",
        description: "530 tonna qisish kuchiga ega servo injeksion qoliplash mashinasi (HTF*W-530T/JD). Bog'lovchi novdalar bo'shliq: 830×830 mm, B-85 mm vint. Eng katta hajmli sanoat plastik mahsulotlari uchun.",
      },
      ru: {
        name: "Термопластавтомат — 530Т",
        shortName: "ТПА 530Т",
        tagline: "Сервопривод HTF*W-530T/JD — расширенная конфигурация",
        description: "Термопластавтомат с усилием смыкания 530 тонн (HTF*W-530T/JD). Расстояние между колоннами: 830×830 мм, диаметр шнека B-85 мм. Для крупнотоннажных промышленных пластиковых изделий.",
      },
      en: {
        name: "Injection Molding Machine — 530T",
        shortName: "IMM 530T",
        tagline: "HTF*W-530T/JD servo injection molding machine",
        description: "530-ton clamping force servo injection molding machine (HTF*W-530T/JD). Tie bar spacing: 830×830 mm, screw diameter B-85 mm. For large-tonnage industrial plastic products.",
      },
    },
  },

  // ── Shifer zavod (4-pozitsiyali fibrosement) ──────────────────────────
  {
    slug: "shifer-zavod-4pos",
    modelCode: "4-pozitsiyali",
    categorySlug: "shifr-zavod",
    status: "preorder",
    isFeatured: false,
    isPopular: false,
    images: [
      "https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/shifr-zavod/cover.jpeg",
    ],
    spec: {
      productivity: { value: 0, unit: "m³/h" },
      cycleTimeSeconds: 0,
      powerKw: 172,
      mixerModel: "—",
      batcherModel: "—",
      feedingModel: "—",
      dischargeMeters: { min: 0, max: 0 },
      airCompressorKw: 15,
      weighingAccuracy: { water: "—", aggregate: "—", cement: "—" },
      dimensionsMm: { l: 0, w: 0, h: 0 },
    },
    commercial: {
      containerType: "FOB",
      priceUsdExw: 120000,
      deliveryWorkingDays: 45,
      paymentTerms: "30% advance / 70% before delivery",
      colorPolicy: "Standard",
    },
    configuration: [
      {
        systemName: { uz: "Suv idishi va loy tashish tizimi", ru: "Система водяного бака и транспортировки сырья", en: "Water Tank & Slurry Transport System" },
        items: [
          { name: { uz: "Suv idishi aralashtirgichi (2.2 kW)", ru: "Мешалка водяного бака (2.2 кВт)", en: "Water tank blender (2.2 kW)" }, spec: "DN150", quantity: "2 ta" },
          { name: { uz: "DN150 uch yo'lli kran", ru: "Трёхходовой кран DN150", en: "DN150 3-way valve" }, spec: "6\"", quantity: "2 ta" },
          { name: { uz: "DN150 ikki yo'lli kran", ru: "Двухходовой кран DN150", en: "DN150 2-way valve" }, spec: "6\"", quantity: "3 ta" },
          { name: { uz: "DN100 uch yo'lli kran", ru: "Трёхходовой кран DN100", en: "DN100 3-way valve" }, spec: "4\"", quantity: "3 ta" },
          { name: { uz: "DN100 ikki yo'lli kran", ru: "Двухходовой кран DN100", en: "DN100 2-way valve" }, spec: "4\"", quantity: "2 ta" },
          { name: { uz: "6 dyuymli nasos", ru: "Шестидюймовый насос", en: "6\" pump" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "6 dyuymli nasos motori (22 kW)", ru: "Двигатель насоса 22 кВт", en: "6\" pump motor (22 kW)" }, spec: "22 kW", quantity: "1 ta" },
        ],
      },
      {
        systemName: { uz: "Markaziy aralashtirgich va sement dozatori", ru: "Центральный смеситель и дозатор цемента", en: "Central Mixer & Cement Dosing System" },
        items: [
          { name: { uz: "Markaziy aralashtirgich", ru: "Центральный смеситель", en: "Central blender" }, spec: "L=2080 mm", quantity: "1 ta" },
          { name: { uz: "Aralashtirgich motori (15 kW)", ru: "Двигатель смесителя (15 кВт)", en: "Blender motor (15 kW)" }, spec: "15 kW", quantity: "1 ta" },
          { name: { uz: "4 dyuymli nasos", ru: "Четырёхдюймовый насос", en: "4\" pump" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "4 dyuymli nasos motori (15 kW)", ru: "Двигатель насоса 4\" (15 кВт)", en: "4\" pump motor (15 kW)" }, spec: "15 kW", quantity: "1 ta" },
          { name: { uz: "Sement tortish idishi", ru: "Контейнер для взвешивания цемента", en: "Cement weighing tank" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Tortish boshqaruv shkafi", ru: "Шкаф управления взвешиванием", en: "Weighing control cabinet" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Pnevmatik tushiruv valfi", ru: "Пневматический разгрузочный клапан", en: "Pneumatic discharge valve" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Vint konveyeri", ru: "Винтовой конвейер", en: "Screw conveyor" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Vint konveyeri motori (7.5 kW)", ru: "Двигатель спирального конвейера (7.5 кВт)", en: "Screw conveyor motor (7.5 kW)" }, spec: "7.5 kW", quantity: "1 ta" },
        ],
      },
      {
        systemName: { uz: "Loy saqlash aralashtirgichi", ru: "Смеситель для хранения шлама", en: "Slurry Storage Mixer" },
        items: [
          { name: { uz: "Korpus va aralashtirgich (5.5 kW)", ru: "Корпус и мешалка (5.5 кВт)", en: "Housing with mixer (5.5 kW)" }, spec: "5.5 kW", quantity: "1 ta" },
          { name: { uz: "Motor (5.5 kW)", ru: "Двигатель (5.5 кВт)", en: "Motor (5.5 kW)" }, spec: "5.5 kW", quantity: "1 ta" },
          { name: { uz: "Reduktor", ru: "Редуктор", en: "Reducer" }, spec: "JZQ350-1-31.5", quantity: "1 ta" },
        ],
      },
      {
        systemName: { uz: "Tor silindr vanna (to'r qutilar)", ru: "Сеточный цилиндр (трёхсекционный)", en: "Cylinder Mold Vat (Triple Section)" },
        items: [
          { name: { uz: "Uch sektsiyali to'r qutilar korpusi", ru: "Корпус трёхсекционного короба", en: "Triple vat housing" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Silindr to'rlar", ru: "Сетчатые цилиндры", en: "Cylinder molds" }, spec: "—", quantity: "3 ta" },
          { name: { uz: "Kauchuk vallar (Гаучвал)", ru: "Гаучвал (резиновый вал)", en: "Rubber couch roll (Гаучвал)" }, spec: "—", quantity: "3 ta" },
          { name: { uz: "Motorlar (3 kW × 6)", ru: "Двигатели (3 кВт × 6)", en: "Motors (3 kW × 6)" }, spec: "3 kW", quantity: "6 ta" },
          { name: { uz: "Reduktorlar (nisbat 9 va 7)", ru: "Редукторы (передаточное число 9 и 7)", en: "Reducers (ratio 9 & 7)" }, spec: "—", quantity: "6 ta" },
          { name: { uz: "Uzatma vallari", ru: "Валы передачи", en: "Drive shafts" }, spec: "—", quantity: "6 ta" },
        ],
      },
      {
        systemName: { uz: "Vakuum suvni chiqarish mashina", ru: "Вакуумная обезвоживающая машина", en: "Vacuum Dewatering Machine" },
        items: [
          { name: { uz: "Asosiy qurilma", ru: "Главный блок", en: "Main unit" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Vakuum rezervuar", ru: "Вакуумный резервуар", en: "Vacuum tank" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Vakuum suvni chiqarish plitasi", ru: "Вакуумная обезвоживающая плита", en: "Vacuum dewatering plate" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Vakuum nasos", ru: "Вакуумный насос", en: "Vacuum pump" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Vakuum nasos motori (15 kW)", ru: "Двигатель вакуумного насоса (15 кВт)", en: "Vacuum pump motor (15 kW)" }, spec: "15 kW", quantity: "1 ta" },
          { name: { uz: "Mato uruvchi motor (3 kW)", ru: "Двигатель встряхивателя ткани (3 кВт)", en: "Fabric beater motor (3 kW)" }, spec: "3 kW", quantity: "1 ta" },
          { name: { uz: "Mato uruvchi reduktori (nisbat 9)", ru: "Редуктор встряхивателя ткани (передат. ч. 9)", en: "Fabric beater reducer (ratio 9)" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Uzatma vali", ru: "Приводной вал", en: "Drive shaft" }, spec: "—", quantity: "1 ta" },
        ],
      },
      {
        systemName: { uz: "Format barabani (shakllantirish mashina)", ru: "Форматный барабан (формовочная машина)", en: "Format Drum (Forming Machine)" },
        items: [
          { name: { uz: "Asosiy korpus", ru: "Главная рама", en: "Main frame" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Shakllantirish silindri", ru: "Формовочный цилиндр", en: "Forming cylinder" }, spec: "Φ630 mm", quantity: "1 ta" },
          { name: { uz: "Ko'krak valigi", ru: "Грудной валик", en: "Breast roller" }, spec: "Φ480 mm · kauchuk 30 mm", quantity: "1 ta" },
          { name: { uz: "Pnevmatik silindrlar", ru: "Пневматические цилиндры", en: "Air cylinders" }, spec: "—", quantity: "2 ta" },
          { name: { uz: "Asosiy motor (30 kW)", ru: "Главный двигатель (30 кВт)", en: "Main motor (30 kW)" }, spec: "30 kW", quantity: "1 ta" },
          { name: { uz: "Chastota o'zgartiruvchi", ru: "Преобразователь частоты", en: "Frequency converter" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Reduktor", ru: "Редуктор", en: "Reducer" }, spec: "JZQ500 23.34-1", quantity: "1 ta" },
          { name: { uz: "Moslashuvchan uzatma vali", ru: "Гибкий приводной вал", en: "Flexible drive shaft" }, spec: "SWC250-BF", quantity: "1 ta" },
        ],
      },
      {
        systemName: { uz: "Konveyer tizimi", ru: "Конвейерная система", en: "Conveyor System" },
        items: [
          { name: { uz: "Qabul qilish stollari", ru: "Приёмные столы", en: "Receiving tables" }, spec: "3 ta lenta", quantity: "3 ta" },
          { name: { uz: "Konveyer motorlari (3 kW × 3)", ru: "Двигатели конвейеров (3 кВт × 3)", en: "Conveyor motors (3 kW × 3)" }, spec: "3 kW", quantity: "3 ta" },
          { name: { uz: "Reduktorlar (nisbat 11)", ru: "Редукторы (передаточное число 11)", en: "Reducers (ratio 11)" }, spec: "—", quantity: "3 ta" },
          { name: { uz: "Konveyer tasmalari", ru: "Конвейерные ленты", en: "Conveyor belts" }, spec: "—", quantity: "3 ta" },
          { name: { uz: "Tangensial kesuvchi qurilma (2 motor + 2 pichoq)", ru: "Тангенциальное режущее устройство (2 мотора + 2 лезвия)", en: "Tangential cutting device (2 motors + 2 blades)" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Oluq roliklar", ru: "Желобчатые ролики", en: "Trough rollers" }, spec: "3 ta konveyer uchun", quantity: "9 ta" },
        ],
      },
      {
        systemName: { uz: "4-pozitsiyali vakuum shakllantirish mashina", ru: "Четырёхпозиционная вакуумная формовочная машина", en: "4-Position Vacuum Forming Machine" },
        items: [
          { name: { uz: "Asosiy rama", ru: "Главная рама", en: "Main frame" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Gidravlik ko'tarma platforma", ru: "Гидравлическая подъёмная платформа", en: "Hydraulic lifting platform" }, spec: "—", quantity: "3 ta" },
          { name: { uz: "Gidravlik nasos stantsiyasi", ru: "Гидравлическая насосная станция", en: "Hydraulic pump station" }, spec: "—", quantity: "2 ta" },
          { name: { uz: "So'ruvchi ventilyator (7.5 kW)", ru: "Всасывающий вентилятор (7.5 кВт)", en: "Suction fan (7.5 kW)" }, spec: "7.5 kW", quantity: "1 ta" },
          { name: { uz: "So'ruvchi ventilyator (5.5 kW)", ru: "Всасывающий вентилятор (5.5 кВт)", en: "Suction fan (5.5 kW)" }, spec: "5.5 kW", quantity: "1 ta" },
          { name: { uz: "Shakllantiruvchi so'rg'ich disk", ru: "Формовочный присосный диск", en: "Forming suction cup" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Shifer qolip so'rg'ichlari", ru: "Присоски для плиток шифера", en: "Tile mold suction cups" }, spec: "—", quantity: "2 ta" },
          { name: { uz: "Qotishma kesuvchi qurilma (2 motor + 2 pichoq)", ru: "Режущее устройство из сплава (2 мотора + 2 лезвия)", en: "Alloy cutting device (2 motors + 2 blades)" }, spec: "—", quantity: "2 ta" },
        ],
      },
      {
        systemName: { uz: "Elektr boshqaruv shkafi", ru: "Электрический шкаф управления", en: "Electrical Control Cabinet" },
        items: [
          { name: { uz: "To'liq boshqaruv to'plami (kabel, signal simlar bilan)", ru: "Полный комплект управления (с кабелями и сигнальными проводами)", en: "Full control set (with wiring & signal cables)" }, spec: "—", quantity: "1 ta" },
        ],
      },
      {
        systemName: { uz: "Chiqindi qayta ishlash aralashtirgichi", ru: "Мешалка для переработки отходов", en: "Waste Material Recycler" },
        items: [
          { name: { uz: "Aralashtirgich (L=2080 mm)", ru: "Мешалка (L=2080 мм)", en: "Mixer (L=2080 mm)" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "Motor (15 kW)", ru: "Двигатель (15 кВт)", en: "Motor (15 kW)" }, spec: "15 kW", quantity: "1 ta" },
          { name: { uz: "4 dyuymli nasos", ru: "Четырёхдюймовый насос", en: "4\" pump" }, spec: "—", quantity: "1 ta" },
          { name: { uz: "4 dyuymli nasos motori (15 kW)", ru: "Двигатель насоса 4\" (15 кВт)", en: "4\" pump motor (15 kW)" }, spec: "15 kW", quantity: "1 ta" },
        ],
      },
      {
        systemName: { uz: "Havo kompressori", ru: "Воздушный компрессор", en: "Air Compressor" },
        items: [
          { name: { uz: "Vintli havo kompressori (15 kW)", ru: "Винтовой воздушный компрессор (15 кВт)", en: "Screw air compressor (15 kW)" }, spec: "15 kW", quantity: "1 ta" },
          { name: { uz: "Havo saqlash rezervuari", ru: "Воздушный ресивер", en: "Air storage tank" }, spec: "1 m³", quantity: "1 ta" },
        ],
      },
    ],
    warranty: {
      months: 12,
      validityDays: 365,
      installation: {
        engineersOnSite: 1,
        dailyRateUsd: 0,
        buyerCovers: ["turar joy", "oziq-ovqat", "ikki tomonlama yo'l xarajatlari"],
      },
    },
    i18n: {
      uz: {
        name: "Fibrosement shifer zavodi — 4 pozitsiyali",
        shortName: "Shifer zavodi",
        tagline: "To'liq fibrosement shifer ishlab chiqarish liniyasi",
        description:
          "4 pozitsiyali fibrosement shifer ishlab chiqarish liniyasi. Tarkibida: vakuum shakllantirish mashina, format barabani, silindr to'r vanna, vakuum suvni chiqarish qurilmasi, sement dozatori, 3 ta lenta konveyeri, chiqindi qayta ishlash tizimi va elektr boshqaruv shkafi. Umumiy quvvat ≈172 kW. Narx $120,000.",
      },
      ru: {
        name: "Завод по производству фиброцементного шифера — 4-позиционный",
        shortName: "Шиферный завод",
        tagline: "Полная линия производства фиброцементного шифера",
        description:
          "4-позиционная линия производства фиброцементного шифера. Включает: вакуумную формовочную машину, форматный барабан, сеточный цилиндр, вакуумный обезвоживатель, дозатор цемента, 3 ленточных конвейера, систему переработки отходов и электрошкаф управления. Общая мощность ≈172 кВт. Цена $120,000.",
      },
      en: {
        name: "Fiber Cement Slate Factory — 4-Position Line",
        shortName: "Fiber Cement Slate Plant",
        tagline: "Complete fiber cement slate production line",
        description:
          "4-position fiber cement slate production line. Includes: vacuum forming machine, format drum, cylinder mold vat, vacuum dewatering unit, cement dosing system, 3 belt conveyors, waste recycler and electrical control cabinet. Total power ≈172 kW. Price $120,000.",
      },
    },
  },

];
