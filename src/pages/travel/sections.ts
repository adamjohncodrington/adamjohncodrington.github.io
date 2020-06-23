import { EVENT_CARD_TYPES, PAGE_SECTION_TEMPLATES } from "@constants";
import { ICONS } from "resources";

import { mapYearsToEventCardPageSections } from "../factory";
import { DATA_SPLIT_BY_YEAR } from "./data";
import { FACTORY } from "./factory";

const SECTIONS_STATS: Array<IPageSection> = [
  {
    template: PAGE_SECTION_TEMPLATES.BUCKET_LIST,
    icon: ICONS.STARS,
    data: FACTORY.BUCKET_LIST
  },
  {
    template: PAGE_SECTION_TEMPLATES.CITY,
    icon: ICONS.CITY,
    showCount: true,
    data: FACTORY.CITIES
  },
  {
    template: PAGE_SECTION_TEMPLATES.COUNTRY,
    icon: ICONS.FLAG,
    data: FACTORY.COUNTRIES,
    showCount: true
  },
  {
    template: PAGE_SECTION_TEMPLATES.FRIEND,
    icon: ICONS.PEOPLE,
    data: FACTORY.FRIENDS
  },
  {
    template: PAGE_SECTION_TEMPLATES.HIGHLIGHT,
    icon: ICONS.MAP_PIN,
    data: FACTORY.HIGHLIGHTS
  },
  {
    template: PAGE_SECTION_TEMPLATES.ISLAND,
    showCount: true,
    icon: ICONS.PALM_TREE,
    data: FACTORY.ISLANDS
  },
  {
    template: PAGE_SECTION_TEMPLATES.THEME_PARK,
    showCount: true,
    icon: ICONS.ROLLER_COASTER,
    data: FACTORY.THEME_PARKS
  },
  {
    template: PAGE_SECTION_TEMPLATES.TOWN,
    icon: ICONS.TOWN_HALL,
    data: FACTORY.TOWNS
  },
  {
    template: PAGE_SECTION_TEMPLATES.UP_NEXT,
    icon: ICONS.NOTEPAD,
    showCount: true,
    data: FACTORY.UP_NEXT
  }
];

const SECTIONS_YEARS: Array<IPageSection> = mapYearsToEventCardPageSections({
  years: DATA_SPLIT_BY_YEAR,
  eventCardType: EVENT_CARD_TYPES.TRIP
});

export const sections: Array<IPageSection> = [
  ...SECTIONS_STATS,
  ...SECTIONS_YEARS
];
