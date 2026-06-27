import type { SkillCategory } from "@/content/data";
import { cn } from "@/lib/utils";

/** Card listing the skills within a single category. */
export function SkillCategoryCard({
  category,
  className,
}: {
  category: SkillCategory;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-3xl border border-border bg-card p-6 sm:p-7",
        className,
      )}
    >
      <h3 className="text-lg font-semibold tracking-tight">{category.title}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-subtle px-3.5 py-1.5 text-sm text-muted-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
