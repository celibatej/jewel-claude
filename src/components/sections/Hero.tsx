import { Download, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { hero } from "@/content/data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { Reveal } from "@/components/motion/Reveal";

/** Homepage hero: identity, brand statement, intro and primary actions. */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {siteConfig.location} · {siteConfig.experienceYears} years
              </p>
            </Reveal>

            <Reveal delay={0.05} blur>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tightest text-balance sm:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-3 text-lg font-medium text-muted-foreground sm:text-xl">
                {siteConfig.title}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-foreground text-pretty sm:text-2xl">
                {hero.statement}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
                {hero.intro}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={siteConfig.resumeFile} external size="lg">
                  <Download className="h-[18px] w-[18px]" aria-hidden="true" />
                  Download CV
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
                  Get in touch
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mx-auto w-full max-w-xs lg:max-w-none">
            <ProfileImage priority className="aspect-[4/5] w-full" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
