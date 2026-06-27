"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Animates the numeric portion of a stat value (e.g. "15+") counting up from
 * zero when it scrolls into view. Non-numeric values (e.g. "KSA") render as-is.
 * Respects prefers-reduced-motion.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  // Split into [prefix][number][suffix], e.g. "" "15" "+".
  const match = value.match(/^(\D*)(\d+)(.*)$/);

  const [display, setDisplay] = useState(() =>
    match && !shouldReduceMotion ? `${match[1]}0${match[3]}` : value,
  );

  useEffect(() => {
    if (!match) {
      setDisplay(value);
      return;
    }
    if (shouldReduceMotion) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const target = parseInt(match[2], 10);
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) =>
        setDisplay(`${match[1]}${Math.round(latest)}${match[3]}`),
    });
    return () => controls.stop();
  }, [inView, shouldReduceMotion, value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
