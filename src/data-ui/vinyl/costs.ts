import { VINYL_PURCHASED as DATA } from "data-raw";
import { numberToCurrencyString } from "utils";

const totalCost: number = DATA.reduce(
  (currentTotal: number, { costExcDelivery, extraCopy }: IVinyl): number =>
    currentTotal +
    costExcDelivery +
    (extraCopy ? extraCopy.costExcDelivery : 0),
  0
);

const unitCost: number = totalCost / DATA.length;

export const COSTS: ICosts = {
  totalCost: numberToCurrencyString(totalCost, 0),
  unitCost: numberToCurrencyString(unitCost, 0),
  unit: "vinyl"
};
