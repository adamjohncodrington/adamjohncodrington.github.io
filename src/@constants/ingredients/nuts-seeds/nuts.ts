import { MEASUREMENTS } from "../../measurements";

export const NUTS: IInventoryIngredientsObject = {
  NUTS_CASHEWS: {
    displayText: "cashew nuts",
    knownCost: { quantity: 200, measurement: MEASUREMENTS.GRAM, price: 3 }
  },
  NUTS_PINE: {
    displayText: "pine nuts",
    knownCost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 3.6 }
  }
};
