# SitePortfolio

Portfolio d'**Equipouet**, illustratrice et développeuse web. Le design reprend l'idée d'un carnet de croquis : papier quadrillé, illustrations scotchées, notes écrites à la main.

## 🛠️ Stack technique

| Composant      | Technologie                                     |
| -------------- | ----------------------------------------------- |
| Framework      | [Astro](https://astro.build)                    |
| Style          | [Tailwind CSS](https://tailwindcss.com) v4      |
| Images         | `astro:assets` (AVIF + WebP, tailles responsive) |
| Polices        | Caveat + Work Sans (auto-hébergées via Fontsource) |
| Icônes         | [Simple Icons](https://simpleicons.org) en SVG intégré |
| Déploiement    | GitHub Pages via GitHub Actions                 |

## 🚀 Lancer le projet

Prérequis : Node.js 22.12 ou plus récent.

```bash
npm install
npm run dev      # http://localhost:4321/SitePortfolio/
npm run build    # génère le site dans dist/
npm run preview  # teste le build en local
```

## 🗂️ Structure

```
src/
├── assets/images/   # Illustrations (compressées automatiquement au build)
├── data/            # Tout le contenu du site, à modifier ici
│   ├── portfolio.json      # Galerie (textes en / fr)
│   ├── presentation.json   # Bio, email, réseaux sociaux
│   └── pricing.json        # Tarifs
├── components/      # Nav, Hero, Gallery, About, Pricing, Contact
├── layouts/         # Base.astro (<head>, SEO, favicon)
├── lib/images.ts    # Retrouve une image à partir de son nom de fichier
├── i18n/ui.ts       # Textes de l'interface en anglais et en français
├── pages/           # index.astro (anglais), fr/index.astro (français)
└── styles/          # global.css (couleurs, polices, style « scotché »)
public/              # Icône d'onglet (favicon.svg, .ico) et icône iPhone
_ancien-site/        # Ancienne version HTML/CSS, gardée pour référence
```

## 🎨 Design

| Rôle              | Valeur                        |
| ----------------- | ----------------------------- |
| Papier            | `#f3f6fa` + quadrillage `#dfe6f0` |
| Texte             | `#23283a`                     |
| Stylo bleu (liens, titres) | `#2b4cc4`            |
| Crayon rouge (prix, notes) | `#c93a2f`            |
| Titres, légendes  | Caveat                        |
| Texte courant     | Work Sans                     |

Les couleurs et polices sont définies une seule fois dans `src/styles/global.css` (bloc `@theme`). La classe `.pinned` donne l'effet « illustration scotchée » ; ajouter `.tape-blue` pour un scotch bleu.

## ✏️ Modifier le contenu

**Ajouter une illustration**

1. Mettre l'image dans `src/assets/images/`, en bonne qualité : Astro la compresse lui-même.
2. Ajouter une entrée dans `src/data/portfolio.json` :

```json
{ "index": 12, "title": "Titre", "image": "monImage.webp", "alt": "Description de l'image", "category": "Illustration" }
```

`index` doit être le plus grand de la liste. Les 4 index les plus hauts apparaissent dans le collage du haut de page. Une nouvelle `category` crée automatiquement un filtre dans la galerie.

## 🌍 Traduction (anglais / français)

- Anglais : `/SitePortfolio/` — Français : `/SitePortfolio/fr/`. Le bouton **FR / EN** du menu passe de l'un à l'autre.
- Textes de l'interface (menu, boutons, titres) : `src/i18n/ui.ts`.
- Dans les JSON, un texte peut être identique dans les deux langues (`"title": "Tavara"`) ou traduit (`"title": { "en": "…", "fr": "…" }`).
- Ajouter une langue : l'ajouter dans `languages` et `ui` (`src/i18n/ui.ts`), dans `locales` (`astro.config.mjs`), puis créer `src/pages/<langue>/index.astro`.

**Ouvrir / fermer les commissions** : `src/data/settings.json` → `"commissionsOpen": false` affiche le bandeau « Commissions fermées pour l'instant » en haut du site, `true` le retire.

**Changer les tarifs** : `src/data/pricing.json` (`example` = nom d'une image de `src/assets/images/`).

**Changer la bio, l'email ou les réseaux** : `src/data/presentation.json`.

## 🌐 Déploiement

Chaque push sur `main` déploie le site sur GitHub Pages (`.github/workflows/deploy.yml`).

À faire une seule fois dans le repo GitHub : **Settings → Pages → Source : GitHub Actions**.

Pour Netlify ou un domaine perso : changer `site` et `base` dans `astro.config.mjs` (`base: "/"`).

## 📄 Licence

Voir [`LICENSE.txt`](./LICENSE.txt).

## ✍️ Autrice

[Equinoxya](https://github.com/Equinoxya)
