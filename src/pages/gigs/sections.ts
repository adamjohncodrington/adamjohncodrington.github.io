import { EVENT_CARD_TYPES, PAGE_SECTION_IDS } from "@constants";
import { DATA_GIGS } from "data";
import { ICONS } from "resources";
import { isInFuture } from "utils";

import { mapToEventCard, mapYearsToEventCardPageSections } from "../factory";
import {
  CL_BUCKET_LIST,
  CL_FESTIVALS,
  CL_FRIENDS,
  CL_MUSICIANS,
  CL_VENUES
} from "./factory";

const { ALL, ALL_GROUPED_BY_YEAR } = DATA_GIGS;

const UPCOMING: Array<IGigData> = ALL.filter(gig => isInFuture(gig.dates));

const SECTIONS_STATS: Array<IPageSection> = [
  {
    details: PAGE_SECTION_IDS.FESTIVAL,
    showSectionLength: true,
    icon: ICONS.PEACE_SIGN,
    data: CL_FESTIVALS
  },
  {
    details: PAGE_SECTION_IDS.MUSICIAN,
    icon: ICONS.ARTIST,
    data: CL_MUSICIANS,
    showSectionLength: true
  },
  {
    details: PAGE_SECTION_IDS.BUCKET_LIST,
    icon: ICONS.STARS,
    data: CL_BUCKET_LIST,
    showSectionLength: true
  },
  {
    details: PAGE_SECTION_IDS.FRIEND,
    icon: ICONS.PEOPLE,
    showSectionLength: false,
    data: CL_FRIENDS
  },
  {
    details: PAGE_SECTION_IDS.UP_NEXT,
    icon: ICONS.NOTEPAD,
    data: mapToEventCard({
      data: UPCOMING,
      eventCardType: EVENT_CARD_TYPES.GIG
    }),
    showSectionLength: true
  },
  {
    details: PAGE_SECTION_IDS.MUSIC_VENUES,
    icon: ICONS.STADIUM,
    data: CL_VENUES,
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
