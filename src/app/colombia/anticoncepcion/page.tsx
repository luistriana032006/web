import Link from "next/link";
import { ShieldCheck, MapPin, Lightbulb, Phone, Images } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

type Contacto = {
  entidad: string;
  detalle: string;
  telefono?: string;
  href?: string;
};

const CONTACTOS: Contacto[] = [
  {
    entidad: "Cualquier EPS",
    detalle:
      "Línea de atención al usuario de tu EPS (está en tu carné o en la app de tu EPS) o presencialmente en tu IPS primaria",
  },
  {
    entidad: "Profamilia (para todos, con o sin EPS)",
    detalle: "Línea gratuita nacional",
    telefono: "300 912 4560",
    href: "tel:3009124560",
  },
  { entidad: "Profamilia Bogotá", detalle: "(601) 443 4000", href: "tel:6014434000" },
  { entidad: "Profamilia Medellín", detalle: "(604) 283 6688", href: "tel:6042836688" },
  { entidad: "Profamilia Cali", detalle: "(602) 386 000", href: "tel:602386000" },
  { entidad: "Profamilia Barranquilla", detalle: "(605) 319 7928", href: "tel:6053197928" },
];

export default function AnticoncepcionPage() {
  return (
    <TopicShell
      eyebrow="Tema 1: Anticoncepción sin mitos"
      title="Métodos anticonceptivos: la info que nadie te da bien"
      icon={ShieldCheck}
    >
      <p>
        En Colombia, tu EPS está obligada por ley a darte información y
        métodos anticonceptivos totalmente gratis, sin importar si eres del
        régimen contributivo o subsidiado. No necesitas la autorización de
        tus papás si tienes 14 años o más. Solo necesitas tu documento de
        identidad y pedir la cita.
      </p>

      <p>
        Existen varios métodos: condón, pastillas, inyección, implante
        subdérmico, DIU. Cada uno tiene diferente forma de uso y duración.
        Un profesional de salud te puede explicar cuál se ajusta mejor a ti,
        y esa consulta también es gratuita y confidencial.
      </p>

      <div className="flex flex-col gap-3 rounded-2xl border border-tobacco/30 bg-sand/60 p-5">
        <div className="flex items-center gap-2 font-medium text-mahogany">
          <Lightbulb className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Dato real
        </div>
        <p className="text-sm text-mahogany">
          Según el DANE, más de 66 mil bebés nacieron el año pasado de
          madres entre 10 y 19 años en Colombia: eso es el 15% de todos los
          partos del país. La mayoría de las veces no es porque falte
          información en internet, sino porque nadie te la explica de forma
          clara y sin pena.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-mahogany">Mitos desmentidos</h2>
        <ul className="flex flex-col gap-2 pl-5 text-sm">
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;El coito interrumpido (terminar afuera) es
              seguro&rdquo;:
            </span>{" "}
            falso, el líquido preseminal ya contiene espermatozoides y
            puede provocar un embarazo
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;El lavado o ducha vaginal después de tener relaciones
              previene el embarazo&rdquo;:
            </span>{" "}
            falso, los espermatozoides ingresan muy rápido, no da tiempo a
            eliminarlos
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;La pastilla del día después (PAE) es abortiva&rdquo;:
            </span>{" "}
            falso, retrasa o evita la ovulación; si el embarazo ya se
            implantó, no lo interrumpe
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;Los anticonceptivos causan infertilidad a largo
              plazo&rdquo;:
            </span>{" "}
            falso, la fertilidad se recupera rápido al suspenderlos
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;La anticoncepción es responsabilidad exclusiva de la
              mujer&rdquo;:
            </span>{" "}
            falso, hoy se incentiva la corresponsabilidad masculina
            (condón, vasectomía)
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;El DIU se puede mover al estómago, perforar el útero,
              o el hombre lo siente durante el sexo&rdquo;:
            </span>{" "}
            falso, se coloca en el útero por un profesional y no interfiere
            en la relación
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;Usar doble condón es más seguro&rdquo;:
            </span>{" "}
            falso, el roce entre ambos puede hacer que se rompan
          </li>
          <li className="list-disc">
            <span className="font-medium">
              &ldquo;Hay que descansar de las pastillas para que el cuerpo
              se desintoxique&rdquo;:
            </span>{" "}
            falso, suspenderlas sin indicación médica solo aumenta el
            riesgo de embarazo
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
          Dónde pedir tu cita de planificación familiar
        </h2>

        <p>No importa a qué EPS estés afiliado/a, el proceso es prácticamente el mismo:</p>

        <ol className="flex flex-col gap-2 pl-5 text-sm">
          <li className="list-decimal">
            Solicita una <span className="font-medium">cita de planificación familiar</span>{" "}
            (o de medicina general, mencionando que es para eso) en tu{" "}
            <span className="font-medium">IPS primaria</span>, es el centro de
            salud donde te atienden normalmente
          </li>
          <li className="list-decimal">
            La puedes pedir por teléfono, WhatsApp, la app de tu EPS, o
            presencialmente
          </li>
          <li className="list-decimal">
            Recibirás una consejería sobre los métodos disponibles y podrás
            elegir el que prefieras
          </li>
          <li className="list-decimal">
            Si eliges un método, te dan la orden médica ahí mismo para
            reclamarlo
          </li>
        </ol>

        <p className="text-sm font-medium text-mahogany">Contactos según tu caso:</p>

        <ul className="flex flex-col gap-2">
          {CONTACTOS.map(({ entidad, detalle, telefono, href }) => (
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
                  {telefono ?? detalle}
                </a>
              ) : (
                <span className="text-sm text-mountain">{detalle}</span>
              )}
            </li>
          ))}
        </ul>

        <p className="text-sm text-mountain">
          Si no sabes cuál es tu EPS o cómo contactarla, Profamilia también
          orienta sobre eso. No necesitas estar afiliado/a para que te den
          información inicial.
        </p>
      </div>
    </TopicShell>
  );
}
