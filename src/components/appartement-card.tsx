import Link from "next/link";
import { formatPrice, type Appartement } from "@/content/appartements";
import { Icon } from "@/components/icons";
import { Photo } from "@/components/photo";

export function AppartementCard({ appartement, priority = false }: { appartement: Appartement; priority?: boolean }) {
  return (
    <Link href={`/appartements/${appartement.slug}`} className="group block">
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-sand shadow-sm shadow-night/5 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-night/15">
        <Photo
          src={appartement.cover}
          alt={appartement.gallery[0]?.alt ?? appartement.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
          className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-night/70 via-night/0 to-night/0 transition-opacity duration-500 group-hover:opacity-90" />
        <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-xs font-semibold text-night backdrop-blur">
          {appartement.type}
        </span>
        <p className="absolute bottom-4 left-4 text-ivory">
          <span className="font-display text-2xl">{formatPrice(appartement.price)}</span>
          {appartement.price !== null && <span className="text-sm text-ivory/75"> / nuit</span>}
        </p>
        <span className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-gold text-night transition-all duration-500 ease-out-expo md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <Icon name="arrow" className="size-4" />
        </span>
      </div>
      <h3 className="mt-5 text-2xl text-night transition-colors group-hover:text-terracotta">{appartement.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{appartement.summary}</p>
    </Link>
  );
}
