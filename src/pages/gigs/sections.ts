import { EVENT_CARD_TYPES, PAGE_SECTION_TEMPLATES } from "@constants";
import { ICONS } from "resources";

import { mapYearsToEventCardPageSections } from "../factory";
import { FACTORY } from "./factory";
import { DATA_SPLIT_BY_YEAR } from "./data";

const SECTIONS_STATS: Array<IPageSection> = [
  {
    template: PAGE_SECTION_TEMPLATES.FESTIVAL,
    showCount: true,
    icon: ICONS.PEACE_SIGN,
    data: FACTORY.FESTIVALS
  },
  {
    template: PAGE_SECTION_TEMPLATES.MUSICIAN,
    icon: ICONS.ARTIST,
    data: FACTORY.MUSICIANS,
    showCount: true
  },
  {
    template: PAGE_SECTION_TEMPLATES.BUCKET_LIST,
    icon: ICONS.STARS,
    data: FACTORY.BUCKET_LIST,
    showCount: true
  },
  {
    template: PAGE_SECTION_TEMPLATES.FRIEND,
    icon: ICONS.PEOPLE,
    showCount: false,
    data: FACTORY.FRIENDS
  },
  {
    template: PAGE_SECTION_TEMPLATES.UP_NEXT,
    icon: ICONS.NOTEPAD,
    data: FACTORY.UP_NEXT,
    showCount: true
  },
  {
    template: PAGE_SECTION_TEMPLATES.MUSIC_VENUES,
    icon: ICONS.STADIUM,
    data: FACTORY.VENUES,
    showCount: true
  }
].sort((a: IPageSection, b: IPageSection) =>
  a.template.title > b.template.title ? 1 : -1
);

const SECTIONS_YEARS: Array<IPageSection> = mapYearsToEventCardPageSections({
  years: DATA_SPLIT_BY_YEAR,
  eventCardType: EVENT_CARD_TYPES.GIG
});

export const sections: Array<IPageSection> = [
  ...SECTIONS_STATS,
  ...SECTIONS_YEARS
];
