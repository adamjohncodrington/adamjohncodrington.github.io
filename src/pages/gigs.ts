import { EVENT_CARD_TYPES, PAGE_SECTIONS } from "../constants";
import { DATA_GIGS } from "../data";
import { ICONS } from "../resources";
import { mapDataToEventCards, mapYearGroupsToSections } from "../factories";

const eventCardType = EVENT_CARD_TYPES.GIG;

//@ts-ignore
const mapGigsToEventCards = parms =>
  mapDataToEventCards({ ...parms, eventCardType });

const { pastCount, futureCount } = DATA_GIGS;

const statsSections: Array<IPageSection> = [
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

const yearSections: Array<IPageSection> = mapYearGroupsToSections({
  years: DATA_GIGS.ALL_GROUPED_BY_YEAR,
  eventCardType
});

const sections: Array<IPageSection> = [...statsSections, ...yearSections];

export const PAGE_DATA_GIGS: IPageData = {
  pastCount,
  futureCount,
  sections
};
