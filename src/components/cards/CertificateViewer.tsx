"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Eye, X } from "lucide-react";

/**
 * "View Certificate" button that opens the certificate image in an accessible
 * lightbox (dim, blurred backdrop). Closes on Escape, backdrop click, or the
 * close button. Body scroll is locked while open. Respects reduced motion.
 */
export function CertificateViewer({ src, title }: { src: string; title: string }) {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-all duration-300 ease-apple hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted hover:shadow-md hover:shadow-foreground/5"
        aria-haspopup="dialog"
      >
        <Eye className="h-4 w-4" aria-hidden="true" />
        View Certificate
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} — certificate`}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-background/85 p-4 backdrop-blur-md sm:p-8"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              aria-label="Close certificate"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <motion.figure
              className="flex max-h-full w-full max-w-[1400px] flex-col items-center gap-4"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} certificate at full size`}
                className="group relative block h-[80vh] w-full"
              >
                <Image
                  src={src}
                  alt={`${title} certificate`}
                  fill
                  quality={95}
                  priority
                  sizes="(max-width: 1400px) 92vw, 1400px"
                  className="rounded-xl object-contain shadow-2xl"
                />
              </a>
              <figcaption className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
                <span className="text-muted-foreground">{title}</span>
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
                >
                  Open full size
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
