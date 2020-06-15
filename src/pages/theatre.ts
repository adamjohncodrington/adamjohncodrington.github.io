import { DATA_THEATRE } from "../data";
import { ICONS } from "../resources";
import { EVENT_CARD_TYPES, PAGE_SECTION_TYPES } from "../constants";
import { mapDataToEventCards, mapYearGroupsToSections } from "../utils/global";

const eventType = EVENT_CARD_TYPES.THEATRE;
//@ts-ignore
const mapTheatreVisitToEventCards = parms =>
  mapDataToEventCards({ ...parms, eventType });

const statsSections: Array<IPageSection> = [
  {
    type: PAGE_SECTION_TYPES.ACTOR,
    icon: ICONS.ARTIST,
    data: DATA_THEATRE.ACTORS
  },
  {
    type: PAGE_SECTION_TYPES.FRIEND,
    icon: ICONS.PEOPLE,
    data: DATA_THEATRE.FRIENDS,
    leaderboard: true
  },
  {
    type: PAGE_SECTION_TYPES.PLAY,
    icon: ICONS.BOOK,
    data: DATA_THEATRE.PLAYS,
    showSectionLength: true
  },
  {
    type: PAGE_SECTION_TYPES.THEATRE_VENUES,
    icon: ICONS.THEATRE,
    data: DATA_THEATRE.VENUES,
    showSectionLength: true
  },
  {
    type: PAGE_SECTION_TYPES.UP_NEXT,
    icon: ICONS.NOTEPAD,
    listOfEventCards: true,
    data: mapTheatreVisitToEventCards({ data: DATA_THEATRE.UPCOMING }),
    showSectionLength: true
  }
];

const yearSections: Array<IPageSection> = mapYearGroupsToSections({
  years: DATA_THEATRE.ALL_GROUPED_BY_YEAR,
  eventType
});

const sections: Array<IPageSection> = [...statsSections, ...yearSections];

export const PAGE_DATA_THEATRE: IPageData = {
  sections
};
