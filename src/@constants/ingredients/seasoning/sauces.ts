import { MEASUREMENTS } from "../../measurements";

export const SAUCES: IInventoryIngredientsObject = {
  LIQUID_SMOKE: {
    displayText: "liquid smoke",
    knownCost: {
      quantity: 475,
      measurement: MEASUREMENTS.MILLILITRE,
      price: 6.7
    }
  },
  SOY_SAUCE: {
    displayText: "soy sauce",
    knownCost: {
      quantity: 150,
      measurement: MEASUREMENTS.MILLILITRE,
      price: 0.7
    }
  },
  KETCHUP_TOMATO: {
    displayText: "tomato ketchup",
    knownCost: { quantity: 570, measurement: MEASUREMENTS.GRAM, price: 2 }
  },
  SRIRACHA: {
    displayText: "sriracha",
    knownCost: {
      quantity: 455,
      measurement: MEASUREMENTS.MILLILITRE,
      price: 3.1
    }
  },
  SWEET_CHILLI_SAUCE: {
    displayText: "sweet chilli sauce",
    knownCost: { quantity: 230, measurement: MEASUREMENTS.GRAM, price: 1.5 }
  }
};
