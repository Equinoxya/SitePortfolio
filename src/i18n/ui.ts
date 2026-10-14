export const languages = { en: "English", fr: "Français" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

/** Un texte traduit dans les fichiers JSON : "texte" (identique partout) ou { "en": "…", "fr": "…" } */
export type Localized = string | Record<Lang, string>;

export function tr(value: Localized, lang: Lang): string {
  return typeof value === "string" ? value : (value[lang] ?? value[defaultLang]);
}

/** Textes de l'interface */
export const ui = {
  en: {
    "meta.title": "Equipouet, illustrator & web developer",
    "meta.description": "Portfolio of Equipouet, illustrator and web developer. Illustrations, fan art and commissions.",
    "nav.label": "Main",
    "nav.gallery": "Gallery",
    "nav.about": "About",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.switch": "Lire en français",
    "hero.title": "Hi, I'm Equi. I draw characters.",
    "hero.text": "Illustrator and web developer. Here are some pages from my sketchbook: fan art, original characters and commissions.",
    "hero.cta": "Commission me",
    "hero.gallery": "See the gallery",
    "hero.prices": "Prices",
    "hero.latest": "Latest illustrations",
    "hero.note": "my latest drawings!",
    "gallery.title": "Gallery",
    "gallery.filter": "Filter by category",
    "gallery.all": "All",
    "gallery.close": "Close",
    "gallery.prev": "Previous drawing",
    "gallery.next": "Next drawing",
    "about.title": "About",
    "about.caption": "that's me!",
    "pricing.title": "Pricing",
    "pricing.intro": "Commissions in my style. Tell me about your character and we'll go from there.",
    "pricing.example": "Example",
    "pricing.cta": "Ask for a commission",
    "contact.title": "Want a drawing?",
    "contact.text": "Write to me with your idea, your character and your budget.",
    "contact.copy": "Copy email",
    "contact.copied": "Email copied!",
    "contact.copyFail": "Couldn't copy. Use the email link instead.",
    "footer.rights": "All rights reserved.",
    "footer.made": "Drawn and coded by Equi",
    "contact.stamp": "Stamp with Equi's avatar",
  },
  fr: {
    "meta.title": "Equipouet, illustratrice et développeuse web",
    "meta.description": "Portfolio d'Equipouet, illustratrice et développeuse web. Illustrations, fan art et commissions.",
    "nav.label": "Menu principal",
    "nav.gallery": "Galerie",
    "nav.about": "À propos",
    "nav.pricing": "Tarifs",
    "nav.contact": "Contact",
    "nav.switch": "Read in English",
    "hero.title": "Bonjour, je suis Equi. Je dessine des personnages.",
    "hero.text": "Illustratrice et développeuse web. Voici quelques pages de mon carnet : fan art, personnages originaux et commissions.",
    "hero.cta": "Commander un dessin",
    "hero.gallery": "Voir la galerie",
    "hero.prices": "Tarifs",
    "hero.latest": "Dernières illustrations",
    "hero.note": "mes derniers dessins !",
    "gallery.title": "Galerie",
    "gallery.filter": "Filtrer par catégorie",
    "gallery.all": "Tout",
    "gallery.close": "Fermer",
    "gallery.prev": "Dessin précédent",
    "gallery.next": "Dessin suivant",
    "about.title": "À propos",
    "about.caption": "c'est moi !",
    "pricing.title": "Tarifs",
    "pricing.intro": "Des commissions dans mon style. Parlez-moi de votre personnage et on en discute.",
    "pricing.example": "Exemple",
    "pricing.cta": "Demander une commission",
    "contact.title": "Envie d'un dessin ?",
    "contact.text": "Écrivez-moi avec votre idée, votre personnage et votre budget.",
    "contact.copy": "Copier l'email",
    "contact.copied": "Email copié !",
    "contact.copyFail": "Impossible de copier. Utilisez le lien email.",
    "footer.rights": "Tous droits réservés.",
    "footer.made": "Dessiné et codé par Equi",
    "contact.stamp": "Timbre avec l'avatar d'Equi",
  },
} as const;

export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)["en"]) => ui[lang][key] ?? ui[defaultLang][key];
}
