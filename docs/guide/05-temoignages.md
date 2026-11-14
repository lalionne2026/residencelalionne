# 5. Témoignages (avis clients)

[← Retour au guide](README.md)

Les avis s'affichent sur la page d'accueil, dans la section **« Ils nous font confiance »** et défilent automatiquement de droite à gauche en boucle. Tous les avis ajoutés sont inclus dans le défilement ; il s'arrête au survol.

Ils sont dans le fichier **`src/content/site.ts`** : cherchez `export const testimonials`.

## À quoi ressemble un avis

```ts
  {
    title: "Literie confortable",
    quote: "La literie est très confortable, j'ai super bien dormi.",
    author: "Client de la résidence",
  },
```

| Ligne | Rôle | Obligatoire ? |
|---|---|---|
| `title` | Petit titre doré au-dessus de l'avis | Oui |
| `quote` | Le texte de l'avis, **sans** guillemets « » (le site les ajoute) | Oui |
| `author` | Le nom affiché sous l'avis | Oui |
| `origin` | Une précision sous le nom : ville, type de séjour… | Non |
| `rating` | Une note sur 5 (affiche des étoiles) | Non |

## Ajouter un avis

1. Ouvrez `src/content/site.ts` sur GitHub et cliquez sur le crayon ✏️.
2. Cherchez `export const testimonials`.
3. Copiez un bloc complet, de `{` jusqu'à `},` inclus.
4. Collez-le **juste avant la ligne `];`** qui termine la liste.
5. Remplacez les textes.
6. Enregistrez (« Commit changes »).

**Exemple complet** avec tous les champs :

```ts
  {
    title: "Parfait pour le travail",
    quote: "Wi-Fi rapide et calme absolu : idéal pour mes missions à Pointe-Noire.",
    author: "Jean-Marc K.",
    origin: "Séjour professionnel",
    rating: 5,
  },
```

⚠️ Pour `rating`, écrivez un **nombre de 1 à 5, sans guillemets**.

## Bonnes pratiques

- ✅ Publiez uniquement de **vrais avis** de clients (messages WhatsApp, Google, Booking…). Les faux avis trompent les clients et sont sanctionnés par Google et Booking.
- ✅ Demandez l'accord du client avant de publier son nom. Sinon, écrivez simplement `"Client de la résidence"` : une **silhouette anonyme** s'affiche à la place d'une photo.
- ✅ Corrigez les fautes de frappe, mais **ne changez pas le sens** de l'avis.
- 💡 Le défilement est continu, même avec un seul avis.
