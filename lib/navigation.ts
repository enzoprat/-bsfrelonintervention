/** Navigation centralisée : ajoutez/retirez des entrées ici uniquement. */

export type NavItem = {
  label: string;
  href: string;
  /** Sous-liens optionnels (menu déroulant / colonnes footer). */
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "/destruction-nid-frelons-bordeaux",
    children: [
      { label: "Nid de frelons", href: "/destruction-nid-frelons-bordeaux" },
      { label: "Nid de guêpes", href: "/destruction-nid-guepes-bordeaux" },
      { label: "Frelon asiatique", href: "/frelon-asiatique-bordeaux" },
    ],
  },
  { label: "Tarifs", href: "/tarifs-destruction-nid-frelons-bordeaux" },
  { label: "Zones", href: "/zones-intervention" },
  { label: "Conseils", href: "/conseils" },
  { label: "Urgence", href: "/urgence-nid-frelons-bordeaux" },
];

/** Liens regroupés pour le footer. */
export const footerNav = {
  services: [
    { label: "Destruction nid de frelons", href: "/destruction-nid-frelons-bordeaux" },
    { label: "Destruction nid de guêpes", href: "/destruction-nid-guepes-bordeaux" },
    { label: "Frelon asiatique", href: "/frelon-asiatique-bordeaux" },
    { label: "Tarifs", href: "/tarifs-destruction-nid-frelons-bordeaux" },
    { label: "Urgence nid de frelons", href: "/urgence-nid-frelons-bordeaux" },
  ],
  zones: [
    { label: "Toutes les zones", href: "/zones-intervention" },
    { label: "Frelons à Mérignac", href: "/destruction-nid-frelons-merignac" },
    { label: "Frelons à Pessac", href: "/destruction-nid-frelons-pessac" },
    { label: "Frelons à Talence", href: "/destruction-nid-frelons-talence" },
  ],
  legal: [
    { label: "Conseils frelons & guêpes", href: "/conseils" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    { label: "Plan du site", href: "/plan-du-site" },
  ],
};
