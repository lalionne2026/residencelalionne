# La Résidence La Lionne

Site vitrine de **La Résidence La Lionne** (Congo) : appartements meublés haut standing de 2 et 3 chambres et studios. Refonte en Next.js de l'ancien site Strikingly ([laresidencelalionne.mystrikingly.com](https://laresidencelalionne.mystrikingly.com)).

## Stack

| Outil | Rôle |
|---|---|
| [Next.js 16](https://nextjs.org) (App Router, Turbopack) | Pages, routage, optimisation des images, SEO |
| TypeScript | Typage |
| Tailwind CSS 4 | Styles (palette dans `src/app/globals.css`) |
| [Motion](https://motion.dev) | Animations (apparitions au scroll, parallaxe, galerie plein écran) |
| [Lenis](https://lenis.darkroom.engineering) | Défilement fluide |
| sharp | Optimisation des photos et aperçus flous |
| playwright-core | Captures d'écran mobile / ordinateur |

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
```

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement (rechargement automatique) |
| `npm run build` | Build de production |
| `npm run lint` | Vérification ESLint |
| `npm run images` | Optimise `public/images/` et régénère les aperçus flous — **à lancer après chaque ajout de photo** |
| `npm run screenshot -- /chemin dossier` | Captures mobile (iPhone) et ordinateur de la page, serveur lancé (nécessite Google Chrome) |

## Pages

| Route | Contenu |
|---|---|
| `/` | Accueil : accroche animée, chiffres clés, appartements, services, avis, photos, horaires |
| `/appartements` | Liste des logements |
| `/appartements/[slug]` | Fiche : galerie plein écran, équipements, tarif, réservation WhatsApp |
| `/infos-pratiques` | Arrivée, état des lieux, départ, règles |
| `/contact` | Coordonnées + formulaire qui prépare la demande sur WhatsApp |

## Modifier le contenu

Tout le texte est dans `src/content/` — pas besoin de toucher aux composants :

- **`site.ts`** : nom, téléphones, WhatsApp, email, réseaux sociaux, services, règles, **avis clients**
- **`appartements.ts`** : chaque logement (prix, description, équipements, photos)
- **Photos** : à déposer dans `public/images/<dossier>/`, puis `npm run images`

Les points à confirmer avec le propriétaire sont marqués `TODO(propriétaire)` dans le code.

## Structure

```
src/
  app/          pages, layout, SEO (sitemap, robots, JSON-LD)
  components/   en-tête, hero, galerie, cartes, animations (reveal.tsx)…
  content/      textes, prix, photos (+ images.generated.json)
  lib/          utilitaires (lien WhatsApp, métadonnées d'images)
scripts/        optimisation des images, captures d'écran
```

## Workflow

1. Une branche par fonctionnalité (`feat/…`, `fix/…`) à partir de `main`
2. `npm run lint && npm run build` avant chaque push
3. Pull request → relecture → fusion dans `main`
4. Déploiement : Vercel (aperçu automatique pour chaque pull request)
