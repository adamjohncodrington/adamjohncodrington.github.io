import { MEASUREMENTS } from "../../measurements";

export const MILK: IMilk = {
  MILK_COCONUT_CANNED: {
    displayText: "coconut milk",
    knownCost: { quantity: 1, measurement: MEASUREMENTS.CAN, price: 1 }
  },
  MILK_ALMOND_UNSWEETENED: {
    displayText: "unsweetened almond milk",
    knownCost: { quantity: 750, measurement: MEASUREMENTS.MILLILITRE, price: 2 }
  },
  MILK_OATLY_BARISTA: {
    displayText: "Oatly Barista",
    knownCost: { quantity: 1, measurement: MEASUREMENTS.LITRE, price: 1.85 }
  },
  MILK: {
    displayText: "milk",
    knownCost: { quantity: 1, measurement: MEASUREMENTS.LITRE, price: 1 }
  }
};
