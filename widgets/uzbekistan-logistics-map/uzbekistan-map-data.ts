import {
  UZBEKISTAN_MAP_VIEWBOX,
  UZBEKISTAN_REGION_PATHS,
  UZBEKISTAN_ARAL_SEA_PATH,
} from "./uzbekistan-regions-paths";

export { UZBEKISTAN_MAP_VIEWBOX, UZBEKISTAN_REGION_PATHS, UZBEKISTAN_ARAL_SEA_PATH };

export type UzbekistanMapMarkerId =
  | "office"
  | "karakalpakstan"
  | "khorezm"
  | "navoiy"
  | "bukhara"
  | "samarkand"
  | "kashkadarya"
  | "surkhandarya"
  | "syrdarya"
  | "jizzakh"
  | "tashkent-city"
  | "tashkent-region"
  | "namangan"
  | "fergana"
  | "andijan";

export interface UzbekistanMapMarker {
  id: UzbekistanMapMarkerId;
  /** Matches `Region.slug` in mock data */
  regionSlug: string;
  x: number;
  y: number;
  /** HQ / capital — larger marker */
  isPrimary?: boolean;
  /** Verikore office (Tashkent) */
  isOffice?: boolean;
}

/** Marker positions on design/uzbekistan.svg viewBox (792.5 × 516.9). */
export const UZBEKISTAN_MAP_MARKERS: UzbekistanMapMarker[] = [
  { id: "karakalpakstan", regionSlug: "karakalpakstan", x: 195, y: 95 },
  { id: "khorezm", regionSlug: "khorezm", x: 138, y: 154 },
  { id: "navoiy", regionSlug: "navoiy", x: 239, y: 111 },
  { id: "bukhara", regionSlug: "bukhara", x: 202, y: 182 },
  { id: "samarkand", regionSlug: "samarkand", x: 258, y: 192 },
  { id: "kashkadarya", regionSlug: "kashkadarya", x: 205, y: 188 },
  { id: "surkhandarya", regionSlug: "surkhandarya", x: 284, y: 224 },
  { id: "syrdarya", regionSlug: "syrdarya", x: 295, y: 163 },
  { id: "jizzakh", regionSlug: "jizzakh", x: 284, y: 182 },
  { id: "office", regionSlug: "tashkent-city", x: 674, y: 274, isOffice: true },
  { id: "tashkent-city", regionSlug: "tashkent-city", x: 619, y: 268, isPrimary: true },
  { id: "tashkent-region", regionSlug: "tashkent-region", x: 520, y: 240 },
  { id: "namangan", regionSlug: "namangan", x: 339, y: 138 },
  { id: "fergana", regionSlug: "fergana", x: 335, y: 164 },
  { id: "andijan", regionSlug: "andijan", x: 371, y: 157 },
];
