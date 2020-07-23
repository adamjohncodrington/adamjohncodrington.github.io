import * as travel_1997_2004 from "./travel-1997-2004";
import * as travel_2005_2009 from "./travel-2005-2009";
import * as travel_2010_2013 from "./travel-2010-2013";
import * as travel_2014_2016 from "./travel-2014-2016";
import * as travel_2017_2019 from "./travel-2017-2019";
import * as travel_2020_2022 from "./travel-2020-2022";

import { splitTripsIntoYears } from "utils";

const TRAVEL_1997_2004: Array<ITrip> = Object.values(travel_1997_2004);
const TRAVEL_2005_2009: Array<ITrip> = Object.values(travel_2005_2009);
const TRAVEL_2010_2013: Array<ITrip> = Object.values(travel_2010_2013);
const TRAVEL_2014_2016: Array<ITrip> = Object.values(travel_2014_2016);
const TRAVEL_2017_2019: Array<ITrip> = Object.values(travel_2017_2019);
const TRAVEL_2020_2022: Array<ITrip> = Object.values(travel_2020_2022);

const TRIPS: Array<ITrip> = [
  ...TRAVEL_1997_2004,
  ...TRAVEL_2005_2009,
  ...TRAVEL_2010_2013,
  ...TRAVEL_2014_2016,
  ...TRAVEL_2017_2019,
  ...TRAVEL_2020_2022
];

const TRIP_LEGS: Array<ITripLeg> = TRIPS.flat();

const YEARS: Array<Array<ITrip>> = splitTripsIntoYears(TRIPS);

export const TRAVEL = { TRIPS, TRIP_LEGS, YEARS };
