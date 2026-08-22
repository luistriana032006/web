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
    destino: "Centro de Salud del MSP / SAIAA",
    contacto: "Línea 171, opción 2",
    icon: Phone,
    href: "tel:171",
  },
  {
    situacion: "Emergencia inmediata o agresión activa",
    destino: "ECU 911",
    contacto: "911, gratis, 24 horas",
    icon: Phone,
    href: "tel:911",
    urgente: true,
  },
  {
    situacion: "Apoyo psicológico o crisis emocional",
    destino: "Línea 171, opción 6",
    contacto: "171, gratis, todos los días 7:00-20:00",
    icon: Phone,
    href: "tel:171",
    urgente: true,
  },
  {
    situacion: "Agresión sexual reciente (menos de 72 horas)",
    destino: "Sala de Primera Acogida (Código Púrpura)",
    contacto: "Acude de inmediato",
    icon: Globe,
    href: "https://www.salud.gob.ec/de-la-indignacion-a-la-accion-msp-con-el-apoyo-de-oim-entrego-salas-de-primera-acogida-para-atender-a-victimas-de-violencia/",
    urgente: true,
  },
  {
    situacion: "Denunciar violencia de género o sexual",
    destino: "Fiscalía General del Estado",
    contacto: "Formulario en línea, fiscalia.gob.ec",
    icon: Globe,
    href: "https://www.fiscalia.gob.ec/denuncia-en-linea-de-violencia-basada-en-genero/",
  },
  {
    situacion: "Asesoría legal y psicológica gratuita",
    destino: "Surkuna",
    contacto: "0995551789 · surkuna.org",
    icon: Phone,
    href: "tel:+593995551789",
  },
];

export default function RutasDeAtencionPage() {
  return (
    <TopicShell
      eyebrow="Tema 4: Rutas de atención"
      title="A dónde ir si necesitas ayuda"
      icon={MapPinned}
      backHref="/ecuador"
      sourceNote="Rutas y marco legal: Ministerio de Salud Pública y Fiscalía General del Estado de Ecuador."
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
