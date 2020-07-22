import { GIGS as FACTORY } from "factories";
import { SVG } from "resources";

import { sections } from "./sections";

export const PAGE_GIGS: IPage = {
  title: "Gigs",
  path: "/gigs",
  SvgIcon: SVG.MICROPHONE,
  count: FACTORY.pageCount,
  sections
};
