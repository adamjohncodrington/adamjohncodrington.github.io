import * as MEASUREMENTS from "../../measurements";

export const OILS: IOils = {
  OIL_OLIVE: {
    displayText: "olive oil",
    knownCost: { quantity: 500, measurement: MEASUREMENTS.MILLILITRE, price: 3 }
  },
  OIL_SUNFLOWER: {
    displayText: "sunflower oil",
    knownCost: {
      quantity: 1000,
      measurement: MEASUREMENTS.MILLILITRE,
      price: 1.2
    }
  }
};
