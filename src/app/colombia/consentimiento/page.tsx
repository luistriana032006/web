import Link from "next/link";
import { HeartHandshake, MessageCircleQuestion, ArrowRight } from "lucide-react";
import { TopicShell } from "@/components/topic-shell";

export default function ConsentimientoPage() {
  return (
    <TopicShell title="Consentimiento y violencia sexual" icon={HeartHandshake}>
      <div className="flex flex-col gap-2 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex items-center gap-2 font-medium text-amber-900">
          <MessageCircleQuestion className="size-5 shrink-0" strokeWidth={1.5} />
          Una pregunta simple primero
        </div>
        <p className="text-sm text-amber-900">
          ¿Alguna vez sentiste que dijiste &ldquo;sí&rdquo; porque no sabías
          cómo decir &ldquo;no&rdquo;?
        </p>
      </div>

      <p>
        Consentir es decir que sí, libremente y sin presión de nadie. Si
        alguien te obliga, te chantajea, te manipula o se aprovecha de tener
        más edad o poder que tú para que aceptes algo, eso no es
        consentimiento — es abuso. Sin importar quién sea: un familiar, una
        pareja, un profesor.
      </p>

      <p>
        En Colombia la ley reconoce que tienes derecho a decidir sobre tu
        cuerpo según tu edad y madurez. Eso significa que tu opinión cuenta,
        y nadie tiene derecho a pasarla por alto.
      </p>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <p className="text-sm text-emerald-900">
          Si esto te ha pasado a ti o a alguien que conoces:{" "}
          <span className="font-medium">no es tu culpa</span>, y hay ayuda
          real, gratuita y confidencial.
        </p>
        <Link
          href="/colombia/rutas-de-atencion"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-900"
        >
          Ver rutas de atención
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </TopicShell>
  );
}
