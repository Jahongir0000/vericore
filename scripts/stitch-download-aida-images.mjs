#!/usr/bin/env node
/**
 * Downloads lh3.googleusercontent.com/aida-public images referenced in
 * design/stitch-export/screens/*.html into design/stitch-export/assets/images/
 */
import crypto from "node:crypto";
import fs from "node:fs";
import https from "node:https";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const screensDir = path.join(root, "design/stitch-export/screens");
const assetDir = path.join(root, "design/stitch-export/assets/images");

function fetchBinary(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchBinary(res.headers.location).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

async function main() {
  if (!fs.existsSync(screensDir)) {
    console.error("Run pnpm stitch:split first (screens dir missing).");
    process.exit(1);
  }

  const htmlFiles = fs.readdirSync(screensDir).filter((f) => f.endsWith(".html"));
  const orderedUrls = [];
  const seen = new Set();

  for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(screensDir, file), "utf8");
    const urls = [
      ...html.matchAll(/https:\/\/lh3\.googleusercontent\.com\/aida-public\/[^"')\s]+/g),
    ].map((m) => m[0]);
    for (const url of urls) {
      if (!seen.has(url)) {
        seen.add(url);
        orderedUrls.push(url);
      }
    }
  }

  fs.mkdirSync(assetDir, { recursive: true });

  const urlToLocal = {};
  let downloaded = 0;

  for (const url of orderedUrls) {
    const hash = crypto.createHash("sha256").update(url).digest("hex").slice(0, 12);
    const name = `aida-${hash}.png`;
    urlToLocal[url] = name;
    const dest = path.join(assetDir, name);
    if (fs.existsSync(dest)) {
      console.log(`skip existing ${name}`);
      continue;
    }
    const buf = await fetchBinary(url);
    fs.writeFileSync(dest, buf);
    downloaded += 1;
    console.log(`saved ${name} (${buf.length} bytes)`);
  }

  console.log(`Done. ${downloaded} new file(s), ${orderedUrls.length} unique URL(s).`);

  const mappingPath = path.join(root, "design/stitch-export/assets/aida-url-map.json");
  fs.mkdirSync(path.dirname(mappingPath), { recursive: true });
  fs.writeFileSync(mappingPath, JSON.stringify(urlToLocal, null, 2) + "\n", "utf8");
  console.log(`Wrote ${path.relative(root, mappingPath)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
