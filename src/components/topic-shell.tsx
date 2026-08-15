import Link from "next/link";
import { ArrowLeft, type LucideIcon } from "lucide-react";

export function TopicShell({
  eyebrow,
  title,
  icon: Icon,
  children,
}: {
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center bg-white px-6 py-16">
      <div className="flex w-full max-w-2xl flex-col gap-8">
        <Link
          href="/colombia"
          className="flex items-center gap-1 self-start text-sm text-neutral-500 hover:text-neutral-800"
        >
          <ArrowLeft className="size-4" />
          Volver a los temas
        </Link>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
            <Icon className="size-5 shrink-0" strokeWidth={1.5} />
            {eyebrow}
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            {title}
          </h1>
        </div>

        <div className="flex flex-col gap-6 text-neutral-700">{children}</div>

        <p className="border-t border-neutral-100 pt-6 text-xs text-neutral-400">
          Basado en la Resolución 00000309 de 2025 del Ministerio de Salud y
          Protección Social de Colombia.
        </p>
      </div>
    </div>
  );
}
