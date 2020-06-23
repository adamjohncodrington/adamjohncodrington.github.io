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

export const DATA_ALL: Array<IGigData> = [
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

export const DATA_SPLIT_BY_YEAR: Array<Array<IGigData>> = [
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
