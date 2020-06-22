import { MEASUREMENTS } from "../../measurements";

export const VINEGARS: IInventoryIngredients = {
  VINEGAR_BALSAMIC: {
    displayText: "balsamic vinegar",
    cost: { quantity: 250, measurement: MEASUREMENTS.MILLILITRE, price: 2 }
  },
  VINEGAR_CIDER: {
    displayText: "cider vinegar",
    cost: { quantity: 350, measurement: MEASUREMENTS.MILLILITRE, price: 1.6 }
  },
  VINEGAR_WHITE_WINE: {
    displayText: "white wine vinegar",
    cost: { quantity: 350, measurement: MEASUREMENTS.MILLILITRE, price: 1.6 }
  }
};
