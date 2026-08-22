# Imágenes de /mitos

Esta carpeta tiene las dos imágenes por mito de la galería `/mitos`: la portada (ilustración simbólica, sin texto) y la infografía para compartir (con texto). **Las 28 (14 + 14) ya están completas y conectadas** en `src/lib/mitos.ts`.

## Convención de nombres

`mito<N>_portada.jpeg` y `infografia_mito<N>.jpeg`, donde `N` es el número del mito según el orden en `hackaton_andino/mitos.md` (fuera de este repo) — no el orden alfabético del slug. Ver la tabla `mito → slug → archivos` en `hackaton_andino/plantilla-imagen-mitos.md` para el mapeo completo.

## Cómo agregar o reemplazar una imagen

1. Generala con la plantilla correspondiente (Plantilla A para portada, Plantilla B para infografía) — ambas en `hackaton_andino/plantilla-imagen-mitos.md`.
2. Guardala acá con el nombre exacto de la tabla (`mito<N>_portada.jpeg` o `infografia_mito<N>.jpeg`), sobrescribiendo si ya existe.
3. Avisale al agente si es un archivo nuevo (uno que reemplaza a otro con el mismo nombre no necesita cambios de código).

Esta carpeta no se borra aunque falten imágenes (este README la mantiene versionada en git).
