# 2. Textes et coordonnées

[← Retour au guide](README.md)

Tout se passe dans le fichier **`src/content/site.ts`**. Lisez d'abord [Avant de commencer](01-avant-de-commencer.md) pour savoir comment l'ouvrir et l'enregistrer.

---

## Changer un numéro de téléphone

Cherchez `phones:` (Ctrl + F). Chaque numéro a deux lignes :

```ts
    { label: "06 562 46 70", tel: "+242065624670" },
```

- **`label`** : le numéro **tel qu'il s'affiche** sur le site, écrit comme vous voulez.
- **`tel`** : le même numéro **au format international, sans espaces**, avec `+242` devant (c'est ce qui permet d'appeler en un clic sur téléphone).

**Exemple** — remplacer le premier numéro par le 06 111 22 33 :

```ts
    { label: "06 111 22 33", tel: "+242061112233" },
```

Pour **ajouter** un numéro, copiez une ligne entière et collez-la juste en dessous, puis modifiez-la.
Pour **supprimer** un numéro, effacez la ligne entière.

## Changer le numéro WhatsApp

Cherchez `whatsapp:`. C'est le numéro qui reçoit **toutes les demandes de réservation** du site.

```ts
  whatsapp: "242061397887",
```

⚠️ Format spécial : indicatif du pays **sans le `+`**, puis le numéro, **sans espaces**.

## Changer l'email ou l'adresse

```ts
  email: "lalionne2026@gmail.com",
```

```ts
  address: {
    street: "Km 4, direction Pemba",
    country: "République du Congo",
  },
```

## Réseaux sociaux

```ts
  social: [
    { name: "facebook", label: "Facebook", href: "https://www.facebook.com/share/v/19zgHJZx6r/" },
    { name: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@lalionne4256" },
    { name: "youtube", label: "YouTube", href: "https://www.youtube.com/@residencelalionne" },
  ],
```

Pour changer un lien, remplacez seulement l'adresse entre guillemets après `href:`.
Pour retirer un réseau, effacez sa ligne entière. Ces liens apparaissent dans le pied de page et sur la page Contact.

## Heures d'arrivée et de départ

Les heures apparaissent à **deux endroits** : pensez à changer les deux.

**1. Les grands chiffres** (encadré « Arrivée & départ » de l'accueil) — cherchez `checkIn:` :

```ts
  checkIn: "13h00",
  checkOut: "12h00",
```

**2. Le texte des règles** — cherchez `export const rules` :

```ts
  {
    title: "Arrivée",
    text: "À partir de 13h00. Toutefois, en fonction des disponibilités…",
  },
```

## Règles du séjour (page « Infos pratiques »)

Dans `rules`, chaque règle a un **titre** et un **texte**. Elles s'affichent dans l'ordre du fichier.

- **Modifier** : changez le texte entre guillemets.
- **Ajouter** : copiez un bloc complet, de `{` jusqu'à `},` inclus, et collez-le à l'endroit voulu.
- **Supprimer** : effacez le bloc complet, de `{` jusqu'à `},`.

```ts
  {
    title: "Animaux",
    text: "Les animaux de compagnie ne sont pas acceptés.",
  },
```

> Les 3 premières règles s'affichent aussi sur la page d'accueil, dans l'encadré « Arrivée & départ ».

## Services (« Tout pour un séjour serein »)

Cherchez `export const services`. Vous pouvez changer `title` et `text` librement.

```ts
  {
    icon: "wifi",
    title: "Wi-Fi & TV",
    text: "Internet et écran plasma de 55 pouces dans chaque logement.",
  },
```

⚠️ Ne changez pas **`icon`** : seules les valeurs `shield`, `bolt`, `sparkle`, `wifi`, `car` et `leaf` existent. Pour un nouveau pictogramme, demandez à un développeur.

## Chiffres clés (bandeau sous la grande photo)

Cherchez `export const highlights` :

```ts
  { value: "4", label: "appartements" },
  { value: "2", label: "studios" },
```

## Slogan et description pour Google

En haut du fichier :

```ts
  tagline: "Appartements haut standing au Congo",
  description: "Du studio aux appartements meublés haut standing…",
```

- **`tagline`** : la petite ligne dorée au-dessus du grand titre de l'accueil.
- **`description`** : le texte qui apparaît **sous le lien du site dans les résultats Google**. Gardez-le court (environ 150 caractères).

---

## Textes qui ne sont pas dans ce fichier

Le **grand titre de l'accueil** (« Le confort d'une Résidence… ») et les **phrases de présentation** des sections sont dans le code des pages. Pour les modifier, demandez à un développeur. Ce sont des textes qui changent rarement.
