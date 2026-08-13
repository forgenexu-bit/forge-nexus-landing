import { GlassContainer } from "@/components/ui/GlassContainer";
import { contactChannels } from "@/features/contact/data/contact-info";
import { SOCIAL_LINKS } from "@/lib/constants";

export function DirectContactCard() {
  return (
    <GlassContainer className="p-6 sm:p-8">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Canales directos
      </h3>
      <ul className="mt-5 flex flex-col gap-4">
        {contactChannels.map((channel) => {
          const Icon = channel.icon;
          const content = (
            <>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-surface-border bg-white/[0.03]">
                <Icon className="h-4.5 w-4.5 text-cyan-blue" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">
                  {channel.label}
                </span>
                <span className="block text-sm font-medium text-foreground">
                  {channel.value}
                </span>
              </span>
            </>
          );

          return (
            <li key={channel.label}>
              {channel.href ? (
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={`${channel.label}: ${channel.value}`}
                  className="flex items-center gap-3 transition-opacity hover:opacity-80"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-3">{content}</div>
              )}
            </li>
          );
        })}
      </ul>

      <h3 className="mt-7 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Síguenos
      </h3>
      <div className="mt-4 flex items-center gap-2.5">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Seguir a Forge Nexus en ${social.name}`}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-border text-cyan-blue transition-colors hover:border-cyan-blue/40 hover:bg-white/[0.03]"
          >
            <social.icon className="h-4.5 w-4.5" />
          </a>
        ))}
      </div>
    </GlassContainer>
  );
}
