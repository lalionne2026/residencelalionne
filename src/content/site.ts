// Informations générales de la résidence.
// TODO(propriétaire) : confirmer la ville exacte, le numéro WhatsApp principal et les liens réseaux sociaux.

export const site = {
  name: "La Résidence La Lionne",
  shortName: "La Lionne",
  url: "https://residencelalionne.com",
  tagline: "Appartements haut standing au Congo",
  description:
    "Appartements meublés haut standing de 2 et 3 chambres et studios modernes : jacuzzi, climatisation individuelle, Wi-Fi, sécurité 24h/24 et groupe électrogène.",
  address: {
    street: "Km 4, direction Pemba",
    country: "République du Congo",
  },
  phones: [
    { label: "06 562 46 70", tel: "+242065624670" },
    { label: "06 139 78 87", tel: "+242061397887" },
    { label: "05 506 56 14", tel: "+242055065614" },
    {
      label: "+1 802 391 7806",
      tel: "+18023917806",
      note: "Diaspora / international",
    },
  ],
  whatsapp: "242065624670",
  email: "lalionne2026@gmail.com",
  social: {
    youtube: "https://www.youtube.com/@residencelalionne",
    facebook: null as string | null,
    instagram: null as string | null,
  },
  checkIn: "13h00",
  checkOut: "12h00",
  currency: "FCFA",
} as const;

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/appartements", label: "Appartements" },
  { href: "/infos-pratiques", label: "Infos pratiques" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    icon: "shield",
    title: "Sécurité 24h/24",
    text: "Gardiennage permanent et vidéosurveillance de la résidence.",
  },
  {
    icon: "bolt",
    title: "Électricité continue",
    text: "Groupe électrogène : jamais sans courant ni climatisation.",
  },
  {
    icon: "sparkle",
    title: "Ménage & linge",
    text: "Appartements nettoyés et préparés avant chaque arrivée.",
  },
  {
    icon: "wifi",
    title: "Wi-Fi & TV",
    text: "Internet et télévision écran plat dans chaque logement.",
  },
  {
    icon: "car",
    title: "Parking privé",
    text: "Stationnement dans l'enceinte sécurisée de la résidence.",
  },
  {
    icon: "leaf",
    title: "Terrasse ombragée",
    text: "Un espace calme pour se détendre entre palmiers et verdure.",
  },
] as const;

export type ServiceIcon = (typeof services)[number]["icon"];

// Photos de la résidence (extérieur et parties communes).
export const residencePhotos = [
  { src: "/images/studio/03.jpg", alt: "Façade de la Résidence La Lionne" },
  { src: "/images/divers/09.jpg", alt: "Allée arborée entre les bâtiments" },
  { src: "/images/divers/08.jpg", alt: "Terrasse ombragée avec parasol" },
  { src: "/images/studio/02.jpg", alt: "Enseigne de la résidence" },
] as const;

export const highlights = [
  { value: "4", label: "appartements" },
  { value: "2", label: "studios" },
  { value: "24h/24", label: "sécurité" },
  { value: "100%", label: "climatisé" },
] as const;

// Règles reprises du site actuel, reformulées.
export const rules = [
  {
    title: "Arrivée",
    text: "À partir de 13h00. Si l'appartement est libre la veille, nous pouvons vous accueillir plus tôt dans la matinée — demandez-nous.",
  },
  {
    title: "État des lieux",
    text: "À 11h00 le jour du départ, en présence du gestionnaire, pour vérifier l'appartement ensemble.",
  },
  {
    title: "Départ",
    text: "Avant 12h00, afin de laisser à l'équipe de ménage le temps de préparer l'appartement pour les clients suivants.",
  },
  {
    title: "Occupation",
    text: "Appartement 3 chambres : 3 personnes minimum. Appartement 2 chambres : 2 personnes minimum. Studio : 1 personne minimum.",
  },
  {
    title: "Dégradations",
    text: "Toute casse ou fissure constatée lors de l'état des lieux est à la charge du client.",
  },
] as const;

// Avis clients. Pour en ajouter un, copier un bloc { ... } et le remplir.
// `rating` (note sur 5) et `origin` (ville, pays ou type de séjour) sont facultatifs.
export const testimonials: { title: string; quote: string; author: string; origin?: string; rating?: number }[] = [
  {
    title: "Service irréprochable",
    quote: "Le personnel était très accueillant et a répondu à tous mes besoins. Je reviendrai sans hésitation !",
    author: "Client de la résidence",
    rating: 5,
  },
];
