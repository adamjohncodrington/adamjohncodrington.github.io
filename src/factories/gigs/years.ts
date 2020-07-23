import { GIGS_AND_FESTIVALS as DATA } from "data";
import { splitGigsAndFestivalsIntoYears } from "utils";

export const YEARS: Array<Array<
  IGigOrFestival
>> = splitGigsAndFestivalsIntoYears(DATA);
