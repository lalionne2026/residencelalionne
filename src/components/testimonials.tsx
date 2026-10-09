"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { testimonials } from "@/content/site";

const ease = [0.16, 1, 0.3, 1] as const;

/** Avis clients : un grand avis à la fois, qui défile tout seul s'il y en a plusieurs. */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (count < 2 || paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(id);
  }, [count, paused]);

  if (count === 0) return null;
  const t = testimonials[index];

  return (
    <div
      className="relative mx-auto max-w-4xl text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span aria-hidden="true" className="block font-display text-[7rem] leading-[0.6] text-gold/40 md:text-[9rem]">
        “
      </span>

      <div className="relative grid">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={index}
            className="[grid-area:1/1]"
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
            transition={{ duration: 0.7, ease }}
          >
            {t.rating && (
              <p className="flex justify-center gap-1 text-gold" aria-label={`Note : ${t.rating} sur 5`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className={`size-4 ${i < t.rating! ? "fill-current" : "fill-current opacity-25"}`} aria-hidden="true">
                    <path d="m10 1.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
                  </svg>
                ))}
              </p>
            )}
            <p className="mt-6 eyebrow">{t.title}</p>
            <blockquote className="mt-5 font-display text-3xl leading-snug text-night md:text-5xl md:leading-tight">
              {t.quote}
            </blockquote>
            <figcaption className="mt-8 text-sm text-muted">
              <span className="font-semibold text-night">{t.author}</span>
              {t.origin && <> · {t.origin}</>}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="mt-10 flex justify-center gap-2" role="tablist" aria-label="Choisir un avis">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Avis ${i + 1}`}
              onClick={() => setIndex(i)}
              className="group grid h-6 place-items-center"
            >
              <span
                className={`block h-1 rounded-full transition-all duration-500 ${
                  i === index ? "w-10 bg-gold" : "w-4 bg-night/20 group-hover:bg-night/40"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
