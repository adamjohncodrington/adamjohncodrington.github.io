import { PAGE_SECTION_TITLES } from "@constants";
import { RECIPES as DATA } from "data-raw";
import { RECIPES as DATA_GEN } from "data-ui";
import { SVG } from "resources";

const MAINS: PageSectionProps = {
  title: PAGE_SECTION_TITLES.MAINS,
  SvgIcon: SVG.CLOCHE,
  data: { recipes: DATA.MAINS }
};

const SIDES: PageSectionProps = {
  title: PAGE_SECTION_TITLES.SIDES,
  SvgIcon: SVG.BOWL,
  data: { recipes: DATA.SIDES }
};

const SAUCES: PageSectionProps = {
  title: PAGE_SECTION_TITLES.SAUCES,
  SvgIcon: SVG.SAUCE,
  data: { recipes: DATA.SAUCES }
};

const SWEETS: PageSectionProps = {
  title: PAGE_SECTION_TITLES.SWEETS,
  SvgIcon: SVG.CAKE,
  data: { recipes: DATA.SWEETS }
};

const PHOTOS: PageSectionProps = {
  title: PAGE_SECTION_TITLES.PHOTOS,
  SvgIcon: SVG.CAMERA,
  data: { photoGrid: { photos: DATA_GEN.PHOTOS } }
};

const COMING_SOON: PageSectionProps = {
  title: PAGE_SECTION_TITLES.COMING_SOON,
  SvgIcon: SVG.NOTEPAD,
  data: { miniCards: DATA_GEN.COMING_SOON }
};

export const RECIPES: PageSectionProps[] = [
  MAINS,
  SIDES,
  SAUCES,
  SWEETS,
  PHOTOS,
  COMING_SOON
];
