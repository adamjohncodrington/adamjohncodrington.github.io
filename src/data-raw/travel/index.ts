import * as travel_1997_2004 from "./travel-1997-2004";
import * as travel_2005_2009 from "./travel-2005-2009";
import * as travel_2010_2013 from "./travel-2010-2013";
import * as travel_2014_2016 from "./travel-2014-2016";
import * as travel_2017_2019 from "./travel-2017-2019";
import * as travel_2020_2022 from "./travel-2020-2022";

export const TRIPS: ITrip[] = Object.values({
  ...travel_1997_2004,
  ...travel_2005_2009,
  ...travel_2010_2013,
  ...travel_2014_2016,
  ...travel_2017_2019,
  ...travel_2020_2022
});

export const TRIP_LEGS: ITripLeg[] = TRIPS.flat();
