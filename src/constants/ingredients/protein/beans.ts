import { MEASUREMENTS } from "../../measurements";

export const BEANS: IInventoryIngredients = {
  BEANS_BAKED: { displayText: "baked beans" },
  BEANS_HARICOT: {
    displayText: "haricot beans",
    cost: { quantity: 1, measurement: MEASUREMENTS.CAN, price: 0.55 }
  },
  BEANS_KIDNEY: {
    displayText: "kidney beans",
    cost: { quantity: 1, measurement: MEASUREMENTS.CAN, price: 0.55 }
  }
};
