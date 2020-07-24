import { VINYL as DATA } from "data";
import { splitVinylsIntoYears } from "utils";

export const YEARS: Array<Array<IVinylPostPurchase>> = splitVinylsIntoYears(
  DATA.COLLECTION
);
