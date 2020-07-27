import { TRIPS as DATA } from "data";
import { splitTripsIntoYears } from "utils";

export const YEARS: Array<Array<ITrip>> = splitTripsIntoYears(DATA);
