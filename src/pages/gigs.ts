import { GIGS as DATA } from "data-ui";
import { SVG } from "resources";
import { GIGS as sections } from "sections";

export const GIGS: IPage = {
  title: "Gigs",
  path: "/gigs",
  SvgIcon: SVG.MICROPHONE,
  count: DATA.pageCount,
  sections
};
