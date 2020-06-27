import { PAGE_SECTION_TITLES } from "@constants";
import { SVG_ICON_STRINGS } from "resources";

import { FACTORY } from "./factory";
import { DATA } from "./data";
import { isInFuture } from "@utils";

const { BUCKET_LIST, FESTIVALS, FRIENDS, MUSICIANS, UP_NEXT, VENUES } = FACTORY;

const SECTIONS_STATS: Array<IPageSection> = [
  {
    title: PAGE_SECTION_TITLES.BUCKET_LIST,
    icon: SVG_ICON_STRINGS.STARS,
    data: { countedListItems: BUCKET_LIST }
  },
  {
    title: "Festivals",
    icon: SVG_ICON_STRINGS.PEACE_SIGN,
    data: { countedListItems: FESTIVALS }
  },
  {
    title: "Artists",
    icon: SVG_ICON_STRINGS.ARTIST,
    data: { countedListItems: MUSICIANS },
    count: MUSICIANS.length
  },
  {
    title: PAGE_SECTION_TITLES.FRIENDS,
    icon: SVG_ICON_STRINGS.PEOPLE,
    data: { countedListItems: FRIENDS }
  },
  {
    title: PAGE_SECTION_TITLES.UP_NEXT,
    icon: SVG_ICON_STRINGS.NOTEPAD,
    data: { gigCards: UP_NEXT },
    count: UP_NEXT.length
  },
  {
    title: "Venues",
    icon: SVG_ICON_STRINGS.STADIUM,
    data: { countedListItems: VENUES },
    count: VENUES.length
  }
].sort((a: IPageSection, b: IPageSection) => (a.title > b.title ? 1 : -1));

const SECTIONS_YEARS: Array<IPageSection> = DATA.SPLIT_BY_YEAR.map(
  (year: Array<IGigCard>) => ({
    title: year[0].dates[0].getFullYear().toString(),
    count: year.length,
    data: {
      gigCards: year.filter((item: IGigCard) => !isInFuture(item.dates))
    }
  })
);

export const sections: Array<IPageSection> = [
  ...SECTIONS_STATS,
  ...SECTIONS_YEARS
];
