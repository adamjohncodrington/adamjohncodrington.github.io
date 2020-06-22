import { EVENT_CARD_TYPES, PAGE_SECTIONS } from "CONSTANTS";
import { mapToEventCardData, mapYearsToEventCardPageSections } from "factories";
import { DATA_GIGS } from "data";
import { ICONS } from "resources";

const eventCardType = EVENT_CARD_TYPES.GIG;

const mapGigsToEventCards = (parms: any) =>
  mapToEventCardData({ ...parms, eventCardType });

const { ALL, ALL_GROUPED_BY_YEAR, UPCOMING } = DATA_GIGS;

const pastCount: number = ALL.length - UPCOMING.length;
const futureCount: number = UPCOMING.length;

const SECTIONS_STATS: Array<IPageSection> = [
  {
    details: PAGE_SECTIONS.MUSICIAN,
    icon: ICONS.ARTIST,
    data: DATA_GIGS.MUSICIANS,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.BUCKET_LIST,
    icon: ICONS.STARS,
    data: DATA_GIGS.BUCKET_LIST,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.FESTIVAL,
    showSectionLength: true,
    icon: ICONS.PEACE_SIGN,
    data: DATA_GIGS.FESTIVALS
  },
  {
    details: PAGE_SECTIONS.FRIEND,
    icon: ICONS.PEOPLE,
    showSectionLength: false,
    data: DATA_GIGS.FRIENDS
  },
  {
    details: PAGE_SECTIONS.UP_NEXT,
    icon: ICONS.NOTEPAD,
    data: mapGigsToEventCards({ data: DATA_GIGS.UPCOMING }),
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.MUSIC_VENUES,
    icon: ICONS.STADIUM,
    data: DATA_GIGS.VENUES,
    showSectionLength: true
  }
];

const SECTIONS_YEARS: Array<IPageSection> = mapYearsToEventCardPageSections({
  years: ALL_GROUPED_BY_YEAR,
  eventCardType
});

const sections: Array<IPageSection> = [...SECTIONS_STATS, ...SECTIONS_YEARS];

export const PAGE_GIGS: IPageData = { pastCount, futureCount, sections };
