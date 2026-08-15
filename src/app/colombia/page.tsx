import Link from "next/link";
import { ArrowLeft, ShieldCheck, HeartHandshake, Scale, MapPinned } from "lucide-react";

const TOPICS = [
  { name: "Anticoncepción", icon: ShieldCheck },
  { name: "Consentimiento y violencia sexual", icon: HeartHandshake },
  { name: "Mis derechos", icon: Scale },
  { name: "Rutas de atención", icon: MapPinned },
] as const;

export default function ColombiaPage() {
  return (
    <div className="flex flex-1 flex-col items-center gap-10 bg-white px-6 py-16">
      <Link
        href="/"
        className="flex items-center gap-1 self-start text-sm text-neutral-500 hover:text-neutral-800"
      >
        <ArrowLeft className="size-4" />
        Cambiar país
      </Link>

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Colombia
        </h1>
        <p className="max-w-sm text-sm text-neutral-500">
          Elegí un tema para empezar. El contenido todavía se está cargando.
        </p>
      </div>

      <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
        {TOPICS.map(({ name, icon: Icon }) => (
          <div
            key={name}
            aria-disabled="true"
            className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-neutral-400"
          >
            <Icon className="size-5 shrink-0" strokeWidth={1.5} />
            <span className="font-medium">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
