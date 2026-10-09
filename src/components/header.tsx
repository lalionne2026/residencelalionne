"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { Brand } from "@/components/brand";
import { nav, site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  // Se cache quand on descend, réapparaît dès qu'on remonte.
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 300 && y > previous && !open);
  });

  // Sur l'accueil, l'en-tête est transparent au-dessus de la grande photo.
  const solid = scrolled || open || pathname !== "/";

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ${
        solid ? "bg-night/90 py-3 shadow-lg shadow-black/10 backdrop-blur-md" : "bg-transparent py-5"
      }`}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} — accueil`} onClick={() => setOpen(false)}>
          <Brand />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-sm font-medium transition-colors ${active ? "text-gold" : "text-ivory/85 hover:text-ivory"}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500 ease-out-expo ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-gold !py-2.5">
            Réserver
          </a>
        </nav>

        <button
          type="button"
          className="relative z-10 grid size-11 place-items-center rounded-full text-ivory md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute right-0 h-px bg-current transition-all duration-300 ${open ? "top-1.5 w-6 -rotate-45" : "top-3 w-4"}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            aria-label="Navigation mobile"
            className="container-x overflow-hidden md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col pb-4 pt-6">
              {nav.map((item, i) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <motion.li
                    key={item.href}
                    className="border-b border-white/10"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-4 font-display text-3xl ${active ? "text-gold" : "text-ivory"}`}
                    >
                      {item.label}
                      <span className="text-sm text-ivory/40">0{i + 1}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-gold mb-6 w-full">
              Réserver sur WhatsApp
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Barre de progression de lecture */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gold"
        style={{ scaleX: progress, opacity: solid ? 1 : 0 }}
      />
    </motion.header>
  );
}
