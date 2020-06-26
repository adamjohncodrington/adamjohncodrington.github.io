import { MEASUREMENTS } from "../../measurements";

export const FRUIT_DRIED: IInventoryIngredientsObject = {
  APRICOTS_DRIED: {
    displayText: "dried apricots",
    knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 2.7 }
  },
  BLUEBERRIES_DRIED: {
    displayText: "dried blueberries",
    knownCost: { quantity: 75, measurement: MEASUREMENTS.GRAM, price: 2.25 }
  },
  CRANBERRIES_DRIED: {
    displayText: "dried cranberries",
    knownCost: { quantity: 75, measurement: MEASUREMENTS.GRAM, price: 1.15 }
  },
  RAISINS: {
    displayText: "raisins",
    knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 1.8 }
  }
};
