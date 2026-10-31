# La Résidence La Lionne — site web

Site vitrine de **La Résidence La Lionne** (Congo) : du studio aux appartements meublés haut standing de 2 et 3 chambres, à partir de 25 000 FCFA la nuit.

Ce dépôt contient tout le site : les textes, les prix, les photos et le code.

---

## Je veux modifier le site (sans être développeur)

Suivez le **[guide de mise à jour](docs/guide/README.md)**. Il explique pas à pas, avec des exemples, comment :

| Je veux… | Guide |
|---|---|
| Comprendre comment ça marche et ne rien casser | [Avant de commencer](docs/guide/01-avant-de-commencer.md) |
| Changer un téléphone, l'email, les horaires, les règles, les services | [Textes et coordonnées](docs/guide/02-textes-et-coordonnees.md) |
| Changer un prix, une description ou les équipements d'un logement | [Prix et appartements](docs/guide/03-prix-et-appartements.md) |
| Ajouter, remplacer ou supprimer une photo | [Photos](docs/guide/04-photos.md) |
| Ajouter un avis client | [Témoignages](docs/guide/05-temoignages.md) |
| Vérifier que la modification est en ligne, ou annuler une erreur | [Publier et annuler](docs/guide/06-publier-et-annuler.md) |
| Résoudre un problème | [Dépannage](docs/guide/07-depannage.md) |

> **En résumé :** tout le contenu est dans **2 fichiers** du dossier `src/content/` (`site.ts` et `appartements.ts`) et les photos dans `public/images/`. On n'a jamais besoin de toucher au reste.

---

## Je suis développeur

| Document | Contenu |
|---|---|
| [Architecture](docs/technique/architecture.md) | Stack, structure des dossiers, pages, animations |
| [Sécurité et performances](docs/technique/securite-et-performances.md) | En-têtes HTTP, mises à jour, mesures de vitesse |
| [Versions et workflow Git](docs/technique/versions-et-git.md) | Branches, messages de commit, numéros de version |
| [CHANGELOG](CHANGELOG.md) | Historique des versions |

Démarrage rapide :

```bash
npm install
npm run dev        # http://localhost:3000
```

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement (rechargement automatique) |
| `npm run build` | Build de production |
| `npm run start` | Sert le build de production |
| `npm run lint` | Vérification ESLint |
| `npm run images` | Optimise `public/images/` et régénère les aperçus flous — **après chaque ajout de photo** |
| `npm run screenshot -- /chemin dossier` | Captures mobile et ordinateur d'une page (serveur lancé, Google Chrome requis) |

Les points encore à confirmer avec le propriétaire sont marqués `TODO(propriétaire)` dans le code.
