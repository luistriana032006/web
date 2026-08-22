import { HeartHandshake, MapPin, Phone, MessageCircle, type LucideIcon } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

type Ayuda = {
  nombre: string;
  detalle: string;
  href: string;
  icon: LucideIcon;
};

const AYUDA: Ayuda[] = [
  {
    nombre: "Línea 0800-Mujeres",
    detalle: "atención psicológica primaria, violencia de género (gratis, 24 h)",
    href: "tel:08006853737",
    icon: Phone,
  },
  {
    nombre: "IDENNA",
    detalle: "niños, niñas o adolescentes en riesgo (solo WhatsApp o SMS, 24 h)",
    href: "https://wa.me/584248930561",
    icon: MessageCircle,
  },
];

export default function ConsentimientoPage() {
  return (
    <TopicShell
      eyebrow="Tema 2: Consentimiento y violencia sexual"
      title="Consentimiento: voluntario, autónomo e informado"
      icon={HeartHandshake}
      backHref="/venezuela"
      sourceNote="Marco legal: Código Penal venezolano y LOPNNA. Línea IDENNA verificada como canal de WhatsApp/SMS, no telefónico."
    >
      <p>
        El consentimiento es la manifestación{" "}
        <span className="font-medium text-mahogany">
          voluntaria y autónoma
        </span>
        , basada en información oportuna y veraz. Toda actividad sexual
        debe ser deseada y decidida libre de interferencias, coacciones o
        violencia.
      </p>

      <p>
        Cualquier contacto o acceso sexual (genital o no) bajo{" "}
        <span className="font-medium text-mahogany">
          amenaza, fuerza física, manipulación, chantaje o coacción
        </span>{" "}
        no es consentimiento. Legalmente, cualquier relación sexual con
        una persona menor de 13 años se considera acto carnal con víctima
        especialmente vulnerable.
      </p>

      <p>
        Si sufriste una agresión sexual: ve a un entorno seguro y acude de
        inmediato a un establecimiento de salud (examen físico, apoyo
        emocional, anticoncepción de emergencia, profilaxis contra ITS y,
        en casos agudos, antirretrovirales para prevenir el VIH). En casos
        recientes (menos de 48 horas), no te laves, no te cambies de ropa
        ni te apliques duchas vaginales antes del examen forense.
        Denuncia lo antes posible ante el CICPC o la Fiscalía.
      </p>

      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 font-semibold text-mahogany">
          <MapPin className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Dónde denunciar o pedir ayuda
        </h2>

        <ul className="flex flex-col gap-2">
          {AYUDA.map(({ nombre, detalle, href, icon: Icon }) => (
            <li
              key={nombre}
              className="flex flex-col gap-1 rounded-2xl border border-coral/40 bg-coral/10 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm text-mahogany">{detalle}</span>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex shrink-0 items-center gap-2 text-sm font-medium text-coral hover:text-coral/80"
              >
                <Icon className="size-4 shrink-0" strokeWidth={1.5} />
                {nombre}
              </a>
            </li>
          ))}
          <li className="rounded-2xl border border-tobacco/30 bg-sand/50 p-4 text-sm text-mahogany">
            También puedes acudir directamente al{" "}
            <span className="font-medium">CICPC</span> o a la{" "}
            <span className="font-medium">Fiscalía</span> más cercana
          </li>
        </ul>

        <p className="text-sm text-mountain">
          No necesitas saber &ldquo;cómo se dice legalmente&rdquo; lo que
          te pasó. Solo cuéntalo con tus palabras, ellos te guían desde
          ahí.
        </p>
      </div>
    </TopicShell>
  );
}
