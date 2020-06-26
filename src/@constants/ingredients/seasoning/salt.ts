import { MEASUREMENTS } from "../../measurements";

export const SALT: IInventoryIngredientsObject = {
  SALT_BLACK: {
    displayText: "black salt (kala namak)",
    knownCost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 2.9 }
  },
  SALT_TABLE: {
    displayText: "table salt",
    knownCost: { price: 0 }
  },
  SALT_ROCK_FRESH: {
    displayText: "freshly ground rock salt",
    knownCost: { price: 0 }
  }
};
