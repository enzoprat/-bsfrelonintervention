/**
 * Configuration centrale du site.
 * Tout le site lit ces valeurs : un seul endroit à mettre à jour.
 */

export const site = {
  // --- Identité entreprise (NAP) ---
  name: "BS Frelon & Guêpe Intervention",
  legalName: "BS Frelon & Guêpe Intervention",
  phone: "06 68 25 03 81",
  // Version "machine" du téléphone pour les liens tel: (sans espaces, format +33).
  phoneHref: "+33668250381",
  addressZone:
    "Bordeaux et 40 km alentour · interventions possibles jusqu'à 100 km avec frais supplémentaires",
  hours: "Lun–Sam 8h–20h · Dim 10h–18h (frais supplémentaires)",
  priceFrom: "100 €",
  googleBusinessUrl: "",

  // --- Métadonnées globales ---
  shortName: "BS Frelon & Guêpe",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://www.exemple-frelons-bordeaux.fr",
  locale: "fr_FR",
  region: "Gironde",
  mainCity: "Bordeaux",
  // Image OG générée dynamiquement (voir app/opengraph-image.tsx).
  ogImage: "/opengraph-image",

  // --- Formulaire ---
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",

  // --- Coordonnées géographiques (centre Bordeaux, à ajuster) ---
  geo: {
    latitude: 44.837789,
    longitude: -0.57918,
  },
} as const;

/** Téléphone affiché. */
export const telDisplay = site.phone;

/** Lien tel: prêt à l'emploi. */
export const telLink = `tel:${site.phoneHref.replace(/\s+/g, "")}`;
