import { SvgMicrophone } from "resources";
import { PAGE_COLORS } from "@styles";

import { totalGigsSoFar } from "./factory";
import { sections } from "./sections";

export const PAGE_GIGS: IPage = {
  title: "Gigs",
  path: "/gigs",
  SvgIcon: SvgMicrophone,
  count: totalGigsSoFar,
  sections,
  color: PAGE_COLORS.GIGS
};
