"use client";

import { WhatsappBtn } from "@/features/contact/components/WhatsappBtn";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: readonly { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-background-deep/95 backdrop-blur-md md:hidden"
        >
          <div className="flex items-center justify-end px-6 py-5">
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="rounded-full border border-surface-border p-2 text-foreground/80 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <motion.nav
            initial="closed"
            animate="open"
            variants={{
              open: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              closed: {},
            }}
            className="flex flex-col items-center gap-8 px-6 pt-10"
          >
            {items.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 12 },
                }}
                className="text-2xl font-medium text-foreground/90 hover:text-white"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div
              variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 12 } }}
              className="pt-4"
            >
              <WhatsappBtn size="lg" />
            </motion.div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
