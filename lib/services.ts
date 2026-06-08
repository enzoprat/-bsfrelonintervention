/** Services présentés sur le site (cards + données structurées). */

export type Service = {
  slug: string;
  href: string;
  title: string;
  short: string;
  description: string;
  /** Nom de l'icône (voir components/Icon.tsx). */
  icon: "frelon" | "asiatique" | "guepe" | "toiture";
};

export const services: Service[] = [
  {
    slug: "nid-frelons",
    href: "/destruction-nid-frelons-bordeaux",
    title: "Destruction nid de frelons",
    short: "Frelons européens, intervention sécurisée à domicile.",
    description:
      "Élimination de nids de frelons européens sur toiture, dans un arbre, une cheminée ou un comble, avec un équipement de protection adapté.",
    icon: "frelon",
  },
  {
    slug: "frelon-asiatique",
    href: "/frelon-asiatique-bordeaux",
    title: "Destruction nid de frelons asiatiques",
    short: "Espèce invasive, intervention rapide et raisonnée.",
    description:
      "Traitement des nids de frelons asiatiques (Vespa velutina), souvent placés en hauteur dans les arbres ou sous les toitures, dans le respect de la réglementation.",
    icon: "asiatique",
  },
  {
    slug: "nid-guepes",
    href: "/destruction-nid-guepes-bordeaux",
    title: "Destruction nid de guêpes",
    short: "Sous toiture, volet roulant, muret ou jardin.",
    description:
      "Suppression des nids de guêpes nichés dans les endroits sombres et abrités : sous-toiture, volet roulant, grenier, garage ou muret du jardin.",
    icon: "guepe",
  },
  {
    slug: "acces-difficile",
    href: "/destruction-nid-frelons-bordeaux",
    title: "Toiture, arbre, volet, comble, cheminée",
    short: "Accès difficile et travail en hauteur.",
    description:
      "Intervention sur les emplacements difficiles : faîtage, conduit de cheminée, caisson de volet roulant, charpente ou houppier d'arbre, avec matériel spécifique.",
    icon: "toiture",
  },
];

/** Étapes du déroulé d'intervention (bloc « comment ça se passe »). */
export const processSteps = [
  {
    title: "Vous envoyez une photo ou appelez",
    text: "Un appel ou une photo du nid suffit pour décrire la situation. Nous identifions l'espèce et l'emplacement à distance.",
  },
  {
    title: "Diagnostic et estimation",
    text: "Nous évaluons la hauteur, l'accessibilité et le type de nid, puis nous vous donnons une estimation claire avant tout déplacement.",
  },
  {
    title: "Intervention sécurisée",
    text: "Notre technicien intervient équipé, neutralise le nid et le retire ou le traite selon la configuration des lieux.",
  },
  {
    title: "Conseils après intervention",
    text: "Nous vous expliquons quoi surveiller dans les jours qui suivent et comment limiter le risque de réinstallation.",
  },
];

/** Emplacements fréquents (réutilisé sur plusieurs pages). */
export const nestLocations = [
  "Sous la toiture / faîtage",
  "Dans un arbre ou une haie",
  "Conduit de cheminée",
  "Comble ou grenier",
  "Caisson de volet roulant",
  "Sous une terrasse ou un abri",
  "Façade et débord de toit",
  "Garage ou dépendance",
];
