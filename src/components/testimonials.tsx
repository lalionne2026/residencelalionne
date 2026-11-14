import { testimonials } from "@/content/site";

type Testimonial = (typeof testimonials)[number];

/** Silhouette neutre à la place d'une photo : les clients restent anonymes. */
function Avatar() {
  return (
    <span className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-full bg-linear-to-br from-gold-light to-gold ring-4 ring-ivory">
      <svg viewBox="0 0 40 40" className="absolute -bottom-1 size-10 text-night/70" aria-hidden="true">
        <circle cx="20" cy="15" r="7.5" fill="currentColor" />
        <path d="M5 40c0-8.8 6.7-14 15-14s15 5.2 15 14Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <p className="flex gap-1 text-gold" aria-label={`Note : ${rating} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`size-4 fill-current ${i < rating ? "" : "opacity-25"}`} aria-hidden="true">
          <path d="m10 1.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
        </svg>
      ))}
    </p>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure
      className="relative flex w-[80vw] max-w-sm flex-col rounded-3xl bg-ivory p-7 shadow-[0_24px_60px_-36px_rgba(12,23,36,0.35)] transition-transform duration-500 hover:-translate-y-1 md:w-96 md:p-8"
    >
      <span aria-hidden="true" className="pointer-events-none absolute right-6 top-2 font-display text-8xl leading-none text-gold/15">
        “
      </span>
      {t.rating && <Stars rating={t.rating} />}
      <p className="mt-5 eyebrow">{t.title}</p>
      <blockquote className="mt-3 flex-1 font-display text-xl leading-snug text-night md:text-2xl">« {t.quote} »</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar />
        <span className="text-sm">
          <span className="block font-semibold text-night">{t.author}</span>
          {t.origin && <span className="text-muted">{t.origin}</span>}
        </span>
      </figcaption>
    </figure>
  );
}

/** Affiche tous les avis clients en même temps, sans défilement automatique. */
export function Testimonials() {
  return (
    <div className="container-x flex flex-wrap justify-center gap-6">
      {testimonials.map((t) => (
        <Card key={t.quote} t={t} />
      ))}
    </div>
  );
}
