# Stitch export — VeriCore Global

This folder holds HTML splits from `design-code-stitch.md`, embedded **AIDA** raster images (downloaded to `assets/images/`), and metadata in `manifest.json`.

Official UI designs live in [Stitch](https://stitch.withgoogle.com/projects/13378518173535726539). Screen IDs are listed in `manifest.json`.

## Refresh local HTML + images

```bash
pnpm stitch:sync-local
```

This runs: split monolith → download unique `lh3.googleusercontent.com/aida-public` URLs → rewrite `<img src>` to `../assets/images/...` (paths relative to each file under `screens/`).

## Fetch Stitch-hosted screenshots + HTML (API)

Signed URLs expire quickly; run when you need fresh artifacts:

1. Create an API key and authenticate ([Stitch SDK / MCP docs](https://github.com/google-labs-code/stitch-sdk)).
2. `export STITCH_API_KEY=...` or `stitch auth set`.
3. Full batch (mobile / legacy IDs): `pnpm stitch:pull-remote` → `remote/html`, `remote/screenshots`.
4. **Desktop frames** (UUID screen IDs from Stitch): `pnpm stitch:pull-desktop` → `remote/desktop/`.

There is **no stable public URL** to `curl` Stitch screens without going through the API first; the CLI returns time-limited download links — then `curl -L` runs inside the script.

Inspect `remote/pull-manifest.json` or `remote/desktop/pull-manifest.json` after a run.

## MCP note

There is no Stitch MCP server configured in this workspace’s MCP folder; use **stitch-design-cli** (`npx stitch-design-cli`) or the official Stitch MCP endpoint with your key ([google-labs-code/stitch-sdk](https://github.com/google-labs-code/stitch-sdk)).
