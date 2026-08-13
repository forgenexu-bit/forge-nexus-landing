import { BrandLogo } from "@/components/icons/BrandLogo";
import { siteConfig } from "@/config/site";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-background-deep">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <BrandLogo />
            <p className="mt-4 text-sm text-muted-foreground">
              Equipo tecnológico especializado en software, IA y
              automatización, con sede en {COMPANY.legalLocation}.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a
              href={`mailto:${COMPANY.email}`}
              aria-label={`Enviar correo a ${COMPANY.email}`}
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {COMPANY.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              {COMPANY.legalLocation}
            </span>

            <div className="mt-1 flex items-center gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Seguir a Forge Nexus en ${social.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-muted-foreground transition-colors hover:border-cyan-blue/40 hover:text-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-surface-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {COMPANY.name}. Todos los derechos reservados.
          </span>
          <span>Diseñado y construido por el equipo de Forge Nexus.</span>
        </div>
      </div>
    </footer>
  );
}
