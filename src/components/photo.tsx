import Image, { type ImageProps } from "next/image";
import { imageMeta } from "@/lib/images";

type PhotoProps = Omit<ImageProps, "src" | "placeholder" | "blurDataURL"> & { src: string };

/**
 * next/image avec aperçu flou automatique : la photo s'affiche floue instantanément,
 * puis nette dès qu'elle est chargée. Les dimensions sont déduites si `fill` n'est pas utilisé.
 */
export function Photo({ src, alt, fill, width, height, ...props }: PhotoProps) {
  const meta = imageMeta(src);
  const size = fill ? {} : { width: width ?? meta?.width, height: height ?? meta?.height };
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      {...size}
      placeholder={meta ? "blur" : "empty"}
      blurDataURL={meta?.blurDataURL}
      {...props}
    />
  );
}
