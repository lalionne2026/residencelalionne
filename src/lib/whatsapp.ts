import { site } from "@/content/site";

export function whatsappLink(message = "Bonjour, je souhaite réserver un appartement à la Résidence La Lionne.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
