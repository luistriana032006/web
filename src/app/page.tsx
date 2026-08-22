import Link from "next/link";
import { Lock, Sprout, ArrowRight, Images } from "lucide-react";
import { InstallButton } from "@/components/install-button";

const COUNTRIES = [
  { name: "Bolivia", slug: "bolivia", active: true },
  { name: "Chile", slug: "chile", active: true },
  { name: "Colombia", slug: "colombia", active: true },
  { name: "Ecuador", slug: "ecuador", active: true },
  { name: "Perú", slug: "peru", active: true },
  { name: "Venezuela", slug: "venezuela", active: true },
] as const;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 bg-vanilla px-6 py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <Sprout className="size-10 text-sage" strokeWidth={1.5} />
        <span className="text-sm font-semibold tracking-wide text-sage">
          Germina
        </span>
        <h1 className="text-2xl font-semibold tracking-tight text-mahogany">
          Elegí tu país
        </h1>
        <p className="max-w-sm text-sm text-mountain">
          Información sobre salud sexual y reproductiva, con marco legal y
          rutas de atención propias de cada país.
        </p>
        <InstallButton />
      </div>

      <div className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
        {COUNTRIES.map((country) =>
          country.active ? (
            <Link
              key={country.slug}
              href={`/${country.slug}`}
              className="group flex flex-col items-center justify-center gap-2 rounded-2xl bg-terracota px-4 py-6 text-center transition-colors hover:bg-terracota/90"
            >
              <span className="font-medium text-vanilla">
                {country.name}
              </span>
              <ArrowRight className="size-4 text-vanilla transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div
              key={country.slug}
              aria-disabled="true"
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-tobacco/40 bg-sand px-4 py-6 text-center text-mountain"
            >
              <span className="font-medium">{country.name}</span>
              <span className="flex items-center gap-1 text-xs">
                <Lock className="size-3" />
                Próximamente
              </span>
            </div>
          )
        )}
      </div>

      <Link
        href="/mitos"
        className="group flex w-full max-w-2xl items-center gap-3 rounded-2xl border border-tobacco/30 bg-sand/60 px-5 py-4 transition-colors hover:bg-sand"
      >
        <Images className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
        <div className="flex flex-1 flex-col">
          <span className="font-medium text-mahogany">Mitos, desmentidos</span>
          <span className="text-sm text-mountain">
            Galería con los mitos más comunes sobre anticoncepción en la región, para todos los países
          </span>
        </div>
        <ArrowRight className="size-4 shrink-0 text-mountain transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
