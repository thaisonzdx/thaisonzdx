# Foundation Setup

One-time setup that makes the shadcn theme speak DESIGN.md. Apply it when the Step 0 checks in [SKILL.md](../SKILL.md) fail, and re-run the relevant part after `shadcn add` or `shadcn apply` rewrites files.

Edit in place. Don't add a second `:root` or `@theme inline` block. Keep hex values as DESIGN.md gives them.

## 1. Theme tokens (`app/globals.css`)

Replace the `:root` and `.dark` blocks:

```css
:root {
  --background: #ffffff; /* canvas */
  --foreground: #202124; /* ink */
  --card: #ffffff;
  --card-foreground: #202124;
  --popover: #ffffff;
  --popover-foreground: #202124;
  --primary: #1a73e8; /* brand */
  --primary-foreground: #ffffff;
  --primary-hover: #1967d2;
  --primary-active: #185abc;
  --secondary: #f1f3f4; /* surface-card */
  --secondary-foreground: #202124;
  --muted: #f8f9fa; /* surface-soft */
  --muted-foreground: #5f6368; /* mute */
  --accent: #f1f3f4;
  --accent-foreground: #202124;
  --destructive: #d93025; /* danger */
  --border: #dadce0; /* hairline */
  --input: #dadce0;
  --ring: #1a73e8;
  --chart-1: #4285f4;
  --chart-2: #ea4335;
  --chart-3: #fbbc04;
  --chart-4: #34a853;
  --chart-5: #5f6368;
  --radius: 4px;
  --sidebar: #ffffff;
  --sidebar-foreground: #202124;
  --sidebar-primary: #1a73e8;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f1f3f4;
  --sidebar-accent-foreground: #202124;
  --sidebar-border: #dadce0;
  --sidebar-ring: #1a73e8;

  /* DESIGN.md tokens without a shadcn slot. */
  --ink-deep: #000000;
  --charcoal: #303134;
  --body: #3c4043;
  --stone: #80868b;
  --ash: #9aa0a6;
  --surface-card: #f1f3f4;
  --hairline-strong: #5f6368;
  --on-dark: #e8eaed;
  --warning: #f9ab00;
  --success: #188038;
}

/* surface-dark. Used only by <TuiMockup> (hero). Google dark-theme tonal pastels. */
.dark {
  --background: #202124;
  --foreground: #e8eaed;
  --card: #303134; /* surface-dark-elevated: tui-prompt-row */
  --card-foreground: #e8eaed;
  --popover: #303134;
  --popover-foreground: #e8eaed;
  --primary: #8ab4f8;
  --primary-foreground: #202124;
  --primary-hover: #aecbfa;
  --primary-active: #669df6;
  --secondary: #303134;
  --secondary-foreground: #e8eaed;
  --muted: #303134;
  --muted-foreground: #9aa0a6;
  --accent: #303134;
  --accent-foreground: #e8eaed;
  --destructive: #f28b82;
  --border: #5f6368;
  --input: #5f6368;
  --ring: #8ab4f8;
  --body: #e8eaed;
  --charcoal: #e8eaed;
  --stone: #9aa0a6;
  --ash: #9aa0a6;
  --surface-card: #303134;
  --hairline-strong: #9aa0a6;
  --warning: #fdd663;
  --success: #81c995;
}
```

In `@theme inline`, replace the font and `--radius-*` lines and register the extra colors:

```css
@theme inline {
  /* ...keep the existing --color-* lines... */
  --color-primary-hover: var(--primary-hover);
  --color-primary-active: var(--primary-active);
  --color-ink-deep: var(--ink-deep);
  --color-charcoal: var(--charcoal);
  --color-body: var(--body);
  --color-stone: var(--stone);
  --color-ash: var(--ash);
  --color-surface-card: var(--surface-card);
  --color-hairline-strong: var(--hairline-strong);
  --color-on-dark: var(--on-dark);
  --color-warning: var(--warning);
  --color-success: var(--success);

  --font-sans: var(--font-comfortaa), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --font-heading: var(--font-sans);

  /* Two-value radius system: 4px interactive, 0px containers. */
  --radius-sm: 4px;
  --radius-md: 4px;
  --radius-lg: 4px;
  --radius-xl: 0px;
  --radius-2xl: 0px;
  --radius-3xl: 0px;
  --radius-4xl: 4px;
}
```

Flat system, so zero the shadow scale and register the page frame width (in `@theme`, not `@theme inline`):

```css
@theme {
  --container-frame: 1080px; /* max-w-frame */

  --shadow-2xs: 0 0 #0000;
  --shadow-xs: 0 0 #0000;
  --shadow-sm: 0 0 #0000;
  --shadow-md: 0 0 #0000;
  --shadow-lg: 0 0 #0000;
  --shadow-xl: 0 0 #0000;
  --shadow-2xl: 0 0 #0000;
}
```

Type scale as `type-*` utilities:

```css
@utility type-display-xl {
  font-size: clamp(28px, 2.5vw + 18px, 38px);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0;
}
@utility type-heading-md {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0;
}
@utility type-body-md {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0;
}
@utility type-body-strong {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0;
}
@utility type-body-tight {
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
}
@utility type-link-md {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0;
  text-decoration-line: underline;
  text-underline-offset: 4px;
}
@utility type-button-md {
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 0;
}
@utility type-caption-md {
  font-size: 14px;
  font-weight: 400;
  line-height: 2;
  letter-spacing: 0;
}
@utility type-code-md {
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0;
}
```

Remove the standalone `body { font-family: var(--font-sans); }` rule and make the base layer:

```css
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  html {
    @apply font-sans;
  }
  body {
    @apply bg-background text-body type-body-md;
  }
}
```

## 2. Fonts (`app/layout.tsx`)

Comfortaa is the only sans. Drop `Inter` and `Geist_Mono` (mono resolves to the system stack above).

```tsx
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin", "vietnamese"],
});

// <html lang="en" className={cn("h-full antialiased", comfortaa.variable)}>
```

Update `metadata` with the real title and description while you're there if they are still the create-next-app defaults.

## 3. Restyle on install

`base-sera` ships sharp, uppercase, tracked controls. DESIGN.md wants 4px, sentence case, Comfortaa 16/500. Every time `shadcn add` installs or updates a primitive, fix its `cva` source once. Never patch at the call site.

Find what needs changing:

```bash
grep -nE "rounded-none|uppercase|tracking-|text-xs|font-semibold|shadow|translate-y-px|\bh-(8|10|11)\b|size-(8|10|11)\b" components/ui/*.tsx
```

### Button (`components/ui/button.tsx`)

| Part | Change |
| --- | --- |
| Base | `rounded-none` → `rounded-sm`. Remove `text-xs font-semibold tracking-widest uppercase`, add `type-button-md`. Remove `active:not-aria-[haspopup]:translate-y-px` (nothing moves). `disabled:opacity-50` → `disabled:bg-surface-card disabled:text-ash disabled:border-transparent`. |
| `default` | `bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active` (`button-primary`) |
| `outline` | `border-hairline-strong bg-background text-foreground hover:bg-muted active:bg-accent` (`button-secondary`) |
| `secondary` | `bg-secondary text-secondary-foreground hover:bg-accent` |
| `ghost` | Keep hover wash (nav links). Tell the user hover isn't in DESIGN.md. |
| `link` | `text-foreground underline underline-offset-4` (`link-inline`, ink not blue) |
| sizes | `default` `h-9 px-5`, `sm` `h-8 px-4`, `lg` `h-10 px-6`, `icon` `size-9`, `icon-sm` `size-8`, `icon-lg` `size-10`. Keep the `has-data-[icon=...]` padding tweaks. |

### Field controls (`input`, `textarea`, `input-group`, `select`)

`text-input`: `h-10 rounded-sm bg-muted border-border px-3 py-2 type-body-md`. Focus: `focus-visible:bg-background focus-visible:border-ring focus-visible:ring-0` (blue border, no halo). Textarea uses `p-3`.

### Others

- `badge`: `rounded-sm px-2 py-0.5 type-caption-md`, no uppercase. Default variant = `badge-news` (`bg-foreground text-background`).
- `card`, `dialog`, `sheet`, `popover`, `dropdown-menu`: `rounded-none`, `ring-1 ring-border` or `border`, no shadow.
- `accordion`: delete the chevron icons. Render two `<span aria-hidden className="font-mono">` markers (`+` and `−`) and toggle them with the trigger's `data-panel-open` attribute (reuse the trigger's existing `group/...` name, for example `group-data-[panel-open]/accordion-trigger:hidden`). Rows `py-3 border-b`.
- `tabs`: inactive `text-muted-foreground`, active `text-foreground` with a 2px `ash` bottom border, list has a 1px `hairline-strong` bottom rule, `rounded-none`.
- `avatar`: keep `rounded-full` (the only exception).

After restyling, grep again. The only `rounded-none` left should be on containers.

## 4. Section primitives (`components/ui/section.tsx`)

Create once. Every section uses these, so the band padding, gutter, hairline rules, ASCII rows and the TUI surface stay identical across the page. The current source of truth is `components/ui/section.tsx`; the shape is:

| Export | Renders |
| --- | --- |
| `Section` | `section.flex.flex-col.gap-4.border-t.first:border-t-0.px-6.lg:px-20.scroll-mt-20` + `py-12 lg:py-16` (`variant="hero"`: `py-16 lg:py-24`). With `id` + `label` it renders the `SectionLabel` and wires `aria-labelledby`. |
| `SectionLabel` | `h2.type-heading-md.text-foreground`. No rule under it: the band's top hairline is the divider. |
| `ListRows` / `ListRow` | `ul.flex.flex-col` / `li.flex.gap-3.py-2` with a `font-mono` marker, then label + description stacked (`flex-col`) below `md` and inline (`md:flex-row md:gap-2`, label `md:shrink-0`) from `md`. |
| `StatBand` | Full-bleed `dl.grid.md:grid-cols-3.divide-y.md:divide-x.md:divide-y-0.border-t`, cells `flex-col-reverse p-5 md:p-8`, value `type-display-stat text-foreground`, label `text-body`. |
| `TuiMockup` | Full-bleed `div.dark.bg-background.px-6.py-12.lg:px-20.lg:py-16.type-code-md`. The `dark` class swaps every token inside it. |

Add this utility next to the type scale for stat figures:

```css
@utility type-display-stat {
  font-size: clamp(28px, 2.5vw + 18px, 38px);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0;
}
```

## 5. Page shell

The page is one outlined frame. `app/layout.tsx` owns it:

```tsx
<body className="flex min-h-full flex-col pb-20">
  <div className="mx-auto flex w-full max-w-frame flex-1 flex-col border-border lg:border lg:border-t-0">
    <Header />       {/* sticky header.border-b, nav.h-20.px-6.lg:px-20 */}
    {children}
    <Footer />       {/* row of link cells, border-t */}
  </div>
  <Legal />          {/* outside the frame, mt-16, caption */}
</body>
```

`app/page.tsx` stacks bands with no gap, padding or max width of its own:

```tsx
export default function Home() {
  return (
    <>
      <AnnouncementStrip /> {/* optional */}
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        {/* ... */}
      </main>
    </>
  )
}
```

## 6. Verify

```bash
pnpm lint && pnpm build
bash .agents/skills/design/scripts/audit.sh components app
```

Then open the page and check: white canvas, Comfortaa everywhere except code, blue primary button with 4px corners, hairline section labels, no shadows.
