import { HeartHandshake, MapPin, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const AYUDA = [
  {
    nombre: "Línea 155",
    detalle: "atención a mujeres víctimas de violencia, en todo el país (gratis, 24 h)",
    href: "tel:155",
  },
  {
    nombre: "Línea 123",
    detalle: "Policía Nacional, para emergencias inmediatas",
    href: "tel:123",
  },
  {
    nombre: "ICBF — Línea 141",
    detalle: "si eres menor de edad y necesitas protección (gratis, 24 h)",
    href: "tel:141",
  },
] as const;

export default function ConsentimientoPage() {
  return (
    <TopicShell
      eyebrow="Tema 2 — Consentimiento y violencia sexual"
      title="Consentimiento: tu cuerpo, tu decisión"
      icon={HeartHandshake}
    >
      <p>
        Consentir es decir que sí, de forma libre, consciente y sin
        presión. Si alguien te obliga, te manipula, te chantajea o
        aprovecha una diferencia de poder (edad, autoridad, dinero) para que
        digas que sí,{" "}
        <span className="font-medium text-neutral-900">
          eso no es consentimiento — es abuso
        </span>
        .
      </p>

      <p>
        En Colombia, la ley reconoce que los adolescentes tienen derecho a
        decidir sobre su cuerpo según su edad y madurez. Nadie —ni un
        familiar, ni una pareja, ni un profesor— tiene derecho a forzarte a
        nada.
      </p>

      <p>
        Si algo así te ha pasado o le pasó a alguien que conoces, no es tu
        culpa y hay ayuda real disponible.
      </p>

      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 font-semibold text-neutral-900">
          <MapPin className="size-5 shrink-0 text-emerald-600" strokeWidth={1.5} />
          Dónde denunciar o pedir ayuda
        </h2>

        <ul className="flex flex-col gap-2">
          {AYUDA.map(({ nombre, detalle, href }) => (
            <li
              key={nombre}
              className="flex flex-col gap-1 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm text-neutral-600">{detalle}</span>
              <a
                href={href}
                className="flex shrink-0 items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900"
              >
                <Phone className="size-4 shrink-0" strokeWidth={1.5} />
                {nombre}
              </a>
            </li>
          ))}
          <li className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600">
            También puedes acudir directamente a una{" "}
            <span className="font-medium text-neutral-900">Comisaría de Familia</span>{" "}
            o a la <span className="font-medium text-neutral-900">Fiscalía</span> más
            cercana a poner la denuncia
          </li>
        </ul>

        <p className="text-sm text-neutral-500">
          No necesitas saber &ldquo;cómo se dice legalmente&rdquo; lo que te
          pasó — solo cuéntalo con tus palabras, ellos te guían desde ahí.
        </p>
      </div>
    </TopicShell>
  );
}
