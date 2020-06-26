import { MEASUREMENTS } from "../../measurements";

export const BEANS: IInventoryIngredientsObject = {
  BEANS_BAKED: { displayText: "baked beans" },
  BEANS_HARICOT: {
    displayText: "haricot beans",
    knownCost: { quantity: 1, measurement: MEASUREMENTS.CAN, price: 0.55 }
  },
  BEANS_KIDNEY: {
    displayText: "kidney beans",
    knownCost: { quantity: 1, measurement: MEASUREMENTS.CAN, price: 0.55 }
  }
};
