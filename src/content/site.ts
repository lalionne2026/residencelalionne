// Informations générales de la résidence.
// TODO(propriétaire) : confirmer la ville exacte, le numéro WhatsApp principal et les liens réseaux sociaux.

export const site = {
  name: "La Résidence La Lionne",
  shortName: "La Lionne",
  url: "https://residencelalionne.com",
  tagline: "Appartements haut standing au Congo",
  description:
    "Du studio aux appartements meublés haut standing de 2 et 3 chambres, à partir de 25 000 FCFA la nuit : jacuzzi, climatisation individuelle, Wi-Fi, sécurité 24h/24 et groupe électrogène.",
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
    text: "Panneaux solaires et groupe électrogène : jamais sans courant ni climatisation.",
  },
  {
    icon: "sparkle",
    title: "Ménage & linge",
    text: "Appartements nettoyés et préparés avant chaque arrivée.",
  },
  {
    icon: "wifi",
    title: "Wi-Fi & TV",
    text: "Internet et écran plasma de 55 pouces dans chaque logement.",
  },
  {
    icon: "car",
    title: "Parking privé",
    text: "Stationnement dans la cour fermée et sécurisée de la résidence.",
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
  { src: "/images/residence/facade.jpg", alt: "Façade de la Résidence La Lionne" },
  { src: "/images/residence/accueil.jpg", alt: "Hall d'accueil et réception" },
  { src: "/images/residence/accueil-salon.jpg", alt: "Salon d'attente de l'accueil" },
  { src: "/images/residence/balcon.jpg", alt: "Balcon avec garde-corps vitré" },
  { src: "/images/residence/terrasse-balancelle.jpg", alt: "Cour intérieure avec balancelle et salon de jardin" },] as const;

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
    text: "À partir de 13h00. Toutefois, en fonction des disponibilités et en l'absence de départ ou d'arrivée d'autres voyageurs, un accès anticipé à l'appartement (early check-in) pourra être accordé, sans frais supplémentaires.",
  },
  {
    title: "Départ",
    text: "Au plus tard à 12h00. Les appartements doivent être libérés à cette heure afin de permettre à notre équipe d'entretien et de ménage d'effectuer la remise en état des lieux et de préparer les logements pour l'arrivée des prochains voyageurs.",
  },
  {
    title: "Occupation",
    text: "Appartement 3 chambres : 3 personnes minimum. Appartement 2 chambres : 2 personnes minimum. Studio : 1 personne minimum.",
  },
  {
    title: "Dégradations",
    text: "Toute casse ou fissure constatée au départ est à la charge du client.",
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
  {
    title: "Propre et calme",
    quote:
      "Appartement très propre et très calme. Le jacuzzi dans la chambre, c'était un vrai plus après une journée de travail.",
    author: "Client de la résidence",
  },
  {
    title: "Literie confortable",
    quote: "La literie est très confortable, j'ai super bien dormi. Je recommande la Résidence la Lionne.",
    author: "Client de la résidence",
  },
  {
    title: "Comme à la maison",
    quote: "Accueil chaleureux et personnel aux petits soins. On s'est senti comme à la maison.",
    author: "Client de la résidence",
  },
  {
    title: "Climatisation au top",
    quote: "La climatisation individuelle dans chaque chambre, c'est très pratique. Aucun souci de chaleur.",
    author: "Client de la résidence",
  },
  {
    title: "Idéal en famille",
    quote:
      "Nous étions en famille dans l'appartement de 3 chambres. Il y avait de la place pour tout le monde et le salon est grand.",
    author: "Client de la résidence",
    origin: "Séjour en famille",
  },
  {
    title: "Un endroit tranquille",
    quote: "Un endroit tranquille, idéal pour se reposer à Pointe-Noire. Pas de bruit la nuit.",
    author: "Client de la résidence",
  },
  {
    title: "Bon rapport qualité-prix",
    quote:
      "Les chambres sont grandes et bien équipées, avec une grande télévision. Très bon rapport qualité-prix.",
    author: "Client de la résidence",
  },
  {
    title: "Séjour professionnel",
    quote:
      "Je suis venu pour un séjour professionnel. Tout était prêt dès mon arrivée et la réservation a été simple.",
    author: "Client de la résidence",
    origin: "Séjour professionnel",
  },
  {
    title: "Je reviendrai",
    quote: "Je reviendrai sans hésiter lors de mon prochain passage à Pointe-Noire.",
    author: "Client de la résidence",
  },
];
