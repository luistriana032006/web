import { HeartHandshake, MapPin, Phone, Globe, type LucideIcon } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

type Ayuda = {
  nombre: string;
  detalle: string;
  href: string;
  icon: LucideIcon;
};

const AYUDA: Ayuda[] = [
  {
    nombre: "ECU 911",
    detalle: "riesgo inminente, peligro físico o agresión activa (gratis, 24 h)",
    href: "tel:911",
    icon: Phone,
  },
  {
    nombre: "Línea 171, opción 6",
    detalle: "apoyo emocional y primeros auxilios psicológicos (gratis, todos los días 7:00-20:00)",
    href: "tel:171",
    icon: Phone,
  },
  {
    nombre: "Fiscalía: denuncia en línea",
    detalle: "formulario de denuncia de violencia basada en género, confidencial",
    href: "https://www.fiscalia.gob.ec/denuncia-en-linea-de-violencia-basada-en-genero/",
    icon: Globe,
  },
];

export default function ConsentimientoPage() {
  return (
    <TopicShell
      eyebrow="Tema 2: Consentimiento y violencia sexual"
      title="Consentimiento: libre, entusiasta, específico, reversible e informado"
      icon={HeartHandshake}
      backHref="/ecuador"
      sourceNote="Marco legal y protocolo: Código Púrpura/Kit Púrpura y ley de interrupción voluntaria del embarazo por violación, Ministerio de Salud Pública de Ecuador."
    >
      <p>
        Consentir es la manifestación de voluntad para participar en una
        actividad sexual. Debe ser{" "}
        <span className="font-medium text-mahogany">
          libre, entusiasta, específico, reversible e informado
        </span>
        : aceptar una práctica no obliga a aceptar otra, y puedes decir
        &ldquo;no&rdquo; o &ldquo;basta&rdquo; en cualquier momento, incluso
        si ya empezaron.
      </p>

      <p>
        Cualquier contacto sexual bajo amenazas, chantaje, manipulación o
        coerción{" "}
        <span className="font-medium text-mahogany">no es consentimiento</span>
        . En Ecuador, cualquier relación sexual con una persona menor de 14
        años se considera legalmente violación: a esa edad no hay
        capacidad legal para consentir.
      </p>

      <p>
        Si sufriste una agresión sexual, acude de inmediato (idealmente
        dentro de las primeras 72 horas) al centro de salud u hospital más
        cercano. Ahí se activa el{" "}
        <span className="font-medium text-mahogany">Código Púrpura</span>:
        primeros auxilios psicológicos y entrega del Kit Púrpura, que
        incluye gratis la anticoncepción de emergencia, antibióticos para
        prevenir ITS y antirretrovirales para prevenir el VIH. Si la
        agresión resulta en embarazo, tienes derecho a interrumpirlo gratis,
        de forma segura y confidencial, hasta las 12 semanas de gestación.
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
        </ul>

        <p className="text-sm text-mountain">
          No necesitas saber &ldquo;cómo se dice legalmente&rdquo; lo que te
          pasó. Solo cuéntalo con tus palabras, ellos te guían desde ahí.
        </p>
      </div>
    </TopicShell>
  );
}
