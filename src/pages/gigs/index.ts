import { SvgMicrophone } from "resources";

import { totalGigsSoFar } from "./factory";
import { sections } from "./sections";

export const PAGE_GIGS: IPage = {
  title: "Gigs",
  path: "/gigs",
  SvgIcon: SvgMicrophone,
  count: totalGigsSoFar,
  sections
};
