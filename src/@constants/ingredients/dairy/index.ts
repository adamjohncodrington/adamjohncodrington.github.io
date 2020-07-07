import { MEASUREMENTS } from "../../measurements";

import { MILK } from "./milk";

export const DAIRY: IDairy = {
  ...MILK,

  BUTTER_VEGAN: {
    displayText: "Flora Buttery",
    knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 2 }
  },
  CREAM_OAT: {
    displayText: "oat cream",
    knownCost: {
      quantity: 250,
      measurement: MEASUREMENTS.MILLILITRE,
      price: 0.95
    }
  },
  CHEESE_VEGAN_SLICE: {
    displayText: "vegan cheese slices",
    knownCost: { quantity: 200, measurement: MEASUREMENTS.GRAM, price: 2.6 }
  }
};
