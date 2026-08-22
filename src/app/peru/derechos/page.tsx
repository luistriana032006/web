import { Scale, MapPin, CircleCheck, TriangleAlert, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const DERECHOS = [
  "Confidencialidad en los Servicios Diferenciados para Adolescentes de tu establecimiento de salud, vayas solo/a o acompañado/a",
  "Acceder a métodos anticonceptivos y consejería en salud sexual y reproductiva sin necesitar autorización de tus padres o representantes legales (Norma Técnica RM 652-2016-MINSA)",
  "Que tu derecho al libre desarrollo de la personalidad sea reconocido entre los 14 y menores de 18 años, según la sentencia del Tribunal Constitucional",
  "Que tus derechos sexuales y reproductivos estén reconocidos en el Art. 7° de la Constitución y el Art. 21° del Código de los Niños y Adolescentes",
  "Acceder gratis a la anticoncepción oral de emergencia (AOE), garantizada por mandato judicial",
];

type RutaDerecho = {
  situacion: string;
  detalle: string;
  telefono?: string;
  href?: string;
};

const RUTAS_DERECHOS: RutaDerecho[] = [
  {
    situacion: "Si necesitas asesoría legal gratuita",
    detalle: "Fono ALEGRA: opción 1 asistencia legal, opción 2 defensa penal",
    telefono: "1884",
    href: "tel:1884",
  },
  {
    situacion: "Si eres niño, niña o adolescente y necesitas protección",
    detalle: "DEMUNA de tu municipio",
  },
  {
    situacion: "Si tienes dudas sobre métodos anticonceptivos o tus derechos",
    detalle: "Línea 113, opción 3, gratis, 24 h",
    telefono: "113",
    href: "tel:113",
  },
];

export default function DerechosPage() {
  return (
    <TopicShell
      eyebrow="Tema 3: Mis derechos"
      title="Lo que la ley peruana garantiza"
      icon={Scale}
      backHref="/peru"
      sourceNote="Basado en la Constitución Política del Perú, el Código de los Niños y Adolescentes y la Norma Técnica RM 652-2016-MINSA."
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-mahogany">En Perú puedes:</h2>
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
        No es obligatorio ir con tus padres o tutores para recibir
        atención en salud: tienes plena autonomía para asistir a tus citas
        médicas por tu cuenta.
      </p>

      <div className="flex flex-col gap-2 rounded-2xl border border-tobacco/30 bg-sand/60 p-5">
        <div className="flex items-center gap-2 font-medium text-mahogany">
          <TriangleAlert className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Importante
        </div>
        <p className="text-sm text-mahogany">
          La edad de consentimiento sexual en Perú es 14 años (Art. 173-A
          del Código Penal). Hay un proyecto de ley en el Congreso para
          subirla a 16 años, pero solo fue aprobado en comisión: todavía
          no es ley.
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
