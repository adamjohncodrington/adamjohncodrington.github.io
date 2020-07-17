import { PAGE_SECTION_TITLES } from "@constants";
import { SvgCamera } from "resources";

import { DATA } from "./data";
import { FACTORY } from "./factory";

const SECTIONS_RECIPE_GROUPS: Array<IPageSection> = DATA.CATEGORISED.map(
  ({ title, recipes }: IRecipeGroup): IPageSection => ({
    title: title,
    data: { recipes: recipes },
    staticIf2Columns: true
  })
);

const SECTION_PHOTOS: IPageSection = {
  SvgIcon: SvgCamera,
  title: PAGE_SECTION_TITLES.PHOTOS,
  data: { photos: { urls: FACTORY.PHOTOS, columnCount: 3 } }
};

const SECTION_COMING_SOON: IPageSection = {
  title: "Coming Soon",
  autoExpandIf2Columns: true,
  data: { countedListItems: DATA.COMING_SOON }
};

export const sections: Array<IPageSection> = [
  ...SECTIONS_RECIPE_GROUPS,
  SECTION_PHOTOS,
  SECTION_COMING_SOON
];
