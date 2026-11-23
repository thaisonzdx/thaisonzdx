---
name: commit
description: 'Commit, branch and merge for this repo using its git flow (feature branch -> dev -> main, all --no-ff) and Conventional Commits. Use when the user asks to commit, save, ship or merge their work, split changes into commits, write commit messages, start or finish a feature/fix/hotfix branch, tag a release, or push. The user works on main with uncommitted changes and expects the agent to do the branching and return to main.'
---

# Commit

The user edits files while on `main` and does not want to check out branches or write messages. Turn their uncommitted changes into well-named branches and commits, merge them through `dev`, and leave them back on `main` with a clean tree.

## Branch model

```
feat/x ──┐            hotfix/y ──┬──> main
         └──> dev ──> main       └──> dev
```

- `main`: released history. Only merge commits from `dev` or `hotfix/*` land here.
- `dev`: integration. Branch features from here. After each release `dev` is an ancestor of `main` and has the same tree.
- Work branches use `<type>/<kebab-name>`, named after the feature, not the file: `feat/gallery-share`, `fix/seo-functions`, `ci/github-pages`, `chore/agent-skills`, `refactor/devfest-2024`, `perf/hero-images`, `hotfix/workflows`.
- Keep merged branches locally. Delete one only when the user asks.

## Procedure

### 1. Check the state first

```sh
git status --short
git branch --show-current
git rev-parse --verify -q dev || git branch dev origin/dev
git merge-base --is-ancestor dev main && echo ok
```

- If `dev` is not an ancestor of `main`, stop and tell the user. Someone committed to `dev` without releasing.
- Read the diff (`git diff`, `git diff --stat`, untracked files) before planning anything.

### 2. Plan the commits

Group the changes by intent, not by file type. One branch per feature, one or more commits per branch.

By default, break the changes into as many small commits as make sense. Each commit holds one logical change that builds and reads well on its own: a new component, its content data, its wiring into the page, a style tweak, a dependency bump. Split a file across commits by hunk when it mixes unrelated changes. Don't go below one coherent change per commit, and don't leave the tree broken between commits.

When a split is unclear, ask the user with the `ask_user` tool before committing. For example, ask when a hunk could belong to two features, when a change looks unfinished, or when you're unsure whether two changes should be one commit or two. Don't guess.

Show the plan briefly before running it:

```
feat/photo-search
  feat(photos): add selfie face search page
  feat(faces): store embeddings for vector search
chore/deps
  chore(deps): bump next to 16.1
```

- Do not commit secrets or local files: `.env*` (except `.env.sample`), `serviceAccountKey.json`, `*.pem`, `.DS_Store`, editor state. If one is untracked and not ignored, say so and leave it out.
- If you can't tell whether a file belongs in the change, ask.

### 3. Run each branch

Switch from `main` while keeping the working tree. This works because `dev` and `main` have the same tree.

```sh
git switch -c feat/photo-search dev
git add -- path/a path/b
git commit -m "feat(photos): add selfie face search page" \
  --trailer "Co-authored-by: Claude <noreply@anthropic.com>"
# ...more commits on the same branch
```

- To stage only some hunks of a file, write the hunks to a patch and run `git apply --cached patch.diff`. `git add -p` is interactive and will hang.
- If `git switch` refuses because of conflicts, run `git stash push -u -m wip`, switch, then `git stash pop`. Never discard changes to make it work.
- Other pending changes travel with you to the next branch. Commit only what belongs to this branch.

### 4. Merge and return to main

```sh
git switch dev  && git merge --no-ff feat/photo-search -m "Merge branch 'feat/photo-search' into dev: selfie face search"
git switch main && git merge --no-ff dev -m "Merge branch 'dev': selfie face search"
```

Repeat steps 3 and 4 for the next branch, starting again from `dev`. Finish on `main`. Run `git status --short` and confirm that only intentionally skipped files remain.

If the user says the work isn't finished ("WIP", "chưa merge", "để đó"), commit on the branch, skip step 4 and stay on that branch. Tell them which branch they are on.

### Hotfix

For urgent fixes to released code, branch from `main`, then merge into both:

```sh
git switch -c hotfix/x main
# commit
git switch main && git merge --no-ff hotfix/x -m "Merge branch 'hotfix/x': broken deploy workflow"
git switch dev  && git merge --no-ff hotfix/x -m "Merge branch 'hotfix/x' into dev: broken deploy workflow"
git switch main
```

### Release tag

Only when the user asks. Use an annotated tag named `YY.MM.DD` on the `main` merge commit, with the event name as the message:

```sh
git tag -a 26.12.06 -m "DevFest Cloud Hanoi 2026"
```

## Commit messages

[Conventional Commits](https://www.conventionalcommits.org), in English, whatever language the user writes in.

```
<type>(<scope>): <summary>
```

- Types: `feat`, `fix`, `refactor`, `perf`, `style`, `docs`, `build`, `ci`, `chore`, `test`.
- Scope is optional. Use the area, short and lowercase: `gallery`, `photos`, `faces`, `platform`, `auth`, `check-in`, `seo`, `og`, `i18n`, `functions`, `api`, `docker`, `compose`, `pages`, `agents`, `deps`.
- Summary: imperative, lowercase start, no trailing period, 72 characters or fewer. Say what changed for the user or the code, not "update file".
- Add a body only when the reason isn't obvious. Wrap it at 72 characters and explain why, not how.
- A little humor is fine now and then, e.g. `fix(ci): restore build-push-action ref (oops)` or `ci: registry from secrets, final answer`. Keep it to the odd commit and never let it make the summary unclear.
- End every non-merge commit you create with this trailer, after a blank line (use `git commit --trailer` so git places it correctly):

  ```
  Co-authored-by: Claude <noreply@anthropic.com>
  ```

- Merge commits keep git's default wording and add a brief summary of what the branch brings after a colon: `Merge branch '<branch>' into dev: <summary>`, `Merge branch 'dev': <summary>`. The summary is a short lowercase phrase with no trailing period, and the whole subject stays at 72 characters or fewer. When `dev` carries several branches to `main`, summarize them together (e.g. `portfolio sections, firebase hosting`). No body or trailer on merge commits.

Good: `feat(gallery): add download button`, `fix(og): load font from absolute URL`, `perf(hero): serve featured images from Cloud Storage`.
Bad: `update`, `fix bugs`, `update ui`, `test workflow`, `WIP`.

## Safety rules

- Never run `git checkout -- <file>`, `git restore`, `git reset --hard`, `git clean`, or `git stash drop`. The working tree holds the user's unsaved work.
- Never use `--no-verify`. If a hook fails, fix the cause or report it.
- Never amend, rebase or rewrite commits that exist on `origin`. Local unpushed commits may be amended only when the user asks.
- Leave other people's commits and messages alone.
- Never push on your own. When done, show the push command and wait:

```sh
git push origin main dev feat/photo-search
git push origin 26.12.06   # if a tag was created
```

## Report

Finish with a short summary: the branches created, each commit's message, the merges made, the current branch, and any files left uncommitted along with why.
