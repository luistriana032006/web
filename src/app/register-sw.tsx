"use client";

import { useEffect } from "react";

export function RegisterServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker
      .register("/sw.js")
      .catch((err) => console.error("SW registration failed:", err));

    // En cuanto vuelve la señal, el navegador chequea solo si hay un sw.js
    // nuevo. Nuestro sw.js hace skipWaiting()+clients.claim(), así que la
    // nueva versión toma control apenas termina de instalar, sin esperar a
    // que se cierren pestañas. Este listener recarga la página una sola vez
    // para que lo que el usuario ya tiene abierto muestre el contenido
    // actualizado, en vez de quedarse en la versión vieja hasta que reabra
    // la app manualmente.
    let reloaded = false;
    const onControllerChange = () => {
      if (reloaded) return;
      reloaded = true;
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
    };
  }, []);

  return null;
}
