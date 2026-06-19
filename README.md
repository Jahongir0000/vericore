# VeriCore Global — Stitch Design Brief

Master UX/UI brief for designing the VeriCore Global marketing website in
[Stitch](https://stitch.withgoogle.com). Everything below is locked-in and
ready to paste into Stitch screen-by-screen.

---

## 1. Business in one paragraph

VeriCore Global is a Tashkent-based industrial trading & engineering company
that imports turnkey production factories and heavy equipment **directly from
Chinese manufacturers** to Uzbekistan and the wider CIS region. Operating
since **2012**, the company also **owns and runs 10+ factories itself**,
giving it hands-on operating experience instead of just trading. Customers
buy at **factory price with 0% commission** because the Chinese factories
pay VeriCore a sales commission directly. Service goes end-to-end: business
analysis → cost/profit modelling → equipment selection → in-house logistics
to any Uzbek region → on-site installation, commissioning, and operator
training, with a 15-month warranty.

**Product verticals (8):** Concrete batching plants · Brick factories ·
Aerated concrete (AAC) lines · Ceramic tile lines · Slate / fiber-cement
lines · Metal-construction equipment · Generators · Cement plants.

**Reference product** (used as the "first" detail page):
HZS35 concrete batching plant — 35 m³/h, 72 s cycle, 80 kW, JS750 mixer,
PLD1200 batcher, EXW $25,500, 15 working-day delivery, 30/70 payment terms,
2 engineers on-site for installation, 15-month warranty.

---

## 2. Locked-in design parameters

|                   |                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------- |
| **Deliverable**   | Marketing website (multi-page)                                                     |
| **Primary goal**  | Lead generation (quote requests + Telegram/WhatsApp chats)                         |
| **Audience**      | Dual: (A) first-time Uzbek entrepreneurs, (B) existing factory owners upgrading    |
| **Languages**     | UZ (default) · RU · EN — switcher in header                                        |
| **Device**        | **Mobile-first**, then scale to desktop                                            |
| **Visual style**  | "Local Trust" — Uzbek/regional flavor, real factory photos, big high-contrast CTAs |
| **First scope**   | 5 screens: Home · Catalog · Product detail · How we work · Contact                 |
| **Core features** | Compare 2–3 models · Order tracking timeline · Partner PDF downloads               |

---

## 3. Brand & contact (use these in every screen)

**Company name:** VeriCore Global
**Manager phone (CTA & contact page):** `+998 99 491 28 30`
**Telegram (placeholder):** `@vericoreglobal`
**WhatsApp (placeholder):** `+998 99 491 28 30`
**Email (placeholder):** `info@vericore.uz`
**Office (placeholder):** Tashkent, Uzbekistan

### Logos

- Light variant (white background): `assets/brand/vericore-logo-light.png`
- Dark variant (black background): `assets/brand/vericore-logo-dark.png`

The logo is a stylized cyan curved-arc "V" mark + geometric wordmark
"VERICORE GLOBAL". Use the **dark** variant on white surfaces and the
**light** variant on dark hero / footer surfaces.

---

## 4. Design system

### Colors

| Token           | Hex       | Use                                               |
| --------------- | --------- | ------------------------------------------------- |
| `--brand-cyan`  | `#0FBFD4` | Logo, links, secondary accent, brand surfaces     |
| `--ink`         | `#0A1220` | Body text, headlines on light bg                  |
| `--cta-amber`   | `#F5A524` | Primary CTAs ("Bepul konsultatsiya", "Get quote") |
| `--trust-green` | `#16A34A` | "Omborda" badges, warranty, WhatsApp              |
| `--bg`          | `#FFFFFF` | Page background                                   |
| `--surface`     | `#F7F9FC` | Card / section background                         |
| `--border`      | `#E5EAF0` | Hairlines                                         |
| `--muted`       | `#6B7280` | Secondary text                                    |
| `--ink-dark`    | `#0A1220` | Hero / footer dark surfaces                       |

### Typography

- **Headlines:** Manrope ExtraBold (UZ Latin + RU Cyrillic + EN)
- **Body:** Inter Regular / Medium
- **Spec numbers:** Space Grotesk (technical KPI feel)
- Mobile sizes: H1 32 / H2 24 / H3 20 / Body 16 / Small 14

### Components (consistent across all screens)

- **Header:** Logo (left) · language switcher UZ/RU/EN (right) · hamburger
- **Sticky mobile bottom bar:** `[Telegram cyan]` `[WhatsApp green]` `[Qo‘ng‘iroq amber]`
- **Trust badges:** rounded pills with icon — "2012-yildan beri" · "10+ o‘z zavodimiz" · "0% komissiya" · "15 oy kafolat"
- **KPI tile:** big Space Grotesk number on top, small Inter label below, optional icon
- **Product card:** photo (16:10) · status badge · model + category · 4 KPI chips · price + delivery · `[Solishtirish ☐]` + `[Batafsil →]`
- **Step timeline:** numbered cyan circles, amber active state, connecting line
- **Sticky price card** (product detail): amber CTA + outlined secondary
- **CTA button (primary):** amber `#F5A524`, ink text, 56 px tall on mobile, 12 px radius
- **Cards:** 16 px radius, subtle shadow `0 4px 16px rgba(10,18,32,0.06)`, 20 px padding

### Tone & voice

- **Voice:** straightforward, warm, peer-to-peer. Not corporate. Speak like
  a knowledgeable Uzbek partner who has been in the trenches for 14 years
  and wants you to succeed.
- Short sentences. Use "biz" (we) and "siz" (you).
- Avoid English buzzwords when an Uzbek/Russian word is clearer.
- Always reinforce three things: **1st-hand source**, **0% commission**,
  **we run our own factories**.

---

## 5. Placeholder image library

Generated for the "Local Trust" mood — warm earthy palette with brand-cyan
accents, real-feeling Uzbek/Central-Asian context, no stock-photo sterility.

| Slot             | File                                             | Used on                                                  |
| ---------------- | ------------------------------------------------ | -------------------------------------------------------- |
| Homepage hero    | `assets/placeholders/hero-concrete-plant.png`    | Home hero, How-we-work                                   |
| Brick category   | `assets/placeholders/category-brick-factory.png` | Catalog grid, Brick product page                         |
| Tile category    | `assets/placeholders/category-tile-line.png`     | Catalog grid, Tile product page                          |
| Manager portrait | `assets/placeholders/manager-portrait.png`       | Contact form, "Manager will call" confirmation           |
| Logistics        | `assets/placeholders/logistics-container.png`    | How-we-work step 4, footer of Home                       |
| Installation     | `assets/placeholders/installation-engineers.png` | How-we-work step 5, Product-detail "we use what we sell" |

Reuse the hero / brick / tile images as fallbacks for the remaining
categories (AAC, slate, metal, generators, cement) until vertical-specific
photos are produced.

---

## 6. Stitch prompts — ready to paste

Each block below is one Stitch generation. They share the design system
defined in §4, so paste §4 into Stitch's "Style guide" and use these as
"Screen prompts".

### 6.1 Home (mobile-first)

```
Mobile homepage for "VeriCore Global", a Tashkent-based company that imports
Chinese factory equipment (concrete plants, brick factories, tile lines,
generators, cement plants) directly to Uzbekistan since 2012. Style: Local
Trust — warm, trustworthy, photo-heavy, big amber CTAs.

Sections top to bottom:

1. Header: cyan VeriCore logo (left), language switcher UZ/RU/EN (right),
   hamburger menu. Sticky on scroll.

2. Hero: full-bleed photo `hero-concrete-plant.png` with dark gradient
   overlay bottom-half. Headline in Uzbek: "Xitoydan zavod va uskunalarni
   to‘g‘ridan-to‘g‘ri — 0% komissiya bilan". Subhead: "2012-yildan beri
   ishonchli yetkazib beruvchi". Two stacked CTAs: amber "Bepul
   konsultatsiya olish" (primary) + outlined cyan "Katalogni ko‘rish".

3. Trust strip: 4 horizontally-scrollable stat cards with big Space Grotesk
   numbers — "14+ yil tajriba", "10+ o‘z zavodimiz", "0% xizmat haqi",
   "15 oy kafolat". Cyan accent border-top.

4. "Bizning yo‘nalishlarimiz" — 8-category grid (2 columns on mobile):
   Beton zavodlari, G‘isht zavodlari, Gazobeton, Kafel liniyalari, Shifer,
   Metall konstruksiya, Generatorlar, Sement zavodlari. Each card: real
   photo + Uzbek name + small "X model" count badge.

5. "Nega aynan biz?" — 4 reason rows alternating photo-left / photo-right:
   "1-qo‘ldan to‘g‘ridan-to‘g‘ri" / "Biz ham ishlab chiqaramiz" / "O‘z
   logistikamiz" / "Boshidan oxirigacha yordam".

6. "Qanday ishlaymiz?" — horizontal step-timeline (5 steps): Tahlil →
   Hisob-kitob → Yechim → Yetkazib berish → O‘rnatish va ishga tushirish.
   Cyan line, amber active dots.

7. Featured product carousel: "Mashhur modellar" — 3 product cards (HZS35,
   HZS50, HZS90) with photo, KPI chips (35 m³/h · 80 kW · $25,500),
   "Batafsil" button.

8. Own-factory gallery: "Bizning zavodlarimiz" — 6-photo masonry grid +
   "Hammasini ko‘rish" link.

9. Testimonial slider: 3 video-thumbnail cards from Uzbek entrepreneurs.

10. Manufacturer PDFs ("Ishlab chiqaruvchi & hamkor adabiyotlari"): two downloadable
    brochure sheets with amber "PDFni ochish" CTAs.

11. Lead-magnet block: dark navy bg, "Bepul biznes-rejani oling" headline,
    form (name + phone +998 99 491 28 30 placeholder + business type
    dropdown), full-width amber "Yuborish" CTA.

12. Footer: contacts (+998 99 491 28 30, info@vericore.uz, Tashkent),
    socials, copyright. Use light VeriCore logo on dark footer.

13. STICKY mobile bottom bar (fixed): [Telegram cyan] [WhatsApp green]
    [Qo‘ng‘iroq amber] — three full-width buttons, always visible.
```

### 6.2 Catalog (e.g. "Beton zavodlari")

```
Mobile catalog page for "Beton zavodlari" on VeriCore Global. Local Trust
style. Audience: dual — first-time entrepreneurs + existing factory owners.

1. Sticky header + breadcrumb: Bosh sahifa › Katalog › Beton zavodlari.

2. Category hero: 1-line headline "Beton zavodlari — HZS turkumi", short
   description, photo `hero-concrete-plant.png`. Trust badges row:
   "Kafolat 15 oy", "EXW narx", "O‘rnatish bilan".

3. Filter chip bar (horizontal scroll): Unumdorlik (m³/h), Quvvat (kW),
   Narx oralig‘i, Yetkazib berish, Sort: ommabop / arzon / yangi.

4. COMPARE TOOL — pinned card at top: "Solishtirish (0/3)" with empty slots
   that fill when user taps "Solishtirish" on a product card. When 2+
   selected, sticky bottom amber button "2 ta modelni solishtirish"
   replaces the chat bar.

5. Product grid (1 column mobile, 2 tablet, 3 desktop). Each card:
   - Hero photo of plant
   - Top-left status badge: "Omborda" (green) / "Buyurtma" (amber)
   - Model name "HZS35" big + "Beton zavodi" smaller
   - 4 KPI chips: 35 m³/h · 80 kW · 72 s · 18.4×9.8×17.6 m
   - Price row: "EXW $25,500" big amber + "Yetkazib berish 15 kun"
   - Bottom: [Solishtirish ☐] checkbox-button + [Batafsil →] link

6. Mid-grid CTA banner with manager portrait `manager-portrait.png` and
   amber "Mutaxassis bilan bog‘lanish (+998 99 491 28 30)" button.

7. Sticky bottom chat bar (or compare bar when 2+ selected).
```

### 6.3 Product detail — HZS35 (most important conversion screen)

```
Mobile product detail page for "HZS35 Beton zavodi" on VeriCore Global.
Local Trust style. This is the highest-conversion screen.

1. Sticky header + breadcrumb.

2. Image gallery: full-bleed swipeable 5-photo carousel
   (`hero-concrete-plant.png`, `installation-engineers.png` and 3 detail
   shots: JS750 mixer close-up, PLD1200 batcher, control cabinet, container
   loading). Dot pagination + "1/5" counter.

3. Title block: "HZS35 — Beton zavodi" headline + status badges row
   ("Omborda", "Kafolat 15 oy", "O‘rnatish bilan").

4. STICKY price card on mobile, full-width:
   - "EXW Xitoy" label
   - "$25,500" huge amber number
   - "30% oldindan / 70% yetkazib berishdan oldin" small text
   - Two CTAs: amber "Hozir buyurtma berish" + outlined "Narxni so‘rash"
   - Tertiary link "ROI hisoblagich"

5. Quick specs — 6-tile grid (3×2 mobile): 35 m³/h, 72 s, 80 kW, JS750
   mixer, PLD1200 batcher, 3.8–4.2 m discharge.

6. Tabs (segmented): [Tavsif] [Texnik] [Komplekt] [Yetkazib berish]
   [Kafolat]. Default = Tavsif.
   - Tavsif: 2 paragraphs of plain Uzbek copy.
   - Texnik: full spec table — model HZS35, productivity 35 m³/h, cycle
     72 s, power 80 kW, mixer JS750, batching PLD1200, feeding lift hopper,
     discharge 3.8–4.2 m, water/cement accuracy ±1%, aggregate ±2%,
     dimensions 18,360×9,800×17,600 mm.
   - Komplekt: accordion of 9 systems with item counts:
     1) Batching system (Aggregate bin 5 m³ PLD1200 ×2, measuring belt,
        sensor, belt conveyor ×3)
     2) Mixing system (JS750 mixer, lubrication, pneumatic discharge,
        hard-wearing plate)
     3) Hoisting (aggregate lift hopper, lift hopper, rail rack)
     4) Water weighing (flow-meter, pump, pipe-valve)
     5) Cement weighing (bin, weigher, butterfly valve)
     6) Additive weighing (bin, pipeline, sensor, butterfly valve)
     7) Pneumatic (compressor, electromagnetic valve, pipeline)
     8) Electric control (cabinet, control computer, contactor, autoswitch,
        relays, weighing transmitter, accessories)
     9) Screw conveyor Ø219 + Cement pot 100 T
   - Yetkazib berish: container "1×40HQ", "15 ish kuni", 30/70 payment
     terms, EXW Incoterms explainer.
   - Kafolat: 15 months + 2 engineers on-site + $80/day + buyer covers
     air tickets, visa, lodging.

7. ORDER-TRACKING TIMELINE preview module: "Buyurtma yo‘li" — vertical
   timeline with 6 stages, each with icon + Uzbek label:
   ① Konsultatsiya → ② 30% to‘lov → ③ Ishlab chiqarish (15 kun) →
   ④ Yetkazib berish → ⑤ O‘rnatish → ⑥ Ishga tushirish & treng.
   Subtext: "Har bir bosqichda jonli kuzatuv".

8. Compare CTA: "Boshqa modellar bilan solishtirish" — 3 thumbnails
   (HZS25 / HZS50 / HZS75) with checkbox to add to compare.

9. ROI mini-calculator card (collapsed): inputs daily output (m³) + local
   concrete price (UZS/m³) → outputs payback months + 12-month profit.

10. Trust block: photo `installation-engineers.png` with caption
    "Biz bu zavonni o‘zimiz ham ishlatamiz — 10+ o‘z zavodimiz bor".

11. FAQ accordion (5 questions): kafolat, yetkazib berish, o‘rnatish,
    to‘lov, ehtiyot qismlar.

12. Bottom lead form: "Manager 15 daqiqada qo‘ng‘iroq qiladi" + name +
    phone field (placeholder +998 99 491 28 30) + amber CTA.

13. Sticky bottom: [Telegram] [WhatsApp] [So‘rov yuborish — amber, primary].
```

### 6.4 How we work

```
Mobile "Qanday ishlaymiz?" page for VeriCore Global. Local Trust style.
Goal: convince first-time entrepreneurs that VeriCore handles the full
journey, end-to-end, and explain WHY there is 0% commission.

1. Header + page title "Qanday ishlaymiz?" + subtitle "Biznes g‘oyangizdan
   ishlab turgan zavodgacha — biz yoningizdamiz".

2. 5-step vertical scroll-narrative. Each step takes one mobile screen
   height:
   - Big step number (01–05) outlined Manrope cyan
   - Photo on top
   - Title + 2–3 bullet description in Uzbek
   - "Qancha vaqt oladi" small chip

   01 — Tahlil & maslahat (BEPUL) · photo `manager-portrait.png` ·
        biznes-rejangizni tahlil qilamiz, bozorni o‘rganamiz · 1–3 kun
   02 — Yechim & taklif · photo of spec sheet on tablet · sizga mos
        uskunani tanlab, EXW narx va hisob-kitobni beramiz · 1–2 kun
   03 — Shartnoma & to‘lov · photo of contract signing · 30% oldindan,
        ishlab chiqarish boshlanadi · 1 kun
   04 — Yetkazib berish · photo `logistics-container.png` · o‘z
        logistikamiz orqali Toshkent yoki istalgan viloyatga · 15–30 kun
   05 — O‘rnatish & ishga tushirish · photo `installation-engineers.png` ·
        2 ta muhandis joyda, operatorlarni o‘qitamiz, 15 oy kafolat · 5–10 kun

3. Differentiator block: "Biz nima uchun 0% komissiya olamiz?" — illustrated
   diagram showing money flow:
   Mijoz → Zavod (haqiqiy narx)
   Zavod → VeriCore (komissiya)
   Caption: "Xitoy zavodlari bizga ish haqi to‘laydi, siz emas".

4. "Biz ham ishlab chiqaruvchimiz" — photo grid of 6 of VeriCore's own
   factories with location captions, headline "10+ zavod — biz ham ishlab
   chiqaruvchimiz".

5. Logistics map: Uzbekistan map with VeriCore office pin in Tashkent +
   delivery routes to all 12 viloyats highlighted in cyan.

6. Final CTA banner: "Loyihangizni biz bilan boshlang" + phone
   +998 99 491 28 30 big + amber "Bepul konsultatsiya" button.

7. Sticky bottom action bar.
```

### 6.5 Contact

```
Mobile contact page for VeriCore Global. Local Trust style. Goal: convert
visitors into leads through multiple channels.

1. Header + title "Biz bilan bog‘laning" + subtitle "Sizga eng qulay usulni
   tanlang".

2. 4 large channel cards (full-width vertical stack on mobile, 88 px tall):
   - Telegram (cyan icon + "@vericoreglobal" + "Eng tezkor — 5 daq ichida
     javob")
   - WhatsApp (green icon + "+998 99 491 28 30" + "Suratlar va hujjatlar
     uchun qulay")
   - Telefon (amber icon + "+998 99 491 28 30" + "Du-Sha 9:00–18:00")
   - Email (gray icon + "info@vericore.uz" + "Rasmiy so‘rovlar uchun")

3. Multi-step lead form (3 steps with progress indicator):
   Step 1: "Qaysi yo‘nalish sizni qiziqtiradi?" — 8 category cards, radio.
   Step 2: "Loyiha haqida" — output volume target, budget range (3 chips),
           region (dropdown of 12 viloyats + Tashkent).
   Step 3: "Aloqa" — name + phone (+998 99 491 28 30 placeholder) + Telegram
           username (optional) + "Qulay vaqt" time picker.
   Submit: amber "Yuborish va qo‘ng‘iroq kutish" full-width button.
   Confirmation: green checkmark + "Manager 15 daqiqada bog‘lanadi" +
   manager photo `manager-portrait.png` + name "Akmal Karimov" + role
   "Senior consultant".

4. Office map: embedded map of Tashkent office + address + working hours +
   "Yo‘l ko‘rsat" button.

5. "Tez-tez beriladigan savollar" — 6 FAQ accordion: kafolat, yetkazib
   berish, to‘lov, bojxona, xizmat, ehtiyot qismlar.

6. Footer (light VeriCore logo on dark bg).

7. Sticky bottom action bar.
```

---

## 7. HZS35 spec data (extracted from the source PDF — for product page fill-in)

### Technical parameters

| Parameter                   | Value                      |
| --------------------------- | -------------------------- |
| Model                       | HZS35                      |
| Productivity                | 35 m³/h                    |
| Cycle time                  | 72 s                       |
| Total power                 | 80 kW                      |
| Mixer model                 | JS750                      |
| Batching machine            | PLD1200                    |
| Feeding model               | Lift Hopper                |
| Discharge height            | 3.8–4.2 m                  |
| Air compressor              | 7.5 kW                     |
| Water weighing accuracy     | ±1%                        |
| Aggregate weighing accuracy | ±2%                        |
| Cement weighing accuracy    | ±1%                        |
| Overall L×W×H               | 18,360 × 9,800 × 17,600 mm |

### Commercial terms

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Container          | 1 × 40HQ                                                              |
| EXW price          | $25,500                                                               |
| Delivery           | 15 working days after 30% deposit                                     |
| Payment            | 30% advance / 70% before delivery                                     |
| Color              | as requested                                                          |
| Warranty           | 15 months after shipment                                              |
| Quotation validity | 30 days                                                               |
| Installation       | 2 engineers on-site, $80/day, buyer covers air tickets, visa, lodging |

---

## 8. Next iteration ideas (after first Stitch pass)

- Add 6 more vertical-specific photos (AAC, slate, metal, generators,
  cement, concrete close-up) to round out the catalog grid.
- Design the **dashboard** for clients to track active orders through the
  6-stage timeline (already specified in §6.3).
- Design a **calculator landing page** ("Beton zavodini ochish foydali
  emasmi?") as a content-marketing asset feeding the lead form.
- Telegram-bot interaction flow (since most B2B traffic in UZ comes
  through Telegram).

---

## Development

This repo is a **Next.js 16** App Router app with **`next-intl`** (`/uz`, `/ru`, `/en`), Tailwind CSS v4, Radix primitives, **Zustand** (compare tray, lead-form draft), and mock data under `shared/mock-data/`. Typography uses **Fontsource** variable fonts (self-hosted — no Google Fonts fetch at build time).

### Scripts

| Command                             | Purpose                                     |
| ----------------------------------- | ------------------------------------------- |
| `pnpm dev`                          | Dev server (Turbopack)                      |
| `pnpm build`                        | Production build                            |
| `pnpm start`                        | Serve production output                     |
| `pnpm lint` / `pnpm lint:fix`       | ESLint (flat config + `eslint-config-next`) |
| `pnpm typecheck`                    | `tsc --noEmit`                              |
| `pnpm format` / `pnpm format:check` | Prettier (+ Tailwind class sort)            |
| `pnpm test`                         | Vitest (unit / component smoke tests)       |

### Folder structure (FSD-inspired)

| Layer             | Role                                                                       |
| ----------------- | -------------------------------------------------------------------------- |
| `app/`            | Routes, `layout.tsx`, `sitemap.ts`, `robots.ts`, `manifest.ts`, middleware |
| `pages-segments/` | Smart page compositions (imports widgets + features + entities)            |
| `widgets/`        | Organisms (Stitch-aligned sections)                                        |
| `features/`       | User flows (lead form, compare, filters, ROI mini, FAB)                    |
| `entities/`       | Domain helpers over mock data (`getProductBySlug`, etc.)                   |
| `shared/`         | UI kit, styles, i18n, SEO helpers, mock data, libs                         |

Path aliases: `@app/*`, `@pages-segments/*`, `@widgets/*`, `@features/*`, `@entities/*`, `@shared/*` (see `tsconfig.json`).

### Mock data

- Files live in `shared/mock-data/` (`products.ts`, `categories.ts`, …) and are re-exported from `shared/mock-data/index.ts`.
- **HZS35** in `products.ts` follows the quoting PDF (specs, configuration blocks, warranty, commercial terms).
- After changing data, regenerate static paths is automatic via `generateStaticParams` where defined.

### Adding a category

1. Add an entry to `CATEGORIES` in `shared/mock-data/categories.ts` (unique `slug`, `icon`, `i18n.{uz,ru,en}`, `productCount`, `imageKey`).
2. Ensure slug matches URLs: `/katalog/[category]`.

### Adding a product

1. Append to `PRODUCTS` in `shared/mock-data/products.ts` with unique `slug` and matching `categorySlug` (existing category slugs).
2. Fill `spec`, `commercial`, `warranty`, `i18n`, and optional `configuration` arrays.
3. Product URL: `/mahsulot/[slug]` (per locale prefix).

### Assets

Marketing images: `public/images/` (copied from `assets/placeholders/`). Brand: `public/brand/`. Favicon / app icon: `app/icon.png`.
