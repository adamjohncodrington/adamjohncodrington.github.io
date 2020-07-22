import { PAGE_SECTION_TITLES } from "@constants";
import { VINYL as FACTORY } from "factories";
import { SVG } from "resources";

const SECTION_ARTISTS: IPageSection = {
  title: PAGE_SECTION_TITLES.ARTISTS,
  data: { countedListItems: FACTORY.ARTISTS },
  count: FACTORY.ARTISTS.length,
  SvgIcon: SVG.ARTIST
};

const SECTION_COLLECTION: IPageSection = {
  title: PAGE_SECTION_TITLES.COLLECTION,
  data: { vinyls: FACTORY.COLLECTION },
  count: FACTORY.COLLECTION.length,
  SvgIcon: SVG.BRIEFCASE
};

const SECTION_SIGNED: IPageSection = {
  title: PAGE_SECTION_TITLES.SIGNED,
  data: { vinyls: FACTORY.SIGNED },
  count: FACTORY.SIGNED.length,
  SvgIcon: SVG.PEN
};

const SECTION_WISHLIST: IPageSection = {
  title: PAGE_SECTION_TITLES.WISH_LIST,
  SvgIcon: SVG.STARS,
  data: { vinyls: FACTORY.WISH_LIST },
  count: FACTORY.WISH_LIST.length
};

const SECTIONS_YEARS: Array<IPageSection> = FACTORY.YEARS.map(
  (yearGroup: Array<IVinyl>): IPageSection => ({
    title: yearGroup[0].year.toString(),
    data: {
      vinyls: yearGroup.map(
        (vinyl: IVinyl): IVinylCard => ({ ...vinyl, hideYear: true })
      )
    },
    count: yearGroup.length
  })
);

// const SECTION_PHOTOS: IPageSection = {
//   title: PAGE_SECTION_TITLES.PHOTOS,
//   SvgIcon: SVG.CAMERA,
//   data: { photoGrid: { photos: Object.values(PHOTOS.ALBUMS), columnCount: 3 } }
// };

export const VINYL: Array<IPageSection> = [
  SECTION_ARTISTS,
  SECTION_COLLECTION,
  // SECTION_PHOTOS,
  SECTION_SIGNED,
  SECTION_WISHLIST,
  ...SECTIONS_YEARS
];
