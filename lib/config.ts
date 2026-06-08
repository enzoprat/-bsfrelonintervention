/**
 * Configuration centrale du site.
 * Remplacez les valeurs entre crochets [[...]] par les vraies informations
 * du client. Tout le site lit ces valeurs : un seul endroit à mettre à jour.
 */

export const site = {
  // --- Identité entreprise (NAP) ---
  name: "BS Frelon & Guêpe Intervention",
  legalName: "BS Frelon & Guêpe Intervention",
  phone: "06 68 25 03 81",
  // Version "machine" du téléphone pour les liens tel: (sans espaces, format +33).
  phoneHref: "+33668250381",
  email: "[[EMAIL]]",
  addressZone:
    "Bordeaux et 40 km alentour · interventions possibles jusqu'à 100 km avec frais supplémentaires",
  hours: "Lun–Sam 8h–20h · Dim 10h–18h (frais supplémentaires)",
  certifications: "[[CERTIFICATIONS_CLIENT]]",
  priceFrom: "100 €",
  googleBusinessUrl: "[[LIEN_GOOGLE_BUSINESS]]",

  // --- Réseaux / liens externes (placeholders) ---
  googleReviewsLabel: "[[AVIS_GOOGLE]]",
  guarantee: "[[GARANTIE]]",

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

/** Téléphone affiché, avec repli propre quand le placeholder n'est pas remplacé. */
export const telDisplay = site.phone;

/** Construit un lien tel: utilisable même si le placeholder n'est pas remplacé. */
export const telLink = `tel:${site.phoneHref.replace(/\s+/g, "")}`;

export const mailLink = `mailto:${site.email}`;
