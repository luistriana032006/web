import { ShieldCheck, MapPin, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

export default function AnticoncepcionPage() {
  return (
    <TopicShell
      eyebrow="Tema 1: Anticoncepción sin mitos"
      title="Métodos anticonceptivos: gratis y sin mitos"
      icon={ShieldCheck}
      backHref="/peru"
      sourceNote="Basado en la Norma Técnica de Salud de Planificación Familiar (R.M. N° 652-2016-MINSA), Ministerio de Salud del Perú."
    >
      <p>
        En Perú, el acceso a la planificación familiar es un derecho. La
        Norma Técnica de Salud de Planificación Familiar garantiza a las y
        los adolescentes atención especializada y entrega de insumos
        anticonceptivos.
      </p>

      <p>
        Métodos disponibles: condón masculino, píldoras (anticonceptivos
        orales combinados), inyectables (mensuales y trimestrales),
        implante subdérmico y DIU (T de cobre). Todos son{" "}
        <span className="font-medium text-mahogany">
          gratuitos en los establecimientos de salud (EESS) públicos del
          MINSA
        </span>
        , incluida la anticoncepción oral de emergencia (AOE), cuya
        distribución gratuita está respaldada por un mandato judicial
        desde 2016.
      </p>

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-mahogany">Mitos desmentidos</h2>
        <ul className="flex flex-col gap-2 pl-5 text-sm">
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;El DIU no es seguro o no se puede usar en la
              adolescencia&rdquo;:
            </span>{" "}
            falso, el MINSA lo promueve activamente como uno de los
            anticonceptivos de mayor eficacia de larga duración; el desuso
            responde solo a mitos y tabúes sin base médica
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;La AOE (pastilla del día siguiente) reemplaza a otros
              métodos&rdquo;:
            </span>{" "}
            falso, es efectiva si se toma dentro de las 72 horas tras una
            relación sin protección, pero es solo para emergencias, no un
            método regular de planificación familiar
          </li>
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
              Establecimientos de salud (EESS) públicos del MINSA
            </span>
            <span className="text-sm text-mountain">Gratis, a nivel nacional</span>
          </li>
          <li className="flex flex-col gap-1 rounded-2xl border border-tobacco/30 bg-sand/50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-medium text-mahogany">
              Línea 113, opción 3
            </span>
            <a
              href="tel:113"
              className="flex shrink-0 items-center gap-2 text-sm font-medium text-terracota hover:text-terracota/80"
            >
              <Phone className="size-4 shrink-0" strokeWidth={1.5} />
              Consejería confidencial, gratis, 24 h
            </a>
          </li>
        </ul>
      </div>
    </TopicShell>
  );
}
