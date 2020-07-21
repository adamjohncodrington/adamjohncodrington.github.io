import { FACTORY } from "./factory";
import { SVG } from "resources";
import { PAGE_SECTION } from "@constants";

const SECTION_ARTISTS: IPageSection = {
  title: PAGE_SECTION.TITLES.ARTISTS,
  data: { comingSoon: true },
  SvgIcon: SVG.ARTIST
};

const SECTION_COLLECTION: IPageSection = {
  title: PAGE_SECTION.TITLES.COLLECTION,
  data: { vinyls: FACTORY.COLLECTION },
  count: FACTORY.COLLECTION.length,
  SvgIcon: SVG.BRIEFCASE
};

const SECTION_SIGNED: IPageSection = {
  title: PAGE_SECTION.TITLES.SIGNED,
  data: { comingSoon: true },
  SvgIcon: SVG.PEN
};

const SECTION_WISHLIST: IPageSection = {
  title: PAGE_SECTION.TITLES.WISH_LIST,
  SvgIcon: SVG.STARS,
  data: { vinyls: FACTORY.WISH_LIST },
  count: FACTORY.WISH_LIST.length
};

export const sections: Array<IPageSection> = [
  SECTION_ARTISTS,
  SECTION_COLLECTION,
  SECTION_SIGNED,
  SECTION_WISHLIST
];
