import type { SkillCategory } from "@/content/data";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

/** Card listing the skills within a single category. */
export function SkillCategoryCard({
  category,
  className,
}: {
  category: SkillCategory;
  className?: string;
}) {
  return (
    <SpotlightCard
      className={cn(
        "rounded-3xl border border-border bg-card p-6 transition-all duration-300 ease-apple hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5 sm:p-7",
        className,
      )}
    >
      <h3 className="text-lg font-semibold tracking-tight">{category.title}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-subtle px-3.5 py-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:border-foreground/20 hover:text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}
