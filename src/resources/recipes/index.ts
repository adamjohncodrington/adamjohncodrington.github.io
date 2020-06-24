export const requireJpeg = (photo: string): IImageSrc =>
  require(`./${photo}.jpg`);

export const PHOTOS_RECIPES: RecipePhotosObject = {
  // B
  BAKED_BEANS: requireJpeg("baked_beans"),
  BANANA_CAKE: requireJpeg("banana_cake"),
  BOLOGNESE: requireJpeg("bolognese"),
  BROWNIES: requireJpeg("brownies"),
  // C
  CARBONARA: requireJpeg("carbonara"),
  CRUMBLE: requireJpeg("crumble"),
  // F
  FLAPJACKS: requireJpeg("flapjacks"),
  // K
  KALE_CRISPY: requireJpeg("kale_crispy"),
  // L
  LASAGNE: requireJpeg("lasagne"),
  // M
  MASHED_POTATO: requireJpeg("mashed_potato"),
  // P
  PIRI_PIRI: requireJpeg("piri_piri"),
  // R
  RATATOUILLE: requireJpeg("ratatouille"),
  ROGAN_JOSH: requireJpeg("rogan_josh"),
  // S
  SHEPHERDS_PIE: requireJpeg("shepherds_pie")
};
