import { Scale, MapPin, CircleCheck, TriangleAlert, Phone } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const DERECHOS = [
  "Confidencialidad de tus opciones y métodos anticonceptivos elegidos (Ley 20.418), protegidos como datos sensibles (Ley 19.628)",
  "Que no te condicionen la entrega de anticonceptivos a que asistas con un adulto (Circular N° A15/11 del Minsal)",
  "Desde los 14 años: acceder a la PAE y a la prueba de VIH sin que se notifique a ningún adulto",
  "Si tienes menos de 14 años, igual te deben entregar la PAE de inmediato (luego informan al adulto que tú designes)",
  "Acompañamiento psicosocial gratuito si estás considerando una interrupción legal del embarazo (Ley 21.030)",
];

type RutaDerecho = {
  situacion: string;
  detalle: string;
  telefono?: string;
  href?: string;
};

const RUTAS_DERECHOS: RutaDerecho[] = [
  {
    situacion: "Si tienes dudas sobre tus derechos o te niegan información sin razón",
    detalle: "Salud Responde, orientación médica las 24 horas",
    telefono: "600 360 7777",
    href: "tel:6003607777",
  },
  {
    situacion: "Si estás considerando una interrupción legal del embarazo (Ley 21.030)",
    detalle: "Programa de Acompañamiento Psicosocial gratuito en tu CESFAM u hospital",
  },
  {
    situacion: "Si necesitas orientación psicológica confidencial y gratuita",
    detalle: "Chat de Atención Psicosocial de INJUV: hablemosdetodo.injuv.gob.cl",
  },
];

export default function DerechosPage() {
  return (
    <TopicShell
      eyebrow="Tema 3: Mis derechos"
      title="Lo que la ley chilena garantiza"
      icon={Scale}
      backHref="/chile"
      sourceNote="Basado en la Ley 20.418, la Ley 19.628, la Circular N° A15/11 y la Ley 21.030, Ministerio de Salud de Chile."
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-mahogany">En Chile puedes:</h2>
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
        Ningún centro de salud puede negarte atención por ir sin un adulto,
        ni puede juzgarte por pedir esta información: la Circular A15/11
        instruye expresamente atender a los adolescentes que asisten
        solos.
      </p>

      <div className="flex flex-col gap-2 rounded-2xl border border-tobacco/30 bg-sand/60 p-5">
        <div className="flex items-center gap-2 font-medium text-mahogany">
          <TriangleAlert className="size-5 shrink-0 text-terracota" strokeWidth={1.5} />
          Importante
        </div>
        <p className="text-sm text-mahogany">
          La Ley 21.030 despenaliza la interrupción voluntaria del
          embarazo en 3 causales: riesgo vital para la madre, inviabilidad
          fetal letal, o embarazo por violación (hasta las 12 semanas, o
          14 semanas si tienes menos de 14 años, con autorización de un
          representante legal; si se opone, resuelve un Tribunal de
          Familia en un máximo de 48 horas).
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
