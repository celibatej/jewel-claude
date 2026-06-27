import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Adds a subtle background tint to alternate sections. */
  muted?: boolean;
};

/** Vertical rhythm wrapper that gives every section generous whitespace. */
export function Section({ children, className, id, muted = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28",
        muted && "bg-subtle",
        className,
      )}
    >
      {children}
    </section>
  );
}
