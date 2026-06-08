"use client";

import Link from "next/link";
import { useEffect } from "react";
import { mainNav } from "@/lib/navigation";
import { site, telLink, telDisplay } from "@/lib/config";
import { Icon } from "./Icon";

type Props = {
  open: boolean;
  onClose: () => void;
};

/** Tiroir de navigation mobile (plein écran). */
export function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <nav
        aria-label="Menu principal"
        className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-cream shadow-card transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <span className="font-display text-lg font-bold text-ink">Menu</span>
          <button
            onClick={onClose}
            aria-label="Fermer le menu"
            className="rounded-lg p-2 text-ink hover:bg-ink/5"
          >
            <Icon name="close" className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-xl px-4 py-3 text-lg font-semibold text-ink hover:bg-white"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-3 mt-1 space-y-1 border-l-2 border-amber/40 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block rounded-lg px-3 py-2 text-graytext hover:bg-white"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 border-t border-ink/10 p-5">
          <a href={telLink} className="btn-call w-full" data-event="click_call">
            <Icon name="phone" className="h-5 w-5" />
            Appeler {telDisplay}
          </a>
          <Link href="/#devis" onClick={onClose} className="btn-ghost w-full">
            <Icon name="camera" className="h-5 w-5" />
            Envoyer une photo
          </Link>
          <p className="pt-1 text-center text-sm text-graytext">{site.hours}</p>
        </div>
      </nav>
    </div>
  );
}
