import type { Highlight } from "@/content/data";
import { cn } from "@/lib/utils";

/** Card describing one area of professional expertise. */
export function HighlightCard({ item, className }: { item: Highlight; className?: string }) {
  const Icon = item.icon;
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 ease-apple hover:-translate-y-1 hover:border-foreground/20",
        className,
      )}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-muted text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
    </div>
  );
}
