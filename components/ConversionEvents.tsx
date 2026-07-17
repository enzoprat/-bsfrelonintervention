"use client";

import { useEffect } from "react";

/**
 * Déclenche les conversions Google Ads sur les clics des boutons marqués
 * `data-event` (voir CallButton, StickyCallBar, ContactForm…).
 *
 * Les libellés de conversion sont fournis par variables d'environnement.
 * On les récupère APRÈS avoir créé chaque action de conversion dans Google Ads
 * (format du libellé : `AbCdEfGhIjKl`). Tant qu'un libellé est vide, l'événement
 * correspondant n'est pas envoyé (rien ne casse).
 *
 *  - NEXT_PUBLIC_GOOGLE_ADS_ID     (ex. AW-18326166804)
 *  - NEXT_PUBLIC_ADS_LABEL_CALL    → clics « Appeler »   (data-event="click_call")
 *  - NEXT_PUBLIC_ADS_LABEL_PHOTO   → envoi de photo       (data-event="photo_upload")
 *  - NEXT_PUBLIC_ADS_LABEL_FORM    → formulaire de devis  (data-event="form_submit")
 */

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

const LABELS: Record<string, string | undefined> = {
  click_call: process.env.NEXT_PUBLIC_ADS_LABEL_CALL,
  photo_upload: process.env.NEXT_PUBLIC_ADS_LABEL_PHOTO,
  form_submit: process.env.NEXT_PUBLIC_ADS_LABEL_FORM,
};

export function ConversionEvents() {
  useEffect(() => {
    if (!ADS_ID) return;

    const handler = (e: MouseEvent) => {
      const origin = e.target as HTMLElement | null;
      const el = origin?.closest<HTMLElement>("[data-event]");
      const event = el?.dataset.event;
      if (!event) return;

      const label = LABELS[event];
      if (!label) return;

      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag !== "function") return;

      gtag("event", "conversion", { send_to: `${ADS_ID}/${label}` });
    };

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
