"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { Icon } from "@/components/icons";

type Photo = { src: string; alt: string; blurDataURL?: string };

const lightboxSizes = "(min-width: 1280px) 1150px, 100vw";

/** Grille de photos ; un clic ouvre la photo en plein écran avec une transition partagée. */
export function Gallery({ photos, id }: { photos: Photo[]; id: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const lenis = useLenis();

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lenis?.start();
    };
  }, [index, close, step, lenis]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.src}
            type="button"
            layoutId={`${id}-${photo.src}`}
            onClick={() => setIndex(i)}
            className={`group relative overflow-hidden rounded-xl bg-sand ${
              i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            aria-label={`Agrandir : ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
              placeholder={photo.blurDataURL ? "blur" : "empty"}
              blurDataURL={photo.blurDataURL}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-night/0 transition-colors duration-500 group-hover:bg-night/15" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={photos[index].alt}
            className="fixed inset-0 z-60 flex items-center justify-center bg-night/95 p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              layoutId={`${id}-${photos[index].src}`}
              className="relative h-full max-h-[85vh] w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={photos[index].src}
                alt={photos[index].alt}
                fill
                quality={85}
                sizes={lightboxSizes}
                placeholder={photos[index].blurDataURL ? "blur" : "empty"}
                blurDataURL={photos[index].blurDataURL}
                className="object-contain"
              />
            </motion.div>

            {/* Précharge les photos voisines pour que « suivant / précédent » soit instantané. */}
            {[1, -1].map((d) => {
              const p = photos[(index + d + photos.length) % photos.length];
              return (
                <div key={d} className="pointer-events-none invisible absolute size-px overflow-hidden" aria-hidden="true">
                  <Image src={p.src} alt="" width={1150} height={800} quality={85} sizes={lightboxSizes} loading="eager" />
                </div>
              );
            })}

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-ivory/70">
              {photos[index].alt} · {index + 1}/{photos.length}
            </p>
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
              aria-label="Fermer"
            >
              <Icon name="close" />
            </button>
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 rotate-180 place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
                  aria-label="Photo précédente"
                >
                  <Icon name="arrow" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20"
                  aria-label="Photo suivante"
                >
                  <Icon name="arrow" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
