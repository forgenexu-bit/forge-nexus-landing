"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  aiIntegrationAreas,
  aiIntegrationCopy,
} from "@/features/services/data/ai-integration-data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

export function AiIntegrationAccordion() {
  const [openId, setOpenId] = useState<string>(aiIntegrationAreas[0].id);

  return (
    <section id="ia" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={aiIntegrationCopy.eyebrow}
          title={aiIntegrationCopy.title}
          description={aiIntegrationCopy.description}
        />

        <div className="mt-12 divide-y divide-surface-border overflow-hidden rounded-2xl border border-surface-border bg-surface/30 backdrop-blur-md">
          {aiIntegrationAreas.map((area) => {
            const isOpen = area.id === openId;
            const Icon = area.icon;

            return (
              <div key={area.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : area.id)}
                  aria-expanded={isOpen}
                  aria-label={`Ver cómo integramos IA en ${area.area}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.02] sm:px-7"
                >
                  <span className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-surface-border bg-white/[0.03] transition-colors",
                        isOpen && "border-neon-purple/50 bg-neon-purple/10"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-4.5 w-4.5 text-cyan-blue",
                          isOpen && "text-neon-purple"
                        )}
                      />
                    </span>
                    <span className="text-base font-medium text-foreground sm:text-lg">
                      {area.area}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180 text-cyan-blue"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="grid grid-cols-1 gap-2.5 px-5 pb-6 sm:grid-cols-2 sm:px-7 sm:pl-[4.75rem]">
                        {area.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-blue" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
