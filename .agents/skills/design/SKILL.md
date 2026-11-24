---
name: design
description: 'Translates this portfolio''s DESIGN.md (terminal-inspired, Roboto Mono, Google palette, ASCII bracket markers, 4px/0px radius, flat-on-white) into concrete Tailwind classes, shadcn components and code conventions. Use when styling anything in this repo, checking UI against DESIGN.md, setting up or fixing the theme tokens in app/globals.css, restyling a shadcn primitive, or auditing a file for design violations. Loaded by develop and refactor.'
---

# Portfolio Design

`DESIGN.md` at the repo root is the source of truth. This skill is the translation layer from its tokens and recipes into code. When the two disagree, DESIGN.md wins. Fix this skill afterward.

Pair with the `shadcn` skill (`.agents/skills/shadcn`) for CLI usage and component rules. Its [design-system.md](../shadcn/design-system.md) explains the general mechanics. This skill gives the exact answers for this repo.

## Project facts

| Thing | Value |
| --- | --- |
| Framework | Next.js 16 App Router, React 19, RSC on. Read `node_modules/next/dist/docs/` before using any Next API. |
| Package runner | `pnpm` → `pnpm dlx shadcn@latest <cmd>` |
| shadcn style | `base-sera` on `@base-ui/react`. Use the `render` prop, never `asChild`. |
| Theme file | `app/globals.css` (Tailwind v4, `@theme inline`, no tailwind.config) |
| Fonts | `app/layout.tsx` via `next/font/google` (Roboto Mono → `--font-sans` and `--font-mono`) |
| `cn` | `@/lib/utils` |
| UI primitives | `components/ui/*` (shadcn-owned source, restyle via `cva`) |
| Sections | Local `<Pascal>Section` functions in `app/page.tsx`; nav, footer and legal in `app/layout.tsx` |
| Section primitives | `components/ui/section.tsx` |
| Section content | `lib/portfolio.ts` |

## Step 0: Foundation check (run before any UI work)

The theme must carry DESIGN.md tokens before sections can use them. Check:

```bash
grep -c "#1a73e8" app/globals.css          # 0 → tokens not mapped
grep -n "Roboto_Mono" app/layout.tsx       # must be the font bound to --font-sans
grep -n "rounded-none" components/ui/*.tsx  # base-sera default; interactive elements need rounded-sm
test -f components/ui/section.tsx            # section primitives exist
```

If any check fails, apply [references/foundation.md](references/foundation.md) once, then continue. Tell the user you did it, because it changes every component.

## Token → class map

Use only these. Never write raw hex, `bg-blue-500`, `text-zinc-*` or arbitrary `[#...]` values in sections.

| DESIGN.md token | Class | Use |
| --- | --- | --- |
| `colors.canvas` | `bg-background` | The only page background |
| `colors.ink` | `text-foreground` | Headlines, nav links, emphasis |
| `colors.body` | `text-body` | Paragraphs, list rows, FAQ answers |
| `colors.charcoal` | `text-charcoal` | Softer emphasis |
| `colors.mute` | `text-muted-foreground` | Metadata, captions, footer links, inactive tabs |
| `colors.stone` | `text-stone` | Breadcrumb separators, least emphasis |
| `colors.ash` | `text-ash` | Disabled text, TUI hints |
| `colors.primary` | `bg-primary text-primary-foreground` | Primary CTA only |
| `colors.brand-hover` / `-active` | `hover:bg-primary-hover` / `active:bg-primary-active` | CTA states |
| `colors.surface-soft` | `bg-muted` | Inputs, testimonial rows |
| `colors.surface-card` | `bg-surface-card` | Install snippet, disabled fill |
| `colors.surface-dark` | `dark` class on the container + `bg-background` | Hero TUI mockup only |
| `colors.surface-dark-elevated` | `bg-card` inside `.dark` | TUI prompt row |
| `colors.hairline` | `border-border` | Section rules, row dividers |
| `colors.hairline-strong` | `border-hairline-strong` | Tab strip rule, outline button |
| `colors.danger/warning/success` | `text-destructive`, `text-warning`, `text-success` | Status only, never CTAs |

| Typography token | Class |
| --- | --- |
| `display-xl` | `type-display-xl` (38px, clamped to 28px on mobile). Once per page, hero only. Stat-band figures use the same size via `type-display-stat`. |
| `heading-md` | `type-heading-md` |
| `body-md` | `type-body-md` (default, set on `body`) |
| `body-strong` | `type-body-strong` |
| `body-tight` | `type-body-tight` |
| `link-md` | `type-link-md` (ink + underline) |
| `button-md` | `type-button-md` (baked into `Button`) |
| `caption-md` | `type-caption-md` |
| `code-md` | `type-code-md` (monospace, code and TUI only) |

Use `type-*` utilities, not `text-[16px]` or `text-base font-bold`. `cn()` would treat custom `text-*` sizes as colors and drop one of them.

| Spacing token | Class |
| --- | --- |
| `xs` 4 / `sm` 8 / `md` 12 / `lg` 16 / `xl` 24 / `xxl` 32 | `1` / `2` / `3` / `4` / `6` / `8` (for example `gap-2`, `py-3`) |
| `frame` 1080 | `max-w-frame` (theme `--container-frame`), `lg:border lg:border-t-0` side rules |
| `gutter` 24 → 80 | `px-6 lg:px-20` on the nav, every section band and the announcement strip |
| `section-y` 48 → 64 (hero 64 → 96) | Built into `<Section>`: `py-12 lg:py-16`, `variant="hero"` → `py-16 lg:py-24`. Bands touch; never add gaps or margins between them. |

| Radius | Class |
| --- | --- |
| Interactive (buttons, inputs, badges, snippets, prompt rows, testimonial rows) | `rounded-sm` (4px) |
| Containers (sections, nav, footer, list rows, TUI mockup, cards, dialogs) | `rounded-none` |
| Avatars only | `rounded-full` |

## Recipe → component map

Build from shadcn components first. Add missing ones with `pnpm dlx shadcn@latest add <name>`, then restyle the installed source once (see "Restyle on install" in foundation.md). Don't restyle at the call site.

| DESIGN.md recipe | Build with |
| --- | --- |
| `button-primary` | `<Button>` (default) |
| `button-secondary` | `<Button variant="outline">` |
| `button-tab` / `-active` | `Tabs` + `TabsList` + `TabsTrigger`, restyled: mute → ink text, 2px `ash` underline when active, `hairline-strong` bottom rule on the list. Use the `line` list variant if the installed `tabs.tsx` has one. |
| `button-disabled` | `<Button disabled>` |
| `badge-news` | `<Badge>` restyled to `surface-dark` / `on-dark`, `type-caption-md`, `rounded-sm px-2 py-0.5` |
| `badge-section-label` | `<SectionLabel>` from `components/ui/section.tsx` |
| `text-input` / `textarea` | `Field` + `Input` / `Textarea` inside `FieldGroup` |
| `install-snippet` | `InputGroup` with `InputGroupInput readOnly` + copy `InputGroupButton`, or `<pre className="bg-surface-card rounded-sm type-code-md px-4 py-3">` |
| `hero-tui-mockup` | `<TuiMockup>` from `components/ui/section.tsx` |
| `tui-prompt-row` | `div.bg-card.rounded-sm.px-3.py-2` inside the mockup |
| `page-frame` | `app/layout.tsx`: `div.mx-auto.max-w-frame.border-border.lg:border.lg:border-t-0` wrapping nav, page and footer |
| `section-band` / `hero-band` | `<Section id label>` / `<Section variant="hero">` from `components/ui/section.tsx` |
| `stat-band` | `<StatBand stats={...}>` from `components/ui/section.tsx` (full-bleed, hairline-divided `dl`) |
| `announcement-strip` | `AnnouncementStrip` in `app/page.tsx`: one `a.border-b.bg-muted.px-6.py-2.5.type-caption-md.lg:px-20` ending in `→` |
| `data-table` | `table` with `thead tr.border-b.border-hairline-strong`, `tbody.divide-y.divide-border`, cells `py-4 pr-6`; below `md` every element gets `max-md:block` and `thead` is `max-md:hidden` (see `ExperienceSection` in `app/page.tsx`) |
| split band | `<Section className="gap-12 lg:grid lg:grid-cols-[1fr_480px]" aria-labelledby=...>` with the `SectionLabel` inside the left column |
| `list-row` | `<ListRow marker="[+]" label=...>` from `components/ui/section.tsx`. Label and description stack below `md`, sit inline from `md`. |
| `faq-row` | `Accordion`, chevron replaced by `+`/`−` text driven by `data-panel-open` on the trigger |
| `testimonial-row` | `div.bg-muted.rounded-sm.px-5.py-4` + `Avatar` (always with `AvatarFallback`) |
| `chart-tile` | `figure` + inline SVG + `figcaption.type-caption-md.text-muted-foreground` (`Fig N. ...`) |
| `primary-nav` | sticky `header.border-b` inside the frame, `nav.h-20.px-6.lg:px-20`. Social icon links from `components/ui/social.tsx` (`a.h-11.text-muted-foreground.hover:text-foreground` with `aria-label`, icon `aria-hidden`, `gap-4`), `hidden md:flex`. CTA `gap-8` after them, visible at every width. No drawer. |
| `footer-section` / `footer-legal` | Inside the frame: `footer.flex.flex-col.border-t.sm:flex-row` of `flex-1` link cells (`py-8`, `sm:border-l sm:first:border-l-0`). Outside the frame: `Legal`, `mt-16` centered `type-caption-md text-muted-foreground` |
| `link-inline` | `<a className="type-link-md">` or `next/link` with the same class |
| callouts | `Alert` |
| empty states | `Empty` |

## ASCII vocabulary

The brackets are the icons. They are text content, not decoration.

| Marker | Meaning |
| --- | --- |
| `[+]` | Feature, skill, positive item |
| `[-]` | Neutral or secondary item, trade-off |
| `[x]` | Done, shipped, completed |
| `+` / `−` | Collapsed / expanded (FAQ, disclosure). Use U+2212 for minus. |
| `→` | Trailing CTA arrow ("Read more →") |
| `Fig N.` | Chart and figure caption prefix |

- Render markers in `font-mono` so the brackets line up. Mark them `aria-hidden` when the label already carries the meaning.
- The wordmark (`thaisonzdx`) is block-pixel ASCII in a `<pre aria-label="thaisonzdx">`, never an SVG or image.
- `lucide-react` is allowed only for functional affordances text can't carry well (copy, external link, menu) at `size-4` with `data-icon`. Never as bullets, section glyphs or toggles.

## Hard rules

Each one is a review blocker. [scripts/audit.sh](scripts/audit.sh) catches the mechanical ones.

1. Roboto Mono (`font-sans`, also bound to `font-mono`) for all text. `type-code-md` only for code and the TUI. No serif, no italic, no second display face.
2. White canvas only. No gray or colored section bands. The one-line `announcement-strip` (`bg-muted`) is the only tinted strip.
3. No shadows, gradients, blur, glow or background images.
4. At most one dark surface per page: the hero TUI mockup. Never for body content.
5. `bg-primary` (Google Blue) is the only CTA color. Status colors only mean status.
6. `rounded-sm` on interactive elements, `rounded-none` on containers, `rounded-full` only on avatars.
7. Every section is a band inside the 1080px page frame, built on `<Section>`: hairline top rule, padding inside, `px-6 lg:px-20` gutter. No gaps, margins or extra dividers between bands; full-bleed bands (`StatBand`, `TuiMockup`) are the only ones without the gutter.
8. Row padding stays tight: list rows `py-2`, FAQ rows `py-3`, table rows `py-4`, testimonials `px-5 py-4`. No 24px+ card padding. Band padding, stat cells (`p-5 md:p-8`) and footer cells (`py-8`) are the exceptions.
9. No raster imagery other than favicon and OG image. Visuals are type, ASCII or inline SVG.
10. Semantic tokens only. No `dark:` overrides, no raw colors, no `space-x/y-*`, `size-*` for squares.
11. `type-display-xl` once per page.
12. Pressed state uses `active:`. Hover is optional polish, never the only signal.

Run the audit on every file or folder you touched:

```bash
bash .agents/skills/design/scripts/audit.sh app components/ui
```

It prints `file:line: [rule] code` and exits non-zero on violations. Fix them, or justify each remaining one to the user.

## Responsive

| Width | Tailwind | Change |
| --- | --- | --- |
| < 640 | base | Frame edge-to-edge, bands `px-6 py-12` (hero `py-16`), hero 28px, footer cells stacked |
| 640 | `sm:` | Footer cells in one row with vertical rules |
| 768 | `md:` | Nav links inline (drawer below), tables and stat band un-stack, list-row labels inline |
| 1024 | `lg:` | Frame side rules, bands `px-20 py-16` (hero `py-24`), split bands `1fr 480px`, footer shows handles |

Page frame: `max-w-frame` (1080px) in `app/layout.tsx`. Content never sets its own max width or outer padding; `<Section>` owns the gutter. Buttons are at least `h-9`; tappable rows reach 44px.
