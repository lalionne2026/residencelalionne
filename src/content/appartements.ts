export type Appartement = {
  slug: string;
  name: string;
  type: string;
  /** Prix par nuit en FCFA. `null` = prix sur demande. */
  price: number | null;
  minGuests: number;
  maxGuests?: number;
  summary: string;
  features: string[];
  cover: string;
  gallery: { src: string; alt: string }[];
};

const commonFeatures = [
  "Climatisation individuelle",
  "Cuisine équipée",
  "Lits deux places (1,60 m)",
  "Matelas médicaux",
  "Wi-Fi",
  "Écran plasma (55) pouces",
  "Linge de maison fourni",
  "Chambre parentale avec coiffeuse",
];

export const appartements: Appartement[] = [
  {
    slug: "appartement-1",
    name: "Appartement N°1",
    type: "3 chambres (6)",
    price: 55000,
    minGuests: 3,
    maxGuests: 6,
    summary:
      "Un grand salon lumineux, une salle à manger pour (6) personnes et (3) chambres spacieuses : un cadre idéal pour accueillir toute une famille et profiter de séjours prolongés.",
    features: [
      ...commonFeatures,
      "(2) chambres avec cabines de douche",
      "(1) chambre avec jacuzzi",
      "Balcon",
      "Maximum (6) personnes",
    ],
    cover: "/images/appartement-1/01.jpg",
    gallery: [
      {
        src: "/images/appartement-1/01.jpg",
        alt: "Salon avec canapés violets et coin repas",
      },
      {
        src: "/images/appartement-1/02.jpg",
        alt: "Vue d'ensemble du salon et de la salle à manger",
      },
      { src: "/images/appartement-1/03.jpg", alt: "Table à manger dressée" },
      {
        src: "/images/appartement-1/appartement1-salle-a-manger.jpg",
        alt: "Salle à manger de l'appartement N°1",
      },
      { src: "/images/appartement-1/05.jpg", alt: "Cuisine équipée" },
      {
        src: "/images/appartement-1/appartement1-cuisine.jpg",
        alt: "Cuisine équipée de l'appartement N°1",
      },
      { src: "/images/appartement-1/04.jpg", alt: "Autre vue du salon" },
      { src: "/images/appartement-1/06.jpg", alt: "Chambre avec lit double" },
      {
        src: "/images/appartement-1/appartement1-chambre-2.jpg",
        alt: "Deuxième vue de la chambre de l'appartement N°1",
      },
      { src: "/images/appartement-1/07.jpg", alt: "Chambre climatisée" },
      {
        src: "/images/appartement-1/08.jpg",
        alt: "Chambre aux couleurs vives",
      },
      { src: "/images/appartement-1/09.jpg", alt: "Salle de bain avec douche" },
      {
        src: "/images/appartement-1/appartement1-lavabo.jpg",
        alt: "Lavabo de l'appartement N°1",
      },
      {
        src: "/images/appartement-1/appartement1-accesoires-1.jpg",
        alt: "Détails et accessoires de l'appartement N°1",
      },
      {
        src: "/images/appartement-1/appartement1-complet.jpg",
        alt: "Vue complète de l'appartement N°1",
      },
      { src: "/images/appartement-1/10.jpg", alt: "Vue supplémentaire de l'appartement N°1" },
    ],
  },
  {
    slug: "appartement-2",
    name: "Appartement N°2",
    type: "3 chambres (6)",
    price: 55000,
    minGuests: 3,
    maxGuests: 6,
    summary:
      "Salon élégant aux tons rouge et noir, une salle à manger et (3) chambres climatisées et une cuisine complète pour vivre comme à la maison.",
    features: [
      ...commonFeatures,
      "(1) douche avec jacuzzi",
      "(2) cabines de douche",
      "Balcon",
      "Maximum (6) personnes",
    ],
    cover: "/images/appartement-2/08.jpg",
    gallery: [
      {
        src: "/images/appartement-2/08.jpg",
        alt: "Salon moderne de l'appartement N°2",
      },
      {
        src: "/images/nouveau/appartement2.jpg",
        alt: "Ancienne vue du salon de l'appartement N°2",
      },
      {
        src: "/images/appartement-2/01.jpg",
        alt: "Salle de bain avec jacuzzi",
      },
      {
        src: "/images/appartement-2/12.jpg",
        alt: "Salle de bain avec douche",
      },
      {
        src: "/images/appartement-2/11.jpg",
        alt: "Salle de bain avec toilettes",
      },
      {
        src: "/images/appartement-2/10.jpg",
        alt: "Cuisine équipée moderne",
      },
      {
        src: "/images/appartement-2/09.jpg",
        alt: "Cuisine équipée avec coin repas",
      },
      { src: "/images/appartement-2/04.jpg", alt: "Ancienne vue de la cuisine" },
      { src: "/images/appartement-2/05.jpg", alt: "Chambre avec lit double" },
      { src: "/images/appartement-2/06.jpg", alt: "Chambre lumineuse" },
      {
        src: "/images/appartement-2/07.jpg",
        alt: "Chambre avec coussins jaunes",
      },
      {
        src: "/images/appartement-2/03.jpg",
        alt: "Vue supplémentaire de l'appartement N°2",
      },
      {
        src: "/images/appartement-2/appartement 2 suite.jpg",
        alt: "Suite de l'appartement N°2",
      },
      {
        src: "/images/appartement-2/chambre appartement deux.jpg",
        alt: "Chambre de l'appartement N°2",
      },
    ],
  },
  {
    slug: "appartement-3",
    name: "Appartement N°3",
    type: "2 chambres (4)",
    price: 45000,
    minGuests: 2,
    maxGuests: 4,
    summary:
      "Un salon chaleureux , une salle à manger et (2) chambres confortables, parfait pour un couple, des collègues en mission ou une petite famille.",
    features: [
      ...commonFeatures,
      "(1) salle de bain avec jacuzzi",
      "une cabine de douche",
      "Véranda",
      "Maximum (4) personnes",
    ],
    cover: "/images/appartement-3/01.jpg",
    gallery: [
      { src: "/images/appartement-3/01.jpg", alt: "Salon avec canapés rouges" },
      { src: "/images/appartement-3/02.jpg", alt: "Ancienne cuisine équipée" },
      {
        src: "/images/appartement-3/05.jpg",
        alt: "Ancienne salle de bain avec baignoire jacuzzi",
      },
      {
        src: "/images/appartement-3/appartement3-accesoires.jpg",
        alt: "Détails et accessoires de l'appartement N°3",
      },
      {
        src: "/images/appartement-3/appartement3-accesoires-1.jpg",
        alt: "Autres accessoires de l'appartement N°3",
      },
      {
        src: "/images/appartement-3/appartement3-accesoires-2.jpg",
        alt: "Détails décoratifs de l'appartement N°3",
      },
      {
        src: "/images/appartement-3/appartement3-cabine-de-douche.jpg",
        alt: "Cabine de douche de l'appartement N°3",
      },
      {
        src: "/images/appartement-3/appartement3-chambre.jpg",
        alt: "Chambre de l'appartement N°3",
      },
      {
        src: "/images/appartement-3/appartement3-chambre-2.jpg",
        alt: "Deuxième chambre de l'appartement N°3",
      },
      {
        src: "/images/appartement-3/appartement3-cuisine.jpg",
        alt: "Cuisine équipée de l'appartement N°3",
      },
      {
        src: "/images/appartement-3/appartement3-cuisine-2.jpg",
        alt: "Autre vue de la cuisine de l'appartement N°3",
      },
      {
        src: "/images/appartement-3/appartement3-douche.jpg",
        alt: "Douche de l'appartement N°3",
      },
      {
        src: "/images/appartement-3/appartement3-wc.jpg",
        alt: "Toilettes de l'appartement N°3",
      },
    ],
  },
  {
    slug: "appartement-4",
    name: "Appartement N°4",
    type: "2 chambres (4)",
    price: 45000,
    minGuests: 2,
    maxGuests: 4,
    summary:
      "Salon aux couleurs vives, une salle à manger et (2) chambres reposantes et une salle de bain moderne : le confort d'une résidence, l'espace en plus.",
    features: [
      ...commonFeatures,
      "(1) salle de bain avec jacuzzi",
      "(1) cabine de douche",
      "Véranda",
      "Maximum (4) personnes",
    ],
    cover: "/images/appartement-4/01.jpg",
    gallery: [
      {
        src: "/images/appartement-4/01.jpg",
        alt: "Salon avec canapés bleu canard",
      },
      { src: "/images/appartement-4/02.jpg", alt: "Ancienne cuisine équipée" },
      {
        src: "/images/appartement-4/appartement4-cuisine.jpg",
        alt: "Cuisine équipée de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/03.jpg",
        alt: "Chambre avec rideaux fleuris",
      },
      { src: "/images/appartement-4/04.jpg", alt: "Chambre avec lit double" },
      {
        src: "/images/appartement-4/appartement4-chambre-1.jpg",
        alt: "Première vue de la chambre de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-lit-1.jpg",
        alt: "Lit de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-lit-2.jpg",
        alt: "Deuxième vue du lit de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/05.jpg",
        alt: "Salle de bain avec jacuzzi",
      },
      {
        src: "/images/appartement-4/06.jpg",
        alt: "Salle de bain carrelée bleu",
      },
      {
        src: "/images/appartement-4/appartement4-douche.jpg",
        alt: "Douche de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-jacuzzi.jpg",
        alt: "Jacuzzi de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-jacuzzi-2.jpg",
        alt: "Deuxième vue du jacuzzi de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-lavabo.jpg",
        alt: "Lavabo de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-lavabo-2.jpg",
        alt: "Deuxième vue du lavabo de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-salle-de-bain.jpg",
        alt: "Salle de bain complète de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-wc.jpg",
        alt: "Toilettes de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-balcon.jpg",
        alt: "Balcon de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-suite.jpg",
        alt: "Suite de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-accesoires.jpg",
        alt: "Accessoires de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-accesoires-2.jpg",
        alt: "Autres accessoires de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-accesoires-3.jpg",
        alt: "Détails décoratifs de l'appartement N°4",
      },
      {
        src: "/images/appartement-4/appartement4-accesoires-4.jpg",
        alt: "Derniers accessoires de l'appartement N°4",
      },
    ],
  },
  {
    slug: "studio",
    name: "Studio",
    type: "Studio (2)",
    price: 25000,
    minGuests: 1,
    maxGuests: 2,
    summary:
      "Un studio moderne avec jacuzzi, balcon offrant une belle vue, coiffeuse et petit réfrigérateur : le confort idéal pour un voyageur seul ou un court séjour.",
    features: [
      "Climatisation individuelle",
      "Lit deux places (1,60 m)",
      "Matelas médical",
      "Salle de bain privative avec jacuzzi",
      "Balcon avec belle vue",
      "Wi-Fi",
      "Écran plasma (55) pouces",
      "Coiffeuse",
      "Petit réfrigérateur",
      "Maximum (2) personnes",
    ],
    cover: "/images/studio/chambre.jpg",
    gallery: [
      {
        src: "/images/studio/chambre.jpg",
        alt: "Studio avec lit double, fauteuil, coiffeuse et TV",
      },
      {
        src: "/images/studio/salle-de-bain.jpg",
        alt: "Salle de bain du studio avec jacuzzi",
      },
      {
        src: "/images/studio/studio-canape.jpg",
        alt: "Studio avec canapé",
      },
      {
        src: "/images/studio/studio-complet.jpg",
        alt: "Vue complète du studio",
      },
      {
        src: "/images/studio/studio-lit.jpg",
        alt: "Lit du studio",
      },
      {
        src: "/images/studio/studio-portrait.jpg",
        alt: "Vue verticale du studio",
      },
      {
        src: "/images/studio/studio-salle-de-bain.jpg",
        alt: "Vue complémentaire de la salle de bain du studio",
      },
    ],
  },
];

export function getAppartement(slug: string) {
  return appartements.find((a) => a.slug === slug);
}

export function formatPrice(price: number | null) {
  if (price === null) return "Prix sur demande";
  return `${new Intl.NumberFormat("fr-FR").format(price).replace(/ /g, " ")} FCFA`;
}
