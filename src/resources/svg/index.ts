const requireSvg = (icon: string): IImageSrc => require(`./${icon}.svg`);

export const SVG_ICON_STRINGS: IconsStringObject = {
  // A
  ARTIST: requireSvg("artist"),
  // B
  BOOK: requireSvg("book"),
  BRAIN: requireSvg("brain"),
  // C
  CAKE: requireSvg("cake"),
  CAMERA: requireSvg("camera"),
  CITY: requireSvg("city"),
  // F
  FLAG: requireSvg("flag"),
  // M
  MAP_PIN: requireSvg("map_pin"),
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
  TOWN_HALL: requireSvg("town_hall")
};

export { ReactComponent as SvgMicrophone } from "./microphone.svg";
export { ReactComponent as SvgTheatreMasks } from "./masks.svg";
export { ReactComponent as SvgVinyl } from "./vinyl.svg";
export { ReactComponent as SvgTravel } from "./travel.svg";
export { ReactComponent as SvgVegBowl } from "./veg_bowl.svg";
