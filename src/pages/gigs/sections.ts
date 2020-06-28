import { PAGE_SECTION_TITLES } from "@constants";
import { SVG_ICON_STRINGS } from "resources";

import { FACTORY } from "./factory";
import { DATA } from "./data";
import { isInFuture } from "@utils";

const SECTION_BUCKET_LIST: IPageSection = {
  title: PAGE_SECTION_TITLES.BUCKET_LIST,
  icon: SVG_ICON_STRINGS.STARS,
  data: { countedListItems: FACTORY.BUCKET_LIST }
};

const SECTION_FESTIVALS: IPageSection = {
  title: "Festivals",
  icon: SVG_ICON_STRINGS.PEACE_SIGN,
  data: { countedListItems: FACTORY.FESTIVALS }
};

const SECTION_ARTISTS: IPageSection = {
  title: "Artists",
  icon: SVG_ICON_STRINGS.ARTIST,
  data: { countedListItems: FACTORY.MUSICIANS },
  count: FACTORY.MUSICIANS.length
};

const SECTION_FRIENDS_GIGS: IPageSection = {
  title: PAGE_SECTION_TITLES.FRIENDS,
  icon: SVG_ICON_STRINGS.PEOPLE,
  data: { countedListItems: FACTORY.FRIENDS }
};

const SECTION_UP_NEXT_GIGS: IPageSection = {
  title: PAGE_SECTION_TITLES.UP_NEXT,
  icon: SVG_ICON_STRINGS.NOTEPAD,
  data: { gigCards: FACTORY.UP_NEXT },
  count: FACTORY.UP_NEXT.length
};

const SECTION_VENUES_GIGS: IPageSection = {
  title: "Venues",
  icon: SVG_ICON_STRINGS.STADIUM,
  data: { countedListItems: FACTORY.VENUES },
  count: FACTORY.VENUES.length
};

const SECTIONS_YEARS: Array<IPageSection> = DATA.SPLIT_BY_YEAR.map(
  (year: Array<IGigCard>): IPageSection => ({
    title: year[0].dates[0].getFullYear().toString(),
    count: year.length,
    data: { gigCards: year.filter((item: IGigCard) => !isInFuture(item.dates)) }
  })
);

export const sections: Array<IPageSection> = [
  SECTION_ARTISTS,
  SECTION_BUCKET_LIST,
  SECTION_FESTIVALS,
  SECTION_FRIENDS_GIGS,
  SECTION_UP_NEXT_GIGS,
  SECTION_VENUES_GIGS,
  ...SECTIONS_YEARS
];
