import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(90deg,var(--cyber-blue),var(--neon-purple)_60%,var(--fire-orange))] bg-[length:180%_100%] bg-left text-white shadow-[0_0_24px_-6px_rgba(0,123,255,0.55)] hover:bg-right hover:shadow-[0_0_28px_-4px_rgba(138,43,226,0.6)]",
  outline:
    "border border-surface-border text-foreground hover:border-cyan-blue/60 hover:text-white bg-white/[0.02] hover:bg-white/[0.04]",
  ghost: "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonOwnProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonOwnProps> & {
    href: string;
  };

type ButtonAsAnchor = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof ButtonOwnProps> & {
    href: string;
    external: true;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

/**
 * Botón de marca con soporte para render como <button>, <Link> interno
 * (anclas de la misma página) o <a> externo (WhatsApp, mailto, etc).
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", icon, className, children, ...rest } =
    props;
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    if ("external" in props && props.external) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars -- strip `external`, it's not a valid <a> attribute
      const { href, external, ...anchorRest } = rest as ButtonAsAnchor;
      return (
        <a href={href} className={classes} {...anchorRest}>
          {children}
          {icon}
        </a>
      );
    }
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
        {icon}
      </Link>
    );
  }

  const buttonRest = rest as ComponentPropsWithoutRef<"button">;
  return (
    <button className={classes} {...buttonRest}>
      {children}
      {icon}
    </button>
  );
}
