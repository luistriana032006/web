import Link from "next/link";
import { ArrowLeft, type LucideIcon } from "lucide-react";

export function TopicShell({
  title,
  icon: Icon,
  children,
}: {
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

        <div className="flex items-center gap-3">
          <Icon className="size-7 shrink-0 text-emerald-600" strokeWidth={1.5} />
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            {title}
          </h1>
        </div>

        <div className="flex flex-col gap-6 text-neutral-700">{children}</div>
      </div>
    </div>
  );
}
