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
    destino: "EESS público / Servicios Diferenciados para Adolescentes",
    contacto: "Línea 113, opción 3",
    icon: Phone,
    href: "tel:113",
  },
  {
    situacion: "Emergencia inmediata o delito en curso",
    destino: "Policía Nacional del Perú (PNP)",
    contacto: "Línea 105, gratis, 24 horas",
    icon: Phone,
    href: "tel:105",
    urgente: true,
  },
  {
    situacion: "Violencia familiar o sexual",
    destino: "MIMP",
    contacto: "Línea 100, gratis, 24 horas",
    icon: Phone,
    href: "tel:100",
    urgente: true,
  },
  {
    situacion: "Agresión sexual reciente",
    destino: "EESS más cercano / Centro de Emergencia Mujer (Kit de Violencia Sexual)",
    contacto: "Línea 100 te deriva al CEM más cercano",
    icon: Phone,
    href: "tel:100",
    urgente: true,
  },
  {
    situacion: "Asesoría legal gratuita",
    destino: "ALEGRA (Ministerio de Justicia)",
    contacto: "Fono ALEGRA 1884",
    icon: Phone,
    href: "tel:1884",
  },
];

export default function RutasDeAtencionPage() {
  return (
    <TopicShell
      eyebrow="Tema 4: Rutas de atención"
      title="A dónde ir si necesitas ayuda"
      icon={MapPinned}
      backHref="/peru"
      sourceNote="Rutas y marco legal: MINSA, MIMP y Ministerio de Justicia del Perú."
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
