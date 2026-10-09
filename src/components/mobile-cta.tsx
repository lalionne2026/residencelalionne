"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Icon } from "@/components/icons";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

/** Barre de réservation fixée en bas sur mobile, affichée après un peu de défilement. */
export function MobileCta() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 400));

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-night/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 backdrop-blur md:hidden"
      initial={false}
      animate={{ y: visible ? 0 : "110%" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex gap-3">
        <a href={`tel:${site.phones[0].tel}`} className="btn btn-ghost flex-1" aria-label="Appeler la résidence">
          <Icon name="phone" /> Appeler
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-gold flex-[1.6]">
          <Icon name="whatsapp" /> Réserver
        </a>
      </div>
    </motion.div>
  );
}
