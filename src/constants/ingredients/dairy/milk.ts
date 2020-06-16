import { MEASUREMENTS } from "../../measurements";

export const MILK: IInventoryIngredients = {
  MILK_COCONUT_CANNED: {
    displayText: "coconut milk",
    cost: { quantity: 1, measurement: MEASUREMENTS.CAN, price: 1 }
  },
  MILK_ALMOND_UNSWEETENED: {
    displayText: "unsweetened almond milk",
    cost: { quantity: 750, measurement: MEASUREMENTS.MILLILITRE, price: 2 }
  },
  MILK_OAT: {
    displayText: "Oatly",
    cost: { quantity: 1, measurement: MEASUREMENTS.LITRE, price: 1.8 }
  },
  MILK: {
    displayText: "milk",
    cost: { quantity: 1, measurement: MEASUREMENTS.LITRE, price: 1 }
  }
};
