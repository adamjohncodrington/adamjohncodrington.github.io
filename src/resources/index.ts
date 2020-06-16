const requireSvg = (icon: string): IImageSrc => require(`./svg/${icon}.svg`);
const requireJpg = (photo: string): IImageSrc => require(`./jpg/${photo}.jpg`);

export const ICONS: IconsObject = {
  // A
  ARTIST: requireSvg("artist"),
  // B
  BOOK: requireSvg("book"),
  BRAIN: requireSvg("brain"),
  // C
  CAKE: requireSvg("cake"),
  CAMERA: requireSvg("camera"),
  CITY: requireSvg("city"),
  CLOCHE: requireSvg("cloche"),
  // F
  FLAG: requireSvg("flag"),
  // H
  HEART: requireSvg("heart"),
  // M
  MAP_PIN: requireSvg("map_pin"),
  MASKS: requireSvg("masks"),
  MICROPHONE: requireSvg("microphone"),
  // N
  NOTEPAD: requireSvg("notepad"),
  // P
  PALM_TREE: requireSvg("palm_tree"),
  PEACE_SIGN: requireSvg("peace_sign"),
  PEOPLE: requireSvg("people"),
  // R
  ROLLER_COASTER: requireSvg("roller_coaster"),
  // S
  STADIUM: requireSvg("stadium"),
  STARS: requireSvg("stars"),
  // T
  TENT: requireSvg("tent"),
  THEATRE: requireSvg("theatre"),
  TOAST: requireSvg("toast"),
  TOWN_HALL: requireSvg("town_hall"),
  TRAVEL: requireSvg("travel"),
  // V
  VEG_BOWL: requireSvg("veg_bowl")
};

export const PHOTOS: PhotosObject = {
  // B
  BAKED_BEANS: requireJpg("baked_beans"),
  BANANA_CAKE: requireJpg("banana_cake"),
  BOLOGNESE: requireJpg("bolognese"),
  BROWNIES: requireJpg("brownies"),
  // C
  CARBONARA: requireJpg("carbonara"),
  CRUMBLE: requireJpg("crumble"),
  // F
  FLAPJACKS: requireJpg("flapjacks"),
  // K
  KALE_CRISPY: requireJpg("kale_crispy"),
  // L
  LASAGNE: requireJpg("lasagne"),
  // M
  MASHED_POTATO: requireJpg("mashed_potato"),
  // P
  PIRI_PIRI: requireJpg("piri_piri"),
  // R
  RATATOUILLE: requireJpg("ratatouille"),
  ROGAN_JOSH: requireJpg("rogan_josh"),
  // S
  SHEPHERDS_PIE: requireJpg("shepherds_pie")
};
