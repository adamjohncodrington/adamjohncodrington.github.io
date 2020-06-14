import { MEASUREMENTS } from "../../measurements";

export const SYRUPS = {
  LEMON_EXTRACT: {
    displayText: "lemon extract",
    cost: { quantity: 38, measurement: MEASUREMENTS.MILLILITRE, price: 1.5 }
  },
  NECTAR_AGAVE: {
    displayText: "agave nectar",
    cost: { quantity: 250, measurement: MEASUREMENTS.MILLILITRE, price: 4 }
  },
  SYRUP_GOLDEN: {
    displayText: "golden syrup",
    cost: { quantity: 600, measurement: MEASUREMENTS.GRAM, price: 1.9 }
  },
  VANILLA_EXTRACT: {
    displayText: "vanilla extract",
    cost: { quantity: 35, measurement: MEASUREMENTS.MILLILITRE, price: 1.3 }
  }
};
