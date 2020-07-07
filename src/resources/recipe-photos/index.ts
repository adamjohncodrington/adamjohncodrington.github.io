const requireJpg = (photo: string): IJpgSrc => require(`./${photo}.jpg`);

export const RECIPE_PHOTOS: IRecipePhotos = {
  // B
  BAKED_BEANS: requireJpg("baked-beans"),
  BANG_BANG_CAULIFLOWER: requireJpg("bang-bang-cauliflower"),
  BANANA_CAKE: requireJpg("banana-cake"),
  BOLOGNESE: requireJpg("bolognese"),
  BLUEBERRY_PANCAKES: requireJpg("blueberry-pancakes"),
  BROWNIES: requireJpg("brownies"),
  // C
  CARBONARA: requireJpg("carbonara"),
  CRUMBLE: requireJpg("crumble"),
  // F
  FLAPJACKS: requireJpg("flapjacks"),
  // K
  KALE_CRISPY: requireJpg("kale-crispy"),
  // L
  LASAGNE: requireJpg("lasagne"),
  // M
  MASHED_POTATO: requireJpg("mashed-potato"),
  // P
  PORRIDGE: requireJpg("porridge"),
  POTATO_SALAD: requireJpg("potato-salad"),
  PIRI_PIRI: requireJpg("piri-piri"),
  // R
  RATATOUILLE: requireJpg("ratatouille"),
  ROGAN_JOSH: requireJpg("rogan-josh"),
  // S
  SHEPHERDS_PIE: requireJpg("shepherds-pie")
};
