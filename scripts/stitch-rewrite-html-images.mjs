#!/usr/bin/env node
/**
 * Rewrites lh3.googleusercontent.com aida-public URLs in screen HTML to relative paths
 * ./assets/images/<file> (matches design/stitch-export/assets/aida-url-map.json).
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const screensDir = path.join(root, "design/stitch-export/screens");
const mapPath = path.join(root, "design/stitch-export/assets/aida-url-map.json");

const urlMap = JSON.parse(fs.readFileSync(mapPath, "utf8"));
const htmlFiles = fs.readdirSync(screensDir).filter((f) => f.endsWith(".html"));

for (const file of htmlFiles) {
  const p = path.join(screensDir, file);
  let html = fs.readFileSync(p, "utf8");
  let n = 0;
  for (const [remote, localName] of Object.entries(urlMap)) {
    const escaped = remote.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(escaped, "g");
    const before = html;
    html = html.replace(re, `../assets/images/${localName}`);
    if (html !== before) n += 1;
  }
  fs.writeFileSync(p, html, "utf8");
  console.log(`${file}: replaced ${n} distinct URL(s)`);
}
