"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useScroll, useTransform } from "motion/react";
import { Icon } from "@/components/icons";
import { Photo } from "@/components/photo";
import { RevealImage, RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

const panels = [
  {
    src: "/images/residence/panneaux-solaires.jpg",
    alt: "Panneaux solaires sur le toit de la résidence",
    icon: "bolt",
    label: "Énergie solaire",
    title: "Jamais dans le noir",
    text: "Des panneaux solaires sur le toit, relayés par un groupe électrogène : climatisation, lumière et Wi-Fi continuent de fonctionner pendant les coupures.",
    live: true,
  },
  {
    src: "/images/residence/cour-parking.jpg",
    alt: "Cour pavée et parking fermé par un portail",
    icon: "car",
    label: "Parking privé",
    title: "Votre véhicule à l'abri",
    text: "Une cour pavée fermée par un portail, sous gardiennage 24h/24 : vous stationnez dans l'enceinte de la résidence.",
    live: false,
  },
] as const;

const stats = [
  { value: 24, suffix: "h/24", label: "électricité" },
  { value: 2, suffix: "", label: "sources d'énergie" },
  { value: 100, suffix: "%", label: "climatisé" },
];

/** Nombre qui défile de 0 à sa valeur quand il entre dans l'écran. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.8,
      ease,
      onUpdate: (v) => (node.textContent = Math.round(v) + suffix),
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

/** Carte photo : l'image glisse plus lentement que la page (parallaxe) et zoome au survol. */
function Panel({ panel, index }: { panel: (typeof panels)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div ref={ref} className={index === 1 ? "md:mt-24" : ""}>
      <RevealImage delay={index * 0.15} className="group relative aspect-4/5 rounded-3xl">
        <motion.div className="absolute -inset-y-[14%] inset-x-0" style={{ y }}>
          <Photo
            src={panel.src}
            alt={panel.alt}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-t from-night via-night/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 text-ivory md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: 0.5 + index * 0.15, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-night/50 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-gold-light backdrop-blur-sm">
              <Icon name={panel.icon} className="size-3.5" />
              {panel.label}
              {panel.live && (
                <span className="relative ml-1 flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
              )}
            </span>
            <h3 className="mt-4 text-3xl md:text-4xl">{panel.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/75 md:text-base">{panel.text}</p>
          </motion.div>
        </div>
      </RevealImage>
    </div>
  );
}

export function Energie() {
  return (
    <section className="overflow-hidden py-20 md:py-32">
      <div className="container-x">
        <div className="grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
          <SectionHeading
            eyebrow="Énergie & sécurité"
            title={
              <>
                Les coupures d&apos;électricité, <em className="text-terracotta">on ne les sent pas.</em>
              </>
            }
            intro="Quand le quartier est privé de courant, la résidence continue de tourner : vous gardez la climatisation, la lumière et Internet, et votre voiture reste en sécurité dans la cour."
          />
          <RevealGroup className="grid grid-cols-3 divide-x divide-night/10 border-y border-night/10 py-6">
            {stats.map((s) => (
              <RevealItem key={s.label} className="px-3 text-center">
                <p className="font-display text-4xl text-night md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-muted">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-10">
          {panels.map((p, i) => (
            <Panel key={p.src} panel={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
