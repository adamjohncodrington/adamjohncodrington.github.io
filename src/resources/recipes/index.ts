const requireJpeg = (photo: string): IImageSrc => require(`./${photo}.jpg`);

export const PHOTOS_RECIPES: IRecipePhotos = {
  // B
  BAKED_BEANS: requireJpeg("baked-beans"),
  BANG_BANG_CAULIFLOWER: requireJpeg("bang-bang-cauliflower"),
  BANANA_CAKE: requireJpeg("banana-cake"),
  BOLOGNESE: requireJpeg("bolognese"),
  BLUEBERRY_PANCAKES: requireJpeg("blueberry-pancakes"),
  BROWNIES: requireJpeg("brownies"),
  // C
  CARBONARA: requireJpeg("carbonara"),
  CRUMBLE: requireJpeg("crumble"),
  // F
  FLAPJACKS: requireJpeg("flapjacks"),
  // K
  KALE_CRISPY: requireJpeg("kale-crispy"),
  // L
  LASAGNE: requireJpeg("lasagne"),
  // M
  MASHED_POTATO: requireJpeg("mashed-potato"),
  // P
  PORRIDGE: requireJpeg("porridge"),
  POTATO_SALAD: requireJpeg("potato-salad"),
  PIRI_PIRI: requireJpeg("piri-piri"),
  // R
  RATATOUILLE: requireJpeg("ratatouille"),
  ROGAN_JOSH: requireJpeg("rogan-josh"),
  // S
  SHEPHERDS_PIE: requireJpeg("shepherds-pie")
};
