<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## UI work

`DESIGN.md` is the source of truth for every visual decision. Before building or changing UI, load the project skills in `.agents/skills/`:

- `design`: DESIGN.md → Tailwind/shadcn mapping, one-time theme foundation, hard rules, `scripts/audit.sh`
- `develop`: add a new section or feature
- `refactor`: bring an existing section in line with DESIGN.md without changing its behavior
