"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Icon } from "@/components/icons";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

const ease = [0.16, 1, 0.3, 1] as const;

// Deux lignes logiques : chacune peut passer à la ligne, mais elles ne se mélangent jamais.
const lines = [
  { words: ["Le", "confort", "d'un", "hôtel,"], accent: false },
  { words: ["l'espace", "d'un", "chez-soi."], accent: true },
];

export function Hero({ image }: { image: { src: string; alt: string; blurDataURL?: string } }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Parallaxe : la photo descend plus lentement que la page et le texte s'efface.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex h-[100svh] min-h-[620px] items-end overflow-hidden bg-night">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        {/* Zoom lent (effet Ken Burns) */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 7, ease: "easeOut" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            quality={85}
            sizes="100vw"
            placeholder={image.blurDataURL ? "blur" : "empty"}
            blurDataURL={image.blurDataURL}
            className="object-cover object-[60%_center]"
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-t from-night via-night/70 to-night/25 md:via-night/60 md:to-night/10" />
      {/* Assombrit le haut pour que le logo et le menu restent lisibles sur le ciel. */}
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-night/70 to-transparent" />

      <motion.div style={{ opacity: contentOpacity }} className="container-x relative pb-16 md:pb-28">
        <motion.p
          className="eyebrow flex items-center gap-3 text-[0.66rem]! tracking-[0.14em]! sm:text-xs! sm:tracking-[0.22em]!"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <span className="hidden h-px w-8 bg-gold sm:block" aria-hidden="true" />
          {site.tagline}
        </motion.p>

        <h1 className="mt-5 max-w-4xl text-[2.7rem] leading-[1.02] text-ivory sm:text-6xl md:text-7xl lg:text-8xl">
          {lines.map((line, l) => (
            <span key={l} className={`block ${line.accent ? "italic text-gold-light" : ""}`}>
              {line.words.map((word, w) => {
                const i = lines.slice(0, l).reduce((n, prev) => n + prev.words.length, 0) + w;
                return (
                  <span key={word + i} className="mr-[0.22em] inline-block overflow-hidden pb-[0.12em] align-bottom last:mr-0">
                    <motion.span
                      className="inline-block"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, delay: 0.35 + i * 0.07, ease }}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-ivory/80 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease }}
        >
          Appartements de 2 et 3 chambres et studios modernes, avec jacuzzi, climatisation individuelle et sécurité
          24h/24. À partir de <strong className="font-semibold text-ivory">45&nbsp;000&nbsp;FCFA</strong> la nuit.
        </motion.p>

        <motion.div
          className="mt-8 grid gap-3 sm:flex sm:flex-wrap md:mt-9"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease }}
        >
          <Link href="/appartements" className="btn btn-gold">
            Voir les appartements <Icon name="arrow" className="size-4" />
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-ghost backdrop-blur-sm">
            <Icon name="whatsapp" /> Réserver sur WhatsApp
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-ivory/60 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        Défiler
        <span className="relative block h-12 w-px overflow-hidden bg-ivory/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gold"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
