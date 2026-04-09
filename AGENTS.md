# AGENTS.md

## 1. Project Overview
This project is a Vite-powered React app used for AI Jam workshop exercises and Stitch-to-React UI implementation.

- Tech stack: React 19.2.4, React DOM 19.2.4, TypeScript 6.0.2, Vite 8.0.4, Tailwind CSS 4.2.2, ESLint 9.39.4
- App type: SPA (client-rendered, no server runtime in this repo)
- Build base path: `'/aijam1/'` in `vite.config.ts` (important for static hosting)

## 2. Commands
| command | what it does | when to use |
|---|---|---|
| `npm run dev` | Starts Vite dev server | Daily local development |
| `npm run build` | Runs `tsc -b` and then `vite build` | Before deployment and when validating TS/build integrity |
| `npm run lint` | Runs ESLint over the repository (`eslint .`) | Before commit and after non-trivial refactors |
| `npm run preview` | Serves production build locally via Vite | Final smoke-check of built output |

## 3. Project Structure
- `package.json` - scripts and dependency versions
- `package-lock.json` - dependency lockfile
- `vite.config.ts` - Vite config, React plugin, React Compiler preset, Tailwind plugin, `base`
- `eslint.config.js` - flat ESLint setup for TS + React Hooks + React Refresh
- `tsconfig.json` - TS project references (`tsconfig.app.json`, `tsconfig.node.json`)
- `tsconfig.app.json` - app TS compiler options (`src` scope, bundler mode)
- `tsconfig.node.json` - TS options for Node-side config files (`vite.config.ts`)
- `src/main.tsx` - application entry point and React root mounting
- `src/App.tsx` - main page composition and section-level UI components
- `src/index.css` - global styles, theme tokens, layout and component CSS
- `src/App.css` - currently empty placeholder file
- `docs/` - workshop docs, guides, prompts, and project inputs

## 4. Architecture
- Render/data flow:
  1. `src/main.tsx` imports `src/index.css` and `App`
  2. `createRoot(...).render(<StrictMode><App /></StrictMode>)` mounts app
  3. `src/App.tsx` renders static, section-based landing-page UI
  4. Styling is applied primarily via classes defined in `src/index.css`
- Key decisions visible in code:
  - No router: single-page landing layout, all content in one React tree
  - No external state manager: state-free presentational UI (static arrays and JSX mapping)
  - No API/data layer: content is currently hardcoded in component data arrays
  - CSS approach is custom global CSS + utility import (`@import "tailwindcss";`) rather than component-scoped CSS modules
- Reusable pattern:
  - Array-driven rendering for repeated sections (features/reviews) to keep JSX concise

## 5. Conventions
- TypeScript:
  - Bundler-mode TS config with `moduleResolution: "bundler"` and `verbatimModuleSyntax: true`
  - `allowImportingTsExtensions: true` is enabled
  - Lint-like compiler checks: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
  - No strict mode flag is set in current TS configs
- React:
  - Functional components and direct JSX composition
  - `StrictMode` is enabled at root
- CSS:
  - Global stylesheet in `src/index.css`
  - Theme-like token values defined in CSS variables and class blocks
  - Use semantic class names (`.hero`, `.features`, `.lineup`, `.review-grid`) for page sections

```tsx
const features = [{ title: 'App-Connected Control', description: '...', accent: 'Live Sync Active' }]

function App() {
  return <section className="features">{features.map((f) => <article key={f.title}>{f.title}</article>)}</section>
}
```

## 6. Boundaries
- ✅ Always do
  - Run `npm run lint` and `npm run build` before finalizing non-trivial changes
  - Preserve `vite.config.ts` base path behavior unless the hosting target changes
  - Keep dependency versions and scripts aligned with `package.json`
- ⚠️ Ask first
  - Adding/removing dependencies
  - Introducing routing, global state management, or backend/API integration
  - Changing build output behavior (`base`, plugin stack, TypeScript project references)
- 🚫 Never do
  - Commit secrets/tokens or private keys into tracked files
  - Edit `node_modules/` or `dist/` manually
  - Remove lockfile consistency by changing dependencies without updating `package-lock.json`
