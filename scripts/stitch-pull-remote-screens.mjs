#!/usr/bin/env node
/**
 * Calls stitch-design-cli to fetch screen metadata, then curl-downloads
 * HTML + screenshot artifacts (short-lived signed URLs).
 *
 * Prerequisites: STITCH_API_KEY or `stitch auth set`, curl on PATH.
 *
 * Usage:
 *   node scripts/stitch-pull-remote-screens.mjs           # all 16 screens (see SCREEN_IDS_ALL)
 *   node scripts/stitch-pull-remote-screens.mjs desktop # desktop frames (UUID IDs)
 *   STITCH_PROJECT_ID=... STITCH_PRESET=desktop node scripts/stitch-pull-remote-screens.mjs
 *
 * There is no public curl URL for Stitch screens — URLs come from this CLI response.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const projectId = process.env.STITCH_PROJECT_ID ?? "13378518173535726539";

const argvPreset = process.argv[2];
const envPreset = process.env.STITCH_PRESET;
const preset = (argvPreset || envPreset || "all").toLowerCase();

/** Full project inventory (mobile PNG frames + named screens + desktop UUIDs + design system). */
const SCREEN_IDS_ALL = [
  "16604876534547767861",
  "16604876534547768251",
  "16604876534547768641",
  "16604876534547769031",
  "16604876534547769421",
  "423f53ddd41041438f84019f4adc65e4",
  "c66e7fef3f61477f8ecaf2e15ceb89e6",
  "c2b03a6eab8f4b7ba3fb466aeabe122c",
  "7f9de13c3848432697787104d56ccb28",
  "ab8d3bf6fab04468bebf4eebda650d74",
  "6739134b6ab04ce9aa5357846f6fc1a4",
  "97327193100f4eedbf382b4dbe47091c",
  "7ae0e776c5f64fa3bec60afd35738931",
  "asset-stub-assets-c6f6d7f8f03b41b388a08fd4a8b66037-1777482351449",
  "2908f024b527454fa871bed90fbce2db",
  "37f03eed9f234a8c865c8ed5aad0123d",
];

/** Desktop-only subset (faster pulls while iterating on layout). */
const SCREEN_IDS_DESKTOP = [
  "37f03eed9f234a8c865c8ed5aad0123d",
  "2908f024b527454fa871bed90fbce2db",
  "ab8d3bf6fab04468bebf4eebda650d74",
  "97327193100f4eedbf382b4dbe47091c",
  "6739134b6ab04ce9aa5357846f6fc1a4",
];

/** About, project detail, projects list (user-provided Stitch screen IDs). */
const SCREEN_IDS_MARKETING = [
  "0b452b638c5e42038b90d116f49e81de",
  "7b8d5535eec54e23a753fa3905d6db7e",
  "7b91e68b7e494634aba7abc454029285",
];

const BATCHES = {
  all: SCREEN_IDS_ALL,
  desktop: SCREEN_IDS_DESKTOP,
  marketing: SCREEN_IDS_MARKETING,
};

const SCREEN_IDS = BATCHES[preset];
if (!SCREEN_IDS) {
  console.error(`Unknown preset "${preset}". Use: all | desktop | marketing`);
  process.exit(1);
}

const outDir =
  preset === "all"
    ? path.join(root, "design/stitch-export/remote")
    : path.join(root, "design/stitch-export/remote", preset);

function curlDownload(url, dest) {
  execFileSync("curl", ["-fsSL", url, "-o", dest], { stdio: "inherit" });
}

function extractArtifactUrls(node) {
  const urls = { html: null, image: null };
  const scan = (x) => {
    if (!x || typeof x !== "object") return;
    for (const [k, v] of Object.entries(x)) {
      if (typeof v === "string" && v.startsWith("http")) {
        const kl = k.toLowerCase();
        if (kl.includes("download") || kl.endsWith("url")) {
          if (/(html|code)/i.test(k) && !urls.html) urls.html = v;
          if (/(screenshot|image|preview)/i.test(k) && !urls.image) urls.image = v;
        }
      }
      scan(v);
    }
  };
  scan(node);
  return urls;
}

function flattenScreens(data) {
  if (Array.isArray(data)) return data;
  if (data?.screens && Array.isArray(data.screens)) return data.screens;
  if (data?.result?.screens && Array.isArray(data.result.screens)) return data.result.screens;
  return [data];
}

function screenIdFrom(node) {
  return node.screenId ?? node.id ?? node.screen?.id ?? node.metadata?.screenId ?? "unknown";
}

function main() {
  console.error(
    `Stitch preset: ${preset} (${SCREEN_IDS.length} screen(s)) -> ${path.relative(root, outDir)}`,
  );

  const args = [
    "stitch-design-cli",
    "screen",
    "get",
    "--project-id",
    projectId,
    ...SCREEN_IDS.flatMap((id) => ["--screen-id", id]),
    "--include-html",
    "--include-image",
    "--json",
  ];

  let raw;
  try {
    raw = execFileSync("npx", ["--yes", ...args], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      cwd: root,
    });
  } catch (e) {
    const out = [e.stderr?.toString?.(), e.stdout?.toString?.()].filter(Boolean).join("\n");
    console.error(out || e.message || String(e));
    console.error("\nSet STITCH_API_KEY or run: stitch auth set");
    console.error("Docs: https://github.com/google-labs-code/stitch-sdk");
    process.exit(1);
  }

  const data = JSON.parse(raw);
  fs.mkdirSync(path.join(outDir, "html"), { recursive: true });
  fs.mkdirSync(path.join(outDir, "screenshots"), { recursive: true });

  const manifest = { projectId, preset, fetchedAt: new Date().toISOString(), screens: [] };
  const screens = flattenScreens(data);

  for (const s of screens) {
    const sid = String(screenIdFrom(s)).replace(/[^a-zA-Z0-9_-]/g, "_");
    const { html, image } = extractArtifactUrls(s);
    const entry = {
      screenId: sid,
      htmlPath: null,
      screenshotPath: null,
      htmlUrlPresent: !!html,
      imageUrlPresent: !!image,
    };

    if (html) {
      const dest = path.join(outDir, "html", `${sid}.html`);
      console.log(`Downloading HTML -> ${path.relative(root, dest)}`);
      curlDownload(html, dest);
      entry.htmlPath = path.relative(root, dest);
    }
    if (image) {
      const dest = path.join(outDir, "screenshots", `${sid}.png`);
      console.log(`Downloading screenshot -> ${path.relative(root, dest)}`);
      curlDownload(image, dest);
      entry.screenshotPath = path.relative(root, dest);
    }

    manifest.screens.push(entry);
  }

  const manifestPath = path.join(outDir, "pull-manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  fs.writeFileSync(
    path.join(outDir, "last-response.json"),
    JSON.stringify(data, null, 2) + "\n",
    "utf8",
  );
  console.log(`Wrote ${path.relative(root, manifestPath)}`);
}

main();
