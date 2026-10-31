# Historique des versions

Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/), versions selon le [versionnage sémantique](https://semver.org/lang/fr/).

## [0.2.0] — 2026-10-31

### Sécurité
- Next.js 16.4.0 → **16.4.3** : corrige trois failles, dont deux critiques d'exécution de code à distance.
- En-têtes de sécurité sur toutes les pages : politique de contenu (CSP), HTTPS obligatoire (HSTS), anti-clickjacking, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`. En-tête `X-Powered-By` masqué.

### Ajouté
- Section **« Énergie & sécurité »** sur l'accueil : panneaux solaires et parking, avec parallaxe, compteurs animés et voyant « courant disponible ».
- Section **« Ils nous font confiance »** : 10 avis clients en défilement horizontal automatique, avec avatar anonyme.
- Nouvelles photos : accueil, salon d'attente, bar, balcon, cour avec balancelle, cour/parking, panneaux solaires.
- Équipements : lits deux places (1,60 m), matelas médicaux, écrans plasma 55 pouces.
- Documentation : guide de mise à jour pour les non-développeurs (`docs/guide/`) et documentation technique (`docs/technique/`).

### Modifié
- Accroche : « Le confort d'une Résidence, l'espace d'un chez-soi », titre réduit pour ne plus déborder.
- Offre présentée « du studio aux appartements de 2 et 3 chambres », **à partir de 25 000 FCFA** (prix du studio).
- Textes d'arrivée (early check-in sans frais) et de départ (au plus tard à 12h00).
- Photos rangées par lieu : nouveau dossier `residence/`, noms explicites pour le studio.
- Vitesse : animations du haut de page en CSS ; le contenu principal s'affiche 2 à 3 s plus tôt sur mobile.
- `priority` (obsolète dans Next.js 16) remplacé par `preload` sur les images.

### Supprimé
- Les 8 photos portant le logo d'un autre établissement, et une photo en double.
- La règle « État des lieux ».

## [0.1.0] — 2026-10-09

### Ajouté
- Refonte en Next.js 16 de l'ancien site Strikingly : accueil, liste et fiches des appartements, infos pratiques, contact.
- Réservation par WhatsApp, galerie plein écran, animations, SEO (sitemap, robots, données structurées).
