# SitePortfolio

Portfolio d'Equipouet, illustratrice et développeuse web. Construit avec **Astro** et **Tailwind CSS**.

## Lancer le projet

```bash
npm install
npm run dev      # http://localhost:4321/SitePortfolio/
npm run build    # génère dist/
npm run preview  # teste le build
```

## Structure

```
src/
├── assets/images/   # Illustrations (optimisées au build : AVIF + WebP, tailles responsive)
├── data/            # Contenu du site, à modifier ici
│   ├── portfolio.json      # Galerie
│   ├── presentation.json   # Bio, email, réseaux
│   └── pricing.json        # Tarifs
├── components/      # Nav, Hero, Gallery, About, Pricing, Contact
├── layouts/         # Base.astro (<head>, SEO)
├── pages/           # index.astro
└── styles/          # global.css (couleurs, polices, style « sticker »)
```

## Ajouter une illustration

1. Mettre l'image dans `src/assets/images/` (WebP ou PNG, en haute qualité : Astro compresse lui-même).
2. Ajouter une entrée dans `src/data/portfolio.json` avec un `index` plus grand que les autres.
   Les 3 index les plus hauts apparaissent dans la pile du haut de page.

## Déploiement

Un push sur `main` déploie sur GitHub Pages (`.github/workflows/deploy.yml`).
Dans le repo GitHub : Settings → Pages → Source : **GitHub Actions**.

Pour Netlify ou un domaine perso, changer `site` et `base` dans `astro.config.mjs`.

## Auteur

[Equinoxya](https://github.com/Equinoxya)
