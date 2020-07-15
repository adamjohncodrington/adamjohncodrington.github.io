import { SvgTravel } from "resources";
import { PAGE_COLORS } from "styles";

import { sections } from "./sections";

export const PAGE_TRAVEL: IPage = {
  title: "Travel",
  path: "/travel",
  SvgIcon: SvgTravel,
  sections,
  color: PAGE_COLORS.TRAVEL
};
