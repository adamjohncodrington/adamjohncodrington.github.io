import { PAGE_SECTION } from "@constants";
import { SVG, PHOTOS } from "resources";

import { DATA } from "./data";

const MAINS: IPageSection = {
  title: PAGE_SECTION.TITLES.MAINS,
  SvgIcon: SVG.CLOCHE,
  data: { recipes: DATA.MAINS }
};

const SIDES: IPageSection = {
  title: PAGE_SECTION.TITLES.SIDES,
  SvgIcon: SVG.BOWL,
  data: { recipes: DATA.SIDES }
};

const SAUCES: IPageSection = {
  title: PAGE_SECTION.TITLES.SAUCES,
  SvgIcon: SVG.SAUCE,
  data: { recipes: DATA.SAUCES }
};

const SWEETS: IPageSection = {
  title: PAGE_SECTION.TITLES.SWEETS,
  SvgIcon: SVG.CAKE,
  data: { recipes: DATA.SWEETS }
};

const SECTION_PHOTOS: IPageSection = {
  title: PAGE_SECTION.TITLES.PHOTOS,
  SvgIcon: SVG.CAMERA,
  data: { photoGrid: { photos: Object.values(PHOTOS.RECIPES), columnCount: 3 } }
};

const COMING_SOON: IPageSection = {
  title: PAGE_SECTION.TITLES.COMING_SOON,
  SvgIcon: SVG.NOTEPAD,
  data: { countedListItems: DATA.COMING_SOON }
};

export const sections: Array<IPageSection> = [
  MAINS,
  SIDES,
  SAUCES,
  SWEETS,
  SECTION_PHOTOS,
  COMING_SOON
];
