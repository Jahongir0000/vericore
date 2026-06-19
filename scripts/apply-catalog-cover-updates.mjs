/**
 * Copies new covers from public/catalog/catalog-images/ into
 * public/categories/{slug}/cover.jpeg for Blob upload.
 *
 * Run: node scripts/apply-catalog-cover-updates.mjs
 * Then upload each: BLOB_READ_WRITE_TOKEN=... node scripts/upload-to-blob.mjs categories/<slug>
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DEFAULT_SRC = path.join(ROOT, "public/catalog/catalog-images");
const QOGOZ_SRC = path.join(ROOT, "public/catalog/qog'oz-linyalari");

/** slug → { file, srcDir? } */
export const CATALOG_COVER_UPDATES = {
  "tuxum-fleyka-liniyalari": { file: "photo_2026-05-26 12.02.39.jpeg" },
  "kraska-idish-liniyalari": { file: "photo_2026-05-26 12.02.37 (1).jpeg" },
  "kraska-zavod": { file: "photo_2026-05-26 12.02.37.jpeg" },
  "shifr-zavod": { file: "photo_2026-05-26 12.02.33 (1).jpeg" },
  "upakovka-liniyalari": { file: "photo_2026-05-26 12.02.38.jpeg" },
  "tualet-qogoz-liniyalari": {
    file: "photo_2026-05-26 12.23.24.jpeg",
    srcDir: QOGOZ_SRC,
  },
  "qogoz-qayta-ishlash": {
    file: "photo_2026-05-26 12.23.23.jpeg",
    srcDir: QOGOZ_SRC,
  },
};

for (const [slug, entry] of Object.entries(CATALOG_COVER_UPDATES)) {
  const file = typeof entry === "string" ? entry : entry.file;
  const srcDir = typeof entry === "string" ? DEFAULT_SRC : (entry.srcDir ?? DEFAULT_SRC);
  const srcPath = path.join(srcDir, file);
  const destDir = path.join(ROOT, "public/categories", slug);
  const destPath = path.join(destDir, "cover.jpeg");
  if (!fs.existsSync(srcPath)) {
    console.error(`❌  Missing source: ${file} (${slug})`);
    process.exit(1);
  }
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(srcPath, destPath);
  console.log(`✓ ${slug} ← ${file}`);
}

console.log(
  `\nPrepared ${Object.keys(CATALOG_COVER_UPDATES).length} covers under public/categories/`,
);
