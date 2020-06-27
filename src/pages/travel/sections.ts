import { PAGE_SECTION_TITLES } from "@constants";
import { SVG_ICON_STRINGS } from "resources";
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
    icon: SVG_ICON_STRINGS.STARS,
    data: { countedListItems: BUCKET_LIST }
  },
  {
    title: "Cities",
    icon: SVG_ICON_STRINGS.CITY,
    data: { countedListItems: CITIES },
    count: CITIES.length,
    starCount: CITIES.filter(city => city.star).length
  },
  {
    title: "Countries",
    icon: SVG_ICON_STRINGS.FLAG,
    data: { countedListItems: COUNTRIES },
    count: COUNTRIES.length
  },
  {
    title: PAGE_SECTION_TITLES.FRIENDS,
    icon: SVG_ICON_STRINGS.PEOPLE,
    data: { countedListItems: FRIENDS }
  },
  {
    title: "Highlights",
    icon: SVG_ICON_STRINGS.MAP_PIN,
    data: { countedListItems: HIGHLIGHTS }
  },
  {
    title: "Islands",
    icon: SVG_ICON_STRINGS.PALM_TREE,
    data: { countedListItems: ISLANDS }
  },
  {
    title: "Theme Parks",
    icon: SVG_ICON_STRINGS.ROLLER_COASTER,
    data: { countedListItems: THEME_PARKS },
    count: THEME_PARKS.length,
    hide: true
  },
  {
    title: PAGE_SECTION_TITLES.UP_NEXT,
    icon: SVG_ICON_STRINGS.NOTEPAD,
    data: { travelCards: UP_NEXT }
  }
]
  .filter((pageSection: IPageSection) => !pageSection.hide)
  .sort((a: IPageSection, b: IPageSection) => (a.title > b.title ? 1 : -1));

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
