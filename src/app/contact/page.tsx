import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { Icon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & réservation",
  description: "Réservez votre appartement à la Résidence La Lionne par WhatsApp, téléphone ou email.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact & réservation"
        title="Parlons de votre séjour"
        intro="Nous sommes à votre disposition pour toutes vos questions sur nos appartements."
      />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <h2 className="text-3xl text-night">Nous joindre</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <Icon name="pin" className="mt-0.5 size-6 shrink-0 text-gold" />
                <div>
                  <p className="font-semibold text-night">Adresse</p>
                  <p className="text-muted">
                    {site.address.street}, {site.address.country}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Icon name="phone" className="mt-0.5 size-6 shrink-0 text-gold" />
                <div>
                  <p className="font-semibold text-night">Téléphone</p>
                  <ul className="mt-1 space-y-1">
                    {site.phones.map((p) => (
                      <li key={p.tel}>
                        <a href={`tel:${p.tel}`} className="text-muted transition-colors hover:text-night">
                          {p.label}
                          {"note" in p && <span className="text-xs"> · {p.note}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="flex gap-4">
                <Icon name="mail" className="mt-0.5 size-6 shrink-0 text-gold" />
                <div>
                  <p className="font-semibold text-night">Email</p>
                  <a href={`mailto:${site.email}`} className="text-muted transition-colors hover:text-night">
                    {site.email}
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl bg-white p-6 shadow-xl shadow-night/5 md:p-10">
            <h2 className="text-3xl text-night">Demande de réservation</h2>
            <p className="mt-2 text-sm text-muted">
              Remplissez le formulaire : votre demande s&apos;ouvre dans WhatsApp, prête à être envoyée.
            </p>
            <div className="mt-8">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
