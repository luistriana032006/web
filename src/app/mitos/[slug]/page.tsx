import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ImageOff } from "lucide-react";
import { ShareButton } from "@/components/share-button";
import { ALL_MITOS, getMythBySlug } from "@/lib/mitos";

export function generateStaticParams() {
  return ALL_MITOS.map((myth) => ({ slug: myth.slug }));
}

export default async function MitoDetailPage({
  params,
}: PageProps<"/mitos/[slug]">) {
  const { slug } = await params;
  const myth = getMythBySlug(slug);

  if (!myth) notFound();

  return (
    <div className="flex flex-1 flex-col items-center bg-vanilla px-6 py-16">
      <div className="flex w-full max-w-lg flex-col gap-8">
        <Link
          href="/mitos"
          className="flex items-center gap-1 self-start text-sm text-mountain hover:text-mahogany"
        >
          <ArrowLeft className="size-4" />
          Volver a los mitos
        </Link>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-sand">
          {myth.imageInfographicSrc ? (
            <Image
              src={myth.imageInfographicSrc}
              alt={`Infografía: ${myth.mito}`}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-mountain">
              <ImageOff className="size-8 shrink-0" strokeWidth={1.5} />
              <span className="text-xs">Infografía en camino</span>
            </div>
          )}
        </div>

        {/* Mismo texto que la infografía, en HTML real: accesible para lectores
            de pantalla (el texto quemado en la imagen no lo es) y visible aunque
            la imagen no cargue. */}
        <div className="flex flex-col gap-3 text-mahogany">
          <p className="text-lg font-medium">&ldquo;{myth.mito}&rdquo;</p>
          <p className="text-mountain">
            <span className="font-medium text-terracota">Falso.</span>{" "}
            {myth.real}
          </p>
        </div>

        <ShareButton
          title="Mito desmentido — Germina"
          text={`"${myth.mito}": ${myth.real}`}
          path={`/mitos/${myth.slug}`}
        />
      </div>
    </div>
  );
}
