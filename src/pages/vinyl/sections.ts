import { FACTORY } from "./factory";
import { SvgBriefcase, SvgStars, SvgArtist } from "resources";
import { PAGE_SECTION } from "@constants";

const SECTION_ARTISTS: IPageSection = {
  title: PAGE_SECTION.TITLES.ARTISTS,
  data: { comingSoon: true },
  SvgIcon: SvgArtist
};

const SECTION_COLLECTION: IPageSection = {
  title: PAGE_SECTION.TITLES.COLLECTION,
  data: { vinyls: FACTORY.COLLECTION },
  count: FACTORY.COLLECTION.length,
  SvgIcon: SvgBriefcase,
  autoExpandIf2Columns: true,
  staticIf2Columns: true
};

const SECTION_WISHLIST: IPageSection = {
  title: PAGE_SECTION.TITLES.WISH_LIST,
  SvgIcon: SvgStars,
  data: { vinyls: FACTORY.WISH_LIST },
  count: FACTORY.WISH_LIST.length,
  autoExpandIf2Columns: true,
  staticIf2Columns: true
};

export const sections: Array<IPageSection> = [
  SECTION_ARTISTS,
  SECTION_COLLECTION,
  SECTION_WISHLIST
];
