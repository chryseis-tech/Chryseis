---
name: view-app-in-browser
description: 'Start a local web app and open it in a browser. Use when asked to view the app, run the dev server, launch localhost, or check the site in a browser.'
argument-hint: '[optional] package manager: npm | pnpm | yarn | bun'
---

# View App In Browser

## When to Use
- User asks how to view the app in a browser.
- User asks to run/start/launch the app locally.
- User asks for the localhost URL.

## Procedure
1. Confirm the project root by locating `package.json`.
2. Detect the package manager from lockfiles:
- `package-lock.json` -> npm
- `pnpm-lock.yaml` -> pnpm
- `yarn.lock` -> yarn
- `bun.lockb` -> bun
3. Install dependencies if needed:
- npm: `npm install`
- pnpm: `pnpm install`
- yarn: `yarn install`
- bun: `bun install`
4. Start the dev server from project root:
- npm: `npm run dev`
- pnpm: `pnpm dev`
- yarn: `yarn dev`
- bun: `bun run dev`
5. Read terminal output and provide the exact local URL (usually `http://localhost:5173/` for Vite).
6. If the default port is busy, use the alternate localhost URL shown by the dev server.

## Troubleshooting
- If command is not found, verify Node.js (or Bun) is installed and available in PATH.
- If dependencies fail to install, retry after deleting the lockfile that does not match the intended package manager.
- If the app fails to start, run `npm run dev -- --host` (or equivalent) when browser access from another device is needed.
