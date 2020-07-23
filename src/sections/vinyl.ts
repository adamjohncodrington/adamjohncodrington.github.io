import { PAGE_SECTION_TITLES } from "@constants";
import { VINYL as FACTORY } from "factories";
import { SVG } from "resources";

const ARTISTS: IPageSection = {
  title: PAGE_SECTION_TITLES.ARTISTS,
  data: { countedListItems: FACTORY.ARTISTS },
  count: FACTORY.ARTISTS.length,
  SvgIcon: SVG.ARTIST
};

const COLLECTION: IPageSection = {
  title: PAGE_SECTION_TITLES.COLLECTION,
  data: { vinyls: FACTORY.COLLECTION },
  count: FACTORY.COLLECTION.length,
  SvgIcon: SVG.BRIEFCASE
};

const SIGNED: IPageSection = {
  title: PAGE_SECTION_TITLES.SIGNED,
  data: { vinyls: FACTORY.SIGNED },
  count: FACTORY.SIGNED.length,
  SvgIcon: SVG.PEN
};

const WISH_LIST: IPageSection = {
  title: PAGE_SECTION_TITLES.WISH_LIST,
  SvgIcon: SVG.STARS,
  data: { vinyls: FACTORY.WISH_LIST },
  count: FACTORY.WISH_LIST.length
};

const YEARS: Array<IPageSection> = FACTORY.YEARS.map(
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

export const VINYL: Array<IPageSection> = [
  ARTISTS,
  COLLECTION,
  SIGNED,
  WISH_LIST,
  ...YEARS
];
