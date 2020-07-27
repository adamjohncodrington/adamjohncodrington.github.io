import { TRIPS as DATA } from "data-raw";
import { splitTripsIntoYears } from "utils";

export const YEARS: Array<Array<ITrip>> = splitTripsIntoYears(DATA);
