import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-night pt-24 text-ivory">
      <div className="container-x">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="mt-4 text-5xl md:text-7xl">Cette page n&apos;existe pas.</h1>
        <Link href="/" className="btn btn-gold mt-10">
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
