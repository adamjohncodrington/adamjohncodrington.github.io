import { EVENT_CARD_TYPES, PAGE_SECTIONS } from "_constants";
import {
  mapToEventCardData,
  mapYearsToEventCardPageSections
} from "_factories";
import { DATA_RAW_GIGS } from "_data";
import { ICONS } from "_resources";

const eventCardType = EVENT_CARD_TYPES.GIG;

const mapGigsToEventCards = (parms: any) =>
  mapToEventCardData({ ...parms, eventCardType });

const { ALL, ALL_GROUPED_BY_YEAR, UPCOMING } = DATA_RAW_GIGS;

const pastCount: number = ALL.length - UPCOMING.length;
const futureCount: number = UPCOMING.length;

const SECTIONS_STATS: Array<IPageSection> = [
  {
    details: PAGE_SECTIONS.MUSICIAN,
    icon: ICONS.ARTIST,
    data: DATA_RAW_GIGS.MUSICIANS,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.BUCKET_LIST,
    icon: ICONS.STARS,
    data: DATA_RAW_GIGS.BUCKET_LIST,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.FESTIVAL,
    showSectionLength: true,
    icon: ICONS.PEACE_SIGN,
    data: DATA_RAW_GIGS.FESTIVALS
  },
  {
    details: PAGE_SECTIONS.FRIEND,
    icon: ICONS.PEOPLE,
    showSectionLength: false,
    data: DATA_RAW_GIGS.FRIENDS
  },
  {
    details: PAGE_SECTIONS.UP_NEXT,
    icon: ICONS.NOTEPAD,
    data: mapGigsToEventCards({ data: DATA_RAW_GIGS.UPCOMING }),
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.MUSIC_VENUES,
    icon: ICONS.STADIUM,
    data: DATA_RAW_GIGS.VENUES,
    showSectionLength: true
  }
];

const SECTIONS_YEARS: Array<IPageSection> = mapYearsToEventCardPageSections({
  years: ALL_GROUPED_BY_YEAR,
  eventCardType
});

const sections: Array<IPageSection> = [...SECTIONS_STATS, ...SECTIONS_YEARS];

export const PAGE_DATA_GIGS: IPageData = {
  pastCount,
  futureCount,
  sections
};
