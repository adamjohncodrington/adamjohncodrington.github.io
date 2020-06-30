import { SvgTravel } from "resources";
import { PAGE_COLORS } from "@styles";

import { FACTORY } from "./factory";
import { sections } from "./sections";

export const PAGE_TRAVEL: IPage = {
  title: "Travel",
  path: "/travel",
  SvgIcon: SvgTravel,
  count: FACTORY.pageCount,
  sections,
  color: PAGE_COLORS.TRAVEL
};
