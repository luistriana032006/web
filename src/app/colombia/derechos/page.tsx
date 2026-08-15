import { Scale, MessageCircleQuestion, CircleCheck, TriangleAlert } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

const DERECHOS = [
  "Pedir información y atención en salud sexual en privado, sin que tus papás tengan que saberlo si tú no quieres",
  "Pedir tu propia cita médica, sin que un adulto te acompañe ni autorice nada",
  "Ponerte la vacuna del VPH dando tú mismo/a el consentimiento",
  "Pedir la prueba de VIH u otras infecciones de transmisión sexual, gratis y en total confidencialidad — esto aplica sin importar tu edad, no solo desde los 14",
  "Que el resultado de esa prueba sea solo tuyo, ni tu familia se entera si tú no quieres",
];

export default function DerechosPage() {
  return (
    <TopicShell title="Mis derechos" icon={Scale}>
      <div className="flex flex-col gap-2 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex items-center gap-2 font-medium text-amber-900">
          <MessageCircleQuestion className="size-5 shrink-0" strokeWidth={1.5} />
          Empecemos por lo que probablemente no sabías
        </div>
        <p className="text-sm text-amber-900">
          ¿Sabías que puedes ir solo/a al médico a preguntar lo que sea sobre
          tu cuerpo, sin que nadie de tu casa se entere? Así es, y está en la
          ley (Resolución 00000309 de 2025 del Ministerio de Salud).
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-neutral-900">
          Desde los 14 años, en Colombia puedes:
        </h2>
        <ul className="flex flex-col gap-3">
          {DERECHOS.map((derecho) => (
            <li key={derecho} className="flex gap-3">
              <CircleCheck className="mt-0.5 size-5 shrink-0 text-emerald-600" strokeWidth={1.5} />
              <span>{derecho}</span>
            </li>
          ))}
        </ul>
      </div>

      <p>
        Nadie en un centro de salud puede negarte atención por no tener el
        documento de tus papás, ni juzgarte por preguntar.
      </p>

      <p>
        La ley también reconoce que las adolescentes tienen derecho a
        decidir sobre la interrupción voluntaria del embarazo, según su edad
        y madurez. Si esto es algo que estás viviendo, en Profamilia o tu
        centro de salud te pueden orientar en confianza.
      </p>

      <div className="flex flex-col gap-2 rounded-2xl border border-orange-200 bg-orange-50 p-5">
        <div className="flex items-center gap-2 font-medium text-orange-900">
          <TriangleAlert className="size-5 shrink-0" strokeWidth={1.5} />
          Una nota importante, sin rodeos
        </div>
        <p className="text-sm text-orange-900">
          Si tienes entre 12 y 14 años y ya iniciaste relaciones sexuales, la
          ley activa una ruta de protección con el ICBF. No es un castigo —
          es porque a esa edad la ley quiere asegurarse de que estés a
          salvo.
        </p>
      </div>
    </TopicShell>
  );
}
