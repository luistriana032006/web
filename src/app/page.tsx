import Link from "next/link";
import { Lock, Sprout, ArrowRight } from "lucide-react";

const COUNTRIES = [
  { name: "Bolivia", slug: "bolivia", active: false },
  { name: "Chile", slug: "chile", active: false },
  { name: "Colombia", slug: "colombia", active: true },
  { name: "Ecuador", slug: "ecuador", active: false },
  { name: "Perú", slug: "peru", active: false },
  { name: "Venezuela", slug: "venezuela", active: false },
] as const;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 bg-vanilla px-6 py-16">
      <div className="flex flex-col items-center gap-3 text-center">
        <Sprout className="size-10 text-sage" strokeWidth={1.5} />
        <h1 className="text-2xl font-semibold tracking-tight text-mahogany">
          Elegí tu país
        </h1>
        <p className="max-w-sm text-sm text-mountain">
          Información sobre salud sexual y reproductiva, con marco legal y
          rutas de atención propias de cada país.
        </p>
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
    </div>
  );
}
