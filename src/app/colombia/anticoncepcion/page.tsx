import { ShieldCheck, Lightbulb, CircleCheck } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

export default function AnticoncepcionPage() {
  return (
    <TopicShell title="Anticoncepción sin mitos" icon={ShieldCheck}>
      <div className="flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex items-center gap-2 font-medium text-amber-900">
          <Lightbulb className="size-5 shrink-0" strokeWidth={1.5} />
          ¿Sabías esto?
        </div>
        <p className="text-sm text-amber-900">
          Más de 66 mil bebés nacieron el año pasado de madres entre 10 y 19
          años en Colombia — eso es el 15% de todos los partos del país. No
          es un dato lejano. Es una de cada siete personas que nacen en
          Colombia hoy.
        </p>
        <p className="text-xs text-amber-700">
          Fuente: DANE, citado por la Pontificia Universidad Javeriana.
        </p>
      </div>

      <p>
        Y lo más difícil: no siempre es porque alguien no sabía cómo
        cuidarse. Muchas veces es porque nadie le explicó cómo hacerlo sin
        pena ni juicio.
      </p>

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-neutral-900">
          Aquí va lo que casi nadie te cuenta:
        </h2>

        <ul className="flex flex-col gap-3">
          <li className="flex gap-3">
            <CircleCheck className="mt-0.5 size-5 shrink-0 text-emerald-600" strokeWidth={1.5} />
            <span>
              Tu EPS está obligada por ley a darte información y métodos
              anticonceptivos totalmente gratis — no importa si eres del
              régimen contributivo o subsidiado.
            </span>
          </li>
          <li className="flex gap-3">
            <CircleCheck className="mt-0.5 size-5 shrink-0 text-emerald-600" strokeWidth={1.5} />
            <span>
              Si tienes 14 años o más, no necesitas que tus papás te
              acompañen ni que firmen nada. Solo tu documento de identidad y
              pedir la cita.
            </span>
          </li>
          <li className="flex gap-3">
            <CircleCheck className="mt-0.5 size-5 shrink-0 text-emerald-600" strokeWidth={1.5} />
            <span>
              Existen varios métodos — condón, pastillas, inyección,
              implante, DIU — y cada uno funciona distinto. No tienes que
              adivinar cuál te sirve: un profesional de salud te lo explica,
              gratis y en confianza.
            </span>
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <p className="font-medium text-emerald-900">Lo que puedes hacer hoy</p>
        <p className="mt-1 text-sm text-emerald-800">
          Pedir una cita de planificación familiar en tu EPS. No necesitas
          excusa ni compañía.
        </p>
      </div>
    </TopicShell>
  );
}
