"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

/** Bouton « Remonter en haut » qui apparaît après défilement. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Remonter en haut de page"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-24 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-ink text-amber shadow-card transition-all duration-300 hover:bg-anthracite lg:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Icon name="arrow" className="h-5 w-5 -rotate-90" />
    </button>
  );
}
