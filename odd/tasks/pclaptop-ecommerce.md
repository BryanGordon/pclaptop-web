# PC Laptop Web — E-commerce front

Branch: `feat/front-foundation` · Delivery: `ask-on-risk` · Test runner: none yet (ESLint + `astro check`)

## Specs

- **S1** — Monorepo: front and back separated. Backend is Go and must NOT contain code yet, only folders/files prepared.
  Quote: "El proyecto va a ser monorepo, por lo que tienes que separar el back y el front. NO hagas nada del backend todavia, solo puedes crear las carpetas o archivos necesarios para tenerlos listos, pero NO ESCRIBAS CODIGO".
- **S2** — Stack: Astro + TypeScript + GSAP for animations + Svelte only for interactive components + ESLint with neoStandard rules.
  Quote: "El proyecto va a usar Astro, TypesCript,GSAP para las animaciones y si necesario algun componente interactivo vamos a usar Svelte, como linter utiliza Eslint y neoStandard para las reglas".
  Constraint: if ESLint 10 / neoStandard compatibility problems appear, report them and DO NOT try to fix anything.
  Quote: "si tienes algun problema relacionado hazmelo saber, pero NO intentes solucionar nada".
- **S3** — Palette: page background `#010D26`, body text `#F2F2F2`, cards background `#2E97F2`, `h1` color `#2E97F2`.
- **S4** — Radii: all images `8px`, all cards `12px`.
- **S5** — Card typography: card titles `#000000`, card text `#0A2033`.
- **S6** — Navbar: background `#2E97F2`, same typography colors as cards, logo on the left, navigation items occupying most of the bar, sticky, `padding-block: 15px`, shrinks by `5px` on scroll. Must reserve room for future login and cart buttons.
- **S7** — Footer: background `#2E97F2` with card typography colors; contains copyright ("derechos reservados"), Asus partner information and navigation.
- **S8** — Home: hero section with CTA button to products (image `media/banners/hero_pc.webp`); offers section with 3 cards (PC image, price, technical info) that link to the product page (product page NOT developed yet); section with 4 square category cards ~`180px`; bento section with 3 elements using the banner images plus each model title; carousel of products showing image plus price.
- **S9** — PC's page: all available PCs in a 3-column grid, with a left `aside` reserved for filters (filters come later).
- **S10** — Otros productos page: cards in a 2-column grid plus the categories `monitores`, `componentes`, `impresoras`, `repuestos`. Clicking a category goes to a PC's-like page with the matching products.
- **S11** — Contacto page: addresses on one embedded map, phone numbers, email and a contact form with basic fields (real data comes later).
- **S12** — Trabaja con nosotros page: 4 cards describing the 4 steps to access the benefit, plus a simple form below.
- **S13** — No responsive work yet. Quote: "NO hagas el responsive todavia".
- **S14** — Do not create `dist` unless strictly necessary. Quote: "NO crees el dist a no ser que SEA ESTRICTAMENTE NECESARIO".
- **S15** — Modern design while respecting every color/radius/typography parameter above. Work in small increments delivered for review.

## Tasks

| ID | Scope | Specs | Route | Status |
| --- | --- | --- | --- | --- |
| T1 | Monorepo + Astro/TS/GSAP/Svelte/ESLint setup, design tokens, BaseLayout, sticky navbar, footer, 5 routes | S1, S2, S3, S4, S5, S6, S7, S13, S14 | inline | done (040b921) |
| T2 | Home: hero + CTA | S8, S15 | inline | done (040b921) |
| T3 | Home: offers (3 cards) | S8 | inline | pending |
| T4 | Home: 4 square category cards (~180px) | S8 | inline | pending |
| T5 | Home: bento of 3 banners | S8 | inline | pending |
| T6 | Home: products carousel (image + price) | S8 | inline | pending |
| T7 | PC's listing: 3-column grid + left filter aside | S9 | inline | pending |
| T8 | Otros productos: 2-column cards + category landing pages | S10 | inline | pending |
| T9 | Contacto: map, phones, email, form | S11 | inline | pending |
| T10 | Trabaja con nosotros: 4 step cards + form | S12 | inline | pending |
| T11 | Product detail page (explicitly deferred by the user) | S8 | inline | pending |

## Log

- **L1** — User request (verbatim, 2026-11-12): "Vamos a hacer un e-commerce para una tienda de laptops, entre otros servicios. En la carpeta `media` te dejo las imagenes que vamos a utilizar, separadas en carpetas segun los tipos de uso que ya te ire avisando. El color de fondo de la pagina debe ser `#010D26`, las letras deben tener el color `#F2F2F2`, las cards deben tener como color de fondo `#2E97F2`, los titulos (h1) tambien deben tener `#2E97F2` como color. Todas la imagenes deben tener un rounded de 8px y las cards de 12px, los titulos dentro de las cards deben tener `#000000` y las letras `#0A2033`. Debe tener un diseño moderno pero respetando los parametros que te indico. NO hagas el responsive todavia, NO crees el dist a no ser que SEA ESTRICTAMENTE NECESARIO o lo tengas que usar tu. Haz el proyecto poco a poco entregandome pequeños avances para tener yo un mejor control. El proyecto va a ser monorepo, por lo que tienes que separar el back y el front. NO hagas nada del backend todavia, solo puedes crear las carpetas o archivos necesarios para tenerlos listos, pero NO ESCRIBAS CODIGO, quiero centrarme primero en tener algo visual para luego testear. El proyecto va a usar Astro, TypesCript,GSAP para las animaciones y si necesario algun componente interactivo vamos a usar Svelte, como linter utiliza Eslint y neoStandard para las reglas (En otros proyectos he tenido problemas de compatibilidad entre Eslint 10 y NeoStandard, si tienes algun problema relacionado hazmelo saber, pero NO intentes solucionar nada.), luego cuando hayamos acabado con parte del front te paso el stack para el backend (Vamos a usar Go como lenguaje, te lo anticipio por si tienes que estructurar ciertos datos). La pagina debe tener 5 paginas (Home, PC's, otros productos, contacto y trabaja con nosotros)."
- **L2** — Media inventory confirmed: `media/{banners,componentes,impresoras,monitores,pcs,repuestos}` + `media/logo.jpg`.
- **L3** — Tooling versions resolved: Astro 7.4.11 (Node >=22.23.4), ESLint 10.14.0 + neostandard 0.14.1 (peer `eslint ^9.22 || ^10`), TypeScript pinned to 6.0.3 because `@astrojs/check` and `@astrojs/svelte` peers reject TS 7.
- **L4** — Assets stay at repo root `media/` (single source of truth). Vite alias `@media` -> monorepo root `media/`.
- **L5** — Increment 1 shipped (`040b921`, branch `feat/front-foundation`): npm workspaces monorepo, `apps/web` Astro 7 (Svelte integration installed, no Svelte islands yet), `apps/api` folder-only placeholder, `odd/` docs, design tokens, `BaseLayout`, sticky navbar with GSAP shrink (15px -> 10px), footer, 5 routes, home hero.
  Verification: `eslint .` -> 13 files linted, 0 problems; dev server 200 on `/`, `/pcs`, `/otros-productos`, `/contacto`, `/trabaja-con-nosotros`; `hero_pc.webp` and `logo.jpg` served 200 through `/@fs`; production build to a temp dir outside the repo (`/d/npm-tmp/build-test`) exit 0 with `hero_pc.*.webp` + `gsap.*.js` emitted; no `dist` created in the repo.
  Environment issue 1: `C:` had ~3.9MB free, so every `npm install` failed with `ENOSPC`. Installs were run with `--cache /d/npm-cache` and `TMP/TEMP/TMPDIR=/d/npm-tmp`. The machine still needs disk space freed on `C:`.
  Environment issue 2: `astro check` (and `astro --help`) exit without printing anything in this bash harness, so type checking could not be used as a gate. Reported, not fixed, per the user's instruction.
  Blocker avoided: no ESLint 10 / neostandard incompatibility appeared; `neostandard` peer range already allows `eslint ^10`.
