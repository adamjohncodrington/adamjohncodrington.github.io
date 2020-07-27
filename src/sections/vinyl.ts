import { PAGE_SECTION_TITLES } from "@constants";
import { VINYL as DATA } from "data-ui";
import { SVG } from "resources";

const MUSICIANS: IPageSection = {
  title: PAGE_SECTION_TITLES.MUSICIANS,
  data: { miniCards: DATA.MUSICIANS },
  count: DATA.MUSICIANS.length,
  SvgIcon: SVG.ARTIST
};

const COLLECTION: IPageSection = {
  title: PAGE_SECTION_TITLES.COLLECTION,
  data: { vinylCards: { vinyls: DATA.COLLECTION, shuffle: true } },
  count: DATA.COLLECTION.length,
  SvgIcon: SVG.BRIEFCASE
};

const SIGNED: IPageSection = {
  title: PAGE_SECTION_TITLES.SIGNED,
  data: { vinylCards: { vinyls: DATA.SIGNED, shuffle: true } },
  count: DATA.SIGNED.length,
  SvgIcon: SVG.PEN
};

const WISH_LIST: IPageSection = {
  title: PAGE_SECTION_TITLES.WISH_LIST,
  SvgIcon: SVG.STARS,
  data: { vinylCards: { vinyls: DATA.WISH_LIST, shuffle: true } },
  count: DATA.WISH_LIST.length
};

const YEARS: Array<IPageSection> = DATA.YEARS.map(
  (yearGroup: Array<IVinyl>): IPageSection => ({
    title: yearGroup[0].year.toString(),
    data: {
      vinylCards: {
        shuffle: false,
        vinyls: yearGroup.map(
          (vinyl: IVinyl): IVinylCard => ({
            ...vinyl,
            hideYear: true
          })
        )
      }
    },
    count: yearGroup.length
  })
);

export const VINYL: Array<IPageSection> = [
  MUSICIANS,
  COLLECTION,
  SIGNED,
  WISH_LIST,
  ...YEARS
];
