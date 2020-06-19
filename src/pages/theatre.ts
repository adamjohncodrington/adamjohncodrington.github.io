import { DATA_THEATRE } from "../data";
import { ICONS } from "../resources";
import { EVENT_CARD_TYPES, PAGE_SECTIONS } from "../constants";
import { mapDataToEventCards, mapYearGroupsToSections } from "../utils/global";

const eventType = EVENT_CARD_TYPES.THEATRE;
//@ts-ignore
const mapTheatreVisitToEventCards = parms =>
  mapDataToEventCards({ ...parms, eventType });

const statsSections: Array<IPageSection> = [
  {
    details: PAGE_SECTIONS.ACTOR,
    icon: ICONS.ARTIST,
    data: DATA_THEATRE.ACTORS
  },
  {
    details: PAGE_SECTIONS.FRIEND,
    icon: ICONS.PEOPLE,
    data: DATA_THEATRE.FRIENDS
  },
  {
    details: PAGE_SECTIONS.PLAY,
    icon: ICONS.BOOK,
    data: DATA_THEATRE.PLAYS,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.THEATRE_VENUES,
    icon: ICONS.THEATRE,
    data: DATA_THEATRE.VENUES,
    showSectionLength: true
  },
  {
    details: PAGE_SECTIONS.UP_NEXT,
    icon: ICONS.NOTEPAD,
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
