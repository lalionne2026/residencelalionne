# 7. Dépannage

[← Retour au guide](README.md)

## Il y a une croix rouge ❌ sur GitHub après ma modification

Le fichier contient une erreur de frappe. **Le site en ligne n'a pas changé** : les visiteurs voient toujours l'ancienne version.

Les causes les plus fréquentes, à vérifier dans ce que vous venez de modifier :

| Erreur | Exemple incorrect | Correction |
|---|---|---|
| Guillemet de fin oublié | `text: "Bonjour,` | `text: "Bonjour",` |
| Virgule de fin oubliée | `text: "Bonjour"` | `text: "Bonjour",` |
| Guillemet droit dans le texte | `"Des matelas "médicaux""` | `"Des matelas « médicaux »"` |
| Prix entre guillemets ou avec espace | `price: "60 000",` | `price: 60000,` |
| Accolade ou crochet effacé | bloc sans `{` ou sans `},` | Comparez avec un bloc voisin |
| Type de logement inconnu | `type: "Duplex",` | `"3 chambres"`, `"2 chambres"` ou `"Studio"` |

Corrigez, enregistrez à nouveau, et attendez la coche verte ✅. Si vous ne trouvez pas l'erreur, [annulez la modification](06-publier-et-annuler.md#annuler-une-modification).

## Ma modification n'apparaît pas sur le site

1. Attendez 5 minutes et vérifiez la coche verte ✅ sur GitHub.
2. Rechargez en forçant : **Ctrl + F5** (ou **Cmd + Maj + R** sur Mac).
3. Essayez dans une fenêtre de navigation privée.

## Une photo ne s'affiche pas (case vide ou grise)

- Le chemin dans le fichier ne correspond pas exactement au nom du fichier. **Majuscules, extension et tirets comptent** : `/images/studio/Chambre.JPG` ≠ `/images/studio/chambre.jpg`.
- Le chemin commence par `/images/…` et **pas** par `public/images/…`.
- Le fichier a bien été envoyé dans le bon dossier sur GitHub.

## Le bouton WhatsApp n'ouvre pas la bonne conversation

Vérifiez `whatsapp:` dans `site.ts` : indicatif **sans `+`** et **sans espaces**, par exemple `"242065624670"`.

## Toujours bloqué ?

Contactez Lelo en indiquant :
- ce que vous vouliez faire ;
- le fichier modifié ;
- une capture d'écran du message d'erreur, s'il y en a un.
