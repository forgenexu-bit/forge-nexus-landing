import { Button, type ButtonProps } from "@/components/ui/Button";
import { whatsappHref } from "@/features/contact/data/contact-info";
import { MessageCircle } from "lucide-react";

type WhatsappBtnProps = {
  label?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
};

/**
 * CTA reutilizable que abre WhatsApp con un mensaje pre-escrito.
 * Usado en el Navbar ("Iniciar un Proyecto") y en la sección de Contacto.
 */
export function WhatsappBtn({
  label = "Iniciar un Proyecto",
  variant = "primary",
  size = "md",
  className,
}: WhatsappBtnProps) {
  return (
    <Button
      href={whatsappHref}
      external
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
      aria-label={`${label} — contactar por WhatsApp`}
      icon={<MessageCircle className="h-4 w-4" />}
    >
      {label}
    </Button>
  );
}
