import { ShieldCheck, MapPin, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const MITOS = [
  {
    mito: "“En la primera relación sexual no hay riesgo de embarazo”",
    real: "falso, si hay ovulación el riesgo es el mismo que en cualquier otra relación",
  },
  {
    mito: "“El lavado vaginal después del coito previene el embarazo”",
    real: "falso, los espermatozoides ingresan muy rápido a los órganos internos",
  },
  {
    mito: "“El coito interrumpido (terminar afuera) es seguro”",
    real: "falso, el líquido preseminal ya contiene espermatozoides",
  },
  {
    mito: "“Tener relaciones de pie impide el embarazo”",
    real: "falso, la posición física no influye",
  },
  {
    mito: "“El uso prolongado de anticonceptivos o la AOE causan esterilidad”",
    real: "falso, la fertilidad se recupera al suspenderlos",
  },
  {
    mito: "“La pastilla de emergencia (AOE) es abortiva”",
    real: "falso, retrasa o interfiere la ovulación; no interrumpe un embarazo ya establecido",
  },
  {
    mito: "“El DIU pincha al hombre o se mueve al estómago”",
    real: "falso, se coloca en el útero por un profesional, no se oxida ni se mueve a otros órganos",
  },
  {
    mito: "“Usar doble condón es más seguro”",
    real: "falso, el roce entre ambos puede romperlos; nunca se usan dos a la vez",
  },
  {
    mito: "“La píldora solo se toma los días que hay relaciones”",
    real: "falso, debe tomarse todos los días a la misma hora",
  },
];

export default function AnticoncepcionPage() {
  return (
    <TopicShell
      eyebrow="Tema 1: Anticoncepción sin mitos"
      title="Métodos anticonceptivos: la info real, sin mitos"
      icon={ShieldCheck}
      backHref="/ecuador"
      sourceNote="Basado en las normativas y protocolos del Ministerio de Salud Pública (MSP) de Ecuador."
    >
      <p>
        En Ecuador tienes derecho a acceder de forma autónoma a métodos
        anticonceptivos temporales o definitivos: condón masculino y
        femenino, píldoras (combinadas o de solo progestina), inyectables
        (mensual o trimestral), implante subdérmico, DIU (T de cobre o de
        levonorgestrel), anticoncepción oral de emergencia (AOE), y
        métodos definitivos (ligadura de trompas, vasectomía). Todos son{" "}
        <span className="font-medium text-mahogany">
          gratuitos en el Ministerio de Salud Pública
        </span>
        .
      </p>

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-mahogany">Mitos desmentidos por la ciencia</h2>
        <ul className="flex flex-col gap-2 pl-5 text-sm">
          {MITOS.map(({ mito, real }) => (
            <li key={mito} className="list-disc">
              <span className="font-medium">{mito}:</span> {real}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 font-semibold text-mahogany">
          <MapPin className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Dónde conseguirlos gratis
        </h2>

        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1 rounded-2xl border border-tobacco/30 bg-sand/50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-medium text-mahogany">
              Centros y subcentros de salud, hospitales y unidades móviles del MSP
            </span>
            <span className="text-sm text-mountain">Gratis, incluye dispensadores de preservativos</span>
          </li>
          <li className="flex flex-col gap-1 rounded-2xl border border-tobacco/30 bg-sand/50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-medium text-mahogany">
              Línea 171, opción 2
            </span>
            <a
              href="tel:171"
              className="flex shrink-0 items-center gap-2 text-sm font-medium text-terracota hover:text-terracota/80"
            >
              <Phone className="size-4 shrink-0" strokeWidth={1.5} />
              Asesoría confidencial + agendamiento de citas
            </a>
          </li>
        </ul>
      </div>
    </TopicShell>
  );
}
