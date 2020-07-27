import { VINYL_COLLECTION as DATA } from "data-raw";
import { splitVinylsIntoYears } from "utils";

export const YEARS: Array<Array<IVinyl>> = splitVinylsIntoYears(DATA);
