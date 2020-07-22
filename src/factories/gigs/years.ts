import { GIGS as DATA } from "data";
import { splitGigsIntoYears } from "utils";

export const YEARS: Array<Array<IGig>> = splitGigsIntoYears(DATA);
