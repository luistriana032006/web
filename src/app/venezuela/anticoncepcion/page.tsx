import Link from "next/link";
import { ShieldCheck, MapPin, Globe, Images } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

export default function AnticoncepcionPage() {
  return (
    <TopicShell
      eyebrow="Tema 1: Anticoncepción sin mitos"
      title="Métodos anticonceptivos: gratis y sin mitos"
      icon={ShieldCheck}
      backHref="/venezuela"
      sourceNote="Basado en las normativas del Ministerio del Poder Popular para la Salud (MPPS) de Venezuela."
    >
      <p>
        En Venezuela tienes derecho a acceder a una amplia gama de métodos
        anticonceptivos para decidir de manera libre y responsable sobre tu
        cuerpo y tu reproducción: condón, píldoras, inyectables, parches,
        anillo vaginal, implante subdérmico, DIU (T de cobre), ligadura de
        trompas, vasectomía, y anticoncepción de emergencia (método de
        Yuzpe o levonorgestrel).
      </p>

      <p>
        El Ministerio del Poder Popular para la Salud (MPPS) garantiza el
        suministro{" "}
        <span className="font-medium text-mahogany">
          gratuito en la red pública
        </span>
        : consultorios de atención primaria, red hospitalaria, Barrio
        Adentro y farmacias populares o Farmapatria.
      </p>

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-mahogany">Mitos desmentidos</h2>
        <ul className="flex flex-col gap-2 pl-5 text-sm">
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;El coitus interruptus (acabar afuera) es
              seguro&rdquo;:
            </span>{" "}
            falso, el líquido preeyaculatorio ya contiene espermatozoides
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;Lavarse o darse una ducha vaginal previene el
              embarazo&rdquo;:
            </span>{" "}
            falso, no elimina los espermatozoides que ya ingresaron
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;Hay que descansar de las pastillas para que el cuerpo
              se desintoxique&rdquo;:
            </span>{" "}
            falso, suspenderlas sin indicación médica solo aumenta el
            riesgo de embarazo
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;La pastilla de emergencia es abortiva&rdquo;:
            </span>{" "}
            falso, retrasa o evita la ovulación; si el embarazo ya se
            implantó, no lo interrumpe
          </li>
        </ul>
        <Link
          href="/mitos"
          className="flex w-fit items-center gap-2 text-sm font-medium text-terracota hover:text-terracota/80"
        >
          <Images className="size-4 shrink-0" strokeWidth={1.5} />
          Mira estos mitos como infografías para compartir
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 font-semibold text-mahogany">
          <MapPin className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Dónde conseguirlos gratis
        </h2>

        <ul className="flex flex-col gap-2">
          <li className="flex flex-col gap-1 rounded-2xl border border-tobacco/30 bg-sand/50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-medium text-mahogany">
              Red pública del MPPS
            </span>
            <span className="text-sm text-mountain">
              Consultorios, hospitales, Barrio Adentro, Farmapatria
            </span>
          </li>
          <li className="flex flex-col gap-1 rounded-2xl border border-tobacco/30 bg-sand/50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-medium text-mahogany">PLAFAM</span>
            <a
              href="https://plafam.org.ve"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 text-sm font-medium text-terracota hover:text-terracota/80"
            >
              <Globe className="size-4 shrink-0" strokeWidth={1.5} />
              plafam.org.ve
            </a>
          </li>
        </ul>
      </div>
    </TopicShell>
  );
}
