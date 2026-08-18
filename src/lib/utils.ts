import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely, resolving conflicting utility classes
 * in favor of the ones that appear last.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Detecta si el visitante está en un dispositivo Android. Se usa para
 * decidir si el link de WhatsApp debe dirigirse explícitamente a la app de
 * Mensajería (ver `buildWhatsappIntentLink` en lib/constants.ts) en vez del
 * enlace genérico `wa.me`.
 */
export function isAndroidDevice() {
  if (typeof navigator === "undefined") return false;
  return /Android/i.test(navigator.userAgent);
}
