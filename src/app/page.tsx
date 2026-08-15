import Link from "next/link";
import { Lock, Sprout, ArrowRight, Smartphone } from "lucide-react";
import { PhoneFrame } from "@/components/phone-frame";
import { InstallButton } from "@/components/install-button";

const COUNTRIES = [
  { name: "Bolivia", slug: "bolivia", active: false },
  { name: "Chile", slug: "chile", active: false },
  { name: "Colombia", slug: "colombia", active: true },
  { name: "Ecuador", slug: "ecuador", active: false },
  { name: "Perú", slug: "peru", active: false },
  { name: "Venezuela", slug: "venezuela", active: false },
] as const;

const INSTALL_STEPS = [
  {
    src: "/tutorial/paso-1-abrir-menu.jpeg",
    alt: "Menú de Chrome con la opción 'Instalar y crear acceso directo'",
    caption: "Abrí el menú (⋮) de Chrome y tocá \"Instalar\".",
  },
  {
    src: "/tutorial/paso-2-confirmar-instalacion.jpeg",
    alt: "Cuadro de diálogo de Chrome confirmando instalar Hackaton Andino",
    caption: "Confirmá tocando \"Instalar\".",
  },
  {
    src: "/tutorial/paso-3-app-instalada.jpeg",
    alt: "Ícono de Hackaton Andino ya instalado en la pantalla de inicio",
    caption: "Listo: queda como app en tu pantalla de inicio.",
  },
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

      <div className="flex w-full max-w-2xl flex-col items-center gap-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-mahogany">
          <Smartphone className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Tutorial de instalación
        </h2>

        <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-2 py-2 sm:justify-center">
          {INSTALL_STEPS.map((step, index) => (
            <PhoneFrame
              key={step.src}
              src={step.src}
              alt={step.alt}
              step={index + 1}
              caption={step.caption}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
