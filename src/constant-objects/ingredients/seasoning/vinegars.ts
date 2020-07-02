import { MEASUREMENTS } from "../../measurements";

export const VINEGARS: IVinegars = {
  VINEGAR_BALSAMIC: {
    displayText: "balsamic vinegar",
    knownCost: { quantity: 250, measurement: MEASUREMENTS.MILLILITRE, price: 2 }
  },
  VINEGAR_CIDER: {
    displayText: "cider vinegar",
    knownCost: {
      quantity: 350,
      measurement: MEASUREMENTS.MILLILITRE,
      price: 1.6
    }
  },
  VINEGAR_WHITE_WINE: {
    displayText: "white wine vinegar",
    knownCost: {
      quantity: 350,
      measurement: MEASUREMENTS.MILLILITRE,
      price: 1.6
    }
  }
};
