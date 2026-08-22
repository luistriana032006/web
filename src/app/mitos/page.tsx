import Link from "next/link";
import { ArrowLeft, Images } from "lucide-react";
import { MythCard } from "@/components/myth-card";
import { MITO_CATEGORIAS } from "@/lib/mitos";

export default function MitosPage() {
  return (
    <div className="flex flex-1 flex-col items-center gap-10 bg-vanilla px-6 py-16">
      <Link
        href="/"
        className="flex items-center gap-1 self-start text-sm text-mountain hover:text-mahogany"
      >
        <ArrowLeft className="size-4" />
        Volver al inicio
      </Link>

      <div className="flex flex-col items-center gap-3 text-center">
        <Images className="size-10 text-sage" strokeWidth={1.5} />
        <h1 className="text-2xl font-semibold tracking-tight text-mahogany">
          Mitos, desmentidos
        </h1>
        <p className="max-w-md text-sm text-mountain">
          Una galería con los mitos más comunes sobre anticoncepción en la
          región andina, organizados por método, y por qué son falsos.
          Comparte el que más te haya sorprendido.
        </p>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-10">
        {MITO_CATEGORIAS.map(({ nombre, mitos }) => (
          <section key={nombre} className="flex flex-col gap-4">
            <h2 className="font-semibold text-mahogany">{nombre}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mitos.map((myth) => (
                <MythCard key={myth.slug} {...myth} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
