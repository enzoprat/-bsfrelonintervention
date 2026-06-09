"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/navigation";
import { site, telLink, telDisplay } from "@/lib/config";
import { Icon } from "./Icon";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Bandeau utilité supérieur */}
      <div className="hidden bg-ink text-cream lg:block">
        <div className="container-page flex items-center justify-between py-2 text-sm">
          <p className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4 text-amber" />
            Bordeaux & alentours · {site.region}
          </p>
          <p className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 text-amber" />
              {site.hours}
            </span>
            <a href={telLink} className="flex items-center gap-2 hover:text-amber" data-event="click_call">
              <Icon name="phone" className="h-4 w-4 text-amber" />
              {telDisplay}
            </a>
          </p>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b bg-cream/90 backdrop-blur transition-shadow duration-300 supports-[backdrop-filter]:bg-cream/80 ${
          scrolled ? "border-ink/10 shadow-soft" : "border-transparent"
        }`}
      >
        <div
          className={`container-page flex items-center justify-between gap-4 transition-all duration-300 ${
            scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
          }`}
        >
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5"
            aria-label={`${site.name} — accueil`}
          >
            <span
              className={`flex shrink-0 items-center justify-center rounded-xl bg-ink text-amber shadow-soft transition-all duration-300 ${
                scrolled ? "h-9 w-9" : "h-10 w-10"
              }`}
            >
              <Icon name="shield" className="h-6 w-6" />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate font-display text-base font-extrabold text-ink sm:text-lg">
                <span className="sm:hidden">{site.shortName}</span>
                <span className="hidden sm:inline">{site.name}</span>
              </span>
              <span className="truncate text-[0.7rem] font-medium text-graytext sm:text-xs">
                Nids de frelons & guêpes · Bordeaux
              </span>
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-[0.95rem] font-semibold text-ink hover:bg-white"
                  >
                    {item.label}
                    {item.children && <Icon name="chevron" className="h-4 w-4 opacity-60" />}
                  </Link>
                  {item.children && (
                    <ul className="invisible absolute left-0 top-full w-64 rounded-2xl border border-ink/10 bg-white p-2 opacity-0 shadow-card transition-all duration-150 group-hover:visible group-hover:opacity-100">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-graytext hover:bg-cream hover:text-ink"
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
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telLink}
              className="btn-call hidden sm:inline-flex"
              data-event="click_call"
            >
              <Icon name="phone" className="h-5 w-5" />
              <span className="hidden xl:inline">{telDisplay}</span>
              <span className="xl:hidden">Appeler</span>
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              className="rounded-xl border-2 border-ink/15 p-2 text-ink hover:bg-white lg:hidden"
            >
              <Icon name="menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Barre de progression de lecture */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-amber via-safety to-amber"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
