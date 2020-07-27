import { PAGE_SECTION_TITLES } from "@constants";
import { POLE as DATA } from "data-gen";
import { SVG } from "resources";

const INSTRUCTORS: IPageSection = {
  SvgIcon: SVG.PEOPLE,
  title: PAGE_SECTION_TITLES.INSTRUCTORS,
  data: { miniCards: DATA.INSTRUCTORS }
};

const STUDIOS: IPageSection = {
  SvgIcon: SVG.MAP_PIN,
  title: PAGE_SECTION_TITLES.STUDIOS,
  data: { miniCards: DATA.STUDIOS }
};

const CONTEMPORARY: IPageSection = {
  title: PAGE_SECTION_TITLES.CONTEMPORARY,
  SvgIcon: SVG.DANCER_MALE_2,
  data: { videoCards: DATA.CONTEMPORARY }
};

const EXOTIC: IPageSection = {
  SvgIcon: SVG.HEELS,
  title: PAGE_SECTION_TITLES.EXOTIC,
  data: { videoCards: DATA.EXOTIC }
};

const NON_POLE: IPageSection = {
  SvgIcon: SVG.HOME,
  title: PAGE_SECTION_TITLES.NON_POLE,
  data: { comingSoon: true }
};

const SONGS: IPageSection = {
  SvgIcon: SVG.MUSIC,
  title: PAGE_SECTION_TITLES.SONGS,
  data: { comingSoon: true }
};

const IMPROV: IPageSection = {
  SvgIcon: SVG.DANCER_MALE_1,
  title: PAGE_SECTION_TITLES.IMPROV,
  data: { videoCards: DATA.IMPROV }
};

const PHOTOS: IPageSection = {
  SvgIcon: SVG.CAMERA,
  title: PAGE_SECTION_TITLES.PHOTOS,
  data: { comingSoon: true }
};

const TRICKS: IPageSection = {
  SvgIcon: SVG.POLE_VAULT,
  title: PAGE_SECTION_TITLES.TRICKS,
  data: { comingSoon: true }
};

const SHOWCASE: IPageSection = {
  SvgIcon: SVG.STARS,
  title: PAGE_SECTION_TITLES.SHOWCASE,
  data: { comingSoon: true }
};

export const POLE: Array<IPageSection> = [
  TRICKS,
  CONTEMPORARY,
  EXOTIC,
  IMPROV,
  PHOTOS,
  SHOWCASE,
  SONGS,
  STUDIOS,
  INSTRUCTORS,
  NON_POLE
].sort((a: IPageSection, b: IPageSection): number =>
  a.title > b.title ? 1 : -1
);
