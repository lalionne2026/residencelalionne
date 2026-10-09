import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { rules, site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Infos pratiques",
  description: `Arrivée à partir de ${site.checkIn}, départ avant ${site.checkOut}, état des lieux et conditions de séjour à la Résidence La Lionne.`,
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
