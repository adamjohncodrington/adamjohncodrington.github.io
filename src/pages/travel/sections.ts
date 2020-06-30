import { PAGE_SECTION_TITLES } from "@constants";
import { SVG_ICON_STRINGS } from "resources";
import { isInFuture } from "@utils";

import { DATA } from "./data";
import { FACTORY } from "./factory";

const SECTION_BUCKET_LIST_TRAVEL: IPageSection = {
  title: PAGE_SECTION_TITLES.BUCKET_LIST,
  icon: SVG_ICON_STRINGS.STARS,
  data: { countedListItems: FACTORY.BUCKET_LIST }
};

const SECTION_CITIES: IPageSection = {
  title: "Cities",
  icon: SVG_ICON_STRINGS.CITY,
  data: { countedListItems: FACTORY.CITIES },
  count: FACTORY.CITIES.length,
  starCount: FACTORY.CITIES.filter(city => city.star).length
};

const SECTION_COUNTRIES: IPageSection = {
  title: "Countries",
  icon: SVG_ICON_STRINGS.FLAG,
  data: { countedListItems: FACTORY.COUNTRIES },
  count: FACTORY.COUNTRIES.length
};

const SECTION_FRIENDS_TRAVEL: IPageSection = {
  title: PAGE_SECTION_TITLES.FRIENDS,
  icon: SVG_ICON_STRINGS.PEOPLE,
  data: { countedListItems: FACTORY.FRIENDS }
};

const SECTION_HIGHLIGHTS: IPageSection = {
  title: "Highlights",
  icon: SVG_ICON_STRINGS.MAP_PIN,
  data: { countedListItems: FACTORY.HIGHLIGHTS }
};

const SECTION_ISLANDS: IPageSection = {
  title: "Islands",
  icon: SVG_ICON_STRINGS.PALM_TREE,
  data: { countedListItems: FACTORY.ISLANDS }
};

const SECTION_THEME_PARKS: IPageSection = {
  title: "Theme Parks",
  icon: SVG_ICON_STRINGS.ROLLER_COASTER,
  data: { countedListItems: FACTORY.THEME_PARKS },
  count: FACTORY.THEME_PARKS.length,
  hide: true
};

const SECTION_UP_NEXT_TRAVEL: IPageSection = {
  title: PAGE_SECTION_TITLES.UP_NEXT,
  icon: SVG_ICON_STRINGS.NOTEPAD,
  data: { travelCards: FACTORY.UP_NEXT }
};

const SECTIONS_YEARS: Array<IPageSection> = DATA.SPLIT_BY_YEAR.map(
  (year: Array<ITravelCard>): IPageSection => ({
    title: year[0].dates[0].getFullYear().toString(),
    count: year.length,
    data: {
      travelCards: year.filter(
        ({ dates }: ITravelCard) => !isInFuture(dates[0])
      )
    }
  })
);

export const sections: Array<IPageSection> = [
  SECTION_BUCKET_LIST_TRAVEL,
  SECTION_CITIES,
  SECTION_COUNTRIES,
  SECTION_FRIENDS_TRAVEL,
  SECTION_HIGHLIGHTS,
  SECTION_ISLANDS,
  SECTION_THEME_PARKS,
  SECTION_UP_NEXT_TRAVEL,
  ...SECTIONS_YEARS
].filter((pageSection: IPageSection) => !pageSection.hide);
