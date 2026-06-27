import { Award } from "lucide-react";
import type { Certification } from "@/content/data";
import { cn } from "@/lib/utils";

/** Card describing a single certification. */
export function CertificationCard({
  item,
  className,
}: {
  item: Certification;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-3xl border border-border bg-card p-6 sm:p-7",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-muted text-foreground">
          <Award className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-balance">
        {item.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-muted-foreground">{item.issuer}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </div>
  );
}
