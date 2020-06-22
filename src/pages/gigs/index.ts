import {
  EVENT_CARD_TYPES,
  PAGE_SECTIONS,
  MUSIC_VENUES,
  FRIENDS,
  MUSICIANS,
  FESTIVALS
} from "CONSTANTS";
import { DATA_GIGS } from "data";
import { ICONS } from "resources";
import { isInFuture } from "utils";

import {
  mapToCountedList,
  mapToEventCard,
  mapYearsToEventCardPageSections
} from "../factory";

const { ALL, ALL_GROUPED_BY_YEAR } = DATA_GIGS;

const FAVOURITES: Array<IGigData> = ALL.filter(item => item.favourite);

const UPCOMING = ALL.filter(gig => isInFuture(gig.dates));

const mapToCountedListWrapper = (parms: any) =>
  mapToCountedList({
    ...parms,
    allData: ALL,
    favouritedData: FAVOURITES
  });

const eventCardType = EVENT_CARD_TYPES.GIG;

const mapGigsToEventCards = (parms: any) =>
  mapToEventCard({ ...parms, eventCardType });

const pastCount: number = ALL.length - UPCOMING.length;
const futureCount: number = UPCOMING.length;

const bucketList: Array<ICountedListItem> = mapToCountedListWrapper({
  bucketListMode: true,
  items: MUSICIANS,
  pageSectionTitle: PAGE_SECTIONS.MUSICIAN
});
const festivals: Array<ICountedListItem> = mapToCountedListWrapper({
  items: FESTIVALS,
  pageSectionTitle: PAGE_SECTIONS.FESTIVAL,
  filter: "festival"
});
const friends: Array<ICountedListItem> = mapToCountedListWrapper({
  items: FRIENDS,
  pageSectionTitle: PAGE_SECTIONS.FRIEND,
  filter: "gigs"
});
const musicians: Array<ICountedListItem> = mapToCountedListWrapper({
  items: MUSICIANS,
  pageSectionTitle: PAGE_SECTIONS.MUSICIAN
});
const venues: Array<ICountedListItem> = mapToCountedListWrapper({
  items: MUSIC_VENUES,
  pageSectionTitle: PAGE_SECTIONS.MUSIC_VENUES
});

const SECTIONS_STATS: Array<IPageSection> = [
  {
    details: PAGE_SECTIONS.MUSICIAN,
    icon: ICONS.ARTIST,
    data: musicians,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.BUCKET_LIST,
    icon: ICONS.STARS,
    data: bucketList,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.FESTIVAL,
    showSectionLength: true,
    icon: ICONS.PEACE_SIGN,
    data: festivals
  },
  {
    details: PAGE_SECTIONS.FRIEND,
    icon: ICONS.PEOPLE,
    showSectionLength: false,
    data: friends
  },
  {
    details: PAGE_SECTIONS.UP_NEXT,
    icon: ICONS.NOTEPAD,
    data: mapGigsToEventCards({ data: UPCOMING }),
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.MUSIC_VENUES,
    icon: ICONS.STADIUM,
    data: venues,
    showSectionLength: true
  }
];

const SECTIONS_YEARS: Array<IPageSection> = mapYearsToEventCardPageSections({
  years: ALL_GROUPED_BY_YEAR,
  eventCardType
});

const sections: Array<IPageSection> = [...SECTIONS_STATS, ...SECTIONS_YEARS];

export const PAGE_GIGS: IPageData = { pastCount, futureCount, sections };
