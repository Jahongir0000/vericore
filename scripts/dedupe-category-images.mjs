/**
 * Dedupe category-images per docs/category-image-mapping.md
 * Run: node scripts/dedupe-category-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FOLDER = path.join(__dirname, "../public/categories/category-images");

/** Files to keep (winners). All other .jpeg files in folder will be removed. */
const KEEP = new Set([
  "photo_2026-05-26 09.16.15 (1).jpeg",
  "photo_2026-05-26 09.16.16.jpeg",
  "photo_2026-05-26 09.16.21.jpeg",
  "photo_2026-05-26 09.16.22.jpeg",
  "photo_2026-05-26 09.16.23.jpeg",
  "photo_2026-05-26 09.16.26.jpeg",
  "photo_2026-05-26 09.16.27.jpeg",
  "photo_2026-05-26 09.16.29.jpeg",
  "photo_2026-05-26 09.16.31.jpeg",
  "photo_2026-05-26 09.16.38.jpeg",
  "photo_2026-05-26 09.16.40.jpeg",
  "photo_2026-05-26 09.16.45.jpeg",
  "photo_2026-05-26 09.16.50.jpeg",
  "photo_2026-05-26 09.16.52.jpeg",
  "photo_2026-05-26 09.16.55.jpeg",
  "photo_2026-05-26 09.16.59.jpeg",
  "photo_2026-05-26 09.17.03.jpeg",
  "photo_2026-05-26 09.17.08.jpeg",
  "photo_2026-05-26 09.17.10.jpeg",
  "photo_2026-05-26 09.19.44.jpeg",
  "photo_2026-05-26 09.19.45.jpeg",
  "photo_2026-05-26 09.19.46.jpeg",
  "photo_2026-05-26 09.19.48.jpeg",
]);

const files = fs.readdirSync(FOLDER).filter((f) => /\.jpe?g$/i.test(f));
let removed = 0;
for (const file of files) {
  if (!KEEP.has(file)) {
    fs.unlinkSync(path.join(FOLDER, file));
    removed++;
    console.log("removed:", file);
  }
}
console.log(
  `\nKept ${KEEP.size}, removed ${removed}, remaining ${fs.readdirSync(FOLDER).filter((f) => /\.jpe?g$/i.test(f)).length} JPEGs`,
);
