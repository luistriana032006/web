"use client";

import { useEffect, useState } from "react";
import { Download, Share, X } from "lucide-react";

// beforeinstallprompt no está en los tipos DOM estándar de TypeScript.
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function isIOSDevice() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  // iPadOS 13+ se identifica como "MacIntel" pero tiene pantalla táctil.
  const isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return isIOS || isIPadOS;
}

function isStandaloneMode() {
  if (typeof window === "undefined") return false;
  const nav = window.navigator as Navigator & { standalone?: boolean };
  return window.matchMedia("(display-mode: standalone)").matches || nav.standalone === true;
}

export function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  // isStandalone/isIOS dependen de window/navigator: no existen durante el
  // render en servidor. Arrancan en false (SSR-safe, sin mismatch de
  // hidratación) y se corrigen una sola vez después de montar en el cliente.
  const [{ isStandalone, isIOS }, setClientInfo] = useState({
    isStandalone: false,
    isIOS: false,
  });
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    // Valor solo disponible en cliente (window/navigator), se calcula una
    // vez tras montar a propósito, para no romper la hidratación con SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setClientInfo({ isStandalone: isStandaloneMode(), isIOS: isIOSDevice() });

    const onBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    const onAppInstalled = () => {
      setDeferredPrompt(null);
      setClientInfo((prev) => ({ ...prev, isStandalone: true }));
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  // Ya instalada: no tiene sentido ofrecer instalarla de nuevo.
  if (isStandalone) return null;

  async function handleClick() {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") setDeferredPrompt(null);
      return;
    }
    // iOS, o un navegador que todavía no disparó beforeinstallprompt:
    // no hay forma de instalar por código, mostramos cómo hacerlo a mano.
    setShowInstructions(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center gap-2 rounded-full bg-terracota px-5 py-2.5 text-sm font-medium text-vanilla transition-colors hover:bg-terracota/90"
      >
        <Download className="size-4 shrink-0" strokeWidth={1.5} />
        Instalar app
      </button>

      {showInstructions && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-mahogany/40 p-4 sm:items-center"
          onClick={() => setShowInstructions(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="flex w-full max-w-sm flex-col gap-3 rounded-2xl bg-vanilla p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="font-medium text-mahogany">Cómo instalar</p>
              <button
                type="button"
                onClick={() => setShowInstructions(false)}
                aria-label="Cerrar"
              >
                <X className="size-5 text-mountain" strokeWidth={1.5} />
              </button>
            </div>

            {isIOS ? (
              <p className="text-sm text-mahogany">
                Tocá el ícono{" "}
                <Share className="inline size-4 -translate-y-0.5" strokeWidth={1.5} /> Compartir
                en la barra de Safari y elegí{" "}
                <span className="font-medium">&ldquo;Agregar a inicio&rdquo;</span>.
              </p>
            ) : (
              <p className="text-sm text-mahogany">
                Abrí el menú (⋮) de tu navegador y elegí{" "}
                <span className="font-medium">&ldquo;Instalar aplicación&rdquo;</span>.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
