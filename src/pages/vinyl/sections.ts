import { PAGE_SECTION } from "@constants";
import { SVG } from "resources";

import { FACTORY } from "./factory";

const SECTION_ARTISTS: IPageSection = {
  title: PAGE_SECTION.TITLES.ARTISTS,
  data: { countedListItems: FACTORY.ARTISTS },
  count: FACTORY.ARTISTS.length,
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
  data: { vinyls: FACTORY.SIGNED },
  count: FACTORY.SIGNED.length,
  SvgIcon: SVG.PEN
};

const SECTION_WISHLIST: IPageSection = {
  title: PAGE_SECTION.TITLES.WISH_LIST,
  SvgIcon: SVG.STARS,
  data: { vinyls: FACTORY.WISH_LIST },
  count: FACTORY.WISH_LIST.length
};

// const SECTION_PHOTOS: IPageSection = {
//   title: PAGE_SECTION.TITLES.PHOTOS,
//   SvgIcon: SVG.CAMERA,
//   data: { photoGrid: { photos: Object.values(PHOTOS.ALBUMS), columnCount: 3 } }
// };

export const sections: Array<IPageSection> = [
  SECTION_ARTISTS,
  SECTION_COLLECTION,
  // SECTION_PHOTOS,
  SECTION_SIGNED,
  SECTION_WISHLIST
];
