import {
  ACTORS,
  FRIENDS,
  PLAYS,
  PAGE_SECTION_TYPES,
  THEATRE_VENUES
} from "../../constants";
import { generateSectionData } from "../../utils/global";

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
const FAVOURITES = ALL.filter(item => item.favourite);

//@ts-ignore
const generateSectionDataWrapper = parms =>
  generateSectionData({
    ...parms,
    allData: ALL,
    favouritedData: FAVOURITES
  });

const UPCOMING = generateSectionDataWrapper({ upcomingMode: true });

export const DATA_THEATRE = {
  ALL,

  ALL_GROUPED_BY_YEAR,

  ACTORS: generateSectionDataWrapper({
    items: ACTORS,
    pageSectionType: PAGE_SECTION_TYPES.ACTOR
  }),

  FAVOURITES,

  FRIENDS: generateSectionDataWrapper({
    items: FRIENDS,
    pageSectionType: PAGE_SECTION_TYPES.FRIEND,
    filter: "theatre"
  }),

  PLAYS: generateSectionDataWrapper({
    items: PLAYS,
    pageSectionType: PAGE_SECTION_TYPES.PLAY
  }),

  VENUES: generateSectionDataWrapper({
    items: THEATRE_VENUES,
    pageSectionType: PAGE_SECTION_TYPES.THEATRE_VENUES
  }),

  UPCOMING
};
