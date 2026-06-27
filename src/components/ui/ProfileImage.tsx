import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Professional photo.
 * 🔧 REPLACE: drop your real photo at /public/images/profile.jpg and update
 *    siteConfig.profileImage. A neutral SVG placeholder ships by default.
 */
export function ProfileImage({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-muted",
        className,
      )}
    >
      <Image
        src={siteConfig.profileImage}
        alt={`Portrait of ${siteConfig.name}`}
        fill
        priority={priority}
        sizes="(max-width: 768px) 80vw, 400px"
        className="object-cover transition-transform duration-700 ease-apple group-hover:scale-[1.05]"
      />
    </div>
  );
}
