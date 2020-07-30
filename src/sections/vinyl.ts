import { PAGE_SECTION_TITLES } from "@constants";
import { VINYL as DATA } from "data-ui";
import { SVG } from "resources";

const MUSICIANS: IPageSection = {
  title: PAGE_SECTION_TITLES.MUSICIANS,
  panelData: { miniCards: DATA.MUSICIANS },
  count: DATA.MUSICIANS.length,
  SvgIcon: SVG.ARTIST
};

const COLORS: IPageSection = {
  title: PAGE_SECTION_TITLES.COLORS,
  panelData: { cards: DATA.COLORS },
  count: DATA.COLORS.length,
  SvgIcon: SVG.PALETTE,
  shuffle: true
};

const GIFTS: IPageSection = {
  title: PAGE_SECTION_TITLES.GIFTS,
  SvgIcon: SVG.GIFT,
  shuffle: true,
  panelData: { cards: DATA.GIFTS }
};

const COLLECTION: IPageSection = {
  title: PAGE_SECTION_TITLES.COLLECTION,
  panelData: { cards: DATA.COLLECTION },
  count: DATA.COLLECTION.length,
  SvgIcon: SVG.BRIEFCASE,
  shuffle: true
};

const COST: IPageSection = {
  title: PAGE_SECTION_TITLES.COST,
  SvgIcon: SVG.MONEY,
  panelData: { headline: DATA.COST }
};

const RETAILERS: IPageSection = {
  title: PAGE_SECTION_TITLES.RETAILERS,
  SvgIcon: SVG.SHOPPING_BAG,
  panelData: { miniCards: DATA.RETAILERS }
};

const SIGNED: IPageSection = {
  title: PAGE_SECTION_TITLES.SIGNED,
  panelData: { cards: DATA.SIGNED },
  count: DATA.SIGNED.length,
  shuffle: true,
  SvgIcon: SVG.PEN_WRITING
};

const WISH_LIST: IPageSection = {
  title: PAGE_SECTION_TITLES.WISH_LIST,
  SvgIcon: SVG.STARS,
  panelData: { cards: DATA.WISH_LIST },
  shuffle: true,
  count: DATA.WISH_LIST.length
};

const YEARS: Array<IPageSection> = DATA.YEARS.map(
  (year: Array<ICard>): IPageSection => ({
    title: year[0].year
      ? year[0].year.toString()
      : "PAGE SECTION TITLE MISSING",
    panelData: { cards: year },
    count: year.length
  })
);

export const VINYL: Array<IPageSection> = [
  MUSICIANS,
  COLORS,
  COLLECTION,
  COST,
  GIFTS,
  RETAILERS,
  SIGNED,
  WISH_LIST,
  ...YEARS
];
