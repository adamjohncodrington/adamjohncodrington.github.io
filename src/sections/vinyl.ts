import { PAGE_SECTION_TITLES } from "@constants";
import { VINYL as DATA } from "data-ui";
import { SVG } from "resources";

const MUSICIANS: PageSectionProps = {
  title: PAGE_SECTION_TITLES.MUSICIANS,
  data: { miniCards: DATA.MUSICIANS },
  count: DATA.MUSICIANS.length,
  SvgIcon: SVG.ARTIST
};

const COLORS: PageSectionProps = {
  title: PAGE_SECTION_TITLES.COLORED,
  data: { cards: DATA.COLORED },
  SvgIcon: SVG.PALETTE,
  shuffle: true
};

const ARTWORK: PageSectionProps = {
  title: PAGE_SECTION_TITLES.ARTWORK,
  data: { photoGrid: { photos: DATA.ARTWORK, columnCount: 3 } },
  SvgIcon: SVG.CAMERA
};

const GIFTS: PageSectionProps = {
  title: PAGE_SECTION_TITLES.GIFTS,
  SvgIcon: SVG.GIFT,
  shuffle: true,
  data: { cards: DATA.GIFTS }
};

const COLLECTION: PageSectionProps = {
  title: PAGE_SECTION_TITLES.COLLECTION,
  data: { cards: DATA.COLLECTION },
  count: DATA.COLLECTION.length,
  SvgIcon: SVG.BRIEFCASE,
  shuffle: true
};

const ORDERED: PageSectionProps = {
  title: PAGE_SECTION_TITLES.ORDERED,
  data: { cards: DATA.ORDERED },
  count: DATA.ORDERED.length,
  SvgIcon: SVG.DELIVERY_VAN,
  shuffle: true
};

const COST: PageSectionProps = {
  title: PAGE_SECTION_TITLES.COST,
  SvgIcon: SVG.MONEY,
  data: { costs: DATA.COSTS }
};

const RETAILERS: PageSectionProps = {
  title: PAGE_SECTION_TITLES.RETAILERS,
  SvgIcon: SVG.SHOPPING_BAG,
  data: { miniCards: DATA.RETAILERS }
};

const SIGNED: PageSectionProps = {
  title: PAGE_SECTION_TITLES.SIGNED,
  data: { cards: DATA.SIGNED },
  count: DATA.SIGNED.length,
  shuffle: true,
  SvgIcon: SVG.PEN_WRITING
};

const WISH_LIST: PageSectionProps = {
  title: PAGE_SECTION_TITLES.WISH_LIST,
  SvgIcon: SVG.STARS,
  data: { cards: DATA.WISH_LIST },
  shuffle: true,
  count: DATA.WISH_LIST.length
};

const YEARS: PageSectionProps[] = DATA.YEARS.map(
  (year: CardProps[]): PageSectionProps => ({
    title: year[0].year.toString(),
    data: { cards: year },
    count: year.length
  })
);

export const VINYL: PageSectionProps[] = [
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
