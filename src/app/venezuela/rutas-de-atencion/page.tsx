import { MapPinned, Phone, Globe, MessageCircle, type LucideIcon } from "lucide-react";
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
    destino: "Red pública MPPS / PLAFAM",
    contacto: "plafam.org.ve",
    icon: Globe,
    href: "https://plafam.org.ve",
  },
  {
    situacion: "Violencia de género o abuso sexual",
    destino: "Línea 0800-Mujeres",
    contacto: "0800-685-3737, gratis, 24 horas",
    icon: Phone,
    href: "tel:08006853737",
    urgente: true,
  },
  {
    situacion: "Niño, niña o adolescente en riesgo",
    destino: "IDENNA",
    contacto: "+58 424-893-0561, solo WhatsApp o SMS",
    icon: MessageCircle,
    href: "https://wa.me/584248930561",
    urgente: true,
  },
  {
    situacion: "Asesoría en derechos sexuales y reproductivos",
    destino: "CEDESEX",
    contacto: "cedesex.org",
    icon: Globe,
    href: "https://cedesex.org",
  },
];

export default function RutasDeAtencionPage() {
  return (
    <TopicShell
      eyebrow="Tema 4: Rutas de atención"
      title="A dónde ir si necesitas ayuda"
      icon={MapPinned}
      backHref="/venezuela"
      sourceNote="Rutas y marco legal: MPPS, MinMujer/Inamujer e IDENNA. Línea IDENNA verificada como WhatsApp/SMS, no telefónica."
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
