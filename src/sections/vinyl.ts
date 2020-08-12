import { PAGE_SECTION_TITLES } from "@constants";
import { VINYL as DATA } from "data-ui";
import { SVG } from "resources";

const MUSICIANS: IPageSection = {
  title: PAGE_SECTION_TITLES.MUSICIANS,
  data: { miniCards: DATA.MUSICIANS },
  count: DATA.MUSICIANS.length,
  SvgIcon: SVG.ARTIST
};

const COLORS: IPageSection = {
  title: PAGE_SECTION_TITLES.COLORED,
  data: { cards: DATA.COLORED },
  SvgIcon: SVG.PALETTE,
  shuffle: true
};

const ARTWORK: IPageSection = {
  title: PAGE_SECTION_TITLES.ARTWORK,
  data: { photoGrid: { photos: DATA.ARTWORK } },
  SvgIcon: SVG.CAMERA
};

const GIFTS: IPageSection = {
  title: PAGE_SECTION_TITLES.GIFTS,
  SvgIcon: SVG.GIFT,
  shuffle: true,
  data: { cards: DATA.GIFTS }
};

const COLLECTION: IPageSection = {
  title: PAGE_SECTION_TITLES.COLLECTION,
  data: { cards: DATA.COLLECTION },
  count: DATA.COLLECTION.length,
  SvgIcon: SVG.BRIEFCASE,
  shuffle: true
};

const ORDERED: IPageSection = {
  title: PAGE_SECTION_TITLES.ORDERED,
  data: { cards: DATA.ORDERED },
  count: DATA.ORDERED.length,
  SvgIcon: SVG.DELIVERY_VAN,
  shuffle: true
};

const COST: IPageSection = {
  title: PAGE_SECTION_TITLES.COST,
  SvgIcon: SVG.MONEY,
  data: { costs: DATA.COSTS }
};

const RETAILERS: IPageSection = {
  title: PAGE_SECTION_TITLES.RETAILERS,
  SvgIcon: SVG.SHOPPING_BAG,
  data: { miniCards: DATA.RETAILERS }
};

const SIGNED: IPageSection = {
  title: PAGE_SECTION_TITLES.SIGNED,
  data: { cards: DATA.SIGNED },
  count: DATA.SIGNED.length,
  shuffle: true,
  SvgIcon: SVG.PEN_WRITING
};

const WISH_LIST: IPageSection = {
  title: PAGE_SECTION_TITLES.WISH_LIST,
  SvgIcon: SVG.STARS,
  data: { cards: DATA.WISH_LIST },
  shuffle: true,
  count: DATA.WISH_LIST.length
};

const YEARS: IPageSection[] = DATA.YEARS.map(
  (year: Array<ICard>): IPageSection => ({
    title: year[0].year
      ? year[0].year.toString()
      : "PAGE SECTION TITLE MISSING",
    data: { cards: year },
    count: year.length
  })
);

export const VINYL: IPageSection[] = [
  MUSICIANS,
  ARTWORK,
  COLORS,
  COLLECTION,
  COST,
  GIFTS,
  ORDERED,
  RETAILERS,
  SIGNED,
  WISH_LIST,
  ...YEARS
];
