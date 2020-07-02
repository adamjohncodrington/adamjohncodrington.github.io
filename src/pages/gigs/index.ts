import { SvgMicrophone } from "resources";
import { PAGE_COLORS } from "styles";

import { FACTORY } from "./factory";
import { sections } from "./sections";

export const PAGE_GIGS: IPage = {
  title: "Gigs",
  path: "/gigs",
  SvgIcon: SvgMicrophone,
  count: FACTORY.pageCount,
  sections,
  color: PAGE_COLORS.GIGS
};
