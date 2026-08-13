import { Button } from "@/components/ui/Button";
import { WhatsappBtn } from "@/features/contact/components/WhatsappBtn";
import { AccentBadge } from "@/features/hero/components/AccentBadge";
import { AiDashboardMockup } from "@/features/hero/components/AiDashboardMockup";
import { differentiators, heroCopy } from "@/features/hero/data/hero-data";

// Nota: este componente es intencionalmente un Server Component sin
// framer-motion. La entrada animada usa la utilidad CSS `animate-fade-up`
// (ver globals.css), que corre en el motor de CSS y no depende de que el
// JS del cliente hidrate correctamente. Con `initial`/`animate` de
// framer-motion, el HTML servido ya trae `opacity:0` inline; si la
// hidratación no llega a completarse en el navegador del visitante (red
// lenta, extensión bloqueando un chunk, etc.), ese contenido queda
// invisible para siempre aunque ocupe su espacio en el layout. CSS puro no
// tiene ese modo de fallo: como mínimo, el contenido siempre termina visible.
export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid-glow pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <p
            style={{ animationDelay: "0s" }}
            className="animate-fade-up text-xs font-semibold uppercase tracking-[0.25em] text-gradient-brand"
          >
            {heroCopy.eyebrow}
          </p>

          <h1
            style={{ animationDelay: "0.05s" }}
            className="animate-fade-up mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]"
          >
            {heroCopy.headlinePrefix}{" "}
            <span className="text-gradient-brand">
              {heroCopy.headlineHighlight}
            </span>
          </h1>

          <p
            style={{ animationDelay: "0.1s" }}
            className="animate-fade-up mt-5 text-base font-medium text-foreground/80 sm:text-lg"
          >
            {heroCopy.subtitle}
          </p>

          <p
            style={{ animationDelay: "0.15s" }}
            className="animate-fade-up mt-3 max-w-xl text-base text-muted-foreground"
          >
            {heroCopy.description}
          </p>

          <div
            style={{ animationDelay: "0.2s" }}
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
          >
            <WhatsappBtn label={heroCopy.primaryCta} size="lg" />
            <Button
              href="#soluciones"
              variant="outline"
              size="lg"
              aria-label="Ver nuestras soluciones de software e inteligencia artificial"
            >
              {heroCopy.secondaryCta}
            </Button>
          </div>

          <div
            style={{ animationDelay: "0.25s" }}
            className="animate-fade-up mt-10 flex flex-wrap gap-2.5"
          >
            {differentiators.map((item) => (
              <AccentBadge key={item.label} icon={item.icon} label={item.label} />
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <AiDashboardMockup />
        </div>
      </div>
    </section>
  );
}
