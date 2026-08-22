const CACHE_VERSION = "v5";
const CACHE_NAME = `hackaton-andino-${CACHE_VERSION}`;

// Todas las rutas reales de la app: se precargan enteras al instalar,
// para que funcionen offline aunque el usuario nunca las haya visitado.
const ROUTES_TO_PRECACHE = [
  "/",
  "/colombia",
  "/colombia/anticoncepcion",
  "/colombia/consentimiento",
  "/colombia/derechos",
  "/colombia/rutas-de-atencion",
  "/bolivia",
  "/bolivia/anticoncepcion",
  "/bolivia/consentimiento",
  "/bolivia/derechos",
  "/bolivia/rutas-de-atencion",
  "/chile",
  "/chile/anticoncepcion",
  "/chile/consentimiento",
  "/chile/derechos",
  "/chile/rutas-de-atencion",
  "/ecuador",
  "/ecuador/anticoncepcion",
  "/ecuador/consentimiento",
  "/ecuador/derechos",
  "/ecuador/rutas-de-atencion",
];

// Assets de rutas fijas (no hasheadas) que no aparecen linkeadas dentro del HTML.
const STATIC_ASSETS = [
  "/manifest.webmanifest",
  "/favicon.ico",
  "/favicon.png",
  "/apple-touch-icon.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/tutorial/paso-1-abrir-menu.jpeg",
  "/tutorial/paso-2-confirmar-instalacion.jpeg",
  "/tutorial/paso-3-app-instalada.jpeg",
];

// Descubre y cachea los JS/CSS/fuentes hasheados que Next.js linkea en cada
// página (sus nombres cambian en cada build, así que no se pueden listar a mano).
async function precacheRoutesAndAssets(cache) {
  const discovered = new Set();

  await Promise.all(
    ROUTES_TO_PRECACHE.map(async (route) => {
      try {
        const response = await fetch(route, { cache: "no-store" });
        if (!response.ok) return;
        const html = await response.clone().text();
        await cache.put(route, response);
        for (const match of html.matchAll(/(?:href|src)="(\/_next\/static\/[^"]+)"/g)) {
          discovered.add(match[1]);
        }
      } catch {
        // Sin red durante el install: el runtime caching lo recupera más adelante.
      }
    })
  );

  await Promise.all(
    [...discovered, ...STATIC_ASSETS].map(async (url) => {
      try {
        const response = await fetch(url, { cache: "no-store" });
        if (response.ok) await cache.put(url, response);
      } catch {
        // idem
      }
    })
  );
}

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(precacheRoutesAndAssets));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

const IMMUTABLE_ASSET_RE = /\/(_next\/static|icons|tutorial)\//;

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // JS/CSS/fuentes/íconos hasheados: nunca cambian de contenido bajo la misma
  // URL, así que cache-first es seguro y evita ida y vuelta a la red.
  if (IMMUTABLE_ASSET_RE.test(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          const clone = response.clone();
          event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)));
          return response;
        });
      })
    );
    return;
  }

  // Navegaciones reales (abrir la app, recargar, escribir la URL): network-first
  // con fallback a caché. Todo lo demás (ej. fetch de RSC en transiciones
  // client-side de next/link) se deja pasar directo a la red sin interceptar,
  // para no cachear por error una respuesta parcial bajo la URL de la página.
  if (event.request.mode !== "navigate") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)));
        return response;
      })
      .catch(() =>
        caches
          .match(event.request)
          .then((cached) => cached || caches.match("/"))
      )
  );
});
