import meta from "@/content/images.generated.json";

type ImageMeta = { width: number; height: number; blurDataURL: string };

const images = meta as Record<string, ImageMeta>;

/** Taille et aperçu flou d'une image de public/images (générés par `npm run images`). */
export function imageMeta(src: string): ImageMeta | undefined {
  return images[src];
}

/** Ajoute l'aperçu flou à une liste de photos, pour les passer à un composant client. */
export function withBlur<T extends { src: string }>(photos: readonly T[]) {
  return photos.map((p) => ({ ...p, blurDataURL: images[p.src]?.blurDataURL }));
}
