"use client";

import { Button, type ButtonProps } from "@/components/ui/Button";
import { whatsappHref } from "@/features/contact/data/contact-info";
import { WHATSAPP_DEFAULT_MESSAGE, buildWhatsappIntentLink } from "@/lib/constants";
import { isAndroidDevice } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import type { MouseEvent } from "react";

type WhatsappBtnProps = {
  label?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
};

/**
 * CTA reutilizable que abre WhatsApp con un mensaje pre-escrito.
 * Usado en el Navbar ("Iniciar un Proyecto") y en la sección de Contacto.
 *
 * El `href` sigue siendo el enlace `wa.me` estándar (funciona sin JS, con
 * teclado, lectores de pantalla, "abrir en pestaña nueva", crawlers, etc.).
 * En Android interceptamos el clic para redirigir al intent explícito de
 * WhatsApp Mensajería — ver la nota en `buildWhatsappIntentLink`.
 */
export function WhatsappBtn({
  label = "Iniciar un Proyecto",
  variant = "primary",
  size = "md",
  className,
}: WhatsappBtnProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (isAndroidDevice()) {
      event.preventDefault();
      window.location.href = buildWhatsappIntentLink(WHATSAPP_DEFAULT_MESSAGE);
    }
  }

  return (
    <Button
      href={whatsappHref}
      external
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      aria-label={`${label} — contactar por WhatsApp`}
      icon={<MessageCircle className="h-4 w-4" />}
    >
      {label}
    </Button>
  );
}
