import { Scale, MapPin, CircleCheck, TriangleAlert, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const DERECHOS = [
  "Confidencialidad absoluta: toda consulta, diagnóstico, tratamiento y examen de salud sexual y reproductiva es un dato sensible protegido por secreto profesional",
  "Recibir información, asesoría y anticonceptivos (incluida la anticoncepción de emergencia) sin necesitar permiso, autorización o presencia de tus padres o representantes legales",
  "Que tus derechos a la información, educación y servicios de salud sexual y reproductiva prevalezcan sobre las posturas de tus padres, según la Sentencia 003-18-PJO-CC de la Corte Constitucional",
  "Acceder a servicios diferenciados y amigables para adolescentes (SAIAA)",
  "Interrumpir un embarazo producto de una violación de forma gratuita, segura y confidencial",
];

type RutaDerecho = {
  situacion: string;
  detalle: string;
  telefono?: string;
  href?: string;
};

const RUTAS_DERECHOS: RutaDerecho[] = [
  {
    situacion: "Si te niegan información o métodos anticonceptivos sin razón",
    detalle: "Línea 171, opción 2: asesoría confidencial",
    telefono: "171",
    href: "tel:171",
  },
  {
    situacion: "Si necesitas apoyo psicológico",
    detalle: "Línea 171, opción 6: primeros auxilios psicológicos, todos los días 7:00-20:00",
    telefono: "171",
    href: "tel:171",
  },
  {
    situacion: "Si necesitas asesoría legal gratuita",
    detalle: "Surkuna, CEPAM, SENDAS o Fundación Desafío te acompañan sin costo",
    telefono: "0995551789 (Surkuna, reportes de violencia de género)",
    href: "tel:+593995551789",
  },
];

export default function DerechosPage() {
  return (
    <TopicShell
      eyebrow="Tema 3: Mis derechos"
      title="Lo que la ley ecuatoriana garantiza"
      icon={Scale}
      backHref="/ecuador"
      sourceNote="Basado en la Sentencia 003-18-PJO-CC de la Corte Constitucional del Ecuador y las normativas del Ministerio de Salud Pública."
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-mahogany">En Ecuador puedes:</h2>
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
        La Corte Constitucional determina que el Estado actúa como garante
        de tu autonomía progresiva y tu interés superior: ningún centro de
        salud puede negarte atención por no ir con un adulto.
      </p>

      <div className="flex flex-col gap-2 rounded-2xl border border-tobacco/30 bg-sand/60 p-5">
        <div className="flex items-center gap-2 font-medium text-mahogany">
          <TriangleAlert className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Importante
        </div>
        <p className="text-sm text-mahogany">
          Si una agresión sexual resulta en un embarazo, tienes derecho a
          la interrupción voluntaria del embarazo (IVE) hasta las 12
          semanas de gestación. Se requiere una denuncia, una declaración
          jurada o un examen médico que acredite la violación; las semanas
          de gestación las verifica únicamente el profesional de salud.
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
