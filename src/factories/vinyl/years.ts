import { splitVinylsIntoYears } from "utils";

import { COLLECTION } from "./collection";

export const YEARS: Array<Array<IVinyl>> = splitVinylsIntoYears(COLLECTION);
