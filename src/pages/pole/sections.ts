import { PAGE_SECTION } from "@constants";
import { SVG } from "resources";
import { SORT_POLE_SECTIONS_ALPHABETICALLY } from "config";

import { FACTORY } from "./factory";

const SECTION_INSTRUCTORS: IPageSection = {
  SvgIcon: SVG.PEOPLE,
  title: PAGE_SECTION.TITLES.INSTRUCTORS,
  data: { countedListItems: FACTORY.INSTRUCTORS }
};

const SECTION_STUDIOS: IPageSection = {
  SvgIcon: SVG.MAP_PIN,
  title: PAGE_SECTION.TITLES.STUDIOS,
  data: { countedListItems: FACTORY.STUDIOS }
};

const SECTION_CONTEMPORARY: IPageSection = {
  title: PAGE_SECTION.TITLES.CONTEMPORARY,
  SvgIcon: SVG.DANCER_MALE_2,
  data: { comingSoon: true }
};

const SECTION_EXOTIC: IPageSection = {
  SvgIcon: SVG.HEELS,
  title: PAGE_SECTION.TITLES.EXOTIC,
  data: { comingSoon: true }
};

const SECTION_NON_POLE: IPageSection = {
  SvgIcon: SVG.HOME,
  title: PAGE_SECTION.TITLES.NON_POLE,
  data: { comingSoon: true }
};

const SECTION_IMPROVISATION: IPageSection = {
  SvgIcon: SVG.DANCER_MALE_1,
  title: PAGE_SECTION.TITLES.IMPROVISATION,
  data: { comingSoon: true }
};

const SECTION_PHOTOS: IPageSection = {
  SvgIcon: SVG.CAMERA,
  title: PAGE_SECTION.TITLES.PHOTOS,
  data: { comingSoon: true }
};

const SECTION_TRICKS_COMBOS: IPageSection = {
  SvgIcon: SVG.POLE_VAULT,
  title: PAGE_SECTION.TITLES.TRICKS_COMBOS,
  data: { comingSoon: true }
};

const SECTION_SHOWCASE: IPageSection = {
  SvgIcon: SVG.STARS,
  title: PAGE_SECTION.TITLES.SHOWCASE,
  data: { comingSoon: true }
};

const sections: Array<IPageSection> = [
  SECTION_TRICKS_COMBOS,
  SECTION_CONTEMPORARY,
  SECTION_EXOTIC,
  SECTION_IMPROVISATION,
  SECTION_PHOTOS,
  SECTION_SHOWCASE,
  SECTION_STUDIOS,
  SECTION_INSTRUCTORS,
  SECTION_NON_POLE
];

export const SECTIONS: Array<IPageSection> = SORT_POLE_SECTIONS_ALPHABETICALLY
  ? sections.sort((a: IPageSection, b: IPageSection): number =>
      a.title > b.title ? 1 : -1
    )
  : sections;
