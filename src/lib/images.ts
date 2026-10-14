import type { ImageMetadata } from "astro";

// Toutes les images de src/assets/images, optimisées par Astro au build.
const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/*.{webp,png,jpg,jpeg}",
  { eager: true },
);

export function img(name: string): ImageMetadata {
  const found = files[`../assets/images/${name}`];
  if (!found) throw new Error(`Image introuvable : src/assets/images/${name}`);
  return found.default;
}
