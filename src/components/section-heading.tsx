import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-4 text-4xl leading-tight md:text-5xl ${tone === "dark" ? "text-ivory" : "text-night"}`}>{title}</h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${tone === "dark" ? "text-ivory/70" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
