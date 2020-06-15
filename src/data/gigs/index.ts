import {
  MUSIC_VENUES,
  FRIENDS,
  MUSICIANS,
  PAGE_SECTIONS,
  FESTIVALS
} from "../../constants";
import { generateSectionData } from "../../utils/global";

import { GIGS_2006 } from "./gigs-2006";
import { GIGS_2007 } from "./gigs-2007";
import { GIGS_2008 } from "./gigs-2008";
import { GIGS_2009 } from "./gigs-2009";
import { GIGS_2010 } from "./gigs-2010";
import { GIGS_2011 } from "./gigs-2011";
import { GIGS_2012 } from "./gigs-2012";
import { GIGS_2013 } from "./gigs-2013";
import { GIGS_2014 } from "./gigs-2014";
import { GIGS_2015 } from "./gigs-2015";
import { GIGS_2016 } from "./gigs-2016";
import { GIGS_2017 } from "./gigs-2017";
import { GIGS_2018 } from "./gigs-2018";
import { GIGS_2019 } from "./gigs-2019";
import { GIGS_2020 } from "./gigs-2020";
import { GIGS_2021 } from "./gigs-2021";

const ALL: Array<IGigData> = [
  ...GIGS_2006,
  ...GIGS_2007,
  ...GIGS_2008,
  ...GIGS_2009,
  ...GIGS_2010,
  ...GIGS_2011,
  ...GIGS_2012,
  ...GIGS_2013,
  ...GIGS_2014,
  ...GIGS_2015,
  ...GIGS_2016,
  ...GIGS_2017,
  ...GIGS_2018,
  ...GIGS_2019,
  ...GIGS_2020,
  ...GIGS_2021
];

const ALL_GROUPED_BY_YEAR: Array<Array<IGigData>> = [
  GIGS_2006,
  GIGS_2007,
  GIGS_2008,
  GIGS_2009,
  GIGS_2010,
  GIGS_2011,
  GIGS_2012,
  GIGS_2013,
  GIGS_2014,
  GIGS_2015,
  GIGS_2016,
  GIGS_2017,
  GIGS_2018,
  GIGS_2019,
  GIGS_2020,
  GIGS_2021
];

const FAVOURITES: Array<IGigData> = ALL.filter(item => item.favourite);

//@ts-ignore
const generateSectionDataWrapper = parms =>
  generateSectionData({
    ...parms,
    allData: ALL,
    favouritedData: FAVOURITES
  });

const UPCOMING = generateSectionDataWrapper({ upcomingMode: true });

export const DATA_GIGS = {
  pastCount: ALL.length - UPCOMING.length,
  futureCount: UPCOMING.length,

  ALL,

  ALL_GROUPED_BY_YEAR,

  BUCKET_LIST: generateSectionDataWrapper({
    bucketListMode: true,
    items: MUSICIANS,
    pageSectionTitle: PAGE_SECTIONS.MUSICIAN
  }),

  FAVOURITES,

  FESTIVALS: generateSectionDataWrapper({
    items: FESTIVALS,
    pageSectionTitle: PAGE_SECTIONS.FESTIVAL,
    filter: "festival"
  }),

  FRIENDS: generateSectionDataWrapper({
    items: FRIENDS,
    pageSectionTitle: PAGE_SECTIONS.FRIEND,
    filter: "gigs"
  }),

  MUSICIANS: generateSectionDataWrapper({
    items: MUSICIANS,
    pageSectionTitle: PAGE_SECTIONS.MUSICIAN
  }),

  UPCOMING,

  VENUES: generateSectionDataWrapper({
    items: MUSIC_VENUES,
    pageSectionTitle: PAGE_SECTIONS.MUSIC_VENUES
  })
};
