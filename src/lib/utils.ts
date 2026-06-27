/**
 * Lightweight className combiner. Filters out falsy values and joins the rest.
 * Avoids extra dependencies while keeping conditional classes readable.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
