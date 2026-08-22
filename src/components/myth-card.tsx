import Image from "next/image";
import Link from "next/link";
import { ImageOff } from "lucide-react";
import { ShareButton } from "@/components/share-button";
import type { Myth } from "@/lib/mitos";

export function MythCard({ slug, mito, real, imageCoverSrc }: Myth) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-tobacco/30 bg-sand/50">
      <Link href={`/mitos/${slug}`} className="group flex flex-col">
        <div className="relative aspect-[4/5] w-full bg-sand">
          {imageCoverSrc ? (
            <Image
              src={imageCoverSrc}
              alt={`Ilustración del mito: ${mito}`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-mountain">
              <ImageOff className="size-8 shrink-0" strokeWidth={1.5} />
              <span className="text-xs">Infografía en camino</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 p-4 pb-0">
          <p className="text-sm font-medium text-mahogany group-hover:underline">
            &ldquo;{mito}&rdquo;
          </p>
          <p className="text-sm text-mountain">
            <span className="font-medium text-terracota">Falso.</span> {real}
          </p>
        </div>
      </Link>

      <div className="p-4">
        <ShareButton title="Mito desmentido" text={`"${mito}": ${real}`} path={`/mitos/${slug}`} />
      </div>
    </div>
  );
}
