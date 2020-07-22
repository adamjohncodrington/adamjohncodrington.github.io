import { THEATRE_VISITS } from "data";
import { splitTheatreIntoYears } from "utils";

export const YEARS: Array<Array<ITheatreVisit>> = splitTheatreIntoYears(
  THEATRE_VISITS
);
