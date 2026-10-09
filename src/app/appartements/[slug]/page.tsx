import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppartementCard } from "@/components/appartement-card";
import { Gallery } from "@/components/gallery";
import { Icon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { appartements, formatPrice, getAppartement } from "@/content/appartements";
import { site } from "@/content/site";
import { withBlur } from "@/lib/images";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return appartements.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/appartements/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getAppartement(slug);
  if (!a) return {};
  return {
    title: `${a.name} — ${a.type}`,
    description: `${a.summary} ${formatPrice(a.price)}${a.price ? " par nuit" : ""}.`,
    openGraph: { images: [{ url: a.cover }] },
  };
}

export default async function AppartementPage({ params }: PageProps<"/appartements/[slug]">) {
  const { slug } = await params;
  const a = getAppartement(slug);
  if (!a) notFound();

  const others = appartements.filter((o) => o.slug !== a.slug).slice(0, 3);
  const message = `Bonjour, je souhaite réserver l'${a.name} (${a.type}) à la Résidence La Lionne.\nDates : \nNombre de personnes : `;

  return (
    <>
      <PageHeader eyebrow={a.type} title={a.name} intro={a.summary} />

      <section className="py-16 md:py-24">
        <div className="container-x">
          <Gallery photos={withBlur(a.gallery)} id={a.slug} />

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <Reveal>
              <h2 className="text-3xl text-night md:text-4xl">Équipements</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {a.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-ink/85">
                    <Icon name="check" className="size-5 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} as="div" className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl bg-night p-8 text-ivory shadow-2xl shadow-night/20">
                <p className="text-sm text-ivory/60">Tarif</p>
                <p className="mt-1 font-display text-4xl">
                  {formatPrice(a.price)}
                  {a.price !== null && <span className="text-lg text-ivory/60"> / nuit</span>}
                </p>
                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-ivory/75">
                  <li className="flex items-center gap-3">
                    <Icon name="users" className="size-5 text-gold" />
                    {a.minGuests} personne{a.minGuests > 1 ? "s" : ""} minimum
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check" className="size-5 text-gold" />
                    Arrivée {site.checkIn} · Départ {site.checkOut}
                  </li>
                </ul>
                <a href={whatsappLink(message)} target="_blank" rel="noopener" className="btn btn-gold mt-8 w-full">
                  <Icon name="whatsapp" /> Réserver sur WhatsApp
                </a>
                <a href={`tel:${site.phones[0].tel}`} className="btn btn-ghost mt-3 w-full">
                  <Icon name="phone" /> {site.phones[0].label}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand/60 py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl text-night md:text-4xl">Autres logements</h2>
            <Link href="/appartements" className="font-semibold text-night underline-offset-4 hover:underline">
              Tout voir
            </Link>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <AppartementCard key={o.slug} appartement={o} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
