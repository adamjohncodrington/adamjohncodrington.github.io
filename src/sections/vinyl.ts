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
  SvgIcon: SVG.PALETTE
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
  hide: true,
  data: { cards: DATA.GIFTS }
};

const SECOND_HAND: PageSectionProps = {
  title: PAGE_SECTION_TITLES.SECOND_HAND,
  shuffle: true,
  hide: true,
  data: { cards: DATA.SECOND_HAND }
};

const COLLECTION: PageSectionProps = {
  title: PAGE_SECTION_TITLES.COLLECTION,
  data: { cards: DATA.COLLECTION },
  count: DATA.COLLECTION.length,
  SvgIcon: SVG.BRIEFCASE,
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
  RETAILERS,
  SIGNED,
  SECOND_HAND,
  ...YEARS
];
