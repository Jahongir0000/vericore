# Category image mapping

## Deduplication log

37 duplicate/near-duplicate files removed during audit. **Covers are hosted on Vercel Blob only** — no local copies under `public/categories/`.

Blob base: `https://ugp0pbjbfnvx6r1x.public.blob.vercel-storage.com/categories/{slug}/cover.jpeg`

| Group             | Kept                                         | Removed (summary)                    |
| ----------------- | -------------------------------------------- | ------------------------------------ |
| Tower crane       | `09.16.15 (1).jpeg`                          | `09.16.15.jpeg`                      |
| Laser             | `09.16.16.jpeg`                              | `09.16.17`, `09.16.18`               |
| Water bottling    | `09.16.21.jpeg`                              | `09.16.20`                           |
| Plastic bags      | `09.16.23.jpeg`                              | `09.16.24`, `09.16.25`               |
| Bricks            | `09.16.31.jpeg`                              | `09.16.32`, `09.16.33`               |
| Concrete blocks   | `09.16.38.jpeg`                              | `09.16.35`                           |
| CNC VMC           | `09.16.40.jpeg`                              | `09.16.39`, `09.16.41`               |
| Stretch film      | `09.16.45.jpeg`                              | `09.16.42`, `43`, `46`, `47`         |
| Crushing plant    | `09.16.50.jpeg`                              | `09.16.48`, `51`                     |
| Corrugated sheets | `09.16.52.jpeg`                              | `09.16.53`, `54`                     |
| Solar             | `09.16.55.jpeg`                              | `09.16.57`, `58`                     |
| Carmix 3.5        | `09.17.02` removed; kept `09.16.59` (5.5 XL) | `09.17.00`, `09.17.02`               |
| Med therapy       | `09.19.44.jpeg`                              | `09.19.42`, `43`                     |
| Asphalt plant     | `09.19.45.jpeg`                              | `09.19.45 (1)`                       |
| Sandwich line     | `09.19.46.jpeg`                              | `09.19.49`, `50`, `51`               |
| Food collage      | —                                            | `09.16.30` (dup of processing lines) |
| Trucks (extras)   | `09.17.10` only                              | `09.17.09`, `11`, `13`               |
| Wood extras       | `09.17.03` only                              | `09.17.06`, `07`                     |

PDF `3592bcb80ab41977e3729d9bb868d352748ea7a8.pdf` — not used as catalog cover.

## Slug → cover image

| ID  | Slug                      | Source file                          | Confidence | Rationale                                              |
| --- | ------------------------- | ------------------------------------ | ---------- | ------------------------------------------------------ |
| 1   | `oziq-ovqat-uskunalari`   | `photo_2026-05-26 09.16.29.jpeg`     | high       | Ready-meal / food packaging line                       |
| 2   | `kran-uskunalari`         | `photo_2026-05-26 09.16.15 (1).jpeg` | high       | Tower crane product shot                               |
| 3   | `qogoz-qayta-ishlash`     | `photo_2026-05-26 12.23.23.jpeg`     | high       | White paper stack (qog'oz / processing)                |
| 4   | `strech-klyonka`          | `photo_2026-05-26 09.16.45.jpeg`     | high       | Stretch wrap rolls + dispensers                        |
| 5   | `drabilni-zavod`          | `photo_2026-05-26 09.16.50.jpeg`     | high       | Crushing & screening plant                             |
| 6   | `laser-stanoki`           | `photo_2026-05-26 09.16.16.jpeg`     | high       | Fiber laser cutting machine                            |
| 7   | `generatorlar`            | `photo_2026-05-26 09.16.26.jpeg`     | high       | Diesel generator set                                   |
| 8   | `gisht-zavodlari`         | `photo_2026-05-26 09.16.31.jpeg`     | high       | Perforated clay bricks                                 |
| 9   | `beton-zavodlari`         | `photo_2026-05-26 09.16.38.jpeg`     | medium     | Concrete hollow blocks (no HZS plant photo)            |
| 10  | `carmixlar`               | `photo_2026-05-26 09.16.59.jpeg`     | high       | Carmix 5.5 XL self-loading mixer                       |
| 11  | `salafan-polietilen`      | `photo_2026-05-26 09.16.23.jpeg`     | high       | T-shirt / polyethylene bag making machine              |
| 12  | `plastik-idishlar`        | `photo_2026-05-26 09.16.22.jpeg`     | high       | PET bottle blow-molding line                           |
| 13  | `suv-liniyalari`          | `photo_2026-05-26 09.16.21.jpeg`     | high       | Water bottling conveyor line                           |
| 14  | `asfalt-zavod`            | `photo_2026-05-26 09.19.45.jpeg`     | high       | AIMIX asphalt mixing plant render                      |
| 15  | `metalga-ishlov-berish`   | `photo_2026-05-26 09.16.40.jpeg`     | high       | CNC vertical machining center                          |
| 16  | `yogoch-liniyalari`       | `photo_2026-05-26 09.17.03.jpeg`     | high       | Portable sawmill / log cutter                          |
| 17  | `maxsus-texnikalar`       | `photo_2026-05-26 09.17.10.jpeg`     | high       | Bridge inspection / aerial work truck                  |
| 18  | `med-texnikalar`          | `photo_2026-05-26 09.19.44.jpeg`     | high       | Multi-therapy medical device kit                       |
| 19  | `quyosh-panel`            | `photo_2026-05-26 09.16.55.jpeg`     | high       | Solar panels + inverter + batteries kit                |
| 20  | `sanwich-pannellar`       | `photo_2026-05-26 09.19.46.jpeg`     | high       | Sandwich-panel production line                         |
| 21  | `kraska-zavod`            | `photo_2026-05-26 12.02.37.jpeg`     | high       | Paint products (HAYAT / industrial buckets)            |
| 22  | `shifr-zavod`             | `photo_2026-05-26 12.02.33 (1).jpeg` | high       | Corrugated roofing sheets in factory warehouse         |
| 23  | `upakovka-liniyalari`     | `photo_2026-05-26 12.02.38.jpeg`     | high       | Molded pulp packaging (egg, fruit, wine, coffee trays) |
| 24  | `kraska-idish-liniyalari` | `photo_2026-05-26 12.02.37 (1).jpeg` | high       | Metal paint / lever-lid cans                           |
| 25  | `tuxum-fleyka-liniyalari` | `photo_2026-05-26 12.02.39.jpeg`     | high       | Egg tray pulp molding production line + trays          |
| 26  | `tualet-qogoz-liniyalari` | `photo_2026-05-26 12.23.24.jpeg`     | high       | A4 paper cutting & packaging production line           |
| 27  | `oyinchoqlar`             | `photo_2026-05-26 09.17.08.jpeg`     | high       | Plush toys assortment                                  |
| 28  | `sim-kabel-liniyalari`    | `photo_2026-05-26 12.28.41.jpeg`     | high       | Shineworld high-speed wire insulation production line  |

**Note (2026-05-26):** IDs 3 and 26 updated from `public/catalog/qog'oz-linyalari/` (no longer share the same image). IDs 21–25 from `public/catalog/catalog-images/`.

## Staging new covers

1. Drop JPEGs in `public/catalog/catalog-images/`
2. Map in `scripts/apply-catalog-cover-updates.mjs`
3. `node scripts/apply-catalog-cover-updates.mjs`
4. `BLOB_READ_WRITE_TOKEN=... node scripts/upload-to-blob.mjs categories/<slug>` (per slug or loop)
