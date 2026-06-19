/**
 * Copies source JPEGs into public/categories/{slug}/cover.jpeg for Blob upload.
 * After upload (upload-to-blob.mjs), local folders are removed — production uses Blob URLs only.
 *
 * Run: node scripts/organize-category-covers.mjs
 * Requires source files in public/categories/category-images/ (or restore from backup).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CATALOG_IMAGES_SRC = path.join(ROOT, "public/catalog/catalog-images");
const QOGOZ_IMAGES_SRC = path.join(ROOT, "public/catalog/qog'oz-linyalari");
const LEGACY_SRC = path.join(ROOT, "public/categories/category-images");

const SLUG_TO_FILE = {
  "oziq-ovqat-uskunalari": "photo_2026-05-26 09.16.29.jpeg",
  "kran-uskunalari": "photo_2026-05-26 09.16.15 (1).jpeg",
  "qogoz-qayta-ishlash": "photo_2026-05-26 12.23.23.jpeg",
  "strech-klyonka": "photo_2026-05-26 09.16.45.jpeg",
  "drabilni-zavod": "photo_2026-05-26 09.16.50.jpeg",
  "laser-stanoki": "photo_2026-05-26 09.16.16.jpeg",
  generatorlar: "photo_2026-05-26 09.16.26.jpeg",
  "gisht-zavodlari": "photo_2026-05-26 09.16.31.jpeg",
  "beton-zavodlari": "photo_2026-05-26 09.16.38.jpeg",
  carmixlar: "photo_2026-05-26 09.16.59.jpeg",
  "salafan-polietilen": "photo_2026-05-26 09.16.23.jpeg",
  "plastik-idishlar": "photo_2026-05-26 09.16.22.jpeg",
  "suv-liniyalari": "photo_2026-05-26 09.16.21.jpeg",
  "asfalt-zavod": "photo_2026-05-26 09.19.45.jpeg",
  "metalga-ishlov-berish": "photo_2026-05-26 09.16.40.jpeg",
  "yogoch-liniyalari": "photo_2026-05-26 09.17.03.jpeg",
  "maxsus-texnikalar": "photo_2026-05-26 09.17.10.jpeg",
  "med-texnikalar": "photo_2026-05-26 09.19.44.jpeg",
  "quyosh-panel": "photo_2026-05-26 09.16.55.jpeg",
  "sanwich-pannellar": "photo_2026-05-26 09.19.46.jpeg",
  "kraska-zavod": "photo_2026-05-26 12.02.37.jpeg",
  "shifr-zavod": "photo_2026-05-26 12.02.33 (1).jpeg",
  "upakovka-liniyalari": "photo_2026-05-26 12.02.38.jpeg",
  "kraska-idish-liniyalari": "photo_2026-05-26 12.02.37 (1).jpeg",
  "tuxum-fleyka-liniyalari": "photo_2026-05-26 12.02.39.jpeg",
  "tualet-qogoz-liniyalari": "photo_2026-05-26 12.23.24.jpeg",
  oyinchoqlar: "photo_2026-05-26 09.17.08.jpeg",
};

for (const [slug, file] of Object.entries(SLUG_TO_FILE)) {
  const srcPath = [QOGOZ_IMAGES_SRC, CATALOG_IMAGES_SRC, LEGACY_SRC]
    .map((dir) => path.join(dir, file))
    .find((p) => fs.existsSync(p));
  const destDir = path.join(ROOT, "public/categories", slug);
  const destPath = path.join(destDir, "cover.jpeg");
  if (!srcPath) {
    console.error(`Missing source: ${file} for ${slug}`);
    process.exit(1);
  }
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(srcPath, destPath);
  console.log(`✓ ${slug} ← ${file}`);
}

console.log(`\nOrganized ${Object.keys(SLUG_TO_FILE).length} category covers.`);
