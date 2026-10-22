export interface ModelAsset {
  id: string;
  title: string;
  description: string;
  /**
   * Sketchfab URL or model link.
   * Can be a direct embed link (e.g. "https://sketchfab.com/models/<ID>/embed")
   * or a standard Sketchfab model page URL (it will be converted to an embed automatically).
   */
  sketchfabEmbedUrl: string;
}

/*
  🧊 HOW TO ADD / CHANGE 3D MODELS
  --------------------------------
  1. Upload your model to Sketchfab and copy its link or embed URL:
     e.g. "https://sketchfab.com/models/<MODEL_ID>/embed"
     or   "https://sketchfab.com/3d-models/your-model-name-<MODEL_ID>"
  2. Add or edit an entry in `featuredModels` below with `id`, `title`, `description`, and `sketchfabEmbedUrl`.
*/

export const featuredModels: ModelAsset[] = [
  {
    id: "sci-fi-tactical-drone",
    title: "Low Poly Potion Bottle",
    description:
      "Low-poly potion bottle to use as a prop in games.",
    sketchfabEmbedUrl:
      "https://sketchfab.com/3d-models/low-poly-potion-bottle-080dd275558f4e11a23cfb7b3a379e81",
  },
  {
    id: "dev-cat",
    title: "Low Poly Cat",
    description:
      "The low-poly cat model of the Game Development league of Presbiterian Mackenzie University (UPM).",
    sketchfabEmbedUrl:
      "https://sketchfab.com/3d-models/dev-cat-637fa07f35294bfeae238d09c90dbf89",
  },
  {
    id: "old-rustic-lantern",
    title: "Old Rustic Lantern",
    description:
      "An old, rustic, wooden lantern model for use in games.",
    sketchfabEmbedUrl:
      "https://sketchfab.com/3d-models/candelabro-c8fb36df2a8745e8b7c21a67bb3fe8fc"
  }
];
