---
name: develop
description: 'Builds a new portfolio section or feature (hero, nav, about, experience, projects, skills, stats, writing, testimonials, FAQ, contact, footer, or a new page) in this Next.js repo with shadcn/ui components, styled strictly to DESIGN.md. Use when the user asks to add, create, build, design or implement a section, block, page or UI feature for the portfolio.'
---

# Develop a Section

Turn a request like "add a projects section" into a server-rendered section that uses shadcn components, the shared section primitives and only DESIGN.md tokens.

Load these first. Don't repeat their content here:

- `design` skill: token → class map, recipe → component map, ASCII vocabulary, hard rules, audit script.
- `shadcn` skill: CLI, composition rules, base-ui `render` prop.
- `DESIGN.md`: read the frontmatter `components:` entry for every recipe you use, plus **Do's and Don'ts**.

## Conventions

| Piece | Location | Rule |
| --- | --- | --- |
| Section | `components/sections/<kebab-name>.tsx` | Exports `<Pascal>Section`. Server component, no props. |
| Interactive island | `components/sections/<kebab-name>-<part>.tsx` | `"use client"` only here, as small as possible. |
| Content | `lib/content/<kebab-name>.ts` | Typed `const` data. Copy lives here, not in JSX. |
| Primitives | `components/section.tsx` | `Section`, `SectionLabel`, `ListRows`, `ListRow`, `StatBand`, `TuiMockup` |
| shadcn UI | `components/ui/*` | Installed by CLI, restyled once in `cva` |
| Composition | `app/page.tsx` (bands), `app/layout.tsx` (page frame, nav, footer, legal) | Order = reading order |

- Section root is `<Section id="<kebab-name>" label="...">`, one band of the 1080px page frame. `<Section>` owns the hairline top rule, the `px-6 lg:px-20` gutter and the `py-12 lg:py-16` padding, so a section never adds its own background, max width, outer margin, gutter or border box. Full-bleed content (`StatBand`, `TuiMockup`) sits between sections, not inside one. For a two-column band use the split-band recipe from `design`.
- Next 16 has breaking changes. Before using any Next API (metadata, `Link`, `Image`, route files, `"use cache"`), read the matching page under `node_modules/next/dist/docs/01-app/`.

## Workflow

### 1. Frame the section

Write down, before coding:

- **Purpose and content**: what the visitor learns or does. Ask the user for real content if it isn't in the repo. Don't ship lorem ipsum unless they say placeholders are fine, and mark placeholders with `TODO(content)`.
- **Recipes**: which DESIGN.md components it maps to. Use the catalog below.
- **Interactivity**: none, disclosure, tabs, form, copy. Anything beyond that, ask first.
- **Position**: where it sits in `app/page.tsx`, and whether the nav needs a link.

If a request needs something DESIGN.md forbids (photo grid, gradient banner, card shadows, a second dark band), tell the user and propose the in-system alternative instead of building it.

### 2. Foundation check

Run Step 0 of `design`. Apply [foundation.md](../design/references/foundation.md) if the tokens, Comfortaa, restyled Button or `components/section.tsx` are missing.

### 3. Get the components

```bash
pnpm dlx shadcn@latest search <query>      # check before writing custom UI
pnpm dlx shadcn@latest docs <component>    # API + examples for base-ui
pnpm dlx shadcn@latest add <component> --dry-run
pnpm dlx shadcn@latest add <component>
```

After every `add`, apply "Restyle on install" from foundation.md to the new files, then re-run the radius grep. Restyle the primitive, not the call site.

### 4. Write content, then the section

Content file:

```ts
// lib/content/projects.ts
export type Project = {
  name: string
  summary: string
  href: string
  stack: string[]
  status: "shipped" | "wip"
}

export const projects: Project[] = [
  // ...
]
```

Section file:

```tsx
// components/sections/projects.tsx
import { ListRow, ListRows, Section } from "@/components/section"
import { projects } from "@/lib/content/projects"

export function ProjectsSection() {
  return (
    <Section id="projects" label="Projects">
      <ListRows>
        {projects.map((project) => (
          <ListRow
            key={project.name}
            marker={project.status === "shipped" ? "[x]" : "[-]"}
            label={
              <a href={project.href} className="type-link-md text-foreground">
                {project.name}
              </a>
            }
          >
            {project.summary}
            <span className="type-caption-md text-muted-foreground">
              {" "}
              {project.stack.join(" · ")}
            </span>
          </ListRow>
        ))}
      </ListRows>
    </Section>
  )
}
```

Then add `<ProjectsSection />` to `app/page.tsx` and, if it should be reachable, a `#projects` link in the nav content.

Rules while writing:

- `className` on shadcn components is for layout (`w-full`, `self-start`, grid placement), never color, radius or type.
- Layout with `flex`/`grid` + `gap-*`. Use `size-*` for squares and `truncate` for ellipsis.
- Semantic HTML: one `h1` per page (hero), `h2` via `SectionLabel`, `h3` for row titles, `ul/li` for rows, `figure/figcaption` for charts, `<a>` for navigation and `<Button>` for actions. Use `<Button render={<a href=... />}>` for a link styled as a CTA.
- External links get `target="_blank" rel="noreferrer"`.
- Every interactive element is keyboard reachable, has a visible focus ring and a 36px+ target.

### 5. Verify

```bash
bash .agents/skills/design/scripts/audit.sh components/sections/<name>.tsx components/section.tsx app
pnpm lint
pnpm build
```

Then look at it. Start `pnpm dev` and check the page at 375, 768 and 1280px wide (browser tools if available, otherwise ask the user):

- [ ] Comfortaa everywhere except code, markers and the TUI
- [ ] Each section is a band: hairline above it, bold 16px label, no gap between bands
- [ ] Band gutter lines up with the nav wordmark (24px → 80px) and padding matches the others (48 → 64px)
- [ ] At 1024px+ the 1080px frame shows its side rules
- [ ] Only `bg-primary` on CTAs. No shadows, gradients, gray bands
- [ ] Bracket markers line up, rows are tight (8px / 12px)
- [ ] Nothing overflows at 375px. Tab strips scroll horizontally if needed
- [ ] Keyboard: Tab through it, focus is visible, disclosures toggle with Enter/Space

### 6. Report

Tell the user: files created or changed, shadcn components added or restyled, which DESIGN.md recipes you used, any foundation work done, placeholders left (`TODO(content)`), and any deviation from DESIGN.md with the reason. Offer the `commit` skill if they want it committed.

## Section catalog

Starting points for common portfolio sections. Adapt, but stay inside the vocabulary.

| Section | DESIGN.md recipes | Build |
| --- | --- | --- |
| Nav (`header.tsx` + `menu.tsx`, in layout) | `primary-nav`, ASCII wordmark, `button-primary` | Sticky `header.border-b` inside the frame, `nav.h-20.px-6.lg:px-20.justify-between` → wordmark `<pre>` left; right cluster: plain mute text links (`gap-4`), then one primary CTA (`gap-8`). Below `md`: `Sheet` drawer with the same links. CTA stays visible. |
| Announcement | `announcement-strip` | Optional, directly under the nav: one `bg-muted` caption link ending in `→`. At most one. |
| Hero | `hero-band`, `display-xl`, `badge-news`, `button-primary` + `button-secondary`, `hero-tui-mockup`, `tui-prompt-row` | `<Section variant="hero">`: badge, `h1.type-display-xl`, one-line intro, two CTAs. Then a full-bleed `TuiMockup` band with ASCII wordmark, a prompt row (`$ whoami` → role, location, stack) and a key-hint row in `text-ash`. The page's only dark surface. |
| About | `badge-section-label`, `body-md`, `list-row` | Short prose in `text-body` (`max-w-prose`), then `[+]` rows for focus areas. |
| Experience | `data-table` | Period / Role / Company table that stacks below `md`. Small lists can use `[x]`/`[+]` rows instead. |
| Projects | `list-row`, `button-tab`, `link-inline` | Rows like the example above. Category filter with `Tabs` only if there are 8+ projects. |
| Skills / stack | `list-row`, `install-snippet` | Grouped `[+]` rows, or a `Tabs` strip (`Frontend / Mobile / Backend`) over row lists. A fun extra: an install snippet like `pnpm add thaisonzdx`. |
| Stats | `stat-band`, `chart-tile` | Full-bleed `<StatBand>` with three facts that can be checked against the content (value above label). For charts, `chart-tile` figures inside a section band. |
| Writing / talks | `list-row`, `caption-md` | Rows with title link + date caption. |
| Testimonials | `testimonial-row` | `flex flex-col gap-2` of rows: `Avatar` (initials fallback), name/role in `type-body-strong`, quote in `text-body`. |
| FAQ | `faq-row` | `Accordion` restyled with `+`/`−` markers. |
| Contact | split band, `list-row`, `text-input`, `textarea`, `button-primary`, `install-snippet` | Split band: label, intro and detail rows left; right 480px column with a `FieldGroup` form or a read-only `InputGroup` email + copy button and a mailto CTA. Validation with `data-invalid`/`aria-invalid`. |
| Footer (`footer.tsx`, in layout) | `footer-section`, `footer-legal` | Last band in the frame: one row of equal social link cells (`py-8`) split by vertical hairlines, stacked below `sm`. `Legal` outside the frame: `©<year> thaisonzdx` + utility links, centered caption. |
