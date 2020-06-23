import { EVENT_CARD_TYPES, PAGE_SECTION_TEMPLATES } from "@constants";
import { ICONS } from "resources";

import { mapYearsToEventCardPageSections } from "../factory";
import { FACTORY } from "./factory";
import { DATA_SPLIT_BY_YEAR } from "./data";

const SECTIONS_STATS: Array<IPageSection> = [
  {
    template: PAGE_SECTION_TEMPLATES.ACTOR,
    icon: ICONS.ARTIST,
    data: FACTORY.ACTORS
  },
  {
    template: PAGE_SECTION_TEMPLATES.FRIEND,
    icon: ICONS.PEOPLE,
    data: FACTORY.FRIENDS
  },
  {
    template: PAGE_SECTION_TEMPLATES.PLAY,
    icon: ICONS.BOOK,
    data: FACTORY.PLAYS,
    showCount: true
  },
  {
    template: PAGE_SECTION_TEMPLATES.THEATRE_VENUES,
    icon: ICONS.THEATRE,
    data: FACTORY.VENUES,
    showCount: true
  },
  {
    template: PAGE_SECTION_TEMPLATES.UP_NEXT,
    icon: ICONS.NOTEPAD,
    data: FACTORY.UP_NEXT,
    showCount: true
  }
];

const SECTIONS_YEARS: Array<IPageSection> = mapYearsToEventCardPageSections({
  years: DATA_SPLIT_BY_YEAR,
  eventCardType: EVENT_CARD_TYPES.THEATRE
});

export const sections: Array<IPageSection> = [
  ...SECTIONS_STATS,
  ...SECTIONS_YEARS
];
