export type Appartement = {
  slug: string;
  name: string;
  type: "3 chambres" | "2 chambres" | "Studio";
  /** Prix par nuit en FCFA. `null` = prix sur demande. */
  price: number | null;
  minGuests: number;
  summary: string;
  features: string[];
  cover: string;
  gallery: { src: string; alt: string }[];
};

const commonFeatures = [
  "Climatisation individuelle",
  "Douche avec jacuzzi",
  "Cuisine équipée",
  "Wi-Fi",
  "TV écran plat",
  "Linge de maison fourni",
];

export const appartements: Appartement[] = [
  {
    slug: "appartement-1",
    name: "Appartement N°1",
    type: "3 chambres",
    price: 55000,
    minGuests: 3,
    summary:
      "Un grand salon lumineux, une salle à manger pour six et trois chambres spacieuses : idéal pour les familles et les séjours prolongés.",
    features: commonFeatures,
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
      { src: "/images/appartement-1/10.jpg", alt: "Salle de bain avec jacuzzi" },
    ],
  },
  {
    slug: "appartement-2",
    name: "Appartement N°2",
    type: "3 chambres",
    price: 55000,
    minGuests: 3,
    summary:
      "Salon élégant aux tons rouge et bleu nuit, trois chambres climatisées et une cuisine complète pour vivre comme à la maison.",
    features: commonFeatures,
    cover: "/images/appartement-2/02.jpg",
    gallery: [
      { src: "/images/appartement-2/02.jpg", alt: "Salon avec fauteuils rouges et bleus" },
      { src: "/images/appartement-2/03.jpg", alt: "Salle à manger et salon" },
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
    features: commonFeatures,
    cover: "/images/appartement-3/01.jpg",
    gallery: [
      { src: "/images/appartement-3/01.jpg", alt: "Salon avec canapés rouges" },
      { src: "/images/appartement-3/02.jpg", alt: "Cuisine équipée" },
      { src: "/images/appartement-3/04.jpg", alt: "Chambre avec lit double et fauteuil" },
      { src: "/images/appartement-3/03.jpg", alt: "Chambre aux tons roses" },
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
      "Salon aux couleurs vives, deux chambres reposantes et une salle de bain moderne : le confort d'un hôtel, l'espace en plus.",
    features: commonFeatures,
    cover: "/images/appartement-4/01.jpg",
    gallery: [
      { src: "/images/appartement-4/01.jpg", alt: "Salon avec canapés bleu canard" },
      { src: "/images/appartement-4/02.jpg", alt: "Cuisine équipée" },
      { src: "/images/appartement-4/03.jpg", alt: "Chambre avec rideaux fleuris" },
      { src: "/images/appartement-4/04.jpg", alt: "Chambre avec lit double" },
      { src: "/images/appartement-4/06.jpg", alt: "Salle de bain carrelée bleu" },
    ],
  },
  {
    slug: "studio",
    name: "Studio",
    type: "Studio",
    // TODO(propriétaire) : indiquer le prix du studio.
    price: null,
    minGuests: 1,
    summary:
      "Une chambre moderne et tout équipée avec salle de bain privative : la formule idéale pour un voyageur seul ou un court séjour.",
    features: ["Climatisation individuelle", "Salle de bain privative", "Wi-Fi", "TV écran plat", "Coin bureau"],
    cover: "/images/studio/04.jpg",
    gallery: [
      { src: "/images/studio/04.jpg", alt: "Studio avec lit double, fauteuil et TV" },
      { src: "/images/studio/05.jpg", alt: "Salle de bain du studio" },
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
