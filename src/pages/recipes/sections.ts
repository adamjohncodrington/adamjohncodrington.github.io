import { PAGE_SECTION } from "@constants";
import {
  SvgNotepad,
  SvgCloche,
  SvgBowl,
  SvgSauce,
  SvgCake,
  SvgCamera,
  PHOTOS_RECIPES_ARRAY
} from "resources";

import { DATA } from "./data";

const SECTION_MAINS: IPageSection = {
  title: PAGE_SECTION.TITLES.MAINS,
  SvgIcon: SvgCloche,
  data: { recipes: DATA.MAINS }
};

const SECTION_SIDES: IPageSection = {
  title: PAGE_SECTION.TITLES.SIDES,
  SvgIcon: SvgBowl,
  data: { recipes: DATA.SIDES }
};

const SECTION_SAUCES: IPageSection = {
  title: PAGE_SECTION.TITLES.SAUCES,
  SvgIcon: SvgSauce,
  data: { recipes: DATA.SAUCES }
};

const SECTION_SWEETS: IPageSection = {
  title: PAGE_SECTION.TITLES.SWEETS,
  SvgIcon: SvgCake,
  data: { recipes: DATA.SWEETS }
};

const SECTION_PHOTOS: IPageSection = {
  title: PAGE_SECTION.TITLES.PHOTOS,
  SvgIcon: SvgCamera,
  data: { photoGrid: { photos: PHOTOS_RECIPES_ARRAY, columnCount: 3 } }
};

const SECTION_COMING_SOON: IPageSection = {
  title: PAGE_SECTION.TITLES.COMING_SOON,
  SvgIcon: SvgNotepad,
  data: { countedListItems: DATA.COMING_SOON }
};

export const sections: Array<IPageSection> = [
  SECTION_MAINS,
  SECTION_SIDES,
  SECTION_SAUCES,
  SECTION_SWEETS,
  SECTION_PHOTOS,
  SECTION_COMING_SOON
];
