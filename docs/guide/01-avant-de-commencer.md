# 1. Avant de commencer

[← Retour au guide](README.md)

## Comment fonctionne le site ?

- Tout le site est stocké sur **GitHub**, un service en ligne qui garde chaque version des fichiers :
  **https://github.com/lalionne2026/residencelalionne**
- Quand un fichier est modifié sur GitHub, le site en ligne **se met à jour tout seul** en quelques minutes.
- Chaque modification est **enregistrée dans l'historique** : on peut toujours revenir en arrière (voir [Publier et annuler](06-publier-et-annuler.md)).

## Ce qu'il vous faut

- Un compte GitHub qui a accès au dépôt (demandez à Lelo de vous ajouter).
- Un navigateur (Chrome, Firefox, Edge…). Un ordinateur est plus confortable qu'un téléphone.

## Modifier un fichier sur GitHub, étape par étape

1. Ouvrez https://github.com/lalionne2026/residencelalionne et connectez-vous.
2. Cliquez sur le dossier **`src`**, puis **`content`**, puis sur le fichier voulu (par exemple **`site.ts`**).
3. Cliquez sur l'icône **crayon ✏️** en haut à droite du fichier (« Edit this file »).
4. Faites votre modification directement dans le texte.
5. Cliquez sur le bouton vert **« Commit changes… »** en haut à droite.
6. Dans la fenêtre qui s'ouvre, écrivez en une phrase ce que vous avez changé, par exemple :
   `Nouveau prix de l'appartement N°2`
7. Laissez cochée l'option **« Commit directly to the main branch »** et cliquez sur **« Commit changes »**.
8. Attendez 2 à 5 minutes, puis rechargez le site pour voir le changement.

> 💡 Astuce : pour trouver un texte dans un long fichier, appuyez sur **Ctrl + F** (ou **Cmd + F** sur Mac) et tapez quelques mots.

## Les 3 règles d'or

Les fichiers de contenu ressemblent à ceci :

```ts
  {
    title: "Arrivée",
    text: "À partir de 13h00.",
  },
```

### Règle 1 — Ne modifiez que ce qui est entre guillemets `"…"`

✅ On change le texte **entre** les guillemets :
```ts
    text: "À partir de 14h00.",
```
❌ On ne touche pas aux mots avant les deux-points (`title:`, `text:`, `price:`…), ni aux accolades `{ }` et crochets `[ ]`.

### Règle 2 — Gardez les guillemets et la virgule à la fin

Chaque ligne se termine par `",` (guillemet + virgule). Si vous les effacez par erreur, le site ne pourra plus se mettre à jour.

```ts
    text: "À partir de 14h00.",     ✅
    text: "À partir de 14h00.      ❌ guillemet de fin manquant
    text: "À partir de 14h00."      ❌ virgule manquante
```

### Règle 3 — Pas de guillemet droit `"` à l'intérieur d'un texte

Pour citer quelque chose, utilisez les guillemets français `« »`. L'apostrophe `'` (comme dans « l'appartement ») ne pose **aucun** problème.

```ts
    text: "Les matelas sont « médicaux ».",     ✅
    text: "Les matelas sont "médicaux".",       ❌ casse le fichier
```

## Si quelque chose se passe mal

Pas de panique : le site en ligne **reste sur l'ancienne version** tant que l'erreur n'est pas corrigée. Voir [Dépannage](07-depannage.md) ou [annuler la modification](06-publier-et-annuler.md#annuler-une-modification).
