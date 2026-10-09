import { Reveal } from "@/components/reveal";

/** Bandeau de titre des pages intérieures (laisse la place à l'en-tête fixe). */
export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: string }) {
  return (
    <section className="bg-night pb-16 pt-36 text-ivory md:pb-20 md:pt-44">
      <Reveal className="container-x">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/70 md:text-lg">{intro}</p>}
      </Reveal>
    </section>
  );
}
