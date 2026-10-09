import Link from "next/link";
import { Hero } from "@/components/hero";
import { AppartementCard } from "@/components/appartement-card";
import { Photo } from "@/components/photo";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealImage, RevealItem } from "@/components/reveal";
import { Icon } from "@/components/icons";
import { Testimonials } from "@/components/testimonials";
import { appartements } from "@/content/appartements";
import { highlights, residencePhotos, rules, services, site, testimonials } from "@/content/site";
import { imageMeta } from "@/lib/images";
import { whatsappLink } from "@/lib/whatsapp";

const heroImage = { src: "/images/studio/03.jpg", alt: "Façade de la Résidence La Lionne entourée de verdure" };

export default function Home() {
  return (
    <>
      <Hero image={{ ...heroImage, blurDataURL: imageMeta(heroImage.src)?.blurDataURL }} />

      {/* Chiffres clés */}
      <section className="border-b border-night/10 bg-ivory">
        <RevealGroup className="container-x grid grid-cols-2 py-8 md:grid-cols-4 md:py-10">
          {highlights.map((h, i) => (
            <RevealItem
              key={h.label}
              className={`px-4 py-4 text-center ${i > 0 ? "md:border-l md:border-night/10" : ""} ${i % 2 === 1 ? "border-l border-night/10" : ""}`}
            >
              <p className="font-display text-4xl text-night md:text-5xl">{h.value}</p>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted">{h.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Présentation */}
      <section className="py-20 md:py-32">
        <div className="container-x grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <SectionHeading
              eyebrow="Bienvenue"
              title={
                <>
                  Un lieu simple, cordial <em className="text-terracotta">et très calme.</em>
                </>
              }
              intro={`${site.name} vous propose des appartements haut standing de deux et trois chambres et des studios modernes. Grandes chambres, salon spacieux, douches avec jacuzzi et climatisation réglable dans chaque pièce : tout est pensé pour que votre séjour soit reposant.`}
            />
            <Reveal delay={0.15} className="mt-8">
              <Link href="/infos-pratiques" className="group inline-flex items-center gap-2 font-semibold text-night">
                Infos pratiques
                <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="relative pb-8 sm:pl-10">
            <RevealImage className="relative aspect-4/5 rounded-3xl">
              <Photo
                src="/images/appartement-1/02.jpg"
                alt="Salon et salle à manger de l'appartement N°1"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </RevealImage>
            <RevealImage
              delay={0.3}
              className="absolute -bottom-2 left-0 w-[45%] rounded-2xl border-[5px] border-ivory shadow-2xl sm:-left-2"
            >
              <div className="relative aspect-square">
                <Photo
                  src="/images/appartement-1/10.jpg"
                  alt="Salle de bain avec jacuzzi"
                  fill
                  sizes="(min-width: 768px) 20vw, 45vw"
                  className="object-cover"
                />
              </div>
            </RevealImage>
          </div>
        </div>
      </section>

      {/* Appartements : carrousel sur mobile, grille sur ordinateur */}
      <section className="bg-sand/60 py-20 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Nos logements"
              title="Choisissez votre appartement"
              intro="Quatre appartements et des studios, tous meublés, équipés et climatisés."
            />
            <Reveal className="hidden sm:block">
              <Link href="/appartements" className="btn btn-dark">
                Tout voir <Icon name="arrow" className="size-4" />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mt-14 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 sm:overflow-visible sm:px-0 lg:grid-cols-3 sm:[&>*:nth-child(n+4)]:hidden">
            {appartements.map((a) => (
              <RevealItem key={a.slug} as="article" className="w-[82%] shrink-0 snap-start sm:w-auto">
                <AppartementCard appartement={a} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="container-x mt-8 sm:hidden">
          <Link href="/appartements" className="btn btn-dark w-full">
            Voir tous les logements <Icon name="arrow" className="size-4" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-night py-20 text-ivory md:py-32">
        <div className="container-x">
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Services inclus"
            title="Tout pour un séjour serein"
            intro="Des services pensés pour les familles, les professionnels en mission et la diaspora de passage au pays."
          />
          <RevealGroup className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 md:mt-16 lg:grid-cols-3">
            {services.map((s) => (
              <RevealItem
                key={s.title}
                className="group bg-night p-5 transition-colors duration-500 hover:bg-night-soft sm:p-8 md:p-10"
              >
                <span className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-night md:size-12">
                  <Icon name={s.icon} className="size-5 md:size-6" />
                </span>
                <h3 className="mt-5 text-xl md:mt-6 md:text-2xl">{s.title}</h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-ivory/65 md:text-sm">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Avis clients */}
      {testimonials.length > 0 && (
        <section className="py-20 md:py-32">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow text-center">Ils ont séjourné chez nous</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <Testimonials />
            </Reveal>
          </div>
        </section>
      )}

      {/* La résidence en images */}
      <section className="pb-20 md:pb-32">
        <div className="container-x">
          <SectionHeading eyebrow="La résidence" title="Entre palmiers et tranquillité" />
          <div className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:gap-4">
            {residencePhotos.map((p, i) => (
              <RevealImage
                key={p.src}
                delay={i * 0.08}
                className={`group relative rounded-2xl ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
              >
                <Photo
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </RevealImage>
            ))}
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section className="pb-20 md:pb-32">
        <div className="container-x">
          <Reveal className="grid gap-10 rounded-3xl bg-sand/70 p-7 md:grid-cols-[1fr_1.4fr] md:p-14">
            <div>
              <p className="eyebrow">Bon à savoir</p>
              <h2 className="mt-4 text-4xl text-night">Arrivée & départ</h2>
              <div className="mt-8 flex gap-10">
                <div>
                  <p className="font-display text-5xl text-night">{site.checkIn}</p>
                  <p className="mt-1 text-sm text-muted">Arrivée à partir de</p>
                </div>
                <div>
                  <p className="font-display text-5xl text-night">{site.checkOut}</p>
                  <p className="mt-1 text-sm text-muted">Départ avant</p>
                </div>
              </div>
            </div>
            <ul className="space-y-5">
              {rules.slice(1, 4).map((r) => (
                <li key={r.title} className="flex gap-4">
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-ink/80">
                    <strong className="text-night">{r.title}.</strong> {r.text}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="relative overflow-hidden bg-night py-24 text-center text-ivory md:py-36">
        <Photo src="/images/divers/09.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow">Réservation</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
              Prêt à poser vos valises <em className="text-gold-light">à La Lionne ?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-ivory/70">
              Écrivez-nous sur WhatsApp avec vos dates et le nombre de personnes : nous vous répondons rapidement.
            </p>
            <div className="mt-10 grid justify-center gap-3 sm:flex sm:flex-wrap">
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-gold">
                <Icon name="whatsapp" /> Réserver sur WhatsApp
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Autres moyens de contact
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
