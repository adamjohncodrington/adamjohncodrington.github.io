import { MEASUREMENTS } from "../../measurements";

export const MILK: IInventoryIngredientsObject = {
  MILK_COCONUT_CANNED: {
    displayText: "coconut milk",
    knownCost: { quantity: 1, measurement: MEASUREMENTS.CAN, price: 1 }
  },
  MILK_ALMOND_UNSWEETENED: {
    displayText: "unsweetened almond milk",
    knownCost: { quantity: 750, measurement: MEASUREMENTS.MILLILITRE, price: 2 }
  },
  MILK_OAT: {
    displayText: "Oatly",
    knownCost: { quantity: 1, measurement: MEASUREMENTS.LITRE, price: 1.8 }
  },
  MILK: {
    displayText: "milk",
    knownCost: { quantity: 1, measurement: MEASUREMENTS.LITRE, price: 1 }
  }
};
