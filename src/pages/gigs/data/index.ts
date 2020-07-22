import { mapGigsToGigCards, mapFestivalsToGigCards } from "utils";

import * as FESTIVALS from "./festivals";

import * as GIGS_2006 from "./gigs-2006";
import * as GIGS_2007 from "./gigs-2007";
import * as GIGS_2008 from "./gigs-2008";
import * as GIGS_2009 from "./gigs-2009";
import * as GIGS_2010 from "./gigs-2010";
import * as GIGS_2011 from "./gigs-2011";
import * as GIGS_2012 from "./gigs-2012";
import * as GIGS_2013 from "./gigs-2013";
import * as GIGS_2014 from "./gigs-2014";
import * as GIGS_2015 from "./gigs-2015";
import * as GIGS_2016 from "./gigs-2016";
import * as GIGS_2017 from "./gigs-2017";
import * as GIGS_2018 from "./gigs-2018";
import * as GIGS_2019 from "./gigs-2019";
import * as GIGS_2020 from "./gigs-2020";
import * as GIGS_2021 from "./gigs-2021";

const GIGS = {
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
};

const FESTIVALS_ARRAY: Array<IFestival> = Object.values(FESTIVALS);

const GIGS_ARRAY: Array<IGig> = Object.values(GIGS);

export const ARRAY: Array<IGig> = Object.values(GIGS);

export const GIG_CARDS_ARRAY: Array<IGigCard> = [
  ...mapGigsToGigCards(GIGS_ARRAY),
  ...mapFestivalsToGigCards(FESTIVALS_ARRAY)
];

console.log(GIG_CARDS_ARRAY);
