import { MEASUREMENTS } from "../../measurements";

import { MILK } from "./milk";

export const DAIRY: IInventoryIngredients = {
  ...MILK,

  BUTTER_VEGAN: {
    displayText: "dairy-free buttery spread",
    cost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 2 }
  },
  CREAM_OAT: {
    displayText: "oat cream",
    cost: { quantity: 250, measurement: MEASUREMENTS.MILLILITRE, price: 0.95 }
  },
  CHEESE_VEGAN_SLICE: {
    displayText: "vegan cheese slices",
    cost: { quantity: 200, measurement: MEASUREMENTS.GRAM, price: 2.6 }
  }
};
