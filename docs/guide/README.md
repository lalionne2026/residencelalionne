# Guide de mise à jour du site

Ce guide est écrit pour les personnes **qui ne sont pas développeurs**. Il suffit de savoir utiliser un navigateur internet et de suivre les étapes dans l'ordre.

## Par où commencer ?

1. Lisez d'abord **[Avant de commencer](01-avant-de-commencer.md)** (5 minutes). Il explique les 3 règles à respecter pour ne rien casser.
2. Puis allez directement au guide qui correspond à ce que vous voulez faire :

| Je veux… | Guide | Difficulté |
|---|---|---|
| Changer un numéro de téléphone, le WhatsApp, l'email | [Textes et coordonnées](02-textes-et-coordonnees.md) | Facile |
| Changer les heures d'arrivée / de départ ou une règle | [Textes et coordonnées](02-textes-et-coordonnees.md) | Facile |
| Changer le prix d'un appartement | [Prix et appartements](03-prix-et-appartements.md) | Facile |
| Changer la description ou les équipements d'un logement | [Prix et appartements](03-prix-et-appartements.md) | Facile |
| Ajouter un avis client | [Témoignages](05-temoignages.md) | Facile |
| Remplacer ou ajouter une photo | [Photos](04-photos.md) | Moyen |
| Vérifier que c'est en ligne / annuler une erreur | [Publier et annuler](06-publier-et-annuler.md) | Facile |
| Le site affiche une erreur | [Dépannage](07-depannage.md) | — |

## Où se trouve quoi ?

```
src/content/site.ts           →  coordonnées, horaires, règles, services, avis clients
src/content/appartements.ts   →  les logements : prix, descriptions, équipements, photos
public/images/                →  toutes les photos, rangées par dossier
```

Vous n'avez **jamais** besoin d'ouvrir un autre fichier.
