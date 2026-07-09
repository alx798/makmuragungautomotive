# Makmur Agung Autoshop — Design System

> Premium dark-automotive identity for **Makmur Agung Autoshop**, an authorized
> reseller of **Aozoom** automotive lighting (Bi-LED projectors, HID/xenon kits,
> laser headlights, LED bulbs & DRLs).

---

## ⚠️ Read this first — provenance & an important substitution

**This system was built from a brand brief, not from existing Makmur Agung source files.**
No codebase, Figma file, brand guide, logo, or photography was provided. Everything here is an
**original identity** created in the *premium dark-automotive* genre.

The brief that seeded this work described **BMW M's** marketing system in detail (black canvas,
full-bleed car photography, heavy uppercase display + light body, sharp 0-radius buttons, the M
tricolor stripe, BMW Type Next Latin, the BMW roundel). **We did not reproduce any of BMW's
trademarked elements** — that would be brand infringement for a different company. Instead we kept
only the *genre-generic* conventions (which BMW shares with most performance-automotive brands) and
replaced every BMW-specific mark with an original equivalent themed around Aozoom's actual product —
automotive **light**:

| BMW-trademarked element in the brief | Original Makmur Agung replacement |
|---|---|
| The **M tricolor** stripe (blue→blue→red) | The **"Ignition" stripe** — an **Aozoom orange** gradient (amber→orange→plate-red) that signals the official Aozoom partnership |
| **BMW roundel** + "M" wordmark | Original **MAKMUR AGUNG** type-lockup (trades as **Aozoom Malang**) with an orange beam-cutoff mark |
| **BMW Type Next Latin** (licensed) | **Saira Condensed** (display) + **Saira** (body) — free, cohesive, technical |
| BMW heritage blue / electric blue | Aozoom orange `--aozoom-orange #FF5A1F` only |

> **Brand color (confirmed by client):** orange + black, matching Aozoom's own corporate colors, to
> reinforce the partnership. The shop trades as **"Aozoom Malang"** (Malang, East Java) — see the
> dealer plate in the supplied install photos.

**👉 If Makmur Agung already has a logo, brand colors, or fonts, send them and I'll re-skin everything.**
Likewise the system leans on **automotive/headlight photography** that I cannot generate — every
photo area is a labeled placeholder (or a drag-drop image slot in the UI kit). **Please supply real
product and install photography.**

### Sources consulted (you may not have access — recorded for traceability)
- Aozoom global manufacturer site — product taxonomy & positioning: `aozoomlighting.com`, `projector-headlight-manufacturer.com`
- Aozoom regional reseller copy: `aozoom.in`, retail listings on Car Concepts Shop / Drivestylish
- Brand positioning: "a registered German brand with a production base in China"; "Top-notch Automotive Lighting Brand"; product lines = digital HID xenon ballasts, HID/xenon bulbs, bi-xenon projectors, **Bi-LED projector lens** (A5+, A6, CLPD, laser AAPD), LED bulbs, fog projectors, DRLs.

---

## 1. Company & product context

**Makmur Agung Autoshop** is an Indonesian **authorized reseller and retrofit installer** of Aozoom
automotive lighting. The business sells lighting hardware and performs **headlight retrofit** service
(cutting/fitting projectors into stock housings). The customer-facing surface is therefore a
**retail + service storefront**:

- **Browse & buy** lighting hardware — Bi-LED projector lenses, HID kits, ballasts, LED bulbs, DRLs, fog projectors.
- **Book a retrofit** — pick a car, pick a lighting package, book an install slot at the shop.
- **Learn / trust** — beam-pattern explainers, certifications (E-MARK, DOT, ISO), warranty, install gallery.

**Order channels:** alongside the on-site cart/booking, the primary conversational channel is
**WhatsApp** (an "Order WA" CTA in the nav, hero, product pages, footer, and a floating launcher),
with **Instagram** (`@aozoom.malang`) for social proof — matching how Indonesian autoshops actually
sell. Replace the placeholder WhatsApp number / IG handle in `ui_kits/storefront/components.jsx`
(`WA_LINK`, `IG_LINK`) with the real ones.

**Audience:** car enthusiasts and everyday owners in Indonesia upgrading from dim halogen to sharp,
bright, cool-white beams. The tone is **performance + safety**: brighter, farther, sharper cutoff,
"see and be seen." Aspirational but practical — these are real parts that get installed.

**Market note:** Indonesian audience. Copy is **Bahasa Indonesia primary**, with English retained for
established product/technical terms (Bi-LED, Plug & Play, lumens, Kelvin, projector, garansi/warranty).
This bilingual mix mirrors how the Indonesian car-mod scene actually writes.

---

## 2. Content fundamentals (voice & copy)

**Voice = confident performance-spec, never salesy fluff.** We talk like a workshop that knows light:
numbers, cutoff lines, Kelvin, lumens, range in meters. The energy comes from *capability*, not
adjectives.

- **Casing:** Headlines and section heads are **UPPERCASE** (the "stamped" voice). Body, intros, and
  product descriptions are **sentence case** Bahasa Indonesia. Never sentence-case a hero headline;
  never UPPERCASE a paragraph.
- **Person:** Address the customer as **"Anda"** (you). The shop speaks as **"kami"** (we) only for
  service/warranty promises. Product copy is largely impersonal & spec-led.
- **Numbers do the talking.** Prefer concrete specs over hype: *"Jangkauan 100 m lebih jauh"*,
  *"5500K cool white"*, *"cutoff tajam, tidak menyilaukan"*, *"Plug & Play, tanpa potong soket"*.
- **No emoji.** None. Not in marketing, not in UI. (The brief's Aozoom social uses emoji; the
  Makmur Agung *brand* surface does not.) Iconography handles all glyph needs.
- **Sentence length:** short, declarative. One claim per line. Lists over paragraphs for specs.

**Example copy (house voice):**
- Hero: **"LEBIH TERANG. LEBIH JAUH. LEBIH TAJAM."** / sub: *"Retrofit Bi-LED Aozoom resmi — cutoff presisi, tanpa menyilaukan lawan arah."*
- Product card: **"AOZOOM A6 BI-LED 3.0″"** / *"35W · 7200 lm · 5500K · cutoff tajam"* / link: **"LIHAT DETAIL →"**
- Trust line: *"Garansi resmi 2 tahun · E-MARK & DOT · Pemasangan oleh teknisi bersertifikat."*
- CTA band: **"SIAP UPGRADE LAMPU MOBIL ANDA?"** / button: **"BOOKING RETROFIT"**

**Don't:** marketing-bombast ("revolutionary", "the best ever"), exclamation-point spam, emoji,
all-caps body copy, or rounded "friendly" softeners. The brand is precise, not chatty.

---

## 3. Visual foundations

**The one-line system:** *near-black canvas → full-bleed lit-car/headlight photography → heavy
condensed uppercase headlines → light body → sharp rectangles → the Beam as the only glow.*

### Color
- **Floor is true near-black** (`--canvas #08090B`). The system **never inverts** to a light marketing
  surface. Depth comes from photography and a 4-step surface ramp (`soft → card → elevated → carbon`),
  not from drop shadows.
- **Text is cool-white-to-gray:** `--on-dark #FFFFFF` for headlines, `--body #B5BAC2` for running copy,
  `--muted #7A8088` for captions.
- **The Ignition stripe is the only brand color.** **Aozoom orange** `--aozoom-orange #FF5A1F`
  (flanked by `--aozoom-amber #FFB24D` and the plate red-orange `--aozoom-orange-deep #E8431F` in a
  left-to-right gradient). It signals the Aozoom partnership and appears as a **3px luminous divider**,
  the **wordmark mark**, **active-tab underlines**, **focus rings**, **badges**, and **CTA accents**.
  It may anchor a primary CTA but is **never a flat full-bleed background wash**.
  *(In `colors_and_type.css` the legacy `--beam-*` token names are kept as aliases pointing at the
  orange palette, so older markup still works.)*
- **Amber `#FFB020`** folds into the brand orange family — reserved for the `--warning` semantic and
  literal DRL/indicator content.
- **Semantic:** `--success #2FBF71` (in stock / booked), `--warning #FFB020`, `--danger #FF4D4D`.
- **The color glow behind imagery is warm orange** now (not cool) — it reads as "lit by Aozoom." The
  cool blue glow in the real angel-eye photos provides natural contrast against the orange UI.

### Type
- **Display:** Saira Condensed **700**, UPPERCASE, tracking `-0.5px` at large sizes. Condensed gives an
  automotive-instrument / motorsport-timing-board feel and lets long Indonesian words sit tightly.
- **Body:** Saira **300** (Light), sentence case. The heavy-display / light-body contrast is the
  editorial signature — **never** blur it with 400 display or 500 body.
- **Labels & buttons:** Saira Condensed **600**, UPPERCASE, **1.5px tracking** ("machined" feel).
- Full scale lives in `colors_and_type.css`.

### Spacing & layout
- 4px base unit. `--space-section (96px)` between major bands, `--space-xxl (64px)` inside hero bands,
  `--space-lg (24px)` card padding, `--space-lg` gutters in 3-up grids.
- Max content width **~1440px** centered — wider than typical web, to give photography room.
- Photo bands bleed **full-width** (no max-width). Card grids are 3-up desktop / 2-up tablet / 1-up mobile.

### Backgrounds, imagery & "the lit look"
- Backgrounds are **flat near-black** — no gradient backdrops behind hero type, no atmospheric washes,
  no repeating patterns or textures (carbon-fiber tone is reserved for spec cells only).
- **Imagery is the voltage:** full-bleed photography of cars at night, headlight close-ups, beam-pattern
  shots, install/workshop shots. Color grade is **cool** (blue-hour, night, cool-white beams) with the
  occasional warm DRL/amber accent. Product shots sit on pure black.
- Where a photo is "lit," a soft **beam-glow** (`--beam-glow`) may sit behind it — this is the only
  permitted glow in the system and it stands in for the light the product emits.

### Motion
- Restrained. **Fades and short transl(8–16px) rises**, 150–240ms, ease-out. No bounce, no spring, no
  parallax theatrics. One signature motion: a **beam-sweep** — the Beam gradient wiping left-to-right
  across a divider or active underline on entrance (240ms). Carousels cross-fade.

### States
- **Hover:** outlined buttons fill with a faint `rgba(255,255,255,0.06)` wash + border brightens to
  `--on-dark`; text links brighten muted→white and the `→` nudges 4px right. No color shifts to the Beam.
- **Active/pressed:** 1px inset / `translateY(1px)`, no scale-down on rectangles. Circular icon buttons
  may scale to `0.96`.
- **Focus:** 2px `--beam-cyan` outline (offset 2px) — the Beam doubles as the a11y focus color.
- **Active nav/tab:** text goes `--body → --on-dark` with a 2px Beam underline.

### Borders, corners, elevation, transparency
- **Corners: 0px everywhere** except `--radius-full` (circular icon buttons / carousel arrows) and a
  rare `--radius-sm 4px` (toggle pills, chips). The sharp rectangle *is* the brand.
- **Borders:** 1px `--hairline #2A2D34` hairlines do most dividing work; `--hairline-strong` for emphasis/focus rings.
- **Cards:** flat `--surface-card` over canvas, **no shadow**, optional 1px hairline. Depth = surface
  step + photography, not shadow. Menus/dialogs are the only things that get `--shadow-pop`.
- **Transparency & blur:** used only for sticky-nav scrim (`backdrop-filter: blur(12px)` over
  `rgba(8,9,11,0.8)`) and for button hover washes. No frosted-glass everywhere.

---

## 4. Iconography

- **Icon set: [Lucide](https://lucide.dev)** (CDN) for all UI glyphs. Clean **1.75px stroke,
  square-ish, geometric** — reads as technical/automotive and pairs with the condensed type. A
  **substitution** (no house icon set was supplied); swap if one exists.
- **Brand glyphs (WhatsApp, Instagram): [Simple Icons](https://simpleicons.org) CDN** —
  `https://cdn.simpleicons.org/whatsapp/<hex>` and `/instagram/<hex>`. Lucide dropped social brand
  marks, so these are loaded as recolorable images (the `BrandIcon` component in the kit). Used only
  for the WhatsApp-order and Instagram links.
- **Load:** `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.
  Common glyphs: `search`, `user`, `shopping-cart`, `menu`, `chevron-right`, `chevron-left`,
  `lightbulb`, `zap`, `shield-check`, `wrench`, `map-pin`, `phone`, `star`, `plus`, `minus`, `x`.
- **Stroke color** follows text color (`--on-dark` default, `--muted` for secondary). Icons never carry
  the Beam color except in an active/selected state.
- **No emoji. No Unicode dingbats** as icons. The only non-Lucide glyph permitted is the literal
  arrow **`→`** in text links (it's typographic, set in the body font).
- **Product/spec micro-icons** (Kelvin, lumens, wattage, fitment, warranty) use Lucide
  (`thermometer`/`sun`, `zap`, `gauge`, `car`, `shield-check`) — never custom illustration.

---

## 5. Index — what's in this system

| File / folder | What it is |
|---|---|
| `README.md` | This document — context, voice, foundations, iconography. |
| `colors_and_type.css` | All design tokens (color, type scale, spacing, radius, elevation) as CSS vars + semantic element classes. **Import this everywhere.** |
| `SKILL.md` | Agent-Skill entry point (for use in Claude Code). |
| `fonts/` | (Self-host target) — currently fonts load from Google Fonts CDN via `colors_and_type.css`. |
| `assets/` | Brand marks & shared imagery. The Makmur Agung wordmark lockup + photo-placeholder guidance. |
| `preview/` | Small design-system cards (color, type, spacing, components) shown in the Design System tab. |
| `ui_kits/storefront/` | High-fidelity recreation of the retail + retrofit storefront — `index.html` (clickable) + JSX components + its own README. |

**No slide template** was provided, so no `slides/` were created.
