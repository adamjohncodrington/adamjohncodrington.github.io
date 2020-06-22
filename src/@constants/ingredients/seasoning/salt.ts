import { MEASUREMENTS } from "../../measurements";

export const SALT: IInventoryIngredients = {
  SALT_BLACK: {
    displayText: "black salt (kala namak)",
    cost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 2.9 }
  },
  SALT_TABLE: {
    displayText: "table salt",
    cost: { price: 0 }
  },
  SALT_ROCK_FRESH: {
    displayText: "freshly ground rock salt",
    cost: { price: 0 }
  }
};
