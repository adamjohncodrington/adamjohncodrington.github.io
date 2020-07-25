import { PAGE_SECTION_TITLES } from "@constants";
import { VINYL as FACTORY } from "factories";
import { SVG } from "resources";

const MUSICIANS: IPageSection = {
  title: PAGE_SECTION_TITLES.MUSICIANS,
  data: { basicListItems: FACTORY.MUSICIANS },
  count: FACTORY.MUSICIANS.length,
  SvgIcon: SVG.ARTIST
};

const COLLECTION: IPageSection = {
  title: PAGE_SECTION_TITLES.COLLECTION,
  data: { vinylCards: { vinyls: FACTORY.COLLECTION, shuffle: true } },
  count: FACTORY.COLLECTION.length,
  SvgIcon: SVG.BRIEFCASE
};

const SIGNED: IPageSection = {
  title: PAGE_SECTION_TITLES.SIGNED,
  data: { vinylCards: { vinyls: FACTORY.SIGNED, shuffle: true } },
  count: FACTORY.SIGNED.length,
  SvgIcon: SVG.PEN
};

const WISH_LIST: IPageSection = {
  title: PAGE_SECTION_TITLES.WISH_LIST,
  SvgIcon: SVG.STARS,
  data: { vinylCards: { vinyls: FACTORY.WISH_LIST, shuffle: true } },
  count: FACTORY.WISH_LIST.length
};

const YEARS: Array<IPageSection> = FACTORY.YEARS.map(
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
