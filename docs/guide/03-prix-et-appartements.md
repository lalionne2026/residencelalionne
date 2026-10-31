# 3. Prix et appartements

[← Retour au guide](README.md)

Tout se passe dans le fichier **`src/content/appartements.ts`**. Lisez d'abord [Avant de commencer](01-avant-de-commencer.md).

Chaque logement est un bloc qui ressemble à ceci :

```ts
  {
    slug: "appartement-2",
    name: "Appartement N°2",
    type: "3 chambres",
    price: 55000,
    minGuests: 3,
    summary:
      "Salon élégant aux tons rouge et bleu nuit, trois chambres climatisées…",
    features: commonFeatures,
    cover: "/images/appartement-2/03.jpg",
    gallery: [
      { src: "/images/appartement-2/03.jpg", alt: "Salle à manger et salon" },
      { src: "/images/appartement-2/01.jpg", alt: "Salle de bain avec jacuzzi" },
    ],
  },
```

| Ligne | À quoi ça sert | Modifiable ? |
|---|---|---|
| `slug` | L'adresse de la page (`…/appartements/appartement-2`) | ❌ Non (casserait les liens partagés) |
| `name` | Le nom affiché | ✅ Oui |
| `type` | `"3 chambres"`, `"2 chambres"` ou `"Studio"` uniquement | ✅ Oui, avec une de ces 3 valeurs |
| `price` | Le prix par nuit, en FCFA | ✅ Oui — voir ci-dessous |
| `minGuests` | Nombre minimum de personnes | ✅ Oui (un nombre) |
| `summary` | La description | ✅ Oui |
| `features` | Les équipements | ✅ Oui — voir ci-dessous |
| `cover` | La photo principale (sur les cartes) | ✅ Voir [Photos](04-photos.md) |
| `gallery` | Toutes les photos de la fiche | ✅ Voir [Photos](04-photos.md) |

---

## Changer un prix

⚠️ Le prix s'écrit **sans espace, sans point, sans guillemets et sans « FCFA »** : le site ajoute tout seul l'espace des milliers et « FCFA ».

```ts
    price: 60000,          ✅  s'affiche « 60 000 FCFA »
    price: "60 000",       ❌
    price: 60.000,         ❌
```

Pour afficher **« Prix sur demande »**, écrivez :

```ts
    price: null,
```

> Si vous changez le prix **le plus bas**, pensez aussi à la phrase « À partir de 25 000 FCFA » de la page d'accueil et de la description Google (`description` dans `site.ts`). La phrase de l'accueil est dans le code : demandez à un développeur.

## Changer la description

Changez le texte entre guillemets après `summary:`. Il peut être long ; il passe tout seul à la ligne sur le site.

## Changer les équipements

Les 4 appartements partagent la **même liste**, en haut du fichier (`commonFeatures`) :

```ts
const commonFeatures = [
  "Climatisation individuelle",
  "Douche avec jacuzzi",
  "Cuisine équipée",
  "Lits deux places (1,60 m)",
  "Matelas médicaux",
  "Wi-Fi",
  "Écran plasma 55 pouces",
  "Linge de maison fourni",
];
```

- Modifier cette liste change les équipements **des 4 appartements d'un coup**.
- Chaque équipement est entre guillemets et suivi d'une virgule.
- Le **studio** a sa propre liste, directement dans son bloc (`features: [ … ]`).

**Donner une liste différente à un seul appartement** : remplacez `features: commonFeatures,` dans son bloc par une liste complète :

```ts
    features: [
      "Climatisation individuelle",
      "Baignoire",
      "Wi-Fi",
    ],
```

## Ajouter un nouveau logement

1. Copiez un bloc complet, de `{` jusqu'à `},` inclus.
2. Collez-le juste avant le `];` final.
3. Donnez-lui un **`slug` unique**, en minuscules et sans espace ni accent (par exemple `"appartement-5"`).
4. Ajoutez ses photos (voir [Photos](04-photos.md)).

Le nouveau logement apparaît automatiquement sur l'accueil, dans la liste des appartements, dans le formulaire de réservation et dans le plan du site pour Google.
