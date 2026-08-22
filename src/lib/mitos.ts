export type Myth = {
  slug: string;
  mito: string;
  real: string;
  /** Ilustración simbólica de portada, sin texto (ej. "/mitos/mito1_portada.jpeg"). */
  imageCoverSrc?: string;
  /** Infografía con texto, pensada para compartirse sola (ej. "/mitos/infografia_mito1.jpeg"). */
  imageInfographicSrc?: string;
};

export type MythCategory = {
  nombre: string;
  mitos: Myth[];
};

// Combinación curada y sin duplicados de los mitos ya verificados en las
// fuentes de los 6 países (Bolivia, Chile, Ecuador, Perú, Venezuela; Colombia
// no traía mitos en su fuente original). Ver apuntes/contenido-mitos.md.
// Agrupados por método anticonceptivo (no por país de origen), a pedido del usuario.
export const MITO_CATEGORIAS: MythCategory[] = [
  {
    nombre: "Prácticas que NO son métodos anticonceptivos",
    mitos: [
      {
        slug: "coito-interrumpido",
        mito: "El coito interrumpido (terminar afuera) es seguro",
        real: "el líquido preseminal ya contiene espermatozoides y puede provocar un embarazo, incluso antes de la eyaculación.",
        imageCoverSrc: "/mitos/mito1_portada.jpeg",
        imageInfographicSrc: "/mitos/infografia_mito1.jpeg",
      },
      {
        slug: "ducha-vaginal",
        mito: "El lavado o ducha vaginal después de tener relaciones previene el embarazo",
        real: "los espermatozoides ingresan a los órganos internos muy rápido, no da tiempo a eliminarlos.",
        imageCoverSrc: "/mitos/mito2_portada.jpeg",
        imageInfographicSrc: "/mitos/infografia_mito2.jpeg",
      },
      {
        slug: "primera-vez",
        mito: "En la primera relación sexual no hay riesgo de embarazo",
        real: "si la mujer está ovulando, el riesgo es exactamente el mismo que en cualquier otra relación.",
        imageCoverSrc: "/mitos/mito3_portada.jpeg",
        imageInfographicSrc: "/mitos/infografia_mito3.jpeg",
      },
      {
        slug: "de-pie",
        mito: "Tener relaciones de pie impide el embarazo",
        real: "la posición física no influye en la prevención de un embarazo.",
        imageCoverSrc: "/mitos/mito4_portada.jpeg",
        imageInfographicSrc: "/mitos/infografia_mito4.jpeg",
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
        imageInfographicSrc: "/mitos/infografia_mito5.jpeg",
      },
      {
        slug: "pildora-solo-relaciones",
        mito: "La píldora anticonceptiva solo se toma los días que tienes relaciones",
        real: "para que sea efectiva debe tomarse todos los días, a la misma hora, se tengan o no relaciones sexuales.",
        imageCoverSrc: "/mitos/mito6_portada.jpeg",
        imageInfographicSrc: "/mitos/infografia_mito6.jpeg",
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
        imageInfographicSrc: "/mitos/infografia_mito7.jpeg",
      },
      {
        slug: "pae-metodo-regular",
        mito: "La anticoncepción de emergencia reemplaza a un método anticonceptivo regular",
        real: "solo sirve para emergencias (falla del condón, olvido de la píldora, relación sin protección); no debe usarse como método de rutina.",
        imageCoverSrc: "/mitos/mito8_portada.jpeg",
        imageInfographicSrc: "/mitos/infografia_mito8.jpeg",
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
        imageInfographicSrc: "/mitos/infografia_mito9.jpeg",
      },
      {
        slug: "diu-cancer",
        mito: "El DIU produce cáncer de cuello uterino",
        real: "ese cáncer está ligado a una infección por el virus del papiloma humano (VPH), no al uso de un método anticonceptivo.",
        imageCoverSrc: "/mitos/mito10_portada.jpeg",
        imageInfographicSrc: "/mitos/infografia_mito10.jpeg",
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
        imageInfographicSrc: "/mitos/infografia_mito11.jpeg",
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
        imageInfographicSrc: "/mitos/infografia_mito12.jpeg",
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
        imageInfographicSrc: "/mitos/infografia_mito13.jpeg",
      },
      {
        slug: "responsabilidad-mujer",
        mito: "La anticoncepción es responsabilidad exclusiva de la mujer",
        real: "es una carga impuesta por roles de género; hoy se incentiva la corresponsabilidad masculina con el condón y la vasectomía.",
        imageCoverSrc: "/mitos/mito14_portada.jpeg",
        imageInfographicSrc: "/mitos/infografia_mito14.jpeg",
      },
    ],
  },
];

export const ALL_MITOS: Myth[] = MITO_CATEGORIAS.flatMap((c) => c.mitos);

export function getMythBySlug(slug: string): Myth | undefined {
  return ALL_MITOS.find((m) => m.slug === slug);
}
