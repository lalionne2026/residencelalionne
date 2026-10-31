# Versions et workflow Git

[← Retour au README](../../README.md)

## Branches

- **`main`** : la version en ligne. Chaque enregistrement sur `main` met le site à jour.
- **Petites modifications de contenu** (texte, prix, avis) : directement sur `main`, depuis GitHub (voir le [guide](../guide/01-avant-de-commencer.md)).
- **Code, design, nouvelles fonctionnalités** : une branche par sujet à partir de `main` (`feat/…`, `fix/…`, `docs/…`), puis une pull request. Vercel publie un aperçu de chaque pull request avant la fusion.

Avant chaque push :

```bash
npm run lint && npm run build
```

## Messages de commit

Format [Conventional Commits](https://www.conventionalcommits.org/fr/), en français :

```
type(portée): résumé à l'impératif, sans point final

Détails facultatifs : pourquoi, et ce qui change pour le visiteur.
```

| Type | Usage |
|---|---|
| `feat` | Nouvelle fonctionnalité ou section |
| `fix` | Correction de bug |
| `contenu` | Textes, prix, photos, avis |
| `perf` | Vitesse de chargement |
| `securite` | Failles, en-têtes, dépendances vulnérables |
| `docs` | Documentation |
| `chore` | Outillage, configuration, version |

Les commits sont signés uniquement par leurs auteurs humains : pas de ligne `Co-Authored-By` pour un outil.

## Numéros de version

[Versionnage sémantique](https://semver.org/lang/fr/) `MAJEUR.MINEUR.CORRECTIF` dans `package.json` :

| Changement | Exemple | Version |
|---|---|---|
| Correction, faille, petit contenu | prix corrigé | 0.2.0 → 0.2.**1** |
| Nouvelle section ou fonctionnalité | section avis | 0.2.1 → 0.**3**.0 |
| Refonte complète | nouveau site | 0.x → **1**.0.0 |

Pour publier une version :

1. Mettez à jour `version` dans `package.json`.
2. Ajoutez une entrée en haut de [`CHANGELOG.md`](../../CHANGELOG.md) (Ajouté / Modifié / Supprimé / Sécurité).
3. Commit `chore(version): 0.3.0`, puis un tag :
   ```bash
   git tag -a v0.3.0 -m "Version 0.3.0"
   git push origin main --tags
   ```

Les modifications de contenu faites depuis GitHub n'ont pas besoin d'une nouvelle version.
