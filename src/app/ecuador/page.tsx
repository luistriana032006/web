import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  HeartHandshake,
  Scale,
  MapPinned,
  Stethoscope,
  Newspaper,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const TOPICS = [
  { name: "Anticoncepción sin mitos", slug: "anticoncepcion", icon: ShieldCheck },
  { name: "Consentimiento y violencia sexual", slug: "consentimiento", icon: HeartHandshake },
  { name: "Mis derechos", slug: "derechos", icon: Scale },
  { name: "Rutas de atención", slug: "rutas-de-atencion", icon: MapPinned },
] as const;

const BLOG_PREVIEW = [
  {
    tag: "Información general",
    icon: BookOpen,
    title: "Cómo hablar de sexualidad sin pena",
    teaser:
      "Artículos con lenguaje claro sobre los temas que más preguntan los adolescentes.",
  },
  {
    tag: "Tips de expertos",
    icon: Lightbulb,
    title: "La mirada de nuestros psicólogos",
    teaser:
      "Recomendaciones prácticas del equipo de salud mental sobre consentimiento, autoestima y comunicación.",
  },
] as const;

export default function EcuadorPage() {
  return (
    <div className="flex flex-1 flex-col items-center gap-10 bg-vanilla px-6 py-16">
      <Link
        href="/"
        className="flex items-center gap-1 self-start text-sm text-mountain hover:text-mahogany"
      >
        <ArrowLeft className="size-4" />
        Cambiar país
      </Link>

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-mahogany">
          Ecuador
        </h1>
        <p className="max-w-sm text-sm text-mountain">
          Elegí un tema para empezar.
        </p>
      </div>

      <div className="flex w-full max-w-2xl items-start gap-3 rounded-2xl border border-tobacco/30 bg-sand/60 p-5">
        <Stethoscope className="mt-0.5 size-5 shrink-0 text-terracota" strokeWidth={1.5} />
        <div>
          <p className="font-medium text-mahogany">Validado por profesionales</p>
          <p className="mt-1 text-sm text-mahogany">
            Este contenido está siendo revisado por psicólogos y
            profesionales de salud del equipo. Próximamente vas a poder leer
            sus aportes acá.
          </p>
        </div>
      </div>

      <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
        {TOPICS.map(({ name, slug, icon: Icon }) => (
          <Link
            key={slug}
            href={`/ecuador/${slug}`}
            className="group flex items-center gap-3 rounded-2xl bg-terracota px-5 py-4 transition-colors hover:bg-terracota/90"
          >
            <Icon className="size-5 shrink-0 text-vanilla" strokeWidth={1.5} />
            <span className="font-medium text-vanilla">{name}</span>
          </Link>
        ))}
      </div>

      <div className="flex w-full max-w-2xl flex-col gap-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-mahogany">
          <Newspaper className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Blog: tips y aportes
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {BLOG_PREVIEW.map(({ tag, icon: Icon, title, teaser }) => (
            <div
              key={title}
              className="flex flex-col gap-2 rounded-2xl border border-tobacco/30 bg-sand/50 p-5"
            >
              <span className="flex w-fit items-center gap-1 rounded-full bg-terracota/10 px-2 py-0.5 text-xs font-medium text-terracota">
                <Icon className="size-3 shrink-0" strokeWidth={1.5} />
                {tag}
              </span>
              <p className="font-medium text-mahogany">{title}</p>
              <p className="text-sm text-mountain">{teaser}</p>
              <span className="text-xs text-mountain">Próximamente</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
