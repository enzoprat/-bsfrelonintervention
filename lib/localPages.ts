import type { LocalContent } from "@/components/LocalPageTemplate";

export type LocalPageData = {
  /** Nom de la commune affiché. */
  city: string;
  /** Slug complet de la page (URL). */
  slug: string;
  /** Title SEO. */
  title: string;
  /** Meta description SEO. */
  description: string;
  /** Phrase d'accroche sous le H1. */
  lead: string;
  /** Blocs de contenu uniques. */
  blocks: LocalContent[];
  /** Liens vers communes proches. */
  nearby: { label: string; href: string }[];
};

/**
 * Contenu local centralisé, clé = identifiant court de la commune.
 * Pour ajouter une nouvelle ville SEO : ajoutez une entrée ici, puis créez
 * app/destruction-nid-frelons-<ville>/page.tsx en réutilisant ce gabarit.
 */
export const localPages: Record<string, LocalPageData> = {
  merignac: {
    city: "Mérignac",
    slug: "destruction-nid-frelons-merignac",
    title: "Destruction nid de frelons à Mérignac | Intervention rapide",
    description:
      "Destruction de nid de frelons à Mérignac : intervention rapide et sécurisée à domicile, frelons asiatiques et guêpes. Devis clair par photo, déplacement dans toute la commune.",
    lead: "Intervention rapide et sécurisée pour la destruction de nids de frelons, frelons asiatiques et guêpes à Mérignac et dans tous ses quartiers.",
    blocks: [
      {
        heading: "Une intervention rapide partout à Mérignac",
        paragraphs: [
          "Deuxième ville de la Gironde, Mérignac s'étend sur de vastes quartiers résidentiels où les maisons individuelles, les jardins arborés et les dépendances sont nombreux. Cette diversité d'habitat offre aux frelons et aux guêpes une grande variété d'emplacements pour s'installer, du centre-ville aux secteurs pavillonnaires d'Arlac, de Capeyron, de Beutre ou de Beaudésert.",
          "Nous intervenons sur l'ensemble de la commune pour neutraliser les nids en sécurité, qu'il s'agisse d'un nid de guêpes sous une toiture ou d'un volumineux nid de frelon asiatique perché dans un arbre. Une photo et la hauteur approximative du nid nous permettent de préparer le bon matériel avant de nous déplacer chez vous.",
        ],
      },
      {
        heading: "Les emplacements de nids fréquents à Mérignac",
        paragraphs: [
          "Le bâti mérignacais mêle pavillons des années 1960-1980, maisons plus récentes et grands terrains plantés d'arbres matures. Ce contexte favorise plusieurs types d'installations selon l'espèce concernée.",
        ],
        bullets: [
          "Frelons asiatiques en hauteur dans les chênes, pins et grands arbres des jardins",
          "Nids de guêpes dans les caissons de volets roulants et sous les toitures",
          "Combles et greniers des maisons individuelles",
          "Abris de jardin, garages et dépendances",
          "Haies denses des quartiers pavillonnaires",
        ],
      },
      {
        heading: "Pourquoi faire appel à un professionnel à Mérignac",
        paragraphs: [
          "Sur les grands terrains de Mérignac, les nids de frelons asiatiques se trouvent souvent très haut dans les arbres, hors de portée d'une intervention improvisée. Tenter de déloger un nid soi-même expose à des piqûres multiples et reste rarement efficace sur une colonie installée.",
          "Notre technicien travaille à distance, avec un équipement de protection et, si nécessaire, une perche télescopique pour atteindre les nids en hauteur. Il sécurise la zone autour de l'habitation, neutralise la colonie, puis vous donne des conseils pour limiter le risque de réinstallation.",
        ],
      },
      {
        heading: "Tarifs et déroulé de l'intervention",
        paragraphs: [
          "Le tarif dépend de l'espèce, de la hauteur, de l'accessibilité du nid et de l'éventuel besoin de matériel spécifique. Un nid accessible se traite à un tarif clair annoncé à l'avance, tandis qu'un nid en hauteur fait l'objet d'un devis personnalisé. Nous restons transparents dès le premier échange.",
          "Le déroulé est simple : vous nous envoyez une photo ou vous appelez, nous estimons la situation, nous intervenons en sécurité, puis nous vous conseillons. Mérignac étant limitrophe de Bordeaux, Pessac et Le Haillan, nous y intervenons très rapidement.",
        ],
      },
    ],
    nearby: [
      { label: "Bordeaux", href: "/destruction-nid-frelons-bordeaux" },
      { label: "Pessac", href: "/destruction-nid-frelons-pessac" },
      { label: "Talence", href: "/destruction-nid-frelons-talence" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  pessac: {
    city: "Pessac",
    slug: "destruction-nid-frelons-pessac",
    title: "Destruction nid de frelons à Pessac | Intervention rapide",
    description:
      "Destruction de nid de frelons à Pessac : intervention sécurisée à domicile, frelons asiatiques et guêpes, dans les quartiers boisés et résidentiels. Estimation par photo.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes à Pessac : intervention rapide et sécurisée dans tous les quartiers, du centre aux secteurs boisés.",
    blocks: [
      {
        heading: "Destruction de nids à Pessac et dans ses quartiers",
        paragraphs: [
          "Pessac, l'une des plus grandes communes de Bordeaux Métropole, se distingue par ses vastes zones résidentielles boisées, ses domaines viticoles classés et la présence du campus universitaire. Cet environnement très végétalisé est particulièrement propice à l'installation des frelons et des guêpes, du centre-ville aux quartiers de Saige, France, Magonty, Toctoucau ou les Cité Frugès.",
          "Nous couvrons l'ensemble de la commune pour neutraliser les nids en sécurité. Que le nid soit caché dans une toiture, niché dans un grand arbre ou logé dans une dépendance, une simple photo nous aide à identifier l'espèce et l'emplacement avant l'intervention.",
        ],
      },
      {
        heading: "Un environnement boisé qui attire les frelons",
        paragraphs: [
          "Les grands terrains pessacais, souvent plantés de pins et de chênes, sont un terrain de prédilection pour le frelon asiatique, dont les nids volumineux se perchent fréquemment en hauteur. Les maisons anciennes des années 1930 et les pavillons disposent quant à eux de combles et de toitures où les guêpes s'installent volontiers.",
        ],
        bullets: [
          "Nids de frelons asiatiques en hauteur dans les pins et les chênes",
          "Guêpes sous les toitures des maisons anciennes et des pavillons",
          "Combles, greniers et faux plafonds",
          "Volets roulants, abris de jardin et dépendances",
          "Haies et arbres des domaines et grands jardins",
        ],
      },
      {
        heading: "Ne prenez pas de risque avec un nid actif",
        paragraphs: [
          "Sur les terrains arborés de Pessac, un nid en hauteur est difficile à atteindre et dangereux à manipuler sans équipement. Les travaux de jardinage — taille, élagage, tonte — à proximité d'un nid peuvent déclencher une réaction agressive de la colonie et provoquer des piqûres multiples.",
          "Notre technicien intervient avec une combinaison de protection et le matériel adapté à la hauteur. Il neutralise la colonie à distance, retire ou traite le nid selon la configuration, et sécurise l'ensemble de la zone, notamment lorsque le nid se trouve près d'un lieu de passage.",
        ],
      },
      {
        heading: "Intervention rapide et tarif transparent",
        paragraphs: [
          "Le prix dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous annonçons un tarif clair pour les nids accessibles et établissons un devis personnalisé pour les interventions en hauteur ou difficiles d'accès, sans engagement.",
          "Pessac étant voisine de Bordeaux, Mérignac, Talence et Gradignan, nos délais d'intervention y sont courts. Envoyez-nous une photo du nid ou appelez-nous : nous vous donnons un avis rapide et planifions le passage.",
        ],
      },
    ],
    nearby: [
      { label: "Bordeaux", href: "/destruction-nid-frelons-bordeaux" },
      { label: "Mérignac", href: "/destruction-nid-frelons-merignac" },
      { label: "Talence", href: "/destruction-nid-frelons-talence" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  talence: {
    city: "Talence",
    slug: "destruction-nid-frelons-talence",
    title: "Destruction nid de frelons à Talence | Intervention rapide",
    description:
      "Destruction de nid de frelons à Talence : intervention sécurisée à domicile, frelons asiatiques et guêpes, dans les quartiers résidentiels et le domaine universitaire.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes à Talence : intervention rapide et sécurisée, des quartiers résidentiels au domaine universitaire.",
    blocks: [
      {
        heading: "Intervention nids de frelons et guêpes à Talence",
        paragraphs: [
          "Talence, commune dense et étudiante de la rive gauche, présente un habitat varié : échoppes bordelaises, petits collectifs, maisons de ville et pavillons, mêlés aux vastes espaces verts du domaine universitaire et du parc Peixotto. Cette alternance de zones bâties et d'espaces arborés crée des conditions favorables à l'installation des nids de guêpes comme de frelons.",
          "Nous intervenons dans toute la commune, du centre-ville aux quartiers de Thouars, Médoquine ou Forum, pour neutraliser les nids en sécurité. Envoyez-nous une photo du nid : nous identifions l'espèce et préparons le matériel adapté avant de venir.",
        ],
      },
      {
        heading: "Des nids favorisés par la densité et les espaces verts",
        paragraphs: [
          "À Talence, la proximité entre habitations et la présence d'arbres matures expliquent la fréquence des nids. Les échoppes et petits immeubles offrent de nombreux recoins de toiture, tandis que les jardins et le domaine universitaire abritent volontiers les frelons asiatiques en hauteur.",
        ],
        bullets: [
          "Nids de guêpes sous les toitures d'échoppes et de petits collectifs",
          "Caissons de volets roulants et faux plafonds",
          "Frelons asiatiques en hauteur dans les arbres des parcs et jardins",
          "Combles, greniers et garages",
          "Murets et cavités de façade en zone dense",
        ],
      },
      {
        heading: "Une intervention sécurisée plutôt que des risques inutiles",
        paragraphs: [
          "Dans un secteur aussi densément habité que Talence, un nid actif proche d'une fenêtre, d'un balcon ou d'un lieu de passage augmente nettement le risque de piqûre, en particulier pour les enfants et les personnes allergiques. Tenter de détruire le nid soi-même, surtout en hauteur, est dangereux et souvent inefficace.",
          "Notre technicien intervient équipé, neutralise la colonie à distance et retire ou traite le nid selon sa position. Il prend soin de sécuriser les abords immédiats, ce qui est essentiel dans un environnement où le voisinage est proche.",
        ],
      },
      {
        heading: "Tarif clair et délais courts",
        paragraphs: [
          "Le prix dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous communiquons un tarif transparent pour les nids accessibles et établissons un devis pour les interventions en hauteur ou complexes, toujours sans engagement.",
          "Talence étant directement voisine de Bordeaux, Bègles et Pessac, nos délais d'intervention y sont particulièrement courts. Appelez-nous ou envoyez une photo : nous vous répondons rapidement et planifions le passage.",
        ],
      },
    ],
    nearby: [
      { label: "Bordeaux", href: "/destruction-nid-frelons-bordeaux" },
      { label: "Bègles", href: "/destruction-nid-frelons-begles" },
      { label: "Pessac", href: "/destruction-nid-frelons-pessac" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  begles: {
    city: "Bègles",
    slug: "destruction-nid-frelons-begles",
    title: "Destruction nid de frelons à Bègles | Intervention rapide",
    description:
      "Destruction de nid de frelons à Bègles : intervention rapide et sécurisée à domicile, frelons asiatiques et guêpes, du centre aux berges de la Garonne. Estimation par photo.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes à Bègles : intervention rapide et sécurisée, des échoppes du centre aux quartiers proches de la Garonne.",
    blocks: [
      {
        heading: "Destruction de nids de frelons et de guêpes à Bègles",
        paragraphs: [
          "Commune de la rive gauche directement au sud de Bordeaux, Bègles conserve un habitat marqué par ses anciennes maisons ouvrières et ses échoppes, auxquelles s'ajoutent les lotissements récents du quartier des Terres Neuves et les zones d'activités. Cette mosaïque de toitures basses, de cours et de petits jardins multiplie les recoins où guêpes et frelons viennent s'installer au fil de la belle saison.",
          "Nous intervenons dans toute la commune, du centre-ville aux abords de la Garonne et du parc de Mussonville, pour neutraliser les nids en sécurité. Une photo du nid et sa hauteur approximative nous suffisent pour identifier l'espèce et préparer le matériel adapté avant le déplacement.",
        ],
      },
      {
        heading: "Où se cachent les nids à Bègles",
        paragraphs: [
          "Le bâti béglais, dense et souvent ancien, offre de nombreuses cavités discrètes : c'est dans ces espaces sombres et protégés que les guêpes établissent volontiers leur nid. Les jardins arborés et les berges plantées attirent quant à eux le frelon asiatique, qui construit ses nids volumineux en hauteur.",
        ],
        bullets: [
          "Nids de guêpes sous les toitures basses des échoppes et maisons de ville",
          "Caissons de volets roulants, greniers et faux plafonds",
          "Frelons asiatiques en hauteur dans les arbres des jardins et le long de la Garonne",
          "Cabanons, garages et dépendances des secteurs pavillonnaires",
          "Murets et cavités de façade dans les rues étroites du centre",
        ],
      },
      {
        heading: "Pourquoi confier l'intervention à un professionnel",
        paragraphs: [
          "Dans un tissu urbain dense comme celui de Bègles, un nid actif proche d'une fenêtre, d'une terrasse ou d'un lieu de passage augmente nettement le risque de piqûres, en particulier pour les enfants et les personnes allergiques. Vouloir détruire le nid soi-même, surtout sous une toiture ou en hauteur, est dangereux et rarement efficace sur une colonie installée.",
          "Notre technicien intervient équipé d'une combinaison de protection et du matériel adapté à la configuration des lieux. Il neutralise la colonie à distance, retire ou traite le nid, puis sécurise les abords immédiats — un point essentiel quand le voisinage est proche.",
        ],
      },
      {
        heading: "Tarif transparent et délais courts à Bègles",
        paragraphs: [
          "Le prix dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous communiquons un tarif clair pour les nids accessibles et établissons un devis personnalisé pour les interventions en hauteur ou complexes, toujours sans engagement.",
          "Bègles étant limitrophe de Bordeaux, Talence et Villenave-d'Ornon, nos délais d'intervention y sont particulièrement courts. Envoyez-nous une photo ou appelez-nous : nous vous donnons un avis rapide et planifions le passage.",
        ],
      },
    ],
    nearby: [
      { label: "Bordeaux", href: "/destruction-nid-frelons-bordeaux" },
      { label: "Talence", href: "/destruction-nid-frelons-talence" },
      { label: "Villenave-d'Ornon", href: "/destruction-nid-frelons-villenave-dornon" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  lormont: {
    city: "Lormont",
    slug: "destruction-nid-frelons-lormont",
    title: "Destruction nid de frelons à Lormont | Intervention rapide",
    description:
      "Destruction de nid de frelons à Lormont : intervention sécurisée à domicile sur les coteaux de la rive droite, frelons asiatiques et guêpes. Devis clair par photo.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes à Lormont : intervention rapide et sécurisée, du Bas-Lormont aux coteaux boisés de la rive droite.",
    blocks: [
      {
        heading: "Intervention nids de frelons et guêpes à Lormont",
        paragraphs: [
          "Adossée aux coteaux de la rive droite, Lormont se caractérise par son relief marqué, ses jardins en pente, ses bois et le parc de l'Ermitage. Entre le Bas-Lormont en bord de Garonne et les hauteurs résidentielles de Génicart, cette topographie variée et très végétalisée offre de nombreux emplacements aux nids de frelons et de guêpes.",
          "Nous intervenons sur toute la commune pour neutraliser les nids en sécurité, qu'il s'agisse d'un nid de guêpes sous une toiture ou d'un nid de frelon asiatique perché dans un grand arbre des coteaux. Une simple photo nous aide à identifier l'espèce et à préparer le matériel avant de venir.",
        ],
      },
      {
        heading: "Un relief boisé propice aux nids en hauteur",
        paragraphs: [
          "Les arbres matures des coteaux et des parcs lormontais sont un terrain de prédilection pour le frelon asiatique, dont les nids sphériques se perchent souvent très haut. Le bâti, qui mêle maisons individuelles et copropriétés, est quant à lui régulièrement concerné par les guêpes sous toiture.",
        ],
        bullets: [
          "Frelons asiatiques en hauteur dans les arbres des coteaux et du parc de l'Ermitage",
          "Nids de guêpes sous les toitures des maisons et des résidences",
          "Combles, greniers et caissons de volets roulants",
          "Jardins en pente, haies et abris de jardin",
          "Dépendances et garages des secteurs pavillonnaires",
        ],
      },
      {
        heading: "Ne prenez aucun risque avec un nid en hauteur",
        paragraphs: [
          "Sur les terrains pentus et arborés de Lormont, un nid perché est difficile à atteindre et dangereux à manipuler sans équipement. Les travaux de jardinage à proximité — taille, élagage, tonte — peuvent déclencher une réaction agressive de la colonie et provoquer des piqûres multiples.",
          "Notre technicien travaille à distance, avec une perche télescopique si nécessaire pour les nids les plus hauts. Il neutralise la colonie, traite ou retire le nid selon la configuration, et sécurise la zone autour de l'habitation.",
        ],
      },
      {
        heading: "Tarif clair et intervention rapide à Lormont",
        paragraphs: [
          "Le tarif dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Un nid accessible se traite à un prix annoncé à l'avance ; un nid en hauteur fait l'objet d'un devis personnalisé, sans engagement.",
          "Lormont étant voisine de Cenon, Floirac et Bordeaux via le pont d'Aquitaine, nos délais y sont courts. Appelez-nous ou envoyez une photo du nid : nous vous répondons rapidement et organisons le passage.",
        ],
      },
    ],
    nearby: [
      { label: "Cenon", href: "/destruction-nid-frelons-cenon" },
      { label: "Floirac", href: "/destruction-nid-frelons-floirac" },
      { label: "Bordeaux", href: "/destruction-nid-frelons-bordeaux" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  cenon: {
    city: "Cenon",
    slug: "destruction-nid-frelons-cenon",
    title: "Destruction nid de frelons à Cenon | Intervention rapide",
    description:
      "Destruction de nid de frelons à Cenon : intervention sécurisée à domicile sur la rive droite, frelons asiatiques et guêpes, du parc Palmer aux coteaux. Estimation par photo.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes à Cenon : intervention rapide et sécurisée, du parc Palmer aux quartiers pavillonnaires des coteaux.",
    blocks: [
      {
        heading: "Destruction de nids à Cenon et sur les coteaux",
        paragraphs: [
          "Sur la rive droite face à Bordeaux, Cenon alterne quartiers pavillonnaires, grands ensembles et coteaux boisés autour du parc Palmer. Cette diversité d'habitat et la présence d'espaces verts importants créent des conditions très favorables à l'installation des nids de frelons et de guêpes, du Plateau à La Morlette.",
          "Nous couvrons l'ensemble de la commune pour neutraliser les nids en sécurité. Que le nid soit logé sous une toiture, niché dans un arbre du parc ou installé dans un abri de jardin, une photo nous permet d'identifier l'espèce et de préparer l'intervention.",
        ],
      },
      {
        heading: "Des nids favorisés par les espaces verts",
        paragraphs: [
          "Les arbres matures des coteaux et du parc Palmer attirent le frelon asiatique, dont les nids se perchent souvent en hauteur. Les maisons individuelles et les copropriétés cenonnaises offrent par ailleurs de nombreux abris aux guêpes, sous les toitures comme dans les combles.",
        ],
        bullets: [
          "Frelons asiatiques en hauteur dans les arbres des coteaux et des parcs",
          "Nids de guêpes sous les toitures et dans les greniers",
          "Caissons de volets roulants et faux plafonds",
          "Abris de jardin, garages et dépendances",
          "Haies et arbres des quartiers pavillonnaires",
        ],
      },
      {
        heading: "Une intervention sécurisée plutôt que des risques",
        paragraphs: [
          "Un nid actif proche d'une habitation, d'une aire de jeux ou d'un lieu de passage augmente le risque de piqûres, surtout pour les enfants et les personnes allergiques. Tenter de détruire un nid soi-même, en particulier en hauteur, est dangereux et souvent inefficace.",
          "Notre technicien intervient équipé, neutralise la colonie à distance et traite ou retire le nid selon sa position. Il sécurise ensuite les abords immédiats pour protéger les habitants et le voisinage.",
        ],
      },
      {
        heading: "Tarif transparent et délais courts à Cenon",
        paragraphs: [
          "Le prix dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous annonçons un tarif clair pour les nids accessibles et établissons un devis pour les interventions en hauteur ou complexes, sans engagement.",
          "Cenon étant directement voisine de Lormont, Floirac et Bordeaux, nos délais d'intervention y sont courts. Envoyez-nous une photo ou appelez-nous pour un avis rapide et la planification du passage.",
        ],
      },
    ],
    nearby: [
      { label: "Lormont", href: "/destruction-nid-frelons-lormont" },
      { label: "Floirac", href: "/destruction-nid-frelons-floirac" },
      { label: "Bordeaux", href: "/destruction-nid-frelons-bordeaux" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  "le-bouscat": {
    city: "Le Bouscat",
    slug: "destruction-nid-frelons-le-bouscat",
    title: "Destruction nid de frelons au Bouscat | Intervention rapide",
    description:
      "Destruction de nid de frelons au Bouscat : intervention discrète et sécurisée à domicile, frelons asiatiques et guêpes, des maisons bourgeoises aux jardins arborés.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes au Bouscat : intervention rapide, soignée et discrète, des maisons bourgeoises aux abords du parc Bordelais.",
    blocks: [
      {
        heading: "Intervention nids de frelons et guêpes au Bouscat",
        paragraphs: [
          "Commune résidentielle au nord-ouest de Bordeaux, Le Bouscat se distingue par ses belles maisons bourgeoises, ses jardins arborés et la proximité du parc Bordelais et de l'hippodrome. Ce cadre verdoyant, riche en grands arbres et en sous-toitures anciennes, est particulièrement propice à l'installation des frelons et des guêpes.",
          "Nous intervenons dans tous les quartiers, de La Source au centre, pour neutraliser les nids en sécurité et avec discrétion. Une photo du nid et sa hauteur approximative suffisent pour préparer le matériel adapté avant de nous déplacer.",
        ],
      },
      {
        heading: "Des jardins et des toitures propices aux nids",
        paragraphs: [
          "Les grands arbres des propriétés bouscataises et la végétation du parc Bordelais voisin offrent au frelon asiatique des emplacements en hauteur recherchés. Les maisons anciennes, avec leurs combles et leurs débords de toit, abritent quant à elles fréquemment des nids de guêpes.",
        ],
        bullets: [
          "Frelons asiatiques en hauteur dans les grands arbres des jardins",
          "Nids de guêpes sous les toitures et corniches des maisons bourgeoises",
          "Combles, greniers et caissons de volets roulants",
          "Dépendances, vérandas et abris de jardin",
          "Haies et arbustes denses des propriétés arborées",
        ],
      },
      {
        heading: "Une intervention soignée et sans risque",
        paragraphs: [
          "Un nid en hauteur dans un grand arbre ou sous une toiture ancienne est difficile à atteindre et dangereux à manipuler sans équipement. Les piqûres multiples sont un risque réel dès qu'on s'approche d'une colonie active.",
          "Notre technicien intervient avec une combinaison de protection et le matériel adapté à la hauteur, en veillant à préserver le jardin et l'habitation. Il neutralise la colonie, retire ou traite le nid, puis sécurise la zone.",
        ],
      },
      {
        heading: "Tarif clair et délais courts au Bouscat",
        paragraphs: [
          "Le tarif dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous annonçons un prix clair pour les nids accessibles et établissons un devis pour les interventions en hauteur, sans engagement.",
          "Le Bouscat étant voisin de Bordeaux, Bruges et Eysines, nous y intervenons rapidement. Appelez-nous ou envoyez une photo du nid pour obtenir un avis et planifier le passage.",
        ],
      },
    ],
    nearby: [
      { label: "Bordeaux", href: "/destruction-nid-frelons-bordeaux" },
      { label: "Bruges", href: "/destruction-nid-frelons-bruges" },
      { label: "Eysines", href: "/destruction-nid-frelons-eysines" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  bruges: {
    city: "Bruges",
    slug: "destruction-nid-frelons-bruges",
    title: "Destruction nid de frelons à Bruges | Intervention rapide",
    description:
      "Destruction de nid de frelons à Bruges : intervention sécurisée à domicile, frelons asiatiques et guêpes, des lotissements aux abords des marais. Estimation par photo.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes à Bruges : intervention rapide et sécurisée, des lotissements du Tasta aux abords des marais classés.",
    blocks: [
      {
        heading: "Destruction de nids de frelons et de guêpes à Bruges",
        paragraphs: [
          "Au nord de Bordeaux, Bruges associe lotissements récents, quartiers résidentiels comme le Tasta ou Terrefort, et un environnement naturel riche autour de la réserve des marais de Bruges et du lac. Cette abondance de végétation et de zones humides offre aux frelons et aux guêpes un terrain particulièrement favorable.",
          "Nous intervenons sur toute la commune pour neutraliser les nids en sécurité, en tenant compte des spécificités des secteurs proches des espaces naturels. Une photo du nid nous aide à identifier l'espèce et à adapter notre matériel avant l'intervention.",
        ],
      },
      {
        heading: "Un environnement humide et verdoyant",
        paragraphs: [
          "La proximité des marais, des haies et des arbres favorise l'implantation du frelon asiatique, dont les nids volumineux se nichent en hauteur. Les maisons des lotissements, récentes pour beaucoup, sont quant à elles concernées par les guêpes au niveau des toitures et des volets roulants.",
        ],
        bullets: [
          "Frelons asiatiques en hauteur dans les arbres et les haies",
          "Nids de guêpes sous les toitures des maisons de lotissement",
          "Caissons de volets roulants et combles",
          "Abris de jardin, terrasses couvertes et dépendances",
          "Haies denses bordant les parcelles résidentielles",
        ],
      },
      {
        heading: "Pourquoi faire appel à un professionnel à Bruges",
        paragraphs: [
          "Près des zones végétalisées, les nids de frelons asiatiques passent parfois inaperçus jusqu'à atteindre une taille importante. Vouloir s'en approcher ou les déloger soi-même expose à des piqûres multiples et reste rarement efficace.",
          "Notre technicien intervient équipé et à distance, avec le matériel adapté à la hauteur du nid. Il neutralise la colonie, traite ou retire le nid, et sécurise les abords de l'habitation tout en respectant l'environnement proche.",
        ],
      },
      {
        heading: "Tarif transparent et intervention rapide",
        paragraphs: [
          "Le prix dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous annonçons un tarif clair pour les nids accessibles et établissons un devis pour les interventions en hauteur, sans engagement.",
          "Bruges étant voisine du Bouscat, de Blanquefort et de Bordeaux, nos délais y sont courts. Envoyez-nous une photo ou appelez-nous pour un avis rapide et la planification du passage.",
        ],
      },
    ],
    nearby: [
      { label: "Le Bouscat", href: "/destruction-nid-frelons-le-bouscat" },
      { label: "Blanquefort", href: "/destruction-nid-frelons-blanquefort" },
      { label: "Bordeaux", href: "/destruction-nid-frelons-bordeaux" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  "villenave-dornon": {
    city: "Villenave-d'Ornon",
    slug: "destruction-nid-frelons-villenave-dornon",
    title: "Destruction nid de frelons à Villenave-d'Ornon | Intervention rapide",
    description:
      "Destruction de nid de frelons à Villenave-d'Ornon : intervention sécurisée à domicile, frelons asiatiques et guêpes, des grands terrains aux abords de la Garonne.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes à Villenave-d'Ornon : intervention rapide et sécurisée, de Chambéry à Sarcignan et aux abords de l'Eau Bourde.",
    blocks: [
      {
        heading: "Intervention nids de frelons et guêpes à Villenave-d'Ornon",
        paragraphs: [
          "Au sud de la métropole, Villenave-d'Ornon s'étend entre la Garonne, l'Eau Bourde et de vastes secteurs pavillonnaires. Les grands terrains arborés, les jardins matures et la proximité des cours d'eau créent un cadre très favorable à l'installation des nids de frelons et de guêpes, de Chambéry à Sarcignan en passant par Courréjean.",
          "Nous couvrons l'ensemble de cette commune étendue pour neutraliser les nids en sécurité. Une photo du nid et sa hauteur approximative suffisent pour identifier l'espèce et préparer le matériel adapté avant de nous déplacer.",
        ],
      },
      {
        heading: "Grands terrains et nids en hauteur",
        paragraphs: [
          "Les vastes jardins villenavais, souvent plantés d'arbres anciens, favorisent l'installation du frelon asiatique, dont les nids peuvent atteindre une belle taille en hauteur. Les maisons individuelles et leurs dépendances offrent par ailleurs de nombreux abris aux guêpes.",
        ],
        bullets: [
          "Frelons asiatiques en hauteur dans les grands arbres des jardins",
          "Nids de guêpes sous les toitures et dans les combles",
          "Caissons de volets roulants et faux plafonds",
          "Abris de jardin, garages et dépendances des grands terrains",
          "Haies et arbres bordant la Garonne et l'Eau Bourde",
        ],
      },
      {
        heading: "Ne prenez pas de risque avec un nid actif",
        paragraphs: [
          "Sur les grands terrains de Villenave-d'Ornon, un nid en hauteur est difficile à atteindre et dangereux à manipuler sans équipement. Les travaux d'entretien du jardin à proximité d'un nid peuvent déclencher une réaction agressive de la colonie.",
          "Notre technicien intervient avec une combinaison de protection et, si besoin, une perche télescopique pour les nids les plus hauts. Il neutralise la colonie à distance, traite ou retire le nid, puis sécurise les abords de l'habitation.",
        ],
      },
      {
        heading: "Tarif clair et délais courts",
        paragraphs: [
          "Le prix dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous communiquons un tarif transparent pour les nids accessibles et établissons un devis pour les interventions en hauteur ou complexes, sans engagement.",
          "Villenave-d'Ornon étant voisine de Bègles, Talence et Gradignan, nos délais d'intervention y sont courts. Appelez-nous ou envoyez une photo du nid pour un avis rapide et la planification du passage.",
        ],
      },
    ],
    nearby: [
      { label: "Bègles", href: "/destruction-nid-frelons-begles" },
      { label: "Talence", href: "/destruction-nid-frelons-talence" },
      { label: "Gradignan", href: "/destruction-nid-frelons-gradignan" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  gradignan: {
    city: "Gradignan",
    slug: "destruction-nid-frelons-gradignan",
    title: "Destruction nid de frelons à Gradignan | Intervention rapide",
    description:
      "Destruction de nid de frelons à Gradignan : intervention sécurisée à domicile dans cette ville verte, frelons asiatiques et guêpes. Devis clair par photo, travail en hauteur.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes à Gradignan : intervention rapide et sécurisée, des quartiers boisés aux parcs traversés par l'Eau Bourde.",
    blocks: [
      {
        heading: "Destruction de nids à Gradignan, ville verte",
        paragraphs: [
          "Au sud-ouest de Bordeaux, Gradignan est réputée pour son cadre verdoyant : parcs de Mandavit et de Laurenzane, vallée de l'Eau Bourde, quartiers résidentiels bordés d'arbres matures. Cet environnement particulièrement arboré est un terrain idéal pour le frelon asiatique comme pour les guêpes.",
          "Nous intervenons sur toute la commune pour neutraliser les nids en sécurité, du centre aux abords du prieuré de Cayac. Une photo du nid nous permet d'identifier l'espèce et de préparer le matériel, notamment lorsque le nid se trouve en hauteur.",
        ],
      },
      {
        heading: "Un cadre arboré qui attire les frelons",
        paragraphs: [
          "Les grands arbres des parcs et des jardins gradignanais offrent au frelon asiatique des emplacements en hauteur recherchés, où ses nids passent parfois inaperçus jusqu'à la chute des feuilles. Les maisons, souvent dotées de combles, abritent fréquemment des nids de guêpes.",
        ],
        bullets: [
          "Frelons asiatiques en hauteur dans les arbres des parcs et jardins",
          "Nids de guêpes sous les toitures et dans les greniers",
          "Caissons de volets roulants et faux plafonds",
          "Abris de jardin, garages et dépendances",
          "Haies et arbustes denses des quartiers résidentiels",
        ],
      },
      {
        heading: "Une intervention en hauteur en toute sécurité",
        paragraphs: [
          "Un nid perché dans un grand arbre est hors de portée d'une intervention improvisée et dangereux à manipuler. Les piqûres multiples sont un risque réel, en particulier lors des travaux de jardinage à proximité.",
          "Notre technicien travaille à distance, avec une perche télescopique pour atteindre les nids les plus hauts. Il neutralise la colonie, traite ou retire le nid selon la configuration, et sécurise les abords de l'habitation.",
        ],
      },
      {
        heading: "Tarif transparent et intervention rapide",
        paragraphs: [
          "Le prix dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous annonçons un tarif clair pour les nids accessibles et établissons un devis pour les interventions en hauteur, sans engagement.",
          "Gradignan étant voisine de Pessac, Talence et Villenave-d'Ornon, nos délais y sont courts. Envoyez-nous une photo ou appelez-nous pour un avis rapide et la planification du passage.",
        ],
      },
    ],
    nearby: [
      { label: "Pessac", href: "/destruction-nid-frelons-pessac" },
      { label: "Talence", href: "/destruction-nid-frelons-talence" },
      { label: "Villenave-d'Ornon", href: "/destruction-nid-frelons-villenave-dornon" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  "saint-medard-en-jalles": {
    city: "Saint-Médard-en-Jalles",
    slug: "destruction-nid-frelons-saint-medard-en-jalles",
    title: "Destruction nid de frelons à Saint-Médard-en-Jalles | Intervention rapide",
    description:
      "Destruction de nid de frelons à Saint-Médard-en-Jalles : intervention sécurisée à domicile, frelons asiatiques et guêpes, de la forêt aux quartiers pavillonnaires.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes à Saint-Médard-en-Jalles : intervention rapide et sécurisée, du centre à Cérillan, Magudas et Issac.",
    blocks: [
      {
        heading: "Intervention nids de frelons et guêpes à Saint-Médard-en-Jalles",
        paragraphs: [
          "Vaste commune de l'ouest de la métropole, Saint-Médard-en-Jalles est bordée par la forêt et traversée par les jalles. Ses étendues boisées et ses grands terrains pavillonnaires, du centre à Cérillan, Magudas, Issac ou Gajac, offrent aux frelons asiatiques un environnement idéal, où leurs nids peuvent atteindre une taille importante.",
          "Nous nous déplaçons dans tous les quartiers de cette commune étendue pour neutraliser les nids en sécurité. Une photo du nid et sa hauteur approximative nous suffisent pour identifier l'espèce et préparer le matériel adapté.",
        ],
      },
      {
        heading: "Forêt, jalles et grands terrains",
        paragraphs: [
          "La proximité de la forêt et des cours d'eau favorise fortement le frelon asiatique, dont les nids se perchent en hauteur dans les pins et les chênes. Les guêpes, elles, s'installent volontiers dans les toitures et les abris de jardin des nombreuses maisons individuelles.",
        ],
        bullets: [
          "Frelons asiatiques en hauteur dans les pins, chênes et lisières boisées",
          "Nids de guêpes sous les toitures et dans les combles",
          "Caissons de volets roulants et faux plafonds",
          "Abris de jardin, cabanons et dépendances des grands terrains",
          "Haies et arbres bordant les parcelles et les jalles",
        ],
      },
      {
        heading: "Un nid en hauteur, une affaire de professionnel",
        paragraphs: [
          "Dans un environnement aussi arboré, un nid de frelon asiatique peut être volumineux et perché très haut, hors de portée d'une intervention improvisée. S'en approcher expose à des piqûres multiples et reste rarement efficace sur une colonie installée.",
          "Notre technicien intervient équipé et à distance, avec une perche télescopique pour les nids les plus hauts. Il neutralise la colonie, traite ou retire le nid, et sécurise les abords de l'habitation.",
        ],
      },
      {
        heading: "Tarif clair et délais maîtrisés",
        paragraphs: [
          "Le prix dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous communiquons un tarif transparent pour les nids accessibles et établissons un devis pour les interventions en hauteur ou éloignées, sans engagement.",
          "Saint-Médard-en-Jalles étant voisine d'Eysines, du Haillan et de Mérignac, nous organisons rapidement le déplacement. Appelez-nous ou envoyez une photo du nid pour un avis rapide.",
        ],
      },
    ],
    nearby: [
      { label: "Eysines", href: "/destruction-nid-frelons-eysines" },
      { label: "Le Haillan", href: "/destruction-nid-frelons-le-haillan" },
      { label: "Mérignac", href: "/destruction-nid-frelons-merignac" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  eysines: {
    city: "Eysines",
    slug: "destruction-nid-frelons-eysines",
    title: "Destruction nid de frelons à Eysines | Intervention rapide",
    description:
      "Destruction de nid de frelons à Eysines : intervention sécurisée à domicile, frelons asiatiques et guêpes, des terres maraîchères aux quartiers résidentiels.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes à Eysines : intervention rapide et sécurisée, du Vigean à Migron et aux terres maraîchères.",
    blocks: [
      {
        heading: "Destruction de nids à Eysines, terre maraîchère",
        paragraphs: [
          "À l'ouest de Bordeaux, Eysines est connue pour ses terres maraîchères, ses jardins et ses serres, auxquels s'ajoutent des quartiers résidentiels comme Le Vigean, Migron ou Cantinolle. Cette abondance de cultures, de haies et d'espaces verts offre aux guêpes et aux frelons abris et nourriture en quantité.",
          "Nous intervenons sur l'ensemble de la commune pour neutraliser rapidement les nids et limiter les risques de piqûres. Une photo du nid nous aide à identifier l'espèce et à préparer le matériel adapté avant le déplacement.",
        ],
      },
      {
        heading: "Jardins, serres et haies propices aux nids",
        paragraphs: [
          "Les nombreux jardins, cabanons et serres eysinais constituent des refuges appréciés des guêpes, tandis que les arbres et les haies attirent le frelon asiatique en hauteur. La présence de cultures favorise par ailleurs la fréquentation des insectes au plus près des habitations.",
        ],
        bullets: [
          "Nids de guêpes dans les cabanons, serres et abris de jardin",
          "Frelons asiatiques en hauteur dans les arbres et les haies",
          "Toitures, combles et caissons de volets roulants des maisons",
          "Murets, tas de bois et structures de jardin",
          "Haies denses bordant les parcelles maraîchères et résidentielles",
        ],
      },
      {
        heading: "Une intervention rapide et sans risque",
        paragraphs: [
          "Un nid actif au cœur d'un jardin ou près d'une habitation augmente nettement le risque de piqûres, en particulier pour les enfants et les personnes allergiques. Tenter de le détruire soi-même est dangereux et souvent inefficace.",
          "Notre technicien intervient équipé, neutralise la colonie à distance et traite ou retire le nid selon sa position. Il sécurise ensuite la zone pour vous permettre de profiter à nouveau de votre extérieur en toute tranquillité.",
        ],
      },
      {
        heading: "Tarif transparent et délais courts à Eysines",
        paragraphs: [
          "Le prix dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous annonçons un tarif clair pour les nids accessibles et établissons un devis pour les interventions en hauteur, sans engagement.",
          "Eysines étant voisine du Haillan, de Mérignac et du Bouscat, nous y intervenons rapidement. Envoyez-nous une photo ou appelez-nous pour un avis rapide et la planification du passage.",
        ],
      },
    ],
    nearby: [
      { label: "Le Haillan", href: "/destruction-nid-frelons-le-haillan" },
      { label: "Mérignac", href: "/destruction-nid-frelons-merignac" },
      { label: "Le Bouscat", href: "/destruction-nid-frelons-le-bouscat" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  floirac: {
    city: "Floirac",
    slug: "destruction-nid-frelons-floirac",
    title: "Destruction nid de frelons à Floirac | Intervention rapide",
    description:
      "Destruction de nid de frelons à Floirac : intervention sécurisée à domicile sur la rive droite, frelons asiatiques et guêpes, des coteaux aux abords de l'Arena.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes à Floirac : intervention rapide et sécurisée, des coteaux boisés aux quartiers proches de la Garonne.",
    blocks: [
      {
        heading: "Intervention nids de frelons et guêpes à Floirac",
        paragraphs: [
          "Sur la rive droite, Floirac mêle coteaux boisés, quartiers résidentiels et secteurs en plein renouveau autour de l'Arena et des bords de Garonne. Cette diversité de paysages, entre relief arboré et zones habitées, crée des conditions favorables à l'installation des nids de frelons et de guêpes.",
          "Nous intervenons sur toute la commune pour neutraliser les nids en sécurité, du bas de Floirac aux hauteurs résidentielles et au quartier de Dravemont. Une photo du nid nous aide à identifier l'espèce et à préparer l'intervention.",
        ],
      },
      {
        heading: "Des coteaux boisés propices aux nids en hauteur",
        paragraphs: [
          "Les arbres matures des coteaux floiracais attirent le frelon asiatique, dont les nids se perchent souvent très haut. Les maisons des quartiers résidentiels, avec leurs toitures et leurs combles, sont quant à elles régulièrement concernées par les guêpes.",
        ],
        bullets: [
          "Frelons asiatiques en hauteur dans les arbres des coteaux",
          "Nids de guêpes sous les toitures et dans les greniers",
          "Caissons de volets roulants et faux plafonds",
          "Abris de jardin, garages et dépendances",
          "Haies et arbustes des quartiers pavillonnaires",
        ],
      },
      {
        heading: "Ne prenez aucun risque avec un nid actif",
        paragraphs: [
          "Sur les terrains pentus et arborés de Floirac, un nid en hauteur est difficile à atteindre et dangereux à manipuler sans équipement. Les travaux de jardinage à proximité peuvent déclencher une réaction agressive de la colonie.",
          "Notre technicien intervient à distance, avec le matériel adapté à la hauteur. Il neutralise la colonie, traite ou retire le nid, puis sécurise les abords de l'habitation.",
        ],
      },
      {
        heading: "Tarif clair et délais courts à Floirac",
        paragraphs: [
          "Le prix dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous annonçons un tarif transparent pour les nids accessibles et établissons un devis pour les interventions en hauteur, sans engagement.",
          "Floirac étant voisine de Cenon, Lormont et Bordeaux, nos délais y sont courts. Appelez-nous ou envoyez une photo du nid pour un avis rapide et la planification du passage.",
        ],
      },
    ],
    nearby: [
      { label: "Cenon", href: "/destruction-nid-frelons-cenon" },
      { label: "Lormont", href: "/destruction-nid-frelons-lormont" },
      { label: "Bordeaux", href: "/destruction-nid-frelons-bordeaux" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  "le-haillan": {
    city: "Le Haillan",
    slug: "destruction-nid-frelons-le-haillan",
    title: "Destruction nid de frelons au Haillan | Intervention rapide",
    description:
      "Destruction de nid de frelons au Haillan : intervention sécurisée à domicile, frelons asiatiques et guêpes, des lotissements pavillonnaires aux espaces verts.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes au Haillan : intervention rapide et sécurisée, des lotissements pavillonnaires aux abords boisés.",
    blocks: [
      {
        heading: "Destruction de nids de frelons et de guêpes au Haillan",
        paragraphs: [
          "À l'ouest de la métropole, Le Haillan associe lotissements pavillonnaires, espaces verts et proximité des zones boisées et d'activités. Ce cadre résidentiel, ponctué de jardins et bordé de bois, favorise l'installation des frelons asiatiques en hauteur comme des guêpes au plus près des maisons.",
          "Nous intervenons sur l'ensemble de la commune pour un traitement rapide et sécurisé du nid. Une photo du nid et sa hauteur approximative suffisent pour identifier l'espèce et préparer le matériel adapté.",
        ],
      },
      {
        heading: "Lotissements et espaces verts",
        paragraphs: [
          "Les arbres des jardins et la proximité des secteurs boisés offrent au frelon asiatique des emplacements en hauteur, tandis que les maisons de lotissement, souvent récentes, sont concernées par les guêpes au niveau des toitures et des volets roulants.",
        ],
        bullets: [
          "Frelons asiatiques en hauteur dans les arbres et lisières boisées",
          "Nids de guêpes sous les toitures et dans les combles",
          "Caissons de volets roulants et faux plafonds",
          "Abris de jardin, garages et dépendances",
          "Haies denses séparant les parcelles pavillonnaires",
        ],
      },
      {
        heading: "Une intervention sécurisée plutôt que des risques",
        paragraphs: [
          "Un nid actif proche d'une habitation ou d'un jardin où jouent des enfants augmente le risque de piqûres. Tenter de détruire un nid soi-même, surtout en hauteur, est dangereux et rarement efficace.",
          "Notre technicien intervient équipé et à distance, avec le matériel adapté à la hauteur du nid. Il neutralise la colonie, traite ou retire le nid, puis sécurise les abords de l'habitation.",
        ],
      },
      {
        heading: "Tarif transparent et délais courts au Haillan",
        paragraphs: [
          "Le prix dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous annonçons un tarif clair pour les nids accessibles et établissons un devis pour les interventions en hauteur, sans engagement.",
          "Le Haillan étant voisin d'Eysines, de Mérignac et de Saint-Médard-en-Jalles, nous y intervenons rapidement. Envoyez-nous une photo ou appelez-nous pour un avis rapide et la planification du passage.",
        ],
      },
    ],
    nearby: [
      { label: "Eysines", href: "/destruction-nid-frelons-eysines" },
      { label: "Mérignac", href: "/destruction-nid-frelons-merignac" },
      { label: "Saint-Médard-en-Jalles", href: "/destruction-nid-frelons-saint-medard-en-jalles" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },

  blanquefort: {
    city: "Blanquefort",
    slug: "destruction-nid-frelons-blanquefort",
    title: "Destruction nid de frelons à Blanquefort | Intervention rapide",
    description:
      "Destruction de nid de frelons à Blanquefort : intervention sécurisée à domicile, frelons asiatiques et guêpes, des zones agricoles au parc de Majolan. Devis par photo.",
    lead: "Destruction de nids de frelons, frelons asiatiques et guêpes à Blanquefort : intervention rapide et sécurisée, des lotissements aux abords du parc de Majolan.",
    blocks: [
      {
        heading: "Intervention nids de frelons et guêpes à Blanquefort",
        paragraphs: [
          "Au nord de la métropole, Blanquefort associe patrimoine — autour de son château et du parc de Majolan et de ses étangs — zones agricoles et viticoles, et lotissements résidentiels. Cette alternance de grands espaces plantés et de quartiers habités offre aux frelons et aux guêpes de nombreux emplacements pour s'installer.",
          "Nous nous déplaçons dans tous les quartiers de la commune pour neutraliser les nids en sécurité, avec le matériel nécessaire au travail en hauteur. Une photo du nid nous aide à identifier l'espèce et à préparer l'intervention.",
        ],
      },
      {
        heading: "Grands arbres et dépendances",
        paragraphs: [
          "Les arbres matures du parc de Majolan, des propriétés et des zones agricoles attirent le frelon asiatique, qui niche souvent très haut. Les maisons et leurs dépendances, ainsi que les bâtiments agricoles, offrent par ailleurs de nombreux abris aux guêpes.",
        ],
        bullets: [
          "Frelons asiatiques en hauteur dans les grands arbres et les parcs",
          "Nids de guêpes sous les toitures et dans les combles",
          "Caissons de volets roulants et faux plafonds",
          "Granges, hangars agricoles et dépendances",
          "Haies et arbres bordant les parcelles et les étangs",
        ],
      },
      {
        heading: "Un nid en hauteur, une affaire de professionnel",
        paragraphs: [
          "Dans un environnement aussi planté, un nid de frelon asiatique peut être volumineux et perché hors de portée. S'en approcher ou tenter de le déloger soi-même expose à des piqûres multiples et reste peu efficace.",
          "Notre technicien intervient équipé et à distance, avec une perche télescopique pour les nids les plus hauts. Il neutralise la colonie, traite ou retire le nid, puis sécurise les abords de l'habitation.",
        ],
      },
      {
        heading: "Tarif clair et intervention rapide à Blanquefort",
        paragraphs: [
          "Le prix dépend de l'espèce, de la hauteur et de l'accessibilité du nid. Nous communiquons un tarif transparent pour les nids accessibles et établissons un devis pour les interventions en hauteur ou éloignées, sans engagement.",
          "Blanquefort étant voisine de Bruges, du Haillan et d'Eysines, nous organisons rapidement le déplacement. Appelez-nous ou envoyez une photo du nid pour un avis rapide et la planification du passage.",
        ],
      },
    ],
    nearby: [
      { label: "Bruges", href: "/destruction-nid-frelons-bruges" },
      { label: "Le Haillan", href: "/destruction-nid-frelons-le-haillan" },
      { label: "Eysines", href: "/destruction-nid-frelons-eysines" },
      { label: "Toutes les zones", href: "/zones-intervention" },
    ],
  },
};
