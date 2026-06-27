"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger / entrance delay in seconds. */
  delay?: number;
  as?: "div" | "li" | "section" | "article" | "span";
  /** Adds a soft "focus-in" blur to the entrance (used on headings). */
  blur?: boolean;
};

/**
 * Subtle scroll-into-view entrance: a small fade + rise, optionally with a
 * gentle blur-in. Respects prefers-reduced-motion by rendering statically.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  blur = false,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y: 14, filter: blur ? "blur(12px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: blur ? 0.8 : 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
