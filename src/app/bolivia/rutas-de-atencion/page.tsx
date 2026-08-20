import { MapPinned, Phone, type LucideIcon } from "lucide-react";
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
    destino: "Centro de salud pública / servicios AIDA / CIES / MSI Bolivia",
    contacto: "Gratis en centros públicos",
    icon: Phone,
    href: "tel:50850060",
  },
  {
    situacion: "Hablar de violencia sexual o de género",
    destino: "FELCV",
    contacto: "Línea 800 14 0348, gratis, 24 horas",
    icon: Phone,
    href: "tel:800140348",
    urgente: true,
  },
  {
    situacion: "Protección si soy niño, niña o adolescente",
    destino: "Línea 156 / Defensoría de la Niñez y Adolescencia",
    contacto: "Línea 156, gratis, 24 horas (varía por municipio)",
    icon: Phone,
    href: "tel:156",
    urgente: true,
  },
  {
    situacion: "Emergencia inmediata",
    destino: "Policía Boliviana",
    contacto: "Línea 110",
    icon: Phone,
    href: "tel:110",
    urgente: true,
  },
  {
    situacion: "Asesoría confidencial en salud sexual",
    destino: "CIES (La Paz, Santa Cruz, Cochabamba)",
    contacto: "cies.org.bo",
    icon: Phone,
    href: "tel:+59122485111",
  },
  {
    situacion: "Me negaron atención o me juzgaron en un centro de salud",
    destino: "Defensoría del Pueblo",
    contacto: "Línea 800-10-8004 / WhatsApp 72006607",
    icon: Phone,
    href: "tel:800108004",
  },
];

export default function RutasDeAtencionPage() {
  return (
    <TopicShell
      eyebrow="Tema 4: Rutas de atención"
      title="A dónde ir si necesitas ayuda"
      icon={MapPinned}
      backHref="/bolivia"
      sourceNote="Rutas y marco legal: Ministerio de Salud y Deportes de Bolivia. Teléfonos: búsqueda en páginas oficiales, ver bolivia_fuentes_internet.md."
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
