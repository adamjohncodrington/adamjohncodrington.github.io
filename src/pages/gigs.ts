import { EVENT_CARD_TYPES, PAGE_SECTION_TYPES } from "../constants";
import { DATA_GIGS } from "../data";
import { ICONS } from "../resources";
import { mapDataToEventCards, mapYearGroupsToSections } from "../utils/global";

const eventType = EVENT_CARD_TYPES.GIG;

//@ts-ignore
const mapGigsToEventCards = parms =>
  mapDataToEventCards({ ...parms, eventType });

const { pastCount, futureCount } = DATA_GIGS;

const statsSections: Array<IPageSection> = [
  {
    type: PAGE_SECTION_TYPES.MUSICIAN,
    icon: ICONS.ARTIST,
    data: DATA_GIGS.MUSICIANS,
    showSectionLength: true
  },
  {
    type: PAGE_SECTION_TYPES.BUCKET_LIST,
    icon: ICONS.STARS,
    data: DATA_GIGS.BUCKET_LIST,
    showSectionLength: true
  },
  {
    type: PAGE_SECTION_TYPES.FESTIVAL,
    showSectionLength: true,
    icon: ICONS.PEACE_SIGN,
    data: DATA_GIGS.FESTIVALS
  },
  {
    type: PAGE_SECTION_TYPES.FRIEND,
    icon: ICONS.PEOPLE,
    showSectionLength: false,
    data: DATA_GIGS.FRIENDS,
    leaderboard: true
  },
  {
    type: PAGE_SECTION_TYPES.UP_NEXT,
    icon: ICONS.NOTEPAD,
    data: mapGigsToEventCards({ data: DATA_GIGS.UPCOMING }),
    listOfEventCards: true,
    showSectionLength: true
  },
  {
    type: PAGE_SECTION_TYPES.MUSIC_VENUES,
    icon: ICONS.STADIUM,
    data: DATA_GIGS.VENUES,
    showSectionLength: true
  }
];

const yearSections: Array<IPageSection> = mapYearGroupsToSections({
  years: DATA_GIGS.ALL_GROUPED_BY_YEAR,
  eventType
});

const sections: Array<IPageSection> = [...statsSections, ...yearSections];

export const PAGE_DATA_GIGS: IPageData = {
  pastCount,
  futureCount,
  sections
};
