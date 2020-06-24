const requireSvg = (icon: string): IImageSrc => require(`./${icon}.svg`);

export const SVG_ICONS: IconsObject = {
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
  VEG_BOWL: requireSvg("veg_bowl"),
  VINYL: requireSvg("vinyl_1")
};
