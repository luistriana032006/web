import { MapPinned, Phone, Globe, Stethoscope } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const RUTAS = [
  {
    situacion: "Quiero info o un método anticonceptivo",
    destino: "Tu EPS o Profamilia",
    icon: Stethoscope,
    href: undefined,
  },
  {
    situacion: "Necesito hablar de algo relacionado con violencia sexual",
    destino: "Línea 155 (gratis, 24 h)",
    icon: Phone,
    href: "tel:155",
  },
  {
    situacion: "Soy menor de edad y necesito protección",
    destino: "ICBF — Línea 141 (gratis, 24 h)",
    icon: Phone,
    href: "tel:141",
  },
  {
    situacion: "Quiero asesoría confidencial (incluye VIH/ITS)",
    destino: "Profamilia — profamilia.org.co",
    icon: Globe,
    href: "https://profamilia.org.co",
  },
] as const;

export default function RutasDeAtencionPage() {
  return (
    <TopicShell title="Rutas de atención" icon={MapPinned}>
      <p>Si necesitas ayuda, aquí es a dónde ir:</p>

      <ul className="flex flex-col gap-3">
        {RUTAS.map(({ situacion, destino, icon: Icon, href }) => (
          <li
            key={situacion}
            className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-sm text-neutral-600">{situacion}</span>
            {href ? (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex shrink-0 items-center gap-2 font-medium text-emerald-700 hover:text-emerald-900"
              >
                <Icon className="size-4 shrink-0" strokeWidth={1.5} />
                {destino}
              </a>
            ) : (
              <span className="flex shrink-0 items-center gap-2 font-medium text-neutral-900">
                <Icon className="size-4 shrink-0" strokeWidth={1.5} />
                {destino}
              </span>
            )}
          </li>
        ))}
      </ul>
    </TopicShell>
  );
}
