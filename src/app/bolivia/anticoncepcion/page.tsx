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
    entidad: "Centro de salud pública / servicios AIDA",
    detalle: "Atención Integral Diferenciada al Adolescente, gratis, sin cita previa en muchos casos",
  },
  { entidad: "CIES La Paz", detalle: "+591 2 2485111 / +591 78981995", href: "tel:+59122485111" },
  { entidad: "CIES Santa Cruz", detalle: "(3) 3434843 / 76145080", href: "tel:33434843" },
  { entidad: "CIES Cochabamba", detalle: "4231670 / 4510545", href: "tel:4231670" },
  { entidad: "MSI Bolivia (Marie Stopes)", detalle: "508 50060", href: "tel:50850060" },
];

export default function AnticoncepcionPage() {
  return (
    <TopicShell
      eyebrow="Tema 1: Anticoncepción sin mitos"
      title="Métodos anticonceptivos: gratis y sin mitos"
      icon={ShieldCheck}
      backHref="/bolivia"
      sourceNote="Basado en 'Protegernos es cosa de tod@s' y la 'Guía de autocuidado de adolescentes', Ministerio de Salud y Deportes de Bolivia (AIDA/UNFPA)."
    >
      <p>
        En Bolivia tienes derecho a recibir información clara y completa
        sobre anticoncepción y a elegir libremente el método que prefieras.
        La edad, por sí misma, no es una razón válida para que un centro de
        salud te niegue un método anticonceptivo.
      </p>

      <p>
        Métodos disponibles: condón masculino y femenino, píldoras,
        inyectable (mensual o trimestral), implante subdérmico (dura 5
        años), DIU T de cobre (dura 12 años) y anticoncepción de emergencia
        (PAE). Todos son{" "}
        <span className="font-medium text-mahogany">
          gratuitos en cualquier centro de salud pública de Bolivia
        </span>
        .
      </p>

      <div className="flex flex-col gap-3 rounded-2xl border border-tobacco/30 bg-sand/60 p-5">
        <div className="flex items-center gap-2 font-medium text-mahogany">
          <Lightbulb className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Dato real
        </div>
        <p className="text-sm text-mahogany">
          Según el estudio MILENA (UNFPA, 2022), el embarazo adolescente le
          costó a Bolivia el 0,91% del PIB nacional en 2019 (USD 373,3
          millones), y ese mismo año se atendieron 42.626 partos de
          adolescentes entre 10 y 19 años. No es un problema individual, es
          un problema que también le importa prevenir al Estado.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-mahogany">Mitos desmentidos</h2>
        <ul className="flex flex-col gap-2 pl-5 text-sm">
          <li className="list-disc">
            <span className="font-medium">Inyectables:</span> falso que la
            falta de regla signifique que &ldquo;se acumula sangre
            mala&rdquo;; tampoco producen cáncer, al contrario, ayudan a
            proteger contra algunas formas de esta enfermedad
          </li>
          <li className="list-disc">
            <span className="font-medium">DIU (T de cobre):</span> falso
            que el hombre la sienta durante el sexo o que el dispositivo se
            pueda mover a otros órganos como el estómago
          </li>
          <li className="list-disc">
            <span className="font-medium">PAE (pastilla del día
            después):</span> no es abortiva, actúa antes de que el óvulo
            sea fecundado, no interrumpe un embarazo ya establecido
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
          No necesitas estar afiliado/a a nada: CIES y MSI Bolivia también
          orientan e informan aunque nunca los hayas visitado antes.
        </p>
      </div>
    </TopicShell>
  );
}
