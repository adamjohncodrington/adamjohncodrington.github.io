import { SvgTheatreMasks } from "resources";
import { PAGE_COLORS } from "styles";

import { sections } from "./sections";

export const PAGE_THEATRE: IPage = {
  title: "Theatre",
  path: "/theatre",
  SvgIcon: SvgTheatreMasks,
  sections,
  color: PAGE_COLORS.THEATRE
};
