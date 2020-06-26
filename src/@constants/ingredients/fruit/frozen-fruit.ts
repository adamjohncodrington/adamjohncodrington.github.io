import { MEASUREMENTS } from "../../measurements";

export const FRUIT_FROZEN: IInventoryIngredientsObject = {
  BLACKBERRIES_FROZEN: {
    displayText: "frozen blackberries",
    knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 2 }
  },
  RASPBERRIES_FROZEN: {
    displayText: "frozen raspberries",
    knownCost: { quantity: 350, measurement: MEASUREMENTS.GRAM, price: 2 }
  }
};
