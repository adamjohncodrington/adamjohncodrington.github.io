import { MEASUREMENTS } from "../../measurements";

export const JUICE = {
  LEMON_JUICE: {
    displayText: "lemon juice",
    cost: { quantity: 250, measurement: MEASUREMENTS.MILLILITRE, price: 0.7 }
  },
  LEMON_JUICE_FRESH: {
    displayText: "fresh lemon juice",
    cost: { quantity: 3, measurement: MEASUREMENTS.TABLESPOON, price: 0.3 }
  },
  LIME_JUICE_FRESH: {
    displayText: "fresh lime juice",
    cost: { quantity: 3, measurement: MEASUREMENTS.TABLESPOON, price: 0.5 }
  }
};
