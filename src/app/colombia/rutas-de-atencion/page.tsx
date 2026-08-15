import { MapPinned, Phone, Globe, type LucideIcon } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

type Ruta = {
  situacion: string;
  destino: string;
  contacto: string;
  icon: LucideIcon;
  href: string;
  urgente?: boolean;
};

const RUTAS: Ruta[] = [
  {
    situacion: "Info o método anticonceptivo",
    destino: "Tu IPS primaria (EPS) o Profamilia",
    contacto: "300 912 4560",
    icon: Phone,
    href: "tel:3009124560",
  },
  {
    situacion: "Hablar de violencia sexual",
    destino: "Línea 155",
    contacto: "Gratis, 24 horas",
    icon: Phone,
    href: "tel:155",
    urgente: true,
  },
  {
    situacion: "Protección si soy menor de edad",
    destino: "ICBF",
    contacto: "Línea 141, gratis, 24 horas",
    icon: Phone,
    href: "tel:141",
    urgente: true,
  },
  {
    situacion: "Emergencia inmediata",
    destino: "Policía Nacional",
    contacto: "Línea 123",
    icon: Phone,
    href: "tel:123",
    urgente: true,
  },
  {
    situacion: "Asesoría confidencial en salud sexual (incl. VIH/ITS)",
    destino: "Profamilia",
    contacto: "profamilia.org.co / 300 912 4560",
    icon: Globe,
    href: "https://profamilia.org.co",
  },
  {
    situacion: "Mi EPS me negó un servicio o me juzgó",
    destino: "Superintendencia Nacional de Salud",
    contacto: "01 8000 513700",
    icon: Phone,
    href: "tel:018000513700",
  },
];

export default function RutasDeAtencionPage() {
  return (
    <TopicShell
      eyebrow="Tema 4: Rutas de atención"
      title="A dónde ir si necesitas ayuda"
      icon={MapPinned}
    >
      <ul className="flex flex-col gap-3">
        {RUTAS.map(({ situacion, destino, contacto, icon: Icon, href, urgente }) => (
          <li
            key={situacion}
            className={
              urgente
                ? "flex flex-col gap-2 rounded-2xl border border-coral/40 bg-coral/10 p-5"
                : "flex flex-col gap-2 rounded-2xl border border-tobacco/30 bg-sand/50 p-5"
            }
          >
            <span className="text-sm font-medium text-mahogany">{situacion}</span>
            <span className="text-sm text-mountain">{destino}</span>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={
                urgente
                  ? "flex w-fit items-center gap-2 text-sm font-medium text-coral hover:text-coral/80"
                  : "flex w-fit items-center gap-2 text-sm font-medium text-terracota hover:text-terracota/80"
              }
            >
              <Icon className="size-4 shrink-0" strokeWidth={1.5} />
              {contacto}
            </a>
          </li>
        ))}
      </ul>
    </TopicShell>
  );
}
