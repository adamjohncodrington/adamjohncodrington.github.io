import { SVG_ICONS } from "resources";

import { totalGigsSoFar } from "./factory";
import { sections } from "./sections";

export const PAGE_GIGS: IPage = {
  title: "Gigs",
  path: "/gigs",
  icon: SVG_ICONS.MICROPHONE,
  count: totalGigsSoFar,
  sections
};
