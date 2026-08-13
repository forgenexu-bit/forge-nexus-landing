import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely, resolving conflicting utility classes
 * in favor of the ones that appear last.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
