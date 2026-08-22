"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

export function ShareButton({
  title,
  text,
  path,
}: {
  title: string;
  text: string;
  path: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = `${window.location.origin}${path}`;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch {
        // El usuario cerró el diálogo de compartir sin elegir nada: no es un error real.
      }
      return;
    }

    // Navegadores sin Web Share API (típicamente desktop): copiar al portapapeles.
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sin permiso de portapapeles tampoco: no hay más fallback posible.
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex w-fit items-center gap-2 rounded-full border border-tobacco/30 bg-sand/50 px-3 py-1.5 text-xs font-medium text-mahogany transition-colors hover:bg-sand"
    >
      {copied ? (
        <>
          <Check className="size-3.5 shrink-0 text-sage" strokeWidth={1.5} />
          Copiado
        </>
      ) : (
        <>
          <Share2 className="size-3.5 shrink-0" strokeWidth={1.5} />
          Compartir
        </>
      )}
    </button>
  );
}
