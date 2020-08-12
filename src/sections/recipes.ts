import { PAGE_SECTION_TITLES } from "@constants";
import { RECIPES as DATA } from "data-raw";
import { RECIPES as DATA_GEN } from "data-ui";
import { SVG } from "resources";

const MAINS: IPageSection = {
  title: PAGE_SECTION_TITLES.MAINS,
  SvgIcon: SVG.CLOCHE,
  data: { recipes: DATA.MAINS }
};

const SIDES: IPageSection = {
  title: PAGE_SECTION_TITLES.SIDES,
  SvgIcon: SVG.BOWL,
  data: { recipes: DATA.SIDES }
};

const SAUCES: IPageSection = {
  title: PAGE_SECTION_TITLES.SAUCES,
  SvgIcon: SVG.SAUCE,
  data: { recipes: DATA.SAUCES }
};

const SWEETS: IPageSection = {
  title: PAGE_SECTION_TITLES.SWEETS,
  SvgIcon: SVG.CAKE,
  data: { recipes: DATA.SWEETS }
};

const PHOTOS: IPageSection = {
  title: PAGE_SECTION_TITLES.PHOTOS,
  SvgIcon: SVG.CAMERA,
  data: { photoGrid: { photos: DATA_GEN.PHOTOS } }
};

const COMING_SOON: IPageSection = {
  title: PAGE_SECTION_TITLES.COMING_SOON,
  SvgIcon: SVG.NOTEPAD,
  data: { miniCards: DATA_GEN.COMING_SOON }
};

export const RECIPES: IPageSection[] = [
  MAINS,
  SIDES,
  SAUCES,
  SWEETS,
  PHOTOS,
  COMING_SOON
];
