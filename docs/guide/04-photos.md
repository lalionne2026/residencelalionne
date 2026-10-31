# 4. Photos

[← Retour au guide](README.md)

## Où sont les photos ?

Dans le dossier **`public/images/`**, rangées par lieu :

```
public/images/
  appartement-1/      01.jpg, 02.jpg, …
  appartement-2/
  appartement-3/
  appartement-4/
  studio/             chambre.jpg, salle-de-bain.jpg
  residence/          facade.jpg, accueil.jpg, balcon.jpg, terrasse.jpg,
                      panneaux-solaires.jpg, cour-parking.jpg, …
  services/  divers/  photos de réserve (non affichées)
  logo.jpg
```

Dans les fichiers de contenu, une photo s'écrit avec son chemin **sans `public`**, en commençant par `/images/` :

```ts
{ src: "/images/studio/chambre.jpg", alt: "Studio avec lit double et TV" },
```

- **`src`** : le chemin de la photo.
- **`alt`** : une courte description de la photo. Elle est lue aux personnes malvoyantes et aide Google à comprendre la photo. **Ne la laissez pas vide.**

## Règles pour les photos

- ✅ Format **JPG** de préférence (PNG accepté).
- ✅ Nom de fichier **en minuscules, sans espace ni accent** : `chambre-2.jpg` ✅ — `Chambre 2 bis.JPG` ❌
- ✅ Photos **horizontales** pour les grandes images, de bonne qualité (au moins 1500 pixels de large).
- ❌ **Aucun logo ni filigrane d'un autre établissement** sur les photos.
- 💡 Pas besoin de les réduire avant : le site les optimise automatiquement.

---

## Méthode A — Remplacer une photo existante (le plus simple)

Idéal pour remplacer une photo par une meilleure, **sans toucher au texte**.

1. Renommez votre nouvelle photo **exactement comme l'ancienne** (par exemple `02.jpg`).
2. Sur GitHub, ouvrez le dossier concerné (par exemple `public/images/appartement-1`).
3. Cliquez sur **« Add file » → « Upload files »**.
4. Glissez votre photo dans la page.
5. Écrivez un message (par exemple `Nouvelle photo du salon de l'appartement 1`) puis cliquez sur **« Commit changes »**.

GitHub remplace l'ancienne photo par la nouvelle.

## Méthode B — Ajouter une nouvelle photo

1. Envoyez la photo dans le bon dossier, comme dans la méthode A (étapes 2 à 5), avec un **nouveau nom** (par exemple `08.jpg`).
2. Ouvrez `src/content/appartements.ts` (ou `site.ts` pour les photos de la résidence) et ajoutez une ligne dans la galerie du logement :

```ts
    gallery: [
      { src: "/images/appartement-1/01.jpg", alt: "Salon avec canapés violets" },
      { src: "/images/appartement-1/08.jpg", alt: "Vue depuis le balcon" },   ← nouvelle ligne
    ],
```

3. Les photos s'affichent **dans l'ordre de la liste**. La première est la grande photo de la fiche.

## Changer la photo principale d'un logement

C'est la ligne `cover:` du logement, dans `appartements.ts` :

```ts
    cover: "/images/appartement-1/01.jpg",
```

## Supprimer une photo

1. Retirez sa ligne `{ src: …, alt: … },` de la galerie.
2. (Facultatif) Supprimez le fichier sur GitHub : ouvrez-le, cliquez sur **« … » → « Delete file »**.

⚠️ Vérifiez d'abord que la photo n'est utilisée **nulle part ailleurs** : sur GitHub, tapez son nom (par exemple `facade.jpg`) dans la barre de recherche du dépôt.

## Photos de la page d'accueil

| Emplacement | Fichier | Où le changer |
|---|---|---|
| Galerie « La résidence » | 5 photos | `residencePhotos` dans `site.ts` |
| Grande photo du haut | `residence/facade.jpg` | Remplacez le fichier (méthode A) |
| Section « Énergie & sécurité » | `residence/panneaux-solaires.jpg`, `residence/cour-parking.jpg` | Remplacez le fichier (méthode A) |
| Fond du bloc « Réservation » | `studio/chambre.jpg` | Remplacez le fichier (méthode A) |

> La galerie « La résidence » est prévue pour **5 photos** exactement : la première en grand, puis 4 petites.

---

## Étape finale (recommandée) : optimiser les photos

Les nouvelles photos s'affichent **tout de suite**, mais sans l'aperçu flou pendant le chargement, et plus lentement sur les téléphones. Pour terminer le travail, il faut lancer une commande sur un ordinateur où le projet est installé :

```bash
npm run images
```

Si vous ne savez pas le faire, **prévenez Lelo** après avoir ajouté des photos : c'est l'affaire d'une minute.
