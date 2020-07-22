import { PAGE_SECTION_TITLES } from "@constants";
import { POLE as FACTORY } from "factories";
import { SVG } from "resources";

const INSTRUCTORS: IPageSection = {
  SvgIcon: SVG.PEOPLE,
  title: PAGE_SECTION_TITLES.INSTRUCTORS,
  data: { countedListItems: FACTORY.INSTRUCTORS }
};

const STUDIOS: IPageSection = {
  SvgIcon: SVG.MAP_PIN,
  title: PAGE_SECTION_TITLES.STUDIOS,
  data: { countedListItems: FACTORY.STUDIOS }
};

const CONTEMPORARY: IPageSection = {
  title: PAGE_SECTION_TITLES.CONTEMPORARY,
  SvgIcon: SVG.DANCER_MALE_2,
  data: { comingSoon: true }
};

const EXOTIC: IPageSection = {
  SvgIcon: SVG.HEELS,
  title: PAGE_SECTION_TITLES.EXOTIC,
  data: { comingSoon: true }
};

const NON_POLE: IPageSection = {
  SvgIcon: SVG.HOME,
  title: PAGE_SECTION_TITLES.NON_POLE,
  data: { comingSoon: true }
};

const IMPROVISATION: IPageSection = {
  SvgIcon: SVG.DANCER_MALE_1,
  title: PAGE_SECTION_TITLES.IMPROVISATION,
  data: { comingSoon: true }
};

const PHOTOS: IPageSection = {
  SvgIcon: SVG.CAMERA,
  title: PAGE_SECTION_TITLES.PHOTOS,
  data: { comingSoon: true }
};

const TRICKS_COMBOS: IPageSection = {
  SvgIcon: SVG.POLE_VAULT,
  title: PAGE_SECTION_TITLES.TRICKS_COMBOS,
  data: { comingSoon: true }
};

const SHOWCASE: IPageSection = {
  SvgIcon: SVG.STARS,
  title: PAGE_SECTION_TITLES.SHOWCASE,
  data: { comingSoon: true }
};

export const POLE: Array<IPageSection> = [
  TRICKS_COMBOS,
  CONTEMPORARY,
  EXOTIC,
  IMPROVISATION,
  PHOTOS,
  SHOWCASE,
  STUDIOS,
  INSTRUCTORS,
  NON_POLE
].sort((a: IPageSection, b: IPageSection): number =>
  a.title > b.title ? 1 : -1
);
