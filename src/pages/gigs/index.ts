import { SvgMicrophone } from "resources";

import { FACTORY } from "./factory";
import { sections } from "./sections";

export const PAGE_GIGS: IPage = {
  title: "Gigs",
  path: "/gigs",
  SvgIcon: SvgMicrophone,
  count: FACTORY.pageCount,
  sections
};
