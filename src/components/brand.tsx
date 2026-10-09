import Image from "next/image";

/** Logo + nom, groupés en un seul bloc qui ne se coupe pas sur mobile. */
export function Brand({ size = "md" }: { size?: "md" | "lg" }) {
  const logo = size === "lg" ? 56 : 44;
  return (
    <span className="flex items-center gap-3 whitespace-nowrap">
      <Image
        src="/images/logo.jpg"
        alt=""
        width={logo}
        height={logo}
        className="shrink-0 rounded-full ring-1 ring-gold/50"
        priority={size === "md"}
      />
      <span className="flex flex-col leading-none">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-ivory/70">La Résidence</span>
        <span className={`mt-1 font-display text-gold ${size === "lg" ? "text-3xl" : "text-[1.6rem]"}`}>La Lionne</span>
      </span>
    </span>
  );
}
