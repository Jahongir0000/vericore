/**
 * Compress local raster images without visible quality loss.
 *
 * Targets site photography (public/newimages), brand assets, app icon, and
 * optionally Stitch design exports. JPEGs use mozjpeg; PNGs use lossless
 * recompression. Files are replaced only when the output is smaller.
 *
 * Usage:
 *   node scripts/compress-images.mjs [options]
 *   pnpm images:compress
 *   pnpm images:compress -- --dry-run
 *   pnpm images:compress -- --include-design
 *
 * Options:
 *   --dry-run           Report savings without writing files
 *   --include-design    Also compress design/stitch-export/assets/images
 *   --dir <path>        Extra folder to scan (repeatable, relative to repo root)
 *   --jpeg-quality <n>  JPEG quality 1–100 (default: 86)
 *   --max-width <n>     Downscale wider images to this width (default: 1920)
 *   --min-save <pct>    Skip replace unless savings ≥ this % (default: 1)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const DEFAULT_DIRS = ["public/newimages", "public/brand", "app"];

/** @type {{ dryRun: boolean; includeDesign: boolean; extraDirs: string[]; jpegQuality: number; maxWidth: number; minSavePct: number }} */
const opts = {
  dryRun: false,
  includeDesign: false,
  extraDirs: [],
  jpegQuality: 86,
  maxWidth: 1920,
  minSavePct: 1,
};

const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  const arg = argv[i];
  if (arg === "--dry-run") opts.dryRun = true;
  else if (arg === "--include-design") opts.includeDesign = true;
  else if (arg === "--dir") opts.extraDirs.push(argv[++i] ?? "");
  else if (arg === "--jpeg-quality") opts.jpegQuality = Number(argv[++i]);
  else if (arg === "--max-width") opts.maxWidth = Number(argv[++i]);
  else if (arg === "--min-save") opts.minSavePct = Number(argv[++i]);
  else if (arg === "--help" || arg === "-h") {
    console.log(
      fs
        .readFileSync(fileURLToPath(import.meta.url), "utf8")
        .split("\n")
        .slice(0, 22)
        .join("\n"),
    );
    process.exit(0);
  } else {
    console.error(`Unknown option: ${arg}`);
    process.exit(1);
  }
}

if (
  !Number.isFinite(opts.jpegQuality) ||
  opts.jpegQuality < 1 ||
  opts.jpegQuality > 100 ||
  !Number.isFinite(opts.maxWidth) ||
  opts.maxWidth < 1
) {
  console.error("Invalid --jpeg-quality or --max-width.");
  process.exit(1);
}

/** @returns {string[]} */
function collectFiles() {
  const dirs = [...DEFAULT_DIRS, ...opts.extraDirs.filter(Boolean)];
  if (opts.includeDesign) dirs.push("design/stitch-export/assets/images");

  /** @type {string[]} */
  const files = [];

  for (const rel of dirs) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) continue;

    const stat = fs.statSync(abs);
    if (stat.isFile()) {
      if (IMAGE_EXT.has(path.extname(abs).toLowerCase())) files.push(abs);
      continue;
    }

    walk(abs, files);
  }

  return [...new Set(files)].sort();
}

/** @param {string} dir @param {string[]} out */
function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(abs, out);
    else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) out.push(abs);
  }
}

/** @param {number} bytes */
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/** @param {string} absPath */
async function compressOne(absPath) {
  const rel = path.relative(ROOT, absPath);
  const before = fs.statSync(absPath).size;
  const ext = path.extname(absPath).toLowerCase();

  let pipeline = sharp(absPath, { failOn: "none" }).rotate(); // respect EXIF orientation
  const meta = await pipeline.metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;

  if (width > opts.maxWidth) {
    pipeline = pipeline.resize({ width: opts.maxWidth, withoutEnlargement: true });
  }

  /** @type {Buffer} */
  let output;

  const inputFormat = meta.format;

  if (ext === ".webp") {
    output = await pipeline
      .webp({ quality: opts.jpegQuality, effort: 6, smartSubsample: true })
      .toBuffer();
  } else if (inputFormat === "jpeg" || ext === ".jpg" || ext === ".jpeg") {
    output = await pipeline
      .jpeg({
        quality: opts.jpegQuality,
        mozjpeg: true,
        progressive: true,
        chromaSubsampling: "4:2:0",
      })
      .toBuffer();
  } else if (inputFormat === "png" || ext === ".png") {
    // True PNG — lossless recompression (logos, Stitch design exports)
    output = await pipeline
      .png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
      .toBuffer();
  } else {
    output = await pipeline
      .jpeg({
        quality: opts.jpegQuality,
        mozjpeg: true,
        progressive: true,
        chromaSubsampling: "4:2:0",
      })
      .toBuffer();
  }

  const after = output.length;
  const savedPct = before > 0 ? ((before - after) / before) * 100 : 0;
  const dims =
    width && height
      ? `${width}×${height}${width > opts.maxWidth ? ` → ≤${opts.maxWidth}w` : ""}`
      : "unknown";

  if (after >= before || savedPct < opts.minSavePct) {
    return { rel, before, after: before, savedPct: 0, dims, skipped: true };
  }

  if (!opts.dryRun) {
    const tmp = path.join(
      path.dirname(absPath),
      `.compress-${path.basename(absPath)}.${process.pid}.tmp`,
    );
    await fs.promises.writeFile(tmp, output);
    await fs.promises.rename(tmp, absPath);
  }

  return { rel, before, after, savedPct, dims, skipped: false };
}

async function main() {
  const files = collectFiles();
  if (files.length === 0) {
    console.log("No images found.");
    return;
  }

  console.log(
    opts.dryRun
      ? `Dry run — ${files.length} image(s), JPEG q=${opts.jpegQuality}, max-width=${opts.maxWidth}px\n`
      : `Compressing ${files.length} image(s), JPEG q=${opts.jpegQuality}, max-width=${opts.maxWidth}px\n`,
  );

  let totalBefore = 0;
  let totalAfter = 0;
  let optimized = 0;

  for (const file of files) {
    try {
      const result = await compressOne(file);
      totalBefore += result.before;
      totalAfter += result.skipped ? result.before : result.after;

      if (result.skipped) {
        console.log(`  skip  ${result.rel}  ${formatBytes(result.before)}  (${result.dims})`);
      } else {
        optimized += 1;
        console.log(
          `  ${opts.dryRun ? "would" : "ok"}   ${result.rel}  ${formatBytes(result.before)} → ${formatBytes(result.after)}  (−${result.savedPct.toFixed(1)}%)  ${result.dims}`,
        );
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  fail  ${path.relative(ROOT, file)}  ${message}`);
    }
  }

  const totalSaved = totalBefore - totalAfter;
  const totalPct = totalBefore > 0 ? (totalSaved / totalBefore) * 100 : 0;

  console.log(
    `\n${optimized}/${files.length} optimized · ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} (−${totalPct.toFixed(1)}%, saved ${formatBytes(totalSaved)})`,
  );

  if (opts.dryRun && optimized > 0) {
    console.log("\nRe-run without --dry-run to apply changes.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
