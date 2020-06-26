import { PAGE_SECTION_TITLES } from "@constants";
import { SVG_ICONS } from "resources";
import { isInFuture } from "@utils";

import { DATA } from "./data";
import { FACTORY } from "./factory";

const {
  BUCKET_LIST,
  CITIES,
  COUNTRIES,
  FRIENDS,
  HIGHLIGHTS,
  ISLANDS,
  THEME_PARKS,
  UP_NEXT
} = FACTORY;

const SECTIONS_STATS: Array<IPageSection> = [
  {
    title: PAGE_SECTION_TITLES.BUCKET_LIST,
    icon: SVG_ICONS.STARS,
    data: { countedItems: BUCKET_LIST }
  },
  {
    title: "Cities",
    icon: SVG_ICONS.CITY,
    data: { countedItems: CITIES },
    count: CITIES.length,
    starCount: CITIES.filter(city => city.star).length
  },
  {
    title: "Countries",
    icon: SVG_ICONS.FLAG,
    data: { countedItems: COUNTRIES },
    count: COUNTRIES.length
  },
  {
    title: PAGE_SECTION_TITLES.FRIENDS,
    icon: SVG_ICONS.PEOPLE,
    data: { countedItems: FRIENDS }
  },
  {
    title: "Highlights",
    icon: SVG_ICONS.MAP_PIN,
    data: { countedItems: HIGHLIGHTS }
  },
  {
    title: "Islands",
    icon: SVG_ICONS.PALM_TREE,
    data: { countedItems: ISLANDS }
  },
  {
    title: "Theme Parks",
    icon: SVG_ICONS.ROLLER_COASTER,
    data: { countedItems: THEME_PARKS },
    count: THEME_PARKS.length
  },
  {
    title: PAGE_SECTION_TITLES.UP_NEXT,
    icon: SVG_ICONS.NOTEPAD,
    data: { travelCards: UP_NEXT }
  }
].sort((a: IPageSection, b: IPageSection) => (a.title > b.title ? 1 : -1));

const SECTIONS_YEARS: Array<IPageSection> = DATA.SPLIT_BY_YEAR.map(
  (year: Array<ITravelCard>) => ({
    title: year[0].dates[0].getFullYear().toString(),
    count: year.length,
    data: {
      travelCards: year.filter((trip: ITravelCard) => !isInFuture(trip.dates))
    }
  })
);

export const sections: Array<IPageSection> = [
  ...SECTIONS_STATS,
  ...SECTIONS_YEARS
];
