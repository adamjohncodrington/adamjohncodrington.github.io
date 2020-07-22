import { GIGS as FACTORY } from "factories";
import { SVG } from "resources";
import { GIGS as sections } from "sections";

export const GIGS: IPage = {
  title: "Gigs",
  path: "/gigs",
  SvgIcon: SVG.MICROPHONE,
  count: FACTORY.pageCount,
  sections
};
