import { SvgVegBowl } from "resources";
import { PAGE_COLORS } from "@styles";

import { sections } from "./sections";

export const PAGE_RECIPES: IPage = {
  title: "Recipes",
  path: "/recipes",
  SvgIcon: SvgVegBowl,
  sections,
  color: PAGE_COLORS.RECIPES
};
