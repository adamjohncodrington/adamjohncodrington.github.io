import { MEASUREMENTS } from "../../measurements";

import { FLOUR } from "./flour";
import { SUGAR } from "./sugar";
import { SYRUPS } from "./syrups";

export const BAKING: IInventoryIngredientsObject = {
  ...FLOUR,
  ...SUGAR,
  ...SYRUPS,

  BAKING_POWDER: {
    displayText: "baking powder",
    knownCost: { quantity: 170, measurement: MEASUREMENTS.GRAM, price: 1.4 }
  },
  BICARBONATE_OF_SODA: {
    displayText: "bicarbonate of soda",
    knownCost: { quantity: 200, measurement: MEASUREMENTS.GRAM, price: 1.4 }
  },
  CHOCOLATE_DARK: {
    displayText: "dark chocolate",
    knownCost: { quantity: 150, measurement: MEASUREMENTS.GRAM, price: 1.7 }
  },
  COCOA_POWDER: {
    displayText: "cocoa powder",
    knownCost: { quantity: 190, measurement: MEASUREMENTS.GRAM, price: 2.75 }
  }
};
