#!/usr/bin/env node
/**
 * Splits root design-code-stitch.md (concatenated Stitch HTML exports)
 * into design/stitch-export/screens/*.html
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const src = path.join(root, "design-code-stitch.md");
const outDir = path.join(root, "design/stitch-export/screens");

const raw = fs.readFileSync(src, "utf8");
const lines = raw.split("\n");

const starts = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^<!-- (.+\.png) -->$/);
  if (m) starts.push({ line: i, png: m[1] });
}

if (starts.length === 0) {
  console.error("No <!-- *.png --> screen markers found in design-code-stitch.md");
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

for (let s = 0; s < starts.length; s++) {
  const from = starts[s].line;
  const to = s + 1 < starts.length ? starts[s + 1].line : lines.length;
  const chunk = lines.slice(from, to).join("\n").trim() + "\n";
  const base = starts[s].png.replace(/\.png$/i, "");
  const out = path.join(outDir, `${base}.html`);
  fs.writeFileSync(out, chunk, "utf8");
  console.log(`Wrote ${path.relative(root, out)}`);
}
