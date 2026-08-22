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
    destino: "CESFAM / Espacios Amigables para Adolescentes",
    contacto: "Salud Responde: 600 360 7777",
    icon: Phone,
    href: "tel:6003607777",
  },
  {
    situacion: "Hablar de violencia sexual o de género",
    destino: "Fono Orientación en Violencias de Género",
    contacto: "Línea 1455, gratis",
    icon: Phone,
    href: "tel:1455",
    urgente: true,
  },
  {
    situacion: "Agresión sexual reciente (menos de 72 horas)",
    destino: "Unidad de Emergencia Hospitalaria (Garantía GES 86)",
    contacto: "Acude de inmediato",
    icon: Globe,
    href: "https://www.superdesalud.gob.cl/orientacion-en-salud/atencion-integral-de-salud-en-agresion-sexual-aguda/",
    urgente: true,
  },
  {
    situacion: "Emergencia inmediata o delito en curso",
    destino: "Carabineros de Chile",
    contacto: "Línea 133, gratis, 24 horas",
    icon: Phone,
    href: "tel:133",
    urgente: true,
  },
  {
    situacion: "Crisis emocional severa",
    destino: "Línea de Prevención del Suicidio",
    contacto: "*4141, gratis",
    icon: Phone,
    href: "tel:*4141",
    urgente: true,
  },
  {
    situacion: "Asesoría confidencial en salud sexual (incl. VIH/ITS)",
    destino: "CEMERA / APROFA",
    contacto: "cemera.uchile.cl / aprofa.cl",
    icon: Globe,
    href: "https://aprofa.cl",
  },
  {
    situacion: "Apoyo psicológico en línea, gratuito",
    destino: "Chat INJUV",
    contacto: "hablemosdetodo.injuv.gob.cl",
    icon: Globe,
    href: "https://hablemosdetodo.injuv.gob.cl",
  },
];

export default function RutasDeAtencionPage() {
  return (
    <TopicShell
      eyebrow="Tema 4: Rutas de atención"
      title="A dónde ir si necesitas ayuda"
      icon={MapPinned}
      backHref="/chile"
      sourceNote="Rutas y marco legal: Ministerio de Salud de Chile y Ministerio de la Mujer y la Equidad de Género. Línea 133 (Carabineros): ChileAtiende."
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
