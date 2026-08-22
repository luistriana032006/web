import { ShieldCheck, MapPin, Lightbulb, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

type Contacto = {
  entidad: string;
  detalle: string;
  href?: string;
};

const CONTACTOS: Contacto[] = [
  {
    entidad: "CESFAM o Consultorio (Espacios Amigables para Adolescentes)",
    detalle: "Gratis, sin necesidad de ir con un adulto",
  },
  { entidad: "Salud Responde", detalle: "600 360 7777", href: "tel:6003607777" },
  { entidad: "APROFA", detalle: "aprofa.cl" },
  { entidad: "CEMERA (Universidad de Chile)", detalle: "atención especializada para adolescentes" },
];

export default function AnticoncepcionPage() {
  return (
    <TopicShell
      eyebrow="Tema 1: Anticoncepción sin mitos"
      title="Métodos anticonceptivos: la canasta completa y sin mitos"
      icon={ShieldCheck}
      backHref="/chile"
      sourceNote="Basado en la canasta de métodos del sistema público de salud (Minsal) y la Encuesta Nacional de Juventudes."
    >
      <p>
        En el sistema público de salud tienes derecho a acceder a una
        canasta variada de métodos anticonceptivos, todos{" "}
        <span className="font-medium text-mahogany">gratuitos</span>.
      </p>

      <p>
        De corta duración: condón masculino y femenino, pastillas
        (combinadas o de progestágeno solo), inyectable mensual, anillo
        vaginal, parche transdérmico y anticoncepción de emergencia (PAE).
        De larga duración (LARC): implante subdérmico, inyectable
        trimestral y DIU T de cobre.
      </p>

      <div className="flex flex-col gap-3 rounded-2xl border border-tobacco/30 bg-sand/60 p-5">
        <div className="flex items-center gap-2 font-medium text-mahogany">
          <Lightbulb className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Dato real
        </div>
        <p className="text-sm text-mahogany">
          Según la Encuesta Nacional de Juventudes, el 92,1% de las
          personas jóvenes usó algún método en su primera relación sexual:
          condón masculino (80%), pastillas (45,5%) y DIU, que ha crecido
          notablemente (18%).
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-mahogany">Mitos desmentidos</h2>
        <ul className="flex flex-col gap-2 pl-5 text-sm">
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;La píldora del día después es abortiva&rdquo;:
            </span>{" "}
            falso, evita o retrasa la ovulación; no interrumpe un embarazo
            ya establecido ni daña al feto
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;Los anticonceptivos producen infertilidad&rdquo;:
            </span>{" "}
            falso, la fertilidad se recupera rápido; con la píldora, el 99%
            de las mujeres recupera su ciclo normal en 6 meses
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;La anticoncepción es responsabilidad exclusiva de la
              mujer&rdquo;:
            </span>{" "}
            falso, es una carga impuesta por roles de género; hoy se
            incentiva la corresponsabilidad masculina (condón, vasectomía)
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 font-semibold text-mahogany">
          <MapPin className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Dónde conseguirlos gratis
        </h2>

        <ul className="flex flex-col gap-2">
          {CONTACTOS.map(({ entidad, detalle, href }) => (
            <li
              key={entidad}
              className="flex flex-col gap-1 rounded-2xl border border-tobacco/30 bg-sand/50 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm font-medium text-mahogany">{entidad}</span>
              {href ? (
                <a
                  href={href}
                  className="flex shrink-0 items-center gap-2 text-sm font-medium text-terracota hover:text-terracota/80"
                >
                  <Phone className="size-4 shrink-0" strokeWidth={1.5} />
                  {detalle}
                </a>
              ) : (
                <span className="text-sm text-mountain">{detalle}</span>
              )}
            </li>
          ))}
        </ul>

        <p className="text-sm text-mountain">
          No necesitas ir acompañado/a de un adulto: en tu CESFAM te deben
          atender igual si vas solo/a.
        </p>
      </div>
    </TopicShell>
  );
}
