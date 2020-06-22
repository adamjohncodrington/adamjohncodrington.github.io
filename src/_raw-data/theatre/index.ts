import {
  ACTORS,
  FRIENDS,
  PLAYS,
  PAGE_SECTIONS,
  THEATRE_VENUES
} from "_constants";
import { mapToCountedList } from "_factories";
import { isInFuture } from "_utils";

import { THEATRE_2016 } from "./theatre-2016";
import { THEATRE_2017 } from "./theatre-2017";
import { THEATRE_2018 } from "./theatre-2018";
import { THEATRE_2019 } from "./theatre-2019";
import { THEATRE_2020 } from "./theatre-2020";

const ALL: Array<ITheatreData> = [
  ...THEATRE_2016,
  ...THEATRE_2017,
  ...THEATRE_2018,
  ...THEATRE_2019,
  ...THEATRE_2020
];

const ALL_GROUPED_BY_YEAR: Array<Array<ITheatreData>> = [
  THEATRE_2016,
  THEATRE_2017,
  THEATRE_2018,
  THEATRE_2019,
  THEATRE_2020
];

const FAVOURITES: Array<ITheatreData> = ALL.filter(item => item.favourite);

const UPCOMING = ALL.filter(theatreTrip => isInFuture(theatreTrip.dates));

const mapToCountedListWrapper = (parms: any) =>
  mapToCountedList({
    ...parms,
    allData: ALL,
    favouritedData: FAVOURITES
  });

export const DATA_RAW_THEATRE = {
  ALL,
  ALL_GROUPED_BY_YEAR,
  FAVOURITES,
  UPCOMING,

  ACTORS: mapToCountedListWrapper({
    items: ACTORS,
    pageSectionTitle: PAGE_SECTIONS.ACTOR
  }),
  FRIENDS: mapToCountedListWrapper({
    items: FRIENDS,
    pageSectionTitle: PAGE_SECTIONS.FRIEND,
    filter: "theatre"
  }),
  PLAYS: mapToCountedListWrapper({
    items: PLAYS,
    pageSectionTitle: PAGE_SECTIONS.PLAY
  }),
  VENUES: mapToCountedListWrapper({
    items: THEATRE_VENUES,
    pageSectionTitle: PAGE_SECTIONS.THEATRE_VENUES
  })
};
