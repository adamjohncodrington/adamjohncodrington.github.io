import { SvgNotepad, SvgCloche, SvgBowl, SvgSauce, SvgCake } from "resources";

import { DATA } from "./data";

const SECTION_MAINS: IPageSection = {
  title: "Mains",
  SvgIcon: SvgCloche,
  data: { recipes: DATA.MAINS }
};

const SECTION_SIDES: IPageSection = {
  title: "Sides",
  SvgIcon: SvgBowl,
  data: { recipes: DATA.SIDES }
};

const SECTION_SAUCES: IPageSection = {
  title: "Sauces",
  SvgIcon: SvgSauce,
  data: { recipes: DATA.SAUCES }
};

const SECTION_SWEETS: IPageSection = {
  title: "Sweets",
  SvgIcon: SvgCake,
  data: { recipes: DATA.SWEETS }
};

const SECTION_COMING_SOON: IPageSection = {
  title: "Coming Soon",
  SvgIcon: SvgNotepad,
  data: { countedListItems: DATA.COMING_SOON }
};

export const sections: Array<IPageSection> = [
  SECTION_MAINS,
  SECTION_SIDES,
  SECTION_SAUCES,
  SECTION_SWEETS,
  SECTION_COMING_SOON
];
