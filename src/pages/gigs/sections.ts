import { EVENT_CARD_TYPES, PAGE_SECTION_IDS } from "@constants";
import { DATA_GIGS } from "data";
import { ICONS } from "resources";

import { mapYearsToEventCardPageSections } from "../factory";
import {
  DATA_BUCKET_LIST,
  DATA_FESTIVALS,
  DATA_FRIENDS,
  DATA_MUSICIANS,
  DATA_UP_NEXT,
  DATA_VENUES
} from "./factory";

const { ALL_GROUPED_BY_YEAR } = DATA_GIGS;

const SECTIONS_STATS: Array<IPageSection> = [
  {
    details: PAGE_SECTION_IDS.FESTIVAL,
    showSectionLength: true,
    icon: ICONS.PEACE_SIGN,
    data: DATA_FESTIVALS
  },
  {
    details: PAGE_SECTION_IDS.MUSICIAN,
    icon: ICONS.ARTIST,
    data: DATA_MUSICIANS,
    showSectionLength: true
  },
  {
    details: PAGE_SECTION_IDS.BUCKET_LIST,
    icon: ICONS.STARS,
    data: DATA_BUCKET_LIST,
    showSectionLength: true
  },
  {
    details: PAGE_SECTION_IDS.FRIEND,
    icon: ICONS.PEOPLE,
    showSectionLength: false,
    data: DATA_FRIENDS
  },
  {
    details: PAGE_SECTION_IDS.UP_NEXT,
    icon: ICONS.NOTEPAD,
    data: DATA_UP_NEXT,
    showSectionLength: true
  },
  {
    details: PAGE_SECTION_IDS.MUSIC_VENUES,
    icon: ICONS.STADIUM,
    data: DATA_VENUES,
    showSectionLength: true
  }
].sort((a: IPageSection, b: IPageSection) =>
  a.details.title > b.details.title ? 1 : -1
);

const SECTIONS_YEARS: Array<IPageSection> = mapYearsToEventCardPageSections({
  years: ALL_GROUPED_BY_YEAR,
  eventCardType: EVENT_CARD_TYPES.GIG
});

export const sections: Array<IPageSection> = [
  ...SECTIONS_STATS,
  ...SECTIONS_YEARS
];
