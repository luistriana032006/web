import Image from "next/image";
import { ImageOff } from "lucide-react";
import { ShareButton } from "@/components/share-button";

export type Myth = {
  slug: string;
  mito: string;
  real: string;
  /** Ilustración simbólica de portada (ej. "/mitos/mito1_portada.jpeg"). Vacío = placeholder. */
  imageCoverSrc?: string;
};

export function MythCard({ mito, real, slug, imageCoverSrc }: Myth) {
  return (
    <div
      id={slug}
      className="flex flex-col overflow-hidden rounded-2xl border border-tobacco/30 bg-sand/50"
    >
      <div className="relative aspect-[4/5] w-full bg-sand">
        {imageCoverSrc ? (
          <Image
            src={imageCoverSrc}
            alt={`Ilustración del mito: ${mito}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-mountain">
            <ImageOff className="size-8 shrink-0" strokeWidth={1.5} />
            <span className="text-xs">Infografía en camino</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <p className="text-sm font-medium text-mahogany">&ldquo;{mito}&rdquo;</p>
        <p className="text-sm text-mountain">
          <span className="font-medium text-terracota">Falso.</span> {real}
        </p>
        <ShareButton title="Mito desmentido" text={`"${mito}": ${real}`} path={`/mitos#${slug}`} />
      </div>
    </div>
  );
}
