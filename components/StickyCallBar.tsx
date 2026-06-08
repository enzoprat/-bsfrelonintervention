"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { telLink } from "@/lib/config";
import { Icon } from "./Icon";

/** Barre d'action fixe en bas d'écran sur mobile : appeler + envoyer une photo. */
export function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream/95 p-2 backdrop-blur transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2">
        <a
          href={telLink}
          className="btn-shine btn-call flex-1 py-3.5 text-base"
          data-event="click_call"
        >
          <Icon name="phone" className="h-5 w-5" />
          Appeler maintenant
        </a>
        <Link
          href="/#devis"
          className="btn-shine btn-amber flex-1 py-3.5 text-base"
          data-event="photo_upload"
        >
          <Icon name="camera" className="h-5 w-5" />
          Envoyer une photo
        </Link>
      </div>
    </div>
  );
}
