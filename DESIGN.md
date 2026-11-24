---
version: 1.0.0
name: thaisonzdx-design
description: |
  A terminal-inspired marketing system set in Roboto Mono — every word of chrome, from the hero headline down to the footer fine print, uses the same monospaced face, which also carries code and TUI surfaces. The page itself reads like a manpage or a static-site README: white canvas (`#ffffff`), Google Grey 900 ink (`#202124`), Google Blue (`#1a73e8`) primary actions, 4px-radius rectangles for the few interactive elements, and bracketed `[+]`/`[-]` ASCII markers used as bullets. The brand's only "visual moment" is a single dark hero card that mocks up the OpenCode TUI itself — black background, monospaced terminal output, ASCII pipe characters, and a wordmark rendered as block-pixel ASCII. Every section sits as a hairline-bordered text block on the white canvas with no shadows, no gradients, no decorative imagery, and no second display face anywhere in the system.

colors:
  primary: "#1a73e8"
  on-primary: "#ffffff"
  ink: "#202124"
  ink-deep: "#000000"
  charcoal: "#303134"
  body: "#3c4043"
  mute: "#5f6368"
  stone: "#80868b"
  ash: "#9aa0a6"
  canvas: "#ffffff"
  surface-soft: "#f8f9fa"
  surface-card: "#f1f3f4"
  surface-dark: "#202124"
  surface-dark-elevated: "#303134"
  hairline: "#dadce0"
  hairline-strong: "#5f6368"
  on-dark: "#e8eaed"
  on-dark-mute: "#9aa0a6"
  brand: "#1a73e8"
  brand-hover: "#1967d2"
  brand-active: "#185abc"
  warning: "#f9ab00"
  warning-hover: "#f29900"
  warning-active: "#e37400"
  danger: "#d93025"
  danger-hover: "#c5221f"
  danger-active: "#a50e0e"
  success: "#188038"
  success-hover: "#137333"
  success-active: "#0d652d"

typography:
  display-xl:
    fontFamily: Roboto Mono
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  heading-md:
    fontFamily: Roboto Mono
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: Roboto Mono
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: Roboto Mono
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  body-tight:
    fontFamily: Roboto Mono
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  link-md:
    fontFamily: Roboto Mono
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button-md:
    fontFamily: Roboto Mono
    fontSize: 16px
    fontWeight: 500
    lineHeight: 2
    letterSpacing: 0
  caption-md:
    fontFamily: Roboto Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 2
    letterSpacing: 0
  code-md:
    fontFamily: ui-monospace
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  full: 9999px

spacing:
  xxs: 1px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  gutter: 24px
  gutter-lg: 80px
  section-y: 48px
  section-y-lg: 64px
  section: 96px
  frame: 1080px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 4px 20px
    height: 36px
  button-primary-active:
    backgroundColor: "{colors.brand-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 4px 20px
  button-tab:
    backgroundColor: "transparent"
    textColor: "{colors.mute}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 8px 16px
  button-tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
  button-disabled:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ash}"
    rounded: "{rounded.sm}"
  badge-news:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  text-input:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
    height: 40px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  textarea:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px
  install-snippet:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.code-md}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  hero-tui-mockup:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code-md}"
    rounded: "{rounded.none}"
    padding: 64px 32px
  tui-prompt-row:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  list-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 8px 0px
  faq-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 12px 0px
  testimonial-row:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 16px 20px
  chart-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
    padding: 16px
  page-frame:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    maxWidth: "{spacing.frame}"
  section-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 48px 24px
  section-band-lg:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: 64px 80px
  hero-band:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: 64px 24px
  hero-band-lg:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: 96px 80px
  stat-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 20px
  stat-band-lg:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    padding: 32px
  announcement-strip:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
    padding: 10px 24px
  data-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 16px 0px
  primary-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    height: 80px
  primary-nav-active:
    textColor: "{colors.ink}"
  footer-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 32px 0px
  footer-legal:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
  link-inline:
    textColor: "{colors.ink}"
    typography: "{typography.link-md}"
  badge-section-label:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.none}"
---

## Overview

The site is set in Roboto Mono — every word of chrome, from the 38px hero headline down to the 14px footer fine print, sits in the same monospaced face. The terminal flavor comes from both the type and the layout: the page reads like a manpage or a static-site README, complete with bracketed `[+]` / `[-]` / `[x]` ASCII markers used in place of icons or bullets, and a wordmark rendered as block-pixel ASCII art at the top of the nav. There is no second display face, no italics, no decorative ornament — code snippets and the TUI mockup use the same face at `{typography.code-md}`.

The chrome follows Google's product palette: white canvas (`{colors.canvas}` — `#ffffff`), Google Grey 900 ink (`{colors.ink}` — `#202124`), and the Google Grey ladder (`#3c4043` → `#5f6368` → `#80868b` → `#9aa0a6`) for body, metadata, and disabled text. Cards don't exist as raised surfaces. The whole page lives inside one 1080px `{component.page-frame}` outlined by 1px `{colors.hairline}` side rules, and every section is a full-width band inside that frame, separated from the next by a single hairline and padded from within (48–64px vertical, 24–80px horizontal). The single "visual" moment in the entire system is a full-bleed dark hero card (`{colors.surface-dark}` — true near-black) that mocks up the OpenCode TUI itself: a terminal frame with `tab` / `ctrl-p` keybinding hints, a "Build" command line, and the OpenCode wordmark rendered as a pixel-block ASCII title.

The semantic palette follows Google's brand ramp — `{colors.brand}` (Google Blue `#1a73e8`), `{colors.danger}` (Google Red `#d93025`), `{colors.warning}` (Google Yellow `#f9ab00`), `{colors.success}` (Google Green `#188038`) plus their hover/active deepenings. Google Blue is the primary action color (CTAs, focus rings, input focus); the other hues carry their conventional status meaning. Charts use the Google logo colors (`#4285f4`, `#ea4335`, `#fbbc04`, `#34a853`).

**Key Characteristics:**
- Roboto Mono across every text role; `{typography.code-md}` only for code and TUI surfaces
- White `{colors.canvas}` (#ffffff) as the only body background — no surface alternation across sections
- Single dark surface (`{colors.surface-dark}` — #202124) reserved exclusively for the hero TUI mockup
- 4px radius (`{rounded.sm}`) on every interactive element; sections themselves are sharp rectangles bordered in 1px hairline
- ASCII bracket markers (`[+]`, `[-]`, `[x]`) used as bullet glyphs in feature lists and FAQ rows
- Block-pixel ASCII wordmark in the primary nav and inside the hero TUI — the brand identity is its own ASCII art
- A hairline-outlined 1080px page frame; sections are stacked bands inside it, each separated by one 1px `{colors.hairline}` rule and padded internally — no gaps or decorative dividers between them

## Colors

> **Source pages:** `/` (home), `/zen`, `/enterprise`. The chrome palette is identical across all three.

### Brand & Accent
- **Google Blue** (`{colors.primary}` / `{colors.brand}` — `#1a73e8`): primary CTA fill, focus rings, focused input border.
- **Blue Hover / Active** (`{colors.brand-hover}` — `#1967d2`, `{colors.brand-active}` — `#185abc`): hover and pressed states for the primary CTA.
- **Ink** (`{colors.ink}` — `#202124`): Google Grey 900. Headlines, body emphasis, nav links, and every solid icon.
- **Ink Deep** (`{colors.ink-deep}` — `#000000`): maximum-contrast text where needed.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): every page body, every card, and on-primary text.
- **Soft Surface** (`{colors.surface-soft}` — `#f8f9fa`, Grey 50): text-input default background, testimonial row fill, alternating row tint.
- **Surface Card** (`{colors.surface-card}` — `#f1f3f4`, Grey 100): install-snippet pill, disabled button fill, slightly-elevated section row.
- **Surface Dark** (`{colors.surface-dark}` — `#202124`): the hero TUI mockup background and the dark badge. Identical to `{colors.ink}` — Google's dark-theme background.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — `#303134`): the prompt-row inside the hero TUI mockup, Google's dark-theme elevated surface.
- **Hairline** (`{colors.hairline}` — `#dadce0`, Grey 300): 1px section divider — Google's standard outline color.
- **Hairline Strong** (`{colors.hairline-strong}` — `#5f6368`): tab strip's bottom rule and stronger inline divider.

### Text
- **Ink** (`{colors.ink}` — `#202124`): headlines, primary nav links, button text on light surfaces.
- **Charcoal** (`{colors.charcoal}` — `#303134`): subtly softer body where pure ink is too heavy.
- **Body** (`{colors.body}` — `#3c4043`, Grey 800): default paragraph text and FAQ answers.
- **Mute** (`{colors.mute}` — `#5f6368`, Grey 700): tab labels (default state), metadata, footer link text, in-list secondary annotations.
- **Stone** (`{colors.stone}` — `#80868b`, Grey 600): least-emphasis utility text, breadcrumb separators.
- **Ash** (`{colors.ash}` — `#9aa0a6`, Grey 500): disabled text and secondary annotation in dark TUI mockup.
- **On Dark** (`{colors.on-dark}` — `#e8eaed`): text on dark surfaces.

### Semantic
Google's status ramp. Dark mode uses the tonal pastels (`#8ab4f8`, `#f28b82`, `#fdd663`, `#81c995`).

- **Danger** (`{colors.danger}` — `#d93025`; hover `#c5221f`; active `#a50e0e`): destructive confirmation, error state.
- **Warning** (`{colors.warning}` — `#f9ab00`; hover `#f29900`; active `#e37400`): caution callouts.
- **Success** (`{colors.success}` — `#188038`; hover `#137333`; active `#0d652d`): positive confirmation, success indicator.

## Typography

### Font Family
**Roboto Mono** is the single face used across every text role. It is loaded via `next/font/google` (`Roboto_Mono` in [app/layout.tsx](app/layout.tsx), Latin + Vietnamese subsets) as a variable font and exposed as the `--font-roboto-mono` CSS variable, bound to both `--font-sans` (Tailwind `font-sans`) and `--font-mono` (Tailwind `font-mono`). It supports weights 100–700; the system uses 400 (regular), 500 (medium), and 700 (bold) and falls back through the system monospace stack — ui-monospace → SFMono-Regular → Menlo → Monaco → Consolas → Liberation Mono → Courier New.

**Code** (`{typography.code-md}`, Tailwind `font-mono`) is reserved for the install snippet, the hero TUI mockup, and its prompt row. It resolves to the same Roboto Mono face, at 15px.

**ASCII wordmark** (`type-wordmark`, `type-wordmark-lg`) is the one exception: Roboto Mono has no block-element glyphs (`█`, `▀`), so the wordmark uses `--font-ascii` (Menlo → Monaco → Consolas → DejaVu Sans Mono → Liberation Mono → Courier New), faces whose block glyphs fill exactly one cell, which keeps the pixel grid aligned. `ui-monospace` / SF Mono is deliberately excluded: it draws `█` and `▀` wider than its advance, so adjacent letters overlap.

The single-face decision is the brand. There is no display face and no italic alternative — even the legal copyright row uses Roboto Mono at 14px.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 38px | 700 | 1.5 | 0 | Hero headline ("The open source AI coding agent") |
| `{typography.heading-md}` | 16px | 700 | 1.5 | 0 | Section label ("What is OpenCode?", "FAQ", "Built for privacy first") |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Body copy, paragraph text, list-row text, install-snippet code |
| `{typography.body-strong}` | 16px | 500 | 1.5 | 0 | Inline emphasis, primary nav link, tab-label active |
| `{typography.body-tight}` | 16px | 500 | 1 | 0 | Compact label rendered without breathing room |
| `{typography.link-md}` | 16px | 400 | 1.5 | 0 | Inline anchor link in body prose |
| `{typography.button-md}` | 16px | 500 | 2 | 0 | Every button label across the system |
| `{typography.caption-md}` | 14px | 400 | 2 | 0 | Footer link text, badge label, copyright row, chart caption |
| `{typography.code-md}` | 15px | 400 | 1.5 | 0 | Install snippet, hero TUI mockup, TUI prompt row (monospace) |

### Principles
The hierarchy is built almost entirely from size and weight contrast on a single face. The display headline (38px / 700) and the heading-md label (16px / 700) share a weight; the difference is just size. Body and link share size, weight, and line-height — only context distinguishes them. Buttons get a deliberately tall line-height (2.0) so labels feel calmly spaced inside the 4px-radius rectangle.

### Note on Font Substitutes
Roboto Mono is served through `next/font/google`, so no self-hosting is required. If it must be swapped, close open-source substitutes are:
- **JetBrains Mono** — similar proportions with a slightly taller x-height; pair at weights 400 / 500 / 700.
- **IBM Plex Mono** — a touch more character, full weight range.
- **Source Code Pro** — neutral, wide weight range for minimal fallbacks.

When substituting, line-height behavior is preserved by keeping `lineHeight: 1.5` for body and `lineHeight: 2` for buttons — adjusting weight is rarely needed.

## Layout

The page is a **framed ledger**: one bordered column, cut into horizontal bands by hairlines. Nothing floats in open space between sections; the rules do the separating and the padding lives inside each band.

### Spacing System
- **Base unit:** 8px (with finer 1/2/4px steps available for tight inline gaps).
- **Tokens (front matter):** `{spacing.xxs}` (1px) · `{spacing.xs}` (4px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.lg}` (16px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.gutter}` (24px) · `{spacing.gutter-lg}` (80px) · `{spacing.section-y}` (48px) · `{spacing.section-y-lg}` (64px) · `{spacing.section}` (96px) · `{spacing.frame}` (1080px).
- **Section band padding:** `{component.section-band}` is `{spacing.section-y}` × `{spacing.gutter}` (48px / 24px) below 1024px and `{spacing.section-y-lg}` × `{spacing.gutter-lg}` (64px / 80px) from 1024px. The hero band is taller: 64px → `{spacing.section}` (96px).
- **Inside a band:** the section label sits 16px above its content; list rows are 8px vertical, table rows 16px vertical. Text starts flush at the band's inner gutter.

### Page Frame
- **`{component.page-frame}`** — `max-width: {spacing.frame}` (1080px), centered. From 1024px it gets 1px `{colors.hairline}` left, right and bottom rules (no top rule: the sticky nav's bottom rule closes it). Below 1024px the frame is edge-to-edge with no side rules.
- **Inside the frame, top → bottom:** sticky `{component.primary-nav}` → optional `{component.announcement-strip}` → `main` (stacked bands) → `{component.footer-section}`.
- **Outside the frame:** only `{component.footer-legal}` (copyright and utility links), centered 64px below the frame, with 80px of canvas below it.
- **Every band shares the nav's horizontal gutter** (24px → 80px), so the wordmark, section labels and body text all align on one left edge.

### Band Types
- **Section band** (`{component.section-band}`) — the default. 1px `{colors.hairline}` top rule (dropped on the first band), internal padding as above, bold `{component.badge-section-label}` line then content.
- **Hero band** (`{component.hero-band}`) — first band, taller padding. May split `1fr auto` from 768px with a type-only right column; never a photo.
- **Full-bleed band** — breaks out of the gutter to the frame edges with a hairline top rule. Two kinds:
  - `{component.stat-band}`: a 1 → 3 column `dl`, cells divided by hairlines (horizontal on mobile, vertical from 768px), each cell padded 20px → 32px, the value in `{typography.display-xl}` sizing (28 → 38px, `{colors.ink}`) above a `{typography.body-md}` label.
  - `{component.hero-tui-mockup}`: the single dark band of the page. Padded with the same gutter as a section band.
- **Split band** — a section band whose content is `1fr 480px` from 1024px (text and details left, form or action column right), stacked below.

### Grid & Data
- **Single reading column** inside each band. Prose is capped at ~65ch (`max-w-prose`).
- **Label/description rows** (`{component.list-row}`): the bold label and the description stack on mobile and sit inline (label `shrink-0`, 8px gap) from 768px.
- **`{component.data-table}`** — schedules and timelines: header row in `{typography.body-md}` bold `{colors.ink}` over a 1px `{colors.hairline-strong}` rule, body rows 16px vertical divided by `{colors.hairline}`, time/period column fixed-width with tabular numerals. Below 768px every row collapses into a stacked block (period as a caption, then title, then meta) and the header row is hidden.
- **Footer:** equal link cells in one row, each separated by a 1px `{colors.hairline}` vertical rule (stacked with horizontal rules on the narrowest screens).

### Whitespace Philosophy
Whitespace is structural, but it lives *inside* the bands rather than between them. A reader scans down a single bordered column where each hairline marks a new topic, like the rows of a printed ledger or a manpage. Inside a band, content is left-flush against the gutter with no extra indentation; bullets use ASCII bracket prefixes (`[+]` / `[-]` / `[x]`) instead of indent-based layout.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No border, no shadow | Default for body sections, list rows, hero text block, footer |
| 1 — Hairline rule | 1px solid `{colors.hairline}` (Google Grey 300) | Section dividers, between major content blocks |
| 2 — Hairline strong | 1px solid `{colors.hairline-strong}` | Tab strip bottom rule, in-list emphasized divider |
| 3 — Inverted dark | `{colors.surface-dark}` fill | Hero TUI mockup, dark CTA pill — the system's only "elevated" surface uses color, not shadow |

There are no drop shadows in the system. Nothing lifts, nothing floats. The only way an element registers as "above" another is the dark surface used in the hero mockup.

### Decorative Depth
Depth comes from typography density and the single dark TUI mockup, not from CSS effects:
- **ASCII block-pixel wordmark** — the OpenCode brand name rendered as a 5-row block of monospaced character cells, used in the primary nav and as the centerpiece of the hero TUI mockup.
- **Hero TUI mockup** — full-bleed `{colors.surface-dark}` rectangle containing a faux terminal interface: ASCII wordmark, a `tui-prompt-row` showing a Build command line, and `tab switch agent` / `ctrl-p commands` keybinding hints in `{colors.ash}` at the bottom edge.
- **Chart tiles** — three thin-line ASCII charts inside the home page's "open source AI coding agent" stat block, with abstract dotted/sparse-line plots in `{colors.body}` against the white canvas. Captions sit beneath in `{typography.caption-md}` (`Fig 1. 150K GitHub Stars`, `Fig 2. 850 Contributors`, `Fig 3. 6.5M Monthly Devs`).

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Sections, hero TUI mockup, primary nav, footer, list rows — every container that isn't a button |
| `{rounded.sm}` | 4px | Every interactive element — primary CTA, secondary CTA, text inputs, install snippet, badges, prompt rows |
| `{rounded.full}` | 9999px | Avatar circles in testimonials |

The radius vocabulary is two values: 4px for interactive elements and 0px for everything else. Avatar circles in testimonial rows are the only fully-rounded element in the system.

### Photography Geometry
There is no photography. Visual elements are limited to:
- **ASCII block-pixel wordmark** in the nav and hero TUI mockup.
- **Inline ASCII charts** inside the stat-block section — abstract sparse-line and dotted plots without specific data points.
- **Avatar dots** (~32px) inside testimonial rows on `/zen` — flat colored circles in `{rounded.full}`.
- **In-product icons** (kbd, A+, ⊕, ↻, K, Z) rendered as small monospaced character glyphs, not bitmaps or SVG.

## Components

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only.

### Buttons

**`button-primary`** — the universal OpenCode CTA
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}`, padding `4px 20px`, height ~36px, rounded `{rounded.sm}` (4px).
- Used for "Download" (top nav), "Get started with Zen", "Send" (enterprise contact form), "Subscribe" (newsletter footer), "Read docs →".
- Pressed state lives in `button-primary-active` — background deepens to `{colors.brand-active}`.

**`button-secondary`** — outlined alternative
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline-strong}` border, type `{typography.button-md}`, padding `4px 20px`, rounded `{rounded.sm}`.
- Lower-emphasis CTA — appears beside the primary fill where two actions are paired.

**`button-tab`** + **`button-tab-active`** — install-tab strip
- Default: transparent background, text `{colors.mute}`, type `{typography.button-md}`, padding `8px 16px`, rounded `{rounded.none}`.
- Active: same surface, text `{colors.ink}`, with a 2px `{colors.ash}` bottom underline indicating selection.
- Used in the install-method tab strip on the home page (`curl` / `npm` / `bun` / `brew` / `yay`).

**`button-disabled`**
- Background `{colors.surface-card}`, text `{colors.ash}`, rounded `{rounded.sm}`.

### Badges & Chips

**`badge-news`** — small dark chip in the news/announcement strip
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, type `{typography.caption-md}`, padding `2px 8px`, rounded `{rounded.sm}`.
- Sits inline with body copy as a "News" / "Beta" / "Live now" tag on the home page above the hero headline.

**`badge-section-label`** — bracketed section header
- Background transparent, text `{colors.ink}`, type `{typography.heading-md}`, rounded `{rounded.none}`.
- Renders as a bare `**Heading**` line above a 1px `{colors.hairline}` rule with no chip background — but the way the text reads ("[+]", "[x]", `What is OpenCode?`) makes it function as a label component.

### Inputs & Forms

**`text-input`** + **`text-input-focused`**
- Default: background `{colors.surface-soft}`, text `{colors.ink}`, 1px solid `{colors.hairline}`, type `{typography.body-md}`, padding `8px 12px`, height ~40px, rounded `{rounded.sm}`.
- Focused: background flips to `{colors.canvas}`, border becomes 1px solid `{colors.brand}` (Google Blue focus signal — no halo, no glow).
- Used for every contact-form field on `/enterprise` (Full name, Role, Company, Company email, Phone number) and the newsletter email field at the home page footer.

**`textarea`**
- Background `{colors.surface-soft}`, text `{colors.ink}`, 1px solid `{colors.hairline}`, type `{typography.body-md}`, padding `12px`, rounded `{rounded.sm}`.
- "What problem are you trying to solve?" multi-line textarea on `/enterprise`.

**`install-snippet`** — the home page's signature install code block
- Background `{colors.surface-card}` (`#f1f3f4`), text `{colors.ink}` rendered in `{typography.code-md}` (monospace), padding `12px 16px`, rounded `{rounded.sm}`.
- Contains the literal `curl -fsSL https://opencode.ai/install | bash` command with a small copy-icon at the right edge. Sits below the install-method tab strip.

### Cards & Containers

**`hero-tui-mockup`** — the home page's signature TUI preview
- Container: full-bleed `{colors.surface-dark}` (~near-black), padding `64px 32px`, rounded `{rounded.none}`.
- Contents (top → bottom): ASCII block-pixel "OPENCODE" wordmark centered in `{colors.on-dark}`; a `{component.tui-prompt-row}` showing a "Build" command line with model selector text; an `tab switch agent  ctrl-p commands` keybinding hint row at the bottom in `{colors.ash}`.

**`tui-prompt-row`** — the inset command line inside the TUI mockup
- Background `{colors.surface-dark-elevated}` (`#303134`), text `{colors.on-dark}` in `{typography.code-md}`, padding `8px 12px`, rounded `{rounded.sm}`.
- Renders an inline command (`Build  Claude Opus 4.5  OpenCode Zen`) with a leading vertical pipe and the model name styled as a bracketed token.

**`list-row`** — feature/benefit row with ASCII bracket bullet
- Background `{colors.canvas}`, text `{colors.body}` in `{typography.body-md}`, padding `8px 0`.
- Each row begins with a `[+]` / `[-]` / `[x]` ASCII marker followed by a bold label and a regular description: e.g., `[+] LSP enabled    Automatically loads the right LSPs for the IDE`. The bracket marker is part of the text content, not a separate icon.

**`faq-row`** — FAQ entry with bracket toggle
- Background `{colors.canvas}`, text `{colors.ink}` in `{typography.body-md}`, padding `12px 0`, with a 1px `{colors.hairline}` bottom rule.
- Each row leads with `+` / `−` ASCII markers indicating expand/collapse state. Always rendered as plain text rows — no chevron icons, no animated accordion chrome.

**`testimonial-row`** — `/zen` peer-quote row
- Background `{colors.surface-soft}`, text `{colors.body}` in `{typography.body-md}`, padding `16px 20px`, rounded `{rounded.sm}`.
- Layout: a 32px avatar circle (`{rounded.full}`) at left, name + role + company in `{typography.body-strong}` on the first line, quote in `{typography.body-md}` `{colors.body}` on the second line.

**`chart-tile`** — the stat-block sparse-line chart
- Background `{colors.canvas}`, text `{colors.body}` in `{typography.caption-md}`, rounded `{rounded.none}`, padding `16px`.
- Contains an inline SVG/CSS-drawn ASCII-style sparse-line plot (dotted, abstract — never specific data points) with a `Fig N. <stat label>` caption beneath in `{colors.mute}`.

### Navigation

**`primary-nav`**
- Sticky at the top of the page frame. Background `{colors.canvas}`, height 80px, rounded `{rounded.none}`, with a 1px `{colors.hairline}` bottom rule and the same 24px → 80px horizontal gutter as the section bands.
- Links are 16px solid brand icons (GitHub, LinkedIn, Facebook, Instagram, X) in `{colors.mute}`, turning `{colors.ink}` on hover or press, 16px apart, each a 44px-tall tap target labelled with the network name. The CTA sits 32px after the icon cluster.
- Layout (desktop): block-pixel ASCII wordmark at left, social icon cluster at right, `{component.button-primary}` "Contact" CTA at the far right.

**Top Nav (Mobile)**
- ASCII wordmark stays at left; the social icons are hidden below `md` (the footer still lists them). The Contact CTA remains visible at every breakpoint.

### Footer

**`announcement-strip`** — optional one-line strip directly under the nav
- Full frame width, background `{colors.surface-soft}`, text `{colors.body}` in `{typography.caption-md}`, padding `10px 24px` (80px gutter from 1024px), centered, 1px `{colors.hairline}` bottom rule. The whole strip is a link ending in `→`; it may deepen to `{colors.surface-card}` on hover. At most one per page.

**`footer-section`**
- The last band inside the page frame. A single row of equal link cells (GitHub · LinkedIn · Facebook · Instagram · X), each a centered `{typography.body-md}` link padded 32px vertical, separated by 1px `{colors.hairline}` vertical rules, with a 1px `{colors.hairline}` top rule. A secondary handle may follow the label in `{colors.mute}` from 640px.
- **`footer-legal`** sits *outside* the frame, 64px below it: `©<year> <owner>` and utility links in `{typography.caption-md}` `{colors.mute}`, centered and wrapping with 32px gaps.

### Inline

**`link-inline`** — body-prose anchor link
- `{colors.ink}` text with underline. Body-prose links stay ink; Google Blue is reserved for primary actions and focus.

## Do's and Don'ts

### Do
- Render every chrome text role in Roboto Mono (`font-sans`). Use `{typography.code-md}` only for code and TUI surfaces.
- Keep `{colors.canvas}` (`#ffffff`) as the only body background. Don't introduce gray section bands.
- Use ASCII bracket markers (`[+]`, `[-]`, `[x]`, `+`, `−`) as bullets, toggles, and section glyphs. They are the brand's only iconography.
- Anchor the dark `{component.hero-tui-mockup}` exactly once per landing page as the hero centerpiece. Never use the dark surface for body content.
- Use `{colors.brand}` (Google Blue) for primary CTAs and focus states; use danger/warning/success only for status.
- Use `{rounded.sm}` (4px) on every interactive element and `{rounded.none}` (0px) on every container.
- Put every section inside the 1080px `{component.page-frame}` as a band: 1px `{colors.hairline}` top rule, padding inside (48/24 → 64/80), and the same gutter as the nav.

### Don't
- Don't introduce a second face, a display face, or an italic style. Roboto Mono carries everything.
- Don't add drop shadows, gradients, or atmospheric backgrounds. The system is flat-on-white.
- Don't replace the ASCII bracket markers with SVG icons. The brackets are the icons.
- Don't use the status colors (`{colors.warning}`, `{colors.danger}`, `{colors.success}`) on marketing CTAs. CTAs are always `{colors.brand}`.
- Don't add margins or gaps between section bands, or nest a bordered box inside a band. The band's hairline is the only divider.
- Don't pad cards with 24px+ internal padding. List rows sit at 8px vertical; FAQ rows at 12px.
- Don't render the OpenCode wordmark as a vector logo. It is always block-pixel ASCII.
- Don't fill the hero TUI mockup with photography or illustration. It is text-only and always shows a faux terminal command line.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| desktop-large | 1280px+ | Default — 1080px outlined page frame, 80px band gutter |
| desktop | 1024px | Frame gets side rules; band padding 64px / 80px; split bands go `1fr 480px` |
| tablet-narrow | 768px | Primary nav becomes hamburger drawer (CTA stays visible); tables and stat band stack; list-row labels stack |
| mobile | 640px | Single-column everything; hero display drops 38px → ~28px; section padding tightens |

### Touch Targets
All interactive elements meet WCAG AA at the ~36–40px height range. `{component.button-primary}` sits at ~36px with 20px horizontal padding. `{component.text-input}` and `{component.textarea}` sit at ~40px. `{component.button-tab}` rows in the install-method strip sit at ~32–36px depending on label length but extend to a full 44px tappable cell via inline padding. Footer link cells are full-height blocks (32px vertical padding), and nav links reach 44px tall inside the 80px bar.

### Collapsing Strategy
- **Primary nav:** desktop horizontal cluster → tablet-narrow hamburger drawer at 768px. The dark "Download" CTA stays visible at all widths.
- **Hero TUI mockup:** maintains its full-bleed dark surface at every breakpoint; the ASCII wordmark scales proportionally and the keybinding-hint row may wrap to two lines on narrow screens.
- **Install snippet + tab strip:** desktop fixed-width pill → mobile full-width pill with horizontal scroll on the tab strip if labels overflow.
- **Footer:** one row of equal cells with vertical rules → stacked full-width rows with horizontal rules on the narrowest screens.
- **Data tables:** table layout from 768px → stacked row blocks below 768px.
- **Stat band:** 3 columns with vertical rules from 768px → stacked cells with horizontal rules below.
- **Split bands:** `1fr 480px` from 1024px → single column with the action column below the text.
- **Band padding:** 64px × 80px from 1024px → 48px × 24px below (hero 96px → 64px vertical). The page frame loses its side rules below 1024px.
- **Hero headline:** `{typography.display-xl}` (38px) at desktop, scaling to ~28px at mobile, line-height holding at 1.5.

### Image Behavior
There are no raster images in the system aside from the favicon and OG share image. Every visual element — wordmarks, charts, icons — is rendered as type or inline SVG and scales without aspect-ratio considerations.

## Iteration Guide

1. Focus on ONE component at a time. Pull its YAML entry and verify every property resolves.
2. Reference component names and tokens directly (`{colors.ink}`, `{component.hero-tui-mockup}`, `{rounded.sm}`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues automatically.
4. Add new variants as separate component entries (`-active`, `-disabled`) — do not bury them inside prose.
5. Default body to `{typography.body-md}`; reach for `{typography.body-strong}` for emphasis; reserve `{typography.display-xl}` strictly for the page-top hero headline.
6. Keep `{colors.surface-dark}` scarce — at most one full-bleed dark mockup per page. The dark surface is a narrative device, not a chrome treatment.
7. When introducing a new component, ask whether it can be expressed with the existing ASCII-bracket + 4px-radius + Roboto Mono vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.

## Known Gaps

- **Mobile screenshots not captured** — responsive behavior synthesizes OpenCode's mobile pattern (hamburger drawer, single-column, footer accordion) from desktop evidence and the breakpoint stack.
- **Hover states not documented** by system policy.
- **In-product TUI screenshots** beyond the marketing hero mockup are not in the captured set; the actual `opencode` terminal interface (full keybindings, panels, status bar) is not documented here.
- **`/go` page** not extracted — the marketing page for the Go SDK likely shares the same chrome but introduces code-sample blocks not documented above.
- **Form validation state styling** (success / error inline messages) not present in the captured surfaces.
