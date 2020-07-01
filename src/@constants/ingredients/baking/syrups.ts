import { MEASUREMENTS } from "../../measurements";

export const SYRUPS: ISyrups = {
  LEMON_EXTRACT: {
    displayText: "lemon extract",
    knownCost: {
      quantity: 38,
      measurement: MEASUREMENTS.MILLILITRE,
      price: 1.5
    }
  },
  NECTAR_AGAVE: {
    displayText: "agave nectar",
    knownCost: { quantity: 250, measurement: MEASUREMENTS.MILLILITRE, price: 4 }
  },
  SYRUP_GOLDEN: {
    displayText: "golden syrup",
    knownCost: { quantity: 600, measurement: MEASUREMENTS.GRAM, price: 1.9 }
  },
  VANILLA_EXTRACT: {
    displayText: "vanilla extract",
    knownCost: {
      quantity: 35,
      measurement: MEASUREMENTS.MILLILITRE,
      price: 1.3
    }
  }
};
