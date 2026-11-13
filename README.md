# PC Laptop — monorepo

E-commerce for a laptop and tech hardware store. Front-end first; the Go API is
scaffolded but intentionally empty.

## Stack

| Area | Tech |
| --- | --- |
| Front-end | Astro 7, TypeScript, GSAP, Svelte (islands only) |
| Lint | ESLint 10 + neostandard (+ eslint-plugin-astro) |
| Back-end | Go — planned, no code yet |

## Layout

```text
.
├── apps/
│   ├── web/            # Astro front-end
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── layouts/
│   │   │   ├── pages/
│   │   │   └── styles/   # tokens.css (design tokens) + global.css
│   │   └── astro.config.mjs
│   └── api/            # Go back-end placeholder (no code)
├── media/              # Source images (banners, pcs, monitores, ...)
└── odd/tasks/          # Feature specs + task log
```

## Requirements

- Node `>= 22.23.4`
- pnpm `>= 10` (pinned to `pnpm@10.7.0` via `packageManager`)

The workspace is declared in `pnpm-workspace.yaml`; `pnpm-lock.yaml` is the only lockfile.

## Commands

Run from the repository root:

```bash
pnpm install
pnpm dev         # http://localhost:4321
pnpm lint
pnpm lint:fix
pnpm build       # output in apps/web/dist
```

`astro check` is wired as `pnpm check`, but it currently exits silently in this
environment (see `odd/tasks/pclaptop-ecommerce.md`).

## Assets

Images live in `media/` at the repo root and are imported with the `@media` alias:

```astro
---
import hero from '@media/banners/hero_pc.webp';
---

<img src={hero.src} alt="..." width="1052" height="591" />
```

## Design constraints

Fixed by the client — do not change:

- Background `#010D26`, body text `#F2F2F2`
- Cards and navbar/footer `#2E97F2`
- `h1` `#2E97F2`
- Card titles `#000000`, card text `#0A2033`
- Image radius `8px`, card radius `12px`
- Navbar `padding-block: 15px`, shrinks to `10px` on scroll
