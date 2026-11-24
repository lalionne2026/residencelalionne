import type { Metadata } from "next";
import { AppartementCard } from "@/components/appartement-card";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { appartements } from "@/content/appartements";

export const metadata: Metadata = {
  title: "Nos appartements",
  description:
    "Appartements meublés de 3 chambres (55 000 FCFA/nuit), de 2 chambres (45 000 FCFA/nuit) et studios modernes (25 000 FCFA/nuit) à la Résidence La Lionne.",
};

export default function AppartementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos logements"
        title="Appartements & studios"
        intro="Tous nos logements sont meublés, climatisés et équipés. Choisissez celui qui correspond à votre séjour."
      />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {appartements.map((a, i) =>
            // Première rangée (visible dès l'arrivée) : animation CSS immédiate ; les suivantes apparaissent au défilement.
            i < 3 ? (
              <article key={a.slug} className="hero-in" style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
                <AppartementCard appartement={a} preload={i === 0} />
              </article>
            ) : (
              <Reveal key={a.slug} as="article">
                <AppartementCard appartement={a} />
              </Reveal>
            ),
          )}
        </div>
      </section>
    </>
  );
}
