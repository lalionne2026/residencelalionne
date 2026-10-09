"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { appartements } from "@/content/appartements";
import { whatsappLink } from "@/lib/whatsapp";

const field =
  "mt-2 w-full rounded-xl border border-night/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

/** Formulaire de demande de réservation : il prépare un message WhatsApp, sans serveur. */
export function BookingForm() {
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const arrivee = String(data.get("arrivee"));
    const depart = String(data.get("depart"));
    if (depart <= arrivee) {
      setError("La date de départ doit être après la date d'arrivée.");
      return;
    }
    setError(null);
    const lines = [
      "Bonjour, je souhaite réserver à la Résidence La Lionne.",
      `Nom : ${data.get("nom")}`,
      `Logement : ${data.get("logement")}`,
      `Arrivée : ${arrivee}`,
      `Départ : ${depart}`,
      `Personnes : ${data.get("personnes")}`,
    ];
    const message = String(data.get("message") ?? "").trim();
    if (message) lines.push(`Message : ${message}`);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-medium text-night sm:col-span-2">
        Votre nom
        <input name="nom" required autoComplete="name" className={field} />
      </label>
      <label className="text-sm font-medium text-night sm:col-span-2">
        Logement souhaité
        <select name="logement" className={field} defaultValue="Peu importe">
          <option>Peu importe</option>
          {appartements.map((a) => (
            <option key={a.slug} value={`${a.name} (${a.type})`}>
              {a.name} — {a.type}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-night">
        Arrivée
        <input type="date" name="arrivee" required className={field} />
      </label>
      <label className="text-sm font-medium text-night">
        Départ
        <input type="date" name="depart" required className={field} />
      </label>
      <label className="text-sm font-medium text-night sm:col-span-2">
        Nombre de personnes
        <input type="number" name="personnes" min={1} max={12} defaultValue={2} required className={field} />
      </label>
      <label className="text-sm font-medium text-night sm:col-span-2">
        Message (facultatif)
        <textarea name="message" rows={3} className={field} />
      </label>
      {error && (
        <p role="alert" className="text-sm text-terracotta sm:col-span-2">
          {error}
        </p>
      )}
      <button type="submit" className="btn btn-gold sm:col-span-2">
        <Icon name="whatsapp" /> Envoyer la demande sur WhatsApp
      </button>
    </form>
  );
}
