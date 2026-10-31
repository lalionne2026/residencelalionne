# Sécurité et performances

[← Retour au README](../../README.md)

## En-têtes de sécurité

Définis dans `next.config.ts` (`headers()`), appliqués à toutes les routes :

| En-tête | Valeur | Protège contre |
|---|---|---|
| `Content-Security-Policy` | `default-src 'self'`, `object-src 'none'`, `frame-ancestors 'none'`… | Injection de scripts, ressources tierces non prévues |
| `Strict-Transport-Security` | 2 ans, sous-domaines, preload | Connexions non chiffrées |
| `X-Frame-Options` | `DENY` | Clickjacking (site affiché dans une iframe) |
| `X-Content-Type-Options` | `nosniff` | Interprétation de fichiers sous un mauvais type |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Fuite d'URL complètes vers d'autres sites |
| `Permissions-Policy` | caméra, micro, géolocalisation, paiement, USB désactivés | Usage abusif des API du navigateur |
| `Cross-Origin-Opener-Policy` | `same-origin` | Attaques entre onglets |

`poweredByHeader: false` masque l'en-tête `X-Powered-By: Next.js`.

### Ajouter une ressource externe

La CSP n'autorise que le domaine du site. Pour intégrer une carte Google Maps, une vidéo YouTube, un outil de statistiques…, il faut ajouter son domaine à la bonne directive dans `next.config.ts` (`frame-src`, `script-src`, `img-src`, `connect-src`), sinon le navigateur la bloque. Vérifiez la console du navigateur après l'ajout.

`'unsafe-inline'` reste nécessaire dans `script-src` pour les scripts que Next.js insère dans la page. L'alternative (nonces) rendrait toutes les pages dynamiques et ralentirait le site.

### Données utilisateur

Aucune donnée n'est envoyée au serveur : le formulaire de réservation construit un lien `wa.me` côté navigateur (`src/lib/whatsapp.ts`, texte encodé avec `encodeURIComponent`). Le seul HTML injecté (`dangerouslySetInnerHTML`) est le JSON-LD de `layout.tsx`, construit à partir du contenu du dépôt et échappé (`<` → `<`).

## Mises à jour de sécurité

```bash
npm audit --omit=dev     # failles dans ce qui est livré aux visiteurs
npm audit                # tout, y compris les outils de développement
```

- Faites-le **au moins une fois par mois** et avant chaque mise en ligne importante.
- Mettez à jour Next.js et `eslint-config-next` **ensemble** et à la **même version exacte** :
  ```bash
  npm install next@X.Y.Z eslint-config-next@X.Y.Z --save-exact
  ```
- Version 0.2.0 : Next.js 16.4.0 → 16.4.3 (corrige GHSA-2464-fhr4-w9xw, GHSA-673q-mjm6-r5xr, exécution de code à distance, et GHSA-p3m5-59mp-jv5r, déni de service).

## Performances

Toutes les pages sont pré-rendues en statique au build.

### Mesures (v0.2.0)

Build de production en local, iPhone 13 émulé, réseau 4G lente (1,6 Mb/s, 150 ms de latence) et processeur ralenti ×4 :

| Page | LCP | CLS | Poids transféré |
|---|---|---|---|
| `/` | ~2,5 s (5,2 s avant) | 0,000 | 495 Ko |
| `/appartements` | 1,5 s (3,9 s avant) | 0,000 | 555 Ko |
| `/appartements/appartement-1` | 1,3 s (3,6 s avant) | 0,000 | 580 Ko |
| `/infos-pratiques` | 2,4 s | 0,000 | 366 Ko |
| `/contact` | 1,9 s | 0,000 | 369 Ko |

### Ce qui garde le site rapide

- Images : AVIF/WebP, tailles adaptées (`sizes`), aperçu flou, `preload` sur l'image principale de chaque page uniquement.
- Polices auto-hébergées via `next/font` (aucune requête vers Google).
- Animations du haut de page en CSS (voir [Architecture](architecture.md#animations--deux-règles)).
- Cache d'un an pour les images optimisées (`minimumCacheTTL`).

### Règles pour ne pas le ralentir

- Lancez `npm run images` après chaque ajout de photo.
- Un seul `preload` par page : l'image la plus grande visible à l'arrivée.
- Pas d'animation Motion qui part de `opacity: 0` sur un élément visible à l'arrivée : utilisez `.hero-in`.
- Pas de script tiers sans mesurer son impact.
