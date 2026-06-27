import { Award } from "lucide-react";
import type { Certification } from "@/content/data";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

/** Card describing a single certification. */
export function CertificationCard({
  item,
  className,
}: {
  item: Certification;
  className?: string;
}) {
  return (
    <SpotlightCard
      className={cn(
        "group rounded-3xl border border-border bg-card p-6 transition-all duration-300 ease-apple hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5 sm:p-7",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-muted text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
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
    </SpotlightCard>
  );
}
