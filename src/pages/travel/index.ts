import { SVG_ICONS } from "resources";

import { totalAbroadTripsSoFar } from "./factory";
import { sections } from "./sections";

export const PAGE_TRAVEL: IPage = {
  title: "Travel",
  path: "/travel",
  icon: SVG_ICONS.TRAVEL,
  count: totalAbroadTripsSoFar,
  sections
};
