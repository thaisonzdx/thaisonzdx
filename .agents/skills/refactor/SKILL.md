---
name: refactor
description: 'Refactors an existing portfolio section or feature so it follows DESIGN.md and uses shadcn/ui components and the shared section primitives, without changing its content or behavior. Use when the user asks to refactor, clean up, restyle, redesign to spec, fix design drift, migrate to shadcn, split, or audit an existing section, component or page in this repo.'
---

# Refactor a Section

Bring an existing section in line with DESIGN.md and the repo conventions. Content, anchors and behavior stay the same unless the user asks otherwise.

Load these first:

- `design` skill: maps, hard rules, audit script, foundation.
- `shadcn` skill: composition rules and CLI.
- `develop` skill: target conventions (file layout, content files, `Section` primitives).

## Workflow

### 1. Scope

Find the code and everything that touches it:

```bash
grep -rn "<SectionName>\|id=\"<anchor>\"\|#<anchor>" app components lib
```

Agree on scope if it's unclear. One section per pass. If the request is "refactor everything", list the sections and do them one at a time, verifying each.

### 2. Record the baseline

Before editing, write down what must survive:

- Visible content (every string, link target, list order)
- `id` anchors and anything linking to them
- Interactions (toggles, tabs, forms, copy) and their keyboard behavior
- Heading levels and landmark structure
- Screenshots at 375 / 768 / 1280px if a browser is available

### 3. Audit

```bash
bash .agents/skills/design/scripts/audit.sh <section files>
```

Then check by hand what the script can't see, against the `design` hard rules:

- [ ] Custom markup that a shadcn component already covers (styled `div` buttons, hand-rolled accordions/tabs/dialogs, custom inputs)
- [ ] `className` overriding a shadcn component's color, radius or type → move into the primitive's `cva` or delete
- [ ] Gray or tinted section bands, boxed cards, padding above 16px inside blocks
- [ ] Icons used as bullets or toggles → ASCII markers
- [ ] Copy hard-coded in JSX that belongs in `lib/content/`
- [ ] `"use client"` on a whole section when only a small part is interactive
- [ ] Section not built on `<Section>` / `SectionLabel` / `ListRow`, or adds its own outer margins, max width, gutter or gaps between bands (the page frame and `<Section>` own those)
- [ ] Wrong heading levels, `div` soup instead of `ul/li`, `figure`, `nav`
- [ ] Hover-only feedback, missing focus ring, targets under 36px

Turn the findings into a short plan and show it to the user before large rewrites.

### 4. Foundation check

Run Step 0 of `design`. If the tokens or primitives are missing, apply [foundation.md](../design/references/foundation.md) first as its own step, since it changes every section.

### 5. Refactor in this order

Each step should leave the page working. Run `pnpm lint` between steps when they are large.

1. **Structure**: move the file to `components/sections/<kebab-name>.tsx`, export `<Pascal>Section`, and wrap it in `<Section id=... label=...>`. Keep the existing `id`.
2. **Content**: extract copy and data to `lib/content/<kebab-name>.ts` with a type. Strings stay byte-identical.
3. **Components**: replace custom markup with shadcn components (`pnpm dlx shadcn@latest add ...` + "Restyle on install"). Rows become `ListRow`, disclosures become `Accordion`, option sets become `Tabs`/`ToggleGroup`, forms become `FieldGroup`/`Field`.
4. **Styling**: swap every raw value for the token classes, `type-*` utilities and radius rules. Delete overrides instead of translating them. If a shadcn component looks wrong in every section, fix its `cva` once.
5. **Client boundary**: push `"use client"` down into a `<name>-<part>.tsx` island that receives plain serializable props.
6. **Cleanup**: remove dead code, unused imports, orphaned assets and unused dependencies the section owned.

Don't change copy, reorder content, add features or rename anchors as part of a refactor. Propose them separately.

### 6. Verify against the baseline

```bash
bash .agents/skills/design/scripts/audit.sh <section files> components/section.tsx
pnpm lint
pnpm build
```

- [ ] Audit has no violations. Every remaining warning is intentional and explained.
- [ ] Every baseline string, link and anchor is still present (`grep` the old strings in the new content file).
- [ ] Interactions and keyboard behavior match the baseline.
- [ ] Screenshots at 375 / 768 / 1280px differ only in ways DESIGN.md explains.
- [ ] Nothing else on the page shifted (section rhythm, nav anchors).

### 7. Report

List what changed by category (structure, content extraction, components, styling, client boundary), the audit before → after counts, primitives restyled in `components/ui`, and anything intentionally left (with the reason). Offer the `commit` skill. A refactor commit uses `refactor(<section>): ...`.
