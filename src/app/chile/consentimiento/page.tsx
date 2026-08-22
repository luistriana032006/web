import { HeartHandshake, MapPin, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const AYUDA = [
  {
    nombre: "Fono 1455",
    detalle: "orientación en violencia de género (gratis, lunes a domingo 8:00-00:00)",
    href: "tel:1455",
  },
  {
    nombre: "WhatsApp Silencioso",
    detalle: "orientación discreta, Ministerio de la Mujer y la Equidad de Género",
    href: "https://wa.me/56997007000",
  },
  {
    nombre: "Carabineros 133",
    detalle: "emergencia inmediata o delito en curso (gratis, 24 h)",
    href: "tel:133",
  },
] as const;

export default function ConsentimientoPage() {
  return (
    <TopicShell
      eyebrow="Tema 2: Consentimiento y violencia sexual"
      title="Consentimiento: tu cuerpo, tu decisión"
      icon={HeartHandshake}
      backHref="/chile"
      sourceNote="Marco legal: Ley 21.030 (IVE tres causales) y Garantía GES 86 (agresión sexual aguda), Ministerio de Salud de Chile."
    >
      <p>
        Consentir es decidir de forma{" "}
        <span className="font-medium text-mahogany">
          libre, informada y voluntaria
        </span>{" "}
        con quién, cómo y cuándo relacionarte sexualmente, sin presiones ni
        violencia. La ley chilena establece que cualquier relación sexual
        con una persona menor de 14 años se considera legalmente violación:
        a esa edad no existe la madurez legal para consentir.
      </p>

      <p>
        Si sufriste una agresión sexual reciente (menos de 72 horas), está
        cubierta por la{" "}
        <span className="font-medium text-mahogany">Garantía GES 86</span>:
        acude de inmediato a una Unidad de Emergencia Hospitalaria. Por ley
        te deben dar acogida y primeros auxilios psicológicos, tomar
        muestras bajo cadena de custodia, entregarte profilaxis para VIH e
        ITS y administrarte la anticoncepción de emergencia (PAE). Si eres
        menor de 18 años, el equipo de salud debe notificar a la policía;
        si eres mayor de 18, la denuncia se hace solo si tú lo consientes.
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
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex shrink-0 items-center gap-2 text-sm font-medium text-coral hover:text-coral/80"
              >
                <Phone className="size-4 shrink-0" strokeWidth={1.5} />
                {nombre}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-mountain">
          La Ley 21.030 también te da derecho a interrumpir un embarazo
          producto de una violación (hasta las 12 semanas, o 14 si tienes
          menos de 14 años), con acompañamiento psicosocial gratuito. No
          necesitas saber &ldquo;cómo se dice legalmente&rdquo; lo que te
          pasó, solo cuéntalo con tus palabras.
        </p>
      </div>
    </TopicShell>
  );
}
