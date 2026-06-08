/**
 * Zones d'intervention.
 * - `cities` : liste pour le hub /zones-intervention (mini paragraphe unique chacun).
 * - `localPages` : pages locales dédiées (contenu long, > 600 mots).
 *
 * Pour ajouter une ville sans page dédiée : ajoutez une entrée dans `cities`.
 * Pour créer une nouvelle page locale : ajoutez une entrée dans `localPages`
 * puis créez le dossier app/destruction-nid-frelons-<slug>/page.tsx
 * en réutilisant LocalPageTemplate.
 */

export type City = {
  name: string;
  /** slug de page locale si elle existe, sinon null. */
  slug: string | null;
  /** Mini description unique pour le hub (80-120 mots). */
  intro: string;
};

export const cities: City[] = [
  {
    name: "Bordeaux",
    slug: null,
    intro:
      "Au cœur de Bordeaux, les nids de frelons et de guêpes apparaissent souvent sous les toitures en zinc des échoppes, dans les corniches des immeubles haussmanniens ou dans les cours intérieures arborées. Les quartiers comme les Chartrons, Saint-Augustin, la Bastide ou Caudéran présentent beaucoup de combles et de débords de toit propices à la nidification. Nous intervenons rapidement dans toute la ville, en tenant compte des contraintes de stationnement et d'accès propres au centre historique. Une photo du nid nous aide à préparer le bon matériel avant de nous déplacer chez vous.",
  },
  {
    name: "Mérignac",
    slug: "destruction-nid-frelons-merignac",
    intro:
      "À Mérignac, entre les quartiers pavillonnaires d'Arlac, de Capeyron et les abords de l'aéroport, les jardins matures et les grands arbres favorisent l'installation de nids de frelons asiatiques en hauteur. Les maisons individuelles avec combles et abris de jardin sont également concernées par les guêpes. Nous couvrons l'ensemble de la commune pour une intervention rapide et sécurisée.",
  },
  {
    name: "Pessac",
    slug: "destruction-nid-frelons-pessac",
    intro:
      "Pessac, avec ses zones résidentielles boisées, ses domaines viticoles et la proximité du campus universitaire, offre de nombreux refuges aux frelons et aux guêpes. Les nids se logent volontiers dans les arbres des grands terrains, sous les toitures des maisons des années 30 ou dans les dépendances. Nous intervenons sur tous les quartiers, de Saige à Toctoucau.",
  },
  {
    name: "Talence",
    slug: "destruction-nid-frelons-talence",
    intro:
      "À Talence, le mélange de quartiers résidentiels denses et d'espaces verts du domaine universitaire crée des conditions favorables aux nids de guêpes et de frelons. Les échoppes, les petits collectifs et les jardins partagés sont régulièrement touchés. Notre technicien se déplace rapidement dans toute la commune pour neutraliser le nid en sécurité.",
  },
  {
    name: "Bègles",
    slug: "destruction-nid-frelons-begles",
    intro:
      "À Bègles, les anciennes maisons ouvrières, les berges de la Garonne et les zones d'activités créent des abris variés pour les guêpes et les frelons. Les nids se forment fréquemment sous les toitures basses, dans les caissons de volets roulants ou dans les jardins arborés du secteur résidentiel. Nous intervenons sur l'ensemble de la commune, du centre-ville aux quartiers proches de la Garonne, avec un diagnostic préalable par téléphone ou photo.",
  },
  {
    name: "Lormont",
    slug: "destruction-nid-frelons-lormont",
    intro:
      "À Lormont, sur les coteaux de la rive droite, les jardins en pente, les bois et les résidences offrent de nombreux emplacements aux nids de frelons asiatiques, souvent perchés dans les grands arbres. Les maisons individuelles et les copropriétés sont aussi concernées par les guêpes sous toiture. Nous couvrons tout le secteur, du Bas-Lormont aux hauts de la commune, avec une intervention adaptée à la hauteur du nid.",
  },
  {
    name: "Cenon",
    slug: "destruction-nid-frelons-cenon",
    intro:
      "À Cenon, entre le parc Palmer, les quartiers pavillonnaires et les zones de coteaux boisés, les frelons et les guêpes trouvent facilement de quoi s'installer. Les nids apparaissent dans les arbres, sous les toitures ou dans les abris de jardin. Nous intervenons rapidement sur toute la commune de la rive droite pour sécuriser votre habitation et votre extérieur.",
  },
  {
    name: "Le Bouscat",
    slug: "destruction-nid-frelons-le-bouscat",
    intro:
      "Au Bouscat, les belles maisons bourgeoises, les jardins arborés et la proximité du parc Bordelais favorisent l'installation de nids en hauteur comme dans les combles. Les frelons asiatiques s'y nichent volontiers dans les grands arbres, tandis que les guêpes investissent les sous-toitures. Nous nous déplaçons dans tous les quartiers de la commune pour une intervention soignée et discrète.",
  },
  {
    name: "Bruges",
    slug: "destruction-nid-frelons-bruges",
    intro:
      "À Bruges, entre les zones humides classées, les lotissements récents et les espaces verts, les frelons et les guêpes profitent d'un environnement riche en végétation. Les nids se logent dans les haies, les arbres et les toitures des maisons individuelles. Nous intervenons sur toute la commune, en tenant compte des spécificités des secteurs proches des réserves naturelles.",
  },
  {
    name: "Villenave-d'Ornon",
    slug: "destruction-nid-frelons-villenave-dornon",
    intro:
      "À Villenave-d'Ornon, les grands terrains, les zones pavillonnaires et la proximité de la Garonne et de l'Eau Bourde offrent de nombreux refuges aux frelons et aux guêpes. Les nids apparaissent dans les arbres des jardins, sous les toitures et dans les dépendances. Nous couvrons l'ensemble de la commune, de Chambéry à Sarcignan, pour une intervention rapide et sécurisée.",
  },
  {
    name: "Gradignan",
    slug: "destruction-nid-frelons-gradignan",
    intro:
      "À Gradignan, ville verte traversée par l'Eau Bourde et ses parcs, les nids de frelons asiatiques se nichent souvent en hauteur dans les arbres matures, tandis que les guêpes investissent les combles des maisons. Les quartiers résidentiels boisés sont particulièrement concernés. Nous intervenons sur toute la commune avec le matériel adapté au travail en hauteur.",
  },
  {
    name: "Saint-Médard-en-Jalles",
    slug: "destruction-nid-frelons-saint-medard-en-jalles",
    intro:
      "À Saint-Médard-en-Jalles, la forêt, les jalles et les vastes terrains pavillonnaires créent un terrain idéal pour les frelons asiatiques, dont les nids peuvent atteindre une grande taille dans les arbres. Les guêpes s'installent dans les toitures et les abris de jardin. Nous nous déplaçons dans tous les quartiers de cette commune étendue, du centre à Cérillan et Magudas.",
  },
  {
    name: "Eysines",
    slug: "destruction-nid-frelons-eysines",
    intro:
      "À Eysines, terre maraîchère aux nombreux jardins et serres, les guêpes et les frelons trouvent abris et nourriture en abondance. Les nids se forment dans les haies, les cabanons et sous les toitures des maisons individuelles. Nous intervenons sur l'ensemble de la commune pour neutraliser rapidement le nid et limiter les risques de piqûres.",
  },
  {
    name: "Floirac",
    slug: "destruction-nid-frelons-floirac",
    intro:
      "À Floirac, sur la rive droite, les coteaux boisés, les quartiers résidentiels et les abords de l'Arena accueillent régulièrement des nids de frelons et de guêpes. Les arbres des jardins et les toitures sont les emplacements les plus fréquents. Nous couvrons toute la commune avec une intervention adaptée à la configuration des lieux.",
  },
  {
    name: "Le Haillan",
    slug: "destruction-nid-frelons-le-haillan",
    intro:
      "Au Haillan, les lotissements pavillonnaires bordés d'espaces verts et la proximité des zones boisées favorisent l'installation des frelons asiatiques en hauteur. Les guêpes, elles, privilégient les sous-toitures et les volets roulants des maisons. Nous intervenons sur l'ensemble de la commune pour un traitement rapide et sécurisé du nid.",
  },
  {
    name: "Blanquefort",
    slug: "destruction-nid-frelons-blanquefort",
    intro:
      "À Blanquefort, entre le château, les zones agricoles et les lotissements, les grands arbres et les dépendances offrent de nombreux emplacements aux nids de frelons et de guêpes. Les frelons asiatiques s'y nichent souvent très haut dans les arbres. Nous nous déplaçons dans tous les quartiers de la commune avec le matériel nécessaire au travail en hauteur.",
  },
];

/** Renvoie les villes disposant d'une page locale dédiée. */
export const citiesWithPage = cities.filter((c) => c.slug !== null);

/** Liste de noms de villes, utilisée pour le texte et les schémas. */
export const cityNames = cities.map((c) => c.name);
