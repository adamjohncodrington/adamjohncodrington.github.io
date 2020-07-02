import { MEASUREMENTS } from "../../measurements";

export const JUICE: IJuice = {
  LEMON_JUICE: {
    displayText: "lemon juice",
    knownCost: {
      quantity: 250,
      measurement: MEASUREMENTS.MILLILITRE,
      price: 0.7
    }
  },
  LEMON_JUICE_FRESH: {
    displayText: "fresh lemon juice",
    knownCost: { quantity: 3, measurement: MEASUREMENTS.TABLESPOON, price: 0.3 }
  },
  LIME_JUICE_FRESH: {
    displayText: "fresh lime juice",
    knownCost: { quantity: 3, measurement: MEASUREMENTS.TABLESPOON, price: 0.5 }
  }
};
