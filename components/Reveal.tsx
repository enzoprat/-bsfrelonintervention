"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Délai avant l'apparition (ms) — utile pour les cascades. */
  delay?: number;
  /** Direction d'entrée. */
  from?: "up" | "down" | "left" | "right" | "scale" | "fade";
  /** Seuil de déclenchement. */
  threshold?: number;
};

const offsets: Record<NonNullable<Props["from"]>, string> = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  scale: "scale-95",
  fade: "",
};

/**
 * Révèle son contenu en douceur au défilement (IntersectionObserver).
 * Respecte prefers-reduced-motion : affichage immédiat sans animation.
 */
export function Reveal({ children, className = "", delay = 0, from = "up", threshold = 0.15 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
        shown ? "opacity-100 translate-x-0 translate-y-0 scale-100" : `opacity-0 ${offsets[from]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
