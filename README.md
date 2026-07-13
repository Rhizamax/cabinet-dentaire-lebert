# Site — Cabinet Dentaire du Dr LEBERT

Site construit avec [Astro](https://astro.build) (HTML statique, rapide, sans framework JS lourd côté client).

## Lancer le projet en local

```bash
npm install
npm run dev
```
Le site est alors visible sur http://localhost:4321

## Construire la version de production

```bash
npm run build
```
Le résultat est généré dans le dossier `dist/` — prêt à être déployé sur n'importe quel hébergeur statique
(Netlify, Vercel, OVH, o2switch, etc.).

## ⚠️ Informations à compléter avant mise en ligne

Toutes les informations manquantes sont rassemblées dans **`src/config.ts`** pour être modifiées en un seul
endroit :

- Numéro de téléphone du cabinet
- Adresse e-mail
- Lien Doctolib (prise de RDV)
- Adresse postale complète
- Horaires d'ouverture définitifs

Sur le site, les zones suivantes sont également signalées par des encadrés grisés "[À FOURNIR]" :

- **Photos** : page d'accueil (photo du cabinet), page Équipe (photos du Dr LEBERT et du personnel)
- **Page Équipe** : noms et biographies du personnel (assistante, secrétaire, etc.)
- **Pages Implantologie, Blanchiment, Facettes** : contenu détaillé à rédiger avec le Dr LEBERT
- **Page Mentions légales** : SIRET, n° RPPS, hébergeur, politique de confidentialité RGPD
- **Page Contact** : la carte Google Maps s'activera automatiquement une fois l'adresse réelle renseignée

## Formulaire de contact

Le formulaire (`src/components/ContactForm.astro`) est préconfiguré pour **Netlify Forms** (détection
automatique au build, aucun backend à gérer si le site est hébergé sur Netlify).

Pour utiliser **Formspree** à la place (si hébergement ailleurs que Netlify) :
1. Retirer les attributs `data-netlify="true"` et `netlify-honeypot` du formulaire
2. Remplacer `action="/merci"` par `action="https://formspree.io/f/VOTRE_ID"`

## Structure du site

```
src/
  components/   → Header, Footer, Hero, cartes de soins, formulaire, icônes...
  layouts/      → BaseLayout (toutes les pages) et SoinLayout (pages de soins)
  pages/        → une page par fichier .astro
    soins/      → les 11 pages détaillées par spécialité
  styles/       → variables de couleurs/typographies (charte graphique)
  config.ts     → coordonnées du cabinet (à éditer)
public/
  logo.png      → logo recadré utilisé dans le header/footer
  favicon*.png  → favicon généré à partir du logo
```

## Charte graphique appliquée

Couleurs extraites directement du logo fourni :
- Bleu principal `#125A98`
- Sarcelle secondaire `#2E7A75`
- Gris de texte `#505050`

Typographies : **Poppins** (titres, écho du logo) + **Inter** (texte courant) + **Playfair Display italique**
(clin d'œil au "du" italique du logo, utilisé pour les accroches).
