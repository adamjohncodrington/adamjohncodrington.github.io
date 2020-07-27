import { THEATRE as DATA } from "data";
import { splitTheatreIntoYears } from "utils";

export const YEARS: Array<Array<ITheatreVisit>> = splitTheatreIntoYears(DATA);
