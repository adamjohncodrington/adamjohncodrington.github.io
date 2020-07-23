import * as travel1997_2004 from "./travel-1997-2004";

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
import { splitTripsIntoYears } from "utils";

const TRAVEL_1997_2004: Array<ITrip> = Object.values(travel1997_2004);

const ALL: Array<ITrip> = [
  ...TRAVEL_1997_2004,
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

const ALL_FLAT: Array<ITripLeg> = ALL.flat();

const SPLIT_BY_YEAR: Array<Array<ITrip>> = splitTripsIntoYears(ALL);

export const DATA = { ALL, ALL_FLAT, SPLIT_BY_YEAR };
