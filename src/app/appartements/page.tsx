import type { Metadata } from "next";
import { AppartementCard } from "@/components/appartement-card";
import { PageHeader } from "@/components/page-header";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { appartements } from "@/content/appartements";

export const metadata: Metadata = {
  title: "Nos appartements",
  description:
    "Appartements meublés de 3 chambres (55 000 FCFA/nuit), de 2 chambres (45 000 FCFA/nuit) et studios modernes à la Résidence La Lionne.",
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
        <RevealGroup className="container-x grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {appartements.map((a, i) => (
            <RevealItem key={a.slug} as="article">
              <AppartementCard appartement={a} priority={i < 3} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}
