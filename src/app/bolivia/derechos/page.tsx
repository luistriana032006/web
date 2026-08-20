import { Scale, MapPin, CircleCheck, TriangleAlert, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const DERECHOS = [
  "Recibir información y atención en salud sexual sin que tus papás tengan que autorizarlo; la edad no es una barrera para que te den un método anticonceptivo",
  "Que toda la información que des en el centro de salud sea totalmente confidencial y privada",
  "Decidir el número de hijas/os que deseas tener y el tiempo entre un embarazo y otro",
  "Acceder a métodos de anticoncepción modernos, incluida la anticoncepción de emergencia",
  "Vivir tu sexualidad y afectividad libre de discriminación por orientación sexual o identidad de género",
];

type RutaDerecho = {
  situacion: string;
  detalle: string;
  telefono?: string;
  href?: string;
};

const RUTAS_DERECHOS: RutaDerecho[] = [
  {
    situacion: "Si te niegan la atención o te juzgan",
    detalle: "Queja ante la Defensoría del Pueblo",
    telefono: "800-10-8004",
    href: "tel:800108004",
  },
  {
    situacion: "Si necesitas apoyo legal, social o psicológico como víctima de violencia",
    detalle: "El SLIM (Servicio Legal Integral Municipal) de tu municipio lo da gratis; el número varía, contacta a tu Gobierno Autónomo Municipal",
  },
  {
    situacion: "Si no sabes a dónde ir",
    detalle: "CIES o MSI Bolivia también orientan, no hace falta estar afiliado/a a nada",
  },
];

export default function DerechosPage() {
  return (
    <TopicShell
      eyebrow="Tema 3: Mis derechos"
      title="Lo que la ley boliviana dice que SÍ puedes hacer"
      icon={Scale}
      backHref="/bolivia"
      sourceNote="Basado en la Constitución Política del Estado, la Ley N° 548 (Código Niña, Niño y Adolescente) y 'Protegernos es cosa de tod@s', Ministerio de Salud y Deportes de Bolivia."
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-mahogany">
          Según el Art. 66 de la Constitución y la Ley N° 548, puedes:
        </h2>
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
        Ningún centro de salud puede negarte atención por no tener la
        autorización de un adulto, ni puede juzgarte por pedir esta
        información.
      </p>

      <div className="flex flex-col gap-2 rounded-2xl border border-tobacco/30 bg-sand/60 p-5">
        <div className="flex items-center gap-2 font-medium text-mahogany">
          <TriangleAlert className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Importante
        </div>
        <p className="text-sm text-mahogany">
          El aborto es legal en Bolivia en caso de violación, rapto seguido
          de matrimonio, estupro o incesto, o cuando la salud de la madre
          está en peligro (Art. 266 del Código Penal). Solo se requiere
          llenar un formulario en el centro de salud solicitando la
          interrupción legal del embarazo por una de esas causas (Sentencia
          Constitucional 0206/2014).
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
