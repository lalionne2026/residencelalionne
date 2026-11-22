import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Photo } from "@/components/photo";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { rules, site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Infos pratiques",
  description: `Arrivée à partir de ${site.checkIn}, départ avant ${site.checkOut} et conditions de séjour à la Résidence La Lionne.`,
};

export default function InfosPratiquesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Avant votre séjour"
        title="Infos pratiques"
        intro="Quelques règles simples pour que chaque client trouve un appartement impeccable."
      />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <RevealGroup as="ul" className="divide-y divide-night/10 border-y border-night/10">
            {rules.map((r, i) => (
              <RevealItem as="li" key={r.title} className="grid gap-3 py-8 md:grid-cols-[6rem_16rem_1fr] md:gap-8">
                <span className="font-display text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="text-2xl text-night md:text-3xl">{r.title}</h2>
                <p className="leading-relaxed text-ink/80">{r.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-16 grid items-center gap-8 rounded-3xl bg-sand/70 p-7 md:grid-cols-[0.9fr_1.1fr] md:p-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Photo
                src="/images/payments/argent.jpg"
                alt="Modalités de paiement des séjours"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow">Cautions & paiement</p>
              <h2 className="mt-4 text-3xl text-night md:text-4xl">
                Modalité de paiement pour les courts et longs séjours
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/80 md:text-base">
                <p>
                  Pour les courts séjours, une caution sera exigée obligatoirement
                  d&apos;une somme de 25 000 FCFA, remboursable à la veille de la sortie
                  après avoir fait l&apos;état des lieux.
                </p>
                <p>
                  Pour les longs séjours, une caution sera exigée obligatoirement
                  d&apos;une somme de 50 000 FCFA, remboursable à la veille de la sortie
                  après avoir fait l&apos;état des lieux.
                </p>
                <p>
                  S&apos;il n&apos;y a pas eu de dégradation dans l&apos;appartement
                  (fissure, cassure, etc.), la caution est remboursée.
                </p>
                <p>
                  <strong className="text-night">NB :</strong> Le paiement se fait par jour.
                </p>
                <p>
                  En conséquence du non-respect du règlement intérieur de la résidence,
                  le client sera invité, ainsi que toutes les personnes qui partagent
                  son séjour, à quitter la résidence sans pouvoir exiger aucun remboursement.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 flex flex-col items-start gap-5 rounded-3xl bg-sand/70 p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h2 className="text-3xl text-night">Paiement & réservation</h2>
              {/* TODO(propriétaire) : préciser les moyens de paiement acceptés (espèces, Mobile Money, virement…) et l'acompte éventuel. */}
              <p className="mt-2 max-w-xl text-muted">
                Contactez-nous pour connaître les disponibilités et les modalités de paiement.
              </p>
            </div>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-dark shrink-0">
              <Icon name="whatsapp" /> Nous écrire
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
