import Link from "next/link";
import { Brand } from "@/components/brand";
import { nav, site } from "@/content/site";
import { Icon } from "@/components/icons";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-night pb-28 pt-20 text-ivory/80 md:pb-10">
      <div className="container-x grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Brand size="lg" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{site.description}</p>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-gold mt-7">
            <Icon name="whatsapp" /> Réserver sur WhatsApp
          </a>
        </div>

        <div>
          <p className="eyebrow">Navigation</p>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="size-5 shrink-0 text-gold" />
              {site.address.street}, {site.address.country}
            </li>
            {site.phones.slice(0, 2).map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="flex gap-3 transition-colors hover:text-gold">
                  <Icon name="phone" className="size-5 shrink-0 text-gold" /> {p.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 transition-colors hover:text-gold">
                <Icon name="mail" className="size-5 shrink-0 text-gold" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.social.youtube} target="_blank" rel="noopener" className="flex gap-3 transition-colors hover:text-gold">
                <Icon name="youtube" className="size-5 shrink-0 text-gold" /> YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-16 border-t border-white/10 pt-6 text-xs text-ivory/50">
        © {site.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
