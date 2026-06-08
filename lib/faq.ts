/** Questions fréquentes par thématique. Utilisées pour l'affichage + JSON-LD FAQPage. */

export type FaqItem = { question: string; answer: string };

export const faqGeneral: FaqItem[] = [
  {
    question: "Intervenez-vous rapidement en cas de nid actif ?",
    answer:
      "Oui. Un nid actif près d'une habitation est une priorité. Appelez-nous ou envoyez une photo : nous évaluons la situation et planifions une intervention dans les meilleurs délais à Bordeaux et dans les communes voisines.",
  },
  {
    question: "Faut-il que je sois présent pendant l'intervention ?",
    answer:
      "Votre présence est utile pour accéder au nid et discuter de l'emplacement, mais elle n'est pas toujours indispensable, notamment quand le nid est accessible depuis l'extérieur. Nous convenons ensemble du déroulé au moment de la prise de rendez-vous.",
  },
  {
    question: "Comment obtenir une estimation de prix ?",
    answer:
      "Le plus simple est de nous envoyer une photo du nid en précisant sa hauteur et son emplacement. Cela nous permet de vous donner une estimation claire avant tout déplacement. Le tarif dépend de l'accessibilité, de la hauteur et du type de nid.",
  },
  {
    question: "Quelle zone couvrez-vous autour de Bordeaux ?",
    answer:
      "Nous intervenons à Bordeaux, dans la métropole et les communes voisines : Mérignac, Pessac, Talence, Bègles, Lormont, Cenon, Le Bouscat, Bruges, Villenave-d'Ornon, Gradignan, Saint-Médard-en-Jalles et alentours.",
  },
  {
    question: "Que faire en attendant votre intervention ?",
    answer:
      "Ne vous approchez pas du nid et n'essayez pas de le détruire vous-même. Gardez vos distances, éloignez les enfants, les animaux et les personnes allergiques, et fermez les fenêtres proches si nécessaire.",
  },
];

export const faqFrelons: FaqItem[] = [
  {
    question: "Pourquoi ne pas détruire un nid de frelons soi-même ?",
    answer:
      "Un nid de frelons est dangereux quand on s'en approche : les frelons défendent leur colonie et peuvent piquer plusieurs fois. Les produits du commerce sont rarement adaptés à la hauteur ou à l'emplacement, et une mauvaise manipulation déclenche souvent une attaque. Un professionnel équipé travaille à distance et en sécurité.",
  },
  {
    question: "Où se trouvent généralement les nids de frelons ?",
    answer:
      "Les frelons européens s'installent dans les endroits abrités : combles, troncs creux, cheminées, granges, sous les toitures. Le nid dépasse rarement 40 cm et peut se trouver à hauteur réduite. Le frelon asiatique, lui, construit souvent un grand nid sphérique en hauteur dans les arbres ou sous les toitures.",
  },
  {
    question: "Combien de temps dure une intervention ?",
    answer:
      "La neutralisation d'un nid accessible est généralement rapide. Lorsque le nid est en hauteur ou difficile d'accès (toiture, cheminée, grand arbre), l'intervention demande plus de préparation et de matériel. Nous vous indiquons le déroulé prévu lors du diagnostic.",
  },
  {
    question: "Le nid peut-il revenir au même endroit ?",
    answer:
      "Un nid traité ne se réactive pas. En revanche, un emplacement abrité et apprécié peut attirer une nouvelle colonie les saisons suivantes. Nous vous donnons des conseils pour limiter ce risque après l'intervention.",
  },
];

export const faqGuepes: FaqItem[] = [
  {
    question: "Quelle est la différence entre un nid de guêpes et un nid de frelons ?",
    answer:
      "Les guêpes sont plus petites et construisent des nids souvent cachés dans des endroits sombres : caisson de volet roulant, sous-toiture, grenier, muret, cavité. Les frelons sont nettement plus gros ; le frelon asiatique forme un grand nid sphérique visible, souvent en hauteur. L'approche d'intervention diffère selon l'espèce.",
  },
  {
    question: "Les guêpes sont-elles dangereuses ?",
    answer:
      "Une guêpe peut piquer plusieurs fois, et un nid proche d'un lieu de passage augmente le risque, en particulier pour les enfants et les personnes allergiques. Lorsque le nid est près d'une porte, d'une terrasse ou d'une chambre, mieux vaut le faire retirer rapidement.",
  },
  {
    question: "Où les guêpes font-elles leur nid à Bordeaux ?",
    answer:
      "Le plus souvent dans des endroits abrités et discrets : sous la toiture, dans un caisson de volet roulant, un grenier, un garage, un muret de jardin ou derrière un coffre de climatisation. Ces emplacements sombres et protégés sont leurs préférés.",
  },
  {
    question: "Que faire avant votre passage ?",
    answer:
      "Repérez l'emplacement du nid sans vous en approcher, fermez les fenêtres et volets à proximité, et éloignez les enfants et les animaux de la zone. Évitez de boucher l'entrée du nid : cela peut rendre les guêpes plus agressives.",
  },
];

export const faqAsiatique: FaqItem[] = [
  {
    question: "Comment reconnaître un frelon asiatique ?",
    answer:
      "Le frelon asiatique (Vespa velutina) est plus sombre que le frelon européen : thorax brun-noir, abdomen foncé avec un seul anneau orangé, tête orange et surtout des pattes jaunes très caractéristiques. Il est un peu plus petit que le frelon européen.",
  },
  {
    question: "Pourquoi le frelon asiatique est-il problématique ?",
    answer:
      "C'est une espèce invasive qui se nourrit notamment d'abeilles et d'autres pollinisateurs, ce qui menace les ruches et la biodiversité locale. Ses nids, parfois très volumineux et en hauteur, représentent aussi un risque pour les habitants à proximité.",
  },
  {
    question: "Mon nid est sur l'espace public, qui dois-je contacter ?",
    answer:
      "Si le nid se trouve sur le domaine public (parc, trottoir, équipement municipal), le mieux est de le signaler à votre mairie : selon les communes de la métropole, un service dédié peut prendre le relais. Sur une propriété privée, la destruction relève du propriétaire, qui fait appel à une entreprise spécialisée.",
  },
  {
    question: "Faut-il utiliser des pièges contre le frelon asiatique ?",
    answer:
      "Les pièges artisanaux non sélectifs capturent beaucoup d'insectes utiles (abeilles, papillons) sans réellement réguler la population de frelons. Mieux vaut faire identifier et traiter le nid par un professionnel plutôt que de multiplier des pièges peu efficaces.",
  },
];

export const faqPrix: FaqItem[] = [
  {
    question: "Pourquoi ne donnez-vous pas un prix fixe au téléphone ?",
    answer:
      "Parce que chaque nid est différent. Le prix dépend de l'espèce, de la hauteur, de l'accessibilité, de l'urgence et du matériel nécessaire. Une photo et quelques informations nous permettent de vous donner une estimation fiable, sans mauvaise surprise.",
  },
  {
    question: "Qu'est-ce qui fait varier le tarif d'une intervention ?",
    answer:
      "Principalement la hauteur et l'accessibilité du nid (sol, toiture, conduit, grand arbre), le type d'insecte (guêpes, frelon européen, frelon asiatique), la taille de la colonie, le caractère urgent de l'intervention et l'éventuel besoin de matériel spécifique comme une perche télescopique.",
  },
  {
    question: "Le déplacement est-il compris dans le prix ?",
    answer:
      "Cela dépend de votre commune et de la distance. Nous vous précisons ce que comprend le tarif avant l'intervention, afin que vous ayez un montant clair et transparent dès le départ.",
  },
  {
    question: "Existe-t-il des aides pour la destruction d'un nid ?",
    answer:
      "Selon les communes de la Gironde et certains contrats d'assurance habitation, une participation financière peut exister pour la destruction de nids de frelons asiatiques. Renseignez-vous auprès de votre mairie et de votre assureur ; nous vous fournissons une facture détaillée le cas échéant.",
  },
];

export const faqUrgence: FaqItem[] = [
  {
    question: "Que faire immédiatement quand je découvre un nid ?",
    answer:
      "Ne touchez pas au nid et ne tentez pas de le détruire. Éloignez les enfants, les animaux et toute personne allergique, fermez les fenêtres et volets proches, puis appelez-nous pour organiser une intervention rapide.",
  },
  {
    question: "Le nid est juste devant ma porte d'entrée, que faire ?",
    answer:
      "Empruntez une autre issue si possible, évitez les gestes brusques à proximité du nid et n'éclairez pas l'entrée la nuit. Contactez-nous au plus vite : un nid sur un lieu de passage est traité en priorité.",
  },
  {
    question: "Une personne a été piquée plusieurs fois, que faire ?",
    answer:
      "En cas de piqûres multiples, de gonflement important, de gêne respiratoire ou de réaction allergique connue, contactez immédiatement le 15 (SAMU) ou le 112. Notre intervention concerne la destruction du nid, pas l'urgence médicale.",
  },
];

/** FAQ générique pour les pages locales (le nom de ville est injecté). */
export function faqLocal(city: string): FaqItem[] {
  return [
    {
      question: `Intervenez-vous partout à ${city} ?`,
      answer: `Oui, nous couvrons l'ensemble de ${city} et ses quartiers, ainsi que les communes voisines de la métropole bordelaise. Indiquez-nous votre adresse précise lors de la prise de contact pour organiser le déplacement.`,
    },
    {
      question: `Combien coûte la destruction d'un nid de frelons à ${city} ?`,
      answer: `Le tarif dépend de la hauteur, de l'accessibilité et du type de nid. Envoyez-nous une photo du nid à ${city} : nous vous donnons une estimation claire avant tout déplacement, sans engagement.`,
    },
    {
      question: `Traitez-vous aussi les nids de guêpes et de frelons asiatiques à ${city} ?`,
      answer: `Oui. À ${city}, nous intervenons sur les nids de guêpes, de frelons européens et de frelons asiatiques, que le nid soit sous une toiture, dans un arbre, un volet roulant ou un comble.`,
    },
    {
      question: `Que faire en attendant votre venue à ${city} ?`,
      answer: `Gardez vos distances avec le nid, n'essayez pas de le détruire vous-même, et éloignez les enfants, les animaux et les personnes allergiques de la zone concernée.`,
    },
  ];
}
