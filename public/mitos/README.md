# Imágenes de /mitos

Esta carpeta tiene las dos imágenes por mito de la galería `/mitos`: la portada (ilustración simbólica, sin texto, ya cargadas las 14) y la infografía para compartir (con texto, todavía pendiente).

## Convención de nombres

`mito<N>_portada.jpeg` y `mito<N>_infografia.jpeg`, donde `N` es el número del mito según el orden en `hackaton_andino/mitos.md` (fuera de este repo) — no el orden alfabético del slug. Ver la tabla `mito → slug` en `hackaton_andino/prompts-lote-1-imagenes.md` para el mapeo completo.

## Portadas (14/14 — completas)

`mito1_portada.jpeg` a `mito14_portada.jpeg`, conectadas en `src/app/mitos/page.tsx` (campo `imageCoverSrc` de cada mito).

## Infografías (0/14 — pendientes)

Van a ir generándose con la Plantilla B de `hackaton_andino/plantilla-imagen-mitos.md` (con texto y el pie `germina.health`). Se conectan en la página de detalle de cada mito (`/mitos/[slug]`, todavía sin construir — ver `apuntes/2026-08-21-plan-mitos-individuales-y-cms.md`), no en la tarjeta de la galería.

## Cómo agregar una imagen nueva

1. Generala con la plantilla correspondiente (A para portada, B para infografía).
2. Guardala acá con el nombre `mito<N>_portada.jpeg` o `mito<N>_infografia.jpeg`.
3. Avisale al agente — conecta el campo correspondiente en el código.

Esta carpeta no se borra aunque falten imágenes (este README la mantiene versionada en git).
