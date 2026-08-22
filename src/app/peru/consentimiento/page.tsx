import { HeartHandshake, MapPin, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const AYUDA = [
  {
    nombre: "Línea 105 (PNP)",
    detalle: "emergencia inmediata o delito en curso (gratis, 24 h)",
    href: "tel:105",
  },
  {
    nombre: "Línea 100 (MIMP)",
    detalle: "violencia familiar y sexual, te deriva al Centro de Emergencia Mujer más cercano (gratis, 24 h)",
    href: "tel:100",
  },
] as const;

export default function ConsentimientoPage() {
  return (
    <TopicShell
      eyebrow="Tema 2: Consentimiento y violencia sexual"
      title="Tus derechos sexuales: decidir libre e informadamente"
      icon={HeartHandshake}
      backHref="/peru"
      sourceNote="Marco legal: sentencia del Tribunal Constitucional sobre libre desarrollo de la personalidad y Kit de Violencia Sexual, Ministerio de Salud del Perú."
    >
      <p>
        Los Derechos Sexuales y Reproductivos te facultan a decidir de
        forma{" "}
        <span className="font-medium text-mahogany">
          libre, voluntaria, responsable e informada
        </span>{" "}
        sobre iniciar tu actividad sexual, o postergarla libremente. El
        Tribunal Constitucional reconoce que las relaciones voluntarias
        entre adolescentes de 14 a menores de 18 años están respaldadas
        por el derecho al libre desarrollo de la personalidad. La edad de
        consentimiento sexual en Perú es 14 años.
      </p>

      <p>
        Cualquier acto o acercamiento sexual bajo{" "}
        <span className="font-medium text-mahogany">
          violencia física o psicológica, abuso, coacción, explotación o
          trata de personas
        </span>{" "}
        no es consentimiento.
      </p>

      <p>
        Si sufriste un abuso, acude de inmediato a cualquier
        establecimiento de salud (EESS): tienen la obligación de darte
        gratis el <span className="font-medium text-mahogany">Kit de
        Violencia Sexual</span> (incluye AOE y profilaxis). También puedes
        denunciar en cualquier comisaría de la PNP, o pedir patrocinio
        legal gratuito en ALEGRA (Ministerio de Justicia).
      </p>

      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 font-semibold text-mahogany">
          <MapPin className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Dónde denunciar o pedir ayuda
        </h2>

        <ul className="flex flex-col gap-2">
          {AYUDA.map(({ nombre, detalle, href }) => (
            <li
              key={nombre}
              className="flex flex-col gap-1 rounded-2xl border border-coral/40 bg-coral/10 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm text-mahogany">{detalle}</span>
              <a
                href={href}
                className="flex shrink-0 items-center gap-2 text-sm font-medium text-coral hover:text-coral/80"
              >
                <Phone className="size-4 shrink-0" strokeWidth={1.5} />
                {nombre}
              </a>
            </li>
          ))}
          <li className="rounded-2xl border border-tobacco/30 bg-sand/50 p-4 text-sm text-mahogany">
            También puedes acudir directamente a una{" "}
            <span className="font-medium">comisaría de la PNP</span> o a un{" "}
            <span className="font-medium">Centro de Emergencia Mujer (CEM)</span>
          </li>
        </ul>

        <p className="text-sm text-mountain">
          No necesitas saber &ldquo;cómo se dice legalmente&rdquo; lo que te
          pasó. Solo cuéntalo con tus palabras, ellos te guían desde ahí.
        </p>
      </div>
    </TopicShell>
  );
}
