import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Theme-aware "JEWEL" wordmark.
 * Renders the dark mark on light surfaces and the light mark on dark
 * surfaces, swapped purely with CSS (no hydration flash). Both source
 * images are transparent PNGs with the same aspect ratio.
 */
export function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <>
      <Image
        src={siteConfig.logoDark}
        alt={`${siteConfig.name} logo`}
        width={203}
        height={56}
        priority
        className={cn(className, "block dark:hidden")}
      />
      <Image
        src={siteConfig.logoLight}
        alt=""
        aria-hidden="true"
        width={203}
        height={56}
        className={cn(className, "hidden dark:block")}
      />
    </>
  );
}
