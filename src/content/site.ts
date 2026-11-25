// Informations générales de la résidence.
export const site = {
  name: "La Résidence La Lionne",
  shortName: "La Lionne",
  url: "https://residencelalionne.com",
  tagline: "Appartements haut standing au Congo",
  description:
    "Appartements meublés haut standing de 2 et 3 chambres et studios modernes : jacuzzi selon le logement, cabines de douche, climatisation individuelle, Wi-Fi, sécurité 24h/24 et groupe électrogène.",
  address: {
    street: "Arrondissement Lumumba, quartier Km 4 Mpemba",
    country: "République du Congo",
    town: "Pointe-Noire",
  },
  phones: [{ label: "06 139 78 87", tel: "+242061397887" }],
  whatsapp: "242061397887",
  email: "lalionne2026@gmail.com",
  social: {
    youtube: "https://www.youtube.com/@residencelalionne",
    facebook: "https://www.facebook.com/share/v/19zgHJZx6r/",
    tiktok: "https://www.tiktok.com/@lalionne4256",
    instagram: null as string | null,
  },
  checkIn: "13h00",
  checkOut: "12h00",
  currency: "FCFA",
} as const;

export const socialLinks: {
  name: "facebook" | "tiktok" | "youtube";
  label: string;
  href: string;
}[] = [
  { name: "facebook", label: "Facebook", href: site.social.facebook },
  { name: "tiktok", label: "TikTok", href: site.social.tiktok },
  { name: "youtube", label: "YouTube", href: site.social.youtube },
];

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
    photo: "/images/services/02.jpg",
    photoAlt: "Caméra de vidéosurveillance de la résidence",
  },
  {
    icon: "bolt",
    title: "Électricité continue",
    text: "Groupe électrogène : jamais sans courant ni climatisation.",
    photo: "/images/services/04.jpg",
    photoAlt: "Groupe électrogène de la résidence",
  },
  {
    icon: "sparkle",
    title: "Ménage & linge",
    text: "Appartements nettoyés et préparés avant chaque arrivée.",
    photo: "/images/services/01.jpg",
    photoAlt: "Entretien et nettoyage des logements",
  },
  {
    icon: "wifi",
    title: "Wi-Fi & TV",
    text: "Internet et télévision écran plat dans chaque logement.",
    photo: "/images/services/05.jpg",
    photoAlt: "Espace d'accueil de la résidence",
  },
  {
    icon: "car",
    title: "Parking privé",
    text: "Stationnement dans l'enceinte sécurisée de la résidence.",
    photo: "/images/residence/cour-parking.jpg",
    photoAlt: "Cour pavée et parking fermé de la résidence",
  },
  {
    icon: "leaf",
    title: "Terrasse ombragée",
    text: "Un espace calme pour se détendre entre palmiers et verdure.",
    photo: "/images/residence/terrasse.jpg",
    photoAlt: "Terrasse ombragée de la résidence",
  },
] as const;

export type ServiceIcon = (typeof services)[number]["icon"];

// Photos de la résidence (extérieur et parties communes).
export const residencePhotos = [
  {
    src: "/images/residence/facade.jpg",
    alt: "Façade de la Résidence La Lionne",
  },
  {
    src: "/images/residence/cour-parking.jpg",
    alt: "Cour et parking de la résidence",
  },
  {
    src: "/images/residence/terrasse.jpg",
    alt: "Terrasse ombragée de la résidence",
  },
  { src: "/images/residence/enseigne.jpg", alt: "Enseigne de la résidence" },
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
    text: "À 12h00, afin de laisser à l'équipe de ménage le temps de préparer l'appartement pour les clients suivants.",
  },
  {
    title: "Occupation",
    text: "Les appartements de 3 chambres accueillent (6) personnes maximum. Les appartements de 2 chambres accueillent (4) personnes maximum. Le studio accueille jusqu'à (2) personnes.",
  },
  {
    title: "Dégradations",
    text: "Toute casse ou fissure constatée lors de l'état des lieux est à la charge du client.",
  },
  {
    title: "Respect du règlement",
    text: "En conséquence du non-respect du règlement intérieur de la résidence, le client et toutes les personnes qui partagent son séjour seront invités à quitter la résidence sans aucun remboursement.",
  },
] as const;

// Avis clients. Pour en ajouter un, copier un bloc { ... } et le remplir.
// `rating` (note sur 5) et `origin` (ville, pays ou type de séjour) sont facultatifs.
export const testimonials: {
  title: string;
  quote: string;
  author: string;
  origin?: string;
  rating?: number;
}[] = [
  {
    title: "Service irréprochable",
    quote:
      "Le personnel était très accueillant et a répondu à tous mes besoins. Je reviendrai sans hésitation !",
    author: "Client de la résidence",
    rating: 5,
  },
  {
    title: "Un séjour agréable",
    quote:
      "J'ai passé un excellent séjour à la Résidence La Lionne. Le cadre est agréable et l'ambiance très chaleureuse. Une belle expérience !",
    author: "Client satisfait",
  },
  {
    title: "Un accueil chaleureux",
    quote:
      "Dès mon arrivée, j'ai été accueilli avec beaucoup de professionnalisme. Le personnel est disponible, souriant et toujours à l'écoute.",
    author: "Client de la résidence",
  },
  {
    title: "Propreté et confort",
    quote:
      "Les chambres sont confortables et bien entretenues. La propreté des lieux est vraiment appréciable. Je recommande vivement cette résidence !",
    author: "Client satisfait",
  },
  {
    title: "Un cadre reposant",
    quote:
      "Un endroit idéal pour se reposer et profiter d'un séjour paisible. J'ai particulièrement apprécié le calme et le confort des installations.",
    author: "Client de passage",
  },
  {
    title: "Une expérience exceptionnelle",
    quote:
      "Tout était à la hauteur de mes attentes. De l'accueil à la qualité des prestations, chaque détail contribue à rendre le séjour agréable.",
    author: "Client de la résidence",
  },
  {
    title: "Un personnel professionnel",
    quote:
      "Une équipe dynamique, respectueuse et très professionnelle. On se sent vraiment considéré et accompagné tout au long du séjour.",
    author: "Client satisfait",
  },
  {
    title: "Un excellent rapport qualité-prix",
    quote:
      "Très bonne expérience dans l'ensemble. Les prestations sont appréciables et le service est à la hauteur. Une adresse que je recommande !",
    author: "Client de passage",
  },
  {
    title: "Je recommande vivement !",
    quote:
      "J'ai beaucoup apprécié mon passage à la Résidence La Lionne. Un cadre accueillant, un bon service et une équipe attentionnée. À refaire !",
    author: "Client de la résidence",
  },
  {
    title: "Une résidence à découvrir",
    quote:
      "Une très belle découverte ! Le séjour s'est déroulé dans de bonnes conditions et j'ai apprécié l'attention portée aux clients. Je reviendrai avec plaisir.",
    author: "Client satisfait",
  },
];
