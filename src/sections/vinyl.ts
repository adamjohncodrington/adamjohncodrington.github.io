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
  data: { vinyls: DATA.COLLECTION },
  count: DATA.COLLECTION.length,
  SvgIcon: SVG.BRIEFCASE,
  shuffle: true
};

const SIGNED: IPageSection = {
  title: PAGE_SECTION_TITLES.SIGNED,
  data: { vinyls: DATA.SIGNED },
  count: DATA.SIGNED.length,
  SvgIcon: SVG.PEN,
  shuffle: true
};

const WISH_LIST: IPageSection = {
  title: PAGE_SECTION_TITLES.WISH_LIST,
  SvgIcon: SVG.STARS,
  data: { vinyls: DATA.WISH_LIST },
  count: DATA.WISH_LIST.length,
  shuffle: true
};

const YEARS: Array<IPageSection> = DATA.YEARS.map(
  (yearGroup: Array<IVinyl>): IPageSection => ({
    title: yearGroup[0].year.toString(),
    data: { vinyls: yearGroup },
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
