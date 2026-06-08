/** Liste centrale des routes du site (sitemap.xml + plan du site HTML). */

export type Route = {
  path: string;
  label: string;
  /** Priorité sitemap (0 → 1). */
  priority: number;
  /** Catégorie pour le plan du site HTML. */
  group: "Principales" | "Services" | "Zones" | "Conseils" | "Informations";
};

export const routes: Route[] = [
  { path: "/", label: "Accueil", priority: 1.0, group: "Principales" },
  {
    path: "/destruction-nid-frelons-bordeaux",
    label: "Destruction nid de frelons à Bordeaux",
    priority: 0.9,
    group: "Services",
  },
  {
    path: "/destruction-nid-guepes-bordeaux",
    label: "Destruction nid de guêpes à Bordeaux",
    priority: 0.9,
    group: "Services",
  },
  {
    path: "/frelon-asiatique-bordeaux",
    label: "Frelon asiatique à Bordeaux",
    priority: 0.8,
    group: "Services",
  },
  {
    path: "/urgence-nid-frelons-bordeaux",
    label: "Urgence nid de frelons à Bordeaux",
    priority: 0.8,
    group: "Principales",
  },
  {
    path: "/tarifs-destruction-nid-frelons-bordeaux",
    label: "Prix destruction nid de frelons à Bordeaux",
    priority: 0.8,
    group: "Principales",
  },
  {
    path: "/zones-intervention",
    label: "Zones d'intervention",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-merignac",
    label: "Destruction nid de frelons à Mérignac",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-pessac",
    label: "Destruction nid de frelons à Pessac",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-talence",
    label: "Destruction nid de frelons à Talence",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-begles",
    label: "Destruction nid de frelons à Bègles",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-lormont",
    label: "Destruction nid de frelons à Lormont",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-cenon",
    label: "Destruction nid de frelons à Cenon",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-le-bouscat",
    label: "Destruction nid de frelons au Bouscat",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-bruges",
    label: "Destruction nid de frelons à Bruges",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-villenave-dornon",
    label: "Destruction nid de frelons à Villenave-d'Ornon",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-gradignan",
    label: "Destruction nid de frelons à Gradignan",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-saint-medard-en-jalles",
    label: "Destruction nid de frelons à Saint-Médard-en-Jalles",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-eysines",
    label: "Destruction nid de frelons à Eysines",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-floirac",
    label: "Destruction nid de frelons à Floirac",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-le-haillan",
    label: "Destruction nid de frelons au Haillan",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/destruction-nid-frelons-blanquefort",
    label: "Destruction nid de frelons à Blanquefort",
    priority: 0.7,
    group: "Zones",
  },
  {
    path: "/conseils",
    label: "Conseils frelons & guêpes",
    priority: 0.6,
    group: "Conseils",
  },
  {
    path: "/conseils/que-faire-nid-de-frelons",
    label: "Que faire en cas de nid de frelons",
    priority: 0.6,
    group: "Conseils",
  },
  {
    path: "/conseils/difference-frelon-asiatique-europeen",
    label: "Frelon asiatique ou européen : les différencier",
    priority: 0.6,
    group: "Conseils",
  },
  {
    path: "/conseils/prix-destruction-nid-frelons",
    label: "Combien coûte la destruction d'un nid de frelons",
    priority: 0.6,
    group: "Conseils",
  },
  {
    path: "/conseils/piqure-guepe-frelon-que-faire",
    label: "Piqûre de guêpe ou de frelon : que faire",
    priority: 0.6,
    group: "Conseils",
  },
  {
    path: "/mentions-legales",
    label: "Mentions légales",
    priority: 0.2,
    group: "Informations",
  },
  {
    path: "/politique-confidentialite",
    label: "Politique de confidentialité",
    priority: 0.2,
    group: "Informations",
  },
  {
    path: "/plan-du-site",
    label: "Plan du site",
    priority: 0.2,
    group: "Informations",
  },
];

export const groups: Route["group"][] = [
  "Principales",
  "Services",
  "Zones",
  "Conseils",
  "Informations",
];
