/**
 * Articles de conseils (blog SEO).
 *
 * Chaque article est rédigé à la main pour un contenu unique et utile.
 * Pour ajouter un article : créez une entrée ici, la page /conseils/<slug>
 * et l'entrée du sitemap sont générées automatiquement.
 */

export type ArticleBlock = {
  /** Titre H2 de section. */
  heading: string;
  paragraphs: string[];
  /** Liste à puces optionnelle. */
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  /** Meta description (≤ 160 caractères). */
  description: string;
  /** Accroche affichée sur la carte du hub et sous le H1. */
  excerpt: string;
  /** Date de publication ISO (YYYY-MM-DD). */
  date: string;
  /** Temps de lecture indicatif, ex : "5 min". */
  readingTime: string;
  /** Catégorie éditoriale courte. */
  category: string;
  blocks: ArticleBlock[];
  /** Liens internes suggérés en fin d'article. */
  related: { label: string; href: string }[];
};

export const articles: Article[] = [
  {
    slug: "que-faire-nid-de-frelons",
    title: "Que faire en cas de nid de frelons : les bons réflexes",
    description:
      "Vous avez repéré un nid de frelons chez vous ? Découvrez les bons réflexes, les erreurs à éviter et quand appeler un professionnel pour une intervention en sécurité.",
    excerpt:
      "Repérer un nid de frelons près de chez soi inquiète, à juste titre. Voici les gestes à adopter, les erreurs à éviter et le moment où il faut faire appel à un professionnel.",
    date: "2026-04-12",
    readingTime: "5 min",
    category: "Sécurité",
    blocks: [
      {
        heading: "Garder ses distances avant tout",
        paragraphs: [
          "La première règle, dès qu'un nid de frelons est repéré, est de ne pas s'en approcher. Un frelon isolé loin de son nid n'est pas particulièrement agressif, mais l'ensemble de la colonie défend vigoureusement son habitat. Une vibration du support, une tonte de pelouse, une taille de haie ou simplement un passage trop proche peuvent suffire à déclencher une réaction collective et plusieurs piqûres.",
          "Tenez les enfants et les animaux à l'écart de la zone, et identifiez le trajet régulier des frelons : il indique souvent l'emplacement exact de l'entrée du nid, parfois dissimulée sous une toiture, dans une haie ou dans un recoin abrité.",
        ],
      },
      {
        heading: "Les erreurs à ne surtout pas commettre",
        paragraphs: [
          "Face à un nid, la tentation d'agir soi-même est forte. C'est pourtant la principale cause d'accidents. Plusieurs gestes courants aggravent la situation au lieu de la résoudre :",
        ],
        bullets: [
          "Asperger le nid avec un insecticide du commerce ou de l'eau : la colonie se sent attaquée et devient agressive.",
          "Boucher l'entrée du nid : les frelons cherchent une autre issue, parfois à l'intérieur du logement.",
          "Brûler ou enfumer le nid : risque d'incendie et d'attaque massive, pour une efficacité quasi nulle.",
          "Intervenir de nuit avec une lampe : la lumière attire directement les frelons vers vous.",
          "Monter sur une échelle près du nid : une attaque en hauteur expose à une chute grave.",
        ],
      },
      {
        heading: "Pourquoi confier le nid à un professionnel",
        paragraphs: [
          "Un technicien équipé dispose d'une combinaison de protection intégrale, de perches télescopiques et de produits homologués qui agissent directement sur la colonie. Il localise précisément le nid, même lorsqu'il est caché dans un caisson de volet roulant ou une cavité de toiture, puis le neutralise avant de le retirer lorsque l'accès le permet.",
          "L'intervention est généralement rapide pour un nid accessible et demande davantage de préparation en hauteur. Dans tous les cas, elle évite les piqûres multiples et le risque de voir la colonie se réinstaller. Pour les personnes allergiques, faire appel à un professionnel n'est pas une option de confort mais une vraie mesure de sécurité.",
        ],
      },
      {
        heading: "Préparer l'intervention",
        paragraphs: [
          "Avant la venue du technicien, quelques informations accélèrent le traitement : la hauteur et l'emplacement précis du nid, sa taille approximative, et si possible une photo prise à distance avec un zoom. Ces éléments permettent de confirmer l'espèce — guêpe, frelon européen ou frelon asiatique — et de préparer le bon matériel dès le départ.",
          "Le jour J, fermez les fenêtres et volets proches du nid, éloignez les véhicules si l'intervention se fait en hauteur, et prévoyez un accès dégagé. Une fois le nid traité, votre technicien vous indique quoi surveiller dans les jours qui suivent.",
        ],
      },
    ],
    related: [
      { label: "Destruction de nid de frelons à Bordeaux", href: "/destruction-nid-frelons-bordeaux" },
      { label: "Urgence nid de frelons", href: "/urgence-nid-frelons-bordeaux" },
    ],
  },
  {
    slug: "difference-frelon-asiatique-europeen",
    title: "Frelon asiatique ou européen : comment les différencier",
    description:
      "Frelon asiatique ou frelon européen ? Apprenez à les distinguer grâce à leur couleur, leur taille, leur nid et leur comportement pour réagir correctement.",
    excerpt:
      "Tous les frelons ne se ressemblent pas, et la confusion mène souvent à de mauvaises décisions. Voici comment distinguer le frelon asiatique du frelon européen.",
    date: "2026-04-28",
    readingTime: "6 min",
    category: "Identification",
    blocks: [
      {
        heading: "Deux espèces, deux profils",
        paragraphs: [
          "Le frelon européen (Vespa crabro) est présent en France depuis toujours. Le frelon asiatique (Vespa velutina nigrithorax) est arrivé par le Sud-Ouest au début des années 2000 et a colonisé la Gironde puis le reste du territoire. Les deux peuvent vivre près des habitations, mais leur apparence et leur nid permettent de les reconnaître assez facilement.",
        ],
      },
      {
        heading: "La couleur et la taille",
        paragraphs: [
          "C'est le critère le plus fiable. Le frelon européen est plus grand, avec un abdomen majoritairement jaune rayé de noir et une tête jaune ; il ressemble à une grosse guêpe. Le frelon asiatique est un peu plus petit, nettement plus sombre, avec un thorax brun-noir, un abdomen foncé marqué d'un seul anneau orangé et une tête orange.",
        ],
        bullets: [
          "Frelon européen : grand, abdomen jaune et noir, pattes brunes.",
          "Frelon asiatique : plus sombre, un seul anneau orangé, et surtout des pattes jaunes très caractéristiques.",
        ],
      },
      {
        heading: "Le nid, un indice décisif",
        paragraphs: [
          "Le nid en dit souvent plus que l'insecte lui-même. Le frelon européen construit un nid ouvert vers le bas, installé dans une cavité abritée : tronc creux, cheminée, grenier, abri de jardin. Le nid du frelon asiatique est une grande boule grise et feuilletée, avec une ouverture latérale sur le côté ; on le trouve fréquemment perché très haut dans un arbre, mais aussi sous une toiture ou dans une haie en zone urbaine.",
          "Si vous repérez une sphère grise volumineuse en hauteur, il s'agit très probablement d'un nid de frelon asiatique. En cas de doute, une photo prise à distance suffit à confirmer l'espèce avant toute intervention.",
        ],
      },
      {
        heading: "Comportement et enjeux",
        paragraphs: [
          "Le frelon asiatique est une espèce exotique envahissante. Il se nourrit en partie d'abeilles qu'il chasse devant les ruches, exerçant une forte pression sur les pollinisateurs locaux : c'est un enjeu pour l'apiculture et la biodiversité en Gironde. Le frelon européen, lui, joue plutôt un rôle utile en régulant d'autres insectes et n'est dangereux qu'à proximité immédiate de son nid.",
          "Dans les deux cas, un nid actif proche d'une habitation, d'un lieu de passage ou d'une ruche justifie une intervention. La méthode et le matériel diffèrent toutefois selon l'espèce et la hauteur, d'où l'intérêt d'une identification fiable en amont.",
        ],
      },
      {
        heading: "Et les pièges artisanaux ?",
        paragraphs: [
          "Les pièges « maison » à base de bière ou de sirop, posés au printemps, sont souvent présentés comme une solution contre le frelon asiatique. En réalité, ces pièges non sélectifs capturent énormément d'insectes utiles — abeilles, papillons, syrphes — pour un effet très limité sur la population de frelons. Mieux vaut faire identifier puis traiter le nid, ce qui agit directement sur la colonie.",
        ],
      },
    ],
    related: [
      { label: "Frelon asiatique à Bordeaux", href: "/frelon-asiatique-bordeaux" },
      { label: "Destruction de nid de guêpes à Bordeaux", href: "/destruction-nid-guepes-bordeaux" },
    ],
  },
  {
    slug: "prix-destruction-nid-frelons",
    title: "Combien coûte la destruction d'un nid de frelons ?",
    description:
      "Prix de la destruction d'un nid de frelons : facteurs qui font varier le tarif, fourchettes courantes, prises en charge possibles et conseils pour éviter les mauvaises surprises.",
    excerpt:
      "Le coût d'une intervention dépend de plusieurs facteurs concrets. Voici ce qui fait varier le prix d'une destruction de nid de frelons et comment éviter les mauvaises surprises.",
    date: "2026-05-15",
    readingTime: "5 min",
    category: "Tarifs",
    blocks: [
      {
        heading: "Ce qui fait varier le prix",
        paragraphs: [
          "Il n'existe pas de tarif unique, car chaque intervention est différente. Plusieurs éléments concrets déterminent le prix final :",
        ],
        bullets: [
          "La hauteur du nid : un nid au sol ou accessible à l'échelle coûte moins qu'un nid en haut d'un arbre nécessitant une perche télescopique.",
          "L'emplacement : un nid sous toiture, dans un caisson de volet roulant ou dans une cavité demande du démontage et plus de temps.",
          "L'espèce et la taille de la colonie, qui influent sur la quantité de produit et la durée du traitement.",
          "L'accès au site : terrain dégagé ou intervention difficile au-dessus d'une véranda, d'une cour étroite ou d'un toit en pente.",
          "L'urgence et l'horaire : une intervention en soirée, le dimanche ou un jour férié peut entraîner des frais supplémentaires.",
        ],
      },
      {
        heading: "Des fourchettes réalistes",
        paragraphs: [
          "Pour un nid simple et accessible, l'intervention démarre généralement autour de 100 €. Un nid en hauteur, dissimulé ou exigeant un démontage de toiture se situe plus haut dans la fourchette. La distance entre le technicien et votre domicile peut aussi jouer : au-delà d'un certain rayon, des frais de déplacement s'ajoutent.",
          "Le plus fiable reste un devis donné après description précise de la situation. Une photo du nid et quelques informations — hauteur, emplacement, accès — permettent d'annoncer un prix clair avant tout déplacement, sans surprise sur la facture.",
        ],
      },
      {
        heading: "Prises en charge possibles",
        paragraphs: [
          "Pour un nid de frelon asiatique, certaines communes de la Gironde et certains contrats d'assurance habitation prévoient une participation financière. Cela varie d'une mairie à l'autre et d'un assureur à l'autre : renseignez-vous auprès des deux. Une facture détaillée vous est remise pour appuyer votre demande de remboursement le cas échéant.",
          "Si le nid se trouve sur le domaine public — parc, trottoir, arbre municipal — la bonne démarche est de le signaler à votre mairie, qui peut organiser ou prendre en charge la destruction.",
        ],
      },
      {
        heading: "Éviter les mauvaises surprises",
        paragraphs: [
          "Méfiez-vous des tarifs « à partir de » très bas affichés sans contexte, qui se transforment souvent en facture salée une fois le technicien sur place. Privilégiez un professionnel qui annonce un prix après avoir compris votre situation, détaille ce que comprend l'intervention et ne facture pas le déplacement sans vous avoir prévenu.",
          "Enfin, n'attendez pas. Plus un nid est traité tôt, plus la colonie est petite et l'intervention simple — donc moins coûteuse. Un nid laissé grossir tout l'été demandera davantage de temps et de matériel à l'automne.",
        ],
      },
    ],
    related: [
      { label: "Prix destruction nid de frelons à Bordeaux", href: "/tarifs-destruction-nid-frelons-bordeaux" },
      { label: "Zones d'intervention", href: "/zones-intervention" },
    ],
  },
  {
    slug: "piqure-guepe-frelon-que-faire",
    title: "Piqûre de guêpe ou de frelon : que faire et quand s'inquiéter",
    description:
      "Piqûre de guêpe ou de frelon : les gestes utiles, les signes d'une réaction allergique grave et le moment où il faut appeler les secours. Conseils clairs et pratiques.",
    excerpt:
      "Une piqûre de guêpe ou de frelon est douloureuse mais rarement grave. Voici les gestes utiles, les signes qui doivent alerter et le moment d'appeler les secours.",
    date: "2026-05-29",
    readingTime: "4 min",
    category: "Santé",
    blocks: [
      {
        heading: "Les gestes immédiats",
        paragraphs: [
          "Contrairement à l'abeille, la guêpe et le frelon ne laissent pas leur dard dans la peau : il n'y a donc rien à retirer. Commencez par nettoyer la zone à l'eau et au savon, puis appliquez du froid (poche de glace enveloppée dans un linge) pour limiter la douleur et le gonflement.",
          "Une source de chaleur brève peut aider à dégrader le venin juste après la piqûre, mais le froid reste la référence ensuite. Évitez de gratter : cela aggrave l'inflammation et augmente le risque d'infection. Un antihistaminique ou une crème apaisante peut soulager une réaction locale.",
        ],
      },
      {
        heading: "Réaction locale normale",
        paragraphs: [
          "Dans la grande majorité des cas, la piqûre provoque une douleur vive, une rougeur et un gonflement qui régressent en quelques heures à quelques jours. C'est une réaction normale, sans gravité, même si elle est désagréable. Surveillez simplement l'apparition de signes d'infection (chaleur, pus, douleur qui s'intensifie après 48 h).",
          "Les piqûres dans la bouche ou la gorge — par exemple en buvant dans une canette où s'est glissée une guêpe — sont en revanche à prendre au sérieux, car le gonflement peut gêner la respiration. Dans ce cas, appelez les secours sans attendre.",
        ],
      },
      {
        heading: "Les signes qui doivent alerter",
        paragraphs: [
          "Une réaction allergique grave (choc anaphylactique) est une urgence vitale. Elle survient rapidement après la piqûre et peut concerner une personne déjà sensibilisée. Appelez le 15 ou le 112 immédiatement en présence de l'un de ces signes :",
        ],
        bullets: [
          "Difficulté à respirer, oppression ou sifflement.",
          "Gonflement du visage, des lèvres, de la langue ou de la gorge.",
          "Urticaire généralisée, démangeaisons étendues loin de la piqûre.",
          "Malaise, vertiges, chute de tension, perte de connaissance.",
          "Nausées, vomissements ou douleurs abdominales soudaines.",
        ],
      },
      {
        heading: "Cas particuliers et prévention",
        paragraphs: [
          "Les personnes allergiques connues doivent garder leur trousse d'urgence (stylo d'adrénaline) à portée de main et consulter un allergologue. Les piqûres multiples — typiques d'une attaque de colonie — peuvent aussi devenir dangereuses même sans allergie, en raison de la dose de venin reçue : un avis médical s'impose.",
          "La meilleure prévention reste d'éviter le contact : ne pas laisser traîner de boissons sucrées ou de nourriture à l'extérieur, et surtout faire retirer rapidement tout nid installé près d'un lieu de vie. Un nid proche d'une terrasse, d'une chambre d'enfant ou d'une porte d'entrée multiplie le risque de piqûre et doit être traité en priorité.",
        ],
      },
    ],
    related: [
      { label: "Destruction de nid de guêpes à Bordeaux", href: "/destruction-nid-guepes-bordeaux" },
      { label: "Que faire en cas de nid de frelons", href: "/conseils/que-faire-nid-de-frelons" },
    ],
  },
];

/** Retrouve un article par son slug. */
export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
