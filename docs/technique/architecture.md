# Architecture

[← Retour au README](../../README.md)

## Stack

| Outil | Rôle |
|---|---|
| [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components) | Pages, routage, optimisation des images, SEO |
| TypeScript | Typage (le contenu est typé : une faute dans `src/content/` fait échouer le build au lieu de casser le site en ligne) |
| Tailwind CSS 4 | Styles — palette et animations CSS dans `src/app/globals.css` |
| [Motion](https://motion.dev) | Animations au défilement, parallaxe, galerie plein écran |
| [Lenis](https://lenis.darkroom.engineering) | Défilement fluide |
| sharp | Optimisation des photos et aperçus flous (`npm run images`) |
| playwright-core | Captures d'écran mobile / ordinateur (`npm run screenshot`) |

> ⚠️ Next.js 16 diffère des versions précédentes (par exemple `preload` remplace `priority` sur les images). La documentation de la version installée est dans `node_modules/next/dist/docs/`.

## Structure

```
src/
  app/                    pages (App Router)
    page.tsx              accueil
    appartements/         liste + fiche [slug]
    infos-pratiques/  contact/
    layout.tsx            métadonnées, JSON-LD, polices, en-tête/pied de page
    sitemap.ts robots.ts  SEO
    globals.css           palette, utilitaires, animations CSS (hero, défilement des avis)
  components/
    hero.tsx              grand visuel d'accueil (entrée en CSS, parallaxe en Motion)
    energie.tsx           section « Énergie & sécurité » (parallaxe, compteurs)
    testimonials.tsx      avis en défilement horizontal infini
    gallery.tsx           galerie + visionneuse plein écran
    reveal.tsx            Reveal / RevealImage / RevealGroup : apparitions au défilement
    photo.tsx             next/image + aperçu flou automatique
  content/                ← tout le contenu éditable (voir docs/guide)
    site.ts               coordonnées, horaires, règles, services, avis
    appartements.ts       logements
    images.generated.json dimensions + aperçus flous (généré, ne pas éditer)
  lib/                    lien WhatsApp, métadonnées d'images
public/images/            photos, un dossier par lieu (appartement-N, studio, residence…)
scripts/                  optimize-images.mjs, screenshot.mjs
docs/guide/               guide de mise à jour pour les non-développeurs
docs/technique/           documentation développeur
```

## Pages

| Route | Rendu | Contenu |
|---|---|---|
| `/` | Statique | Hero, chiffres clés, présentation, appartements, services, énergie & sécurité, avis, galerie, horaires, réservation |
| `/appartements` | Statique | Liste des logements |
| `/appartements/[slug]` | Statique (`generateStaticParams`) | Galerie, équipements, tarif, réservation WhatsApp |
| `/infos-pratiques` | Statique | Règles du séjour |
| `/contact` | Statique | Coordonnées + formulaire qui prépare un message WhatsApp (aucun envoi serveur) |

## Animations : deux règles

1. **Au-dessus de la ligne de flottaison** (hero, en-têtes de page, première rangée d'appartements, première photo des galeries) : animations **CSS** (`.hero-in`, `.hero-word`, `.hero-zoom` dans `globals.css`). Elles démarrent sans attendre l'hydratation React. Avec Motion, `initial={{ opacity: 0 }}` laisse ces éléments invisibles jusqu'au chargement du JavaScript, ce qui dégradait le LCP de plus de 2 secondes sur mobile.
2. **Plus bas dans la page** : composants `Reveal*` (Motion, `whileInView`).

Toutes les animations CSS respectent `prefers-reduced-motion`.

## Photos

- `npm run images` redimensionne à 2000 px max, recompresse en JPEG progressif (mozjpeg), convertit `.jpeg`/`.png` en `.jpg` et régénère `src/content/images.generated.json`.
- `<Photo>` lit ce fichier pour l'aperçu flou. Sans entrée (photo pas encore optimisée), l'image s'affiche quand même, sans aperçu.
- Next.js sert ensuite des versions AVIF/WebP adaptées à l'écran (`next.config.ts` → `images`).
