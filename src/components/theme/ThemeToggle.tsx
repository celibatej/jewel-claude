"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Accessible light/dark toggle. Renders a stable placeholder until mounted
 * to avoid hydration mismatches with next-themes.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-300 ease-apple hover:bg-muted"
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
        ) : (
          <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
        )
      ) : (
        <span className="h-[18px] w-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}
