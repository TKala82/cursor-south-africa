# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Next.js 16 (App Router, Turbopack)** static content site for the Cursor South Africa community. There is no backend, database, or authentication, and no environment variables are required to run it (`NEXT_PUBLIC_SITE_URL` is optional and only affects canonical/social URLs).

- Package manager is **pnpm** (`packageManager: pnpm@10.8.0`). A `package-lock.json` also exists, but use pnpm (the lockfile is `pnpm-lock.yaml` and the README/scripts assume pnpm).
- On install, pnpm ignores build scripts for `esbuild` and `sharp`. This is expected and does **not** break dev or build — do not run the interactive `pnpm approve-builds`.
- Commands (see `package.json`):
  - Dev server: `pnpm run dev` (serves on `http://localhost:3000`).
  - Build: `pnpm run build` (runs TypeScript type-checking as part of the build; there is no separate typecheck script).
  - Lint: `pnpm run lint` (oxlint). Auto-fix: `pnpm run lint:fix`.
  - Format: `pnpm run format` / check with `pnpm run format:check` (oxfmt).
- Note: `pnpm run format:check` currently reports formatting diffs on several pre-existing files. This is the repo's existing state, not an environment problem — do not mass-reformat unrelated files just to make the check pass.
- The build warns that the `middleware` file convention is deprecated (`middleware.ts` adds CSP nonce headers). This is only a warning and does not block dev or build.
- Almost all site content lives in `content/` (events, ambassadors, partners, recaps, locales). Routes are in `app/`; reusable presentation components are in `components/`.
