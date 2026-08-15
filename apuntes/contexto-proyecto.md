# Contexto del proyecto — web

> Documento vivo. Actualizar en el mismo turno en que un cambio lo invalide (ver `apuntes/reglas-para-el-agent.md`).

## Qué es

App del hackaton (`hackaton_andino`), carpeta `web/`. Next.js con soporte PWA. Sin diseño definitivo todavía — la home actual es un placeholder blanco a propósito.

## Stack

- **Next.js** 16.3.1 — App Router, Turbopack (`next dev` / `next build` usan Turbopack por defecto en esta versión).
- **React** 19.2.8 / **React DOM** 19.2.8
- **TypeScript** 5 (`strict` vía `tsconfig.json` default de create-next-app)
- **Tailwind CSS** 4 (vía `@tailwindcss/postcss`, sin `tailwind.config` — Tailwind 4 usa config en CSS)
- **ESLint** 9 + `eslint-config-next`
- **npm** como package manager (hay `package-lock.json`; no mezclar con yarn/pnpm)
- **sharp** (dependencia transitiva, usada puntualmente para generar los íconos PWA — no está en `package.json` como dependencia directa del proyecto)

## Estructura

```
web/
├─ Makefile                  # tareas de desarrollo (ver `make help`)
├─ src/app/
│  ├─ layout.tsx             # metadata global, viewport, registra el SW
│  ├─ page.tsx                # home — placeholder blanco minimal
│  ├─ manifest.ts             # genera /manifest.webmanifest (Web Manifest)
│  ├─ register-sw.tsx         # client component: registra public/sw.js
│  └─ globals.css
├─ public/
│  ├─ sw.js                   # service worker (network-first + fallback a caché)
│  ├─ icons/icon-192.png      # íconos PWA — PLACEHOLDER (cuadrado blanco genérico)
│  ├─ icons/icon-512.png
│  ├─ apple-touch-icon.png
│  └─ favicon.png
├─ AGENTS.md / CLAUDE.md      # ver sección "Qué NO tocar"
└─ apuntes/
   ├─ reglas-para-el-agent.md # Método AR — reglas de proceso para el agente
   └─ contexto-proyecto.md    # este documento
```

## PWA — estado actual

- Manifest generado por código (`src/app/manifest.ts`), no un `manifest.json` estático.
- Service worker manual en `public/sw.js` (no se usa `next-pwa` ni ninguna librería — registro simple vía `register-sw.tsx`). Estrategia: network-first con fallback a caché, cachea solo `GET`.
- Íconos son **placeholders visuales** (cuadrado blanco con borde gris claro, generado con `sharp`), no branding final. Falta reemplazarlos cuando haya identidad visual.
- Probado con `npm run build` (compila y genera `/manifest.webmanifest` correctamente). El comportamiento completo de "instalable" (prompt del navegador) solo se valida bien en producción (`make serve` tras `make build`) o HTTPS — en `make start` (dev) puede no ofrecerse instalar.

## Convenciones

- Nombres de archivo: kebab-case, según `apuntes/reglas-para-el-agent.md` (excepto nombres de convención fija: `README.md`, `CLAUDE.md`, `AGENTS.md`).
- Se sigue el "Método AR" (`apuntes/reglas-para-el-agent.md`, importado desde `CLAUDE.md`) para cómo reportar avances, clasificar decisiones propias y versionar documentación.
- Toda la documentación del proyecto (reglas, contexto, y lo que se sume a futuro — bitácoras, resúmenes de sesión) vive en `apuntes/`. `README.md`, `CLAUDE.md` y `AGENTS.md` quedan en la raíz porque el tooling (Claude Code, Next.js) los busca ahí por convención fija — no se mueven.

## Qué NO tocar

- **El bloque marcado en `AGENTS.md`** (entre `<!-- BEGIN:nextjs-agent-rules -->` y `<!-- END:nextjs-agent-rules -->`): lo regenera `next dev` automáticamente. Editarlo a mano no sirve — se vuelve a escribir solo. El resto del archivo (fuera del bloque) sí es libre.
- **`package-lock.json`**: no editar a mano, solo vía `npm install`/`npm ci`.
- **`.next/`**: build output, no versionar ni editar (ya está en `.gitignore`).

## Pendiente / no resuelto todavía

- Diseño visual real (hoy todo es blanco/placeholder a propósito, sin definir aún).
- Íconos PWA finales (reemplazar los generados por `sharp`).
- Sin deploy configurado (no hay Vercel ni CI todavía).
- Sin tests ni framework de testing definido.
- Sin variables de entorno / `.env` todavía — si aparecen, recordar la regla de no pegarlas en el chat.
