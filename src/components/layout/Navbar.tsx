"use client";

import { BrandLogo } from "@/components/icons/BrandLogo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { siteConfig } from "@/config/site";
import { WhatsappBtn } from "@/features/contact/components/WhatsappBtn";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        isScrolled
          ? "border-b border-surface-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" aria-label={`${siteConfig.name} — inicio`}>
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsappBtn />
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menú"
          className="rounded-full border border-surface-border p-2 text-foreground/80 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={siteConfig.navigation}
      />
    </header>
  );
}
