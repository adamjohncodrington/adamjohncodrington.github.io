import { SvgVinyl } from "resources";
import { PAGE_COLORS } from "@styles";

import { sections } from "./sections";

export const PAGE_VINYL: IPage = {
  title: "Vinyl",
  path: "/vinyl",
  SvgIcon: SvgVinyl,
  sections,
  color: PAGE_COLORS.VINYL
};
