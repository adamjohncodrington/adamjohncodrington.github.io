import * as gigs2006 from "./gigs-2006";
import * as gigs2007 from "./gigs-2007";
import * as gigs2008 from "./gigs-2008";
import * as gigs2009 from "./gigs-2009";
import * as gigs2010 from "./gigs-2010";
import * as gigs2011 from "./gigs-2011";
import * as gigs2012 from "./gigs-2012";
import * as gigs2013 from "./gigs-2013";
import * as gigs2014 from "./gigs-2014";
import * as gigs2015 from "./gigs-2015";
import * as gigs2016 from "./gigs-2016";
import * as gigs2017 from "./gigs-2017";

import * as gigs2020 from "./gigs-2020";
import * as gigs2021 from "./gigs-2021";

import { GIGS_2018 } from "./gigs-2018";
import { GIGS_2019 } from "./gigs-2019";

const GIGS_2006: Array<IGig> = Object.values(gigs2006);
const GIGS_2007: Array<IGig> = Object.values(gigs2007);
const GIGS_2008: Array<IGig> = Object.values(gigs2008);
const GIGS_2009: Array<IGig> = Object.values(gigs2009);
const GIGS_2010: Array<IGig> = Object.values(gigs2010);
const GIGS_2011: Array<IGig> = Object.values(gigs2011);
const GIGS_2012: Array<IGig> = Object.values(gigs2012);
const GIGS_2013: Array<IGig> = Object.values(gigs2013);
const GIGS_2014: Array<IGig> = Object.values(gigs2014);
const GIGS_2015: Array<IGig> = Object.values(gigs2015);
const GIGS_2016: Array<IGig> = Object.values(gigs2016);
const GIGS_2017: Array<IGig> = Object.values(gigs2017);

const GIGS_2020: Array<IGig> = Object.values(gigs2020);
const GIGS_2021: Array<IGig> = Object.values(gigs2021);

const ALL: Array<IGig> = [
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
].sort((a: IGig, b: IGig): number =>
  a.dates[0].valueOf() > b.dates[0].valueOf() ? 1 : -1
);

const SPLIT_BY_YEAR: Array<Array<IGig>> = [
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
].map(
  (year: Array<IGig>): Array<IGig> =>
    year.sort((a: IGig, b: IGig): number =>
      a.dates[0].valueOf() > b.dates[0].valueOf() ? 1 : -1
    )
);

export const DATA = { ALL, SPLIT_BY_YEAR };
