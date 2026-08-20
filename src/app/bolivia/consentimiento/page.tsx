import { HeartHandshake, MapPin, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const AYUDA = [
  {
    nombre: "FELCV",
    detalle: "atención a mujeres en situación de violencia, en todo el país (gratis, 24 h)",
    href: "tel:800140348",
  },
  {
    nombre: "Línea 156",
    detalle: "protección de niños, niñas y adolescentes (gratis, 24 h; el número puede variar según el municipio)",
    href: "tel:156",
  },
  {
    nombre: "Policía Boliviana",
    detalle: "para emergencias inmediatas",
    href: "tel:110",
  },
] as const;

export default function ConsentimientoPage() {
  return (
    <TopicShell
      eyebrow="Tema 2: Consentimiento y violencia sexual"
      title="Consentimiento: tu cuerpo, tu decisión"
      icon={HeartHandshake}
      backHref="/bolivia"
      sourceNote="Basado en 'Protegernos es cosa de tod@s' y la 'Guía de autocuidado de adolescentes', Ministerio de Salud y Deportes de Bolivia (AIDA/UNFPA)."
    >
      <p>
        El consentimiento es ejercer tus Derechos Sexuales: decidir de forma
        autónoma sobre tu cuerpo y con quién relacionarte, sin presiones ni
        violencia. Tienes derecho a decir que{" "}
        <span className="font-medium text-mahogany">no</span> en cualquier
        momento, incluso si ya has tenido relaciones antes.
      </p>

      <p>
        Cualquier acto sexual bajo coacción, amenazas, o bajo la influencia
        del alcohol o drogas{" "}
        <span className="font-medium text-mahogany">
          no es consentimiento, es abuso
        </span>
        , porque en esas condiciones no puedes elegir libremente.
      </p>

      <p>
        Si sufriste un abuso, acude de inmediato (dentro de las primeras 72
        horas) a un centro de salud. Ahí te deben dar apoyo psicológico, la
        anticoncepción de emergencia (PAE) si hay riesgo de embarazo,
        antibióticos para prevenir ITS y antirretrovirales para prevenir el
        VIH. Si el embarazo es producto de una violación, tienes derecho a
        la Interrupción Legal del Embarazo.
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
            También puedes acudir directamente a la{" "}
            <span className="font-medium">
              Defensoría de la Niñez y Adolescencia (DNA)
            </span>{" "}
            de tu municipio a poner la denuncia
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
