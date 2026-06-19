/**
 * Uploads images from a public/ subfolder to Vercel Blob.
 * Prints the resulting URL map as JSON so callers can use it.
 *
 * Usage:
 *   BLOB_READ_WRITE_TOKEN=<token> node scripts/upload-to-blob.mjs <relative-public-path>
 *
 * Example:
 *   BLOB_READ_WRITE_TOKEN=xxx node scripts/upload-to-blob.mjs categories/water-plastic
 */

import { put } from "@vercel/blob";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const relPath = process.argv[2];
if (!relPath) {
  console.error("Usage: node scripts/upload-to-blob.mjs <relative-public-path>");
  console.error("Example: node scripts/upload-to-blob.mjs categories/water-plastic");
  process.exit(1);
}

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error("❌  Set BLOB_READ_WRITE_TOKEN before running this script.");
  process.exit(1);
}

const FOLDER = path.join(ROOT, "public", relPath);

if (!fs.existsSync(FOLDER)) {
  console.error(`❌  Folder not found: ${FOLDER}`);
  process.exit(1);
}

const files = fs
  .readdirSync(FOLDER)
  .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
  .sort();

if (files.length === 0) {
  console.error("❌  No images found in", FOLDER);
  process.exit(1);
}

console.log(`Found ${files.length} image(s) in ${relPath}. Uploading...\n`);

const urlMap = []; // [{ file, url }]

for (const file of files) {
  const localPath = path.join(FOLDER, file);
  const blobPath = `${relPath}/${file}`;
  const buffer = fs.readFileSync(localPath);

  const { url } = await put(blobPath, buffer, {
    access: "public",
    token,
    addRandomSuffix: false,
    allowOverwrite: true,
  });

  urlMap.push({ file, url });
  console.log(`✓ ${file}\n  → ${url}\n`);
}

// Remove entire staging folder (images, PDFs, .DS_Store, etc.)
fs.rmSync(FOLDER, { recursive: true, force: true });

console.log(`✓ Removed local folder: public/${relPath}\n`);
console.log("URLs:");
urlMap.forEach(({ url }) => console.log(" ", url));
