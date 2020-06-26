import { MEASUREMENTS } from "../../measurements";

export const FLOUR: IInventoryIngredientsObject = {
  CORNFLOUR: {
    displayText: "cornflour",
    knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 1.3 }
  },
  FLOUR_PLAIN: {
    displayText: "plain flour",
    knownCost: {
      quantity: 1.5,
      measurement: MEASUREMENTS.KILOGRAM,
      price: 0.75
    }
  },
  FLOUR_SELF_RAISING: {
    displayText: "self-raising flour",
    knownCost: {
      quantity: 1.5,
      measurement: MEASUREMENTS.KILOGRAM,
      price: 0.75
    }
  }
};
