import Link from "next/link";
import { ArrowLeft, Images } from "lucide-react";
import { MythCard, type Myth } from "@/components/myth-card";

// Combinación curada y sin duplicados de los mitos ya verificados en las
// fuentes de los 6 países (Bolivia, Chile, Ecuador, Perú, Venezuela; Colombia
// no traía mitos en su fuente original). Ver apuntes/contenido-mitos.md.
// Agrupados por método anticonceptivo (no por país de origen), a pedido del usuario.
const CATEGORIAS: { nombre: string; mitos: Myth[] }[] = [
  {
    nombre: "Prácticas que NO son métodos anticonceptivos",
    mitos: [
      {
        slug: "coito-interrumpido",
        mito: "El coito interrumpido (terminar afuera) es seguro",
        real: "el líquido preseminal ya contiene espermatozoides y puede provocar un embarazo, incluso antes de la eyaculación.",
        imageCoverSrc: "/mitos/mito1_portada.jpeg",
      },
      {
        slug: "ducha-vaginal",
        mito: "El lavado o ducha vaginal después de tener relaciones previene el embarazo",
        real: "los espermatozoides ingresan a los órganos internos muy rápido, no da tiempo a eliminarlos.",
        imageCoverSrc: "/mitos/mito2_portada.jpeg",
      },
      {
        slug: "primera-vez",
        mito: "En la primera relación sexual no hay riesgo de embarazo",
        real: "si la mujer está ovulando, el riesgo es exactamente el mismo que en cualquier otra relación.",
        imageCoverSrc: "/mitos/mito3_portada.jpeg",
      },
      {
        slug: "de-pie",
        mito: "Tener relaciones de pie impide el embarazo",
        real: "la posición física no influye en la prevención de un embarazo.",
        imageCoverSrc: "/mitos/mito4_portada.jpeg",
      },
    ],
  },
  {
    nombre: "Píldora anticonceptiva",
    mitos: [
      {
        slug: "descansar-pastillas",
        mito: "Hay que descansar de las pastillas para que el cuerpo se desintoxique",
        real: "suspenderlas sin indicación médica solo aumenta el riesgo de un embarazo no planeado.",
        imageCoverSrc: "/mitos/mito5_portada.jpeg",
      },
      {
        slug: "pildora-solo-relaciones",
        mito: "La píldora anticonceptiva solo se toma los días que tienes relaciones",
        real: "para que sea efectiva debe tomarse todos los días, a la misma hora, se tengan o no relaciones sexuales.",
        imageCoverSrc: "/mitos/mito6_portada.jpeg",
      },
    ],
  },
  {
    nombre: "Anticoncepción de emergencia (PAE / AOE)",
    mitos: [
      {
        slug: "pae-abortiva",
        mito: "La pastilla del día después (PAE / AOE) es abortiva",
        real: "retrasa o evita la ovulación; si el óvulo ya fue fecundado e implantado, la pastilla no interrumpe el embarazo.",
        imageCoverSrc: "/mitos/mito7_portada.jpeg",
      },
      {
        slug: "pae-metodo-regular",
        mito: "La anticoncepción de emergencia reemplaza a un método anticonceptivo regular",
        real: "solo sirve para emergencias (falla del condón, olvido de la píldora, relación sin protección); no debe usarse como método de rutina.",
        imageCoverSrc: "/mitos/mito8_portada.jpeg",
      },
    ],
  },
  {
    nombre: "DIU",
    mitos: [
      {
        slug: "diu-se-mueve",
        mito: "El DIU se puede mover a otros órganos, perforar el útero, o el hombre lo siente durante el sexo",
        real: "lo coloca un profesional de salud dentro del útero; no se oxida, no se desplaza a otros órganos ni interfiere en la relación sexual.",
        imageCoverSrc: "/mitos/mito9_portada.jpeg",
      },
      {
        slug: "diu-cancer",
        mito: "El DIU produce cáncer de cuello uterino",
        real: "ese cáncer está ligado a una infección por el virus del papiloma humano (VPH), no al uso de un método anticonceptivo.",
        imageCoverSrc: "/mitos/mito10_portada.jpeg",
      },
    ],
  },
  {
    nombre: "Inyectable",
    mitos: [
      {
        slug: "sangre-mala",
        mito: "La falta de menstruación por usar el inyectable significa que el cuerpo se está llenando de sangre mala",
        real: "no hace ningún daño; al dejar de aplicarse la inyección, la menstruación vuelve a la normalidad. Además, el inyectable ayuda a proteger contra algunas formas de cáncer.",
        imageCoverSrc: "/mitos/mito11_portada.jpeg",
      },
    ],
  },
  {
    nombre: "Condón",
    mitos: [
      {
        slug: "doble-condon",
        mito: "Usar doble condón es más seguro",
        real: "el roce entre ambos preservativos puede hacer que se rompan; nunca se deben usar dos al mismo tiempo.",
        imageCoverSrc: "/mitos/mito12_portada.jpeg",
      },
    ],
  },
  {
    nombre: "Anticonceptivos en general",
    mitos: [
      {
        slug: "infertilidad",
        mito: "Los anticonceptivos causan infertilidad a largo plazo",
        real: "la fertilidad se recupera rápido al suspenderlos; con la píldora, el 99% de las mujeres recupera su ciclo normal en los primeros 6 meses.",
        imageCoverSrc: "/mitos/mito13_portada.jpeg",
      },
      {
        slug: "responsabilidad-mujer",
        mito: "La anticoncepción es responsabilidad exclusiva de la mujer",
        real: "es una carga impuesta por roles de género; hoy se incentiva la corresponsabilidad masculina con el condón y la vasectomía.",
        imageCoverSrc: "/mitos/mito14_portada.jpeg",
      },
    ],
  },
];

export default function MitosPage() {
  return (
    <div className="flex flex-1 flex-col items-center gap-10 bg-vanilla px-6 py-16">
      <Link
        href="/"
        className="flex items-center gap-1 self-start text-sm text-mountain hover:text-mahogany"
      >
        <ArrowLeft className="size-4" />
        Volver al inicio
      </Link>

      <div className="flex flex-col items-center gap-3 text-center">
        <Images className="size-10 text-sage" strokeWidth={1.5} />
        <h1 className="text-2xl font-semibold tracking-tight text-mahogany">
          Mitos, desmentidos
        </h1>
        <p className="max-w-md text-sm text-mountain">
          Una galería con los mitos más comunes sobre anticoncepción en la
          región andina, organizados por método, y por qué son falsos.
          Comparte el que más te haya sorprendido.
        </p>
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-10">
        {CATEGORIAS.map(({ nombre, mitos }) => (
          <section key={nombre} className="flex flex-col gap-4">
            <h2 className="font-semibold text-mahogany">{nombre}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mitos.map((myth) => (
                <MythCard key={myth.slug} {...myth} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
