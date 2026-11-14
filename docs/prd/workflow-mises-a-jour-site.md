# PRD — Workflow des mises à jour du site

**Projet :** Résidence La Lionne

**Statut :** Règles à appliquer à chaque mise à jour

**Portée :** Modifications de contenu, de design, de code et de configuration du site

## Objectif

S'assurer que chaque modification est demandée et approuvée avant son développement, vérifiée (y compris sur le plan de la sécurité), puis approuvée avant sa publication sur le site.

## Règles obligatoires

1. **Demande et approbation du périmètre**
   - Décrire le besoin, les pages et éléments concernés, le résultat attendu et les critères d'acceptation.
   - Présenter les changements envisagés et leurs impacts ou risques.
   - Ne commencer ni le code ni la modification du contenu avant l'approbation explicite du périmètre par le responsable du site.
   - Si le besoin change ou dépasse le périmètre approuvé, suspendre les travaux et demander une nouvelle approbation.

2. **Réalisation**
   - Modifier uniquement les éléments approuvés et suivre les conventions du dépôt.
   - Ne pas publier, fusionner dans `main` ou déclencher une mise en production pendant cette étape.

3. **Vérifications avant validation**
   - Examiner le diff complet et vérifier qu'il ne contient pas de changement hors périmètre.
   - Exécuter les vérifications adaptées au changement : au minimum `npm run lint` et `npm run build` pour les changements de code; ajouter les tests pertinents lorsqu'ils existent.
   - Vérifier les risques de sécurité liés aux changements : données et secrets exposés, entrées utilisateur, dépendances, scripts tiers, permissions et en-têtes de sécurité selon les fichiers concernés.
   - Corriger les échecs et problèmes identifiés, puis relancer les vérifications concernées.
   - Ne jamais déclarer une vérification réussie si elle n'a pas été exécutée. Signaler clairement tout contrôle impossible ou tout risque restant.

4. **Validation et approbation finale**
   - Présenter au responsable du site un résumé des changements, le diff ou l'aperçu disponible, les résultats des contrôles et les risques restants.
   - Attendre son approbation explicite de la version finale avant toute publication.
   - Toute modification apportée après cette approbation doit être présentée et approuvée à nouveau.

5. **Commit et publication**
   - Pour les changements de code ou de design, travailler sur une branche dédiée et ouvrir une pull request vers `main`; ne pas pousser directement sur `main`.
   - Avant la fusion, s'assurer que le commit candidat correspond à la version approuvée, que les contrôles requis passent et que la pull request a reçu l'approbation finale.
   - La fusion dans `main` constitue l'autorisation de mise en production. Ne jamais fusionner ni publier avant les étapes d'approbation et de validation ci-dessus.
   - Pour les changements de contenu effectués dans GitHub, appliquer les mêmes étapes d'approbation et de vérification avant d'enregistrer directement dans `main`.
   - Après publication, vérifier que le site est accessible et que le changement demandé est visible. Signaler le résultat au responsable.

## Critères d'acceptation

- Aucune modification ne commence sans approbation explicite de son périmètre.
- La version présentée pour approbation finale a passé les contrôles convenus et sa sécurité a été examinée.
- Aucun commit n'est fusionné dans `main` et aucune modification n'est mise en production sans approbation finale explicite.
- Le responsable reçoit un compte rendu des vérifications et de la publication.
