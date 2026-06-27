import { MapPin } from "lucide-react";
import type { ExperienceItem } from "@/content/data";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Clean vertical career timeline. Each entry sits on a single rail with a
 * node marker, role, company, period and selected achievements.
 */
export function Timeline({
  items,
  showAchievements = true,
}: {
  items: ExperienceItem[];
  showAchievements?: boolean;
}) {
  return (
    <ol className="relative">
      {/* The vertical rail */}
      <span
        aria-hidden="true"
        className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]"
      />

      {items.map((item, index) => (
        <li key={`${item.company}-${index}`} className="relative pl-8 pb-12 last:pb-0 sm:pl-10">
          {/* Node */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-1.5 inline-flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-background bg-foreground ring-1 ring-border sm:h-[19px] sm:w-[19px]"
          />

          <Reveal as="div" delay={index * 0.05}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                {item.role}
              </h3>
              <span className="text-sm font-medium text-muted-foreground">
                {item.period}
              </span>
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span className="font-medium text-foreground/80">{item.company}</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {item.location}
              </span>
            </div>

            {!showAchievements && (
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
            )}

            {showAchievements && (
              <ul className="mt-4 space-y-2">
                {item.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"
                    />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
