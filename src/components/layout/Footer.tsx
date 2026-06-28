import Link from "next/link";
import { navItems, siteConfig, socialLinks } from "@/lib/site";
import { platformIcons } from "@/components/icons/BrandIcons";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-subtle">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo className="h-7 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.title} · Reliable. Compliant. Always follow-through.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => {
                const Icon = platformIcons[link.platform];
                const isExternal = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
