import { Scale, MapPin, CircleCheck, TriangleAlert, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const DERECHOS = [
  "Pedir información y atención en salud sexual sin que tus papás tengan que saberlo, si tú no quieres. Así lo establece la Resolución 309 de 2025 del Ministerio de Salud",
  "Pedir una cita médica tú mismo/a, sin necesitar que un adulto te acompañe o autorice",
  "Recibir la vacuna del VPH dando tu propio consentimiento",
  "Pedir asesoría y una prueba de VIH u otras infecciones de transmisión sexual de forma gratuita y confidencial, sin que nadie más se entere, ni siquiera tu familia, si tú no quieres. Esto aplica sin importar tu edad, no solo desde los 14",
  "Que el resultado de esa prueba sea confidencial, incluso frente a tu familia, si tú decides que así sea",
];

type RutaDerecho = {
  situacion: string;
  detalle: string;
  telefono?: string;
  href?: string;
};

const RUTAS_DERECHOS: RutaDerecho[] = [
  {
    situacion: "Para pedir atención en salud sexual sin que tu familia se entere",
    detalle:
      "Ve directamente a tu IPS primaria y pide cita de medicina general o consulta de salud sexual: no tienen por qué decirle nada a tus representantes legales",
  },
  {
    situacion: "Si te niegan la atención o te juzgan",
    detalle: "Queja ante la Superintendencia Nacional de Salud",
    telefono: "01 8000 513700",
    href: "tel:018000513700",
  },
  {
    situacion: "Si no tienes EPS o no sabes cómo acceder",
    detalle: "Profamilia orienta y atiende igual, línea nacional",
    telefono: "300 912 4560",
    href: "tel:3009124560",
  },
];

export default function DerechosPage() {
  return (
    <TopicShell
      eyebrow="Tema 3: Mis derechos"
      title="Lo que la ley dice que SÍ puedes hacer"
      icon={Scale}
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-mahogany">
          Desde los 14 años, en Colombia puedes:
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
        Ningún centro de salud puede negarte atención por no tener el
        documento de identidad de tus representantes legales, ni puede
        juzgarte por pedir esta información.
      </p>

      <p>
        La ley colombiana también reconoce que las adolescentes tienen
        derecho a decidir sobre la interrupción voluntaria del embarazo,
        considerando su autonomía según su edad y madurez. Si esta es una
        situación que estás viviendo, puedes buscar orientación
        confidencial en Profamilia o en tu centro de salud más cercano.
      </p>

      <div className="flex flex-col gap-2 rounded-2xl border border-tobacco/30 bg-sand/60 p-5">
        <div className="flex items-center gap-2 font-medium text-mahogany">
          <TriangleAlert className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Importante
        </div>
        <p className="text-sm text-mahogany">
          Si tienes entre 12 y 14 años y ya iniciaste relaciones sexuales,
          la ley activa rutas de protección con el ICBF, no como castigo,
          sino porque a esa edad la ley busca protegerte de situaciones de
          riesgo. Esto no es una amenaza, es un recurso que existe para
          cuidarte.
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
