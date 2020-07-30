import { VINYL_COLLECTION as DATA } from "data-raw";
import { numberToCurrencyString } from "utils";

const totalCost: number = DATA.reduce(
  (currentTotal: number, { costExcDelivery }: IVinyl) =>
    currentTotal + costExcDelivery,
  0
);

const costPerVinyl = totalCost / DATA.length;

export const COST: IHeadline = {
  text: `${numberToCurrencyString(totalCost, 0)} spent so far`,
  subText: `approx ${numberToCurrencyString(costPerVinyl, 0)} per vinyl`
};
