export type Appartement = {
  slug: string;
  name: string;
  type: "3 chambres" | "2 chambres" | "Studio";
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
  "Écran plasma 55 pouces",
  "Linge de maison fourni",
];

export const appartements: Appartement[] = [
  {
    slug: "appartement-1",
    name: "Appartement N°1",
    type: "3 chambres",
    price: 55000,
    minGuests: 3,
    maxGuests: 6,
    summary:
      "Un grand salon lumineux, une salle à manger pour six et trois chambres spacieuses : idéal pour les familles et les séjours prolongés.",
    features: [...commonFeatures, "Douches avec cabines uniquement"],
    cover: "/images/appartement-1/01.jpg",
    gallery: [
      { src: "/images/appartement-1/01.jpg", alt: "Salon avec canapés violets et coin repas" },
      { src: "/images/appartement-1/02.jpg", alt: "Vue d'ensemble du salon et de la salle à manger" },
      { src: "/images/appartement-1/03.jpg", alt: "Table à manger dressée" },
      { src: "/images/appartement-1/05.jpg", alt: "Cuisine équipée" },
      { src: "/images/appartement-1/06.jpg", alt: "Chambre avec lit double" },
      { src: "/images/appartement-1/07.jpg", alt: "Chambre climatisée" },
      { src: "/images/appartement-1/08.jpg", alt: "Chambre aux couleurs vives" },
      { src: "/images/appartement-1/09.jpg", alt: "Salle de bain avec douche vitrée" },
    ],
  },
  {
    slug: "appartement-2",
    name: "Appartement N°2",
    type: "3 chambres",
    price: 55000,
    minGuests: 3,
    maxGuests: 6,
    summary:
      "Salon élégant aux tons rouge et noir, trois chambres climatisées et une cuisine complète pour vivre comme à la maison.",
    features: [...commonFeatures, "1 douche avec jacuzzi", "2 cabines de douche"],
    cover: "/images/nouveau/appartement2.jpeg",
    gallery: [
      { src: "/images/nouveau/appartement2.jpeg", alt: "Salon rouge et noir de l'appartement N°2" },
      { src: "/images/appartement-2/01.jpg", alt: "Salle de bain avec jacuzzi" },
      { src: "/images/appartement-2/04.jpg", alt: "Cuisine équipée" },
      { src: "/images/appartement-2/05.jpg", alt: "Chambre avec lit double" },
      { src: "/images/appartement-2/06.jpg", alt: "Chambre lumineuse" },
      { src: "/images/appartement-2/07.jpg", alt: "Chambre avec coussins jaunes" },
    ],
  },
  {
    slug: "appartement-3",
    name: "Appartement N°3",
    type: "2 chambres",
    price: 45000,
    minGuests: 2,
    summary:
      "Un salon chaleureux et deux chambres confortables, parfait pour un couple, des collègues en mission ou une petite famille.",
    features: [...commonFeatures, "1 salle de bain avec jacuzzi", "1 cabine de douche"],
    cover: "/images/appartement-3/01.jpg",
    gallery: [
      { src: "/images/appartement-3/01.jpg", alt: "Salon avec canapés rouges" },
      { src: "/images/appartement-3/02.jpg", alt: "Cuisine équipée" },
      { src: "/images/appartement-3/05.jpg", alt: "Salle de bain avec baignoire jacuzzi" },
    ],
  },
  {
    slug: "appartement-4",
    name: "Appartement N°4",
    type: "2 chambres",
    price: 45000,
    minGuests: 2,
    summary:
      "Salon aux couleurs vives, deux chambres reposantes et une salle de bain moderne : le confort d'une résidence, l'espace en plus.",
    features: [...commonFeatures, "1 salle de bain avec jacuzzi", "1 cabine de douche"],
    cover: "/images/appartement-4/01.jpg",
    gallery: [
      { src: "/images/appartement-4/01.jpg", alt: "Salon avec canapés bleu canard" },
      { src: "/images/appartement-4/02.jpg", alt: "Cuisine équipée" },
      { src: "/images/appartement-4/03.jpg", alt: "Chambre avec rideaux fleuris" },
      { src: "/images/appartement-4/04.jpg", alt: "Chambre avec lit double" },
      { src: "/images/appartement-4/05.jpg", alt: "Salle de bain avec jacuzzi" },
      { src: "/images/appartement-4/06.jpg", alt: "Salle de bain carrelée bleu" },
    ],
  },
  {
    slug: "studio",
    name: "Studio",
    type: "Studio",
    price: 25000,
    minGuests: 1,
    summary:
      "Un studio moderne avec jacuzzi, balcon offrant une belle vue, coiffeuse et petit réfrigérateur : le confort idéal pour un voyageur seul ou un court séjour.",
    features: [
      "Climatisation individuelle",
      "Lit deux places (1,60 m)",
      "Matelas médical",
      "Salle de bain privative avec jacuzzi",
      "Balcon avec belle vue",
      "Wi-Fi",
      "Écran plasma 55 pouces",
      "Coiffeuse",
      "Petit réfrigérateur",
    ],
    cover: "/images/studio/chambre.jpg",
    gallery: [
      { src: "/images/studio/chambre.jpg", alt: "Studio avec lit double, fauteuil, coiffeuse et TV" },
      { src: "/images/studio/salle-de-bain.jpg", alt: "Salle de bain du studio avec jacuzzi" },
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
