import { Scale, MapPin, CircleCheck, TriangleAlert, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const DERECHOS = [
  "Confidencialidad estricta: está prohibido, bajo multas severas, que revelen datos o imágenes que te identifiquen",
  "Acceder sin autorización de un adulto desde los 14 años, según el Artículo 50 de la LOPNNA",
  "Decidir libremente el número y espaciamiento de los hijos que deseas tener",
  "Recibir educación sexual laica y científica",
  "Un ejercicio sexual placentero, independiente de la reproducción y libre de violencia",
];

type RutaDerecho = {
  situacion: string;
  detalle: string;
  telefono?: string;
  href?: string;
};

const RUTAS_DERECHOS: RutaDerecho[] = [
  {
    situacion: "Si necesitas atención psicológica, jurídica o ginecológica gratuita",
    detalle: "CAFIM (Inamujer/MinMujer)",
  },
  {
    situacion: "Si eres niño, niña o adolescente y necesitas protección",
    detalle: "Consejo de Protección de Niños, Niñas y Adolescentes de tu municipio",
  },
  {
    situacion: "Si necesitas orientación por violencia de género",
    detalle: "Línea 0800-Mujeres, gratis, 24 h",
    telefono: "0800-685-3737",
    href: "tel:08006853737",
  },
];

export default function DerechosPage() {
  return (
    <TopicShell
      eyebrow="Tema 3: Mis derechos"
      title="Lo que la ley venezolana garantiza"
      icon={Scale}
      backHref="/venezuela"
      sourceNote="Basado en la Ley Orgánica para la Protección de Niños, Niñas y Adolescentes (LOPNNA) y el Código Penal de Venezuela."
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-mahogany">En Venezuela puedes:</h2>
        <ul className="flex flex-col gap-3">
          {DERECHOS.map((derecho) => (
            <li key={derecho} className="flex gap-3">
              <CircleCheck className="mt-0.5 size-5 shrink-0 text-sage" strokeWidth={1.5} />
              <span>{derecho}</span>
            </li>
          ))}
        </ul>
      </div>

      <p>
        Bajo los 14 años se requiere el consentimiento de tu representante
        para acceder a estos servicios, pero siempre debe prevalecer tu
        interés superior como adolescente.
      </p>

      <div className="flex flex-col gap-2 rounded-2xl border border-tobacco/30 bg-sand/60 p-5">
        <div className="flex items-center gap-2 font-medium text-mahogany">
          <TriangleAlert className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Importante
        </div>
        <p className="text-sm text-mahogany">
          El Código Penal venezolano establece que cualquier relación
          sexual con una persona menor de 13 años se considera acto carnal
          con víctima especialmente vulnerable, sin importar si hubo
          aparente acuerdo.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 font-semibold text-mahogany">
          <MapPin className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Dónde hacer valer estos derechos
        </h2>

        <ul className="flex flex-col gap-2">
          {RUTAS_DERECHOS.map(({ situacion, detalle, telefono, href }) => (
            <li
              key={situacion}
              className="flex flex-col gap-1 rounded-2xl border border-tobacco/30 bg-sand/50 p-4"
            >
              <span className="text-sm font-medium text-mahogany">{situacion}</span>
              <span className="text-sm text-mountain">{detalle}</span>
              {href && (
                <a
                  href={href}
                  className="mt-1 flex items-center gap-2 text-sm font-medium text-terracota hover:text-terracota/80"
                >
                  <Phone className="size-4 shrink-0" strokeWidth={1.5} />
                  {telefono}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </TopicShell>
  );
}
