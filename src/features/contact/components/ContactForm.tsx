"use client";

import { Button } from "@/components/ui/Button";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { buildWhatsappIntentLink, buildWhatsappLink } from "@/lib/constants";
import { isAndroidDevice } from "@/lib/utils";
import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

/**
 * Formulario directo: no envía a un backend (no prometemos un CRM que no
 * existe todavía). Compone el mensaje y abre WhatsApp con todo prellenado,
 * para que la conversación empiece de inmediato con una persona real.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const composed = [
      `Hola Forge Nexus, soy ${name || "—"}.`,
      email ? `Mi correo es ${email}.` : null,
      message ? `Cuéntame: ${message}` : null,
    ]
      .filter(Boolean)
      .join(" ");

    if (isAndroidDevice()) {
      // El intent:// solo lo resuelve Chrome en navegación de nivel
      // superior; window.open() lo abriría en una pestaña nueva sin
      // interpretarlo, así que aquí navegamos directo en vez de abrir tab.
      window.location.href = buildWhatsappIntentLink(composed);
      return;
    }
    window.open(buildWhatsappLink(composed), "_blank", "noopener,noreferrer");
  }

  return (
    <GlassContainer className="p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-muted-foreground">Nombre</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Tu nombre"
              className="rounded-lg border border-surface-border bg-white/[0.02] px-3.5 py-2.5 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-cyan-blue/50"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-muted-foreground">Email</span>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="tucorreo@empresa.com"
              className="rounded-lg border border-surface-border bg-white/[0.02] px-3.5 py-2.5 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-cyan-blue/50"
            />
          </label>
        </div>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-muted-foreground">Cuéntanos sobre tu proyecto</span>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Qué necesitas construir, en qué etapa estás y tu rango de presupuesto aproximado."
            className="resize-none rounded-lg border border-surface-border bg-white/[0.02] px-3.5 py-2.5 text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-cyan-blue/50"
          />
        </label>

        <Button
          type="submit"
          size="lg"
          aria-label="Enviar formulario de cotización por WhatsApp"
          icon={<Send className="h-4 w-4" />}
        >
          Enviar por WhatsApp
        </Button>
        <p className="text-xs text-muted-foreground">
          Al enviar, se abre WhatsApp con tu mensaje listo para mandarlo directamente.
        </p>
      </form>
    </GlassContainer>
  );
}
