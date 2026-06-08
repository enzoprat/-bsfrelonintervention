"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";
import { Icon } from "./Icon";

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-ink/10 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink hover:bg-cream/60 sm:px-6"
              >
                {item.question}
                <Icon
                  name="chevron"
                  className={`h-5 w-5 shrink-0 text-amber-dark transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              className={`grid transition-all duration-200 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[0.98rem] leading-relaxed text-graytext sm:px-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
