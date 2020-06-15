import {
  generateSectionData,
  generateChildItemsFromParentItems
} from "../../utils/global";
import { FRIENDS, PAGE_SECTIONS, LOCATIONS } from "../../constants";

import { TRAVEL_1997 } from "./travel-1997";
import { TRAVEL_1998 } from "./travel-1998";
import { TRAVEL_1999 } from "./travel-1999";
import { TRAVEL_2000 } from "./travel-2000";
import { TRAVEL_2001 } from "./travel-2001";
import { TRAVEL_2002 } from "./travel-2002";
import { TRAVEL_2003 } from "./travel-2003";
import { TRAVEL_2004 } from "./travel-2004";
import { TRAVEL_2005 } from "./travel-2005";
import { TRAVEL_2006 } from "./travel-2006";
import { TRAVEL_2007 } from "./travel-2007";
import { TRAVEL_2008 } from "./travel-2008";
import { TRAVEL_2009 } from "./travel-2009";
import { TRAVEL_2010 } from "./travel-2010";
import { TRAVEL_2011 } from "./travel-2011";
import { TRAVEL_2012 } from "./travel-2012";
import { TRAVEL_2013 } from "./travel-2013";
import { TRAVEL_2014 } from "./travel-2014";
import { TRAVEL_2015 } from "./travel-2015";
import { TRAVEL_2016 } from "./travel-2016";
import { TRAVEL_2017 } from "./travel-2017";
import { TRAVEL_2018 } from "./travel-2018";
import { TRAVEL_2019 } from "./travel-2019";
import { TRAVEL_2020 } from "./travel-2020";
import { TRAVEL_BUCKET_LIST } from "./travel-bucket-list";

const ALL: Array<ITravelData> = [
  ...TRAVEL_1997,
  ...TRAVEL_1998,
  ...TRAVEL_1999,
  ...TRAVEL_2000,
  ...TRAVEL_2001,
  ...TRAVEL_2002,
  ...TRAVEL_2003,
  ...TRAVEL_2004,
  ...TRAVEL_2005,
  ...TRAVEL_2006,
  ...TRAVEL_2007,
  ...TRAVEL_2008,
  ...TRAVEL_2009,
  ...TRAVEL_2010,
  ...TRAVEL_2011,
  ...TRAVEL_2012,
  ...TRAVEL_2013,
  ...TRAVEL_2014,
  ...TRAVEL_2015,
  ...TRAVEL_2016,
  ...TRAVEL_2017,
  ...TRAVEL_2018,
  ...TRAVEL_2019,
  ...TRAVEL_2020
];

const ALL_GROUPED_BY_YEAR: Array<Array<ITravelData>> = [
  TRAVEL_1997,
  TRAVEL_1998,
  TRAVEL_1999,
  TRAVEL_2000,
  TRAVEL_2001,
  TRAVEL_2002,
  TRAVEL_2003,
  TRAVEL_2004,
  TRAVEL_2005,
  TRAVEL_2006,
  TRAVEL_2007,
  TRAVEL_2008,
  TRAVEL_2009,
  TRAVEL_2010,
  TRAVEL_2011,
  TRAVEL_2012,
  TRAVEL_2013,
  TRAVEL_2014,
  TRAVEL_2015,
  TRAVEL_2016,
  TRAVEL_2017,
  TRAVEL_2018,
  TRAVEL_2019,
  TRAVEL_2020
];

const FAVOURITES = ALL.filter(item => item.favourite);

//@ts-ignore
const countries: Array<ICountry> = Object.values(LOCATIONS);

//@ts-ignore
const cities: Array<ICity> = generateChildItemsFromParentItems({
  childItems: "cities",
  parentItems: LOCATIONS
});

//@ts-ignore
const towns: Array<ITown> = generateChildItemsFromParentItems({
  childItems: "towns",
  parentItems: LOCATIONS
});

const islands: Array<IIsland> = generateChildItemsFromParentItems({
  childItems: "islands",
  parentItems: LOCATIONS,
  parentFlag: "island"
});

//@ts-ignore
const attractions: Array<IAttraction> = generateChildItemsFromParentItems({
  childItems: "attractions",
  parentItems: LOCATIONS
});

const themeParks: Array<IAttraction> = attractions.filter(
  item => item.themePark
);
const highlights: Array<IAttraction> = attractions.filter(
  item => item.highlight
);

//@ts-ignore
const generateSectionDataWrapper = parms =>
  generateSectionData({
    ...parms,
    allData: ALL,
    favouritedData: FAVOURITES
  });

const UPCOMING = generateSectionDataWrapper({ upcomingMode: true });

export const DATA_TRAVEL = {
  pastCount: ALL.filter(item => !item.notAbroad).length - UPCOMING.length,
  futureCount: UPCOMING.length,

  ALL,

  ALL_GROUPED_BY_YEAR,

  BUCKET_LIST: generateSectionDataWrapper({
    bucketListMode: true,
    items: TRAVEL_BUCKET_LIST
  }),

  CITIES: generateSectionDataWrapper({
    items: cities,
    pageSectionTitle: PAGE_SECTIONS.CITY
  }),

  TOWNS: generateSectionDataWrapper({
    items: towns,
    pageSectionTitle: PAGE_SECTIONS.TOWN
  }),

  ATTRACTIONS: generateSectionDataWrapper({
    items: attractions.filter(item => !item.themePark && !item.highlight),
    pageSectionTitle: PAGE_SECTIONS.ATTRACTION
  }),

  THEME_PARKS: generateSectionDataWrapper({
    items: themeParks,
    pageSectionTitle: PAGE_SECTIONS.ATTRACTION
  }),

  HIGLIGHTS: generateSectionDataWrapper({
    items: highlights,
    pageSectionTitle: PAGE_SECTIONS.ATTRACTION
  }),

  ISLANDS: generateSectionDataWrapper({
    items: islands,
    pageSectionTitle: PAGE_SECTIONS.ISLAND
  }),

  COUNTRIES: generateSectionDataWrapper({
    items: countries,
    pageSectionTitle: PAGE_SECTIONS.COUNTRY
  }),

  FAVOURITES,

  FRIENDS: generateSectionDataWrapper({
    items: FRIENDS,
    pageSectionTitle: PAGE_SECTIONS.FRIEND,
    filter: "travel"
  }),

  UPCOMING
};
