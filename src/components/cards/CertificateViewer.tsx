"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Eye, X } from "lucide-react";

/**
 * "View Certificate" button that opens the certificate in a full-screen
 * viewer. The entire certificate is shown, scaled to fit the page (never
 * cropped or zoomed). Close via the top-right button, a backdrop click, or
 * Escape. Body scroll is locked while open; respects reduced motion.
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
            className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-sm"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          >
            {/* Top bar: title + open in new tab + close */}
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 p-4">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Open in new tab
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                aria-label="Close certificate"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Full certificate, fit to the page */}
            <motion.div
              className="flex h-full w-full items-center justify-center p-4 pt-20 sm:p-10 sm:pt-20"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${title} certificate`}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
