import { PAGE_SECTION } from "@constants";
import {
  SvgFriends,
  SvgHeels,
  SvgBallet,
  SvgDancerMale,
  SvgCamera,
  SvgStars,
  SvgPoleVault,
  SvgHome
} from "resources";

import { FACTORY } from "./factory";

const SECTION_INSTRUCTORS: IPageSection = {
  SvgIcon: SvgFriends,
  title: PAGE_SECTION.TITLES.INSTRUCTORS,
  data: { countedListItems: FACTORY.INSTRUCTORS }
};

const SECTION_CONTEMPORARY: IPageSection = {
  title: PAGE_SECTION.TITLES.CONTEMPORARY,
  SvgIcon: SvgBallet,
  data: { comingSoon: true }
};

const SECTION_EXOTIC: IPageSection = {
  SvgIcon: SvgHeels,
  title: PAGE_SECTION.TITLES.EXOTIC,
  data: { comingSoon: true }
};

const SECTION_NON_POLE: IPageSection = {
  SvgIcon: SvgHome,
  title: PAGE_SECTION.TITLES.NON_POLE,
  data: { comingSoon: true }
};

const SECTION_IMPROVISATION: IPageSection = {
  SvgIcon: SvgDancerMale,
  title: PAGE_SECTION.TITLES.IMPROVISATION,
  data: { comingSoon: true }
};

const SECTION_PHOTOS: IPageSection = {
  SvgIcon: SvgCamera,
  title: PAGE_SECTION.TITLES.PHOTOS,
  data: { comingSoon: true }
};

const SECTION_TRICKS_COMBOS: IPageSection = {
  SvgIcon: SvgPoleVault,
  title: PAGE_SECTION.TITLES.TRICKS_COMBOS,
  data: { comingSoon: true }
};

const SECTION_SHOWCASE: IPageSection = {
  SvgIcon: SvgStars,
  title: PAGE_SECTION.TITLES.SHOWCASE,
  data: { comingSoon: true }
};

export const sections: Array<IPageSection> = [
  SECTION_EXOTIC,
  SECTION_IMPROVISATION,
  SECTION_INSTRUCTORS,
  SECTION_PHOTOS,
  SECTION_CONTEMPORARY,
  SECTION_SHOWCASE,
  SECTION_TRICKS_COMBOS,
  SECTION_NON_POLE
].sort((a, b) => (a.title > b.title ? 1 : -1));
