import { VINYL_COLLECTION as DATA } from "data-raw";
import { numberToCurrencyString } from "utils";

const totalCost: number = DATA.reduce(
  (currentTotal: number, { costExcDelivery }: IVinyl): number =>
    currentTotal + costExcDelivery,
  0
);

const unitCost: number = totalCost / DATA.length;

export const COSTS: ICosts = {
  totalCost: numberToCurrencyString(totalCost, 0),
  unitCost: numberToCurrencyString(unitCost, 0),
  unit: "vinyl"
};
